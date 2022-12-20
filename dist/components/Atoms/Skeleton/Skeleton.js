import { jsx as _jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import { classJoin } from "../../../utils";
import { skeletonRoundedValues, skeletonAnimations } from "./utils";
import { width as tailwindWidths, height as tailwindHeights } from "../../../constants/tailwind";
export const Skeleton = forwardRef(({ rounded, width, height, className, animation, ...restProps }, ref) => (_jsx("div", { ...restProps, ref: ref, className: classJoin([
        "bg-idle bg-opacity-50",
        tailwindWidths[width],
        tailwindHeights[height],
        skeletonAnimations[animation],
        skeletonRoundedValues[rounded],
        className
    ]) })));
Skeleton.defaultProps = { rounded: "sm", height: "5", width: "full", animation: "default" };
export default Skeleton;
//# sourceMappingURL=Skeleton.js.map