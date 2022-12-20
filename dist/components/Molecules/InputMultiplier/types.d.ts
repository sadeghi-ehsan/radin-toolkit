import { IInputProps } from "../Input";
export declare type IInputMultiplierOptions = Array<{
    label: string;
    value: string;
}>;
export declare type IInputMultiplierValue = {
    value: string;
    selectedOption: string;
};
export interface IInputMultiplierProps extends Omit<IInputProps, "value"> {
    /**
     * options to use in radio option
     * @default []
     * @type {Array<{label: string, value: string}>}
     */
    options: IInputMultiplierOptions;
    /**
     * value of the input AND radio option
     */
    value?: IInputMultiplierValue;
    /**
     * if true, and if there is no initial value, the first item in option array will be selected
     */
    firstOptionAsDefault?: boolean;
}
