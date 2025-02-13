import type { Meta, StoryObj } from "@storybook/react";
import { Icon } from "@/components/atoms/Icon/Icon";

const meta: Meta<typeof Icon> = {
  title: "Atoms/Icon",
  component: Icon,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Icon>;

export const Default: Story = {
  args: {
    name: "Heart",
    size: 24,
  },
};

export const Large: Story = {
  args: {
    name: "Heart",
    size: 48,
  },
};

export const Colored: Story = {
  args: {
    name: "Heart",
    size: 24,
    color: "red",
  },
};

export const WithClassName: Story = {
  args: {
    name: "Heart",
    size: 24,
    className: "text-blue-500 hover:text-blue-700",
  },
};

// Show different icon examples
export const Icons: Story = {
  render: () => (
    <div className="flex gap-4">
      <Icon name="Heart" />
      <Icon name="Star" />
      <Icon name="User" />
      <Icon name="Settings" />
      <Icon name="Bell" />
    </div>
  ),
};
