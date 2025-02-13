"use client";

import React from "react";

interface AdoptionTemplateProps {
  children: React.ReactNode;
  title?: string;
  description?: string;
}

export const AdoptionTemplate: React.FC<AdoptionTemplateProps> = ({
  children,
  title = "Choose Your Pet",
  description = "Select and name your virtual companion",
}) => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-neutral-50 to-neutral-100 dark:from-neutral-900 dark:to-neutral-950">
      <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-neutral-900 dark:text-neutral-50 sm:text-5xl">
            {title}
          </h1>
          <p className="mt-4 text-lg text-neutral-600 dark:text-neutral-400">
            {description}
          </p>
        </div>
        <div className="mt-12">
          <div className="rounded-lg bg-white p-8 shadow-lg dark:bg-neutral-800">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};
