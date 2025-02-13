import type { Meta, StoryObj } from "@storybook/react";
import { ImageAtom } from "../components/Image";

const meta: Meta<typeof ImageAtom> = {
  title: "Atoms/Image",
  component: ImageAtom,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof ImageAtom>;

export const Square: Story = {
  args: {
    src: "https://placecats.com/200/200",
    alt: "A cute kitten",
    width: 200,
    height: 200,
    shape: "square",
  },
};

export const Circle: Story = {
  args: {
    src: "https://placecats.com/300/300",
    alt: "A cute kitten in a circle",
    width: 300,
    height: 300,
    shape: "circle",
  },
};

export const SmallSize: Story = {
  args: {
    src: "https://placecats.com/100/100",
    alt: "A small kitten image",
    width: 100,
    height: 100,
    shape: "square",
  },
};

export const WithError: Story = {
  args: {
    src: "invalid-image-url",
    alt: "This should show error state",
    width: 200,
    height: 200,
    shape: "square",
  },
};
