import type { Meta, StoryObj } from "@storybook/react";
import { Leaderboard } from "../components/organisms/Leaderboard";

const meta: Meta<typeof Leaderboard> = {
  title: "Organisms/Leaderboard",
  component: Leaderboard,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Leaderboard>;

const samplePets = [
  { rank: 1, name: "Luna", age: 120, happiness: 98, level: 25 },
  { rank: 2, name: "Max", age: 95, happiness: 92, level: 20 },
  { rank: 3, name: "Bella", age: 88, happiness: 95, level: 18 },
  { rank: 4, name: "Charlie", age: 75, happiness: 88, level: 15 },
  { rank: 5, name: "Daisy", age: 60, happiness: 85, level: 12 },
];

export const Default: Story = {
  args: {
    pets: samplePets,
  },
};

export const Empty: Story = {
  args: {
    pets: [],
  },
};

export const SinglePet: Story = {
  args: {
    pets: [samplePets[0]],
  },
};
