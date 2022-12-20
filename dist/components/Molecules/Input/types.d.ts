import { IBaseInputProps } from "../../Atoms/BaseInput";
import { IFormElWrapperProps } from "../../Atoms/FormElementWrapper";
import { inputTypes } from "./utils";
export declare type InputTypes = keyof typeof inputTypes;
export declare type OmitBaseInputProps = "fontSize" | "type" | "maxLength" | "size";
export interface IInputProps extends Omit<IFormElWrapperProps, "onClear" | "onFieldsetClick">, Omit<IBaseInputProps, OmitBaseInputProps> {
    /** the value set to form elements when clear icon is clicked */
    clearedValue?: IInputProps["value"];
    /** The type attribute specifies the type of <input> element to display. */
    type?: InputTypes;
}
