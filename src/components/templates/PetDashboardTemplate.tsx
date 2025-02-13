"use client";

import React from "react";

interface PetDashboardTemplateProps {
  children: React.ReactNode;
  petName?: string;
}

export const PetDashboardTemplate: React.FC<PetDashboardTemplateProps> = ({
  children,
  petName,
}) => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-neutral-50 to-neutral-100 dark:from-neutral-900 dark:to-neutral-950">
      <header className="border-b border-neutral-200 bg-white/80 backdrop-blur dark:border-neutral-800 dark:bg-neutral-900/80">
        <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-semibold text-neutral-900 dark:text-neutral-50">
              {petName ? `${petName}'s Dashboard` : "Pet Dashboard"}
            </h1>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-12">
          {/* Main content area */}
          <div className="lg:col-span-8">
            <div className="rounded-lg bg-white p-6 shadow-lg dark:bg-neutral-800">
              {children}
            </div>
          </div>

          {/* Sidebar for additional widgets/stats */}
          <div className="lg:col-span-4">
            <div className="sticky top-8 space-y-6">
              <div className="rounded-lg bg-white p-6 shadow-lg dark:bg-neutral-800">
                <h2 className="text-lg font-medium text-neutral-900 dark:text-neutral-50">
                  Quick Stats
                </h2>
                <div className="mt-4 space-y-4">
                  {/* Placeholder for stats - will be populated by PetDashboard organism */}
                  <div className="h-32 animate-pulse rounded-md bg-neutral-100 dark:bg-neutral-700" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};
