import { Mode, Role, Tendency } from "./types";

import { Band, PhaseKey } from "./types";

type Expression = {
  insight: string;
  belief: string;
  actionSummary: string;
};

export const primaryExpressionByPhase: Record<
  Role,
  Record<PhaseKey, Record<Mode, Partial<Record<Band, Expression>>>>
> = {
  candidate: {
    uncertainty: {
      Unaligned: {
        Strong: {
          insight:
            "Delayed feedback creates strong discomfort that is hard to tolerate",
          belief:
            "It strongly feels that waiting longer may reduce your chances",
          actionSummary:
            "You consistently act to regain clarity rather than continue waiting",
        },
        Moderate: {
          insight: "Delayed feedback creates noticeable discomfort over time",
          belief: "It feels that waiting longer may reduce your chances",
          actionSummary:
            "You tend to act to regain clarity rather than continue waiting",
        },
      },

      Aligned: {
        Strong: {
          insight:
            "Missing information creates a strong need to understand the situation",
          belief:
            "It strongly feels that more clarity is needed before deciding what to do",
          actionSummary:
            "You consistently seek understanding before taking further action",
        },
        Moderate: {
          insight:
            "Missing information creates a noticeable need to understand the situation",
          belief:
            "It feels that more clarity may be needed before deciding what to do",
          actionSummary:
            "You tend to seek understanding before taking further action",
        },
      },

      "Auto-Aligned": {
        Strong: {
          insight:
            "Delayed feedback does not immediately change how you approach your job search",
          belief:
            "It strongly feels that your current approach remains appropriate",
          actionSummary:
            "You consistently maintain your approach despite uncertainty",
        },
        Moderate: {
          insight:
            "Delayed feedback does not immediately change how you approach your job search",
          belief:
            "It feels that your current approach may still be appropriate",
          actionSummary:
            "You tend to maintain your approach despite uncertainty",
        },
      },

      Misaligned: {
        Strong: {
          insight:
            "Delayed signals create strong sensitivity to what they might mean",
          belief:
            "It strongly feels that hidden signals may explain what is happening",
          actionSummary:
            "You consistently respond to perceived signals rather than wait for clarity",
        },
        Moderate: {
          insight:
            "Delayed signals create noticeable sensitivity to what they might mean",
          belief: "It feels that hidden signals may explain what is happening",
          actionSummary:
            "You tend to respond to perceived signals rather than wait for clarity",
        },
      },

      Dynamic: {
        Dynamic: {
          insight:
            "Delayed feedback affects you differently depending on the situation",
          belief:
            "At times, clarity feels important, while at other times action feels necessary",
          actionSummary:
            "Your response to uncertainty varies across situations",
        },
      },
    },
    pressure: {
      Unaligned: {
        Strong: {
          insight:
            "Increasing delays create urgency that becomes difficult to ignore",
          belief:
            "It strongly feels that waiting may reduce available opportunities",
          actionSummary:
            "You consistently act quickly when pressure begins to build",
        },
        Moderate: {
          insight: "Increasing delays create urgency over time",
          belief: "It feels that waiting may reduce available opportunities",
          actionSummary:
            "You tend to act quickly when pressure begins to build",
        },
      },

      Aligned: {
        Strong: {
          insight:
            "Increasing pressure creates a strong need to reassess priorities",
          belief:
            "It strongly feels that timing should be evaluated before acting",
          actionSummary:
            "You consistently evaluate pressure before making decisions",
        },
        Moderate: {
          insight: "Increasing pressure creates a need to reassess priorities",
          belief: "It feels that timing should be evaluated before acting",
          actionSummary:
            "You tend to evaluate pressure before making decisions",
        },
      },

      "Auto-Aligned": {
        Strong: {
          insight:
            "Increasing pressure does not immediately change your existing approach",
          belief:
            "It strongly feels that staying consistent remains the best option",
          actionSummary:
            "You consistently maintain your approach despite increasing pressure",
        },
        Moderate: {
          insight:
            "Increasing pressure does not immediately change your existing approach",
          belief: "It feels that staying consistent may remain the best option",
          actionSummary:
            "You tend to maintain your approach despite increasing pressure",
        },
      },

      Misaligned: {
        Strong: {
          insight:
            "Competitive signals create strong sensitivity to how opportunities compare",
          belief:
            "It strongly feels that some opportunities may become more valuable than others",
          actionSummary:
            "You consistently adjust your focus based on perceived opportunity value",
        },
        Moderate: {
          insight:
            "Competitive signals create noticeable sensitivity to how opportunities compare",
          belief:
            "It feels that some opportunities may become more valuable than others",
          actionSummary:
            "You tend to adjust your focus based on perceived opportunity value",
        },
      },

      Dynamic: {
        Dynamic: {
          insight:
            "Pressure affects your decisions differently depending on the situation",
          belief:
            "At times, timing feels more important, while at other times certainty matters more",
          actionSummary: "Your response to pressure varies across situations",
        },
      },
    },
    control: {
      Unaligned: {
        Strong: {
          insight: "Losing influence creates a strong need to take action",
          belief:
            "It strongly feels that something must be done to regain control",
          actionSummary:
            "You consistently act to regain influence rather than continue waiting",
        },
        Moderate: {
          insight: "Losing influence creates a noticeable need to take action",
          belief: "It feels that something should be done to regain control",
          actionSummary:
            "You tend to act to regain influence rather than continue waiting",
        },
      },

      Aligned: {
        Strong: {
          insight:
            "Losing influence creates a strong need to reassess the situation",
          belief:
            "It strongly feels that understanding the situation should come first",
          actionSummary:
            "You consistently evaluate before trying to regain control",
        },
        Moderate: {
          insight: "Losing influence creates a need to reassess the situation",
          belief: "It feels that understanding the situation should come first",
          actionSummary: "You tend to evaluate before trying to regain control",
        },
      },

      "Auto-Aligned": {
        Strong: {
          insight: "Losing influence does not immediately change your approach",
          belief:
            "It strongly feels that staying consistent remains appropriate",
          actionSummary:
            "You consistently maintain your approach despite reduced control",
        },
        Moderate: {
          insight: "Losing influence does not immediately change your approach",
          belief: "It feels that staying consistent may remain appropriate",
          actionSummary:
            "You tend to maintain your approach despite reduced control",
        },
      },

      Misaligned: {
        Strong: {
          insight:
            "Loss of control creates strong sensitivity to how you are positioned",
          belief:
            "It strongly feels that improving your position may restore influence",
          actionSummary:
            "You consistently adjust your actions to strengthen your position",
        },
        Moderate: {
          insight:
            "Loss of control creates sensitivity to how you are positioned",
          belief: "It feels that improving your position may restore influence",
          actionSummary:
            "You tend to adjust your actions to strengthen your position",
        },
      },

      Dynamic: {
        Dynamic: {
          insight:
            "Loss of control affects you differently depending on the situation",
          belief:
            "At times, action feels necessary, while at other times waiting feels appropriate",
          actionSummary: "Your response to control varies across situations",
        },
      },
    },
    perception: {
      Unaligned: {
        Strong: {
          insight: "Reduced visibility creates a strong need to take action",
          belief: "It strongly feels that being forgotten may affect outcomes",
          actionSummary: "You consistently act to increase your visibility",
        },
        Moderate: {
          insight: "Reduced visibility creates a need to take action",
          belief: "It feels that being forgotten may affect outcomes",
          actionSummary: "You tend to act to increase your visibility",
        },
      },

      Aligned: {
        Strong: {
          insight:
            "Visibility concerns create a strong need to assess the situation",
          belief:
            "It strongly feels that timing and context should guide your response",
          actionSummary:
            "You consistently evaluate before changing how you present yourself",
        },
        Moderate: {
          insight: "Visibility concerns create a need to assess the situation",
          belief: "It feels that timing and context should guide your response",
          actionSummary:
            "You tend to evaluate before changing how you present yourself",
        },
      },

      "Auto-Aligned": {
        Strong: {
          insight:
            "Changes in visibility do not immediately alter your approach",
          belief:
            "It strongly feels that consistency remains more important than perception",
          actionSummary:
            "You consistently maintain your approach despite changing perceptions",
        },
        Moderate: {
          insight:
            "Changes in visibility do not immediately alter your approach",
          belief:
            "It feels that consistency may remain more important than perception",
          actionSummary:
            "You tend to maintain your approach despite changing perceptions",
        },
      },

      Misaligned: {
        Strong: {
          insight:
            "Perception creates strong sensitivity to how others may view you",
          belief: "It strongly feels that perception influences outcomes",
          actionSummary: "You consistently act to shape how you are perceived",
        },
        Moderate: {
          insight:
            "Perception creates noticeable sensitivity to how others may view you",
          belief: "It feels that perception may influence outcomes",
          actionSummary: "You tend to act to shape how you are perceived",
        },
      },

      Dynamic: {
        Dynamic: {
          insight:
            "Perception affects you differently depending on the situation",
          belief:
            "At times, visibility feels important, while at other times consistency matters more",
          actionSummary: "Your response to perception varies across situations",
        },
      },
    },
    outcome: {
      Unaligned: {
        Strong: {
          insight:
            "Final decisions create strong pressure to resolve uncertainty",
          belief:
            "It strongly feels that delaying a decision may increase risk",
          actionSummary:
            "You consistently act to resolve uncertainty rather than wait",
        },
        Moderate: {
          insight: "Final decisions create pressure to resolve uncertainty",
          belief: "It feels that delaying a decision may increase risk",
          actionSummary:
            "You tend to act to resolve uncertainty rather than wait",
        },
      },

      Aligned: {
        Strong: {
          insight:
            "Final decisions create a strong need for further evaluation",
          belief:
            "It strongly feels that the decision should be fully understood before commitment",
          actionSummary:
            "You consistently reassess before making final commitments",
        },
        Moderate: {
          insight: "Final decisions create a need for further evaluation",
          belief:
            "It feels that the decision should be fully understood before commitment",
          actionSummary: "You tend to reassess before making final commitments",
        },
      },

      "Auto-Aligned": {
        Strong: {
          insight:
            "Final decisions do not immediately change your existing position",
          belief:
            "It strongly feels that maintaining your decision remains appropriate",
          actionSummary:
            "You consistently hold your decision despite uncertainty",
        },
        Moderate: {
          insight:
            "Final decisions do not immediately change your existing position",
          belief:
            "It feels that maintaining your decision may remain appropriate",
          actionSummary: "You tend to hold your decision despite uncertainty",
        },
      },

      Misaligned: {
        Strong: {
          insight:
            "Final outcomes create strong sensitivity to alternative possibilities",
          belief: "It strongly feels that better outcomes may still exist",
          actionSummary: "You consistently keep alternative options available",
        },
        Moderate: {
          insight:
            "Final outcomes create sensitivity to alternative possibilities",
          belief: "It feels that better outcomes may still exist",
          actionSummary: "You tend to keep alternative options available",
        },
      },

      Dynamic: {
        Dynamic: {
          insight:
            "Final decisions affect you differently depending on the situation",
          belief:
            "At times, certainty feels important, while at other times flexibility matters more",
          actionSummary: "Your response to outcomes varies across situations",
        },
      },
    },
  },
  employer: {
    uncertainty: {
      Unaligned: {
        Strong: {
          insight:
            "Delayed feedback creates strong discomfort that becomes difficult to ignore",
          belief: "It strongly feels that hiring progress may be slowing down",
          actionSummary:
            "You consistently act to restore movement rather than continue waiting",
        },
        Moderate: {
          insight: "Delayed feedback creates noticeable discomfort over time",
          belief: "It feels that hiring progress may be slowing down",
          actionSummary:
            "You tend to act to restore movement rather than continue waiting",
        },
      },

      Aligned: {
        Strong: {
          insight:
            "Missing information creates a strong need to understand the situation",
          belief:
            "It strongly feels that more clarity is needed before deciding what to do next",
          actionSummary:
            "You consistently seek understanding before taking further action",
        },
        Moderate: {
          insight:
            "Missing information creates a noticeable need to understand the situation",
          belief:
            "It feels that more clarity may be needed before deciding what to do next",
          actionSummary:
            "You tend to seek understanding before taking further action",
        },
      },

      "Auto-Aligned": {
        Strong: {
          insight:
            "Delayed feedback does not immediately change how you manage the hiring process",
          belief:
            "It strongly feels that your current approach remains appropriate",
          actionSummary:
            "You consistently maintain your approach despite uncertainty",
        },
        Moderate: {
          insight:
            "Delayed feedback does not immediately change how you manage the hiring process",
          belief:
            "It feels that your current approach may still be appropriate",
          actionSummary:
            "You tend to maintain your approach despite uncertainty",
        },
      },

      Misaligned: {
        Strong: {
          insight:
            "Delayed signals create strong sensitivity to what they might mean",
          belief:
            "It strongly feels that hidden factors may be affecting hiring progress",
          actionSummary:
            "You consistently respond to perceived signals rather than wait for clarity",
        },
        Moderate: {
          insight:
            "Delayed signals create noticeable sensitivity to what they might mean",
          belief:
            "It feels that hidden factors may be affecting hiring progress",
          actionSummary:
            "You tend to respond to perceived signals rather than wait for clarity",
        },
      },

      Dynamic: {
        Dynamic: {
          insight:
            "Delayed feedback affects you differently depending on the situation",
          belief:
            "At times, restoring movement feels important, while at other times understanding matters more",
          actionSummary:
            "Your response to uncertainty varies across situations",
        },
      },
    },

    pressure: {
      Unaligned: {
        Strong: {
          insight:
            "Increasing hiring pressure creates urgency that becomes difficult to ignore",
          belief: "It strongly feels that delays may affect hiring outcomes",
          actionSummary:
            "You consistently act quickly when hiring pressure increases",
        },
        Moderate: {
          insight: "Increasing hiring pressure creates urgency over time",
          belief: "It feels that delays may affect hiring outcomes",
          actionSummary:
            "You tend to act quickly when hiring pressure increases",
        },
      },

      Aligned: {
        Strong: {
          insight:
            "Increasing pressure creates a strong need to reassess priorities",
          belief:
            "It strongly feels that competing demands should be evaluated carefully",
          actionSummary:
            "You consistently evaluate pressure before making decisions",
        },
        Moderate: {
          insight: "Increasing pressure creates a need to reassess priorities",
          belief:
            "It feels that competing demands should be evaluated carefully",
          actionSummary:
            "You tend to evaluate pressure before making decisions",
        },
      },

      "Auto-Aligned": {
        Strong: {
          insight:
            "Increasing pressure does not immediately change how you manage hiring priorities",
          belief:
            "It strongly feels that staying consistent remains the best approach",
          actionSummary:
            "You consistently maintain your approach despite increasing pressure",
        },
        Moderate: {
          insight:
            "Increasing pressure does not immediately change how you manage hiring priorities",
          belief:
            "It feels that staying consistent may remain the best approach",
          actionSummary:
            "You tend to maintain your approach despite increasing pressure",
        },
      },

      Misaligned: {
        Strong: {
          insight:
            "Competitive hiring signals create strong sensitivity to visible outcomes",
          belief:
            "It strongly feels that some hiring priorities may matter more than others",
          actionSummary:
            "You consistently adjust your focus based on perceived importance",
        },
        Moderate: {
          insight:
            "Competitive hiring signals create noticeable sensitivity to visible outcomes",
          belief:
            "It feels that some hiring priorities may matter more than others",
          actionSummary:
            "You tend to adjust your focus based on perceived importance",
        },
      },

      Dynamic: {
        Dynamic: {
          insight:
            "Hiring pressure affects you differently depending on the situation",
          belief:
            "At times, speed feels important, while at other times clarity matters more",
          actionSummary: "Your response to pressure varies across situations",
        },
      },
    },

    control: {
      Unaligned: {
        Strong: {
          insight:
            "Losing control of the hiring process creates a strong need to act",
          belief:
            "It strongly feels that something must be done to restore momentum",
          actionSummary:
            "You consistently act to regain control rather than continue waiting",
        },
        Moderate: {
          insight: "Losing control of the hiring process creates a need to act",
          belief: "It feels that something should be done to restore momentum",
          actionSummary:
            "You tend to act to regain control rather than continue waiting",
        },
      },

      Aligned: {
        Strong: {
          insight:
            "Losing control creates a strong need to reassess the situation",
          belief:
            "It strongly feels that understanding the cause should come first",
          actionSummary:
            "You consistently evaluate before trying to regain control",
        },
        Moderate: {
          insight: "Losing control creates a need to reassess the situation",
          belief: "It feels that understanding the cause should come first",
          actionSummary: "You tend to evaluate before trying to regain control",
        },
      },

      "Auto-Aligned": {
        Strong: {
          insight:
            "Losing control does not immediately change how you manage execution",
          belief:
            "It strongly feels that staying consistent remains appropriate",
          actionSummary:
            "You consistently maintain your approach despite reduced control",
        },
        Moderate: {
          insight:
            "Losing control does not immediately change how you manage execution",
          belief: "It feels that staying consistent may remain appropriate",
          actionSummary:
            "You tend to maintain your approach despite reduced control",
        },
      },

      Misaligned: {
        Strong: {
          insight:
            "Loss of control creates strong sensitivity to stakeholder behavior",
          belief:
            "It strongly feels that influencing others may restore movement",
          actionSummary:
            "You consistently adjust your actions to strengthen coordination",
        },
        Moderate: {
          insight:
            "Loss of control creates sensitivity to stakeholder behavior",
          belief: "It feels that influencing others may restore movement",
          actionSummary:
            "You tend to adjust your actions to strengthen coordination",
        },
      },

      Dynamic: {
        Dynamic: {
          insight:
            "Loss of control affects you differently depending on the situation",
          belief:
            "At times, action feels necessary, while at other times reassessment feels more useful",
          actionSummary: "Your response to control varies across situations",
        },
      },
    },
    perception: {
      Unaligned: {
        Strong: {
          insight: "Reduced visibility creates a strong need to take action",
          belief:
            "It strongly feels that lack of visibility may affect hiring outcomes",
          actionSummary:
            "You consistently act to increase visibility and progress",
        },
        Moderate: {
          insight: "Reduced visibility creates a need to take action",
          belief: "It feels that lack of visibility may affect hiring outcomes",
          actionSummary: "You tend to act to increase visibility and progress",
        },
      },

      Aligned: {
        Strong: {
          insight:
            "Visibility concerns create a strong need to assess the situation",
          belief:
            "It strongly feels that timing and context should guide communication",
          actionSummary:
            "You consistently evaluate before changing how you respond",
        },
        Moderate: {
          insight: "Visibility concerns create a need to assess the situation",
          belief: "It feels that timing and context should guide communication",
          actionSummary: "You tend to evaluate before changing how you respond",
        },
      },

      "Auto-Aligned": {
        Strong: {
          insight:
            "Changes in visibility do not immediately alter how you manage hiring",
          belief:
            "It strongly feels that consistency matters more than perception",
          actionSummary:
            "You consistently maintain your approach despite changing perceptions",
        },
        Moderate: {
          insight:
            "Changes in visibility do not immediately alter how you manage hiring",
          belief: "It feels that consistency may matter more than perception",
          actionSummary:
            "You tend to maintain your approach despite changing perceptions",
        },
      },

      Misaligned: {
        Strong: {
          insight:
            "Stakeholder perception creates strong sensitivity to how performance is viewed",
          belief: "It strongly feels that perception influences hiring success",
          actionSummary:
            "You consistently act to shape how your work is perceived",
        },
        Moderate: {
          insight:
            "Stakeholder perception creates sensitivity to how performance is viewed",
          belief: "It feels that perception may influence hiring success",
          actionSummary: "You tend to act to shape how your work is perceived",
        },
      },

      Dynamic: {
        Dynamic: {
          insight:
            "Perception affects you differently depending on the situation",
          belief:
            "At times, visibility feels important, while at other times consistency matters more",
          actionSummary: "Your response to perception varies across situations",
        },
      },
    },

    outcome: {
      Unaligned: {
        Strong: {
          insight:
            "Uncertain hiring outcomes create strong pressure to secure closure",
          belief:
            "It strongly feels that delays may increase the risk of losing the candidate",
          actionSummary:
            "You consistently act to secure commitment rather than wait",
        },
        Moderate: {
          insight:
            "Uncertain hiring outcomes create pressure to secure closure",
          belief:
            "It feels that delays may increase the risk of losing the candidate",
          actionSummary:
            "You tend to act to secure commitment rather than wait",
        },
      },

      Aligned: {
        Strong: {
          insight:
            "Uncertain hiring outcomes create a strong need for further evaluation",
          belief:
            "It strongly feels that the candidate's concerns should be understood first",
          actionSummary:
            "You consistently reassess before securing final commitment",
        },
        Moderate: {
          insight:
            "Uncertain hiring outcomes create a need for further evaluation",
          belief:
            "It feels that the candidate's concerns should be understood first",
          actionSummary:
            "You tend to reassess before securing final commitment",
        },
      },

      "Auto-Aligned": {
        Strong: {
          insight:
            "Hiring outcomes do not immediately change your existing approach",
          belief:
            "It strongly feels that maintaining the process remains appropriate",
          actionSummary:
            "You consistently maintain your approach despite uncertainty",
        },
        Moderate: {
          insight:
            "Hiring outcomes do not immediately change your existing approach",
          belief:
            "It feels that maintaining the process may remain appropriate",
          actionSummary:
            "You tend to maintain your approach despite uncertainty",
        },
      },

      Misaligned: {
        Strong: {
          insight:
            "Candidate uncertainty creates strong sensitivity to commitment signals",
          belief:
            "It strongly feels that continued engagement may influence the outcome",
          actionSummary:
            "You consistently adjust your actions to reinforce commitment",
        },
        Moderate: {
          insight:
            "Candidate uncertainty creates sensitivity to commitment signals",
          belief:
            "It feels that continued engagement may influence the outcome",
          actionSummary:
            "You tend to adjust your actions to reinforce commitment",
        },
      },

      Dynamic: {
        Dynamic: {
          insight:
            "Hiring outcomes affect you differently depending on the situation",
          belief:
            "At times, securing commitment feels important, while at other times understanding matters more",
          actionSummary: "Your response to outcomes varies across situations",
        },
      },
    },
  },
  recruiter: {
    uncertainty: {
      Unaligned: {
        Strong: {
          insight:
            "Limited visibility creates strong discomfort that becomes difficult to ignore",
          belief:
            "It strongly feels that important hiring information may be missing",
          actionSummary:
            "You consistently act to restore clarity rather than continue without visibility",
        },
        Moderate: {
          insight: "Limited visibility creates noticeable discomfort over time",
          belief: "It feels that important hiring information may be missing",
          actionSummary:
            "You tend to act to restore clarity rather than continue without visibility",
        },
      },

      Aligned: {
        Strong: {
          insight:
            "Limited visibility creates a strong need to understand the situation",
          belief:
            "It strongly feels that more information is needed before deciding what to do next",
          actionSummary:
            "You consistently seek understanding before taking further action",
        },
        Moderate: {
          insight:
            "Limited visibility creates a noticeable need to understand the situation",
          belief:
            "It feels that more information may be needed before deciding what to do next",
          actionSummary:
            "You tend to seek understanding before taking further action",
        },
      },

      "Auto-Aligned": {
        Strong: {
          insight:
            "Limited visibility does not immediately change how you approach hiring decisions",
          belief:
            "It strongly feels that your current direction remains appropriate",
          actionSummary:
            "You consistently maintain your approach despite uncertainty",
        },
        Moderate: {
          insight:
            "Limited visibility does not immediately change how you approach hiring decisions",
          belief:
            "It feels that your current direction may still be appropriate",
          actionSummary:
            "You tend to maintain your approach despite uncertainty",
        },
      },

      Misaligned: {
        Strong: {
          insight:
            "Limited signals create strong sensitivity to what they might indicate",
          belief:
            "It strongly feels that unseen factors may be affecting hiring outcomes",
          actionSummary:
            "You consistently respond to perceived signals rather than wait for clarity",
        },
        Moderate: {
          insight:
            "Limited signals create noticeable sensitivity to what they might indicate",
          belief:
            "It feels that unseen factors may be affecting hiring outcomes",
          actionSummary:
            "You tend to respond to perceived signals rather than wait for clarity",
        },
      },

      Dynamic: {
        Dynamic: {
          insight:
            "Limited visibility affects you differently depending on the situation",
          belief:
            "At times, restoring clarity feels important, while at other times understanding matters more",
          actionSummary:
            "Your response to uncertainty varies across situations",
        },
      },
    },

    pressure: {
      Unaligned: {
        Strong: {
          insight:
            "Increasing business pressure creates urgency that becomes difficult to ignore",
          belief:
            "It strongly feels that delays may affect business priorities",
          actionSummary:
            "You consistently act quickly when hiring pressure increases",
        },
        Moderate: {
          insight: "Increasing business pressure creates urgency over time",
          belief: "It feels that delays may affect business priorities",
          actionSummary:
            "You tend to act quickly when hiring pressure increases",
        },
      },

      Aligned: {
        Strong: {
          insight:
            "Increasing pressure creates a strong need to reassess priorities",
          belief:
            "It strongly feels that competing priorities should be evaluated carefully",
          actionSummary:
            "You consistently evaluate pressure before making decisions",
        },
        Moderate: {
          insight: "Increasing pressure creates a need to reassess priorities",
          belief:
            "It feels that competing priorities should be evaluated carefully",
          actionSummary:
            "You tend to evaluate pressure before making decisions",
        },
      },

      "Auto-Aligned": {
        Strong: {
          insight:
            "Increasing pressure does not immediately change your existing direction",
          belief:
            "It strongly feels that staying consistent remains the best approach",
          actionSummary:
            "You consistently maintain your approach despite increasing pressure",
        },
        Moderate: {
          insight:
            "Increasing pressure does not immediately change your existing direction",
          belief:
            "It feels that staying consistent may remain the best approach",
          actionSummary:
            "You tend to maintain your approach despite increasing pressure",
        },
      },

      Misaligned: {
        Strong: {
          insight:
            "Competitive outcomes create strong sensitivity to perceived performance",
          belief:
            "It strongly feels that some priorities may have greater organizational value",
          actionSummary:
            "You consistently adjust your focus based on perceived impact",
        },
        Moderate: {
          insight:
            "Competitive outcomes create noticeable sensitivity to perceived performance",
          belief:
            "It feels that some priorities may have greater organizational value",
          actionSummary:
            "You tend to adjust your focus based on perceived impact",
        },
      },

      Dynamic: {
        Dynamic: {
          insight:
            "Business pressure affects you differently depending on the situation",
          belief:
            "At times, speed feels important, while at other times certainty matters more",
          actionSummary: "Your response to pressure varies across situations",
        },
      },
    },

    control: {
      Unaligned: {
        Strong: {
          insight:
            "Misalignment between expectations and outcomes creates a strong need to act",
          belief:
            "It strongly feels that something must be done to restore alignment",
          actionSummary:
            "You consistently act to regain control rather than continue waiting",
        },
        Moderate: {
          insight:
            "Misalignment between expectations and outcomes creates a need to act",
          belief: "It feels that something should be done to restore alignment",
          actionSummary:
            "You tend to act to regain control rather than continue waiting",
        },
      },

      Aligned: {
        Strong: {
          insight:
            "Misalignment creates a strong need to reassess the situation",
          belief:
            "It strongly feels that the underlying cause should be understood first",
          actionSummary:
            "You consistently evaluate before trying to regain control",
        },
        Moderate: {
          insight: "Misalignment creates a need to reassess the situation",
          belief:
            "It feels that the underlying cause should be understood first",
          actionSummary: "You tend to evaluate before trying to regain control",
        },
      },

      "Auto-Aligned": {
        Strong: {
          insight:
            "Misalignment does not immediately change your existing direction",
          belief:
            "It strongly feels that staying consistent remains appropriate",
          actionSummary:
            "You consistently maintain your approach despite reduced control",
        },
        Moderate: {
          insight:
            "Misalignment does not immediately change your existing direction",
          belief: "It feels that staying consistent may remain appropriate",
          actionSummary:
            "You tend to maintain your approach despite reduced control",
        },
      },

      Misaligned: {
        Strong: {
          insight:
            "Misalignment creates strong sensitivity to stakeholder behavior",
          belief: "It strongly feels that influence may restore coordination",
          actionSummary:
            "You consistently adjust your actions to restore alignment",
        },
        Moderate: {
          insight: "Misalignment creates sensitivity to stakeholder behavior",
          belief: "It feels that influence may restore coordination",
          actionSummary: "You tend to adjust your actions to restore alignment",
        },
      },

      Dynamic: {
        Dynamic: {
          insight:
            "Loss of alignment affects you differently depending on the situation",
          belief:
            "At times, action feels necessary, while at other times reassessment feels more useful",
          actionSummary: "Your response to control varies across situations",
        },
      },
    },

    perception: {
      Unaligned: {
        Strong: {
          insight: "Reduced visibility creates a strong need to take action",
          belief:
            "It strongly feels that limited visibility may affect organizational outcomes",
          actionSummary:
            "You consistently act to increase visibility and progress",
        },
        Moderate: {
          insight: "Reduced visibility creates a need to take action",
          belief:
            "It feels that limited visibility may affect organizational outcomes",
          actionSummary: "You tend to act to increase visibility and progress",
        },
      },

      Aligned: {
        Strong: {
          insight:
            "Visibility concerns create a strong need to assess the situation",
          belief:
            "It strongly feels that timing and context should guide communication",
          actionSummary:
            "You consistently evaluate before changing how you respond",
        },
        Moderate: {
          insight: "Visibility concerns create a need to assess the situation",
          belief: "It feels that timing and context should guide communication",
          actionSummary: "You tend to evaluate before changing how you respond",
        },
      },

      "Auto-Aligned": {
        Strong: {
          insight:
            "Changes in visibility do not immediately alter your direction",
          belief:
            "It strongly feels that consistency matters more than perception",
          actionSummary:
            "You consistently maintain your approach despite changing perceptions",
        },
        Moderate: {
          insight:
            "Changes in visibility do not immediately alter your direction",
          belief: "It feels that consistency may matter more than perception",
          actionSummary:
            "You tend to maintain your approach despite changing perceptions",
        },
      },

      Misaligned: {
        Strong: {
          insight:
            "Organizational perception creates strong sensitivity to how outcomes are viewed",
          belief:
            "It strongly feels that perception influences leadership effectiveness",
          actionSummary:
            "You consistently act to shape how outcomes are perceived",
        },
        Moderate: {
          insight:
            "Organizational perception creates sensitivity to how outcomes are viewed",
          belief:
            "It feels that perception may influence leadership effectiveness",
          actionSummary: "You tend to act to shape how outcomes are perceived",
        },
      },

      Dynamic: {
        Dynamic: {
          insight:
            "Perception affects you differently depending on the situation",
          belief:
            "At times, visibility feels important, while at other times consistency matters more",
          actionSummary: "Your response to perception varies across situations",
        },
      },
    },

    outcome: {
      Unaligned: {
        Strong: {
          insight:
            "Uncertain hiring outcomes create strong pressure to reach closure",
          belief:
            "It strongly feels that delaying decisions may increase organizational risk",
          actionSummary:
            "You consistently act to secure decisions rather than wait",
        },
        Moderate: {
          insight: "Uncertain hiring outcomes create pressure to reach closure",
          belief:
            "It feels that delaying decisions may increase organizational risk",
          actionSummary: "You tend to act to secure decisions rather than wait",
        },
      },

      Aligned: {
        Strong: {
          insight:
            "Uncertain hiring outcomes create a strong need for further evaluation",
          belief:
            "It strongly feels that unresolved concerns should be understood first",
          actionSummary:
            "You consistently reassess before making final commitments",
        },
        Moderate: {
          insight:
            "Uncertain hiring outcomes create a need for further evaluation",
          belief:
            "It feels that unresolved concerns should be understood first",
          actionSummary: "You tend to reassess before making final commitments",
        },
      },

      "Auto-Aligned": {
        Strong: {
          insight:
            "Hiring outcomes do not immediately change your existing direction",
          belief:
            "It strongly feels that maintaining the decision remains appropriate",
          actionSummary:
            "You consistently maintain your approach despite uncertainty",
        },
        Moderate: {
          insight:
            "Hiring outcomes do not immediately change your existing direction",
          belief:
            "It feels that maintaining the decision may remain appropriate",
          actionSummary:
            "You tend to maintain your approach despite uncertainty",
        },
      },

      Misaligned: {
        Strong: {
          insight:
            "Final outcomes create strong sensitivity to alternative possibilities",
          belief: "It strongly feels that better outcomes may still exist",
          actionSummary: "You consistently keep strategic options available",
        },
        Moderate: {
          insight:
            "Final outcomes create sensitivity to alternative possibilities",
          belief: "It feels that better outcomes may still exist",
          actionSummary: "You tend to keep strategic options available",
        },
      },

      Dynamic: {
        Dynamic: {
          insight:
            "Final outcomes affect you differently depending on the situation",
          belief:
            "At times, certainty feels important, while at other times flexibility matters more",
          actionSummary: "Your response to outcomes varies across situations",
        },
      },
    },
  },
};

