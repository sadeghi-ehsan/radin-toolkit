import { ClipboardEventHandler, ReactNode } from "react";
import { FieldGroupVariant } from "../../Atoms/FieldGroup";
import { IInputNumberProps } from "../InputNumber";

export interface InputTimeGroupInterface {
  /** The index of input group */
  inputGroupIndex: number;

  /** Maximum value for input group  */
  max: number;

  /** Minimum value for input group  */
  min: number;

  /** Label of input group  */
  groupLabel: string;

  /** The variant for input group */
  inputVariant: FieldGroupVariant;

  /** The boolean property to disable input group */
  disabled: boolean;

  /** Displayed input message (ReactNode) for input group */
  error: ReactNode;

  /** The boolean property to make input group style required  */
  required: boolean;

  /** The value provided for input group(1-12 for hour input group and 0-50 for minutes and seconds input group) */
  value: number;

  /** Change event handler which dispatch when input group value change */
  onChange: (v: number) => void;

  /** Paste event handler which dispatch when user paste something in inputs */
  onPaste: ClipboardEventHandler<HTMLInputElement>;

  /** Focus and select previous input Method */
  focusField?: (currentInputIndex: number) => void;
}

export interface IInputTimeProps
  extends Omit<
    IInputNumberProps,
    | "align"
    | "value"
    | "variant"
    | "legendVariant"
    | "fieldsetVariant"
    | "size"
    | "label"
    | "clearedValue"
    | "clearable"
    | "allowClear"
    | "endLabelAdornment"
    | "noEndDivider"
    | "block"
    | "min"
    | "max"
    | "baseInputClassName"
    | "negativesInRed"
    | "positivesInGreen"
    | "counterType"
    | "onChange"
  > {
  /** label set to outer groupField */
  groupLabel?: string;

  /** Bound value of input time */
  value?: number;

  /** Called when the input time value changes. */
  onChange?: (milliseconds: number) => void;

  /** variant set for fieldGroup */
  fieldGroupVariant?: FieldGroupVariant;

  /** variant set for input */
  inputVariant?: FieldGroupVariant;

  /**
   * Boolean to disable Hour selection
   */
  disableHourSelection?: boolean;

  /**
   * Label displaying ont top of Hour selection
   */
  hourLabel?: string;

  /**
   * Boolean to disable minute selection
   */
  disableMinuteSelection?: boolean;

  /**
   * Label displaying ont top of Minute selection
   */
  minuteLabel?: string;

  /**
   * Boolean to disable second selection
   */
  disableSecondSelection?: boolean;

  /**
   * Label displaying ont top of Second selection
   */
  secondLabel?: string;

  /** classes passed to switch component */
  switchClasses?: { outerClassName?: string; innerClassName?: string; labelClassName?: string };
}
