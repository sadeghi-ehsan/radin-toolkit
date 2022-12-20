import { useState, KeyboardEvent, useEffect, ClipboardEvent, forwardRef, useRef } from "react";
import { BankCardAdd } from "@sadeghi-ehsan/radin-icon";
import {
  classJoin,
  empty,
  extractFormElementProps,
  filterObj,
  ifNotEmpty,
  isCallable,
  isNumberString,
  keyboardEventChecker,
  randomStr
} from "../../../utils";
import { FormElementWrapper, IFormElWrapperProps } from "../../Atoms/FormElementWrapper";
import { IInputBankCardProps } from "./types";
import { CompoundedComponent } from "../../../types/common";
import { BaseInput } from "../../Atoms/BaseInput";
import { initialState } from "./utils";
import { Input } from "../Input";

// normalize value to 4 parts object
const splitStrToSeparatePartsObj = (str: string, skip: number | null = null) => {
  if (skip === 1) {
    return {
      part2: str?.slice(0, 4),
      ...(str?.slice(4, 8) && { part3: str?.slice(4, 8) }),
      ...(str?.slice(8, 12) && { part4: str?.slice(8, 12) })
    };
  }
  if (skip === 2) {
    return {
      part3: str?.slice(0, 4),
      ...(str?.slice(4, 8) && { part4: str?.slice(4, 8) })
    };
  }
  if (skip === 3) {
    return {
      part4: str?.slice(0, 4)
    };
  }

  return {
    part1: str?.slice(0, 4),
    ...(str?.slice(4, 8) && { part2: str?.slice(4, 8) }),
    ...(str?.slice(8, 12) && { part3: str?.slice(8, 12) }),
    ...(str?.slice(12, 16) && { part4: str?.slice(12, 16) })
  };
};

export const InputBankCard = forwardRef<HTMLInputElement, IInputBankCardProps>(
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
      ...restProps
    },
    passedRef
  ) => {
    const id = _id || `InputBankCard-${filedName || randomStr()}`;
    const ref = ifNotEmpty(passedRef, passedRef, useRef());
    const inputsContainerRef = useRef();

    const [wrapperProps] = extractFormElementProps(restProps);
    const [combinedValue, setCombinedValue] = useState(initialState);

    const inputsContainer: any = inputsContainerRef.current;
    const inputs = [...(inputsContainer?.querySelectorAll("input") || [])];

    const normalizedValue = `${combinedValue.part1}${combinedValue.part2}${combinedValue.part3}${combinedValue.part4}`;

    function focusPrevField(InputIndex) {
      if (inputs[InputIndex - 1]) {
        setTimeout(() => {
          inputs[InputIndex - 1].focus();
        }, 0);
      }
    }

    function focusNextField(InputIndex) {
      if (inputs[InputIndex + 1]) {
        setTimeout(() => {
          inputs[InputIndex + 1].focus();
        }, 0);
      }
    }

    useEffect(() => {
      if (!empty(value) && value !== normalizedValue) {
        setCombinedValue(prev => ({ ...prev, ...splitStrToSeparatePartsObj(value) }));
      } else if (empty(value)) {
        setCombinedValue(initialState);
      }
    }, [value]);

    /**
     * onChange handler
     */
    useEffect(() => {
      if (
        !empty(onChange) &&
        isCallable(onChange) &&
        !empty(normalizedValue) &&
        JSON.stringify(normalizedValue) !== JSON.stringify(value)
      ) {
        onChange(normalizedValue, filedName, null);
      }
    }, [normalizedValue]);

    const onClear = () => {
      setCombinedValue(prev =>
        clearedValue ? { ...prev, ...splitStrToSeparatePartsObj(clearedValue) } : initialState
      );

      if (value === undefined) {
        if (!empty(ref?.current)) {
          ref.current.value = "";
        }
      }
    };

    const handleChange = (v, n) => {
      if (!isNumberString(v)) {
        return;
      }
      setCombinedValue(prev => ({ ...prev, [n]: v?.length > 4 ? v.slice(0, 4) : v }));

      if (v.length >= 4) {
        const InputIndex = inputs.findIndex(a => a.name === n);
        focusNextField(InputIndex);
      }
    };

    // handleEnter
    const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
      const backspace = keyboardEventChecker(e, "Backspace");
      const target = e.target as HTMLInputElement;
      const InputIndex = inputs.indexOf(target);

      if (backspace) {
        if ((target?.value?.length || 0) - 1 < 0) {
          focusPrevField(InputIndex);
        }
      }
    };

    const handlePaste = (e: ClipboardEvent<HTMLInputElement>) => {
      e.preventDefault();
      if (!e.clipboardData || !e.clipboardData.getData) {
        return;
      }

      // regex replace all whitespace with empty string
      const pasteData = e.clipboardData.getData("text/plain").replace(/\s/g, "");
      if (!pasteData) {
        return;
      }

      const target = e.target as HTMLInputElement;
      const InputIndex = inputs.indexOf(target);

      setCombinedValue(prev => ({
        ...prev,
        ...splitStrToSeparatePartsObj(pasteData, InputIndex === 0 ? null : InputIndex)
      }));
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
        childrenClassName="flex flex-nowrap items-center dir-ltr justify-center "
        startAdornment={startAdornment || <BankCardAdd size="xl" color={disabled ? "disabled" : "idle"} />}
      >
        <div ref={inputsContainerRef}>
          {[1, 2, 3, 4].map(i => (
            <div
              key={i}
              className={classJoin([
                "flex-1 text-center h-full px-6 first:pl-2 last:pr-2 border-r last:border-r-0",
                disabled ? "border-r-disabled" : "border-r-primary"
              ])}
            >
              <BaseInput
                name={`part${i}`}
                id={i === 1 ? id : undefined}
                value={combinedValue?.[`part${i}`]}
                type="text"
                align="center"
                onChange={handleChange}
                disabled={disabled}
                readOnly={readOnly}
                fontSize={size === "sm" ? "xs" : "sm"}
                onKeyDown={handleKeyDown}
                onPaste={e => handlePaste(e)}
                className={classJoin([
                  "w-8.5 border-b border-disabled appearance-none-all h-full",
                  size === "sm" ? "leading-xs" : "leading-sm"
                ])}
                placeholder={placeholder}
              />
            </div>
          ))}
        </div>
      </FormElementWrapper>
    );
  }
) as CompoundedComponent<IInputBankCardProps>;
InputBankCard.defaultProps = {
  ...filterObj(Input.defaultProps, (v, k) => !["type", "align", "onPaste", "onKeyDown", "maxLength"].includes(k))
};

export default InputBankCard;
