"use client";

import { ShopInterface } from "@/components/ShopInterface";
import { useState } from "react";
import { toast } from "react-toastify";

// In a real app, this would come from an API or database
const SHOP_ITEMS = [
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

export default function ShopPage() {
  const [userCoins, setUserCoins] = useState(50); // In a real app, this would come from the user's data

  const handleBuy = (itemId: string) => {
    const item = SHOP_ITEMS.find((i) => i.id === itemId);
    if (!item) return;

    if (userCoins >= item.price) {
      setUserCoins((prev) => prev - item.price);
      toast.success(`Successfully purchased ${item.name}!`);
    } else {
      toast.error("Not enough coins!");
    }
  };

  return (
    <main className="container mx-auto px-4 py-8">
      <ShopInterface
        items={SHOP_ITEMS}
        userCoins={userCoins}
        onBuy={handleBuy}
      />
    </main>
  );
}
