import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "@/components/atoms/Button/Button";
import { action } from "@storybook/addon-actions";

const meta: Meta<typeof Button> = {
  title: "Atoms/Button",
  component: Button,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "A flexible button component with multiple variants and sizes, built with Tailwind CSS.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "radio",
      options: ["primary", "secondary"],
      description: "The visual style of the button",
    },
    size: {
      control: "radio",
      options: ["sm", "md", "lg"],
      description: "The size of the button",
    },
    children: {
      control: "text",
      description: "The content to display inside the button",
    },
    onClick: {
      description: "Function called when the button is clicked",
    },
    isLoading: {
      description: "Indicates if the button is in a loading state",
    },
    disabled: {
      description: "Indicates if the button is disabled",
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    children: "Primary Button",
    variant: "primary",
  },
};

export const Secondary: Story = {
  args: {
    children: "Secondary Button",
    variant: "secondary",
  },
};

export const Small: Story = {
  args: {
    children: "Small Button",
    size: "sm",
  },
};

export const Large: Story = {
  args: {
    children: "Large Button",
    size: "lg",
  },
};

export const Loading: Story = {
  args: {
    children: "Loading Button",
    isLoading: true,
  },
};

export const Disabled: Story = {
  args: {
    children: "Disabled Button",
    disabled: true,
  },
};

export const AllVariants: Story = {
  render: () => (
    <div className="flex gap-4 flex-wrap">
      <Button variant="primary" size="md" onClick={action("primary-clicked")}>
        Primary
      </Button>
      <Button
        variant="secondary"
        size="md"
        onClick={action("secondary-clicked")}
      >
        Secondary
      </Button>
      <Button variant="primary" size="sm" onClick={action("small-clicked")}>
        Small
      </Button>
      <Button variant="primary" size="lg" onClick={action("large-clicked")}>
        Large
      </Button>
    </div>
  ),
};
