import { jsx as _jsx } from "react/jsx-runtime";
import { useEffect, useState } from "react";
import { Calendar as ReactMultiDatePickerCalendar } from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import gregorian from "react-date-object/calendars/gregorian";
import persianFa from "react-date-object/locales/persian_fa";
import gregorianEn from "react-date-object/locales/gregorian_en";
import TimePicker from "react-multi-date-picker/plugins/time_picker";
import { classJoin, ifNotEmpty, toJalaliDay } from "../../../utils";
import { renderButton, RenderHeader } from "./utils";
const weekDaysFA = ["ش", "ی", "د", "س", "چ", "پ", "ج"];
const weekDaysEN = ["Sa", "Mo", "Tu", "We", "Th", "Fr", "sa"];
const Calendar = ({ children, className, value, onChange, multiple, locale, range, timePicker, minDate, maxDate, onPropsChange, onFocusedDateChange, header, ...restProps }) => {
    const [initialValue, setInitialValue] = useState(null);
    const handleOnChange = (dateObject) => {
        // returns UTC date string (or array of strings if multi date picker)
        // example of returning value:
        // 2020-02-11T00:00:00.000Z
        function convertDate(d) {
            return new Date(toJalaliDay(d).toJSON())?.toISOString();
        }
        const dateStrings = Array.isArray(dateObject) ? dateObject.map(d => convertDate(d)) : convertDate(dateObject);
        onChange(dateStrings);
        setInitialValue(dateStrings);
    };
    useEffect(() => {
        setInitialValue(value);
    }, [value]);
    return (_jsx(ReactMultiDatePickerCalendar
    // ref={ref}
    , { 
        // ref={ref}
        className: classJoin(["sbt-calendar-popup", className]), value: Array.isArray(initialValue) ? initialValue.map(d => new Date(d)) : new Date(initialValue), onChange: handleOnChange, multiple: multiple, calendar: locale === "fa" ? persian : gregorian, locale: locale === "fa" ? persianFa : gregorianEn, weekDays: locale === "fa" ? weekDaysFA : weekDaysEN, range: range, shadow: false, arrow: false, plugins: [
            ...ifNotEmpty(header, [_jsx(RenderHeader, { position: "top", header: header }, "header")], []),
            ...ifNotEmpty(timePicker, [_jsx(TimePicker, { position: "bottom" }, "TimePicker")], [])
        ], ...ifNotEmpty(minDate, { minDate }, {}), ...ifNotEmpty(maxDate, { maxDate }, {}), ...ifNotEmpty(onPropsChange, { onPropsChange }, {}), ...ifNotEmpty(onFocusedDateChange, { onFocusedDateChange }, {}), format: timePicker ? "YYYY/MM/DD HH:mm:ss" : "YYYY/MM/DD", renderButton: (direction, handleClick) => renderButton({ direction, handleClick, locale }), ...restProps, children: children }));
};
Calendar.defaultProps = {
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
};
export default Calendar;
//# sourceMappingURL=Calendar.js.map