import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useRef } from "react";
import { classJoin, isCallable } from "../../../utils";
export const SwitchOption = ({ name, value, checked, children, labelClassName, noLabelStyle, onChange, bgSlider, disabled, isOptionDisabled, defaultValue, ...otherProps }) => {
    const isSelected = checked === value || value === defaultValue;
    const modifiedDisabled = disabled || isOptionDisabled;
    const labelRef = useRef();
    useEffect(() => {
        if (isSelected) {
            setTimeout(() => {
                onChange?.(value, labelRef);
            }, 10);
        }
    }, [isSelected]);
    const onInputChange = e => {
        if (isCallable(onChange)) {
            onChange(e.target.value, labelRef);
        }
    };
    const generatedId = `${name}-${value || "nv"}`;
    return (_jsxs(_Fragment, { children: [_jsx("input", { ...otherProps, type: "radio", name: name, value: value, checked: isSelected, defaultChecked: isSelected, disabled: modifiedDisabled, id: generatedId, className: "absolute invisible -z-10", onChange: onInputChange }), _jsx("label", { ...otherProps, ref: labelRef, htmlFor: generatedId, className: classJoin([
                    "text-light-text",
                    noLabelStyle ? "" : "text-sm px-3.5 pt-1.2",
                    "transition-sbt w-full text-center whitespace-nowrap z-10",
                    modifiedDisabled ? "text-opacity-20" : "cursor-pointer",
                    isSelected && !modifiedDisabled ? "text-card-bg" : "",
                    labelClassName
                ]), children: children })] }));
};
SwitchOption.defaultProps = {
    disabled: false,
    noLabelStyle: false
};
export default SwitchOption;
//# sourceMappingURL=SwitchOption.js.map