import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Button as AntButton } from "antd";
import { forwardRef } from "react";
import { classJoin, empty } from "../../../utils";
import { buttonShapes, buttonSizes, buttonThemes, buttonVariants } from "./utils";
// TODO: Must add Icon component for startIcon & endIcon then fix the width & height to be square
const ButtonComponent = ({ children, className, theme, variant, href, target, type, loading, disabled, size, shape, startIcon, endIcon, isIcon, ...restProps }, ref) => (_jsxs(AntButton, { ...restProps, ref: ref, size: "middle", ...(!empty(href) ? { href, target } : {}), htmlType: type, loading: loading, disabled: disabled || loading, className: classJoin([
        "sbt-btn",
        buttonThemes[theme],
        buttonVariants[variant],
        isIcon ? `${buttonSizes[size]}-icon` : buttonSizes[size],
        "!justify-start ",
        !empty(children) ? "sbt-btn-min-w" : "",
        !empty(shape) ? buttonShapes[shape] : "",
        className
    ]), children: [_jsx("span", { className: classJoin([!empty(startIcon) && (!empty(children) || !empty(endIcon)) ? "ml-2" : ""]), children: startIcon }), _jsx("span", { className: "mx-auto", children: children }), _jsx("span", { className: classJoin(["text-center", !empty(children) && !empty(endIcon) ? "mr-2" : ""]), children: endIcon })] }));
export const Button = forwardRef(ButtonComponent);
Button.displayName = "Button";
Button.defaultProps = {
    disabled: false,
    theme: "primary",
    block: false,
    type: "button",
    loading: false,
    variant: "default",
    size: "md",
    target: "_self",
    isIcon: false,
    shape: "default"
};
export default Button;
//# sourceMappingURL=Button.js.map