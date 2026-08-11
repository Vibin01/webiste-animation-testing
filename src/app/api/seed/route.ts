import prisma from "@/lib/db/prisma";

import { candidateQuestions } from "@/content/questions/candidate";
import { recruiterQuestions } from "@/content/questions/recruiter";
import { employerQuestions } from "@/content/questions/employer";

export async function GET() {
  try {
    // console.log("Seeding All Questions...");

    await prisma.question.deleteMany({});


    
    // -------------------------
    // Candidate Questions
    // -------------------------
    for (const q of candidateQuestions) {
      await prisma.question.create({
        data: {
          role: "candidate",
          phaseKey: q.phase,
          situation: q.situation,

          options: {
            create: Object.entries(q.options).map(([key, opt]) => ({
              optionKey: key,
              text: opt.text,
              tendency: opt.tendency,
            })),
          },
        },
      });
    }

    // -------------------------
    // Recruiter Questions
    // -------------------------
    for (const q of recruiterQuestions) {
      await prisma.question.create({
        data: {
          role: "recruiter",
          phaseKey: q.phase,
          situation: q.situation,

          options: {
            create: Object.entries(q.options).map(([key, opt]) => ({
              optionKey: key,
              text: opt.text,
              tendency: opt.tendency,
            })),
          },
        },
      });
    }

    // -------------------------
    // Employer Questions
    // -------------------------
    for (const q of employerQuestions) {
      await prisma.question.create({
        data: {
          role: "employer",
          phaseKey: q.phase,
          situation: q.situation,

          options: {
            create: Object.entries(q.options).map(([key, opt]) => ({
              optionKey: key,
              text: opt.text,
              tendency: opt.tendency,
            })),
          },
        },
      });
    }

    return Response.json({
      success: true,
      message: `
        Candidate Questions: ${candidateQuestions.length}
        Recruiter Questions: ${recruiterQuestions.length}
        Employer Questions: ${employerQuestions.length}
      `,
    });
  } catch (error) {
    console.error(error);

    return Response.json(
      {
        success: false,
        error: "Seeding failed",
      },
      {
        status: 500,
      }
    );
  }
}