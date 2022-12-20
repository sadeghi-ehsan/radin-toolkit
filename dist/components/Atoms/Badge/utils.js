import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { classJoin } from "../../../utils";
export const badgeStateSizes = {
    ".8xs": "w-1 h-1",
    ".9xs": "w-1.5 h-1.5",
    xs: "w-2.5 h-2.5",
    sm: "w-3 h-3",
    md: "w-3.5 h-3.5",
    lg: "w-4 h-4",
    xl: "w-4.5 h-4.5"
};
export const badgeSizes = {
    ".8xs": "text-.8xs",
    ".9xs": "text-.9xs",
    xs: "text-xs",
    sm: "text-sm",
    md: "text-base",
    lg: "text-lg",
    xl: "text-xl"
};
export const badgeColors = {
    primary: "bg-primary bg-opacity-20 text-primary",
    warning: "bg-warning bg-opacity-20 text-warning",
    "warning-black": "bg-warning text-black",
    success: "bg-success bg-opacity-20 text-success",
    prompt: "bg-prompt bg-opacity-20 text-prompt",
    "dark-success": "bg-dark-text bg-opacity-20 text-success",
    "dark-prompt": "bg-dark-text bg-opacity-20 text-prompt",
    disabled: "bg-disabled bg-opacity-20 text-idle",
    terminate: "bg-terminate bg-opacity-20 text-terminate",
    error: "bg-error bg-opacity-20 text-error"
};
const BadgeComponent = ({ children, color, style, className, content, ...restProps }) => (_jsxs("span", { ...restProps, style: style, className: "relative", children: [_jsx("div", { className: classJoin([
                "inline-flex items-center justify-center absolute top-1/4 left-full transform -translate-x-1 -translate-y-2/3 px-0.75 rounded-full min-w-3 min-h-3 leading-none whitespace-nowrap font-extrabold text-xs",
                badgeColors[color],
                className
            ]), children: children }), content] }));
const StateComponent = ({ color, style, size, className, ...restProps }) => (_jsxs("span", { ...restProps, style: style, className: classJoin(["inline-block relative ml-1", badgeStateSizes[size]]), children: [_jsx("span", { className: classJoin([
                badgeColors[color],
                "absolute w-full h-full rounded-full opacity-75 animate-ping-slow bg-opacity-100",
                className
            ]) }), _jsx("span", { className: classJoin([
                badgeColors[color],
                "relative block w-full h-full rounded-full bg-opacity-100",
                className
            ]) })] }));
const TagComponent = ({ children, color, style, size, className, ...restProps }) => (_jsx("span", { ...restProps, style: style, className: classJoin([
        "inline-flex items-center justify-center px-1 py-1 leading-none rounded whitespace-nowrap",
        badgeSizes[size],
        badgeColors[color],
        className
    ]), children: children }));
export const badgeTypes = {
    tag: TagComponent,
    badge: BadgeComponent,
    state: StateComponent
};
//# sourceMappingURL=utils.js.map