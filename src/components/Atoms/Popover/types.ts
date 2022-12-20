import { PopoverProps } from "antd/lib/popover";
import { TailwindTextColors } from "../../../types/tailwind";

export declare type PopoverPlacement =
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

export interface IPopoverProps extends Omit<PopoverProps, "placement" | "overlayInnerStyle" | "content"> {
  content: React.ReactNode | (() => React.ReactNode);
  /**
   * The dropdown variant
   * @default "default"
   */
  overlayInnerStyle?: React.CSSProperties | any;

  /**
   * The popover backgroundColor
   * @default "card-bg"
   */
  backgroundColor?: TailwindTextColors;

  /**
   * The popover borderColor
   * @default "primary"
   */
  borderColor?: TailwindTextColors;

  /**
   * The popover shadowColor
   * @default "primary"
   */
  shadowColor?: TailwindTextColors;

  /**
   * placement of the popover based on trigger element
   * @default "bottom"
   */
  placement?: PopoverPlacement;
}
