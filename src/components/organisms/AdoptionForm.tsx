import React, { useState } from "react";
import { TextField } from "../atoms/TextField";
import { Button } from "../Button";
import { toast } from "react-toastify";

interface AdoptionFormProps {
  onSubmit: (petName: string) => void;
  isLoading?: boolean;
}

export const AdoptionForm: React.FC<AdoptionFormProps> = ({
  onSubmit,
  isLoading = false,
}) => {
  const [petName, setPetName] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!petName.trim()) {
      setError("Please enter a name for your pet");
      return;
    }

    if (petName.length < 2) {
      setError("Pet name must be at least 2 characters long");
      return;
    }

    if (petName.length > 20) {
      setError("Pet name must be less than 20 characters");
      return;
    }

    setError("");
    onSubmit(petName.trim());
    toast.success("Pet adoption form submitted!");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-md space-y-6 rounded-2xl bg-white p-8 shadow-xl dark:bg-neutral-800/50"
    >
      <div className="text-center">
        <h2 className="text-2xl font-bold">
          <span className="bg-gradient-to-r from-blue-500 to-blue-700 bg-clip-text text-transparent dark:from-blue-400 dark:to-blue-600">
            Adopt a Pet
          </span>
        </h2>
        <p className="mt-2 text-neutral-600 dark:text-neutral-300">
          Give your new virtual friend a name
        </p>
      </div>

      <TextField
        label="Pet Name"
        value={petName}
        onChange={(e) => setPetName(e.target.value)}
        placeholder="Enter a name for your pet"
        error={error}
        required
      />

      <Button
        variant="primary"
        className="w-full"
        type="submit"
        disabled={isLoading}
      >
        {isLoading ? "Adopting..." : "Adopt Pet"}
      </Button>
    </form>
  );
};
