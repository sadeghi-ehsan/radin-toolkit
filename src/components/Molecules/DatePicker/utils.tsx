/* eslint-disable react/no-array-index-key */
import { forwardRef } from "react";
import dayjs from "dayjs";
import { Calendar } from "@sadeghi-ehsan/radin-icon";
import { IInputDatePickerProps } from "./types";
import { CompoundedComponent } from "../../../types/common";
import { classJoin, empty } from "../../../utils";
import { FormElementWrapper, IFormElWrapperProps } from "../../Atoms/FormElementWrapper";

export const InputDatePicker = forwardRef<HTMLInputElement, IInputDatePickerProps>(
  ({
    value: val,

    calendarProps,
    endAdornment,
    className,
    disabled,
    readOnly,
    clearable,
    legendClassName,
    placeholder,
    ...formElementWrapperProps
  }) =>
    // passedRef
    {
      // const ref = ifNotEmpty(passedRef, passedRef, useRef());
      const { locale = "fa", timePicker } = calendarProps;
      const value = !val ? null : !Array.isArray(val) ? [val] : val; // insure always will be array because react-multi-date-picker will return array

      return (
        <FormElementWrapper
          {...formElementWrapperProps}
          {...({
            disabled,
            clearable: !disabled && !readOnly && clearable,
            allowClear: !empty(value) || value === undefined,
            // onClear: () => handleOnChange(undefined),
            className: classJoin(["sbt-input", className]),
            legendClassName: classJoin(["min-w-fit", legendClassName]),
            childrenClassName: "flex items-center",
            endAdornment: endAdornment !== undefined ? endAdornment : <Calendar size="xl" color="idle" />
          } as IFormElWrapperProps)}
        >
          <div>
            {/* <input ref={ref} type="hidden" value={value} onChange={handleValueChange} {...componentProps} /> */}

            {empty(value)
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

                  return (
                    <div key={index}>
                      <div className="sbt-input-date-picker">
                        {index + 1 !== value?.length && <div>-</div>}
                        <div className="date">
                          <span>{date.format("YYYY")}</span>
                          <span>{date.format("MM")}</span>
                          <span>{date.format("DD")}</span>
                        </div>
                        {timePicker && (
                          <div className="time">
                            <span>{date.format("HH")}</span>:<span>{date.format("mm")}</span>:
                            <span>{date.format("ss")}</span>
                          </div>
                        )}
                      </div>
                    </div>
                  );
                })}
          </div>
        </FormElementWrapper>
      );
    }
) as CompoundedComponent<IInputDatePickerProps>;
