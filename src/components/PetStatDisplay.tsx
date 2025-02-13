"use client";

import { ProgressBar } from "./ProgressBar";

interface PetStatDisplayProps {
  label: string;
  value: number;
  className?: string;
}

export const PetStatDisplay = ({
  label,
  value,
  className = "",
}: PetStatDisplayProps) => {
  return (
    <div className={`flex flex-col gap-1 ${className}`}>
      <div className="flex justify-between items-center">
        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
          {label}
        </span>
        <span className="text-sm text-gray-500 dark:text-gray-400">
          {value}%
        </span>
      </div>
      <ProgressBar value={value} />
    </div>
  );
};
