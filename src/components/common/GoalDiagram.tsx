"use client";

import { useEffect, useState } from "react";
import GoalsDiagramDesktop from "./GoalDiagramDesktop";
import GoalsDiagramMobile from "./GoalsDiagramMobile";

export default function GoalsDiagram() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 640);

    check();

    window.addEventListener("resize", check);

    return () => window.removeEventListener("resize", check);
  }, []);

  return isMobile
    ? <GoalsDiagramMobile />
    : <GoalsDiagramDesktop />;
}