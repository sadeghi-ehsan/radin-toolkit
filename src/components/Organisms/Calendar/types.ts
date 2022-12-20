import { ReactElement } from "react";
import { CalendarProps } from "react-multi-date-picker";

export type TCalendarLocales = "en" | "fa";
export type TCalendarValue = string | string[] | null;

export interface ICalendarProps extends Omit<CalendarProps, "value" | "locale" | "onChange"> {
  /*
   * Uses the Solar Hijri calendar and Persian locale by default
   * */
  locale?: TCalendarLocales;

  /**
   * onChange
   * @param selectedDates
   */
  onChange?(selectedDates: TCalendarValue): void;

  value?: TCalendarValue;

  /*
   * Add Time Picker to Calendar
   * */
  timePicker?: boolean;

  /**
   * header component
   */
  header?: ReactElement | string;
}
