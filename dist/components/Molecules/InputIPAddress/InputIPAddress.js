import { jsx as _jsx } from "react/jsx-runtime";
import { useState, useEffect, forwardRef, useRef } from "react";
import { Ip } from "@sadeghi-ehsan/radin-icon";
import { classJoin, empty, extractFormElementProps, filterObj, ifNotEmpty, isCallable, keyboardEventChecker, randomStr } from "../../../utils";
import { FormElementWrapper } from "../../Atoms/FormElementWrapper";
import { BaseInput } from "../../Atoms/BaseInput";
import { Input } from "../Input";
import { initialState } from "./utils";
// normalize value to 4 parts object
const splitStrToSeparatePartsObj = (str, skip = null) => {
    const _v = str.split(".");
    // slice every v to 3 chars
    const v = _v.map(a => a.slice(0, 3));
    if (skip === 1) {
        return {
            part2: v?.[0],
            ...(v?.[1] && { part3: v?.[1] }),
            ...(v?.[2] && { part4: v?.[2] })
        };
    }
    if (skip === 2) {
        return {
            part3: v?.[0],
            ...(v?.[1] && { part4: v?.[1] })
        };
    }
    if (skip === 3) {
        return {
            part4: v?.[0]
        };
    }
    return {
        part1: v?.[0],
        ...(v?.[1] && { part2: v?.[1] }),
        ...(v?.[2] && { part3: v?.[2] }),
        ...(v?.[3] && { part4: v?.[3] })
    };
};
export const InputIPAddress = forwardRef(({ 
// Input props
className, clearedValue, 
// FormElementWrapper props,
size, clearable, 
// BaseInput props
id: _id, onChange, disabled, readOnly, value, name: filedName, style, startAdornment, placeholder, ...restProps }, passedRef) => {
    const id = _id || `InputIPAddress-${filedName || randomStr()}`;
    const ref = ifNotEmpty(passedRef, passedRef, useRef());
    const inputsContainerRef = useRef();
    const [wrapperProps] = extractFormElementProps(restProps);
    const [combinedValue, setCombinedValue] = useState(initialState);
    const inputsContainer = inputsContainerRef.current;
    const inputs = [...(inputsContainer?.querySelectorAll("input") || [])];
    const normalizedValue = `${combinedValue.part1}${combinedValue.part2 && `.${combinedValue.part2}`}${combinedValue.part3 && `.${combinedValue.part3}`}${combinedValue.part4 && `.${combinedValue.part4}`}`;
    function focusPrevField(InputIndex) {
        if (inputs[InputIndex - 1]) {
            inputs[InputIndex - 1].focus();
        }
    }
    function focusNextField(InputIndex) {
        if (inputs[InputIndex + 1]) {
            inputs[InputIndex + 1].focus();
        }
    }
    useEffect(() => {
        if (!empty(value) && value !== normalizedValue) {
            setCombinedValue(prev => ({ ...prev, ...splitStrToSeparatePartsObj(value) }));
        }
        else if (empty(value)) {
            setCombinedValue(initialState);
        }
    }, [value]);
    /**
     * onChange handler
     */
    useEffect(() => {
        if (!empty(onChange) &&
            isCallable(onChange) &&
            !empty(normalizedValue) &&
            JSON.stringify(normalizedValue) !== JSON.stringify(value)) {
            onChange(normalizedValue, filedName, null);
        }
    }, [normalizedValue]);
    const onClear = () => {
        setCombinedValue(prev => clearedValue ? { ...prev, ...splitStrToSeparatePartsObj(clearedValue) } : initialState);
        if (value === undefined) {
            if (!empty(ref?.current)) {
                ref.current.value = "";
            }
        }
    };
    const handleChange = (v, n) => {
        if (v.includes("."))
            return;
        setCombinedValue(prev => ({ ...prev, [n]: v?.length > 3 ? v.slice(0, 3) : v }));
        // if e top or bottom arrow key code
        if (v.length >= 3) {
            const InputIndex = inputs.findIndex(a => a.name === n);
            focusNextField(InputIndex);
        }
    };
    // handleEnter
    const handleKeyDown = (e) => {
        // if e arrow up or arrow down key
        if (keyboardEventChecker(e, "ArrowUp") || keyboardEventChecker(e, "ArrowDown")) {
            e.preventDefault();
            return;
        }
        const backspace = keyboardEventChecker(e, "Backspace");
        const dot = keyboardEventChecker(e, "Period") || keyboardEventChecker(e, "NumpadDecimal"); // dot (.)
        const target = e.target;
        const val = target?.value;
        const InputIndex = inputs.indexOf(target);
        if (dot) {
            e.preventDefault();
            focusNextField(InputIndex);
            return;
        }
        if (backspace) {
            if ((val?.length || 0) - 1 < 0) {
                setTimeout(() => {
                    focusPrevField(InputIndex);
                }, 0);
            }
        }
    };
    const handlePaste = (e) => {
        e.preventDefault();
        if (!e.clipboardData || !e.clipboardData.getData) {
            return;
        }
        const pasteData = e.clipboardData.getData("text/plain");
        if (!pasteData) {
            return;
        }
        const target = e.target;
        const InputIndex = inputs.indexOf(target);
        setCombinedValue(prev => ({
            ...prev,
            ...splitStrToSeparatePartsObj(pasteData, InputIndex === 0 ? null : InputIndex)
        }));
    };
    const focusRef = () => {
        if (!empty(ref?.current)) {
            ref.current.focus();
        }
    };
    return (_jsx(FormElementWrapper, { ...wrapperProps, ...{
            id,
            size,
            disabled,
            style,
            onClear,
            clearable: !disabled && !readOnly && clearable,
            allowClear: !empty(value) || value === undefined,
            className: classJoin(["sbt-input", className]),
            onFieldsetClick: focusRef
        }, childrenClassName: "flex flex-nowrap items-center dir-ltr justify-center", startAdornment: startAdornment || _jsx(Ip, { size: "xl", color: disabled ? "disabled" : "idle" }), children: _jsx("div", { ref: inputsContainerRef, children: [1, 2, 3, 4].map(i => (_jsx("div", { className: classJoin([
                    "flex-1 text-center h-full px-6 first:pl-2 last:pr-2 border-r last:border-r-0",
                    disabled ? "border-r-disabled" : "border-r-primary"
                ]), children: _jsx(BaseInput, { name: `part${i}`, id: i === 1 ? id : undefined, value: combinedValue?.[`part${i}`], type: "number", align: "center", onChange: handleChange, disabled: disabled, readOnly: readOnly, fontSize: size === "sm" ? "xs" : "sm", onKeyDown: handleKeyDown, onPaste: e => handlePaste(e), min: 0, max: 255, className: classJoin([
                        "w-8.5 border-b border-disabled appearance-none-all h-full",
                        size === "sm" ? "leading-xs" : "leading-sm"
                    ]), placeholder: placeholder }) }, i))) }) }));
});
InputIPAddress.defaultProps = {
    ...filterObj(Input.defaultProps, (v, k) => !["type", "align", "onPaste", "onKeyDown", "maxLength"].includes(k))
};
export default InputIPAddress;
//# sourceMappingURL=InputIPAddress.js.map