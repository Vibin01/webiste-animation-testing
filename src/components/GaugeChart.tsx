"use client";

import { useEffect, useRef } from "react";
import * as echarts from "echarts/core";
import { GaugeChart } from "echarts/charts";
import { CanvasRenderer } from "echarts/renderers";

echarts.use([
  GaugeChart,
  CanvasRenderer,
]);

type Props = {
  option: any;
  className?: string;
};

export default function EChartGauge({
  option,
  className,
}: Props) {
  const chartRef = useRef<HTMLDivElement>(null);
  const chartInstance = useRef<echarts.ECharts | null>(null);

  // Create chart only once
  useEffect(() => {
    if (!chartRef.current) return;

    chartInstance.current = echarts.init(chartRef.current);

    const handleResize = () => {
      chartInstance.current?.resize();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener(
        "resize",
        handleResize
      );

      chartInstance.current?.dispose();
      chartInstance.current = null;
    };
  }, []);

  // Update option only
  useEffect(() => {
    if (!chartInstance.current) return;

    chartInstance.current.setOption(option);
  }, [option]);

  return (
    <div
      ref={chartRef}
      className={`w-full h-[250px] md:h-[25vw] ${className ?? ""}`}
    />
  );
}