import { IInputProps } from "../Input";
export declare type IInputNumberCounterTypes = "plus/minus" | "up/down" | "none";
export interface IInputNumberProps extends Omit<IInputProps, "children" | "value" | "type" | "startAdornment" | "endAdornment" | "endAdornmentClassName"> {
    /** classNames applied to baseInput or appended to childrenClassName prop */
    baseInputClassName?: string;
    /** value of inputNumber */
    value?: number;
    /** whether to show plus and minus buttons or up and down chevron icon */
    counterType?: IInputNumberCounterTypes;
    /** minimum value the input could accept */
    min?: number;
    /** maximum value the input could accept */
    max?: number;
    /** whether to show negative numbers in red */
    negativesInRed?: boolean;
    /** whether to show positive numbers in green */
    positivesInGreen?: boolean;
    /** boolean to demonstrate 3 digit separated format of input value */
    commaSeparated?: boolean;
}
