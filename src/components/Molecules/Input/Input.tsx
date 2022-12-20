import { forwardRef, useRef } from "react";
import { BaseInput } from "../../Atoms/BaseInput";
import { FormElementWrapper, IFormElWrapperProps } from "../../Atoms/FormElementWrapper";
import { CompoundedComponent } from "../../../types/common";
import { IInputProps, InputTypes } from "./types";
import {
  classJoin,
  empty,
  extractFormElementProps,
  filterObj,
  ifNotEmpty,
  isCallable,
  randomStr
} from "../../../utils";

export const Input = forwardRef<HTMLInputElement, IInputProps>(
  (
    {
      // Input props
      className,
      clearedValue,

      // FormElementWrapper props,
      size,
      clearable,
      legendClassName,

      // BaseInput props
      id: _id,
      onChange,
      disabled,
      readOnly,
      value,
      name,
      style,
      type,
      align,

      ...restProps
    },
    passedRef
  ) => {
    const id = _id || `Input-${name || randomStr()}`;
    const ref = ifNotEmpty(passedRef, passedRef, useRef());

    const [wrapperProps, componentProps] = extractFormElementProps(restProps);

    const handleChange = (v, n = name, e = undefined) => {
      if (!empty(onChange) && isCallable(onChange)) {
        onChange(v, n, e);
      }
    };

    const onClear = () => {
      handleChange(clearedValue);

      if (value === undefined) {
        if (!empty(ref?.current)) {
          ref.current.value = "";
        }
      }
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
          onClear,
          size,
          disabled,
          style,
          clearable: !disabled && !readOnly && clearable,
          allowClear: !empty(value) || value === undefined,
          className: classJoin([className, "sbt-input"]),
          onFieldsetClick: focusRef,
          legendClassName: classJoin(["min-w-fit", legendClassName])
        } as IFormElWrapperProps)}
      >
        <BaseInput
          {...componentProps}
          {...{
            id,
            name,
            value,
            type,
            align: ifNotEmpty(
              align,
              align,
              ["email", "password", "tel", "url", "number"].includes(type) && !empty(value) ? "left" : undefined
            ),
            onChange: handleChange,
            disabled,
            readOnly,
            fontSize: size === "sm" ? "xs" : "sm",
            ref
          }}
        />
      </FormElementWrapper>
    );
  }
) as CompoundedComponent<IInputProps>;

Input.defaultProps = {
  ...FormElementWrapper.defaultProps,
  ...filterObj(BaseInput.defaultProps, (v, k) => k !== "fontSize"),
  type: (BaseInput.defaultProps.type || "text") as InputTypes,
  clearedValue: ""
};

export default Input;
