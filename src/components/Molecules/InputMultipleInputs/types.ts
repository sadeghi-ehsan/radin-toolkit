import { IInputProps } from "../Input";

export declare type IInputMultipleInputsSchema = Array<{
  name: string;
  placeholder?: string;
  rootClassName?: string;
  type?: "text" | "password" | "number" | "email" | "tel" | "url" | "search";
  align?: "left" | "center" | "right";
}>;

export declare type IInputMultipleInputsDirection = "ltr" | "rtl";

export interface IInputMultipleInputsProps extends Omit<IInputProps, "value" | "type" | "clearedValue"> {
  /**
   * the value of the inputs
   */
  value?: object;

  /**
   * the value set to form elements when clear icon is clicked
   */
  clearedValue?: object;

  /**
   * direction of the inputs
   */
  direction?: IInputMultipleInputsDirection;

  /**
   * the schema of the inputs
   */
  schema?: IInputMultipleInputsSchema;
}