export const secondaryExpressionByTendency: Record<Tendency, string> = {
  ACTION:
    "You also show moments of acting quickly — especially when uncertainty builds or time feels constrained.",
  EVALUATION:
    "You also show moments of pausing and evaluating — especially when clarity feels incomplete or the situation becomes complex.",
  STABILITY:
    "You also show moments of continuing steadily — especially when familiar patterns feel more reliable than change.",
  PERCEPTION:
    "You also show moments of shaping perception — especially when how you are seen begins to influence outcomes.",
};

export const modeSummary: Record<Mode, string> = {
  "Unaligned" :
                  "This suggests that action often comes before full evaluation.",

                "Aligned" :
                  "This suggests that decisions are guided by clarity rather than urgency.",

                "Auto-Aligned":
                  "This suggests that you prefer to stay steady even when conditions change.",

                "Misaligned":
                  "This suggests that interpreted signals influence your decisions.",

                "Dynamic":
                  "This suggests no single pattern consistently guides your decisions.",

              };

export function getSecondaryExpression(
  mode: Mode,
  band: Band,
  secondaryTendency: Tendency | null,
) {
  return {
    tendency:
      band === "Moderate" ? secondaryTendency : null,

    expression:
      band === "Moderate" && secondaryTendency
        ? secondaryExpressionByTendency[secondaryTendency]
        : null,

    summary: modeSummary[mode],
  };
}
export const tendencyContent: Record<
  Role,
  Record<
    Tendency | "DYNAMIC",
    {
      mode: Mode;
      patternName: { Strong: string[]; Moderate: string[], Dynamic:string[]  };
      phaseIntro: string;
      centerCards: { title: string; lines: string[] }[];
      yourPattern: { Strong?: string; Moderate?: string, Dynamic?:string  };
      // whatHappening: string[];
      whatThisMeans: string[];
      whatToDo: string[];
      reflection: string;
    }
  >
