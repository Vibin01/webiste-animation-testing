import * as candidate from "@/data/CandidateSolutionPageData";
import * as recruiter from "@/data/RecruiterSolutionPageData";

export const solutionPageMap = {
  "candidate-alignment-system": {
    "interview-feedback-for-candidates": candidate.easyEvaluator,
    "manage-job-offers": candidate.easyFacilitator,
    "manage-interview-schedule": candidate.easyScheduler,
    "verified-employer-interview-insights": candidate.easyReviewer,
  },
  "recruiter-alignment-system": {
    "collect-interview-feedback": recruiter.easyEvaluator,
    "improve-offer-to-joining-conversion": recruiter.easyFacilitator,
    "manage-interview-scheduling": recruiter.easyScheduler,
    "predict-interview-no-shows": recruiter.easyPredictor,
  },
  
};