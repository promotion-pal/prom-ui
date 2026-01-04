"use client";

import { FC } from "react";
import { useFormContext } from "react-hook-form";
import { PromFormFiled } from "./form";

interface PromInputProps {
  name: string;
  type?: string;
  label?: string;
}

const PromInput: FC<PromInputProps> = ({ name, label, type = "text" }) => {
  const { control } = useFormContext();

  console.log(control);

  return (
    <PromFormFiled
      control={control}
      name={name}
      render={({ field }) => (
        <div className="space-y-2">
          {label && (
            <label className="block text-sm font-medium">{label}</label>
          )}

          <input
            {...field}
            type={type}
            className="border rounded px-3 py-2 w-full"
          />
        </div>
      )}
    />
  );
};

export { PromInput };
