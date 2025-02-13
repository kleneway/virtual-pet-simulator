"use client";

import { cn } from "@/lib/utils/shared";

interface ProgressBarProps {
  percentage: number;
  color?: string;
  className?: string;
}

export const ProgressBar = ({
  percentage,
  color = "bg-blue-500",
  className,
}: ProgressBarProps) => {
  // Ensure percentage is between 0 and 100
  const clampedPercentage = Math.min(100, Math.max(0, percentage));

  return (
    <div
      className={cn(
        "w-full h-2 bg-gray-200 rounded-full overflow-hidden",
        className,
      )}
    >
      <div
        className={cn("h-full transition-all duration-300 ease-in-out", color)}
        style={{ width: `${clampedPercentage}%` }}
      />
    </div>
  );
};
