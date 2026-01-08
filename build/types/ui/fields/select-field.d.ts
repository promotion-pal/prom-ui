import { FC } from "react";
import { CommonPromComponentProps, CommonPromStyle } from "../types";
interface PromSelectType {
    key: string | number;
    value: string;
}
type PromSelectFieldProps = CommonPromStyle & CommonPromComponentProps & {
    name: string;
    label?: string;
    placeholder?: string;
    options: PromSelectType[];
};
declare const PromSelectField: FC<PromSelectFieldProps>;
declare function promSelectFilterOptions<T extends Record<string, any>, K extends keyof T>(obj: T, allowedKeys: K[]): Array<{
    key: K;
    value: T[K];
}>;
export { PromSelectField, promSelectFilterOptions };
