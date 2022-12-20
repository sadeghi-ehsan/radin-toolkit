import { TooltipPropsWithTitle } from "antd/lib/tooltip";
import { TailwindColors } from "../../../types/tailwind";

export declare type ITooltipPlacement =
  | "top"
  | "left"
  | "right"
  | "bottom"
  | "topLeft"
  | "topRight"
  | "bottomLeft"
  | "bottomRight"
  | "leftTop"
  | "leftBottom"
  | "rightTop"
  | "rightBottom";

export declare type ITooltipTrigger = "hover" | "focus" | "click" | "contextMenu";

export interface ITooltipProps extends Omit<TooltipPropsWithTitle, "color" | "placement"> {
  /**
   * The backgroundColor
   * @default "main-bg"
   */
  backgroundColor?: TailwindColors;
  /**
   * The borderColor
   * @default "primary-border"
   */
  borderColor?: TailwindColors;

  /**
   * tooltip placement
   */
  placement?: ITooltipPlacement;

  /**
   * Tooltip trigger mode. Could be multiple by passing an array
   */
  trigger?: ITooltipTrigger | ITooltipTrigger[];

  /**
   * show vertical line
   */
  verticalLine?: "right" | "left";

  /**
   * padding of tooltip
   */
  size?: "md" | "lg";
}
