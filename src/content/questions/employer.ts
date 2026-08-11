// employer.ts

import { PhaseKey, Option, Tendency } from "@/domain/assessment/types";

export interface Question {
  id: string;
  phase: PhaseKey;
  situation: string;
  options: Record<Option, { text: string; tendency: Tendency }>;
}

/* -------------------------------------------------------------------------- */
/*                                  EMPLOYER                                  */
/* -------------------------------------------------------------------------- */

export const employerQuestions: Question[] = [
  // Phase 1 — Uncertainty
  {
    id: "e-u-1",
    phase: "uncertainty" as PhaseKey,
    situation:
      "Waiting Without Visibility\n\nThe hiring process is underway, but you do not have clear visibility into the current progress or status.\nWhat do you do?",
    options: {
      A: {
        text: "Seek immediate clarity on the current state of hiring",
        tendency: "ACTION" as Tendency,
      },
      B: {
        text: "Assess the situation before deciding the next step",
        tendency: "EVALUATION" as Tendency,
      },
      C: {
        text: "Continue managing without changing your direction",
        tendency: "STABILITY" as Tendency,
      },
      D: {
        text: "Improve visibility into the hiring process and progress",
        tendency: "PERCEPTION" as Tendency,
      },
    },
  },
  {
    id: "e-u-2",
    phase: "uncertainty" as PhaseKey,
    situation:
      "Silence Stretching\n\nThe hiring process has been moving slowly, and updates from recruiters or interview panels are still unclear.\nThe delay is continuing without clear direction.\nWhat do you do next?",
    options: {
      A: {
        text: "Push immediately for clearer updates and movement",
        tendency: "ACTION" as Tendency,
      },
      B: {
        text: "Review the situation before deciding the next step",
        tendency: "EVALUATION" as Tendency,
      },
      C: {
        text: "Continue the process without changing direction",
        tendency: "STABILITY" as Tendency,
      },
      D: {
        text: "Increase alignment and visibility across stakeholders",
        tendency: "PERCEPTION" as Tendency,
      },
    },
  },
  {
    id: "e-u-3",
    phase: "uncertainty" as PhaseKey,
    situation:
      "Unclear Signals\n\nYou receive updates from the hiring process, but they do not clearly indicate whether the role is progressing successfully.\nInformation exists, but direction remains unclear.\nHow do you respond?",
    options: {
      A: {
        text: "Move quickly to gain clearer direction and answers",
        tendency: "ACTION" as Tendency,
      },
      B: {
        text: "Evaluate the information before deciding what to do",
        tendency: "EVALUATION" as Tendency,
      },
      C: {
        text: "Continue without changing your approach",
        tendency: "STABILITY" as Tendency,
      },
      D: {
        text: "Improve communication and alignment around the process",
        tendency: "PERCEPTION" as Tendency,
      },
    },
  },

  // Phase 2 — Pressure
  {
    id: "e-p-1",
    phase: "pressure" as PhaseKey,
    situation:
      "Time Pressure Building\n\nBusiness timelines are becoming tighter, but hiring outcomes are still delayed.\nThe pressure to close the role is increasing.\nWhat do you do?",
    options: {
      A: {
        text: "Push the hiring process forward immediately",
        tendency: "ACTION" as Tendency,
      },
      B: {
        text: "Reassess the situation before making changes",
        tendency: "EVALUATION" as Tendency,
      },
      C: {
        text: "Continue managing without changing your direction",
        tendency: "STABILITY" as Tendency,
      },
      D: {
        text: "Focus on improving alignment and hiring visibility",
        tendency: "PERCEPTION" as Tendency,
      },
    },
  },
  {
    id: "e-p-2",
    phase: "pressure" as PhaseKey,
    situation:
      "Multiple Hiring Priorities\n\nYou are managing several business priorities while multiple hiring needs are progressing simultaneously.\nEach role carries different urgency and impact.\nHow do you respond?",
    options: {
      A: {
        text: "Prioritize the most urgent hiring need immediately",
        tendency: "ACTION" as Tendency,
      },
      B: {
        text: "Compare priorities carefully before deciding",
        tendency: "EVALUATION" as Tendency,
      },
      C: {
        text: "Continue managing all priorities steadily",
        tendency: "STABILITY" as Tendency,
      },
      D: {
        text: "Focus more on the roles with the greatest business visibility",
        tendency: "PERCEPTION" as Tendency,
      },
    },
  },
  {
    id: "e-p-3",
    phase: "pressure" as PhaseKey,
    situation:
      "Decision Fatigue\n\nContinuous hiring discussions, approvals, and delays are starting to create mental pressure.\nThe process is becoming difficult to manage consistently.\nWhat do you do now?",
    options: {
      A: {
        text: "Take immediate action to reduce uncertainty quickly",
        tendency: "ACTION" as Tendency,
      },
      B: {
        text: "Pause and evaluate before making further decisions",
        tendency: "EVALUATION" as Tendency,
      },
      C: {
        text: "Continue steadily without changing your direction",
        tendency: "STABILITY" as Tendency,
      },
      D: {
        text: "Focus on the areas creating the most visible impact",
        tendency: "PERCEPTION" as Tendency,
      },
    },
  },

  // Phase 3 — Control
  {
    id: "e-c-1",
    phase: "control" as PhaseKey,
    situation:
      "Need to Regain Control\n\nThe hiring process is progressing across recruiters, panels, and approvals, but execution is beginning to feel outside your direct control.\nWhat do you do?",
    options: {
      A: {
        text: "Take immediate action to regain control of the process",
        tendency: "ACTION" as Tendency,
      },
      B: {
        text: "Step back and reassess the situation carefully",
        tendency: "EVALUATION" as Tendency,
      },
      C: {
        text: "Continue without changing your approach",
        tendency: "STABILITY" as Tendency,
      },
      D: {
        text: "Strengthen coordination and visibility across stakeholders",
        tendency: "PERCEPTION" as Tendency,
      },
    },
  },
  {
    id: "e-c-2",
    phase: "control" as PhaseKey,
    situation:
      "Over-Follow-Up Behavior\n\nYou have already requested updates multiple times, but progress still remains unclear.\nRepeated actions are not improving movement.\nWhat do you do next?",
    options: {
      A: {
        text: "Push again immediately for stronger progress",
        tendency: "ACTION" as Tendency,
      },
      B: {
        text: "Reassess the situation before taking another step",
        tendency: "EVALUATION" as Tendency,
      },
      C: {
        text: "Continue monitoring without changing your direction",
        tendency: "STABILITY" as Tendency,
      },
      D: {
        text: "Adjust stakeholder coordination to improve visibility",
        tendency: "PERCEPTION" as Tendency,
      },
    },
  },
  {
    id: "e-c-3",
    phase: "control" as PhaseKey,
    situation:
      "Forcing Closure\n\nA hiring process has been continuing for a long time without clear resolution.\nThe lack of closure is beginning to create operational pressure.\nWhat do you do now?",
    options: {
      A: {
        text: "Push immediately toward final closure",
        tendency: "ACTION" as Tendency,
      },
      B: {
        text: "Evaluate unresolved issues before deciding",
        tendency: "EVALUATION" as Tendency,
      },
      C: {
        text: "Continue without forcing the process to close",
        tendency: "STABILITY" as Tendency,
      },
      D: {
        text: "Improve alignment while the process continues",
        tendency: "PERCEPTION" as Tendency,
      },
    },
  },

  // Phase 4 — Perception
  {
    id: "e-pr-1",
    phase: "perception" as PhaseKey,
    situation:
      "Staying Visible\n\nHiring activity is progressing internally, but leadership visibility into the outcomes remains limited.\nThe work exists, but awareness is low.\nWhat do you do?",
    options: {
      A: {
        text: "Take immediate action to increase visibility",
        tendency: "ACTION" as Tendency,
      },
      B: {
        text: "Wait and communicate when the timing is more effective",
        tendency: "EVALUATION" as Tendency,
      },
      C: {
        text: "Continue managing without changing your approach",
        tendency: "STABILITY" as Tendency,
      },
      D: {
        text: "Improve visibility around hiring progress and outcomes",
        tendency: "PERCEPTION" as Tendency,
      },
    },
  },
  {
    id: "e-pr-2",
    phase: "perception" as PhaseKey,
    situation:
      "Managing Impression\n\nHiring performance is increasingly being judged by leadership based on visible progress and execution.\nPerception is beginning to influence confidence in the process.\nHow do you respond?",
    options: {
      A: {
        text: "Act quickly to demonstrate visible progress",
        tendency: "ACTION" as Tendency,
      },
      B: {
        text: "Think carefully before responding further",
        tendency: "EVALUATION" as Tendency,
      },
      C: {
        text: "Maintain the same operational approach",
        tendency: "STABILITY" as Tendency,
      },
      D: {
        text: "Improve how hiring outcomes are positioned and communicated",
        tendency: "PERCEPTION" as Tendency,
      },
    },
  },
  {
    id: "e-pr-3",
    phase: "perception" as PhaseKey,
    situation:
      "Comparing with Others\n\nYou notice that other teams are closing hiring roles faster and more efficiently.\nYour hiring outcomes are beginning to be compared against others.\nWhat do you do?",
    options: {
      A: {
        text: "Move quickly to increase hiring speed and momentum",
        tendency: "ACTION" as Tendency,
      },
      B: {
        text: "Evaluate the situation before making adjustments",
        tendency: "EVALUATION" as Tendency,
      },
      C: {
        text: "Continue without changing your direction",
        tendency: "STABILITY" as Tendency,
      },
      D: {
        text: "Improve how your team’s outcomes are positioned and perceived",
        tendency: "PERCEPTION" as Tendency,
      },
    },
  },

  // Phase 5 — Outcome
  {
    id: "e-o-1",
    phase: "outcome" as PhaseKey,
    situation:
      "Offer Ambiguity\n\nYou are nearing a final hiring decision, but important aspects of the outcome still remain unclear to stakeholders.\nThe direction is becoming visible, but final alignment is not yet fully defined.\nWhat do you do?",
    options: {
      A: {
        text: "Move immediately to finalize the hiring decision",
        tendency: "ACTION" as Tendency,
      },
      B: {
        text: "Review unresolved gaps before confirming the outcome",
        tendency: "EVALUATION" as Tendency,
      },
      C: {
        text: "Hold the decision without forcing final closure",
        tendency: "STABILITY" as Tendency,
      },
      D: {
        text: "Keep strategic options available while alignment develops",
        tendency: "PERCEPTION" as Tendency,
      },
    },
  },
  {
    id: "e-o-2",
    phase: "outcome" as PhaseKey,
    situation:
      "Commitment Hesitation\n\nThe hiring process is approaching the final approval. There is still hesitation among stakeholders to fully commit to the decision.\nThe decision is near, but not yet fully committed.\nWhat do you do?",
    options: {
      A: {
        text: "Take immediate action to secure final commitment",
        tendency: "ACTION" as Tendency,
      },
      B: {
        text: "Evaluate the hesitation before confirming the decision",
        tendency: "EVALUATION" as Tendency,
      },
      C: {
        text: "Hold the process without forcing commitment",
        tendency: "STABILITY" as Tendency,
      },
      D: {
        text: "Retain flexibility while the decision continues developing",
        tendency: "PERCEPTION" as Tendency,
      },
    },
  },
  {
    id: "e-o-3",
    phase: "outcome" as PhaseKey,
    situation:
      "Post-Decision Doubt\n\nA hiring decision has already been made, but doubts are beginning to emerge afterward.\nThe outcome exists, but confidence in the decision feels unstable.\nWhat do you do?",
    options: {
      A: {
        text: "Revisit the decision immediately to regain confidence",
        tendency: "ACTION" as Tendency,
      },
      B: {
        text: "Re-evaluate the situation before making adjustments",
        tendency: "EVALUATION" as Tendency,
      },
      C: {
        text: "Stay with the current direction and decision",
        tendency: "STABILITY" as Tendency,
      },
      D: {
        text: "Monitor the outcome closely and adjust if necessary",
        tendency: "PERCEPTION" as Tendency,
      },
    },
  },
];