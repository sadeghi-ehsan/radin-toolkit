import { StandardProps } from "../../../types/common";

/** PriceProgressBar component props */
export interface IPriceProgressBarProps extends Omit<StandardProps, "children"> {
  /** display count on top of progressbar */
  count?: number;

  /** display volume with unit on top of progressbar */
  volume?: number;

  /** display percentage under progressbar */
  percentage?: number;

  /** indicate direction and color of progressbar */
  direction?: "rtl" | "ltr";
}
