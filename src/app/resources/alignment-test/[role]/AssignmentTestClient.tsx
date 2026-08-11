"use client";

import { useCallback, useEffect, useMemo, useState, useTransition } from "react";
import { ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";

import { candidateQuestions } from "@/content/questions/candidate";
import { recruiterQuestions } from "@/content/questions/recruiter";
import { employerQuestions } from "@/content/questions/employer";

import {
  AnswerRecord,
  buildOverallReport,
  buildPhaseReport,
} from "@/domain/assessment/report-builder";

import {
  completeAssessmentAction,
  getAssessmentStatusAction,
  startAssessmentJourneyAction,
} from "@/server/actions/assignment-action";
import Image from "next/image";

type Role = "candidate" | "recruiter" | "employer";
type Mode = "single" | "full";

const phases = [
  {
    key: "uncertainty",
    label: "Uncertainty",
    inactiveIcon: "/resources/alignment-test/uncertainty-inactive-icon.svg",
    title: "Uncertainty: When Things Aren’t Clearly Defined",
    desc: "Tests how you respond when clarity, feedback, or direction is missing.",
  },
  {
    key: "pressure",
    label: "Pressure",
    inactiveIcon: "/resources/alignment-test/pressure-inactive-icon.svg",
    title: "Pressure: When Time and Stakes Increase",
    desc: "Tests how your decisions hold when urgency and expectations increase.",
  },
  {
    key: "control",
    label: "Control",
    inactiveIcon: "/resources/alignment-test/control-inactive-icon.svg",
    title: "Control: When You Don't Fully Control the Outcome",
    desc: "Tests how you respond when control is limited and shared.",
  },
  {
    key: "perception",
    label: "Perception",
    inactiveIcon: "/resources/alignment-test/perception-inactive-icon.svg",
    title: "Perception: When Interpretation Shapes Reality",
    desc: "Tests how perception and signals influence your decisions.",
  },
  {
    key: "outcome",
    label: "Outcome",
    inactiveIcon: "/resources/alignment-test/outcome-inactive-icon.svg",
    title: "Outcome: When Results Are Evaluated",
    desc: "Tests how you handle decisions, commitment, and post-outcome uncertainty.",
  },
] as const;

const questionMap = {
  candidate: candidateQuestions,
  recruiter: recruiterQuestions,
  employer: employerQuestions,
};

function mergeUniqueAnswers(answers: AnswerRecord[]) {
  const map = new Map<string, AnswerRecord>();

  for (const answer of answers) {
    map.set(answer.questionId, answer);
  }

  return Array.from(map.values());
}

export default function AssessmentTestClient({
  role,
  mode,
  phase,
}: {
  role: Role;
  mode: Mode;
  phase: string;
}) {
  const router = useRouter();

  // time stamp

  const [pageLoadStart] = useState(() => performance.now());
  const [pageLoadTime, setPageLoadTime] = useState<number | null>(null);
  const [submitTime, setSubmitTime] = useState<number | null>(null);

  const [isProcessing, setIsProcessing] = useState(false);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const [journeyId, setJourneyId] = useState< bigint | number | null>(null);
  const [completedPhases, setCompletedPhases] = useState<string[]>([]);
  const [phaseReports, setPhaseReports] = useState<Record<string, any>>({});

  const [phaseIndex, setPhaseIndex] = useState(0);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<string | null>("");
  const [answers, setAnswers] = useState<AnswerRecord[]>([]);

  const [isPending, startTransition] = useTransition();

  const [isMobile, setIsMobile] = useState(false);

useEffect(() => {
  const check = () => setIsMobile(window.innerWidth < 768);
  check();

  window.addEventListener("resize", check);
  return () => window.removeEventListener("resize", check);
}, []);




const handleOptionChange = useCallback((key: string) => {
  setSelectedOption(key);
}, []);

  useEffect(() => {
    async function init() {
      // time stamp
      const start = performance.now();
      setLoading(true);

      const [status, journey] = await Promise.all([
        getAssessmentStatusAction(role as any),
        startAssessmentJourneyAction({
          role: role as any,
          mode,
        }),
      ]);
      if (status.success) {
        const reports = (status.phaseReports || {}) as Record<string, any>;

        setCompletedPhases((status.completedPhases || []) as string[]);
        setPhaseReports(reports);

        if (
          mode === "single" &&
          (status.completedPhases as string[])?.includes(phase)
        ) {
          router.replace(
            `/resources/alignment-test/${role}/report?mode=single&phase=${phase}`,
          );
          return;
        }

        if (mode === "full" && status.overallReport) {
          router.replace(`/resources/alignment-test/${role}/report?mode=full`);
          return;
        }
      }

      if (journey.success) {
        setJourneyId(journey.journeyId);
      }

      setAnswers([]);
      setQuestionIndex(0);

      const selectedPhaseIndex = phases.findIndex((item) => item.key === phase);

      setPhaseIndex(selectedPhaseIndex >= 0 ? selectedPhaseIndex : 0);

      setLoading(false);

      // time stamp
      const end = performance.now();
      const duration = (end - start) / 1000;

      setPageLoadTime(duration);

      // console.log("Assessment Page Load Time:", duration.toFixed(2), "seconds");
    }

    init();
  }, [role, mode, phase, router]);

  const availablePhases = useMemo(() => {
    if (mode === "full") {
      return phases.filter((item) => !completedPhases.includes(item.key));
    }

    return phases;
  }, [mode, completedPhases]);

  useEffect(() => {
    if (mode === "full" && availablePhases.length === 0) {
      if (phaseReports && Object.keys(phaseReports).length >= 5) {
        router.replace(`/resources/alignment-test/${role}/report?mode=full`);
      } else {
        router.replace(`/resources/alignment-test/${role}?mode=full`);
      }
    }
  }, [mode, availablePhases, phaseReports, role, router]);

  const currentPhase =
    availablePhases[Math.min(phaseIndex, availablePhases.length - 1)];

  const questions = useMemo(() => {
    if (!currentPhase) return [];
    return questionMap[role].filter((q) => q.phase === currentPhase.key);
  }, [role, currentPhase]);

  const currentQuestion = useMemo(
  () => questions[questionIndex],
  [questions, questionIndex]
);

useEffect(() => {
  if (!currentQuestion) return;

  const allAnswers = [
    ...answers,
    ...Object.values(phaseReports).flatMap(
      (report: any) => report?.answers || []
    ),
  ];

  const existingAnswer = allAnswers.find(
    (a) => a.questionId === currentQuestion.id
  );

  setSelectedOption(existingAnswer?.selectedOption || "");
}, [currentQuestion, answers, phaseReports]);
  const isFirstQuestion = questionIndex === 0;
  const isLastQuestion = questionIndex === questions.length - 1;
  const isLastPhase = phaseIndex === availablePhases.length - 1;

  const showBackButton =
    mode === "single" ? questionIndex > 0 : questionIndex > 0 || phaseIndex > 0;

  const isSubmitButton =
    mode === "single" ? isLastQuestion : isLastQuestion && isLastPhase;

  const buttonText = isSubmitButton ? "Get Result" : "Next";

    const options = useMemo(() => {
  return Object.entries(currentQuestion.options);
}, [currentQuestion]);

const visibleItems = useMemo(() => {
  if (!isMobile) return availablePhases; // desktop → show all

  const startIndex = Math.max(
    0,
    Math.min(phaseIndex - 1, availablePhases.length - 3),
  );

  return availablePhases.slice(startIndex, startIndex + 3);
}, [isMobile, availablePhases, phaseIndex]);



  if (loading) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center text-xl font-bold">
        Loading assessment...
      </div>
    );
  }

  if (!currentPhase || !currentQuestion) {
    return (
      <div className="flex min-h-[60vh] flex-col items-center justify-center gap-sm">
        <p className="text-xl font-bold">No remaining phases found.</p>
        <button
          onClick={() =>
            router.push(`/resources/alignment-test/${role}/report?mode=full`)
          }
          className="rounded-md bg-primary px-md py-xs text-white"
        >
          View Overall Report
        </button>
      </div>
    );
  }

