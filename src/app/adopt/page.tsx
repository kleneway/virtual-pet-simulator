import { AdoptionTemplate } from "@/components/templates/AdoptionTemplate";

export default function AdoptionPage() {
  return (
    <main className="min-h-screen p-4">
      <AdoptionTemplate>
        <div className="space-y-6">
          <div className="animate-pulse space-y-4">
            <div className="h-10 w-full rounded-md bg-neutral-100 dark:bg-neutral-700" />
            <div className="h-10 w-full rounded-md bg-neutral-100 dark:bg-neutral-700" />
            <div className="h-10 w-1/3 rounded-md bg-neutral-100 dark:bg-neutral-700" />
          </div>
        </div>
      </AdoptionTemplate>
    </main>
  );
}
