import type { Meta, StoryObj } from "@storybook/react";
import { PetImageCard } from "@/components/PetImageCard";

const meta: Meta<typeof PetImageCard> = {
  title: "Molecules/PetImageCard",
  component: PetImageCard,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof PetImageCard>;

export const Default: Story = {
  args: {
    imageUrl: "https://placekitten.com/300/300",
    petName: "Whiskers",
    className: "w-[300px] h-[300px]",
  },
};

export const WithLevel: Story = {
  args: {
    imageUrl: "https://placekitten.com/300/300",
    petName: "Whiskers",
    level: 5,
    className: "w-[300px] h-[300px]",
  },
};

export const TopOverlay: Story = {
  args: {
    imageUrl: "https://placekitten.com/300/300",
    petName: "Whiskers",
    level: 5,
    overlayPosition: "top",
    className: "w-[300px] h-[300px]",
  },
};
