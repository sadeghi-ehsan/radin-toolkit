/* eslint-disable react/no-array-index-key */
import { useState, useEffect, forwardRef, useRef } from "react";
import {
  classJoin,
  empty,
  extractFormElementProps,
  filterObj,
  ifNotEmpty,
  isCallable,
  randomStr
} from "../../../utils";
import { FormElementWrapper, IFormElWrapperProps } from "../../Atoms/FormElementWrapper";
import { IInputMultipleInputsProps } from "./types";
import { CompoundedComponent } from "../../../types/common";
import { BaseInput } from "../../Atoms/BaseInput";
import { Input } from "../Input";

export const InputMultipleInputs = forwardRef<HTMLInputElement, IInputMultipleInputsProps>(
  (
    {
      // Input props
      className,
      clearedValue,

      // FormElementWrapper props,
      size,
      clearable,

      // BaseInput props
      id: _id,
      onChange,
      disabled,
      readOnly,
      value,
      name: filedName,
      style,
      startAdornment,
      placeholder,
      schema,
      direction,
      align,
      ...restProps
    },
    passedRef
  ) => {
    const id = _id || `InputMultipleInputs-${filedName || randomStr()}`;
    const ref = ifNotEmpty(passedRef, passedRef, useRef());
    const inputsContainerRef = useRef();

    const [wrapperProps] = extractFormElementProps(restProps);
    const [combinedValue, setCombinedValue]: any = useState(undefined);

    useEffect(() => {
      if (!empty(value) && empty(combinedValue)) {
        setCombinedValue(prev => ({ ...prev, ...value }));
      }
    }, [value]);

    /**
     * onChange handler
     */
    useEffect(() => {
      if (
        !empty(onChange) &&
        isCallable(onChange) &&
        !empty(combinedValue) &&
        JSON.stringify(combinedValue) !== JSON.stringify(value)
      ) {
        onChange(combinedValue, filedName, null);
      }
    }, [combinedValue]);

    const onClear = () => {
      setCombinedValue(clearedValue || {});

      if (value === undefined) {
        if (!empty(ref?.current)) {
          ref.current.value = "";
        }
      }
    };

    const handleChange = (v, n) => {
      setCombinedValue(prev => ({ ...prev, [n]: v }));
    };

    const focusRef = () => {
      if (!empty(ref?.current)) {
        ref.current.focus();
      }
    };

    return (
      <FormElementWrapper
        {...wrapperProps}
        {...({
          id,
          size,
          disabled,
          style,
          onClear,
          clearable: !disabled && !readOnly && clearable,
          allowClear: !empty(value) || value === undefined,
          className: classJoin(["sbt-input", className]),
          onFieldsetClick: focusRef
        } as IFormElWrapperProps)}
        childrenClassName={classJoin([
          "flex flex-row items-center justify-center",
          direction === "rtl" ? "dir-rtl" : "dir-ltr"
        ])}
      >
        <div ref={inputsContainerRef}>
          {schema?.map((input, index) => (
            <div
              key={index}
              className={classJoin([
                "text-center h-full px-1.5",
                disabled ? "border-disabled" : "border-primary",
                direction === "rtl"
                  ? "border-l first:pr-2 last:pl-2 last:border-l-0"
                  : "border-r first:pl-2 last:pr-2 last:border-r-0",
                input.rootClassName || ""
              ])}
            >
              <BaseInput
                name={input.name}
                id={`${id}-part${index}`}
                value={combinedValue?.[input?.name] || ""}
                type={input.type || "text"}
                align={input.align || align}
                onChange={handleChange}
                disabled={disabled}
                readOnly={readOnly}
                fontSize={size === "sm" ? "xs" : "sm"}
                className={classJoin([
                  "w-full border-b border-disabled appearance-none-all h-full",
                  size === "sm" ? "leading-xs" : "leading-sm"
                ])}
                placeholder={input.placeholder}
              />
            </div>
          ))}
        </div>
      </FormElementWrapper>
    );
  }
) as CompoundedComponent<IInputMultipleInputsProps>;
InputMultipleInputs.defaultProps = {
  ...filterObj(Input.defaultProps, (v, k) => !["type"].includes(k)),
  direction: "rtl",
  schema: [
    {
      name: "address",
      type: "text",
      placeholder: "آدرس",
      rootClassName: "basis-full"
    },
    {
      name: "no",
      type: "text",
      placeholder: "پلاک",
      rootClassName: "basis-1/4"
    },
    {
      name: "floor",
      type: "text",
      placeholder: "طبقه",
      rootClassName: "basis-1/4"
    },
    {
      name: "unit",
      type: "text",
      placeholder: "واحد",
      rootClassName: "basis-1/4"
    }
  ]
};

export default InputMultipleInputs;
