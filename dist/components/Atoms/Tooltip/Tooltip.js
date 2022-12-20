import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { Tooltip as AntTooltip } from "antd";
import { bgColors, colors } from "../../../constants/tailwind";
import { classJoin, empty } from "../../../utils";
import { sizes } from "./utils";
export const Tooltip = ({ children, style, className, backgroundColor, borderColor, overlayInnerStyle, verticalLine, title, size, ...restProps }) => (_jsx(AntTooltip, { color: colors[backgroundColor], overlayInnerStyle: {
        borderColor,
        border: `1px solid ${colors[borderColor]}`,
        ...(!empty(verticalLine) && verticalLine === "right" && { paddingRight: "14px" }),
        ...(!empty(verticalLine) && verticalLine === "left" && { paddingLeft: "14px" }),
        paddingTop: sizes[size],
        paddingBottom: sizes[size],
        ...overlayInnerStyle
    }, title: _jsxs(_Fragment, { children: [!empty(verticalLine) && (_jsx("div", { className: classJoin([
                    "absolute w-px top-1.5 bottom-1.5",
                    verticalLine === "right" ? "right-2" : "left-2",
                    borderColor === "primary-border" ? "bg-primary" : bgColors[borderColor]
                ]) })), title] }), ...restProps, children: children }));
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
//# sourceMappingURL=Tooltip.js.map