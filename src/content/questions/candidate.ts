// candidate.ts

import { PhaseKey, Option, Tendency } from "@/domain/assessment/types";

export interface Question {
  id: string;
  phase: PhaseKey;
  situation: string;
  options: Record<Option, { text: string; tendency: Tendency }>;
}

/* -------------------------------------------------------------------------- */
/*                                CANDIDATE                                   */
/* -------------------------------------------------------------------------- */

export const candidateQuestions: Question[] = [
  // Phase 1 — Uncertainty
  {
    id: "c-u-1",
    phase: "uncertainty" as PhaseKey,
    situation:
      "Waiting Without Feedback\n\nYou completed an interview a few days ago, but you have not received any response yet.\nWhat do you do?",
    options: {
      A: {
        text: "Reach out immediately to ask for an update",
        tendency: "ACTION" as Tendency,
      },
      B: {
        text: "Reflect on the situation before deciding your next step",
        tendency: "EVALUATION" as Tendency,
      },
      C: {
        text: "Continue your search without changing your approach",
        tendency: "STABILITY" as Tendency,
      },
      D: {
        text: "Reach out to remain visible in the process",
        tendency: "PERCEPTION" as Tendency,
      },
    },
  },
  {
    id: "c-u-2",
    phase: "uncertainty" as PhaseKey,
    situation:
      "Silence Stretching\n\nMore time passes after your interview, and there is still no clear update from the employer.\nThe silence continues without any indication of progress.\nWhat do you do next?",
    options: {
      A: {
        text: "Follow up again to move the process forward",
        tendency: "ACTION" as Tendency,
      },
      B: {
        text: "Assess the situation before taking further action",
        tendency: "EVALUATION" as Tendency,
      },
      C: {
        text: "Continue waiting without changing your approach",
        tendency: "STABILITY" as Tendency,
      },
      D: {
        text: "Find a way to stay noticeable to the employer",
        tendency: "PERCEPTION" as Tendency,
      },
    },
  },
  {
    id: "c-u-3",
    phase: "uncertainty" as PhaseKey,
    situation:
      "Unclear Signals\n\nYou finally receive an update, but it is vague and does not clearly explain the next step.\nThe signal is present, but the direction remains unclear.\nHow do you respond?",
    options: {
      A: {
        text: "Respond immediately to gain more clarity",
        tendency: "ACTION" as Tendency,
      },
      B: {
        text: "Interpret the situation before reacting further",
        tendency: "EVALUATION" as Tendency,
      },
      C: {
        text: "Continue normally without changing your approach",
        tendency: "STABILITY" as Tendency,
      },
      D: {
        text: "Use the opportunity to reinforce your presence",
        tendency: "PERCEPTION" as Tendency,
      },
    },
  },

  // Phase 2 — Pressure
  {
    id: "c-p-1",
    phase: "pressure" as PhaseKey,
    situation:
      "Time Pressure Building\n\nYou completed an interview a few days ago and are waiting for updates. At the same time, you also need to consider your own timelines. Delays may begin affecting your available options.\nWhat do you do?",
    options: {
      A: {
        text: "Push forward quickly before options narrow further",
        tendency: "ACTION" as Tendency,
      },
      B: {
        text: "Weigh your timelines before making a move",
        tendency: "EVALUATION" as Tendency,
      },
      C: {
        text: "Continue steadily without changing direction",
        tendency: "STABILITY" as Tendency,
      },
      D: {
        text: "Increase your chances by staying actively engaged",
        tendency: "PERCEPTION" as Tendency,
      },
    },
  },
  {
    id: "c-p-2",
    phase: "pressure" as PhaseKey,
    situation:
      "Multiple Opportunities Conflict\n\nYou are currently involved in multiple hiring processes, and each opportunity is progressing at a different pace.\nHow do you decide what to do?",
    options: {
      A: {
        text: "Prioritize the opportunity moving fastest right now",
        tendency: "ACTION" as Tendency,
      },
      B: {
        text: "Compare each option carefully before deciding",
        tendency: "EVALUATION" as Tendency,
      },
      C: {
        text: "Continue with all processes without changing strategy",
        tendency: "STABILITY" as Tendency,
      },
      D: {
        text: "Focus more on the process where you stand out most",
        tendency: "PERCEPTION" as Tendency,
      },
    },
  },
  {
    id: "c-p-3",
    phase: "pressure" as PhaseKey,
    situation:
      "Decision Fatigue\n\nAfter going through multiple interviews and hiring decisions continuously, the process is starting to feel mentally exhausting.\nWhat do you do now?",
    options: {
      A: {
        text: "Take immediate action to reduce the uncertainty",
        tendency: "ACTION" as Tendency,
      },
      B: {
        text: "Pause and evaluate before making another move",
        tendency: "EVALUATION" as Tendency,
      },
      C: {
        text: "Continue steadily without changing your approach",
        tendency: "STABILITY" as Tendency,
      },
      D: {
        text: "Focus your energy on what feels most promising",
        tendency: "PERCEPTION" as Tendency,
      },
    },
  },

  // Phase 3 — Control
  {
    id: "c-c-1",
    phase: "control" as PhaseKey,
    situation:
      "Need to Regain Control\n\nYou completed an interview and have been waiting through delays. You begin to feel that the outcome is no longer within your control. Things are moving, but not based on your actions.\nWhat do you do?",
    options: {
      A: {
        text: "Take immediate action to regain influence over the process",
        tendency: "ACTION" as Tendency,
      },
      B: {
        text: "Step back to assess the situation more carefully",
        tendency: "EVALUATION" as Tendency,
      },
      C: {
        text: "Continue normally without changing your approach",
        tendency: "STABILITY" as Tendency,
      },
      D: {
        text: "Look for ways to strengthen your position",
        tendency: "PERCEPTION" as Tendency,
      },
    },
  },
  {
    id: "c-c-2",
    phase: "control" as PhaseKey,
    situation:
      "Over-Follow-Up Behavior\n\nYou have already followed up regarding your application, but there is still no response.\nYour previous actions have not changed the outcome.\nWhat do you do next?",
    options: {
      A: {
        text: "Follow up again to push the process forward",
        tendency: "ACTION" as Tendency,
      },
      B: {
        text: "Reassess the situation before taking another step",
        tendency: "EVALUATION" as Tendency,
      },
      C: {
        text: "Continue waiting without changing your approach",
        tendency: "STABILITY" as Tendency,
      },
      D: {
        text: "Try a different way to remain visible",
        tendency: "PERCEPTION" as Tendency,
      },
    },
  },
  {
    id: "c-c-3",
    phase: "control" as PhaseKey,
    situation:
      "Forcing Closure\n\nYou have been waiting for clarity in the hiring process for a long time. The lack of closure is starting to create pressure.\nWhat do you do now?",
    options: {
      A: {
        text: "Push for a clear outcome as soon as possible",
        tendency: "ACTION" as Tendency,
      },
      B: {
        text: "Reflect before deciding what to do next",
        tendency: "EVALUATION" as Tendency,
      },
      C: {
        text: "Continue patiently without forcing a resolution",
        tendency: "STABILITY" as Tendency,
      },
      D: {
        text: "Take action to reach closure more quickly",
        tendency: "PERCEPTION" as Tendency,
      },
    },
  },

  // Phase 4 — Perception
  {
    id: "c-pr-1",
    phase: "perception" as PhaseKey,
    situation:
      "Staying Visible\n\nYou completed an interview and have been waiting through delays. As time passes, you begin to feel that you may be forgotten in the process. Your presence no longer feels actively visible.\nWhat do you do?",
    options: {
      A: {
        text: "Reconnect immediately to bring attention back to your profile",
        tendency: "ACTION" as Tendency,
      },
      B: {
        text: "Wait and respond when the timing feels appropriate",
        tendency: "EVALUATION" as Tendency,
      },
      C: {
        text: "Continue as usual without changing your approach",
        tendency: "STABILITY" as Tendency,
      },
      D: {
        text: "Find ways to increase your visibility in the process",
        tendency: "PERCEPTION" as Tendency,
      },
    },
  },
  {
    id: "c-pr-2",
    phase: "perception" as PhaseKey,
    situation:
      "Managing Impression\n\nDuring the hiring process, you become aware that your actions and responses may influence how you are perceived. Your response could shape the outcome indirectly.\nHow do you respond?",
    options: {
      A: {
        text: "Respond immediately to influence the situation",
        tendency: "ACTION" as Tendency,
      },
      B: {
        text: "Think carefully before responding further",
        tendency: "EVALUATION" as Tendency,
      },
      C: {
        text: "Maintain the same approach throughout the process",
        tendency: "STABILITY" as Tendency,
      },
      D: {
        text: "Adjust your actions to shape how you are viewed",
        tendency: "PERCEPTION" as Tendency,
      },
    },
  },
  {
    id: "c-pr-3",
    phase: "perception" as PhaseKey,
    situation:
      "Comparing with Others\n\nWhile progressing through your hiring process, you notice that other candidates seem to be moving faster than you. Your pace feels different in comparison.\nWhat do you do?",
    options: {
      A: {
        text: "Take immediate action to catch up quickly",
        tendency: "ACTION" as Tendency,
      },
      B: {
        text: "Evaluate the situation before making changes",
        tendency: "EVALUATION" as Tendency,
      },
      C: {
        text: "Continue steadily without changing your approach",
        tendency: "STABILITY" as Tendency,
      },
      D: {
        text: "Focus on improving how you are perceived",
        tendency: "PERCEPTION" as Tendency,
      },
    },
  },

  // Phase 5 — Outcome
  {
    id: "c-o-1",
    phase: "outcome" as PhaseKey,
    situation:
      "Offer Ambiguity\n\nYou receive a job offer, but some details are unclear or not fully defined. The opportunity is present, but important information is incomplete.\nWhat do you do?",
    options: {
      A: {
        text: "Move quickly to secure the opportunity",
        tendency: "ACTION" as Tendency,
      },
      B: {
        text: "Review the details carefully before confirming",
        tendency: "EVALUATION" as Tendency,
      },
      C: {
        text: "Hold your position without making a commitment",
        tendency: "STABILITY" as Tendency,
      },
      D: {
        text: "Keep other opportunities available while deciding",
        tendency: "PERCEPTION" as Tendency,
      },
    },
  },
  {
    id: "c-o-2",
    phase: "outcome" as PhaseKey,
    situation:
      "Commitment Hesitation\n\nYou are close to making a final decision about an opportunity, but you still feel uncertain.\nThe choice is present, but confidence is not.\nWhat do you do?",
    options: {
      A: {
        text: "Commit quickly to avoid delaying the decision further",
        tendency: "ACTION" as Tendency,
      },
      B: {
        text: "Reflect carefully before making the final commitment",
        tendency: "EVALUATION" as Tendency,
      },
      C: {
        text: "Continue delaying without changing your position",
        tendency: "STABILITY" as Tendency,
      },
      D: {
        text: "Keep alternative options available while deciding",
        tendency: "PERCEPTION" as Tendency,
      },
    },
  },
  {
    id: "c-o-3",
    phase: "outcome" as PhaseKey,
    situation:
      "Post-Decision Doubt\n\nAfter making a final decision in the hiring process, you begin questioning whether it was the right choice. The outcome is set, but certainty is not.\nWhat do you do?",
    options: {
      A: {
        text: "Take immediate steps to reconsider the decision",
        tendency: "ACTION" as Tendency,
      },
      B: {
        text: "Re-evaluate the situation before making changes",
        tendency: "EVALUATION" as Tendency,
      },
      C: {
        text: "Stay with the decision you already made",
        tendency: "STABILITY" as Tendency,
      },
      D: {
        text: "Explore other possibilities while holding your decision",
        tendency: "PERCEPTION" as Tendency,
      },
    },
  },
];