import { ReactNode } from "react";
import { type ControllerProps, type FieldPath, type FieldValues, UseFormReturn } from "react-hook-form";
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
    errorDisplay?: ReactNode;
}
declare const PromFrom: ({ schema, render, children, onSubmit, defaultValues, form: externalForm, }: PromFromProps) => import("react/jsx-runtime").JSX.Element;
declare const usePromForm: <T extends FieldValues>() => {
    form: UseFormReturn<T, any, T>;
    errors: import("react-hook-form").FieldErrors<T>;
    isValid: boolean;
    isSubmitting: boolean;
    reset: import("react-hook-form").UseFormReset<T>;
    watch: import("react-hook-form").UseFormWatch<T>;
    control: import("react-hook-form").Control<T, any, T>;
    setValue: import("react-hook-form").UseFormSetValue<T>;
    register: import("react-hook-form").UseFormRegister<T>;
    handleSubmit: import("react-hook-form").UseFormHandleSubmit<T, T>;
    getValues: import("react-hook-form").UseFormGetValues<T>;
    trigger: import("react-hook-form").UseFormTrigger<T>;
};
type PromFormFiledProps<TFieldValues extends FieldValues = FieldValues, TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>> = ControllerProps<TFieldValues, TName>;
declare const PromFormFiled: <TFieldValues extends FieldValues = FieldValues, TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>>({ ...props }: PromFormFiledProps<TFieldValues, TName>) => import("react/jsx-runtime").JSX.Element;
declare const PromMessage: () => import("react/jsx-runtime").JSX.Element;
declare const useCreatePromForm: ({ schema, defaultValues, }: {
    schema: z.ZodObject<any>;
    defaultValues?: z.infer<any>;
}) => UseFormReturn<any, unknown, Record<string, unknown>>;
export { PromFrom, usePromForm, PromMessage, PromFormFiled, useCreatePromForm, type PromFromProps, type PromFormRenderProps, };
