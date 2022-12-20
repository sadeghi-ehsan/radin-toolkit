import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Close } from "@sadeghi-ehsan/radin-icon";
import { classJoin, ifEmpty } from "../../../utils";
import { Divider } from "../Divider";
export const StartAdornment = ({ component, noDivider, className }) => (_jsxs("div", { className: classJoin(["flex h-full pr-4", className]), children: [_jsx("div", { className: "self-center", children: component }), !noDivider ? _jsx(Divider, { isVertical: true, className: "mr-4" }) : null] }));
StartAdornment.defaultProps = { noDivider: false };
export const EndAdornment = ({ component, noDivider, className }) => (_jsxs("div", { className: classJoin(["flex h-full pl-4", className]), children: [!noDivider && _jsx(Divider, { isVertical: true, className: "ml-4" }), _jsx("div", { className: "self-center", children: component })] }));
EndAdornment.defaultProps = { noDivider: false };
export const EndLabelAdornment = ({ component }) => (_jsx("div", { className: "absolute top-0 left-0", children: component }));
EndLabelAdornment.defaultProps = {};
export const ClearIcon = ({ onClick, disabled }) => (_jsx("div", { className: classJoin([
        "clear-icon self-center ml-4 flex items-center justify-center rounded-[6px] bg-appearing w-[15px] h-[15px]",
        ifEmpty(disabled, "cursor-pointer", "clear-icon-disabled")
    ]), onClick: disabled ? undefined : onClick, children: _jsx(Close, { size: "1.5xs", className: "text-card-bg transition-sbt" }) }));
//# sourceMappingURL=Adornments.js.map