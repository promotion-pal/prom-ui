import React, { FC } from "react";
import { CommonPromComponentProps, CommonPromStyle } from "./types";
interface PromTextareaProps extends CommonPromComponentProps, CommonPromStyle, Omit<React.ComponentProps<"textarea">, "name"> {
    name: string;
    label?: string;
}
declare const PromTextarea: FC<PromTextareaProps>;
export { PromTextarea };
