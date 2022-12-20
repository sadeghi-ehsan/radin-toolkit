import { forwardRef, MutableRefObject, useEffect, useState } from "react";
import { IDatePickerProps } from "./types";
import { InputDatePicker } from "./utils";
import { Popover } from "../../Atoms/Popover";
import { Calendar, TCalendarValue } from "../../Organisms/Calendar";

export const DatePicker = forwardRef<HTMLElement, IDatePickerProps>(
  (
    { onChange, value, calendarProps, popOverProps, element, ...formElementWrapperProps },
    ref: MutableRefObject<any>
  ) => {
    const [initialValue, setInitialValue] = useState<TCalendarValue>(null);

    const handleOnChange = (v: TCalendarValue) => {
      onChange(v);
      setInitialValue(v);
    };

    useEffect(() => {
      try {
        setInitialValue(
          Array.isArray(value) ? value.map(d => new Date(d).toISOString()) : new Date(value).toISOString()
        );
      } catch (error) {
        console.error("invalid value");
      }
    }, [value]);

    return (
      <Popover
        className="p-0"
        content={
          <Calendar ref={ref} value={initialValue} onChange={v => handleOnChange(v)} {...calendarProps}>
            {calendarProps?.children}
          </Calendar>
        }
        {...popOverProps}
      >
        {element ? (
          typeof element === "function" ? (
            element({ value: initialValue })
          ) : (
            <div>{element}</div>
          )
        ) : (
          <div>
            <InputDatePicker calendarProps={calendarProps} value={initialValue as any} {...formElementWrapperProps} />
          </div>
        )}
      </Popover>
    );
  }
);

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
