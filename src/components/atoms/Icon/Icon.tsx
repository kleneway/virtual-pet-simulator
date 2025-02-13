"use client";

import React from "react";
import { cn } from "@/lib/utils/shared";
import * as LucideIcons from "lucide-react";
import { LucideIcon, LucideProps } from "lucide-react";

export type IconName = keyof typeof LucideIcons;

interface IconProps extends Omit<LucideProps, "ref"> {
  name: IconName;
}

export const Icon = React.forwardRef<SVGSVGElement, IconProps>(
  ({ name, className, ...props }, ref) => {
    const Icon = LucideIcons[name] as LucideIcon;

    if (!Icon) {
      console.warn(`Icon "${name}" not found in lucide-react`);
      return null;
    }

    return (
      <Icon ref={ref} className={cn("inline-block", className)} {...props} />
    );
  },
);

Icon.displayName = "Icon";
