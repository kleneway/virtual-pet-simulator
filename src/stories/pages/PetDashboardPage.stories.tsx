import type { Meta, StoryObj } from "@storybook/react";
import PetDashboardPage from "@/app/dashboard/page";

const meta: Meta<typeof PetDashboardPage> = {
  title: "Pages/PetDashboardPage",
  component: PetDashboardPage,
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;
type Story = StoryObj<typeof PetDashboardPage>;

export const Default: Story = {
  args: {
    // Sample data for the story
    petName: "Fluffy",
    stats: {
      hunger: 80,
      happiness: 50,
      energy: 65,
    },
  },
};
