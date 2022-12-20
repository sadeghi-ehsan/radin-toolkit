import { ProgressProps } from "antd/lib/progress/progress";
import { StandardProps } from "../../../types/common";
import { progressBarColors, progressBarSizes, progressBarShapes, progressBarDirections } from "./utils";
export declare type ProgressBarSizes = keyof typeof progressBarSizes;
export declare type ProgressBarColors = keyof typeof progressBarColors;
export declare type ProgressBarShapes = keyof typeof progressBarShapes;
export declare type ProgressBarDirections = keyof typeof progressBarDirections;
export interface IProgressBarProps extends StandardProps {
    /** Indicates different sizes of the progressBar */
    size?: ProgressBarSizes;
    /** An indicator can have different colors */
    color?: ProgressBarColors;
    /** An indicator can have different shapes */
    shape?: ProgressBarShapes;
    /** To set the completion percentage */
    percent?: number;
    /** The direction of the fill path */
    direction?: ProgressBarDirections;
    /** The template function of the content */
    format?: ProgressProps["format"];
    /** Whether to display the progress value and the status icon */
    showInfo?: ProgressProps["showInfo"];
    /**
     * width (only in circle mode)
     */
    width?: number;
}