const lines = currentQuestion.situation.trim().split("\n");

const situationTitle = lines[0];
const situationQuestion = lines[lines.length - 1];
const situationDescription = lines.slice(1, -1).join("\n");

  const handleBack = () => {
     if (isProcessing) return;

    // Previous question in same phase
    if (questionIndex > 0) {
      const prevQuestionIndex = questionIndex - 1;
      const prevQuestion = questions[prevQuestionIndex];

      const allAnswers = [
        ...answers,
        ...Object.values(phaseReports).flatMap(
          (report: any) => report?.answers || [],
        ),
      ];

      

      const previousAnswer = allAnswers.find(
        (a) => a.questionId === prevQuestion.id,
      );

      setQuestionIndex(prevQuestionIndex);
      setSelectedOption(previousAnswer?.selectedOption || "");

      return;
    }

    // Previous phase
    if (mode === "full" && phaseIndex > 0) {
      const prevPhaseIndex = phaseIndex - 1;
      const prevPhase = availablePhases[prevPhaseIndex];

      const prevQuestions = questionMap[role].filter(
        (q) => q.phase === prevPhase.key,
      );

      const lastQuestion = prevQuestions[prevQuestions.length - 1];

      const allAnswers = [
        ...answers,
        ...Object.values(phaseReports).flatMap(
          (report: any) => report?.answers || [],
        ),
      ];

      const previousAnswer = allAnswers.find(
        (a) => a.questionId === lastQuestion.id,
      );

      setPhaseIndex(prevPhaseIndex);
      setQuestionIndex(prevQuestions.length - 1);
      setSelectedOption(previousAnswer?.selectedOption || "");

      return;
    }
  };

  const handleNext = async () => {

    if (isProcessing) return;

  setIsProcessing(true);
  try{
    if (!selectedOption) {
      setError("Please select an option before continuing.");
      return;
    }

    if (!journeyId) {
      setError("Assessment journey not started. Please refresh.");
      return;
    }

    setError("");

    const optionKey = selectedOption as keyof typeof currentQuestion.options;

    const option = currentQuestion.options[optionKey];
    // console.log(currentQuestion);
    // console.log(currentQuestion.id);
    // console.log(candidateQuestions[0])

    const newAnswer: AnswerRecord = {
      role,
      questionId: currentQuestion.id,
      phase: currentQuestion.phase,
      selectedOption: optionKey,
      tendency: option.tendency,
      situation: currentQuestion.situation,
      answerText: option.text,
    };

    const updatedAnswers = mergeUniqueAnswers([...answers, newAnswer]);

    setAnswers(updatedAnswers);

    // Move to next question
    if (questionIndex < questions.length - 1) {
      startTransition(() => {
    setQuestionIndex(prev => prev + 1);
});
      return;
    }

   // Move to next phase WITHOUT saving
if (mode === "full" && isLastQuestion && !isLastPhase) {

  const phaseAnswers = updatedAnswers.filter(
    (a) => a.phase === currentPhase.key,
  );

  const phaseReport = buildPhaseReport(role,currentPhase.key, phaseAnswers);

  // Only keep report in React state
 setPhaseReports(prev => ({
    ...prev,
    [currentPhase.key]: {
        ...phaseReport,
        answers: phaseAnswers,
    },
}));

  setPhaseIndex((prev) => prev + 1);
  setQuestionIndex(0);
  setSelectedOption("");

  return;
}

    // SINGLE MODE SUBMIT
    if (mode === "single") {
      // time stamp
      const submitStart = performance.now();
      const report = buildPhaseReport(role,currentPhase.key, updatedAnswers);

      const save = await completeAssessmentAction({
        journeyId,
        phase: currentPhase.key,
        answers: updatedAnswers,
        report,
      });

      // time stamp

      const submitEnd = performance.now();

      const duration = submitEnd - submitStart;

      setSubmitTime(duration);

      // console.log("Single Assessment Submit Time:", duration.toFixed(2), "ms");

      if (save.error) {
        setError(save.error);
        return;
      }

      router.push(
        `/resources/alignment-test/${role}/report?mode=single&phase=${currentPhase.key}`,
      );

      return;
    }

 

const previousAnswers = Object.values(phaseReports).flatMap(
    (report: any) => report.answers || []
);

const currentPhaseAnswers = updatedAnswers.filter(
    (a) => a.phase === currentPhase.key
);

const allAnswers = mergeUniqueAnswers([
    ...previousAnswers,
    ...currentPhaseAnswers,
]);


    // Remove duplicates by questionId
    const uniqueAnswers = Array.from(
      new Map(allAnswers.map((item) => [item.questionId, item])).values(),
    );

    // VALIDATION
    const expectedCount = phases.length * 3;

    // Check total answers
    if (uniqueAnswers.length !== expectedCount) {
      alert(
        `Please answer all questions before submitting.\n\nAnswered: ${uniqueAnswers.length}/${expectedCount}`,
      );

      return;
    }

    // Check phase-wise answers
    const incompletePhases = phases.filter((phase) => {
      const count = uniqueAnswers.filter((a) => a.phase === phase.key).length;

      return count !== 3;
    });

    if (incompletePhases.length > 0) {
      alert(
        `Please complete all questions.\n\nMissing phases:\n${incompletePhases
          .map((p) => p.label)
          .join("\n")}`,
      );

      return;
    }

    // Save every phase AFTER submit
for (const phase of phases) {

  const phaseAnswers = allAnswers.filter(
    (answer) => answer.phase === phase.key
  );

  const phaseReport = buildPhaseReport(
    role,
    phase.key,
    phaseAnswers
  );

  const savePhase = await completeAssessmentAction({
    journeyId,
    phase: phase.key,
    answers: phaseAnswers,
    report: phaseReport,
  });

  if (savePhase.error) {
    setError(savePhase.error);
    return;
  }
}

    // console.log(
    //   "Final Answers Count:",
    //   allAnswers.length
    // );

    const overallReport = buildOverallReport(role, allAnswers);

    //  time stamp

    const finalSubmitStart = performance.now();

    const saveOverall = await completeAssessmentAction({
      journeyId,
      answers: allAnswers,
      report: overallReport,
    });

    if (saveOverall.error) {
      setError(saveOverall.error);
      return;
    }

    //  time stamp
    const finalSubmitEnd = performance.now();

    const duration = finalSubmitEnd - finalSubmitStart;

    setSubmitTime(duration);

    // console.log("Overall Assessment Submit Time:", duration.toFixed(2), "ms");
    router.push(`/resources/alignment-test/${role}/report?mode=full`);
    } catch (error) {
    console.error(error);
    setError("Something went wrong. Please try again.");
  } finally {
    setIsProcessing(false);
  }
  };


