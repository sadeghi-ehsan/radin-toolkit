import { OptionsOrGroups } from "react-select";
import { ISelectProps } from "../Select";
import { IInputProps } from "../Input";

export declare type IInputCascadingOptions = Array<{ label: string; value: string }>;
export declare type IInputCascadingTypeInputValue = { value: string; selectedOption: string };
export declare type IInputCascadingTypeSelectValue = { value: any; selectedOption: string };

interface DefaultProps {
  /**
   * options to use in dropdown
   * @default []
   * @type {Array<{label: string, value: string}>}
   */
  options: IInputCascadingOptions;

  /**
   * if true, and if there is no initial value, the first item in option array will be selected
   */
  firstOptionAsDefault?: boolean;
}

export interface IInputCascadingTypeInputProps extends DefaultProps, Omit<IInputProps, "value"> {
  /**
   * Determine type of component
   * input for simple text input and
   * select for async select component
   */
  inputType?: "input";

  /**
   * value of the input AND dropdown
   */
  value?: IInputCascadingTypeInputValue;
}

export interface IInputCascadingTypeSelectProps extends DefaultProps, Omit<ISelectProps, "options" | "value"> {
  /**
   * Determine type of component
   * input for simple text input and
   * select for async select component
   */
  inputType?: "select";

  /** options for select component in unput type be select */
  selectOptions?: OptionsOrGroups<any, any>;

  /**
   * value of the input AND dropdown
   */
  value?: IInputCascadingTypeSelectValue;
}

export type IInputCascadingProps = IInputCascadingTypeInputProps | IInputCascadingTypeSelectProps;
