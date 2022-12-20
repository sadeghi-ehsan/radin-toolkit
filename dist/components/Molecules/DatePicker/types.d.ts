import { ReactNode } from "react";
import { IInputProps } from "../Input";
import { ICalendarProps, TCalendarValue } from "../../Organisms/Calendar";
import { IPopoverProps } from "../../Atoms/Popover";
export interface IDatePickerProps extends IInputProps {
    /**
     * props passed to the calendar component
     */
    calendarProps?: ICalendarProps;
    /**
     * props passed to the popover component
     */
    popOverProps?: Omit<IPopoverProps, "content">;
    /**
     * onchange callback
     */
    onChange?(selectedDates: TCalendarValue): void;
    /**
     * value
     * @type {TCalendarValue}
     */
    value?: TCalendarValue;
    /**
     * custom element instead of input
     */
    element?: ReactNode | ((arg: {
        value: TCalendarValue;
    }) => ReactNode);
}
export interface IInputDatePickerProps extends Omit<IInputProps, "value"> {
    calendarProps?: ICalendarProps;
    value: TCalendarValue;
}
