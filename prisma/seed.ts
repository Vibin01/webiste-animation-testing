import {prisma} from "../src/lib/db/prisma";
import { candidateQuestions } from "../src/content/questions/candidate";

async function main() {
  console.log("Seeding Database with Questions...");

  // Delete existing questions
  // Related options will be deleted automatically because of onDelete: Cascade
  await prisma.question.deleteMany({});

  // Insert candidate questions
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

  console.log(
    `Successfully seeded ${candidateQuestions.length} candidate questions.`
  );
}

main()
  .catch((e) => {
    console.error("Seeding Error:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });