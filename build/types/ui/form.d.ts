import { ReactNode } from "react";
import { type ControllerProps, type FieldPath, type FieldValues } from "react-hook-form";
import { z } from "zod";
interface PromFromProps {
    children: ReactNode;
    formSchema: z.ZodObject<any>;
    defaultValues?: Partial<z.infer<any>>;
    onSubmit: (data: z.infer<any>) => void;
}
declare const PromFrom: ({ children, onSubmit, formSchema, defaultValues, }: PromFromProps) => import("react/jsx-runtime").JSX.Element;
type PromFormFiledProps<TFieldValues extends FieldValues = FieldValues, TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>> = ControllerProps<TFieldValues, TName>;
declare const PromFormFiled: <TFieldValues extends FieldValues = FieldValues, TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>>({ ...props }: PromFormFiledProps<TFieldValues, TName>) => import("react/jsx-runtime").JSX.Element;
declare const PromMessage: () => import("react/jsx-runtime").JSX.Element;
export { PromFrom, PromMessage, PromFormFiled };
