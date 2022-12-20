import { ChangeEvent, InputHTMLAttributes } from "react";
import { baseInputAlignments, baseInputTypes } from "./utils";
import { TailwindFontSize } from "../../../types/tailwind";

export type BaseInputAlign = keyof typeof baseInputAlignments;

export type BaseInputTypes = keyof typeof baseInputTypes;

type InputAttributes = InputHTMLAttributes<HTMLInputElement>;

export interface IBaseInputProps extends Omit<InputAttributes, "onChange"> {
  /** Called when user enters new value. */
  onChange?: (value: any, name: string, event?: ChangeEvent<HTMLInputElement>) => void;

  /** to set alignment of input's value */
  align?: BaseInputAlign;

  /** to set font size of input */
  fontSize?: TailwindFontSize;

  /** The type attribute specifies the type of <input> element to display. */
  type?: BaseInputTypes;
}
