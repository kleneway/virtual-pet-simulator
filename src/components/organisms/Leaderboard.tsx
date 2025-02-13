"use client";

import { FC } from "react";

interface Pet {
  name: string;
  age: number;
  happiness: number;
  level: number;
  rank: number;
}

interface LeaderboardProps {
  pets: Pet[];
}

export const Leaderboard: FC<LeaderboardProps> = ({ pets }) => {
  return (
    <div className="w-full max-w-4xl mx-auto bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden">
      <div className="px-6 py-4 bg-indigo-600 dark:bg-indigo-800">
        <h2 className="text-2xl font-bold text-white">Pet Leaderboard</h2>
      </div>
      <div className="p-6">
        <div className="space-y-4">
          {pets.map((pet) => (
            <div
              key={`${pet.name}-${pet.rank}`}
              className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors"
            >
              <div className="flex items-center space-x-4">
                <span className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">
                  #{pet.rank}
                </span>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white">
                    {pet.name}
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-300">
                    Level {pet.level}
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-6">
                <div className="text-right">
                  <p className="text-sm font-medium text-gray-600 dark:text-gray-300">
                    Age
                  </p>
                  <p className="text-lg font-semibold text-gray-900 dark:text-white">
                    {pet.age} days
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-sm font-medium text-gray-600 dark:text-gray-300">
                    Happiness
                  </p>
                  <p className="text-lg font-semibold text-gray-900 dark:text-white">
                    {pet.happiness}%
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
