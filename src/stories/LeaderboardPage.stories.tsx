import type { Meta, StoryObj } from "@storybook/react";
import LeaderboardPage from "../app/leaderboard/page";

const meta: Meta<typeof LeaderboardPage> = {
  title: "Pages/LeaderboardPage",
  component: LeaderboardPage,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof LeaderboardPage>;

export const Default: Story = {};
