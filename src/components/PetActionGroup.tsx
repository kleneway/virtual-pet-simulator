"use client";

import { Button } from "./Button";
import { Icon } from "./Icon";

interface PetAction {
  label: string;
  onClick: () => void;
  icon?: string;
  disabled?: boolean;
}

interface PetActionGroupProps {
  actions: PetAction[];
  className?: string;
}

export const PetActionGroup = ({
  actions,
  className = "",
}: PetActionGroupProps) => {
  return (
    <div className={`flex gap-2 ${className}`}>
      {actions.map((action, index) => (
        <Button
          key={index}
          onClick={action.onClick}
          disabled={action.disabled}
          className="flex items-center gap-2"
        >
          {action.icon && <Icon name={action.icon} className="w-4 h-4" />}
          {action.label}
        </Button>
      ))}
    </div>
  );
};
