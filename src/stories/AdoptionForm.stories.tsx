import type { Meta, StoryObj } from "@storybook/react";
import { AdoptionForm } from "../components/organisms/AdoptionForm";
import { toast } from "react-toastify";
import { ThemeProvider } from "../components/theme/ThemeProvider";
import { ThemeAwareToast } from "../components/theme/ThemeAwareToast";

const meta = {
  title: "Organisms/AdoptionForm",
  component: AdoptionForm,
  parameters: {
    layout: "centered",
  },
  decorators: [
    (Story) => (
      <ThemeProvider>
        <div className="min-h-[400px] w-full max-w-md p-4">
          <Story />
        </div>
        <ThemeAwareToast />
      </ThemeProvider>
    ),
  ],
  tags: ["autodocs"],
} satisfies Meta<typeof AdoptionForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    onSubmit: (petName) => {
      console.log("Pet name submitted:", petName);
      toast.success(`Successfully adopted ${petName}!`);
    },
  },
};

export const Loading: Story = {
  args: {
    onSubmit: () => {},
    isLoading: true,
  },
};
