import { jsx as _jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import { ConfigProvider, Progress as AntProgress } from "antd";
import { classJoin } from "../../../utils";
import { colors } from "../../../constants/tailwind";
import { progressBarSizes } from "./utils";
export const ProgressBar = forwardRef(({ color, size, shape, percent, direction, className, width, ...restProps }, ref) => {
    let normalizedPercent = percent < 0 ? 0 : percent;
    normalizedPercent = normalizedPercent > 100 ? 100 : normalizedPercent;
    return (_jsx(ConfigProvider, { direction: direction, children: _jsx(AntProgress, { ...restProps, percent: normalizedPercent, 
            // @ts-ignore
            ref: ref, className: classJoin([
                "sbt-progress-bar",
                direction === "ltr" ? "dir-ltr-all" : "dir-rtl-all",
                `sbt-progress-${size}`,
                `sbt-progress-${color}`,
                `sbt-progress-${direction}`,
                className
            ]), type: shape, strokeColor: colors[color], strokeWidth: progressBarSizes[size], strokeLinecap: "square", trailColor: colors.appearing, ...(shape === "circle" && { width }) }) }));
});
ProgressBar.defaultProps = {
    size: "md",
    color: "primary",
    shape: "line",
    percent: 0,
    direction: "ltr",
    showInfo: true,
    format: percent => `${percent}%`,
    width: 80
};
export default ProgressBar;
//# sourceMappingURL=ProgressBar.js.map