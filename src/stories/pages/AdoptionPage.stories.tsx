import type { Meta, StoryObj } from "@storybook/react";
import AdoptionPage from "@/app/adopt/page";

const meta: Meta<typeof AdoptionPage> = {
  title: "Pages/AdoptionPage",
  component: AdoptionPage,
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;
type Story = StoryObj<typeof AdoptionPage>;

export const Default: Story = {};
