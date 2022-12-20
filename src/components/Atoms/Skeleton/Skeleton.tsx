import { forwardRef } from "react";
import { ISkeletonProps } from "./types";
import { classJoin } from "../../../utils";
import { skeletonRoundedValues, skeletonAnimations } from "./utils";
import { TailwindWidth, TailwindHeight } from "../../../types/tailwind";
import { width as tailwindWidths, height as tailwindHeights } from "../../../constants/tailwind";

export const Skeleton = forwardRef<HTMLDivElement, ISkeletonProps>(
  ({ rounded, width, height, className, animation, ...restProps }, ref) => (
    <div
      {...restProps}
      ref={ref}
      className={classJoin([
        "bg-idle bg-opacity-50",
        tailwindWidths[width as TailwindWidth],
        tailwindHeights[height as TailwindHeight],
        skeletonAnimations[animation],
        skeletonRoundedValues[rounded],
        className
      ])}
    />
  )
);

Skeleton.defaultProps = { rounded: "sm", height: "5", width: "full", animation: "default" };

export default Skeleton;
