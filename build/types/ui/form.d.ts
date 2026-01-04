import { ReactNode } from "react";
import { Path, type ControllerProps, type FieldPath, type FieldValues } from "react-hook-form";
import { z } from "zod";
interface PromFromProps {
    formSchema: z.ZodObject<any>;
    children: ReactNode;
    defaultValues?: Partial<z.infer<any>>;
    onSubmit: (data: z.infer<any>) => void;
}
declare const PromFrom: <T extends z.ZodObject<any>>({ children, formSchema, defaultValues, onSubmit, }: PromFromProps) => import("react/jsx-runtime").JSX.Element;
type PromFormFiledProps<TFieldValues extends FieldValues = FieldValues, TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>> = ControllerProps<TFieldValues, TName>;
declare const PromFormFiled: <TFieldValues extends FieldValues = FieldValues, TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>>({ ...props }: PromFormFiledProps<TFieldValues, TName>) => import("react/jsx-runtime").JSX.Element;
type FormFieldNames<S extends z.ZodType<any, any, any>> = Path<z.output<S>>;
export { PromFrom, PromFormFiled, type FormFieldNames };
