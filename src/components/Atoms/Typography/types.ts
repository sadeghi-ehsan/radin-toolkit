import { ReactNode } from "react";
import { TailwindTextColors } from "../../../types/tailwind";
import { StandardProps } from "../../../types/common";
import { fontWeights, textVariants } from "./utils";

export type ITypographyFontWeightType = keyof typeof fontWeights;
export type ITypographyTextVariantType = keyof typeof textVariants;
export type ITypographyTagType = "div" | "span" | "li" | "pre" | "p" | "label";

export interface ITypographyProps extends Omit<StandardProps, "children"> {
  /** weight is used as font weight  */
  weight?: ITypographyFontWeightType;

  /** variant is used as font size  */
  variant?: ITypographyTextVariantType;

  /** color sets color for children of typography component  */
  color?: TailwindTextColors;

  /** tag is used as tagName for wrapper of children  */
  tag?: ITypographyTagType;

  /** htmlFor is used to link label to its input */
  htmlFor?: string;

  children?: string | ReactNode;
}
