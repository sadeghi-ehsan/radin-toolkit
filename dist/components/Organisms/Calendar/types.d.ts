import { ReactElement } from "react";
import { CalendarProps } from "react-multi-date-picker";
export declare type TCalendarLocales = "en" | "fa";
export declare type TCalendarValue = string | string[] | null;
export interface ICalendarProps extends Omit<CalendarProps, "value" | "locale" | "onChange"> {
    locale?: TCalendarLocales;
    /**
     * onChange
     * @param selectedDates
     */
    onChange?(selectedDates: TCalendarValue): void;
    value?: TCalendarValue;
    timePicker?: boolean;
    /**
     * header component
     */
    header?: ReactElement | string;
}
