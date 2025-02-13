import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";

interface PetStats {
  hunger: number;
  happiness: number;
  energy: number;
}

const PetInteraction = () => {
  const [stats, setStats] = useState<PetStats>({
    hunger: 50,
    happiness: 50,
    energy: 50,
  });

  const handleFeed = () => {
    setStats((prev) => ({
      ...prev,
      hunger: Math.min(100, prev.hunger + 20),
      energy: Math.min(100, prev.energy + 10),
    }));
  };

  const handlePlay = () => {
    setStats((prev) => ({
      ...prev,
      happiness: Math.min(100, prev.happiness + 20),
      energy: Math.max(0, prev.energy - 15),
      hunger: Math.max(0, prev.hunger - 10),
    }));
  };

  const StatBar = ({ label, value }: { label: string; value: number }) => (
    <div className="mb-4">
      <div className="flex justify-between mb-1">
        <span className="text-sm font-medium text-gray-700">{label}</span>
        <span className="text-sm font-medium text-gray-700">{value}%</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2.5">
        <div
          className="bg-blue-600 h-2.5 rounded-full transition-all duration-300"
          style={{ width: `${value}%` }}
        ></div>
      </div>
    </div>
  );

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Pet Status</h2>

      <div className="mb-6">
        <StatBar label="Hunger" value={stats.hunger} />
        <StatBar label="Happiness" value={stats.happiness} />
        <StatBar label="Energy" value={stats.energy} />
      </div>

      <div className="flex gap-4">
        <button
          onClick={handleFeed}
          className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition-colors"
        >
          Feed (+20 Hunger)
        </button>
        <button
          onClick={handlePlay}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
        >
          Play (+20 Happiness)
        </button>
      </div>
    </div>
  );
};

const meta: Meta<typeof PetInteraction> = {
  title: "Features/PetInteraction",
  component: PetInteraction,
  parameters: {
    layout: "centered",
  },
};

export default meta;
type Story = StoryObj<typeof PetInteraction>;

export const Default: Story = {};
