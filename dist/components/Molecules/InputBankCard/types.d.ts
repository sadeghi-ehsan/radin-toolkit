import { IInputProps } from "../Input";
export interface IInputBankCardProps extends Omit<IInputProps, "type" | "clearedValue" | "align"> {
    /** the value of the inputs */
    value?: string;
    /** the value set to form elements when clear icon is clicked */
    clearedValue?: string;
}
