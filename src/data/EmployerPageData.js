
export const HeroData = {
  title: "Hiring Strategy, Aligned",
  sub_title: "Aligning priorities, signals, and outcomes",
  description:"Creating Seamless Yield across the hiring system",
button_text: "Unlock Connect EC for Free",
  button_link: "https://employer.connectec.app/register",

};


export const signalFlowData = {
  title: "The Changing Business Environment",

  centerImage: "/employer/employer-context-shifts-in-hiring-system.svg",
  centerText: "An employer’s context shifts across markets, roles, and decisions",

  flowData: [
    {
      text: "Leaders must continuously adjust direction or risk losing momentum.",
    },
    {
      text: "Small pressures begin to appear.",
    },
    
  ],

  leftCards: [
    {
      icon: "/employer/icons/markets-shift-icon.svg",
      text: "Markets shift",
     top: "6%",
      mobile_top:"5%",
      left: "3%",
      mobile_left:"3%"
    },
    {
      icon: "/employer/icons/priorities-evolve-icon.svg",
      text: "Priorities evolve",
      top: "40%",
      mobile_top:"35%",
      left: "8%",
      mobile_left:"3%"
    },
    {
      icon: "/employer/icons/opportunities-fluctuate-icon.svg",
      text: "Opportunities fluctuate",
      top: "75%",
      mobile_top:"65%",
      left: "13%",
      mobile_left:"3%"
    },
  ],

  rightCards: [
    {
      icon: "/employer/icons/roles-open-across-teams-icon.svg",
      text: "Roles open across teams",
      top: "6%",
      mobile_top:"5%",
      right: "3%",
      mobile_right:"3%"
    },
    {
      icon: "/employer/icons/recruiters-pursue-icon.svg",
      text: "Recruiters pursue",
    top: "40%",
      mobile_top:"35%",
      right: "8%",
      mobile_right:"3%"
    },
    {
      icon: "/employer/icons/pipelines-move-icon.svg",
      text: "Pipelines move",
     top: "75%",
      mobile_top:"65%",
      right: "13%",
      mobile_right:"3%"
    },
  ],
};

export const bannerSectionData = {
  title: "The Pressure",


  cards: [
    {
      text: "“Why does progress stall despite continuous activity?”",
    },
    {text:"“What pressures are building beneath the activity?”"},
   {
      text: "“Are recruiters overloaded — or is something else happening?”",
    },
  ],
};


