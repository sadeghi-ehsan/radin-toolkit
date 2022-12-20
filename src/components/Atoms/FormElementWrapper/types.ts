import { ReactNode } from "react";
import { StandardProps } from "../../../types/common";
import { wrapperSizes, wrapperVariants } from "./utils";

/** adornment types */
export type AdornmentType = ReactNode;

export interface IAdornmentProps extends StandardProps {
  /** component could be an Icon, Badge, or a div with anything in it */
  component?: AdornmentType;

  /** if set to true, it won't show divider */
  noDivider?: boolean;

  /** the callback called when the adornment is clicked */
  onClick?: () => void;

  /** Changes the style of the wrapper */
  disabled?: boolean;
}

export type WrapperVariant = keyof typeof wrapperVariants;

export type WrapperSize = keyof ReturnType<typeof wrapperSizes>;

/*
 * This variable is used to extract props related to Wrapper from all received props in Components like: Input, Select, ...
 * ToDo: This array must always be synced with props list below in the interface
 */
export const formElWrapperProps = [
  "label",
  "variant",
  "size",
  "legendClassName",
  "fieldsetClassName",
  "childrenClassName",
  "startAdornment",
  "endAdornment",
  "endAdornmentClassName",
  "endLabelAdornment",
  "clearable",
  "allowClear",
  "onClear",
  "onFieldsetClick",
  "important",
  "required",
  "help",
  "error",
  "verified",
  "disabled",
  "block",
  "preserveErrorBox",
  "noEndDivider"
];

export interface IFormElWrapperProps extends StandardProps {
  /** Title of the element to show in legend area */
  label?: string | ReactNode;

  /** 3 different forms the wrapper component could be shown in
   * which are outline, fill and line which includes an underline */
  variant?: WrapperVariant;

  /** variants applied only to legend
   * used by groupField */
  legendVariant?: "fill" | "none";

  /** variants applied only to fieldset
   * used by groupField */
  fieldsetVariant?: "outline" | "fill" | "none";

  /** width of a wrapper */
  size?: WrapperSize;

  /** custom className set for legend */
  legendClassName?: string;

  /** custom className set directly for label */
  labelClassName?: string;

  /** custom className set for fieldset */
  fieldsetClassName?: string;

  /** custom className for children */
  childrenClassName?: string;

  /** it could be icon, text or tag component showing on right side of the FormElementWrapper */
  startAdornment?: AdornmentType;

  /** it could be an icon, text or tag component showing on left side of the FormElementWrapper */
  endAdornment?: AdornmentType;

  /** the className applied to endAdornment component */
  endAdornmentClassName?: string;

  /** indicates either the wrapper component has clear button to wipe input's value */
  clearable?: boolean;

  /** indicates if clearable button is disabled or not */
  allowClear?: boolean;

  /** the callback called the clear-icon is clicked */
  onClear?: () => void;

  /**
   * the callback called when fieldset clicked
   * Mostly used for focusing on child element
   */
  onFieldsetClick?: () => void;

  /** if set to true, wrapper component would appear in warning border color and includes
   *  a legendIcon */
  important?: boolean;

  /** if set to true, wrapper component would appear in necessary border color and includes
   *  a pink bullet */
  required?: boolean;

  /** help is used to acquire user with more detail */
  help?: string | ReactNode;

  /** if error is set to true, it'll only color the border
   * if error is set to a value of type string, it'll color the border and show the error message
   * if it's set to a falsy value, it'll neither show the error message nor color the border */
  error?: boolean | ReactNode;

  /** if verified is set to true, it'll show the check icon
   * for simple inputs without react-hook-form it would need to check validators and handle
   * the verification status with state hook */
  verified?: boolean;

  /** Changes the style of the wrapper */
  disabled?: boolean;

  /** Block whole line */
  block?: boolean;

  /**
   * Preserve area of error element.
   * Mostly used in a form to prevent elements alignment together
   */
  preserveErrorBox?: boolean;

  /**
   * label beside main label
   */
  endLabelAdornment?: ReactNode;

  /** shows whether endAdornments have divider next to them or not */
  noEndDivider?: boolean;
}
