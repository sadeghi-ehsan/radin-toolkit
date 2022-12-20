import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { forwardRef } from "react";
import { Icon } from "@sadeghi-ehsan/radin-icon";
import { classJoin, ifEmpty, ifNotEmpty, isCallable } from "../../../utils";
import { radioSizes, radioColors, SquircleBorderSvg } from "./utils";
export const Radio = forwardRef(({ name, value, selected, disabled, variant, block, onChange, size, color, className, id, children, ...restProps }, ref) => {
    // @ts-ignore
    const isSelected = isCallable(selected) ? selected(value, name) : selected;
    const onRadioChange = e => {
        if (isCallable(onChange))
            onChange(value, e.target.checked, name);
    };
    return (_jsxs("label", { ...restProps, ref: ref, className: classJoin([
            "sbt-radio relative",
            ifNotEmpty(block, "flex", "inline-flex"),
            "items-start text-xs whitespace-pre-wrap",
            "transition-sbt",
            ifNotEmpty(isSelected, "radio-checked"),
            ifEmpty(disabled, "cursor-pointer"),
            ifNotEmpty(isSelected && !disabled, "text-light-text", ifNotEmpty(disabled, "text-disabled", "text-idle")),
            className
        ]), ...ifNotEmpty(id, { htmlFor: id }, {}), children: [variant === "circleFill" ? (_jsx("span", { className: classJoin([
                    "radio-shape block rounded-full border ml-1 shrink-0",
                    ifNotEmpty(size, radioSizes[size]),
                    ifNotEmpty(disabled, "border-disabled", ifNotEmpty(color && isSelected, radioColors[color]?.shape, "border-idle")),
                    "transition-sbt"
                ]), children: _jsx("span", { className: classJoin([
                        "block w-full h-full rounded-full",
                        "transition-sbt",
                        ifNotEmpty(isSelected, ifNotEmpty(disabled, "bg-disabled", ifNotEmpty(color, radioColors[color]?.bullet, "bg-idle")))
                    ]) }) })) : (_jsx(Icon, { as: SquircleBorderSvg, size: size, selected: isSelected, padding: ["xs", "sm"].includes(size) ? 2 : 3, variant: variant, color: color, className: "ml-1 shrink-0" })), _jsx("input", { type: "radio", checked: isSelected, disabled: disabled, value: value, onChange: onRadioChange, className: classJoin(["absolute -z-10 invisible opacity-0"]), ...ifNotEmpty(id, { id }, {}) }), ifNotEmpty(children)] }));
});
Radio.defaultProps = {
    color: "primary",
    selected: false,
    disabled: false,
    size: "lg",
    variant: "circleFill"
};
export default Radio;
//# sourceMappingURL=Radio.js.map