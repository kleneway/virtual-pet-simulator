"use client";

import { Image } from "./Image";

interface PetImageCardProps {
  imageUrl: string;
  petName: string;
  level?: number;
  className?: string;
  overlayPosition?: "top" | "bottom";
}

export const PetImageCard = ({
  imageUrl,
  petName,
  level,
  className = "",
  overlayPosition = "bottom",
}: PetImageCardProps) => {
  return (
    <div className={`relative rounded-lg overflow-hidden ${className}`}>
      <Image
        src={imageUrl}
        alt={`Pet ${petName}`}
        className="w-full h-full object-cover"
      />
      <div
        className={`absolute ${
          overlayPosition === "top" ? "top-0" : "bottom-0"
        } left-0 right-0 bg-black/50 p-2 text-white`}
      >
        <div className="flex justify-between items-center">
          <h3 className="text-lg font-semibold">{petName}</h3>
          {level !== undefined && (
            <span className="text-sm bg-white/20 px-2 py-1 rounded">
              Lvl {level}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};
