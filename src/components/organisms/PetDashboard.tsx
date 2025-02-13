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
  return (
    <div className="w-full max-w-4xl space-y-8 rounded-2xl bg-white p-8 shadow-xl dark:bg-neutral-800/50">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        <div className="space-y-6">
          <PetImageCard name={petName} imageUrl={imageUrl} />
          <PetActionGroup
            onFeed={() => onAction("feed")}
            onPlay={() => onAction("play")}
            onClean={() => onAction("clean")}
            disabled={isLoading}
          />
        </div>

        <div className="space-y-6">
          <h2 className="text-2xl font-bold">
            <span className="bg-gradient-to-r from-blue-500 to-blue-700 bg-clip-text text-transparent dark:from-blue-400 dark:to-blue-600">
              Pet Stats
            </span>
          </h2>

          <div className="space-y-4">
            <PetStatDisplay
              label="Hunger"
              value={stats.hunger}
              color="meadow"
            />
            <PetStatDisplay
              label="Happiness"
              value={stats.happiness}
              color="sunset"
            />
            <PetStatDisplay
              label="Energy"
              value={stats.energy}
              color="blossom"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
