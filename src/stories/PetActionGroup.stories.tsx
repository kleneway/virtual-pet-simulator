import type { Meta, StoryObj } from "@storybook/react";
import { PetActionGroup } from "@/components/molecules/PetActionGroup";

const meta: Meta<typeof PetActionGroup> = {
  title: "Molecules/PetActionGroup",
  component: PetActionGroup,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof PetActionGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    actions: [
      {
        label: "Feed",
        onClick: () => console.log("Feed clicked"),
      },
      {
        label: "Play",
        onClick: () => console.log("Play clicked"),
      },
      {
        label: "Clean",
        onClick: () => console.log("Clean clicked"),
      },
    ],
  },
};

export const Disabled: Story = {
  args: {
    actions: [
      {
        label: "Feed",
        onClick: () => console.log("Feed clicked"),
        disabled: true,
      },
      {
        label: "Play",
        onClick: () => console.log("Play clicked"),
        disabled: true,
      },
      {
        label: "Clean",
        onClick: () => console.log("Clean clicked"),
        disabled: true,
      },
    ],
  },
};