> = {
  candidate: {
    ACTION: {
      mode: "Unaligned",
      patternName: {
      Strong: ["Across these situations, the same alignment pattern consistently guided your decisions.",
        "Your job search actions may begin before you fully understand the opportunity, making it harder for your career decisions and actions to stay connected over time."
      ],
      Moderate: ["Across these situations, one alignment pattern guided your decisions more often than the others.",
        "Your job search actions may begin before you fully understand the opportunity, making it harder for your career decisions and actions to stay connected over time."
      ],
      Dynamic: ["Across these situations, different alignment patterns emerged, so no single pattern consistently guided your decisions.",
        "Your job search actions may begin before you fully understand the opportunity, making it harder for your career decisions and actions to stay connected over time."
      ],
    },
      phaseIntro:
        "Your decisions in this phase reveal how you respond when uncertainty feels difficult to tolerate",
      centerCards: [
        {
          title: "Your Natural Response ",
          lines: [
            "When uncertainty increases, you prefer to act rather than continue waiting.",
            "Taking action creates movement when clarity is still developing.",
          ],
        },
        {
          title: "What Drives Your Response",
          lines: [
            "Uncertainty creates a need for clarity and signals that action may be required.",
            "As uncertainty continues, the need to act becomes stronger.",
          ],
        },
        {
          title: "What This Creates",
          lines: [
            "Taking action creates immediate progress and reduces uncertainty in the moment.",
            "But when clarity is incomplete, direction may shift over time.",
          ],
        },
      ],
      yourPattern:{
Strong: "Across these situations, you consistently act early when clarity is missing.",
  Moderate: "Across these situations, you tend to act early when clarity is missing.",
      },

      whatThisMeans: [
        "Acting quickly creates a sense of progress — even when clarity is still forming.",
        "This isn’t impatience — it’s a response to unresolved uncertainty.",
      ],
      whatToDo: [
        "Pause before acting.",
        "Let understanding define direction before movement begins.",
        "Act when direction becomes clearer — not simply because uncertainty continues.",
      ],
      reflection:
        "Are you acting to move forward — or to resolve the discomfort of not knowing?",
    },

    EVALUATION: {
      mode: "Aligned",
       patternName: {
      Strong: ["Across these situations, the same alignment pattern consistently guided your decisions.",
        "Your understanding of opportunities, career decisions, and job search actions stays closely connected, helping you pursue roles that consistently support your career goals."
      ],
      Moderate: ["Across these situations, one alignment pattern guided your decisions more often than the others.",
        "Your understanding of opportunities, career decisions, and job search actions stays closely connected, helping you pursue roles that consistently support your career goals."
      ],
      Dynamic: ["Across these situations, different alignment patterns emerged, so no single pattern consistently guided your decisions.",
        "Your understanding of opportunities, career decisions, and job search actions stays closely connected, helping you pursue roles that consistently support your career goals."
      ],
    },
      phaseIntro:
        "Your decisions in this phase reveal how you use understanding to guide action.",
      centerCards: [
        {
          title: "Your Natural Response",
          lines: [
            "You prefer to pause and understand the situation before deciding what to do next.",
            "Your decisions are guided by clarity rather than urgency.",
          ],
        },
        {
          title: "What Drives Your Decisions",
          lines: [
            "Incomplete information creates a need for additional clarity.",
            "You prefer to understand the situation before deciding how to proceed.",
          ],
        },
        {
          title: "What This Creates",
          lines: [
            "Decisions based on understanding create consistency across changing situations. ",
            "This helps maintain direction even when conditions change.",
          ],
        },
      ],
      yourPattern:{
  Strong: "Across these situations, you consistently pause and evaluate before acting.",
  Moderate: "Across these situations, you tend to pause and evaluate before acting.",
      },
     
      whatThisMeans: [
        "This helps you make more considered decisions — by maintaining clarity before action.",
        "This isn’t hesitation. ",
        "It’s deliberate decision-making."
      ],
      whatToDo: [
        "Continue evaluating before acting.",
        "Act when clarity is sufficient — not perfect.",
        "Maintain balance between understanding and execution.",
      ],
      reflection:
        "Are you acting when clarity is sufficient — or waiting until it feels complete?",
    },

    STABILITY: {
      mode: "Auto-Aligned",
       patternName: {
      Strong: ["Across these situations, the same alignment pattern consistently guided your decisions.",
        "Your career decisions and job search actions are guided by familiar experiences and established routines, creating consistency while making it easier to overlook changing opportunities."
      ],
      Moderate: ["Across these situations, one alignment pattern guided your decisions more often than the others.",
        "Your career decisions and job search actions are guided by familiar experiences and established routines, creating consistency while making it easier to overlook changing opportunities."
      ],
      Dynamic: ["Across these situations, different alignment patterns emerged, so no single pattern consistently guided your decisions.",
        "Your career decisions and job search actions are guided by familiar experiences and established routines, creating consistency while making it easier to overlook changing opportunities."
      ],
    },
      phaseIntro:
        "Your decisions in this phase reveal how consistency shapes the way you respond.",
      centerCards: [
        {
          title: "Your Natural Response ",
          lines: [
            "You continue your approach even when hiring signals begin to change.",
            "Your decisions remain guided by patterns that have worked before.",
          ],
        },
        {
          title: "What Drives Your Decisions",
          lines: [
            "Previous experiences suggest that continuing remains appropriate.",
            "You rely on what has worked before when conditions remain uncertain.",
          ],
        },
        {
          title: "What This Creates",
          lines: [
            "Consistency creates stability and reduces the need for frequent adjustment.",
            "But when conditions change, your response may not change with them.",
          ],
        },
      ],
    yourPattern:{
    Strong: "Across these situations, you consistently continue without changing your approach.",
  Moderate: "Across these situations, you tend to continue without changing your approach.",
    },
      whatThisMeans: [
        "This creates consistency — but may cause important changes to go unnoticed.",
        "This isn’t avoidance.",
        "It’s a preference for continuity."
      ],
      whatToDo: [
        "Reassess periodically.",
        "Check if your approach still fits the situation.",
        "Adjust when conditions change — not only outcomes.",
      ],
      reflection:
        "Are you continuing because it still fits — or because it has worked before?",
    },

    PERCEPTION: {
      mode: "Misaligned",
      patternName: {
      Strong: ["Across these situations, the same alignment pattern consistently guided your decisions.",
        "Your career decisions may become influenced by how opportunities appear and the career outcomes you anticipate, making it easier to commit before those expectations are fully confirmed."
      ],
      Moderate: ["Across these situations, one alignment pattern guided your decisions more often than the others.",
        "Your career decisions may become influenced by how opportunities appear and the career outcomes you anticipate, making it easier to commit before those expectations are fully confirmed."
      ],
      Dynamic: ["Across these situations, different alignment patterns emerged, so no single pattern consistently guided your decisions.",
        "Your career decisions may become influenced by how opportunities appear and the career outcomes you anticipate, making it easier to commit before those expectations are fully confirmed."
      ],
    },
      phaseIntro:
        "Your decisions in this phase reveal how interpretation influences the way you respond.",
      centerCards: [
        {
          title: "Your Natural Response",
          lines: [
            "You respond to what situations appear to mean, not only to what is confirmed.",
            "Signals and interpretations influence how you decide.",
          ],
        },
        {
          title: "What Drives Your Decisions",
          lines: [
            "Incomplete signals increase the importance of interpretation.",
            "Your response adjusts based on what you believe those signals indicate.",
          ],
        },
        {
          title: "What This Creates",
          lines: [
            "Your actions remain responsive to signals and interpretations.",
            "But when interpretation replaces clarity, direction may shift from reality.",
          ],
        },
      ],
      yourPattern:{
      Strong: "Across these situations, you consistently act in ways that increase your visibility or influence perception.",
  Moderate: "Across these situations, you tend to act in ways that increase your visibility or influence perception.",
  },
      whatThisMeans: [
        "This can improve responsiveness — but may shift attention away from what is most important.",
        "This isn’t manipulation.",
        "It’s a response to how situations are perceived externally."
      ],
      whatToDo: [
        "Separate what is observed from what is assumed.",
        "Act based on what is real — not what appears.",
        "Anchor decisions in clarity, not perception.",
      ],
      reflection:
        "Are you responding to what is confirmed — or to what it seems to mean?",
    },

    DYNAMIC: {
      mode: "Dynamic",
      patternName: {
      Strong: ["Across these situations, the same alignment pattern consistently guided your decisions.",
        "The connection between opportunities, career decisions, and job search actions shifts from one situation to another, making it harder to maintain a consistent career direction."
      ],
      Moderate: ["Across these situations, one alignment pattern guided your decisions more often than the others.",
        "The connection between opportunities, career decisions, and job search actions shifts from one situation to another, making it harder to maintain a consistent career direction."
      ],
      Dynamic: ["Across these situations, different alignment patterns emerged, so no single pattern consistently guided your decisions.",
        "The connection between opportunities, career decisions, and job search actions shifts from one situation to another, making it harder to maintain a consistent career direction."
      ],
    },
      phaseIntro:
        "Your decisions in this phase reveal how your response changes across situations.",
      centerCards: [
        {
          title: "Your Natural Response",
          lines: [
            "Your response changes depending on the hiring situation and opportunity involved.",
            "You adapt your approach rather than follow one consistent pattern.",
          ],
        },
        {
          title: "What Drives Your Decisions",
          lines: [
            "Different hiring situations require different responses.",
            "You adjust based on what appears most relevant in the moment.",
          ],
        },
        {
          title: "What This Creates",
          lines: [
            "This flexibility allows adaptation across changing situations.",
            "But without a consistent reference point, decisions may vary across situations.",
          ],
        },
      ],
      yourPattern:{
         Dynamic: "Across these situations, your responses vary depending on context.",
      },
      whatThisMeans: [
        "You are flexible and responsive — but this creates inconsistency in decision-making.",
        "Without a consistent reference point, your decisions may change across situations.",
      ],
      whatToDo: [
        "Identify what should remain consistent across situations. ",
        "Let your response adapt — but keep direction stable.",
        "Use context to adjust — not to drift.",
      ],
      reflection:
        "When your response changes, what remains constant in how you decide?",
    },
  },
  recruiter: {
    ACTION: {
      mode: "Unaligned",
       patternName: {
      Strong: ["Across these situations, the same alignment pattern consistently guided your decisions.",
        "Recruitment activities may begin before role expectations are fully understood, making it harder for hiring decisions and execution to remain connected throughout the hiring process."
      ],
      Moderate: ["Across these situations, one alignment pattern guided your decisions more often than the others.",
        "Recruitment activities may begin before role expectations are fully understood, making it harder for hiring decisions and execution to remain connected throughout the hiring process."
      ],
      Dynamic: ["Across these situations, different alignment patterns emerged, so no single pattern consistently guided your decisions.",
        "Recruitment activities may begin before role expectations are fully understood, making it harder for hiring decisions and execution to remain connected throughout the hiring process."
      ],
    },
      phaseIntro:
        "Your decisions in this phase reveal how you respond when uncertainty feels difficult to tolerate",
      centerCards: [
        {
          title: "Your Natural Response ",
          lines: [
            "When hiring progress slows or becomes unclear, you prefer to act rather than continue waiting.",
            "Taking action creates momentum when execution stalls.",
          ],
        },
        {
          title: "What Drives Your Response",
          lines: [
            "Delays in hiring progress signal that momentum may be slowing. ",
            "As uncertainty continues, the need to act becomes stronger.",
          ],
        },
        {
          title: "What This Creates",
          lines: [
            "Taking action creates immediate progress and reduces uncertainty in the moment.",
            "But when clarity is incomplete, direction may shift over time.",
          ],
        },
      ],
      yourPattern:{
 Strong: "Across these situations, you consistently act early when clarity is missing.",
  Moderate: "Across these situations, you tend to act early when clarity is missing.",
      },

      whatThisMeans: [
        "Acting quickly creates a sense of progress — even when clarity is still forming.",
        "This isn’t impatience — it’s a response to unresolved uncertainty.",
      ],
      whatToDo: [
        "Pause before acting.",
        "Let understanding define direction before movement begins.",
        "Act when direction becomes clearer — not simply because uncertainty continues.",
      ],
      reflection:
        "Are you acting to move forward — or to resolve the discomfort of not knowing?",
    },

    EVALUATION: {
      mode: "Aligned",
       patternName: {
      Strong: ["Across these situations, the same alignment pattern consistently guided your decisions.",
        "Your understanding of candidate fit, hiring decisions, and recruitment execution stays closely connected, helping you move the right candidates through the hiring process with consistency."
      ],
      Moderate: ["Across these situations, one alignment pattern guided your decisions more often than the others.",
        "Your understanding of candidate fit, hiring decisions, and recruitment execution stays closely connected, helping you move the right candidates through the hiring process with consistency."
      ],
      Dynamic: ["Across these situations, different alignment patterns emerged, so no single pattern consistently guided your decisions.",
        "Your understanding of candidate fit, hiring decisions, and recruitment execution stays closely connected, helping you move the right candidates through the hiring process with consistency."
      ],
    },
      phaseIntro:
        "Your decisions in this phase reveal how you use understanding to guide action.",
      centerCards: [
        {
          title: "Your Natural Response",
          lines: [
            "You prefer to understand what is affecting hiring progress before acting.",
            "Your decisions are guided by clarity rather than urgency.",
          ],
        },
        {
          title: "What Drives Your Decisions",
          lines: [
            "Incomplete hiring information creates a need for greater visibility.",
            "You prefer to understand what is affecting progress before acting.",
          ],
        },
        {
          title: "What This Creates",
          lines: [
            "Decisions based on understanding create consistency across changing situations. ",
            "This helps maintain direction even when conditions change.",
          ],
        },
      ],
      yourPattern:{
  Strong: "Across these situations, you consistently pause and evaluate before acting.",
  Moderate: "Across these situations, you tend to pause and evaluate before acting.",
      },
     
      whatThisMeans: [
        "This helps you make more considered decisions — by maintaining clarity before action.",
        "This isn’t hesitation. ",
        "It’s deliberate decision-making."
      ],
      whatToDo: [
        "Continue evaluating before acting.",
        "Act when clarity is sufficient — not perfect.",
        "Maintain balance between understanding and execution.",
      ],
      reflection:
        "Are you acting when clarity is sufficient — or waiting until it feels complete?",
    },

    STABILITY: {
      mode: "Auto-Aligned",
        patternName: {
      Strong: ["Across these situations, the same alignment pattern consistently guided your decisions.",
        "Your hiring decisions and recruitment execution are guided by established hiring practices and familiar workflows, creating consistency while making it harder to adapt to changing talent needs."
      ],
      Moderate: ["Across these situations, one alignment pattern guided your decisions more often than the others.",
        "Your hiring decisions and recruitment execution are guided by established hiring practices and familiar workflows, creating consistency while making it harder to adapt to changing talent needs."
      ],
      Dynamic: ["Across these situations, different alignment patterns emerged, so no single pattern consistently guided your decisions.",
        "Your hiring decisions and recruitment execution are guided by established hiring practices and familiar workflows, creating consistency while making it harder to adapt to changing talent needs."
      ],
    },
      phaseIntro:
        "Your decisions in this phase reveal how consistency shapes the way you respond.",
      centerCards: [
        {
          title: "Your Natural Response ",
          lines: [
            "You continue your approach even when hiring conditions begin to change.",
            "Your decisions remain guided by processes that have worked before.",
          ],
        },
        {
          title: "What Drives Your Decisions",
          lines: [
            "Previous hiring outcomes suggest that continuing remains appropriate.",
            "You rely on established approaches when conditions remain uncertain.",
          ],
        },
        {
          title: "What This Creates",
          lines: [
            "Consistency creates stability and reduces the need for frequent adjustment.",
            "But when conditions change, your response may not change with them.",
          ],
        },
      ],
    yourPattern:{
  Strong: "Across these situations, you consistently continue without changing your approach.",
  Moderate: "Across these situations, you tend to continue without changing your approach.",
    },
      whatThisMeans: [
        "This creates consistency — but may cause important changes to go unnoticed.",
        "This isn’t avoidance.",
        "It’s a preference for continuity."
      ],
      whatToDo: [
        "Reassess periodically.",
        "Check if your approach still fits the situation.",
        "Adjust when conditions change — not only outcomes.",
      ],
      reflection:
        "Are you continuing because it still fits — or because it has worked before?",
    },

    PERCEPTION: {
      mode: "Misaligned",
       patternName: {
      Strong: ["Across these situations, the same alignment pattern consistently guided your decisions.",
        "Your hiring decisions may become influenced by candidate signals and first impressions, together with the hiring outcomes you anticipate, making it easier to advance candidates before those expectations are fully validated."
      ],
      Moderate: ["Across these situations, one alignment pattern guided your decisions more often than the others.",
        "Your hiring decisions may become influenced by candidate signals and first impressions, together with the hiring outcomes you anticipate, making it easier to advance candidates before those expectations are fully validated."
      ],
      Dynamic: ["Across these situations, different alignment patterns emerged, so no single pattern consistently guided your decisions.",
        "Your hiring decisions may become influenced by candidate signals and first impressions, together with the hiring outcomes you anticipate, making it easier to advance candidates before those expectations are fully validated."
      ],
    },
      phaseIntro:
        "Your decisions in this phase reveal how interpretation influences the way you respond.",
      centerCards: [
        {
          title: "Your Natural Response",
          lines: [
            "You respond to what hiring situations appear to mean, not only to what is confirmed.",
            "Signals and interpretations influence how you decide.",
          ],
        },
        {
          title: "What Drives Your Decisions",
          lines: [
            "Stakeholder signals increase the importance of interpretation.",
            "Your response adjusts based on what you believe those signals indicate.",
          ],
        },
        {
          title: "What This Creates",
          lines: [
            "Your actions remain responsive to signals and interpretations.",
            "But when interpretation replaces clarity, direction may shift from reality.",
          ],
        },
      ],
      yourPattern:{
       Strong: "Across these situations, you consistently act in ways that increase your visibility or influence perception.",
  Moderate: "Across these situations, you tend to act in ways that increase your visibility or influence perception.",
 },
      whatThisMeans: [
        "This can improve responsiveness — but may shift attention away from what is most important.",
        "This isn’t manipulation.",
        "It’s a response to how situations are perceived externally."
      ],
      whatToDo: [
        "Separate what is observed from what is assumed.",
        "Act based on what is real — not what appears.",
        "Anchor decisions in clarity, not perception.",
      ],
      reflection:
        "Are you responding to what is confirmed — or to what it seems to mean?",
    },

    DYNAMIC: {
      mode: "Dynamic",
      patternName: {
      Strong: ["Across these situations, the same alignment pattern consistently guided your decisions.",
        "The connection between candidate evaluation, hiring decisions, and recruitment execution shifts across situations, making it harder to maintain a consistent hiring process."
      ],
      Moderate: ["Across these situations, one alignment pattern guided your decisions more often than the others.",
        "The connection between candidate evaluation, hiring decisions, and recruitment execution shifts across situations, making it harder to maintain a consistent hiring process."
      ],
      Dynamic: ["Across these situations, different alignment patterns emerged, so no single pattern consistently guided your decisions.",
        "The connection between candidate evaluation, hiring decisions, and recruitment execution shifts across situations, making it harder to maintain a consistent hiring process."
      ],
    },
      phaseIntro:
        "Your decisions in this phase reveal how your response changes across situations.",
      centerCards: [
        {
          title: "Your Natural Response",
          lines: [
            "Your response changes depending on hiring conditions and stakeholder dynamics.",
            "You adapt your approach rather than rely on one consistent pattern.",
          ],
        },
        {
          title: "What Drives Your Decisions",
          lines: [
            "Different hiring situations require different responses.",
            "You adjust based on current hiring conditions and priorities.",
          ],
        },
        {
          title: "What This Creates",
          lines: [
            "This flexibility allows adaptation across changing situations.",
            "But without a consistent reference point, decisions may vary across situations.",
          ],
        },
      ],
      yourPattern:{
      Dynamic: "Across these situations, your responses vary depending on context.",

      },
      whatThisMeans: [
        "You are flexible and responsive — but this creates inconsistency in decision-making.",
        "Without a consistent reference point, your decisions may change across situations.",
      ],
      whatToDo: [
        "Identify what should remain consistent across situations. ",
        "Let your response adapt — but keep direction stable.",
        "Use context to adjust — not to drift.",
      ],
      reflection:
        "When your response changes, what remains constant in how you decide?",
    },
  }, employer: {
    ACTION: {
      mode: "Unaligned",
       patternName: {
      Strong: ["Across these situations, the same alignment pattern consistently guided your decisions.",
        "Hiring initiatives may begin before business priorities are fully aligned, making it harder for hiring decisions and workforce direction to remain connected as hiring progresses."
      ],
      Moderate: ["Across these situations, one alignment pattern guided your decisions more often than the others.",
        "Hiring initiatives may begin before business priorities are fully aligned, making it harder for hiring decisions and workforce direction to remain connected as hiring progresses."
      ],
      Dynamic: ["Across these situations, different alignment patterns emerged, so no single pattern consistently guided your decisions.",
        "Hiring initiatives may begin before business priorities are fully aligned, making it harder for hiring decisions and workforce direction to remain connected as hiring progresses."
      ],
    },
      phaseIntro:
        "Your decisions in this phase reveal how you respond when uncertainty feels difficult to tolerate",
      centerCards: [
        {
          title: "Your Natural Response ",
          lines: [
            "When hiring outcomes become uncertain, you prefer to act rather than continue waiting.",
            "Taking action creates movement when business priorities feel at risk.",
          ],
        },
        {
          title: "What Drives Your Response",
          lines: [
            "Limited visibility signals that important decisions may require attention.",
            "As uncertainty continues, the need to act becomes stronger.",
          ],
        },
        {
          title: "What This Creates",
          lines: [
            "Taking action creates immediate progress and reduces uncertainty in the moment.",
            "But when clarity is incomplete, direction may shift over time.",
          ],
        },
      ],
      yourPattern:{
  Strong: "Across these situations, you consistently act early when clarity is missing.",
  Moderate: "Across these situations, you tend to act early when clarity is missing.",

      },

      whatThisMeans: [
        "Acting quickly creates a sense of progress — even when clarity is still forming.",
        "This isn’t impatience — it’s a response to unresolved uncertainty.",
      ],
      whatToDo: [
        "Pause before acting.",
        "Let understanding define direction before movement begins.",
        "Act when direction becomes clearer — not simply because uncertainty continues.",
      ],
      reflection:
        "Are you acting to move forward — or to resolve the discomfort of not knowing?",
    },

    EVALUATION: {
      mode: "Aligned",
        patternName: {
      Strong: ["Across these situations, the same alignment pattern consistently guided your decisions.",
        "Your understanding of business needs, hiring decisions, and workforce direction stays closely connected, helping your hiring investments consistently support long-term business growth.  "
      ],
      Moderate: ["Across these situations, one alignment pattern guided your decisions more often than the others.",
        "Your understanding of business needs, hiring decisions, and workforce direction stays closely connected, helping your hiring investments consistently support long-term business growth.  "
      ],
      Dynamic: ["Across these situations, different alignment patterns emerged, so no single pattern consistently guided your decisions.",
        "Your understanding of business needs, hiring decisions, and workforce direction stays closely connected, helping your hiring investments consistently support long-term business growth.  "
      ],
    },
      phaseIntro:
        "Your decisions in this phase reveal how you use understanding to guide action.",
      centerCards: [
        {
          title: "Your Natural Response",
          lines: [
            "You prefer to understand the situation before making hiring decisions.",
            "Your decisions are guided by clarity rather than urgency.",
          ],
        },
        {
          title: "What Drives Your Decisions",
          lines: [
            "Limited hiring visibility creates a need for additional information.",
            "You prefer to understand the broader situation before deciding.",
          ],
        },
        {
          title: "What This Creates",
          lines: [
            "Decisions based on understanding create consistency across changing situations. ",
            "This helps maintain direction even when conditions change.",
          ],
        },
      ],
      yourPattern:{
 Strong: "Across these situations, you consistently pause and evaluate before acting.",
  Moderate: "Across these situations, you tend to pause and evaluate before acting.",
      },
     
      whatThisMeans: [
        "This helps you make more considered decisions — by maintaining clarity before action.",
        "This isn’t hesitation. ",
        "It’s deliberate decision-making."
      ],
      whatToDo: [
        "Continue evaluating before acting.",
        "Act when clarity is sufficient — not perfect.",
        "Maintain balance between understanding and execution.",
      ],
      reflection:
        "Are you acting when clarity is sufficient — or waiting until it feels complete?",
    },

    STABILITY: {
      mode: "Auto-Aligned",
       patternName: {
      Strong: ["Across these situations, the same alignment pattern consistently guided your decisions.",
        "Your hiring decisions and workforce direction are guided by established hiring policies and talent acquisition practices, creating stability while making it harder to respond to changing business priorities."
      ],
      Moderate: ["Across these situations, one alignment pattern guided your decisions more often than the others.",
        "Your hiring decisions and workforce direction are guided by established hiring policies and talent acquisition practices, creating stability while making it harder to respond to changing business priorities."
      ],
      Dynamic: ["Across these situations, different alignment patterns emerged, so no single pattern consistently guided your decisions.",
        "Your hiring decisions and workforce direction are guided by established hiring policies and talent acquisition practices, creating stability while making it harder to respond to changing business priorities."
      ],
    },
      phaseIntro:
        "Your decisions in this phase reveal how consistency shapes the way you respond.",
      centerCards: [
        {
          title: "Your Natural Response ",
          lines: [
            "You continue your approach even when business conditions begin to change.",
            "Your decisions remain guided by strategies that have worked before.",
          ],
        },
        {
          title: "What Drives Your Decisions",
          lines: [
            "Previous business outcomes suggest that continuing remains appropriate.",
            "You rely on established direction when conditions remain uncertain.",
          ],
        },
        {
          title: "What This Creates",
          lines: [
            "Consistency creates stability and reduces the need for frequent adjustment.",
            "But when conditions change, your response may not change with them.",
          ],
        },
      ],
    yourPattern:{
        Strong: "Across these situations, you consistently continue without changing your approach.",
  Moderate: "Across these situations, you tend to continue without changing your approach.",
    },
      whatThisMeans: [
        "This creates consistency — but may cause important changes to go unnoticed.",
        "This isn’t avoidance.",
        "It’s a preference for continuity."
      ],
      whatToDo: [
        "Reassess periodically.",
        "Check if your approach still fits the situation.",
        "Adjust when conditions change — not only outcomes.",
      ],
      reflection:
        "Are you continuing because it still fits — or because it has worked before?",
    },

    PERCEPTION: {
      mode: "Misaligned",
      patternName: {
      Strong: ["Across these situations, the same alignment pattern consistently guided your decisions.",
        "Your hiring direction may become influenced by interpreted business and market signals, together with the growth outcomes you anticipate, making it easier to expand hiring before those expectations are fully validated."
      ],
      Moderate: ["Across these situations, one alignment pattern guided your decisions more often than the others.",
        "Your hiring direction may become influenced by interpreted business and market signals, together with the growth outcomes you anticipate, making it easier to expand hiring before those expectations are fully validated."
      ],
      Dynamic: ["Across these situations, different alignment patterns emerged, so no single pattern consistently guided your decisions.",
        "Your hiring direction may become influenced by interpreted business and market signals, together with the growth outcomes you anticipate, making it easier to expand hiring before those expectations are fully validated."
      ],
    },
      phaseIntro:
        "Your decisions in this phase reveal how interpretation influences the way you respond.",
      centerCards: [
        {
          title: "Your Natural Response",
          lines: [
            "You respond to what business situations appear to mean, not only to what is confirmed.",
            "Signals and interpretations influence how you decide.",
          ],
        },
        {
          title: "What Drives Your Decisions",
          lines: [
            "Organizational signals increase the importance of interpretation.",
            "Your response adjusts based on what you believe those signals indicate.",
          ],
        },
        {
          title: "What This Creates",
          lines: [
            "Your actions remain responsive to signals and interpretations.",
            "But when interpretation replaces clarity, direction may shift from reality.",
          ],
        },
      ],
      yourPattern:{
  Strong: "Across these situations, you consistently act in ways that increase your visibility or influence perception.",
  Moderate: "Across these situations, you tend to act in ways that increase your visibility or influence perception.",
  },
      whatThisMeans: [
        "This can improve responsiveness — but may shift attention away from what is most important.",
        "This isn’t manipulation.",
        "It’s a response to how situations are perceived externally."
      ],
      whatToDo: [
        "Separate what is observed from what is assumed.",
        "Act based on what is real — not what appears.",
        "Anchor decisions in clarity, not perception.",
      ],
      reflection:
        "Are you responding to what is confirmed — or to what it seems to mean?",
    },

    DYNAMIC: {
      mode: "Dynamic",
      patternName: {
      Strong: ["Across these situations, the same alignment pattern consistently guided your decisions.",
        "The connection between business priorities, hiring decisions, and workforce direction shifts across situations, making it harder to sustain a consistent hiring strategy."
      ],
      Moderate: ["Across these situations, one alignment pattern guided your decisions more often than the others.",
        "The connection between business priorities, hiring decisions, and workforce direction shifts across situations, making it harder to sustain a consistent hiring strategy."
      ],
      Dynamic: ["Across these situations, different alignment patterns emerged, so no single pattern consistently guided your decisions.",
        "The connection between business priorities, hiring decisions, and workforce direction shifts across situations, making it harder to sustain a consistent hiring strategy."
      ],
    },
      phaseIntro:
        "Your decisions in this phase reveal how your response changes across situations.",
      centerCards: [
        {
          title: "Your Natural Response",
          lines: [
            "Your response changes depending on business priorities and hiring requirements.",
            "You adapt your approach rather than follow one consistent strategy.",
          ],
        },
        {
          title: "What Drives Your Decisions",
          lines: [
            "Different business situations require different responses.",
            "You adjust based on organizational priorities and circumstances.",
          ],
        },
        {
          title: "What This Creates",
          lines: [
            "This flexibility allows adaptation across changing situations.",
            "But without a consistent reference point, decisions may vary across situations.",
          ],
        },
      ],
      yourPattern:{
     Dynamic: "Across these situations, your responses vary depending on context.",
      },
      whatThisMeans: [
        "You are flexible and responsive — but this creates inconsistency in decision-making.",
        "Without a consistent reference point, your decisions may change across situations.",
      ],
      whatToDo: [
        "Identify what should remain consistent across situations. ",
        "Let your response adapt — but keep direction stable.",
        "Use context to adjust — not to drift.",
      ],
      reflection:
        "When your response changes, what remains constant in how you decide?",
    },
  },
};

