import { ClipboardEvent, forwardRef, useRef } from "react";
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
import { IInputShebaProps } from "./types";
import { CompoundedComponent } from "../../../types/common";
import { BaseInput } from "../../Atoms/BaseInput";
import { Input } from "../Input";

export const InputSheba = forwardRef<HTMLInputElement, IInputShebaProps>(
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
      value: _value,
      name,
      style,
      placeholder,
      ...restProps
    },
    passedRef
  ) => {
    const id = _id || `InputSheba-${name || randomStr()}`;
    const ref = ifNotEmpty(passedRef, passedRef, useRef());
    const value = !empty(_value) ? _value?.toLowerCase()?.replaceAll("ir", "") : "";

    const [wrapperProps, componentProps] = extractFormElementProps(restProps);

    const handleChange = (v, n = name, e = undefined) => {
      if (v?.length > 24) return;

      if (!empty(onChange) && isCallable(onChange)) {
        onChange(!empty(v) ? `IR${v}` : "", n, e);
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

    const handlePaste = (e: ClipboardEvent<HTMLInputElement>) => {
      if (!e.clipboardData || !e.clipboardData.getData) {
        return;
      }

      // regex replace all whitespace with empty string
      const pasteData = e.clipboardData.getData("text/plain").replace(/\s/g, "");
      if (!pasteData) {
        return;
      }

      if (pasteData?.toLowerCase()?.includes("ir")) {
        handleChange(pasteData?.toLowerCase()?.replaceAll("ir", ""));
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
          size,
          disabled,
          style,
          onClear,
          clearable: !disabled && !readOnly && clearable,
          allowClear: !empty(value) || value === undefined,
          className: classJoin(["sbt-input", className]),
          onFieldsetClick: focusRef
        } as IFormElWrapperProps)}
        childrenClassName="flex flex-nowrap items-center dir-ltr justify-end "
      >
        <div>
          <div className={classJoin(["border-r select-none", disabled ? "border-r-disabled" : "border-r-primary"])}>
            <div
              className={classJoin(["mr-1.5 border-b border-b-disabled", disabled ? " text-disabled" : " text-white"])}
            >
              IR
            </div>
          </div>
          <div className={classJoin(["text-right h-full px-1.5 first:pl-2 last:pr-2"])}>
            <BaseInput
              {...componentProps}
              {...{
                id,
                name,
                value,
                type: "number",
                align: "left",
                onChange: handleChange,
                disabled,
                readOnly,
                fontSize: size === "sm" ? "xs" : "sm",
                onPaste: handlePaste,
                className: classJoin([
                  "border-b border-disabled appearance-none-all h-full w-52",
                  size === "sm" ? "leading-xs" : "leading-sm"
                ]),
                ref
              }}
            />
          </div>
        </div>
      </FormElementWrapper>
    );
  }
) as CompoundedComponent<IInputShebaProps>;
InputSheba.defaultProps = {
  ...filterObj(Input.defaultProps, (v, k) => !["type", "align", "onPaste", "onKeyDown", "maxLength"].includes(k))
};

export default InputSheba;
