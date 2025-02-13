import React from "react";

interface PetDashboardProps {
  petName: string;
}

export const PetDashboard: React.FC<PetDashboardProps> = ({ petName }) => {
  return (
    <div className="space-y-8">
      {/* Pet Image Area - Placeholder for PetImageCard */}
      <div className="aspect-square w-full max-w-sm rounded-lg bg-neutral-100 dark:bg-neutral-700" />

      {/* Stats Area - Placeholder for PetStatDisplay */}
      <div className="space-y-4">
        <div className="h-8 w-1/3 rounded-md bg-neutral-100 dark:bg-neutral-700" />
        <div className="h-4 w-full rounded-md bg-neutral-100 dark:bg-neutral-700" />
        <div className="h-4 w-2/3 rounded-md bg-neutral-100 dark:bg-neutral-700" />
      </div>

      {/* Actions Area - Placeholder for PetActionGroup */}
      <div className="flex gap-4">
        <div className="h-10 w-24 rounded-md bg-neutral-100 dark:bg-neutral-700" />
        <div className="h-10 w-24 rounded-md bg-neutral-100 dark:bg-neutral-700" />
        <div className="h-10 w-24 rounded-md bg-neutral-100 dark:bg-neutral-700" />
      </div>
    </div>
  );
};
