import { ReactNode } from "react";
import { SliderBaseProps } from "antd/lib/slider";
import { StandardProps } from "../../../types/common";
export declare type ISliderColors = "error" | "primary";
export declare type ISliderMarksType = {
    label?: ReactNode | string | number;
    step?: number;
} | number | string;
interface SliderProps extends StandardProps, Omit<SliderBaseProps, "marks"> {
    color?: ISliderColors;
    labelClassName?: string;
    disableMarks?: boolean;
    centerLabel?: boolean;
    /**
     * whether a it's been validated or not to show check or warning icon
     * if true it shows check
     * if false it shows warning
     * if undefined and not set to value it shows nothing
     */
    verified?: boolean | undefined;
    marks?: {
        [index: number]: ISliderMarksType;
    };
}
interface SingleProps extends SliderProps {
    range?: false;
    value?: number;
    defaultValue?: number;
    onChange?: (value: number) => void;
}
export interface RangeProps extends SliderProps {
    range?: true;
    value?: [number, number];
    defaultValue?: [number, number];
    onChange?: (value: [number, number]) => void;
}
export declare type ISliderProps = SingleProps | RangeProps;
export {};
