
export const HeroData = {
  title: "Career Progress, Aligned",
  sub_title: "Aligning opportunities, signals, and decisions",
  description:"Creating Seamless Yield across the hiring system",
button_text: "Unlock Connect EC for Free",
  button_link: "https://play.google.com/store/apps/details?id=com.primethic.connectec",

};


export const signalFlowData = {
  title: "The Changing Situation",

  centerImage: "/candidate/candidate-situation-changes-during-hiring-process.svg",
  centerText: "A candidate’s situation rarely stays constant during hiring process",

  flowData: [
    {
      text: "As the situation changes, alignment begins to break.",
    },
    {
      text: "And small moments of hesitation begin to appear.",
    },
    
  ],

  leftCards: [
    {
      icon: "/candidate/icons/multiple-calls-icon.svg",
      text: "Multiple calls.",
      top: "6%",
      mobile_top:"5%",
      left: "3%",
      mobile_left:"3%"
    },
    {
      icon: "/candidate/icons/multiple-interviews-icon.svg",
      text: "Multiple interviews.",
      top: "40%",
      mobile_top:"35%",
      left: "8%",
      mobile_left:"3%"
    },
    {
      icon: "/candidate/icons/multiple-opportunities-icon.svg",
      text: "Multiple opportunities.",
      top: "75%",
      mobile_top:"65%",
      left: "13%",
      mobile_left:"3%"
    },
  ],

  rightCards: [
    {
      icon: "/candidate/icons/schedules-overlap-icon.svg",
      text: "Schedules overlap.",
      top: "6%",
      mobile_top:"5%",
      right: "3%",
      mobile_right:"3%"
    },
    {
      icon: "/candidate/icons/priorities-shift-icon.svg",
      text: "Priorities shift.",
      top: "40%",
      mobile_top:"35%",
      right: "8%",
      mobile_right:"3%"
    },
    {
      icon: "/candidate/icons/decisions-evolve-icon.svg",
      text: "Decisions evolve.",
      top: "75%",
      mobile_top:"65%",
      right: "13%",
      mobile_right:"3%"
    },
  ],
};

export const bannerSectionData = {


  cards: [
    {
      text: "How do I decline this interview without damaging the relationship?",
    },
   {
      text: "Is this opportunity truly aligned with what I’m looking for?",
    },{
      text:"Am I making the right decision — or missing a better opportunity?"
    }
  ],
};

