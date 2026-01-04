"use client";

import { ReactNode } from "react";
import {
  Controller,
  FormProvider,
  Path,
  useForm,
  type ControllerProps,
  type FieldPath,
  type FieldValues,
} from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

interface PromFromProps {
  children: ReactNode;
  formSchema: z.ZodObject<any>;
  defaultValues?: Partial<z.infer<any>>;
  onSubmit: (data: z.infer<any>) => void;
}
const PromFrom = ({
  children,
  onSubmit,
  formSchema,
  defaultValues = {},
}: PromFromProps) => {
  type FormData = z.infer<typeof formSchema>;

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: defaultValues,
  });

  return (
    <FormProvider {...form}>
      <form
        onSubmit={onSubmit ? form.handleSubmit(onSubmit) : undefined}
        className="space-y-4"
      >
        {children}
      </form>
    </FormProvider>
  );
};

type PromFormFiledProps<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
> = ControllerProps<TFieldValues, TName>;
const PromFormFiled = <
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
>({
  ...props
}: PromFormFiledProps<TFieldValues, TName>) => {
  return <Controller {...props} />;
};

type FormFieldNames<S extends z.ZodType<any, any, any>> = Path<z.output<S>>;

export { PromFrom, PromFormFiled, type FormFieldNames };
