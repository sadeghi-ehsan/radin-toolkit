import { jsx as _jsx } from "react/jsx-runtime";
import { Popover as AntPopover } from "antd";
import { colors } from "../../../constants/tailwind";
import { classJoin, empty } from "../../../utils";
export const Popover = ({ children, className, content, placement, backgroundColor, borderColor, shadowColor, overlayInnerStyle, ...otherProps }) => (_jsx(AntPopover, { ...{
        content,
        placement,
        color: !empty(backgroundColor) ? colors[backgroundColor] : undefined,
        overlayClassName: classJoin(["sbt-popover", className]),
        overlayInnerStyle: {
            border: "1px solid transparent",
            borderColor: !empty(borderColor) ? colors[borderColor] : "transparent",
            borderRadius: "12px",
            "--tw-shadow": `0px 0px 5px ${!empty(shadowColor) ? colors[shadowColor] : "transparent"}`,
            ...overlayInnerStyle
        }
    }, ...otherProps, children: children }));
Popover.defaultProps = {
    placement: "bottom",
    backgroundColor: "card-bg",
    borderColor: "primary",
    shadowColor: "primary-focus",
    trigger: ["hover"]
};
export default Popover;
//# sourceMappingURL=Popover.js.map