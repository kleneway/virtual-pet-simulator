import type { Meta, StoryObj } from "@storybook/react";
import { ShopInterface } from "../components/ShopInterface";

const meta: Meta<typeof ShopInterface> = {
  title: "Organisms/ShopInterface",
  component: ShopInterface,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof ShopInterface>;

const sampleItems = [
  {
    id: "1",
    name: "Bone",
    price: 5,
    description: "A tasty treat for your pet",
  },
  {
    id: "2",
    name: "Magic Potion",
    price: 10,
    description: "Boosts your pet's happiness",
  },
  {
    id: "3",
    name: "Premium Food",
    price: 15,
    description: "High-quality pet food",
  },
  {
    id: "4",
    name: "Toy Ball",
    price: 8,
    description: "A fun toy for playtime",
  },
];

export const Default: Story = {
  args: {
    items: sampleItems,
    userCoins: 20,
  },
};

export const NoMoney: Story = {
  args: {
    items: sampleItems,
    userCoins: 0,
  },
};

export const WithBuyAction: Story = {
  args: {
    items: sampleItems,
    userCoins: 50,
    onBuy: (itemId: string) => {
      alert(`Bought item ${itemId}`);
    },
  },
};
