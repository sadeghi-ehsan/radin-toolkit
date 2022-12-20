import { StandardProps } from "../../../types/common";
import { radioSizes, radioColors, radioVariants } from "./utils";

export type RadioSize = keyof typeof radioSizes;
export type RadioColor = keyof typeof radioColors;
export type RadioVariant = keyof typeof radioVariants;

export interface IRadioProps extends StandardProps {
  /** Since this component uses input:radio, So it's required to pass name of the radio field */
  name: string;

  /** Pass the value of the option */
  value?: any;

  /** Indicates different sizes of the component */
  size?: RadioSize;

  /** Indicates different colors of the component */
  color?: RadioColor;

  /**
   *  Set it to true to change the styles of selected option
   *  this value will be sent automatically by Switch component to option
   */
  selected?: boolean | ((value: any, name: string) => boolean);

  /** Indicates different icon shape of the component */
  variant?: RadioVariant;

  /**
   * Renders the button as a block element.
   */
  block?: boolean;

  /**
   * Enabling this prop will apply the disabled styles to a `Radio`. When this
   * is also applied to the switch component, the switch will be updated so that
   * it can no longer be interacted with.
   */
  disabled?: boolean;

  /** Called when the any option selection changes. */
  onChange?: (value: any, checked: boolean, name: string) => void;
}