export const insightComparisonPages = [
  {
    id: 1,
    header: {
      title: "Interview Coordination",
      label: "Seam: Candidate ↔ Recruiter",
      description:
        "Interview coordination happens across emails, calendars, and messages. Schedules fragment across tools, making it harder to respond clearly.",
      icon: "/candidate/icons/interview-coordination-icon.svg",
    },
    cards: [
      {
        title: "Candidate Reality",
        data: (
          <>

          <p className="mt-md text-xl font-medium">
              Interview coordination exists, but response clarity remains uncertain across interactions
            </p>

            <div className="space-y-sm mt-md">
              {[
                "Candidates hesitate to respond",
                "Declining feels risky",
                "Messages are ignored or delayed",
                "Coordination becomes uncertain",
                "Responses are delayed due unclear context",
                "Candidates lose track of commitments",
              ].map((point, index) => (
                <div key={index} className="flex items-start gap-xs">
                  <img
                    src="/icons/question-round-icon.svg"
                    alt="question icon"
                    className="size-iconsize-sm p-[0.1%]"
                  />
                  <p className="text-xl font-medium">{point}</p>
                </div>
              ))}
            </div>


          </>
        ),
      },
      {
        title: "Candidate Friction",
        data: (
          <>
           <p className="mt-md text-xl font-medium">
              Fragmented coordination across channels creates hesitation and delays in responses
            </p>

            <div className="space-y-sm mt-md">
              {[
                "Invitations spread across channels",
                "Calendar updates across tools",
                "Multiple recruiters coordinating",
                "Reschedules arrive separately",
                "No single view of interview schedules",
                "Communication threads remain disconnected"
              ].map((point, index) => (
                <div key={index} className="flex items-start gap-xs">
                  <img
                    src="/icons/info-round-icon.svg"
                    alt="info icon"
                    className="size-iconsize-sm p-[0.1%]"
                  />
                  <p className="text-xl font-medium">{point}</p>
                </div>
              ))}
            </div>
          </>
        ),
      },
      {
        title: "Connect EC Resolution",
        data: (
          <>
          
            <p className="mt-md text-xl font-medium">
              Centralized coordination restores clarity and enables timely candidate responses
            </p>

            <div className="space-y-sm mt-md">
              {[
                "All schedules in one place",
                "Accept, decline, or reschedule easily",
                "Coordination becomes visible",
                "Responses become clear",
                "Real-time updates keep schedules aligned",
                "Communication flows through one channel"
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-xs">
                  <img
                    src="/icons/tick-gradient-icon.svg"
                    alt="tick icon"
                    className="size-iconsize-sm p-[0.1%]"
                  />
                  <p className="text-xl font-medium">{item}</p>
                </div>
              ))}
            </div>
          </>
        ),
      },
    ],
  },

  {
    id: 2,
    header: {
      title: "Employer Insight",
      label: "Seam: Candidate ↔ Employer",
      description:
        "Employer reviews and interview experiences online are often anonymous or outdated. Candidates struggle to identify reliable insights.",
      icon: "/candidate/icons/employer-insight-icon.svg",
    },
    cards: [
      {
        title: "Candidate Reality",
        data: (
          <>
            <p className="mt-md text-xl font-medium">Information exists across sources, but reliability remains unclear for candidates</p>

            <div className="space-y-sm mt-md">
              {[
                "Information feels unreliable",
                "Preparation becomes unclear",
                "Confidence drops before interviews",
                "Decisions lack grounding",
                "Candidates question source credibility",
                "Preparation varies across opportunities"
              ].map((point, index) => (
                <div key={index} className="flex items-start gap-xs">
                  <img
                    src="/icons/question-round-icon.svg"
                    alt="question icon"
                    className="size-iconsize-sm p-[0.1%]"
                  />
                  <p className="text-xl font-medium">{point}</p>
                </div>
              ))}
            </div>


          </>
        ),
      },
      {
        title: "Candidate Friction",
        data: (
          <>
            <p className="mt-md text-xl font-medium">
              Unreliable and fragmented information creates doubt and weakens preparation 
              </p>

            <div className="space-y-sm mt-md">
              {[
                "Anonymous reviews",
                "Outdated experiences",
                "Unverified hiring claims",
                "Manipulated or biased signals",
                "Too many conflicting opinions",
                "Lack of context around experiences",
              ].map((point, index) => (
                <div key={index} className="flex items-start gap-xs">
                  <img
                    src="/icons/info-round-icon.svg"
                    alt="round icon"
                    className="size-iconsize-sm p-[0.1%]"
                  />
                  <p className="text-xl font-medium">{point}</p>
                </div>
              ))}
            </div>
          </>
        ),
      },
      {
        title: "Connect EC Resolution",
        data: (
          <>
          <p className="mt-md text-xl font-medium">
             Verified insight signals restore trust and enable confident preparation and decisions
            </p>
            <div className="space-y-sm mt-md">
              {[
                "Verified candidate insights",
                "Real experiences, real signals",
                "Preparation becomes clearer",
                "Decisions become informed",
                "Insights are linked to actual schedules",
                "Context makes signals easier to interpret"
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-xs">
                  <img
                    src="/icons/tick-gradient-icon.svg"
                    alt="tick icon"
                    className="size-iconsize-sm p-[0.1%]"
                  />
                  <p className="text-xl font-medium">{item}</p>
                </div>
              ))}
            </div>

          </>
        ),
      },
    ],
  },

  {
    id: 3,
    header: {
      title: "Interview Feedback",
      label: "Seam: Candidate ↔ Recruiter",
      description:
        "After interviews, signals often disappear between stages. Feedback is expected but rarely delivered. Candidates are left waiting without visibility.",
      icon: "/candidate/icons/interview-feedback-icon.svg",
    },
    cards: [
      {
        title: "Candidate Reality",
        data: (
          <>
          <p className="mt-md text-xl font-medium">
              Interview outcomes exist, but feedback remains unclear across hiring stages
            </p>

            <div className="space-y-sm mt-md">
              {[
                "Candidates question outcomes",
                "Silence creates uncertainty",
                "Confidence declines",
                "Career momentum slows",
                "Candidates replay interviews without clarity",
                "Decisions about next steps get delayed"
              ].map((point, index) => (
                <div key={index} className="flex items-start gap-xs">
                  <img
                    src="/icons/question-round-icon.svg"
                    alt="question icon"
                    className="size-iconsize-sm p-[0.1%]"
                  />
                  <p className="text-xl font-medium">{point}</p>
                </div>
              ))}
            </div>
          </>
        ),
      },
      {
        title: "Candidate Friction",
        data: (
          <>
            <p className="mt-md text-xl font-medium">
              Lack of feedback visibility creates uncertainty and slows candidate momentum
            </p>

            <div className="space-y-sm mt-md">
            {[
  "Multiple interviews across companies",
  "Different stages across roles",
  "Feedback is rarely delivered",
  "Limited visibility into progress",
  "Status updates remain unclear",
  "Follow-ups do not lead to clarity"
].map((point, index) => (
  <div key={index} className="flex items-start gap-xs">
    <img
                    src="/icons/info-round-icon.svg"
                    alt="info icon"
                    className="size-iconsize-sm p-[0.1%]"
                  />
    <p className="text-xl font-medium">{point}</p>
  </div>
))}
            </div>
          </>
        ),
      },
      {
        title: "Connect EC Resolution",
        data: (
          <>
            <p className="mt-md text-xl font-medium">
              Visible feedback signals restore clarity and enable continuous career progress
            </p>

            <div className="space-y-sm mt-md">
              {[
                "Feedback signals become visible",
                "Candidates know where they stand",
                "Clarity replaces silence",
                "Momentum continues",
                "Continuous updates reduce uncertainty",
                "Signals guide next career steps",
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-xs">
                  <img
                    src="/icons/tick-gradient-icon.svg"
                    alt="tick icon"
                    className="size-iconsize-sm p-[0.1%]"
                  />
                  <p className="text-xl font-medium">{item}</p>
                </div>
              ))}
            </div>
          </>
        ),
      },
    ],
  },

  {
    id: 4,
    header: {
      title: "Offer Communication",
      label: "Seam: Candidate ↔ Employer",
      description:
        "Offer discussions, timelines, and negotiations often happen across scattered conversations. Candidates struggle to respond clearly ",
      icon: "/candidate/icons/offer-communication-icon.svg",
    },
    cards: [
      {
        title: "Candidate Reality",
        data: (
          <>
          <p className="mt-md text-xl font-medium">
              Offer decisions exist, but responding clearly remains stressful and uncertain
            </p>
            <div className="space-y-sm mt-md">
              {[
                "Candidates hesitate to respond",
                "Reputation concerns increase",
                "Decisions feel stressful",
                "Delays replace clear decisions",
                "Candidates avoid difficult conversations",
                "Decision-making becomes emotionally heavy",
              ].map((point, index) => (
                <div key={index} className="flex items-start gap-xs">
                  <img
                    src="/icons/question-round-icon.svg"
                    alt="question icon"
                    className="size-iconsize-sm p-[0.1%]"
                  />
                  <p className="text-xl font-medium">{point}</p>
                </div>
              ))}
            </div>
          </>
        ),
      },
      {
        title: "Candidate Friction",
        data: (
          <>
          <p className="mt-md text-xl font-medium">
              Competing offers and pressure create hesitation & delay decision communication
            </p>

            <div className="space-y-sm mt-md">
              {[
                "Multiple offers with different timelines",
                "Pressure for quick decisions",
                "Competing expectations",
                "Declining feels uncomfortable",
                "No structured way to compare offers",
                "Communication lacks clarity across teams",
              ].map((point, index) => (
                <div key={index} className="flex items-start gap-xs">
                  <img
                    src="/icons/info-round-icon.svg"
                    alt="info icon"
                    className="size-iconsize-sm p-[0.1%]"
                  />
                  <p className="text-xl font-medium">{point}</p>
                </div>
              ))}
            </div>
          </>
        ),
      },
      {
        title: "Connect EC Resolution",
        data: (
          <>
            <p className="mt-md text-xl font-medium">
              Structured decision flow enables clear communication & confident offer decisions
            </p>


            <div className="space-y-sm mt-md">
              {[
                "All offers in one place",
                "Accept, decline, or evaluate offers",
                "Decisions become visible",
                "Communication stays professional",
                "Structured decision flow reduces hesitation",
                'Clear options simplify communication flow'
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-xs">
                  <img
                    src="/icons/tick-gradient-icon.svg"
                    alt="tick icon"
                    className="size-iconsize-sm p-[0.1%]"
                  />
                  <p className="text-xl font-medium">{item}</p>
                </div>
              ))}
            </div>
          </>
        ),
      },
    ],
  },
];


