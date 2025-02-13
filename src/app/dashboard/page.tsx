import { PetDashboardTemplate } from "@/components/templates/PetDashboardTemplate";

export default function PetDashboardPage() {
  return (
    <main className="min-h-screen p-4">
      <PetDashboardTemplate petName="Demo Pet">
        <div className="space-y-8">
          {/* Pet Image Area */}
          <div className="aspect-square w-full max-w-sm rounded-lg bg-neutral-100 dark:bg-neutral-700" />

          {/* Stats Area */}
          <div className="space-y-4">
            <div className="h-8 w-1/3 rounded-md bg-neutral-100 dark:bg-neutral-700" />
            <div className="h-4 w-full rounded-md bg-neutral-100 dark:bg-neutral-700" />
            <div className="h-4 w-2/3 rounded-md bg-neutral-100 dark:bg-neutral-700" />
          </div>

          {/* Actions Area */}
          <div className="flex gap-4">
            <div className="h-10 w-24 rounded-md bg-neutral-100 dark:bg-neutral-700" />
            <div className="h-10 w-24 rounded-md bg-neutral-100 dark:bg-neutral-700" />
            <div className="h-10 w-24 rounded-md bg-neutral-100 dark:bg-neutral-700" />
          </div>
        </div>
      </PetDashboardTemplate>
    </main>
  );
}
