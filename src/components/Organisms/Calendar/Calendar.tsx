import React, { FunctionComponent, useEffect, useState } from "react";
import { Calendar as ReactMultiDatePickerCalendar } from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import gregorian from "react-date-object/calendars/gregorian";
import persianFa from "react-date-object/locales/persian_fa";
import gregorianEn from "react-date-object/locales/gregorian_en";
import TimePicker from "react-multi-date-picker/plugins/time_picker";
import DateObject from "react-date-object";
import { classJoin, ifNotEmpty, toJalaliDay } from "../../../utils";
import { ICalendarProps, TCalendarValue } from "./types";
import { renderButton, RenderHeader } from "./utils";

const weekDaysFA = ["ش", "ی", "د", "س", "چ", "پ", "ج"];
const weekDaysEN = ["Sa", "Mo", "Tu", "We", "Th", "Fr", "sa"];

const Calendar: FunctionComponent<ICalendarProps> = ({
  children,
  className,
  value,
  onChange,
  multiple,
  locale,
  range,
  timePicker,
  minDate,
  maxDate,
  onPropsChange,
  onFocusedDateChange,
  header,
  ...restProps
}) => {
  const [initialValue, setInitialValue] = useState<TCalendarValue>(null);

  const handleOnChange = (dateObject: DateObject) => {
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

  return (
    <ReactMultiDatePickerCalendar
      // ref={ref}
      className={classJoin(["sbt-calendar-popup", className])}
      value={Array.isArray(initialValue) ? initialValue.map(d => new Date(d)) : new Date(initialValue)}
      onChange={handleOnChange}
      multiple={multiple}
      calendar={locale === "fa" ? persian : gregorian}
      locale={locale === "fa" ? persianFa : gregorianEn}
      weekDays={locale === "fa" ? weekDaysFA : weekDaysEN}
      range={range}
      shadow={false}
      arrow={false}
      plugins={[
        ...ifNotEmpty(header, [<RenderHeader key="header" position="top" header={header} />], []),
        ...ifNotEmpty(timePicker, [<TimePicker key="TimePicker" position="bottom" />], [])
      ]}
      {...ifNotEmpty(minDate, { minDate }, {})}
      {...ifNotEmpty(maxDate, { maxDate }, {})}
      {...ifNotEmpty(onPropsChange, { onPropsChange }, {})}
      {...ifNotEmpty(onFocusedDateChange, { onFocusedDateChange }, {})}
      format={timePicker ? "YYYY/MM/DD HH:mm:ss" : "YYYY/MM/DD"}
      renderButton={(direction, handleClick) => renderButton({ direction, handleClick, locale })}
      {...restProps}
    >
      {children}
    </ReactMultiDatePickerCalendar>
  );
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
