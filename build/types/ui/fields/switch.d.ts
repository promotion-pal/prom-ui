import * as React from "react";
import * as SwitchPrimitive from "@radix-ui/react-switch";
interface PromSwitchProps extends React.ComponentProps<typeof SwitchPrimitive.Root> {
    name: string;
    isLoad?: boolean;
    isDisable?: boolean;
}
declare const PromSwitch: React.FC<PromSwitchProps>;
export { PromSwitch };
