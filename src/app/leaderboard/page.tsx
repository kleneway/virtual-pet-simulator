"use client";

import { Leaderboard } from "@/components/organisms/Leaderboard";

// This would normally come from an API or database
const samplePets = [
  { rank: 1, name: "Luna", age: 120, happiness: 98, level: 25 },
  { rank: 2, name: "Max", age: 95, happiness: 92, level: 20 },
  { rank: 3, name: "Bella", age: 88, happiness: 95, level: 18 },
  { rank: 4, name: "Charlie", age: 75, happiness: 88, level: 15 },
  { rank: 5, name: "Daisy", age: 60, happiness: 85, level: 12 },
  { rank: 6, name: "Rocky", age: 55, happiness: 82, level: 10 },
  { rank: 7, name: "Lucy", age: 45, happiness: 80, level: 8 },
  { rank: 8, name: "Bailey", age: 40, happiness: 78, level: 7 },
  { rank: 9, name: "Cooper", age: 35, happiness: 75, level: 6 },
  { rank: 10, name: "Molly", age: 30, happiness: 72, level: 5 },
];

export default function LeaderboardPage() {
  return (
    <main className="min-h-screen bg-gray-100 dark:bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
            Top Virtual Pets
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Meet our most accomplished virtual companions!
          </p>
        </div>
        <Leaderboard pets={samplePets} />
      </div>
    </main>
  );
}