export const workflowAlignmentSectionData = {
  title: "The Candidate Alignment System",
  subtitle: "Every candidate moves through key moments in the hiring journey.",
  footerText: "Each moment generates signals that shape hiring outcomes.",

  steps: [
    { id: 1, text: "Attending multiple interviews" },
    { id: 2, text: "Understanding different employers" },
    { id: 3, text: "Receiving interview feedback" },
    { id: 4, text: "Making informed career decisions" },
  ],

  leftPanel: {
    title:
      "Connect EC brings these moments together into a single, aligned system.",
    subtitle: "From Experience to Alignment Signals",
    signals: [
      "Employer insight Signals",
      "Feedback visibility Signals",
      "Offer decision Signals",
    ],
    description:
      "A unified behavioral system that enables candidates to interpret signals clearly and move forward with confidence.",
  },

  rightPanel: {
    title:
      "When attendance, insight, feedback, and decisions remain aligned:",
    subtitle: "Alignment Builds Decision Confidence",
    signals: [
      "Preparation improves",
      "Communication remains clear",
      "Decisions become confident",
    ],
    description:
      "Every interaction generates Alignment Signals, enabling timely intervention and strengthening clarity across the hiring journey.",
  },
};

export const outcomeHighlightData = {
  title: "Confidence Creates Momentum",
  subtitle:
    "When opportunities, signals, and decisions align, candidates move forward with clarity.",
  points: [
    "Interviews become meaningful conversations.",
    "Feedback becomes visible.",
    "Offer decisions become confident choices.",
  ],
  description: "Career progress accelerates.",
  footerText: "This is",
  footerHighlight: "Seamless Yield",
  footerSuffix: "for candidates.",
  bottomTitle: "EASY -",
  bottomHighlight: "Everyone Achieves Seamless Yield.",
  image: {
    src: "/clear-hiring-signal-and-aligned-outcomes.svg",
    alt: "Clear hiring signal enabling aligned outcomes across candidates, recruiters, and employers",
    width: 520,
    height: 420,
  },
};

export const candidateFaqs= [
  {
    question: "How is Connect EC different from other job platforms?",
    points: [
      "Goes beyond job applications",
      "Covers from the interview to offer stages",
      "Keeps progress visible at every step",
      "Reduces uncertainty across decisions",
    ],
  },
  {
    question: "Do I have to pay to use Connect EC?",
    points: [
      "Free for all candidates",
      "No hidden charges",
      "No indirect costs",
      "Full access without restrictions",
    ],
  },
  {
    question: "How does Connect EC reduce uncertainty?",
    points: [
      "Clear interview schedules and timelines",
      "Timely updates across stages",
      "Visibility into application progress",
      "Fewer gaps between interactions",
    ],
  },
  {
    question: "How do I get started?",
    points: [
      "Download the app",
      "Create your profile",
      "Start applying or engaging",
      "Track all updates in one place",
    ],
  },
  {
    question: "Is my personal data safe?",
    points: [
      "Data is securely encrypted",
      "Shared only with relevant stakeholders",
      "Access is permission-controlled",
      "Privacy is maintained across interactions",
    ],
  },
];
