"use client";

import React from "react";

interface PetActionGroupProps {
  actions: Array<{
    label: string;
    onClick: () => void;
    disabled?: boolean;
  }>;
  className?: string;
}

export const PetActionGroup: React.FC<PetActionGroupProps> = ({
  actions,
  className = "",
}) => {
  return (
    <div className={`flex gap-4 ${className}`}>
      {/* Placeholder buttons */}
      {actions.map((action, index) => (
        <button
          key={index}
          onClick={action.onClick}
          disabled={action.disabled}
          className="h-10 w-24 rounded-md bg-neutral-100 hover:bg-neutral-200 disabled:opacity-50 dark:bg-neutral-700 dark:hover:bg-neutral-600"
        >
          {action.label}
        </button>
      ))}
    </div>
  );
};
