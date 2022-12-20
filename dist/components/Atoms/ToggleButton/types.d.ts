import { IButtonProps } from "../Button";
import { buttonVariants } from "./utils";
export declare type ToggleButtonVariant = keyof typeof buttonVariants;
export interface IToggleButtonProps extends Omit<IButtonProps, "variant"> {
    /**
     *  Set it to true to change the styles of selected option
     *  this value will be sent automatically by Switch component to option
     */
    selected: boolean;
    /** Called when the any button state changes. */
    onChange: (checked: boolean) => void;
}
