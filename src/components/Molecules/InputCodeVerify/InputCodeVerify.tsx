import { forwardRef, useEffect, useRef, useState } from "react";
import {
  classJoin,
  empty,
  extractFormElementProps,
  filterObj,
  ifNotEmpty,
  isCallable,
  randomStr
} from "../../../utils";
import { CompoundedComponent } from "../../../types/common";
import { IInputCodeVerifyProps } from "./types";
import { FormElementWrapper, IFormElWrapperProps } from "../../Atoms/FormElementWrapper";
import { Input } from "../Input";

import { BaseInput } from "../../Atoms/BaseInput";
import RenderEndLabelAdornment from "./RenderEndLabelAdornment";
import { focusRef, handleChange, handleKeyDown, handlePaste } from "./utils";

export const InputCodeVerify = forwardRef<HTMLDivElement, IInputCodeVerifyProps>(
  (
    {
      className,
      size,
      id: _id,
      onChange,
      disabled,
      readOnly,
      value,
      name,
      style,
      inputsLength,
      placeholder,
      onResend,
      counterSeconds,
      autoFocusFirstField,
      isLoading,
      resendBtnText,
      ...restProps
    },
    passedRef
  ) => {
    const id = _id || `InputCodeVerify-${name || randomStr()}`;
    const [wrapperProps] = extractFormElementProps(restProps);
    const ref = ifNotEmpty(passedRef, passedRef, useRef());
    const itemsRef = useRef([]);
    const [focused, setFocused] = useState(false);
    const [combinedValue, setCombinedValue] = useState(value?.slice(0, inputsLength) || "");
    const [numberOfResendClicked, setNumberOfResendClicked] = useState(0);
    const [counter, setCounter] = useState(counterSeconds);

    useEffect(() => {
      if (value !== combinedValue) {
        setCombinedValue(value?.slice(0, inputsLength) || "");
      }

      /**
       * auto focus first field if value set to empty
       */
      if (value === null || value === "" || value === undefined) {
        itemsRef?.current?.[0]?.focus();
      }
    }, [value]);

    useEffect(() => {
      const timer = !disabled && !isLoading && counter > 0 && setInterval(() => setCounter(counter - 1), 1000);
      return () => clearInterval(timer);
    }, [counter, disabled, isLoading]);

    useEffect(() => {
      itemsRef.current = itemsRef.current.slice(0, inputsLength);
    }, [inputsLength]);

    /**
     * onChange handler
     */
    useEffect(() => {
      if (!empty(onChange) && isCallable(onChange) && !empty(`${combinedValue}`) && `${combinedValue}` !== value) {
        onChange(`${combinedValue}`, name, null);
      }
    }, [combinedValue]);

    function handleResend() {
      if (!empty(onResend) && isCallable(onResend)) {
        onResend(numberOfResendClicked);
        setCounter(counterSeconds);
        setCombinedValue("");
        setNumberOfResendClicked(prev => prev + 1);
      }
    }

    return (
      <FormElementWrapper
        {...wrapperProps}
        {...({
          id,
          size: "md",
          disabled,
          style,
          className: classJoin(["sbt-input", className]),
          onFieldsetClick: () => focusRef(ref),
          fieldsetClassName: "!h-auto",
          legendClassName: "!mb-5",
          endLabelAdornment: (
            <RenderEndLabelAdornment {...{ isLoading, disabled, onResend, handleResend, counter, resendBtnText }} />
          )
        } as IFormElWrapperProps)}
        variant="none"
        childrenClassName="flex flex-nowrap items-center dir-ltr justify-center h-auto py-0 pl-0"
      >
        <div>
          {[...Array(inputsLength).keys()].map(i => (
            <div key={i} className={classJoin(["flex-1 text-center h-auto px-1 first:pl-0 last:pr-0"])}>
              <BaseInput
                name={`part${i}`}
                id={i === 0 ? id : undefined}
                ref={el => {
                  itemsRef.current[i] = el;
                }}
                autoFocus={autoFocusFirstField && i === 0}
                autoComplete="off"
                onFocus={() => setFocused(true)}
                onBlur={() => setFocused(false)}
                value={combinedValue?.charAt(i)}
                type="number"
                align="center"
                onChange={(e, n = name) => handleChange(e, n, { itemsRef, setCombinedValue })}
                disabled={disabled || isLoading}
                readOnly={readOnly}
                fontSize={size === "sm" ? "xs" : "sm"}
                onKeyDown={e => handleKeyDown(e, { itemsRef })}
                onPaste={e => handlePaste(e, { setCombinedValue, inputsLength })}
                className={classJoin([
                  "rounded-xl border appearance-none-all transition focus:shadow-input focus:shadow-primary-shadow",
                  size === "sm" ? " leading-xs h-9 w-10 " : "leading-sm w-12 h-11 ",
                  ifNotEmpty(
                    wrapperProps.error,
                    "border-error shadow-input shadow-error",
                    focused || value ? "border-primary" : "border-disabled"
                  )
                ])}
                placeholder={placeholder}
              />
            </div>
          ))}
        </div>
      </FormElementWrapper>
    );
  }
) as CompoundedComponent<IInputCodeVerifyProps>;

InputCodeVerify.defaultProps = {
  ...filterObj(
    Input.defaultProps,
    (v, k) =>
      ![
        "variant",
        "type",
        "align",
        "onPaste",
        "onKeyDown",
        "size",
        "clearable",
        "allowClear",
        "clearedValue",
        "endLabelAdornment",
        "fieldsetClassName",
        "legendClassName"
      ].includes(k)
  ),
  inputsLength: 4,
  counterSeconds: 60,
  autoFocusFirstField: true,
  resendBtnText: "ارسال مجدد"
};
export default InputCodeVerify;
