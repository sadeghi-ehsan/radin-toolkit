import { IInputProps } from "../Input";
export interface IInputIPAddressProps extends Omit<IInputProps, "type" | "clearedValue" | "align"> {
    /** the value set to form elements when clear icon is clicked */
    clearedValue?: string;
    /** the initial value */
    value?: string;
}
