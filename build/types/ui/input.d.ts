import React, { FC } from "react";
import { CommonPromComponentProps } from "./types";
interface PromInputProps extends CommonPromComponentProps, React.ComponentProps<"input"> {
    label?: string;
}
declare const PromInput: FC<PromInputProps>;
export { PromInput };
