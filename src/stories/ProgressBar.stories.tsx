import type { Meta, StoryObj } from "@storybook/react";
import { ProgressBar } from "@/components/atoms/ProgressBar";

const meta: Meta<typeof ProgressBar> = {
  title: "Atoms/ProgressBar",
  component: ProgressBar,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof ProgressBar>;

export const Default: Story = {
  args: {
    percentage: 50,
  },
};

export const Empty: Story = {
  args: {
    percentage: 0,
  },
};

export const Full: Story = {
  args: {
    percentage: 100,
  },
};

export const CustomColor: Story = {
  args: {
    percentage: 75,
    color: "bg-green-500",
  },
};
