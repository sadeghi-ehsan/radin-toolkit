import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
/* eslint-disable react/no-array-index-key */
import { forwardRef } from "react";
import dayjs from "dayjs";
import { Calendar } from "@sadeghi-ehsan/radin-icon";
import { classJoin, empty } from "../../../utils";
import { FormElementWrapper } from "../../Atoms/FormElementWrapper";
export const InputDatePicker = forwardRef(({ value: val, calendarProps, endAdornment, className, disabled, readOnly, clearable, legendClassName, placeholder, ...formElementWrapperProps }) => {
    // const ref = ifNotEmpty(passedRef, passedRef, useRef());
    const { locale = "fa", timePicker } = calendarProps;
    const value = !val ? null : !Array.isArray(val) ? [val] : val; // insure always will be array because react-multi-date-picker will return array
    return (_jsx(FormElementWrapper, { ...formElementWrapperProps, ...{
            disabled,
            clearable: !disabled && !readOnly && clearable,
            allowClear: !empty(value) || value === undefined,
            // onClear: () => handleOnChange(undefined),
            className: classJoin(["sbt-input", className]),
            legendClassName: classJoin(["min-w-fit", legendClassName]),
            childrenClassName: "flex items-center",
            endAdornment: endAdornment !== undefined ? endAdornment : _jsx(Calendar, { size: "xl", color: "idle" })
        }, children: _jsx("div", { children: empty(value)
                ? placeholder
                : value?.length > 0 &&
                    value?.map((item, index) => {
                        const v = item;
                        const date = 
                        // @ts-ignore
                        dayjs(v, { jalali: locale === "fa" })
                            ?.calendar(locale === "fa" ? "jalali" : "gregory")
                            // @ts-ignore
                            ?.locale("fa");
                        return (_jsx("div", { children: _jsxs("div", { className: "sbt-input-date-picker", children: [index + 1 !== value?.length && _jsx("div", { children: "-" }), _jsxs("div", { className: "date", children: [_jsx("span", { children: date.format("YYYY") }), _jsx("span", { children: date.format("MM") }), _jsx("span", { children: date.format("DD") })] }), timePicker && (_jsxs("div", { className: "time", children: [_jsx("span", { children: date.format("HH") }), ":", _jsx("span", { children: date.format("mm") }), ":", _jsx("span", { children: date.format("ss") })] }))] }) }, index));
                    }) }) }));
});
//# sourceMappingURL=utils.js.map