export const insightComparisonData = [
  {
    id: 1,
    header: {
      title: "Workload Visibility",
      label: "Seam: Employer ↔ Recruiter",
      description:
        "Leaders define hiring direction. Recruiters execute hiring activity. But visibility into how effort is distributed remains limited.",
      icon: "/employer/icons/workload-visibility-icon.svg",
    },
    cards: [
      {
        title: "Employer Reality",
        data: (
          <>
          <p className="mt-md text-xl font-medium">
              Hiring activity continues, but workload visibility remains fragmented across teams
            </p>
          <div className="space-y-sm mt-md">
            {[
              "Hiring activity continues across teams",
              "Roles open, interviews progress, offers move",
              "Demand signals remain fragmented",
              "Workload shifts are not visible",
              "Pressure builds unevenly across roles",
              "Leadership lacks view of recruiter workload"
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
        title: "Employer Friction",
        data: (
          <>
            <p className="mt-md text-xl font-medium">
              Fragmented workload visibility creates misalignment across hiring direction and execution
            </p>

            <div className="space-y-sm mt-md">
              {[
                "Workload spreads unevenly across teams",
                "Recruiter capacity is misaligned",
                "Demand concentration is unclear",
                "Pipeline movement is difficult to interpret",
                "High-demand roles remain underserved",
                "Effort is expended without clear direction"
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
              Visible workload signals align hiring direction with execution across teams
            </p>


            <div className="space-y-sm mt-md">
              {[
                "Hiring demand becomes visible",
                "Effort concentration becomes clear",
                "Pipeline flow becomes traceable",
"Capacity aligns with demand",
"Workload distribution becomes measurable",
"Direction aligns with real execution signals"

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
      title: "Friction Signals",
      label: "Seam: Employer ↔ Candidate",
      description:
        "Candidates move through interviews, offers, and joining. But decision signals remain hidden. Leaders see declines, but not the source of friction.",
      icon: "/employer/icons/friction-signals-icon.svg",
    },
    cards: [
      {
        title: "Employer Reality",
        data: (
          <>
           <p className="mt-md text-xl font-medium">
             Decline signals exist, but patterns remain fragmented across roles and teams
            </p>
          <div className="space-y-sm mt-md">
            {[
              "Declines are captured individually",
              "Patterns do not aggregate",
              "Friction across experience, role, compensation, and market",
              "Impact remains difficult to trace",
              "Decline signals stay isolated across teams",
              "Leadership cannot identify dominant drivers"
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
        title: "Employer Friction",
        data: (
          <>
            <p className="mt-md text-xl font-medium">
              Fragmented decline signals hide root causes and delay intervention across stages
            </p>


            <div className="space-y-sm mt-md">
              {[
                "Declines appear scattered",
                "Root causes remain unclear",
                "Stage-level friction is hidden",
                "Instability appears too late",
                "Breakdowns surface after outcomes weaken",
                "Interventions occur after momentum is lost"
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
              Visible decline patterns reveal root causes and enable early intervention
            </p>


            <div className="space-y-sm mt-md">
              {[
                "Decline patterns become visible",
                "Dominant factors are identified",
                "Friction hotspots are revealed",
                "Early intervention becomes possible",
                "Patterns aggregate across roles and teams",
                "Leadership acts before instability escalates"
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
      title: "Hiring Targets",
      label: "Seam: Employer ↔ Recruiter",
      description:
        "Enterprise leaders define hiring targets. But leadership often lacks visibility into whether recruiting execution will achieve those targets.",
      icon: "/employer/icons/hiring-targets-icon.svg",
    },
    cards: [
      {
        title: "Employer Reality",
        data: (
          <>
          <p className="mt-md text-xl font-medium">
              Recruiting activity continues, but progress toward targets remains uncertain
            </p>
          <div className="space-y-sm mt-md">
            {[
              "Recruiting activity appears healthy",
              "Interviews and offers continue",
              "Conversion remains uncertain",
              "Progress cannot be predicted",
              "Pipeline activity does not reflect outcomes",
              "Direction becomes reactive instead of proactive"

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
        title: "Employer Friction",
        data: (
          <>
            <p className="mt-md text-xl font-medium">
              Unclear execution visibility creates uncertainty in progress and target achievement
            </p>

            <div className="space-y-sm mt-md">
              {[
                "Targets exist, but progress is unclear",
                "Recruiter contributions are fragmented",
                "Bottlenecks surface late",
                "Missed targets are discovered at the end",
                "Conversion gaps remain hidden in execution",
                "Leadership lacks forward visibility into outcomes"
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
              Visible execution signals enable predictable progress toward hiring targets
            </p>


            <div className="space-y-sm mt-md">
              {[
                "Progress toward targets becomes visible",
                "Contributions become measurable",
                "Bottlenecks are identified early",
                "Direction becomes proactive",
                "Execution aligns with hiring goals",
                "Outcomes become predictable before end stage"
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
      title: "Commitment Signals",
      label: "Seam: Employer ↔ Candidate",
      description:
        "Offers are accepted but commitment weakens before joining. Acceptance signals intent, not commitment. Engagement fades before joining.",
      icon: "/employer/icons/commitment-signals-icon.svg",
    },
    cards: [
      {
        title: "Employer Reality",
        data: (
          <>
          <p className="mt-md text-xl font-medium">
              Offer acceptance exists, but commitment weakens without visible engagement signals
            </p>
          <div className="space-y-sm mt-md">
            {[
              "Communication slows after acceptance",
              "No structured engagement exists",
              "Candidate state remains invisible",
              "Commitment weakens silently",
              "Candidates drift during the waiting period",
              "Engagement signals are not tracked clearly"
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
        title: "Employer Friction",
        data: (
          <>
            <p className="mt-md text-xl font-medium">
             Limited post-offer visibility creates commitment drop-offs and hiring instability
            </p>

            <div className="space-y-sm mt-md">
              {[
                "Accepted offers fail to convert",
                "Engagement drops post-offer",
                "External opportunities influence decisions",
                "Communication gaps emerge",
                "Dropouts occur without early warning",
                "Hiring plans destabilize at the final stage"
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
             Structured engagement visibility stabilizes commitment and improves joining outcomes
            </p>


            <div className="space-y-sm mt-md">
              {[
                "Post-offer engagement becomes structured",
                "Candidate touchpoints remain consistent",
                "Engagement visibility improves",
                "Commitment remains intact",
                "Early signals indicate commitment shifts",
                "Recruiters reinforce engagement before dropout"
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
  title: "The Employer Alignment System",
  subtitle: "Enterprise leaders operate across critical moments:",
  footerText: "Each moment generates signals that shape hiring outcomes.",


  steps: [
    { id: 1, text: "Understanding workload distribution" },
    { id: 2, text: "Identifying structural hiring friction" },
    { id: 3, text: "Tracking progress toward hiring targets" },
    { id: 4, text: "Strengthening post-offer commitment" },
  ],

  leftPanel: {
    title:
      "Connect EC brings these moments together into a single, aligned system.",
    subtitle: "From workload visibility to Alignment Signals",
    signals: [
      "Hiring friction signals",
      "Hiring progress Clarity",
      "Offer engagement Continuity",
    ],
    description:
      "A unified behavioral system that helps leadership to interpret hiring signals clearly and steer hiring strategy with confidence.",
  },

  rightPanel: {
    title:
      "When workload visibility, friction signals, hiring progress, and offer engagement remain aligned:",
    subtitle: "Alignment Drives Direction Across Hiring",
    signals: [
      "Leadership gains clear direction",
      "Execution aligns with enterprise priorities",
      "Intervene before momentum stalls",
    ],
    description:
      "Every interaction generates Alignment Signals, enabling timely intervention and strengthening clarity across the hiring system.",
  },
};

export const outcomeHighlightData = {
  title: "Direction Creates Momentum",
  subtitle:
    "When priorities, signals, and execution align:",
  points: [
    "Strategy reflects real hiring conditions",
    "Execution supports enterprise priorities",
    "Outcomes become predictable",
  ],
  description: "Hiring momentum strengthens across the organization.",
  footerText: "This is",
  footerHighlight: "Seamless Yield",
  footerSuffix: "for employers.",
  bottomTitle: "EASY -",
  bottomHighlight: "Everyone Achieves Seamless Yield.",
  image: {
    src: "/clear-hiring-signal-and-aligned-outcomes.svg",
    alt: "Clear hiring signal enabling aligned outcomes across candidates, recruiters, and employers",
    width: 520,
    height: 420,
  },
};


export const employerFaqs = [
  {
    question: "What makes Connect EC different from other hiring platforms?",
    points: [
      "Goes beyond application tracking",
      "Reveals where hiring breaks across stages",
      "Highlights gaps in interview and post-offer transitions",
      "Focuses on conversion, not just activity",
    ],
  },
  {
    question: "How does Connect EC improve hiring outcomes?",
    points: [
      "Makes hidden hiring signals visible",
      "Detects drop-offs before they occur",
      "Improves interview-to-offer decision quality",
      "Strengthens offer-to-joining reliability",
    ],
  },
  {
    question: "What problems does Connect EC solve for employers?",
    points: [
      "Candidate drop-offs without early visibility",
      "Interviews not converting despite effort",
      "Offers accepted but not honored",
      "Limited visibility across hiring stages",
    ],
  },
  {
    question: "How quickly can we get started?",
    points: [
      "Create your organization",
      "Add recruiters and panel members",
      "Start managing roles and hiring flows",
      "No setup or training dependency",
    ],
  },
  {
    question: "How is Connect EC priced?",
    points: [
      "Free → Identify hiring friction",
      "Tier 2 → Understand root causes",
      "Tier 3 → Act before impact",
      "Scale based on hiring complexity",
    ],
  },
  {
    question: "How secure is our hiring data?",
    points: [
      "Data is encrypted end-to-end",
      "Access is role-based and controlled",
      "Visibility limited to involved stakeholders",
      "Designed to protect both data and signals",
    ],
  },
];


