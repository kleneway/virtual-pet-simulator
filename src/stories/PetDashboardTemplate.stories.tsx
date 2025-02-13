import type { Meta, StoryObj } from "@storybook/react";
import { PetDashboardTemplate } from "@/components/templates/PetDashboardTemplate";

const meta = {
  title: "Templates/PetDashboardTemplate",
  component: PetDashboardTemplate,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof PetDashboardTemplate>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: (
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
    ),
  },
};

export const WithPetName: Story = {
  args: {
    petName: "Fluffy",
    children: (
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
    ),
  },
};
