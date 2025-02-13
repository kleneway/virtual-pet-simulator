import type { Meta, StoryObj } from "@storybook/react";
import { PetActionGroup } from "@/components/PetActionGroup";

const meta: Meta<typeof PetActionGroup> = {
  title: "Molecules/PetActionGroup",
  component: PetActionGroup,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof PetActionGroup>;

export const Default: Story = {
  args: {
    actions: [
      {
        label: "Feed",
        icon: "utensils",
        onClick: () => console.log("Feed clicked"),
      },
      {
        label: "Play",
        icon: "play",
        onClick: () => console.log("Play clicked"),
      },
      {
        label: "Clean",
        icon: "trash",
        onClick: () => console.log("Clean clicked"),
      },
    ],
  },
};

export const WithDisabledAction: Story = {
  args: {
    actions: [
      {
        label: "Feed",
        icon: "utensils",
        onClick: () => console.log("Feed clicked"),
      },
      {
        label: "Play",
        icon: "play",
        onClick: () => console.log("Play clicked"),
        disabled: true,
      },
      {
        label: "Clean",
        icon: "trash",
        onClick: () => console.log("Clean clicked"),
      },
    ],
  },
};

export const NoIcons: Story = {
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
