import React, { FC } from "react";
import { CommonPromComponentProps, CommonPromStyle } from "../types";
interface PromInputProps extends CommonPromComponentProps, CommonPromStyle, Omit<React.ComponentProps<"input">, "name"> {
    name: string;
    label?: string;
}
declare const PromInput: FC<PromInputProps>;
export { PromInput };
