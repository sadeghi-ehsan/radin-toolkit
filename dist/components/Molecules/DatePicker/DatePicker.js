import { jsx as _jsx } from "react/jsx-runtime";
import { forwardRef, useEffect, useState } from "react";
import { InputDatePicker } from "./utils";
import { Popover } from "../../Atoms/Popover";
import { Calendar } from "../../Organisms/Calendar";
export const DatePicker = forwardRef(({ onChange, value, calendarProps, popOverProps, element, ...formElementWrapperProps }, ref) => {
    const [initialValue, setInitialValue] = useState(null);
    const handleOnChange = (v) => {
        onChange(v);
        setInitialValue(v);
    };
    useEffect(() => {
        try {
            setInitialValue(Array.isArray(value) ? value.map(d => new Date(d).toISOString()) : new Date(value).toISOString());
        }
        catch (error) {
            console.error("invalid value");
        }
    }, [value]);
    return (_jsx(Popover, { className: "p-0", content: _jsx(Calendar, { ref: ref, value: initialValue, onChange: v => handleOnChange(v), ...calendarProps, children: calendarProps?.children }), ...popOverProps, children: element ? (typeof element === "function" ? (element({ value: initialValue })) : (_jsx("div", { children: element }))) : (_jsx("div", { children: _jsx(InputDatePicker, { calendarProps: calendarProps, value: initialValue, ...formElementWrapperProps }) })) }));
});
DatePicker.defaultProps = {
    calendarProps: {
        multiple: false,
        locale: "fa",
        range: false,
        timePicker: false,
        showOtherDays: false,
        disableYearPicker: false,
        disableMonthPicker: false,
        disableDayPicker: false,
        hideMonth: false,
        hideYear: false
    },
    placeholder: "تاریخ"
};
export default DatePicker;
//# sourceMappingURL=DatePicker.js.map