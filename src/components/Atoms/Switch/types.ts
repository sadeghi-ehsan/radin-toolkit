import { FC, MutableRefObject } from "react";
import { StandardProps } from "../../../types/common";
import SwitchOption from "./SwitchOption";

export type ISwitch = FC<ISwitchProps> & {
  Option: typeof SwitchOption;
};

export interface ISwitchProps extends Omit<StandardProps, "className"> {
  /** Since this component uses input:radio, So it's required to pass name of the radio field */
  name: string;

  /** indicates the value of the selected radio option */
  value: string | number | null;
  /**
   * Enabling this prop will apply the disabled styles to a `Switch`. When this
   * is also applied to the switch component, the switch will be updated so that
   * it can no longer be interacted with.
   */
  disabled?: boolean;

  /** Pass the value of an option to be selected by default */
  defaultValue?: string | number;

  /** Called when the any option selection changes. */
  onChange?: (value: string | number, name: string) => void;

  /** indicates whether switch button is vertical  */
  vertical?: boolean;

  /** to customize each button of switch */
  labelClassName?: string;
  /** disables default font size and padding to apply labelClassName */
  noLabelStyle?: boolean;

  /** className applied to each switch button */
  innerClassName?: string;
  /** className applied to switch warpper */
  outerClassName?: string;
}

export interface ISwitchOptionProps extends Omit<StandardProps, "children"> {
  /** Pass a label for option to show */
  children: string;

  /**
   *  Since this component uses input:radio, So it's required to pass name of the radio field
   *  But this value will be sent automatically by Switch component to options
   */
  name?: string;

  /** Value of the option to be returned when changing option to this one */
  value?: string | number;

  /** Value of the switch that gets passed down to each switchOption */
  checked?: string | number;

  /** value set at first */
  defaultValue?: string | number;

  /** to customize each button of switch */
  labelClassName?: string;

  /** disables default font size and padding to apply labelClassName */
  noLabelStyle?: boolean;

  /** Called when the selected options is changed. */
  onChange?: (value: string | number, labelRef: MutableRefObject<HTMLLabelElement>) => void;

  /** A method to control bgSlider */
  bgSlider?: (offsetWidth: number, offsetLeft: number, isDisabled?: boolean) => void;

  /** Enabling this prop will apply the disabled styles to a `SwitchOption`.
   * set to true if the whole switch is disabled */
  disabled?: boolean;

  /** Enabling this prop will apply the disabled styles to a `SwitchOption`.
   * set to true if the option is only disabled */
  isOptionDisabled?: boolean;
}

export type OffsetType = {
  width: 0 | string | number;
  left?: 0 | string | number;
  top?: 0 | string | number;
  height?: 0 | string | number;
  isDisabled: boolean;
};

export type BgSliderType = {
  offsetWidth: number;
  offsetLeft?: number;
  offsetHeight?: number;
  offsetTop?: number;
  isDisabled?: boolean;
};
