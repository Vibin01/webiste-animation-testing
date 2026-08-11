import React from "react";
import { EmployerPage } from "./EmployerPage";

export const metadata = {
  title: "Employer Alignment System for Predictable Hiring Outcomes | Connect EC",
  description:
    "An employer alignment system provides visibility into hiring workload, pipeline friction, and target progress. Make informed hiring decisions with Connect EC.",
};

const page = () => {
  return (
    <>
      <EmployerPage />
    </>
  );
};

export default page;
