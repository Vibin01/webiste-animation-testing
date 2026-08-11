"use server";

import prisma from "@/lib/db/prisma";
import { verifySession } from "@/lib/security/tokens";
import { Role } from "@prisma/client";
import { AnswerRecord, buildOverallReport } from "@/domain/assessment/report-builder";

type Mode = "single" | "full";

export async function getAssessmentStatusAction(role: Role) {
  try {
    const userId = await verifySession();

    if (!userId) {
      return {
        error: "Unauthorized",
      };
    }

    const journey =
      await prisma.assessmentJourney.findFirst({
        where: {
          userId,
          role,
        },
        include: {
          phaseAttempts: true,
          overallReport: true,
        },
      });

    if (!journey) {
      return {
        success: true,
        completedPhases: [],
        phaseReports: {},
        overallReport: null,
      };
    }

    const completedPhases: string[] =
      journey.phaseAttempts
        .filter(
          (item) =>
            item.status === "COMPLETED"
        )
        .map(
          (item) =>
            item.phaseKey
        );

    const phaseReports: Record<string, any> =
      Object.fromEntries(
        journey.phaseAttempts
          .filter(
            (item) =>
              item.status === "COMPLETED"
          )
          .map((item) => [
            item.phaseKey,
            item.reportJson,
          ])
      );

    return {
      success: true,
      journeyId: journey.id,
      completedPhases,
      phaseReports,
      overallReport:
        journey.overallReport
          ?.reportJson || null,
    };

  } catch (error) {
    console.error(
      "GET ASSESSMENT STATUS ERROR:",
      error
    );

    return {
      error: "Something went wrong while fetching assessment status.",
    };
  }
}

export async function startAssessmentJourneyAction({
  role,
  mode,
}: {
  role: Role;
  mode: Mode;
}) {
  const userId = await verifySession();

  if (!userId) {
    return { error: "Unauthorized" };
  }

  let journey = await prisma.assessmentJourney.findFirst({
  where: {
    userId,
    role,
  },
});

  if (!journey) {
    journey =
      await prisma.assessmentJourney.create({
        data: {
          userId,
          role,
          mode,
        },
      });
  }

  return {
    success: true,
    journeyId: journey.id,
  };
}

export async function completeAssessmentAction({
  journeyId,
  phase,
  answers,
  report,
}: {
  journeyId: number | bigint;
  phase?: string;
  answers: AnswerRecord[];
  report: any;
}) {
  const userId = await verifySession();

  if (!userId) {
    return { error: "Unauthorized" };
  }

  // phase report
if (
  report.type === "phase" &&
  phase
) {
  const result = report.result;

  await prisma.phaseAttempt.upsert({
    where: {
      journeyId_phaseKey: {
        journeyId,
        phaseKey: phase,
      },
    },

    create: {
      journeyId,
      phaseKey: phase,

      status: "COMPLETED",

      responsesJson: answers,

      dominantTendency:
        result.dominantTendency,

      secondaryTendency:
        result.secondaryTendency,

      dominanceRatio:
        result.dominanceRatio,

      percentage:
        result.percentage,

      band:
        result.band,

      mode:
        result.mode,

      reportJson:
        report,

      submittedAt:
        new Date(),
    },

    update: {
      status: "COMPLETED",

      responsesJson:
        answers,

      reportJson:
        report,

      submittedAt:
        new Date(),
    },
  });

  // Check all completed phases
  const completedPhases =
    await prisma.phaseAttempt.findMany({
      where: {
        journeyId,
        status: "COMPLETED",
      },
    });

  // All 5 phases completed
  if (completedPhases.length === 5) {
    const existingOverall =
      await prisma.overallReport.findUnique({
        where: {
          journeyId,
        },
      });

    // Prevent duplicate overall report
    if (!existingOverall) {
      const allAnswers =
        completedPhases.flatMap(
          (item) =>
            (item.responsesJson as AnswerRecord[]) || []
        );

      const journey =
        await prisma.assessmentJourney.findUnique({
          where: {
            id: journeyId,
          },
          select: {
            role: true,
          },
        });

      if (journey) {
        const overallReport =
          buildOverallReport(
            journey.role.toLowerCase() as Role,
            allAnswers
          );

        await prisma.overallReport.create({
          data: {
            journeyId,

            templateVersion: "v1",

            scoresJson:
              overallReport.overall,

            dominantTendency:
              overallReport.overall
                .dominantTendency,

            secondaryTendency:
              overallReport.overall
                .secondaryTendency,

            dominanceRatio:
              overallReport.overall
                .dominanceRatio,

            percentage:
              overallReport.overall
                .percentage,

            band:
              overallReport.overall.band,

            mode:
              overallReport.overall.mode,

            patternVectorJson: {},

            alignmentHealthJson:
              overallReport.health,

            phaseSummaryJson:
              overallReport.phaseResults,

            reportJson:
              overallReport,
          },
        });

        await prisma.assessmentJourney.update({
          where: {
            id: journeyId,
          },

          data: {
            status: "COMPLETED",
            completedAt: new Date(),
          },
        });
      }
    }
  }

  return {
    success: true,
  };
}

  // overall report
  if (
    report.type === "overall"
  ) {
    const result =
      report.overall;

    await prisma.overallReport.upsert({
      where: {
        journeyId,
      },

      create: {
        journeyId,

        templateVersion:
          report.templateVersion || "v1",

        scoresJson:
          result,

        dominantTendency:
          result.dominantTendency,

        secondaryTendency:
          result.secondaryTendency,

        dominanceRatio:
          result.dominanceRatio,

        percentage:
          result.percentage,

        band:
          result.band,

        mode:
          result.mode,

        patternVectorJson:
          report.patternVector ||
          {},

        alignmentHealthJson:
          report.health,

        phaseSummaryJson:
          report.phaseResults,

        reportJson:
          report,
      },

      update: {
        scoresJson:
          result,

        reportJson:
          report,

        alignmentHealthJson:
          report.health,

        phaseSummaryJson:
          report.phaseResults,
      },
    });

    await prisma.assessmentJourney.update({
      where: {
        id: journeyId,
      },

      data: {
        status:
          "COMPLETED",

        completedAt:
          new Date(),
      },
    });
  }

  return {
    success: true,
  };
}

export async function getReportAction({
  role,
  mode,
  phase,
}: {
  role: Role;
  mode: Mode;
  phase?: string;
}) {
  const userId = await verifySession();

  if (!userId) {
    return { error: "Unauthorized" };
  }

  const user = await prisma.user.findUnique({
    where: { id: userId },
    select: {
      name: true,
      email: true,
      role: true,
    },
  });

  const status = await getAssessmentStatusAction(role);

  if (status.error) {
    return status;
  }

  if (mode === "single" && phase) {
    return {
      success: true,
      report: (status.phaseReports as Record<string, any>)?.[phase] || null,
      user, // ✅ important
    };
  }

  return {
    success: true,
    report: status.overallReport || null,
    user, // ✅ important
  };
}