import { FunctionComponent } from "react";
import { Tooltip as AntTooltip } from "antd";
import { ITooltipProps } from "./types";
import { bgColors, colors } from "../../../constants/tailwind";
import { classJoin, empty } from "../../../utils";
import { sizes } from "./utils";

export const Tooltip: FunctionComponent<ITooltipProps> = ({
  children,
  style,
  className,
  backgroundColor,
  borderColor,
  overlayInnerStyle,
  verticalLine,
  title,
  size,
  ...restProps
}) => (
  <AntTooltip
    color={colors[backgroundColor]}
    overlayInnerStyle={{
      borderColor,
      border: `1px solid ${colors[borderColor]}`,
      ...(!empty(verticalLine) && verticalLine === "right" && { paddingRight: "14px" }),
      ...(!empty(verticalLine) && verticalLine === "left" && { paddingLeft: "14px" }),
      paddingTop: sizes[size],
      paddingBottom: sizes[size],
      ...overlayInnerStyle
    }}
    title={
      <>
        {!empty(verticalLine) && (
          <div
            className={classJoin([
              "absolute w-px top-1.5 bottom-1.5",
              verticalLine === "right" ? "right-2" : "left-2",
              borderColor === "primary-border" ? "bg-primary" : bgColors[borderColor]
            ])}
          />
        )}
        {title}
      </>
    }
    {...restProps}
  >
    {children}
  </AntTooltip>
);

Tooltip.defaultProps = {
  backgroundColor: "main-bg",
  borderColor: "primary-border",
  arrowPointAtCenter: true,
  defaultVisible: false,
  placement: "top",
  trigger: "hover",
  verticalLine: "right",
  size: "md"
};

export default Tooltip;
