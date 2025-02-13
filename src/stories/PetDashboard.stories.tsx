import type { Meta, StoryObj } from "@storybook/react";
import { PetDashboard } from "../components/organisms/PetDashboard";
import { toast } from "react-toastify";
import { ThemeProvider } from "../components/theme/ThemeProvider";
import { ThemeAwareToast } from "../components/theme/ThemeAwareToast";

const meta = {
  title: "Organisms/PetDashboard",
  component: PetDashboard,
  parameters: {
    layout: "centered",
  },
  decorators: [
    (Story) => (
      <ThemeProvider>
        <div className="min-h-[600px] w-full max-w-4xl p-4">
          <Story />
        </div>
        <ThemeAwareToast />
      </ThemeProvider>
    ),
  ],
  tags: ["autodocs"],
} satisfies Meta<typeof PetDashboard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    petName: "Fluffy",
    imageUrl: "https://placecats.com/400/400",
    stats: {
      hunger: 75,
      happiness: 90,
      energy: 60,
    },
    onAction: (action) => {
      console.log("Action performed:", action);
      toast.success(`${action} action performed!`);
    },
  },
};

export const Loading: Story = {
  args: {
    ...Default.args,
    isLoading: true,
  },
};

export const LowStats: Story = {
  args: {
    ...Default.args,
    stats: {
      hunger: 20,
      happiness: 30,
      energy: 15,
    },
  },
};
