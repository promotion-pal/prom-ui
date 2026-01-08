"use client";

import { ReactNode } from "react";
import {
  useForm,
  Controller,
  FormProvider,
  useFormState,
  useFormContext,
  type ControllerProps,
  type FieldPath,
  type FieldValues,
  UseFormReturn,
} from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { CommonPromComponentProps } from "../types";

type PromFormRenderProps = {
  isValid: boolean;
  isSubmitting: boolean;
  errors: Record<string, any>;
  form: UseFormReturn<z.infer<any>>;
};

interface PromFromProps extends CommonPromComponentProps {
  children?: ReactNode;
  schema?: z.ZodObject<any>;
  defaultValues?: z.infer<any>;
  onSubmit?: (data: z.infer<any>) => void;
  render?: (props: PromFormRenderProps) => ReactNode;

  form?: UseFormReturn<z.infer<any>>;

  // Todo: Доделать функционал
  errorDisplay?: ReactNode;
}

const PromFrom = ({
  schema,
  render,
  children,
  onSubmit,
  defaultValues = {},
  form: externalForm,
}: PromFromProps) => {
  type FormData = z.infer<typeof schema>;

  const internalForm = useForm<FormData>({
    resolver: schema ? zodResolver(schema) : undefined,
    defaultValues: defaultValues,
  });

  const form = externalForm || internalForm;
  const { errors, isSubmitting, isValid } = form.formState;

  const handleSubmit = onSubmit ? form.handleSubmit(onSubmit) : undefined;

  return (
    <FormProvider {...form}>
      <form
        onSubmit={handleSubmit}
        className="space-y-4"
        onKeyDown={(e) => {
          if (e.key === "Enter" && !onSubmit) {
            e.preventDefault();
          }
        }}
      >
        {render ? render({ form, errors, isSubmitting, isValid }) : children}
      </form>
    </FormProvider>
  );
};

const usePromForm = <T extends FieldValues>() => {
  const form = useFormContext<T>();
  const { errors, isSubmitting, isValid } = form.formState;

  return {
    form,
    errors,
    isValid,
    isSubmitting,
    reset: form.reset,
    watch: form.watch,
    control: form.control,
    setValue: form.setValue,
    register: form.register,
    handleSubmit: form.handleSubmit,
    getValues: form.getValues,
    trigger: form.trigger,
  };
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

const PromMessage = () => {
  const { control } = useFormContext();
  const { errors } = useFormState({ control });

  if (Object.keys(errors).length > 0) {
    console.log(errors);
    return <p>Ошибка</p>;
  }
};

const useCreatePromForm = ({
  schema,
  defaultValues,
}: {
  schema: z.ZodObject<any>;
  defaultValues?: z.infer<any>;
}) => {
  return useForm({
    resolver: schema ? zodResolver(schema) : undefined,
    defaultValues,
  });
};

export {
  PromFrom,
  usePromForm,
  PromMessage,
  PromFormFiled,
  useCreatePromForm,
  type PromFromProps,
  type PromFormRenderProps,
};

// "use client";

// import { ReactNode } from "react";
// import {
//   useForm,
//   Controller,
//   FormProvider,
//   useFormState,
//   useFormContext,
//   type ControllerProps,
//   type FieldPath,
//   type FieldValues,
//   UseFormReturn,
// } from "react-hook-form";
// import { zodResolver } from "@hookform/resolvers/zod";
// import { z } from "zod";
// import { CommonPromComponentProps } from "../types";

// type PromFormRenderProps = {
//   isValid: boolean;
//   isSubmitting: boolean;
//   errors: Record<string, any>;
//   form: UseFormReturn<z.infer<any>>;
// };
// interface PromFromProps extends CommonPromComponentProps {
//   children?: ReactNode;
//   schema: z.ZodObject<any>;
//   defaultValues?: z.infer<any>;
//   onSubmit: (data: z.infer<any>) => void;
//   render?: (props: PromFormRenderProps) => ReactNode;

//   // Todo: Доделать функционал
//   errorDisplay?: ReactNode;
// }
// const PromFrom = ({
//   schema,
//   render,
//   children,
//   onSubmit,
//   defaultValues = {},
// }: PromFromProps) => {
//   type FormData = z.infer<typeof schema>;

//   const form = useForm<FormData>({
//     resolver: zodResolver(schema),
//     defaultValues: defaultValues,
//   });

//   const { errors, isSubmitting, isValid } = form.formState;

//   return (
//     <FormProvider {...form}>
//       <form
//         onSubmit={onSubmit ? form.handleSubmit(onSubmit) : undefined}
//         className="space-y-4"
//       >
//         {render ? render({ form, errors, isSubmitting, isValid }) : children}
//       </form>
//     </FormProvider>
//   );
// };

// const usePromForm = <T extends FieldValues>() => {
//   const form = useFormContext<T>();
//   const { errors, isSubmitting, isValid } = form.formState;

//   return {
//     form,
//     errors,
//     isValid,
//     isSubmitting,
//     reset: form.reset,
//     watch: form.watch,
//     control: form.control,
//     setValue: form.setValue,
//     register: form.register,
//     handleSubmit: form.handleSubmit,
//   };
// };

// type PromFormFiledProps<
//   TFieldValues extends FieldValues = FieldValues,
//   TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
// > = ControllerProps<TFieldValues, TName>;
// const PromFormFiled = <
//   TFieldValues extends FieldValues = FieldValues,
//   TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
// >({
//   ...props
// }: PromFormFiledProps<TFieldValues, TName>) => {
//   return <Controller {...props} />;
// };

// const PromMessage = () => {
//   const { control } = useFormContext();
//   const { errors } = useFormState({ control });

//   if (Object.keys(errors).length > 0) {
//     console.log(errors);
//     return <p>Ошибка</p>;
//   }
// };

// export {
//   PromFrom,
//   usePromForm,
//   PromMessage,
//   PromFormFiled,
//   type PromFromProps,
//   type PromFormRenderProps,
// };
