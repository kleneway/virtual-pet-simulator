import type { Meta, StoryObj } from "@storybook/react";
import { PetStatDisplay } from "@/components/molecules/PetStatDisplay";

const meta: Meta<typeof PetStatDisplay> = {
  title: "Molecules/PetStatDisplay",
  component: PetStatDisplay,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof PetStatDisplay>;

export const Hunger: Story = {
  args: {
    label: "Hunger",
    value: 75,
  },
};

export const Happiness: Story = {
  args: {
    label: "Happiness",
    value: 90,
  },
};

export const Energy: Story = {
  args: {
    label: "Energy",
    value: 30,
  },
};

export const Empty: Story = {
  args: {
    label: "Health",
    value: 0,
  },
};

export const Full: Story = {
  args: {
    label: "Experience",
    value: 100,
  },
};
