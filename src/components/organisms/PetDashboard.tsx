"use client";

import React from "react";
import { PetImageCard } from "../molecules/PetImageCard";
import { PetStatDisplay } from "../molecules/PetStatDisplay";
import { PetActionGroup } from "../molecules/PetActionGroup";

interface PetStats {
  hunger: number;
  happiness: number;
  energy: number;
}

interface PetDashboardProps {
  petName: string;
  imageUrl: string;
  stats: PetStats;
  onAction: (action: "feed" | "play" | "clean") => void;
  isLoading?: boolean;
}

export const PetDashboard: React.FC<PetDashboardProps> = ({
  petName,
  imageUrl,
  stats,
  onAction,
  isLoading = false,
}) => {
  const actions = [
    {
      label: "Feed",
      onClick: () => onAction("feed"),
      disabled: isLoading,
    },
    {
      label: "Play",
      onClick: () => onAction("play"),
      disabled: isLoading,
    },
    {
      label: "Clean",
      onClick: () => onAction("clean"),
      disabled: isLoading,
    },
  ];

  return (
    <div className="space-y-8">
      <PetImageCard petName={petName} imageUrl={imageUrl} />

      <div className="space-y-4">
        <h2 className="text-2xl font-bold">
          <span className="bg-gradient-to-r from-blue-500 to-blue-700 bg-clip-text text-transparent dark:from-blue-400 dark:to-blue-600">
            Pet Stats
          </span>
        </h2>

        <div className="space-y-4">
          <PetStatDisplay label="Hunger" value={stats.hunger} />
          <PetStatDisplay label="Happiness" value={stats.happiness} />
          <PetStatDisplay label="Energy" value={stats.energy} />
        </div>
      </div>

      <PetActionGroup actions={actions} />
    </div>
  );
};