export const overallContentByMode:Record<Role, Record<
  Mode,
  {
    insight:  { Strong: string[]; Moderate: string[], Dynamic:string[]  };
    pattern: string[];
    trigger: string[];
    outcome: string[];
    health: {
      vision: "Strong" | "Moderate" | "Weak";
      strategy: "Strong" | "Moderate" | "Weak";
      execution: "Strong" | "Moderate" | "Weak";
    };
    slips: { title: string; level: string; text: string }[];
    behavioralSummary: string[];
    whatThisMeans: string[];
    whatToImprove: string[];
  }
>> = {
candidate: {
  Aligned: {
    insight: {
      Strong: ["Throughout the assessment, the same alignment pattern consistently guided your decisions.",
        "Your understanding of opportunities, career decisions, and job search actions remained closely connected, helping you pursue career opportunities with greater clarity, consistency, and long-term direction. "
      ],
      Moderate: ["Throughout the assessment, one alignment pattern guided your decisions more often than the others.",
        "Your understanding of opportunities, career decisions, and job search actions remained closely connected, helping you pursue career opportunities with greater clarity, consistency, and long-term direction. "
      ],
      Dynamic: ["Throughout the assessment, different alignment patterns emerged, so no single pattern consistently guided your decisions.",
        "Your understanding of opportunities, career decisions, and job search actions remained closely connected, helping you pursue career opportunities with greater clarity, consistency, and long-term direction. "
      ],
    },
    pattern: [
      "You evaluate situations before deciding how to respond.",
      "Your decisions are guided by understanding rather than urgency.",
    ],
    trigger: [
      "Uncertainty creates a need for additional clarity.",
      "You prefer to understand before deciding how to proceed.",
    ],
    outcome: [
      "This creates consistency across changing situations.",
      "But extended evaluation may delay movement when direction is already clear.",
    ],
    health: { vision: "Strong", strategy: "Strong", execution: "Moderate" },
    slips: [
      {
        title: "Extended Evaluation",
        level: "Medium",
        text: "Evaluation continues even after sufficient clarity is available, delaying transition into execution.",
      },
      {
        title: "Delayed Execution",
        level: "Medium",
        text: "Decisions remain valid, but are not consistently translated into timely action.",
      },
    ],
    behavioralSummary: [
      "Across situations, you pause before acting.",
      "You seek understanding, connect information, and then decide.",
      "This creates consistency and direction.",
      "But when evaluation continues too long, movement may begin to slow.",
    ],
    whatThisMeans: [
      "You maintain alignment by grounding decisions in clarity.",
      "But when evaluation continues beyond necessity, execution begins to lag behind intent.",
      "Over time, this reduces how effectively decisions translate into outcomes.",
    ],
    whatToImprove: [
      "Act when clarity is sufficient.",
      "Avoid extending evaluation beyond usefulness.",
      "Shift from understanding to execution sooner.",
      "Let decisions move forward once direction is stable.",
    ],
  },
   "Auto-Aligned": {
    insight: {
      Strong: ["Throughout the assessment, the same alignment pattern consistently guided your decisions.",
        "Your career decisions and job search actions were consistently guided by familiar experiences and established routines, creating stability while making it easier to overlook changing career opportunities."
      ],
      Moderate: ["Throughout the assessment, one alignment pattern guided your decisions more often than the others.",
        "Your career decisions and job search actions were consistently guided by familiar experiences and established routines, creating stability while making it easier to overlook changing career opportunities."
      ],
      Dynamic: ["Throughout the assessment, different alignment patterns emerged, so no single pattern consistently guided your decisions.",
        "Your career decisions and job search actions were consistently guided by familiar experiences and established routines, creating stability while making it easier to overlook changing career opportunities."
      ],
    },
    pattern: [
      "You rely on familiar approaches rather than re-evaluating every situation.",
      "Your responses remain consistent based on previous experiences.",
    ],
    trigger: [
      "Previous experiences continue to guide your decisions.",
      "Established approaches remain the preferred way of responding.",
    ],
    outcome: [
      "This creates consistency and reduces the need for frequent adjustment.",
      "But important changes may go unnoticed over time.",
    ],
    health: { vision: "Strong", strategy: "Strong", execution: "Strong" },
    slips: [
      {
        title: "Continuing Established Patterns ",
        level: "Medium",
        text: "Established patterns continue even when current conditions no longer support them.",
      },
      {
        title: "Missing New Signals ",
        level: "Medium",
        text: "New information is not actively reassessed, allowing previous approaches to continue unchanged.",
      },
    ],
    behavioralSummary: [
      "Across situations, you maintain a steady approach.",
      "You recognize familiar patterns, continue established responses, and maintain direction.",
      "This creates consistency and reduces the need for constant adjustment.",
      "But when situations change, your response may not change with them.",
    ],
    whatThisMeans: [
      "You maintain alignment efficiently in stable conditions.",
      "But when situations shift, alignment continues from the past instead of adapting to the present.",
      "Over time, this reduces how accurately actions reflect present conditions.",
    ],
    whatToImprove: [
      "Re-evaluate when conditions shift.",
      "Don’t assume past patterns still apply.",
      "Introduce deliberate checkpoints for reassessment.",
      "Update your approach when context changes, not after outcomes.",
    ],
  },
    Misaligned: {
    insight: {
      Strong: ["Throughout the assessment, the same alignment pattern consistently guided your decisions.",
        "Your career decisions were often influenced by how opportunities appeared and the career outcomes you anticipated, making it easier to commit before those expectations were fully confirmed."
      ],
      Moderate: ["Throughout the assessment, one alignment pattern guided your decisions more often than the others.",
        "Your career decisions were often influenced by how opportunities appeared and the career outcomes you anticipated, making it easier to commit before those expectations were fully confirmed."
      ],
      Dynamic: ["Throughout the assessment, different alignment patterns emerged, so no single pattern consistently guided your decisions.",
        "Your career decisions were often influenced by how opportunities appeared and the career outcomes you anticipated, making it easier to commit before those expectations were fully confirmed."
      ],
    },
    pattern: [
      "You respond based on how situations appear rather than waiting for complete confirmation.",
      "Your decisions are influenced by signals, interpretations, and perceived meaning.",
    ],
    trigger: [
      "Incomplete information increases the importance of interpretation.",
      "You rely on what signals appear to indicate before clarity is fully established.",
    ],
    outcome: [
      "This keeps you responsive to changing situations and signals.",
      "But direction may shift before information becomes fully clear.",
    ],
    health: { vision: "Moderate", strategy: "Weak", execution: "Strong" },
    slips: [
      {
        title: "Acting On Interpretation",
        level: "High",
        text: "Interpretation influences decisions before clarity is established.",
      },
      {
        title: "Interpreting Before Confirming",
        level: "Medium",
        text: "Decisions are shaped by perceived meaning before situations are fully validated.",
      },
    ],
    behavioralSummary: [
      "Across situations, you respond quickly to signals.",
      "You interpret what is happening, assess what the signals suggest, and then decide.",
      "This keeps you responsive to changing situations.",
      "But when interpretation forms before clarity, direction may shift before it is confirmed.",
    ],
    whatThisMeans: [
      "You stay responsive to changing signals.",
      "But when perception replaces validation, alignment shifts away from what is actually happening.",
      "Over time, this creates a gap between intention and outcome.",
    ],
    whatToImprove: [
      "Validate before acting.",
      "Separate interpretation from actual signals.",
      "Ground decisions in what is confirmed, not assumed.",
      "Pause to check the meaning before responding to perception.",
    ],
  },
   Unaligned: {
   insight: {
      Strong: ["Throughout the assessment, the same alignment pattern consistently guided your decisions.",
        "Your job search actions often began before the opportunity was fully understood, making it harder for your career decisions and actions to remain connected over time."
      ],
      Moderate: ["Throughout the assessment, one alignment pattern guided your decisions more often than the others.",
        "Your job search actions often began before the opportunity was fully understood, making it harder for your career decisions and actions to remain connected over time."
      ],
      Dynamic: ["Throughout the assessment, different alignment patterns emerged, so no single pattern consistently guided your decisions.",
        "Your job search actions often began before the opportunity was fully understood, making it harder for your career decisions and actions to remain connected over time."
      ],
    },
    pattern: [
      "You act early when hiring situations become unclear or uncertain.",
      "Progress becomes more important than waiting for complete clarity.",
    ],
    trigger: [
      "Delays and uncertainty increase the need to move forward quickly.",
      "Acting becomes a way to restore momentum when situations feel unresolved.",
    ],
    outcome: [
      "This creates momentum and reduces uncertainty in the short term.",
      "But direction may continue to evolve after action has already begun.",
    ],
    health: { vision: "Weak", strategy: "Moderate", execution: "Strong" },
    slips: [
      {
        title: "Acting Too Early ",
        level: "High",
        text: "Action is initiated before direction is fully understood, causing direction to continue forming during execution.",
      },
      {
        title: "Moving Before Understanding ",
        level: "Medium",
        text: "Understanding follows action instead of guiding it, reducing consistency in outcomes.",
      },
    ],
    behavioralSummary: [
      "Across situations, you move quickly when opportunities feel uncertain.",
      "You prefer to create movement, reduce delays, and regain direction.",
      "This creates responsiveness and momentum.",
      "Direction may continue to change after decisions are made.",
    ],
    whatThisMeans: [
      "You maintain momentum under uncertainty.",
      "But when action replaces clarity, direction is formed during execution, not before.",
      "Over time, this leads to repeated correction and reduces outcome consistency.",
    ],
    whatToImprove: [
      "Pause before acting.",
      "Separate urgency from direction.",
      "Let evaluation define the path before movement begins.",
      "Act to execute a decision — not to create one.",
    ],
  },
   Dynamic: {
    insight: {
      Strong: ["Throughout the assessment, the same alignment pattern consistently guided your decisions.",
        "The connection between opportunities, career decisions, and job search actions shifted across situations, making it harder to maintain a consistent career direction over time."
      ],
      Moderate: ["Throughout the assessment, one alignment pattern guided your decisions more often than the others.",
        "The connection between opportunities, career decisions, and job search actions shifted across situations, making it harder to maintain a consistent career direction over time."
      ],
      Dynamic: ["Throughout the assessment, different alignment patterns emerged, so no single pattern consistently guided your decisions.",
        "The connection between opportunities, career decisions, and job search actions shifted across situations, making it harder to maintain a consistent career direction over time."
      ],
    },
    pattern: [
      "Your responses change across hiring situations without following one consistent approach.",
      "Different priorities guide your decisions depending on the opportunity and context.",
    ],
    trigger: [
      "You adjust your approach depending on the situation.",
      "No one approach consistently guides every decision.",
    ],
    outcome: [
      "This allows you to adapt across changing hiring situations.",
      "But your decisions may vary when similar situations occur again.",
    ],
    health: { vision: "Moderate", strategy: "Moderate", execution: "Moderate" },
    slips: [
      {
        title: "Changing Responses",
        level: "High",
        text: "Responses vary across similar situations, preventing stable alignment from forming.",
      },
      {
        title: "No Consistent Approach",
        level: "Medium",
        text: "Different situations are approached differently, reducing consistency across decisions.",
      },
    ],
    behavioralSummary: [
      "Across situations, your responses change.",
      "At times you act quickly, at times you evaluate, and at times you continue without change.",
      "This creates adaptability across situations.",
      "But without a consistent reference point, your decisions may vary over time.",
    ],
    whatThisMeans: [
      "You are flexible and responsive across situations.",
      "But without a consistent reference point, your approach may vary from one situation to another.",
      "Over time, this reduces outcome predictability.",
    ],
    whatToImprove: [
      "Define a consistent decision anchor.",
      "Identify what remains stable across situations.",
      "Use context to adapt, not to change your core approach.",
      "Stabilize how you respond to similar patterns over time.",
    ],
  },
},
recruiter: {
   Aligned: {
    insight: {
      Strong: ["Throughout the assessment, the same alignment pattern consistently guided your decisions.",
        "Your understanding of candidate fit, hiring decisions, and recruitment execution remained closely connected, helping you maintain a consistent hiring process and deliver better recruitment outcomes."
      ],
      Moderate: ["Throughout the assessment, one alignment pattern guided your decisions more often than the others.",
        "Your understanding of candidate fit, hiring decisions, and recruitment execution remained closely connected, helping you maintain a consistent hiring process and deliver better recruitment outcomes."
      ],
      Dynamic: ["Throughout the assessment, different alignment patterns emerged, so no single pattern consistently guided your decisions.",
        "Your understanding of candidate fit, hiring decisions, and recruitment execution remained closely connected, helping you maintain a consistent hiring process and deliver better recruitment outcomes."
      ],
    },
    pattern: [
      "You evaluate hiring situations before deciding how to respond.",
      "Your decisions are guided by understanding rather than urgency.",
    ],
    trigger: [
      "Uncertainty creates a need for greater visibility.",
      "You prefer to understand what is affecting hiring progress before acting.",
    ],
    outcome: [
      "This creates consistency across changing hiring situations.",
      "But extended evaluation may delay movement when direction is already clear.",
    ],
    health: { vision: "Strong", strategy: "Strong", execution: "Moderate" },
    slips: [
      {
        title: "Extended Evaluation",
        level: "Medium",
        text: "Evaluation continues even after sufficient clarity is available, delaying transition into execution.",
      },
      {
        title: "Delayed Execution",
        level: "Medium",
        text: "Decisions remain valid, but are not consistently translated into timely action.",
      },
    ],
    behavioralSummary: [
      "Across situations, you pause before acting.",
      "You seek understanding, connect information, and then decide.",
      "This creates consistency and direction.",
      "But when evaluation continues too long, execution may begin to slow.",
    ],
    whatThisMeans: [
      "You maintain alignment by grounding decisions in clarity.",
      "But when evaluation continues beyond necessity, execution begins to lag behind intent.",
      "Over time, this reduces how effectively decisions translate into outcomes.",
    ],
    whatToImprove: [
      "Act when clarity is sufficient.",
      "Avoid extending evaluation beyond usefulness.",
      "Shift from understanding to execution sooner.",
      "Let decisions move forward once direction is stable.",
    ],
  },
   "Auto-Aligned": {
    insight: {
      Strong: ["Throughout the assessment, the same alignment pattern consistently guided your decisions.",
        "Your hiring decisions and recruitment execution were consistently guided by established hiring practices and familiar workflows, creating operational stability while making it harder to adapt to changing talent needs."
      ],
      Moderate: ["Throughout the assessment, one alignment pattern guided your decisions more often than the others.",
        "Your hiring decisions and recruitment execution were consistently guided by established hiring practices and familiar workflows, creating operational stability while making it harder to adapt to changing talent needs."
      ],
      Dynamic: ["Throughout the assessment, different alignment patterns emerged, so no single pattern consistently guided your decisions.",
        "Your hiring decisions and recruitment execution were consistently guided by established hiring practices and familiar workflows, creating operational stability while making it harder to adapt to changing talent needs."
      ],
    },
    pattern: [
      "You rely on established hiring approaches rather than re-evaluating every situation.",
      "Your responses remain consistent based on previous hiring experiences.",
    ],
    trigger: [
      "Previous hiring outcomes continue to guide your decisions.",
      "Established processes remain the preferred way of responding.",
    ],
    outcome: [
      "This creates consistency and reduces the need for frequent adjustment.",
      "But important changes may go unnoticed over time.",
    ],
    health: { vision: "Strong", strategy: "Strong", execution: "Strong" },
    slips: [
      {
        title: "Continuing Established Patterns ",
        level: "Medium",
        text: "Established patterns continue even when current conditions no longer support them.",
      },
      {
        title: "Missing New Signals ",
        level: "Medium",
        text: "New information is not actively reassessed, allowing previous approaches to continue unchanged.",
      },
    ],
    behavioralSummary: [
      "Across situations, you maintain a steady approach.",
      "You recognize familiar patterns, continue established processes, and maintain progress.",
      "This creates consistency and reduces the need for constant adjustment.",
      "But when situations change, your response may not change with them.",
    ],
    whatThisMeans: [
      "You maintain alignment efficiently in stable conditions.",
      "But when situations shift, alignment continues from the past instead of adapting to the present.",
      "Over time, this reduces how accurately actions reflect present conditions.",
    ],
    whatToImprove: [
      "Re-evaluate when conditions shift.",
      "Don’t assume past patterns still apply.",
      "Introduce deliberate checkpoints for reassessment.",
      "Update your approach when context changes, not after outcomes.",
    ],
  },
     Misaligned: {
   insight: {
      Strong: ["Throughout the assessment, the same alignment pattern consistently guided your decisions.",
        "Your hiring decisions were often influenced by candidate signals and the hiring outcomes you anticipated, making it easier to advance candidates before those expectations were fully validated."
      ],
      Moderate: ["Throughout the assessment, one alignment pattern guided your decisions more often than the others.",
        "Your hiring decisions were often influenced by candidate signals and the hiring outcomes you anticipated, making it easier to advance candidates before those expectations were fully validated."
      ],
      Dynamic: ["Throughout the assessment, different alignment patterns emerged, so no single pattern consistently guided your decisions.",
        "Your hiring decisions were often influenced by candidate signals and the hiring outcomes you anticipated, making it easier to advance candidates before those expectations were fully validated."
      ],
    },
    pattern: [
      "You respond based on how hiring situations appear rather than waiting for complete confirmation.",
      "Your decisions are influenced by signals, interpretations, and perceived intent.",
    ],
    trigger: [
      "Incomplete hiring information increases the importance of interpretation.",
      "You rely on what stakeholder signals appear to indicate before clarity is fully established.",
    ],
    outcome: [
      "This keeps you responsive to changing hiring conditions.",
      "But direction may shift before information becomes fully clear.",
    ],
    health: { vision: "Moderate", strategy: "Weak", execution: "Strong" },
    slips: [
      {
        title: "Acting On Interpretation",
        level: "High",
        text: "Interpretation influences decisions before clarity is established.",
      },
      {
        title: "Interpreting Before Confirming",
        level: "Medium",
        text: "Decisions are shaped by perceived meaning before situations are fully validated.",
      },
    ],
    behavioralSummary: [
      "Across situations, you respond quickly to signals.",
      "You interpret hiring behavior, assess what the signals suggest, and then decide.",
      "This keeps you responsive to changing hiring conditions.",
      "But when interpretation forms before clarity, direction may shift before it is confirmed.",
    ],
    whatThisMeans: [
      "You stay responsive to changing signals.",
      "But when perception replaces validation, alignment shifts away from what is actually happening.",
      "Over time, this creates a gap between intention and outcome.",
    ],
    whatToImprove: [
      "Validate before acting.",
      "Separate interpretation from actual signals.",
      "Ground decisions in what is confirmed, not assumed.",
      "Pause to check the meaning before responding to perception.",
    ],
  },
  Unaligned: {
    insight: {
      Strong: ["Throughout the assessment, the same alignment pattern consistently guided your decisions.",
        "Your recruitment activities often began before role expectations were fully understood, making it harder for hiring decisions and execution to remain connected throughout the hiring process."
      ],
      Moderate: ["Throughout the assessment, one alignment pattern guided your decisions more often than the others.",
        "Your recruitment activities often began before role expectations were fully understood, making it harder for hiring decisions and execution to remain connected throughout the hiring process."
      ],
      Dynamic: ["Throughout the assessment, different alignment patterns emerged, so no single pattern consistently guided your decisions.",
        "Your recruitment activities often began before role expectations were fully understood, making it harder for hiring decisions and execution to remain connected throughout the hiring process."
      ],
    },
    pattern: [
      "You act early when hiring progress begins to slow or become unclear.",
      "Maintaining momentum becomes more important than waiting for additional information.",
    ],
    trigger: [
      "Delays in hiring progress increase the need to restore movement.",
      "Acting becomes a way to maintain hiring continuity.",
    ],
    outcome: [
      "This creates responsiveness and maintains momentum.",
      "But direction may continue to evolve during execution.",
    ],
    health: { vision: "Weak", strategy: "Moderate", execution: "Strong" },
    slips: [
      {
        title: "Acting Too Early ",
        level: "High",
        text: "Action is initiated before direction is fully understood, causing direction to continue forming during execution.",
      },
      {
        title: "Moving Before Understanding ",
        level: "Medium",
        text: "Understanding follows action instead of guiding it, reducing consistency in outcomes.",
      },
    ],
    behavioralSummary: [
      "Across situations, you move quickly when hiring progress becomes uncertain.",
      "You prefer to create movement, maintain momentum, and restore progress.",
      "This creates speed and responsiveness.",
      "But when action comes before clarity, execution may continue to adjust over time.",
    ],
    whatThisMeans: [
      "You maintain momentum under uncertainty.",
      "But when action replaces clarity, direction is formed during execution, not before.",
      "Over time, this leads to repeated correction and reduces outcome consistency.",
    ],
    whatToImprove: [
      "Pause before acting.",
      "Separate urgency from direction.",
      "Let evaluation define the path before movement begins.",
      "Act to execute a decision — not to create one.",
    ],
  },
  Dynamic: {
     insight: {
      Strong: ["Throughout the assessment, the same alignment pattern consistently guided your decisions.",
        "The connection between candidate evaluation, hiring decisions, and recruitment execution shifted across situations, making it harder to maintain a consistent hiring process over time."
      ],
      Moderate: ["Throughout the assessment, one alignment pattern guided your decisions more often than the others.",
        "The connection between candidate evaluation, hiring decisions, and recruitment execution shifted across situations, making it harder to maintain a consistent hiring process over time."
      ],
      Dynamic: ["Throughout the assessment, different alignment patterns emerged, so no single pattern consistently guided your decisions.",
        "The connection between candidate evaluation, hiring decisions, and recruitment execution shifted across situations, making it harder to maintain a consistent hiring process over time."
      ],
    },
    pattern: [
      "Your responses change across hiring situations without following one consistent approach.",
      "Different priorities guide your decisions depending on hiring conditions and stakeholder needs.",
    ],
    trigger: [
      "You adjust your approach depending on hiring conditions.",
      "You adjust your approach depending on hiring conditions.",
    ],
    outcome: [
      "This allows you to adapt across changing hiring environments.",
      "But your decisions may vary when similar situations occur again.",
    ],
    health: { vision: "Moderate", strategy: "Moderate", execution: "Moderate" },
    slips: [
      {
        title: "Changing Responses",
        level: "High",
        text: "Responses vary across similar situations, preventing stable alignment from forming.",
      },
      {
        title: "No Consistent Approach",
        level: "Medium",
        text: "Different situations are approached differently, reducing consistency across decisions.",
      },
    ],
    behavioralSummary: [
      "Across situations, your responses change.",
      "At times you act quickly, at times you evaluate, and at times you maintain existing approaches.",
      "This creates adaptability across hiring situations.",
      "But without a consistent reference point, your decisions may vary over time.",
    ],
    whatThisMeans: [
      "You are flexible and responsive across situations.",
      "But without a consistent reference point, your approach may vary from one situation to another.",
      "Over time, this reduces outcome predictability.",
    ],
    whatToImprove: [
      "Define a consistent decision anchor.",
      "Identify what remains stable across situations.",
      "Use context to adapt, not to change your core approach.",
      "Stabilize how you respond to similar patterns over time.",
    ],
  },
},
employer: {
   Aligned: {
    insight: {
      Strong: ["Throughout the assessment, the same alignment pattern consistently guided your decisions.",
        "Your understanding of business needs, hiring decisions, and workforce direction remained closely connected, helping your hiring investments consistently support long-term business growth."
      ],
      Moderate: ["Throughout the assessment, one alignment pattern guided your decisions more often than the others.",
        "Your understanding of business needs, hiring decisions, and workforce direction remained closely connected, helping your hiring investments consistently support long-term business growth."
      ],
      Dynamic: ["Throughout the assessment, different alignment patterns emerged, so no single pattern consistently guided your decisions.",
        "Your understanding of business needs, hiring decisions, and workforce direction remained closely connected, helping your hiring investments consistently support long-term business growth."
      ],
    },
    pattern: [
      "You evaluate situations before making hiring decisions.",
      "Your decisions are guided by understanding rather than urgency.",
    ],
    trigger: [
      "Uncertainty creates a need for additional information.",
      "You prefer to understand the broader situation before deciding.",
    ],
    outcome: [
      "This creates consistency across changing business situations.",
      "But extended evaluation may delay movement when direction is already clear.",
    ],
    health: { vision: "Strong", strategy: "Strong", execution: "Moderate" },
    slips: [
      {
        title: "Extended Evaluation",
        level: "Medium",
        text: "Evaluation continues even after sufficient clarity is available, delaying transition into execution.",
      },
      {
        title: "Delayed Execution",
        level: "Medium",
        text: "Decisions remain valid, but are not consistently translated into timely action.",
      },
    ],
    behavioralSummary: [
      "Across situations, you pause before acting.",
      "You seek understanding, connect information, and then decide.",
      "This creates consistency and direction.",
      "But when evaluation continues too long, organizational movement may begin to slow.",
    ],
    whatThisMeans: [
      "You maintain alignment by grounding decisions in clarity.",
      "But when evaluation continues beyond necessity, execution begins to lag behind intent.",
      "Over time, this reduces how effectively decisions translate into outcomes.",
    ],
    whatToImprove: [
      "Act when clarity is sufficient.",
      "Avoid extending evaluation beyond usefulness.",
      "Shift from understanding to execution sooner.",
      "Let decisions move forward once direction is stable.",
    ],
  },
   "Auto-Aligned": {
    insight: {
      Strong: ["Throughout the assessment, the same alignment pattern consistently guided your decisions.",
        "Your hiring decisions and workforce direction were consistently guided by established hiring policies and talent acquisition practices, creating organizational stability while making it harder to respond to evolving business priorities."
      ],
      Moderate: ["Throughout the assessment, one alignment pattern guided your decisions more often than the others.",
        "Your hiring decisions and workforce direction were consistently guided by established hiring policies and talent acquisition practices, creating organizational stability while making it harder to respond to evolving business priorities."
      ],
      Dynamic: ["Throughout the assessment, different alignment patterns emerged, so no single pattern consistently guided your decisions.",
        "Your hiring decisions and workforce direction were consistently guided by established hiring policies and talent acquisition practices, creating organizational stability while making it harder to respond to evolving business priorities."
      ],
    },
    pattern: [
      "You rely on established approaches rather than re-evaluating every situation.",
      "Your decisions remain consistent based on previous business outcomes.",
    ],
    trigger: [
      "Previous outcomes continue to guide your decisions.",
      "Established direction remains the preferred way of responding.",
    ],
    outcome: [
      "This creates consistency and reduces the need for frequent adjustment.",
      "But important changes may go unnoticed over time.",
    ],
    health: { vision: "Strong", strategy: "Strong", execution: "Strong" },
    slips: [
      {
        title: "Continuing Established Patterns ",
        level: "Medium",
        text: "Established patterns continue even when current conditions no longer support them.",
      },
      {
        title: "Missing New Signals ",
        level: "Medium",
        text: "New information is not actively reassessed, allowing previous approaches to continue unchanged.",
      },
    ],
    behavioralSummary: [
      "Across situations, you maintain a steady approach.",
      "You recognize familiar patterns, continue established direction, and maintain consistency.",
      "This creates consistency and reduces the need for constant adjustment.",
      "But when situations change, your response may not change with them.",
    ],
    whatThisMeans: [
      "You maintain alignment efficiently in stable conditions.",
      "But when situations shift, alignment continues from the past instead of adapting to the present.",
      "Over time, this reduces how accurately actions reflect present conditions.",
    ],
    whatToImprove: [
      "Re-evaluate when conditions shift.",
      "Don’t assume past patterns still apply.",
      "Introduce deliberate checkpoints for reassessment.",
      "Update your approach when context changes, not after outcomes.",
    ],
  },
     Misaligned: {
   insight: {
      Strong: ["Throughout the assessment, the same alignment pattern consistently guided your decisions.",
        "Your hiring direction was often influenced by interpreted business and market signals and the growth outcomes you anticipated, making it easier to expand hiring before those expectations were fully validated."
      ],
      Moderate: ["Throughout the assessment, one alignment pattern guided your decisions more often than the others.",
        "Your hiring direction was often influenced by interpreted business and market signals and the growth outcomes you anticipated, making it easier to expand hiring before those expectations were fully validated."
      ],
      Dynamic: ["Throughout the assessment, different alignment patterns emerged, so no single pattern consistently guided your decisions.",
        "Your hiring direction was often influenced by interpreted business and market signals and the growth outcomes you anticipated, making it easier to expand hiring before those expectations were fully validated."
      ],
    },
    pattern: [
      "You respond based on how business situations appear rather than waiting for complete confirmation.",
      "Your decisions are influenced by signals, interpretations, and perceived impact.",
    ],
    trigger: [
      "Incomplete business information increases the importance of interpretation.",
      "You rely on what organizational signals appear to indicate before clarity is fully established.",
    ],
    outcome: [
      "This keeps you responsive to changing business conditions.",
      "But direction may shift before information becomes fully clear.",
    ],
    health: { vision: "Moderate", strategy: "Weak", execution: "Strong" },
    slips: [
      {
        title: "Acting On Interpretation",
        level: "High",
        text: "Interpretation influences decisions before clarity is established.",
      },
      {
        title: "Interpreting Before Confirming",
        level: "Medium",
        text: "Decisions are shaped by perceived meaning before situations are fully validated.",
      },
    ],
    behavioralSummary: [
      "Across situations, you respond quickly to signals.",
      "You interpret business conditions, assess what the signals suggest, and then decide.",
      "This keeps you responsive to changing situations.",
      "But when interpretation forms before clarity, direction may shift before it is confirmed.",
    ],
    whatThisMeans: [
      "You stay responsive to changing signals.",
      "But when perception replaces validation, alignment shifts away from what is actually happening.",
      "Over time, this creates a gap between intention and outcome.",
    ],
    whatToImprove: [
      "Validate before acting.",
      "Separate interpretation from actual signals.",
      "Ground decisions in what is confirmed, not assumed.",
      "Pause to check the meaning before responding to perception.",
    ],
  },
  Unaligned: {
   insight: {
      Strong: ["Throughout the assessment, the same alignment pattern consistently guided your decisions.",
        "Your hiring initiatives often began before business priorities were fully understood, making it harder for hiring decisions and workforce direction to remain connected as hiring progressed."
      ],
      Moderate: ["Throughout the assessment, one alignment pattern guided your decisions more often than the others.",
        "Your hiring initiatives often began before business priorities were fully understood, making it harder for hiring decisions and workforce direction to remain connected as hiring progressed."
      ],
      Dynamic: ["Throughout the assessment, different alignment patterns emerged, so no single pattern consistently guided your decisions.",
        "Your hiring initiatives often began before business priorities were fully understood, making it harder for hiring decisions and workforce direction to remain connected as hiring progressed."
      ],
    },
    pattern: [
      "You act early when hiring outcomes or priorities become uncertain.",
      "Maintaining progress becomes more important than waiting for additional clarity.",
    ],
    trigger: [
      "Limited visibility increases the need to restore direction.",
      "Acting becomes a way to maintain organizational momentum.",
    ],
    outcome: [
      "This creates movement and supports progress.",
      "But direction may continue to evolve after decisions are made.",
    ],
    health: { vision: "Weak", strategy: "Moderate", execution: "Strong" },
    slips: [
      {
        title: "Acting Too Early ",
        level: "High",
        text: "Action is initiated before direction is fully understood, causing direction to continue forming during execution.",
      },
      {
        title: "Moving Before Understanding ",
        level: "Medium",
        text: "Understanding follows action instead of guiding it, reducing consistency in outcomes.",
      },
    ],
    behavioralSummary: [
      "Across situations, you move quickly when business priorities become uncertain.",
      "You prefer to create movement, maintain progress, and restore direction.",
      "This creates responsiveness and momentum.",
      "But when action comes before clarity, direction may continue to evolve over time.",
    ],
    whatThisMeans: [
      "You maintain momentum under uncertainty.",
      "But when action replaces clarity, direction is formed during execution, not before.",
      "Over time, this leads to repeated correction and reduces outcome consistency.",
    ],
    whatToImprove: [
      "Pause before acting.",
      "Separate urgency from direction.",
      "Let evaluation define the path before movement begins.",
      "Act to execute a decision — not to create one.",
    ],
  },
   Dynamic: {
      insight: {
      Strong: ["Throughout the assessment, the same alignment pattern consistently guided your decisions.",
        "The connection between business priorities, hiring decisions, and workforce direction shifted across situations, making it harder to sustain a consistent hiring strategy over time."
      ],
      Moderate: ["Throughout the assessment, one alignment pattern guided your decisions more often than the others.",
        "The connection between business priorities, hiring decisions, and workforce direction shifted across situations, making it harder to sustain a consistent hiring strategy over time."
      ],
      Dynamic: ["Throughout the assessment, different alignment patterns emerged, so no single pattern consistently guided your decisions.",
        "The connection between business priorities, hiring decisions, and workforce direction shifted across situations, making it harder to sustain a consistent hiring strategy over time."
      ],
    },
    pattern: [
      "Your responses change across business situations without following one consistent approach.",
      "Different priorities guide your decisions depending on organizational needs and context.",
    ],
    trigger: [
      "You adjust your approach depending on business priorities.",
      "No one approach consistently guides every decision.",
    ],
    outcome: [
      "This allows you to adapt across changing business conditions.",
      "But your decisions may vary when similar situations occur again.",
    ],
    health: { vision: "Moderate", strategy: "Moderate", execution: "Moderate" },
    slips: [
      {
        title: "Changing Responses",
        level: "High",
        text: "Responses vary across similar situations, preventing stable alignment from forming.",
      },
      {
        title: "No Consistent Approach",
        level: "Medium",
        text: "Different situations are approached differently, reducing consistency across decisions.",
      },
    ],
    behavioralSummary: [
      "Across situations, your responses change.",
      "At times you act quickly, at times you evaluate, and at times you maintain existing approaches.",
      "This creates adaptability across business situations.",
      "But without a consistent reference point, your decisions may vary over time.",
    ],
    whatThisMeans: [
      "You are flexible and responsive across situations.",
      "But without a consistent reference point, your approach may vary from one situation to another.",
      "Over time, this reduces outcome predictability.",
    ],
    whatToImprove: [
      "Define a consistent decision anchor.",
      "Identify what remains stable across situations.",
      "Use context to adapt, not to change your core approach.",
      "Stabilize how you respond to similar patterns over time.",
    ],
  },
},
 



 

 
};
