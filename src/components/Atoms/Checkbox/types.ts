import { TailwindTextColors } from "../../../types/tailwind";
import { StandardProps } from "../../../types/common";
import { checkboxSizes, checkboxVariants } from "./utils";

export type CheckboxSize = keyof typeof checkboxSizes;
export type CheckboxVariant = keyof typeof checkboxVariants;

export interface ICheckboxProps extends StandardProps {
  /** Since this component uses input:checkbox, So it's required to pass name of the checkbox field */
  name: string;

  /** Pass the value of the option */
  value?: any;

  /** Indicates different sizes of the component */
  size?: CheckboxSize;

  /** Indicates different colors of the component */
  color?: TailwindTextColors;

  /** Indicates different icon shape of the component */
  variant?: CheckboxVariant;

  /**
   *  Set it to true to change the styles of selected option
   *  this value will be sent automatically by Switch component to option
   */
  selected?: boolean | ((value: any, name: string) => boolean);

  /**
   * Renders the button as a block element.
   */
  block?: boolean;

  /**
   * Enabling this prop will apply the disabled styles to a `Checkbox`. When this
   * is also applied to the switch component, the switch will be updated so that
   * it can no longer be interacted with.
   */
  disabled?: boolean;

  /** Called when the any option selection changes. */
  onChange?: (value: any, checked: boolean, name: string) => void;

  /** Make checkbox read only without any click actions */
  readOnly?: boolean;
}
