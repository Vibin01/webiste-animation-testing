import { getAllBlogs } from "@/lib/mdx";
import { MetadataRoute } from "next";

export const revalidate = 3600;


const blogs = await getAllBlogs();

function getBiWeeklyDate(): Date {
  const now = new Date();
  const twoWeeksInMs = 14 * 24 * 60 * 60 * 1000;

  return new Date(
    Math.floor(now.getTime() / twoWeeksInMs) * twoWeeksInMs
  );
}

const urls = [
  "/solutions/candidate-alignment-system/interview-feedback-for-candidates",
  "/solutions/candidate-alignment-system/manage-job-offers",
  "/solutions/candidate-alignment-system/manage-interview-schedule",
  "/solutions/candidate-alignment-system/verified-employer-interview-insights",

  "/solutions/recruiter-alignment-system/collect-interview-feedback",
  "/solutions/recruiter-alignment-system/improve-offer-to-joining-conversion",
  "/solutions/recruiter-alignment-system/manage-interview-scheduling",
  "/solutions/recruiter-alignment-system/predict-interview-no-shows",

  "/solutions/employer-alignment-system/improve-hiring-target-achievement",
  "/solutions/employer-alignment-system/standardize-hiring-communication",
  "/solutions/employer-alignment-system/analyze-hiring-workload-and-velocity",
  "/solutions/employer-alignment-system/improve-offer-acceptance-to-joining",
  "/solutions/employer-alignment-system/identify-hiring-misalignment-signals",
  "/solutions/employer-alignment-system/predict-hiring-drop-offs-early",
  "/solutions/employer-alignment-system/track-hiring-progress-and-bottlenecks",
];


export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const resourceRoutes: MetadataRoute.Sitemap = [
    {
      url: `${process.env.BASE_URL}/resources/blogs`,
      lastModified: getBiWeeklyDate(),
    },
    {
      url: `${process.env.BASE_URL}/resources/alignment-test`,
      lastModified: getBiWeeklyDate(),
    }, 
  ];

  const solutionRoutes: MetadataRoute.Sitemap = [];

  urls.forEach((url) => {
    solutionRoutes.push({
      url: `${process.env.BASE_URL}${url}`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    });
  });



  const BI_WEEKLY_DATE = getBiWeeklyDate();


  blogs.forEach((b) => {
    const url = `${process.env.BASE_URL}/resources/blogs/${b.slug}`;
    resourceRoutes.push({
      url: url,
      lastModified: b.date,
    });
  });


  return [
    {
      url: `${process.env.BASE_URL}/home`,
      lastModified: BI_WEEKLY_DATE,
        changeFrequency: "monthly",
  priority: 1,
    },
    {
      url: `${process.env.BASE_URL}/employer-alignment-system`,
      lastModified: BI_WEEKLY_DATE,
    },
    {
      url: `${process.env.BASE_URL}/candidate-alignment-system`,
      lastModified: BI_WEEKLY_DATE,
    },
    {
      url: `${process.env.BASE_URL}/recruiter-alignment-system`,
      lastModified: BI_WEEKLY_DATE,
    },
    {
      url: `${process.env.BASE_URL}/resources`,
      lastModified: BI_WEEKLY_DATE,
    },
    {
      url: `${process.env.BASE_URL}/hiring-platform-pricing`,
      lastModified: BI_WEEKLY_DATE,
    },
    {
      url: `${process.env.BASE_URL}/solutions`,
      lastModified: BI_WEEKLY_DATE,
    },
  

    ...resourceRoutes,
    ...solutionRoutes,
  ];
}


