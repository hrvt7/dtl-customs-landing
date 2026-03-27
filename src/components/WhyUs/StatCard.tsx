"use client";
import { useEffect, useState } from "react";
import { useInView } from "@/hooks/useInView";

interface StatCardProps {
  value: number;
  suffix: string;
  label: string;
}

export function StatCard({ value, suffix, label }: StatCardProps) {
  const { ref, inView } = useInView(0.5);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const duration = 2000;
    const steps = 60;
    const increment = value / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [inView, value]);

  return (
    <div ref={ref} className="text-center p-4 md:p-6">
      <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-glow">
        <span className="bg-gradient-to-r from-dtl-chrome to-dtl-chrome-light bg-clip-text text-transparent">
          {count}
          {suffix}
        </span>
      </div>
      <div className="mt-1.5 md:mt-2 text-xs md:text-sm text-gray-400 font-mono tracking-wider">{label}</div>
    </div>
  );
}
