// recruiter.ts

import { PhaseKey, Option, Tendency } from "@/domain/assessment/types";

export interface Question {
  id: string;
  phase: PhaseKey;
  situation: string;
  options: Record<Option, { text: string; tendency: Tendency }>;
}

/* -------------------------------------------------------------------------- */
/*                                 RECRUITER                                  */
/* -------------------------------------------------------------------------- */

export const recruiterQuestions: Question[] = [
  // Phase 1 — Uncertainty
  {
    id: "r-u-1",
    phase: "uncertainty" as PhaseKey,
    situation:
      "Waiting Without Feedback\n\nYou’ve completed an interview cycle. Feedback from the panel is still pending. Progress in the hiring process still depends on their response.\nWhat do you do?",
    options: {
      A: {
        text: "Reach out immediately to push the feedback process forward",
        tendency: "ACTION" as Tendency,
      },
      B: {
        text: "Assess the situation before deciding the next step",
        tendency: "EVALUATION" as Tendency,
      },
      C: {
        text: "Continue managing the process without changing your approach",
        tendency: "STABILITY" as Tendency,
      },
      D: {
        text: "Re-engage stakeholders to improve visibility and response",
        tendency: "PERCEPTION" as Tendency,
      },
    },
  },
  {
    id: "r-u-2",
    phase: "uncertainty" as PhaseKey,
    situation:
      "Silence Stretching\n\nYou’ve been waiting for panel feedback, but the delay continues and responses are still not coming through. The hiring process is slowing down due to the lack of movement.\nWhat do you do next?",
    options: {
      A: {
        text: "Escalate immediately to restore momentum in the process",
        tendency: "ACTION" as Tendency,
      },
      B: {
        text: "Review the situation before deciding the next step",
        tendency: "EVALUATION" as Tendency,
      },
      C: {
        text: "Continue following the process without changing your approach",
        tendency: "STABILITY" as Tendency,
      },
      D: {
        text: "Increase visibility around the delay to trigger movement",
        tendency: "PERCEPTION" as Tendency,
      },
    },
  },
  {
    id: "r-u-3",
    phase: "uncertainty" as PhaseKey,
    situation:
      "Unclear Signals\n\nYou receive interview feedback, but it does not clearly define the next steps in the hiring process.\nThe input exists, but it does not translate into action.\nHow do you respond?",
    options: {
      A: {
        text: "Move quickly to define the next steps clearly",
        tendency: "ACTION" as Tendency,
      },
      B: {
        text: "Evaluate the feedback before deciding what to do next",
        tendency: "EVALUATION" as Tendency,
      },
      C: {
        text: "Continue the process without changing your approach",
        tendency: "STABILITY" as Tendency,
      },
      D: {
        text: "Align stakeholders to create better clarity and direction",
        tendency: "PERCEPTION" as Tendency,
      },
    },
  },

  // Phase 2 — Pressure
  {
    id: "r-p-1",
    phase: "pressure" as PhaseKey,
    situation:
      "Time Pressure Building\n\nYou are managing an active hiring process, but timelines are tightening, and roles still need closure.\nDelays are beginning to impact delivery expectations.\nWhat do you do?",
    options: {
      A: {
        text: "Push the hiring process forward immediately to reduce delays",
        tendency: "ACTION" as Tendency,
      },
      B: {
        text: "Reassess priorities before deciding the next step",
        tendency: "EVALUATION" as Tendency,
      },
      C: {
        text: "Continue managing the process without changing your approach",
        tendency: "STABILITY" as Tendency,
      },
      D: {
        text: "Focus on improving conversion across the hiring pipeline",
        tendency: "PERCEPTION" as Tendency,
      },
    },
  },
  {
    id: "r-p-2",
    phase: "pressure" as PhaseKey,
    situation:
      "Multiple Roles Conflict\n\nYou are managing multiple hiring roles at the same time, and each one carries a different urgency.\nSeveral roles now demand attention simultaneously.\nHow do you prioritize?",
    options: {
      A: {
        text: "Focus immediately on the most urgent role",
        tendency: "ACTION" as Tendency,
      },
      B: {
        text: "Compare role priorities carefully before deciding",
        tendency: "EVALUATION" as Tendency,
      },
      C: {
        text: "Continue handling all roles without changing your approach",
        tendency: "STABILITY" as Tendency,
      },
      D: {
        text: "Focus on roles with higher visibility",
        tendency: "PERCEPTION" as Tendency,
      },
    },
  },
  {
    id: "r-p-3",
    phase: "pressure" as PhaseKey,
    situation:
      "Decision Fatigue\n\nYou have been coordinating continuous interviews, follow-ups, and hiring decisions across roles.\nThe volume of activity is becoming difficult to manage.\nWhat do you do now?",
    options: {
      A: {
        text: "Take immediate action to keep the process moving",
        tendency: "ACTION" as Tendency,
      },
      B: {
        text: "Pause to evaluate before making further decisions",
        tendency: "EVALUATION" as Tendency,
      },
      C: {
        text: "Continue managing the workload without changing your approach",
        tendency: "STABILITY" as Tendency,
      },
      D: {
        text: "Focus energy on actions with the highest impact",
        tendency: "PERCEPTION" as Tendency,
      },
    },
  },

  // Phase 3 — Control
  {
    id: "r-c-1",
    phase: "control" as PhaseKey,
    situation:
      "Need to Regain Control\n\nYou are managing a hiring process involving multiple stakeholders, but the delayed panel feedback and fragmented coordination are increasing. Execution is beginning to slip beyond your direct control.\nWhat do you do?",
    options: {
      A: {
        text: "Take immediate action to regain control of execution",
        tendency: "ACTION" as Tendency,
      },
      B: {
        text: "Step back to reassess the situation more carefully",
        tendency: "EVALUATION" as Tendency,
      },
      C: {
        text: "Continue managing the process without changing your approach",
        tendency: "STABILITY" as Tendency,
      },
      D: {
        text: "Realign stakeholders to improve coordination and movement",
        tendency: "PERCEPTION" as Tendency,
      },
    },
  },
  {
    id: "r-c-2",
    phase: "control" as PhaseKey,
    situation:
      "Over-Follow-Up Behavior\n\nYou have already followed up multiple times regarding pending responses in the hiring process.\nRepeated efforts are still not creating movement.\nWhat do you do next?",
    options: {
      A: {
        text: "Push again immediately to trigger a response",
        tendency: "ACTION" as Tendency,
      },
      B: {
        text: "Re-evaluate the situation before taking another step",
        tendency: "EVALUATION" as Tendency,
      },
      C: {
        text: "Continue following up without changing your approach",
        tendency: "STABILITY" as Tendency,
      },
      D: {
        text: "Change the engagement approach to encourage movement",
        tendency: "PERCEPTION" as Tendency,
      },
    },
  },
  {
    id: "r-c-3",
    phase: "control" as PhaseKey,
    situation:
      "Forcing Closure\n\nYou are handling a hiring role that has been delayed for a long time without closure. The process continues to extend without resolution.\nWhat do you do now?",
    options: {
      A: {
        text: "Drive the process toward closure immediately",
        tendency: "ACTION" as Tendency,
      },
      B: {
        text: "Reassess the situation before deciding the next step",
        tendency: "EVALUATION" as Tendency,
      },
      C: {
        text: "Continue the process without forcing closure",
        tendency: "STABILITY" as Tendency,
      },
      D: {
        text: "Influence stakeholders to help bring the role to closure",
        tendency: "PERCEPTION" as Tendency,
      },
    },
  },

  // Phase 4 — Perception
  {
    id: "r-pr-1",
    phase: "perception" as PhaseKey,
    situation:
      "Staying Visible\n\nYou are actively working on the hiring process, but progress is not clearly visible to stakeholders.\nEffort exists, but visibility remains low.\nWhat do you do?",
    options: {
      A: {
        text: "Take immediate action to make progress more visible",
        tendency: "ACTION" as Tendency,
      },
      B: {
        text: "Wait and communicate when the timing is more effective",
        tendency: "EVALUATION" as Tendency,
      },
      C: {
        text: "Continue managing the process without changing your approach",
        tendency: "STABILITY" as Tendency,
      },
      D: {
        text: "Improve stakeholder awareness around ongoing execution",
        tendency: "PERCEPTION" as Tendency,
      },
    },
  },
  {
    id: "r-pr-2",
    phase: "perception" as PhaseKey,
    situation:
      "Managing Impression\n\nAs hiring outcomes become more visible to stakeholders, your effectiveness is increasingly being judged through execution and delivery. Perception depends on how your actions are seen.\nHow do you respond?",
    options: {
      A: {
        text: "Act quickly to demonstrate visible execution and progress",
        tendency: "ACTION" as Tendency,
      },
      B: {
        text: "Reflect carefully before deciding how to respond",
        tendency: "EVALUATION" as Tendency,
      },
      C: {
        text: "Maintain consistency in the way you operate",
        tendency: "STABILITY" as Tendency,
      },
      D: {
        text: "Shape stakeholder perception through visible actions",
        tendency: "PERCEPTION" as Tendency,
      },
    },
  },
  {
    id: "r-pr-3",
    phase: "perception" as PhaseKey,
    situation:
      "Comparing with Others\n\nYou notice that other recruiters are closing hiring roles faster than you. Your progress is beginning to be compared with that of others.\nWhat do you do?",
    options: {
      A: {
        text: "Move quickly to accelerate hiring progress",
        tendency: "ACTION" as Tendency,
      },
      B: {
        text: "Evaluate the situation before making adjustments",
        tendency: "EVALUATION" as Tendency,
      },
      C: {
        text: "Continue managing roles without changing your approach",
        tendency: "STABILITY" as Tendency,
      },
      D: {
        text: "Improve the visibility of the work already being done",
        tendency: "PERCEPTION" as Tendency,
      },
    },
  },

  // Phase 5 — Outcome
  {
    id: "r-o-1",
    phase: "outcome" as PhaseKey,
    situation:
      "Offer Ambiguity\n\nYou are very close to closing a role, but the candidate seems unsure about accepting the offer.\nThe final decision remains unclear from the candidate’s perspective.\nWhat do you do?",
    options: {
      A: {
        text: "Move immediately to secure acceptance of the offer",
        tendency: "ACTION" as Tendency,
      },
      B: {
        text: "Understand the candidate’s concerns before proceeding",
        tendency: "EVALUATION" as Tendency,
      },
      C: {
        text: "Hold the process without forcing a final decision",
        tendency: "STABILITY" as Tendency,
      },
      D: {
        text: "Keep the candidate actively engaged during the delay",
        tendency: "PERCEPTION" as Tendency,
      },
    },
  },
  {
    id: "r-o-2",
    phase: "outcome" as PhaseKey,
    situation:
      "Commitment Hesitation\n\nYou are nearing the final stage of the hiring process, but the candidate is still hesitating to commit.\nClosure feels close, but not fully confirmed.\nWhat do you do?",
    options: {
      A: {
        text: "Take immediate action to secure commitment",
        tendency: "ACTION" as Tendency,
      },
      B: {
        text: "Evaluate the hesitation before making another move",
        tendency: "EVALUATION" as Tendency,
      },
      C: {
        text: "Hold the process without forcing closure",
        tendency: "STABILITY" as Tendency,
      },
      D: {
        text: "Influence the decision through continued engagement",
        tendency: "PERCEPTION" as Tendency,
      },
    },
  },
  {
    id: "r-o-3",
    phase: "outcome" as PhaseKey,
    situation:
      "Post-Decision Doubt\n\nThe candidate has accepted the offer, but signs of uncertainty are beginning to appear.\nThe decision is made, but stability still feels weak.\nWhat do you do?",
    options: {
      A: {
        text: "Act quickly to reinforce the candidate’s commitment",
        tendency: "ACTION" as Tendency,
      },
      B: {
        text: "Reassess the situation before intervening further",
        tendency: "EVALUATION" as Tendency,
      },
      C: {
        text: "Continue with the process as originally planned",
        tendency: "STABILITY" as Tendency,
      },
      D: {
        text: "Stay actively engaged to stabilize the outcome",
        tendency: "PERCEPTION" as Tendency,
      },
    },
  },
];