import { FunctionComponent, KeyboardEvent } from "react";
import { classJoin, isNumber, keyboardEventChecker } from "../../../utils";
import { FormElementWrapper } from "../../Atoms/FormElementWrapper";
import { InputNumber } from "../InputNumber";
import { InputTimeGroupInterface } from "./types";

export const InputTimeGroup: FunctionComponent<InputTimeGroupInterface> = ({
  inputGroupIndex,
  groupLabel,
  inputVariant,
  min,
  max,
  disabled,
  error,
  required,
  value,
  onChange,
  onPaste,
  focusField
}) => {
  const onesValue = isNumber(value) ? value % 10 : null;
  const tensValue = isNumber(value) ? Math.floor(value / 10) : null;

  /**
   * The method to update valid Input time group value
   *
   * @param v - The value to update
   */
  const updateValue = (v: number): void => {
    if (v >= min && v <= max) onChange(v);
  };

  /**
   * This method takes ones and tens numbers and return parsed value
   *
   * @param ones - The ones number value
   * @param tens - The tens number value
   * @returns Return parsed value
   */
  const parseValue = (ones: number, tens: number): number => Number(`${tens}${ones}`);

  /**
   * A function generator which provide key down event handler for InputNumber component
   *
   * @param targetIndex - The input target index
   * @returns Returns key down Event Handler function which check if key target is backspace, left or right and decide what to do for each of them.
   */
  const onKeyDown = (targetIndex: number) => (e: KeyboardEvent<HTMLInputElement>) => {
    const backspace = keyboardEventChecker(e, "Backspace");
    const left = keyboardEventChecker(e, "Left");
    const right = keyboardEventChecker(e, "Right");
    const arrowUp = keyboardEventChecker(e, "ArrowUp");
    const arrowDown = keyboardEventChecker(e, "ArrowDown");

    // Backspace button
    if (backspace) {
      e.preventDefault();

      let newValue: number;
      if (2 * inputGroupIndex > 0 || targetIndex % 2) {
        newValue = Number(`${(targetIndex + 1) % 2 ? 0 : tensValue}${targetIndex % 2 ? 0 : onesValue}`);
      } else {
        newValue = 12;
      }

      if (newValue >= 0 && newValue <= max) onChange(newValue);

      focusField(targetIndex - 1);
    }

    // Left arrow button
    if (left) {
      e.preventDefault();
      focusField(targetIndex - 1);
    }

    // Right arrow button
    if (right) {
      e.preventDefault();
      focusField(targetIndex + 1);
    }

    // Up arrow button
    if (arrowUp) {
      e.preventDefault();

      let newValue: number;
      if (targetIndex % 2) {
        // For ones
        if (onesValue >= 0 && onesValue < 9) {
          newValue = parseValue(onesValue + 1, tensValue || 0);
        } else if (onesValue === 9) {
          newValue = parseValue(0, (tensValue || 0) + 1);
        }
      } else {
        // For tens

        newValue = parseValue(onesValue || 0, (tensValue || 0) + 1);
      }

      updateValue(newValue);
    }

    // Down arrow button
    if (arrowDown) {
      e.preventDefault();

      let newValue: number;
      if (targetIndex % 2) {
        // For ones

        if (onesValue >= 1) {
          newValue = parseValue(onesValue - 1, tensValue);
        } else if (onesValue === 0) {
          newValue = parseValue(9, (Number(tensValue) || 0) - 1);
        }
      } else {
        // For tens

        newValue = parseValue(Number(onesValue) || 0, Number(tensValue) - 1);
      }

      updateValue(newValue);
    }
  };

  /**
   * This function return focus event handler which select text of focused input
   *
   * @param targetIndex - Target index of input that focused
   * @returns - FocusEventHandler
   */
  const onClick = (targetIndex: number) => e => {
    e.preventDefault();

    focusField(targetIndex);
  };

  /**
   * This function return keyup event handler which decide if keyup button was number then focus on next field
   *
   * @param targetIndex - Target index of input that keyup has pressed
   * @returns - KeyboardEventHandler
   */
  const onKeyUp = (targetIndex: number) => (e: KeyboardEvent<HTMLInputElement>) => {
    e.preventDefault();

    if (/^\d$/i.test(e.key)) focusField(targetIndex + 1);
  };

  return (
    <FormElementWrapper
      label={groupLabel}
      fieldsetClassName={classJoin(["flex flex-row justify-center !h-14 !w-17.5 dir-ltr"])}
      childrenClassName="w-full"
      legendClassName="!mx-auto"
      variant={inputVariant}
      disabled={disabled}
      error={error}
      required={required}
    >
      <div className="flex flex-row space-x-1 justify-center">
        <InputNumber
          min={0}
          max={9}
          className="!p-0"
          onPaste={onPaste}
          name={`${groupLabel}-0`}
          variant="line"
          counterType="none"
          disabled={disabled}
          fieldsetClassName="!ml-0 !h-auto"
          legendClassName="!mx-auto"
          baseInputClassName="!text-center !p-0"
          onKeyDown={onKeyDown(2 * inputGroupIndex)}
          onClick={onClick(2 * inputGroupIndex)}
          onKeyUp={onKeyUp(2 * inputGroupIndex)}
          value={tensValue}
          onChange={v => {
            const newValue = parseValue(Number(onesValue) || 0, Number(v) || 0);
            updateValue(newValue);
          }}
        />

        <InputNumber
          min={0}
          max={9}
          className="!p-0"
          onPaste={onPaste}
          name={`${groupLabel}-1`}
          variant="line"
          counterType="none"
          disabled={disabled}
          fieldsetClassName="!m-0 !h-auto"
          legendClassName="!mx-auto"
          baseInputClassName="!text-center !p-0"
          onKeyDown={onKeyDown(2 * inputGroupIndex + 1)}
          onClick={onClick(2 * inputGroupIndex + 1)}
          onKeyUp={onKeyUp(2 * inputGroupIndex + 1)}
          value={onesValue}
          onChange={v => {
            const newValue = parseValue(Number(v) || 0, Number(tensValue) || 0);
            updateValue(newValue);
          }}
        />
      </div>
    </FormElementWrapper>
  );
};