const startIndex = isMobile
  ? Math.max(
      0,
      Math.min(phaseIndex - 1, availablePhases.length - 3),
    )
  : 0;


  return (
    <section className="w-full px-[7%] py-[5%]">
      <div className="grid grid-cols-1 items-center gap-xl md:grid-cols-[0.25fr_1fr]">
        <aside className="flex flex-row justify-center gap-xl md:flex-col md:items-center md:justify-start">
          {mode === "single"
            ? questions.map((_, index) => {
                const active = index === questionIndex;
                const completed = index < questionIndex;
                const iconSrc = completed
                  ? "/icons/tick-gradient-icon.svg"
                  : active
                    ? "/icons/question-active-icon.svg"
                    : "/icons/question-inactive-icon.svg";

                return (
                  <div
                    key={index}
                    className="flex flex-col items-center gap-xs"
                  >
                    <div className="flex size-iconsize-lg items-center justify-center">
                      <Image
                        src={iconSrc}
                        alt="status-icon"
                        width={40}
                        height={40}
                        className="size-iconsize-lg object-contain"
                      />
                    </div>
                    <p
                      className={`text-center text-xl font-medium ${
                        active ? "font-bold text-[#1B1C17]" : "text-[#9F9F9F]"
                      } ${completed ? "!text-[#1B1C17]" : ""}`}
                    >
                      Situation {index + 1}
                    </p>
                  </div>
                );
              })
            : visibleItems.map((item) => {

  const actualIndex = availablePhases.findIndex(
    phase => phase.key === item.key
  );

  const active = actualIndex === phaseIndex;
  const completed = actualIndex < phaseIndex;
                const iconSrc = completed
                  ? "/icons/tick-gradient-icon.svg"
                  : active
                    ? "/icons/question-active-icon.svg"
                    : item.inactiveIcon;

                return (
                  <div
                    key={item.key}
                    className="flex flex-col items-center gap-2 "
                  >
                    <div
                      className={`
          flex items-center justify-center
          p-sm rounded-full
          transition-all duration-300
          ${
            active
              ? "bg-[#0668E1] ring-4 ring-[#0668E1]/20"
              : completed
                ? "bg-[#0668E1]/10"
                : "bg-[#F2F2F2]"
          }
        `}
                    >
                      <Image
                        src={iconSrc}
                        alt="status-icon"
                        width={20}
                        height={20}
                        className="object-contain size-iconsize-md"
                      />
                    </div>

                    <p
                      className={`
          text-center text-xs sm:text-sm font-medium whitespace-nowrap
          ${
            active || completed
              ? "text-[#1B1C17] font-semibold"
              : "text-[#9F9F9F]"
          }
        `}
                    >
                      {item.label}
                    </p>
                  </div>
                );
              })}
        </aside>

        <main className="w-full">
          <div className="w-full">
            <div className="flex items-center gap-xs">
              <div>
                <h3 className="text-h5 font-bold text-[#1B1C17]">
                  {currentPhase.title}
                </h3>
                <p className=" text-base font-semibold text-[#4A4A4A]">
                  {currentPhase.desc}
                </p>
              </div>
            </div>

            <div className="mt-sm rounded-sm border border-[#B2D0F6] bg-[#F7FBFF] p-sm text-[12px] md:text-lg font-medium text-[#0668E1]">
              Choose what you would actually do — not what seems ideal.{" "}
              <span className="italic text-[#1B1C17]">
                Your first instinct is usually the most accurate.
              </span>
            </div>

            {error && (
              <p className="mt-sm text-lg font-semibold text-red-500">
                {error}
              </p>
            )}

            <div className="mt-md rounded-md border border-[#DEEDFF] bg-white p-sm shadow-mobile-medium md:shadow-web-medium">
              <h3 className="text-base font-bold text-[#0668E1]">
                {situationTitle}
              </h3>

              <div className="my-sm border-t border-[#BBD7F8]" />

              <p className="whitespace-pre-line text-xl font-medium">
                {situationDescription}
              </p>

              <p className="mt-sm text-xl font-bold">{situationQuestion}</p>

              <div className="mt-md space-y-sm">
                {options.map(
                  ([key, option]) => {
                    const active = selectedOption === key;

                    return (
                      <label
                        key={key}
                        className={`flex w-full cursor-pointer items-start gap-sm rounded-sm border px-4 py-3 text-left text-xl font-medium transition ${
                          active
                            ? "border-[#B2D0F6] text-[#2C2C2C]"
                            : "border-transparent text-[#9F9F9F]"
                        }`}
                      >
                        <input
                          type="radio"
                          name="assessment-option"
                          value={key}
                          checked={active}
                          onChange={() => handleOptionChange(key)}
                          className="size-md shrink-0 mt-1 md:mt-0 accent-[#0668E1]"
                        />

                        <span>
                          {key}. {option.text}
                        </span>
                      </label>
                    );
                  },
                )}
              </div>
            </div>

            {mode === "full" && (
              <div className="mt-md flex gap-sm">
                {questions.map((_, index) => (
                  <span
                    key={index}
                    className={`size-3 rounded-full ${
                      index === questionIndex ? "bg-[#0668E1]" : "bg-[#E5E5E5]"
                    }`}
                  />
                ))}
              </div>
            )}

            <div className="mt-md flex justify-between gap-sm">
              {showBackButton ? (
                <button
                  type="button"
                  onClick={handleBack}
                  className="flex h-[52px] cursor-pointer items-center rounded-[8px] md:rounded-[12px] border border-[#0668E1] px-md text-xl font-medium text-[#0668E1]"
                >
                  Back
                </button>
              ) : (
                <div />
              )}

              <button
                type="button"
                onClick={handleNext}
                disabled={!selectedOption || isProcessing}
                className={`flex h-[52px] cursor-pointer items-center justify-center text-center gap-sm rounded-[8px] md:rounded-[12px] w-[170px] text-xl font-medium text-white
                  ${
                    !selectedOption || isProcessing
                      ? "cursor-not-allowed bg-gray-400"
                      : "bg-[#0668E1] hover:bg-[#0556bc]"
                  }
                  `}
              >
                {isProcessing
  ? isSubmitButton
      ? "Submitting..."
      : "Loading..."
  : buttonText}
                {!isSubmitButton && <ArrowRight size={20} />}
              </button>
            </div>
          </div>
        </main>
      </div>
    </section>
  );
}
