import { StandardProps } from "../../../types/common";
import { skeletonRoundedValues, skeletonAnimations } from "./utils";
import { TailwindWidth, TailwindHeight } from "../../../types/tailwind";
/** Skeleton component interface */
export interface ISkeletonProps extends Omit<StandardProps, "children"> {
    /** Set border radius of edges */
    rounded?: keyof typeof skeletonRoundedValues;
    /** Set Skeleton width  */
    width?: TailwindWidth;
    /** Set Skeleton height  */
    height?: TailwindHeight;
    /** Set Skeleton animation  */
    animation?: keyof typeof skeletonAnimations;
}
