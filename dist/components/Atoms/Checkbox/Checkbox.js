import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { forwardRef } from "react";
import { Icon } from "@sadeghi-ehsan/radin-icon";
import { classJoin, ifEmpty, ifNotEmpty, isCallable } from "../../../utils";
import { SquircleBorderSvg } from "./utils";
export const Checkbox = forwardRef(({ name, value, selected, disabled, variant, block, onChange, size, color, className, id, children, readOnly, ...restProps }, ref) => {
    // @ts-ignore
    const isSelected = isCallable(selected) ? selected(value, name) : selected;
    const onCheckboxChange = e => {
        if (isCallable(onChange))
            onChange(value, e.target.checked, name);
    };
    return (_jsxs("label", { ...restProps, ref: ref, className: classJoin([
            "sbt-checkbox relative",
            ifEmpty(disabled, "cursor-pointer"),
            ifNotEmpty(block, "flex", "inline-flex"),
            "items-center text-sm whitespace-nowrap",
            "transition-sbt",
            ifNotEmpty(isSelected, "checkbox-checked"),
            ifNotEmpty(disabled, "opacity-50"),
            ifNotEmpty(readOnly, "pointer-events-none"),
            ifEmpty(isSelected, "text-idle", "text-light-text"),
            className
        ]), ...ifNotEmpty(id, { htmlFor: id }, {}), children: [_jsx(Icon, { as: SquircleBorderSvg, size: size, selected: isSelected, padding: ["xs", "sm"].includes(size) ? 2 : 3, variant: variant, 
                // @ts-ignore
                color: color, className: "ml-1" }), _jsx("input", { type: "checkbox", checked: isSelected, disabled: disabled, value: value, onChange: onCheckboxChange, className: classJoin(["absolute -z-10 invisible opacity-0"]), ...ifNotEmpty(id, { id }, {}) }), ifNotEmpty(children)] }));
});
Checkbox.defaultProps = {
    color: "primary",
    selected: false,
    disabled: false,
    size: "base",
    variant: "fill"
};
export default Checkbox;
//# sourceMappingURL=Checkbox.js.map