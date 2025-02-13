import type { Meta, StoryObj } from "@storybook/react";
import { TextField } from "@/components/atoms/TextField";

const meta: Meta<typeof TextField> = {
  title: "Atoms/TextField",
  component: TextField,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof TextField>;

export const Default: Story = {
  args: {
    label: "Username",
    placeholder: "Enter your username",
  },
};

export const WithError: Story = {
  args: {
    label: "Email",
    placeholder: "Enter your email",
    error: "Please enter a valid email address",
  },
};

export const Disabled: Story = {
  args: {
    label: "Disabled Field",
    placeholder: "This field is disabled",
    disabled: true,
  },
};

export const WithValue: Story = {
  args: {
    label: "Name",
    placeholder: "Enter your name",
    defaultValue: "John Doe",
  },
};
