import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { forwardRef, useRef } from "react";
import { Switch } from "../../Atoms/Switch";
import { FormElementWrapper } from "../../Atoms/FormElementWrapper";
import { classJoin, convertMsToTime, isNumber } from "../../../utils";
import { InputTimeGroup } from "./utils";
const InputTime = forwardRef(({ groupLabel, className, onChange, value, name, disabled, readOnly, fieldsetClassName, fieldGroupVariant, inputVariant, switchClasses: { outerClassName, innerClassName, labelClassName }, error, required, disableHourSelection, hourLabel, disableMinuteSelection, minuteLabel, disableSecondSelection, secondLabel, ...restProps }) => {
    const inputsContainerRef = useRef();
    const [hours, minutes, seconds, ampm] = isNumber(value) ? convertMsToTime(value) : [null, null, null, null];
    /**
     * Convert am/pm time to milliseconds
     *
     * @param h - am/pm hours
     * @param m - minutes
     * @param s - seconds
     */
    const onInputTimesChange = (h, m, s) => {
        let newValue;
        if (ampm === "am" && h === 12)
            newValue = (m * 60 + s) * 1000;
        else if (ampm === "pm" && h >= 1 && h <= 11)
            newValue = (((h + 12) * 60 + m) * 60 + s) * 1000;
        else
            newValue = ((h * 60 + m) * 60 + s) * 1000;
        onChange(newValue);
    };
    /**
     * Check if am/pm is changed, and change value properly based on component milliseconds value and new am/pm value
     *
     * @param newAMPMValue - new changed am/pm value
     */
    const onAMPMChange = (newAMPMValue) => {
        if (newAMPMValue === ampm)
            return;
        if (!isNumber(value)) {
            if (newAMPMValue === "am")
                onChange(0);
            else
                onChange(43200000);
            return;
        }
        if (newAMPMValue === "am")
            onChange(value - 43200000);
        else
            onChange(value + 43200000);
    };
    /**
     * Paste event handler which decide if provided information on clipboard is suited for Input or not
     *
     * @param event - The event providing information related to modification of the clipboard
     */
    const onInputPaste = event => {
        const paste = (event.clipboardData || window.clipboardData).getData("text");
        const splitedPaste = paste.split(":").map(p => parseInt(p, 10));
        if (splitedPaste.length === 3) {
            event.preventDefault();
            const h = splitedPaste[0] >= 1 && splitedPaste[0] <= 24 ? splitedPaste[0] : 12;
            const m = splitedPaste[1] >= 0 && splitedPaste[1] <= 59 ? splitedPaste[1] : 0;
            const s = splitedPaste[2] >= 0 && splitedPaste[2] <= 59 ? splitedPaste[2] : 0;
            onInputTimesChange(h, m, s);
        }
    };
    /**
     * Return Input element by provided index
     *
     * @param inputIndex - The Index of input
     * @returns - Return Input element by provided index
     */
    const getInputByIndex = (inputIndex) => inputsContainerRef.current.querySelectorAll("input")[inputIndex];
    /**
     * Focus and select on current field
     *
     * @param currentInputIndex - The index of current input element
     */
    const focusField = (currentInputIndex) => {
        if (inputsContainerRef.current && currentInputIndex >= 0 && currentInputIndex <= 5) {
            getInputByIndex(currentInputIndex).select();
        }
    };
    /**
     * Common props between InputTimeGroups
     */
    const inputTimeGroupProps = {
        inputVariant,
        disabled,
        error,
        required,
        onPaste: onInputPaste,
        focusField
    };
    return (_jsx(FormElementWrapper, { className: className, label: groupLabel, childrenClassName: "!p-0", fieldsetClassName: classJoin(["!h-auto rounded-3.2xl px-6 pt-6 pb-8 h-unset", fieldsetClassName]), legendClassName: "!h-5 text-sm !leading-normal", variant: fieldGroupVariant, disabled: disabled, error: error, required: required, ...restProps, children: _jsxs("div", { className: "flex flex-row", children: [_jsxs("div", { ref: inputsContainerRef, className: "flex dir-ltr", children: [!disableHourSelection && (_jsx(InputTimeGroup, { inputGroupIndex: 0, groupLabel: hourLabel, value: hours, onChange: (v) => {
                                onInputTimesChange(v, minutes, seconds);
                            }, min: 1, max: 12, ...inputTimeGroupProps })), (!disableHourSelection && !disableMinuteSelection) ||
                            (!disableHourSelection && !disableSecondSelection) ? (_jsx("div", { className: "mx-2 mt-5.5", children: ":" })) : null, !disableMinuteSelection && (_jsx(InputTimeGroup, { inputGroupIndex: 1, groupLabel: minuteLabel, value: minutes, onChange: (v) => {
                                onInputTimesChange(hours, v, seconds);
                            }, min: 0, max: 59, ...inputTimeGroupProps })), !disableMinuteSelection && !disableSecondSelection ? _jsx("div", { className: "mx-2 mt-5", children: ":" }) : null, !disableSecondSelection && (_jsx(InputTimeGroup, { inputGroupIndex: 2, groupLabel: secondLabel, value: seconds, onChange: (v) => {
                                onInputTimesChange(hours, minutes, v);
                            }, min: 0, max: 59, ...inputTimeGroupProps }))] }), _jsxs(Switch, { name: "AM_PM", value: ampm, onChange: onAMPMChange, vertical: true, outerClassName: classJoin(["rounded-lg h-fit mt-auto mr-2", outerClassName]), labelClassName: classJoin(["text-xs leading-4 !px-2 py-0 pt-0.75", labelClassName]), innerClassName: classJoin(["rounded", innerClassName]), children: [_jsx(Switch.Option, { value: "am", children: "AM" }), _jsx(Switch.Option, { value: "pm", children: "PM" })] })] }) }));
});
InputTime.defaultProps = {
    disableHourSelection: false,
    hourLabel: "H",
    disableMinuteSelection: false,
    minuteLabel: "M",
    disableSecondSelection: false,
    secondLabel: "S",
    switchClasses: { labelClassName: "", innerClassName: "", outerClassName: "" }
};
export default InputTime;
//# sourceMappingURL=InputTime.js.map