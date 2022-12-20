import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { forwardRef } from "react";
import { CurvedMinus, CurvedPlus, Chevron } from "@sadeghi-ehsan/radin-icon";
import { Input } from "../Input";
import { Button } from "../../Atoms/Button";
import { classJoin, keyboardEventChecker } from "../../../utils";
import { valueToCommaSeparated, getProperValue } from "./utils";
const InputNumber = forwardRef(({ counterType, onChange, onKeyDown, name, min, max, value, negativesInRed, positivesInGreen, commaSeparated, baseInputClassName, ...restProps }, passedRef) => {
    const inputValue = commaSeparated
        ? valueToCommaSeparated(value)
        : getProperValue(value);
    const changeValue = (val) => {
        if (min === undefined || val < min)
            return;
        if (max === undefined || val > max)
            return;
        onChange(val, name);
    };
    const onInputChange = (val) => {
        if (commaSeparated)
            changeValue(parseFloat(val.replace(/,/g, "")) || null);
        else
            changeValue(val);
    };
    /** onClick of counter + or up button */
    const onIncrease = () => {
        changeValue(value + 1);
    };
    /** onClick of counter - or down button */
    const onDecrease = () => {
        changeValue(value - 1);
    };
    const onInputKeyDown = e => {
        const val = e.target.value;
        /** checks to delete - when there is only one integer left like -4.
         * with this block, if there is -4 left in the input box and
         * by hitting backspace it will blank the input box
         */
        if (/^-\d$/gm.test(val) && keyboardEventChecker(e, "Backspace"))
            onChange("", name);
        if (commaSeparated) {
            if (keyboardEventChecker(e, "ArrowUp"))
                onIncrease();
            if (keyboardEventChecker(e, "ArrowDown"))
                onDecrease();
        }
        if (typeof onKeyDown === "function")
            onKeyDown(e);
    };
    const renderEndLabelAdornment = () => {
        if (counterType === "plus/minus") {
            return (_jsxs("div", { className: "flex inputNumberBtn", children: [_jsx(Button, { size: "sm", onClick: onIncrease, className: "min-w-0 ml-2 rounded-lg", startIcon: _jsx(CurvedPlus, { className: "w-3 h-3" }), disabled: max !== undefined ? value >= max : false }), _jsx(Button, { size: "sm", onClick: onDecrease, className: "min-w-0 rounded-lg", startIcon: _jsx(CurvedMinus, { className: "w-3 h-3" }), disabled: min !== undefined ? value <= min : false })] }));
        }
        if (counterType === "up/down") {
            return (_jsxs("div", { className: "inputNumberBtnChevron flex flex-col justify-between h-full", children: [_jsx(Button, { className: "sbt-input-number-chevron mb-0.5", size: "sm", variant: "text", onClick: onIncrease, startIcon: _jsx(Chevron, { rotate: "90", className: "w-2 h-2" }), disabled: max !== undefined ? value >= max : false }), _jsx(Button, { className: "sbt-input-number-chevron mt-0.5", size: "sm", variant: "text", onClick: onDecrease, startIcon: _jsx(Chevron, { rotate: "90", flip: "vertical", className: "w-2 h-2" }), disabled: min !== undefined ? value <= min : false })] }));
        }
        return "";
    };
    return (_jsx(Input, { ...restProps, ref: passedRef, min: min, max: max, value: inputValue, noEndDivider: true, type: commaSeparated ? "text" : "number", childrenClassName: classJoin([
            "text-right appearance-none-all dir-ltr",
            value && (negativesInRed && value < 0 ? "text-prompt" : positivesInGreen && value > 0 ? "text-success" : ""),
            baseInputClassName
        ]), onChange: onInputChange, onKeyDown: onInputKeyDown, endAdornmentClassName: counterType === "up/down" ? "inputNumEndAdorn" : "", endAdornment: renderEndLabelAdornment() }));
});
InputNumber.defaultProps = { counterType: "up/down", commaSeparated: false };
export default InputNumber;
//# sourceMappingURL=InputNumber.js.map