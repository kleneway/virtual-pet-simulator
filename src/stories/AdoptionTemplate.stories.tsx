import type { Meta, StoryObj } from "@storybook/react";
import { AdoptionTemplate } from "@/components/templates/AdoptionTemplate";

const meta = {
  title: "Templates/AdoptionTemplate",
  component: AdoptionTemplate,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof AdoptionTemplate>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: (
      <div className="space-y-6">
        <div className="animate-pulse space-y-4">
          <div className="h-10 w-full rounded-md bg-neutral-100 dark:bg-neutral-700" />
          <div className="h-10 w-full rounded-md bg-neutral-100 dark:bg-neutral-700" />
          <div className="h-10 w-1/3 rounded-md bg-neutral-100 dark:bg-neutral-700" />
        </div>
      </div>
    ),
  },
};

export const WithCustomTitle: Story = {
  args: {
    title: "Adopt Your Dream Pet",
    description: "Find your perfect companion and start your journey together",
    children: (
      <div className="space-y-6">
        <div className="animate-pulse space-y-4">
          <div className="h-10 w-full rounded-md bg-neutral-100 dark:bg-neutral-700" />
          <div className="h-10 w-full rounded-md bg-neutral-100 dark:bg-neutral-700" />
          <div className="h-10 w-1/3 rounded-md bg-neutral-100 dark:bg-neutral-700" />
        </div>
      </div>
    ),
  },
};
