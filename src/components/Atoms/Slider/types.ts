import { ReactNode } from "react";
import { SliderBaseProps } from "antd/lib/slider";
import { StandardProps } from "../../../types/common";

export type ISliderColors = "error" | "primary";
export type ISliderMarksType = { label?: ReactNode | string | number; step?: number } | number | string;

interface SliderProps extends StandardProps, Omit<SliderBaseProps, "marks"> {
  /* color of slider's theme */
  color?: ISliderColors;

  /* custom class for label of slider points */
  labelClassName?: string;

  /* disable showing marks lines and labels */
  disableMarks?: boolean;

  /* indicates whether or not the label is centered */
  centerLabel?: boolean;

  /**
   * whether a it's been validated or not to show check or warning icon
   * if true it shows check
   * if false it shows warning
   * if undefined and not set to value it shows nothing
   */
  verified?: boolean | undefined;

  /* breakpoints on slider which may include label and step */
  marks?: { [index: number]: ISliderMarksType };

  /**
   * @step : if step is not assigned a value then marks will be used and there will be no stop between marks
   */
  /**
   * @marks : if marks is not assigned a value and step is set to 1 then it will be real slider(real number)
   */
}

interface SingleProps extends SliderProps {
  /* slider with a single handle */
  range?: false;

  /* The value of slider. When range is false, use number */
  value?: number;

  /* default value of slider */
  defaultValue?: number;

  /* function called when value of slider is changed */
  onChange?: (value: number) => void;
}

export interface RangeProps extends SliderProps {
  /* range slider with two handles */
  range?: true;

  /* The value of slider. When range is true, use [number, number] */
  value?: [number, number];

  /* default value of slider */
  defaultValue?: [number, number];

  /* function called when value of slider is changed */
  onChange?: (value: [number, number]) => void;
}

export type ISliderProps = SingleProps | RangeProps;
