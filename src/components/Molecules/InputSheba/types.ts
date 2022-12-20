import { IInputProps } from "../Input";

export interface IInputShebaProps extends Omit<IInputProps, "type" | "clearedValue" | "align" | "value"> {
  /**
   * can only accept string
   */
  clearedValue?: string;

  /**
   * can only accept string
   */
  value?: string;
}
