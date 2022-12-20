import { forwardRef } from "react";
import { ConfigProvider, Progress as AntProgress } from "antd";
import { classJoin } from "../../../utils";
import { IProgressBarProps } from "./types";
import { CompoundedComponent } from "../../../types/common";
import { colors } from "../../../constants/tailwind";
import { progressBarSizes } from "./utils";

export const ProgressBar = forwardRef<HTMLElement, IProgressBarProps>(
  ({ color, size, shape, percent, direction, className, width, ...restProps }, ref) => {
    let normalizedPercent = percent < 0 ? 0 : percent;
    normalizedPercent = normalizedPercent > 100 ? 100 : normalizedPercent;

    return (
      <ConfigProvider direction={direction}>
        <AntProgress
          {...restProps}
          percent={normalizedPercent}
          // @ts-ignore
          ref={ref}
          className={classJoin([
            "sbt-progress-bar",
            direction === "ltr" ? "dir-ltr-all" : "dir-rtl-all",
            `sbt-progress-${size}`,
            `sbt-progress-${color}`,
            `sbt-progress-${direction}`,
            className
          ])}
          type={shape}
          strokeColor={colors[color]}
          strokeWidth={progressBarSizes[size]}
          strokeLinecap="square"
          trailColor={colors.appearing}
          {...(shape === "circle" && { width })}
        />
      </ConfigProvider>
    );
  }
) as CompoundedComponent<IProgressBarProps>;

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
