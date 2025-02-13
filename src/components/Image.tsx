"use client";

import { useState } from "react";
import Image from "next/image";

interface ImageAtomProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  shape?: "circle" | "square";
  className?: string;
}

export const ImageAtom = ({
  src,
  alt,
  width = 200,
  height = 200,
  shape = "square",
  className = "",
}: ImageAtomProps) => {
  const [error, setError] = useState(false);

  const shapeClasses = {
    circle: "rounded-full",
    square: "rounded-lg",
  };

  return (
    <div
      className={`relative overflow-hidden ${shapeClasses[shape]} ${className}`}
    >
      {error ? (
        <div
          className="flex items-center justify-center bg-gray-200 dark:bg-gray-700"
          style={{ width, height }}
        >
          <span className="text-gray-500 dark:text-gray-400">
            Image not found
          </span>
        </div>
      ) : (
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          className="object-cover"
          onError={() => setError(true)}
        />
      )}
    </div>
  );
};
