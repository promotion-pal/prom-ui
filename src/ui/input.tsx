"use client";

import React, { FC } from "react";
import { useFormContext } from "react-hook-form";
import { PromFormFiled, PromMessage } from "./form";
import { CommonPromComponentProps } from "./types";

interface PromInputProps
  extends CommonPromComponentProps,
    React.ComponentProps<"input"> {
  label?: string;
}

const PromInput: FC<PromInputProps> = ({
  name,
  label,
  isLoad,
  type = "text",
  ...props
}) => {
  const { control } = useFormContext();

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
            {...props}
            type={type}
            disabled={isLoad || props.disabled}
            className="border rounded px-3 py-2 w-full"
          />

          <PromMessage />
        </div>
      )}
    />
  );
};

export { PromInput };
