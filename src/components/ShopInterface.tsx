"use client";

import { Button } from "./Button";
import { useState } from "react";

interface ShopItem {
  id: string;
  name: string;
  price: number;
  description?: string;
}

interface ShopInterfaceProps {
  items: ShopItem[];
  onBuy?: (itemId: string) => void;
  userCoins?: number;
}

export const ShopInterface = ({
  items,
  onBuy,
  userCoins = 0,
}: ShopInterfaceProps) => {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  return (
    <div className="p-4">
      <div className="mb-4 flex justify-between items-center">
        <h2 className="text-2xl font-bold">Pet Shop</h2>
        <div className="text-lg font-semibold">{userCoins} Coins</div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {items.map((item) => (
          <div
            key={item.id}
            className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-md transition-all duration-200 hover:shadow-lg"
            onMouseEnter={() => setHoveredItem(item.id)}
            onMouseLeave={() => setHoveredItem(null)}
          >
            <div className="flex flex-col h-full">
              <h3 className="text-lg font-semibold mb-2">{item.name}</h3>
              {item.description && hoveredItem === item.id && (
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">
                  {item.description}
                </p>
              )}
              <div className="mt-auto flex justify-between items-center">
                <span className="font-medium">{item.price} coins</span>
                <Button
                  onClick={() => onBuy?.(item.id)}
                  disabled={userCoins < item.price}
                >
                  Buy
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
