import { forwardRef } from "react";
import { CurvedMinus, CurvedPlus, Chevron } from "@sadeghi-ehsan/radin-icon";
import { IInputNumberProps } from "./types";
import { Input } from "../Input";
import { Button } from "../../Atoms/Button";
import { classJoin, keyboardEventChecker } from "../../../utils";
import { CompoundedComponent } from "../../../types/common";
import { valueToCommaSeparated, getProperValue } from "./utils";

const InputNumber = forwardRef<HTMLInputElement, IInputNumberProps>(
  (
    {
      counterType,
      onChange,
      onKeyDown,
      name,
      min,
      max,
      value,
      negativesInRed,
      positivesInGreen,
      commaSeparated,
      baseInputClassName,
      ...restProps
    },
    passedRef
  ) => {
    const inputValue: number | string | undefined = commaSeparated
      ? valueToCommaSeparated(value)
      : getProperValue(value);

    const changeValue = (val: number): void => {
      if (min === undefined || val < min) return;
      if (max === undefined || val > max) return;

      onChange(val, name);
    };

    const onInputChange = (val: number | string) => {
      if (commaSeparated) changeValue(parseFloat((val as string).replace(/,/g, "")) || null);
      else changeValue(val as number);
    };

    /** onClick of counter + or up button */
    const onIncrease = () => {
      changeValue(value + 1);
    };

    /** onClick of counter - or down button */
    const onDecrease = () => {
      changeValue(value - 1);
    };

    const onInputKeyDown = e => {
      const val = e.target.value;

      /** checks to delete - when there is only one integer left like -4.
       * with this block, if there is -4 left in the input box and
       * by hitting backspace it will blank the input box
       */
      if (/^-\d$/gm.test(val) && keyboardEventChecker(e, "Backspace")) onChange("", name);

      if (commaSeparated) {
        if (keyboardEventChecker(e, "ArrowUp")) onIncrease();
        if (keyboardEventChecker(e, "ArrowDown")) onDecrease();
      }

      if (typeof onKeyDown === "function") onKeyDown(e);
    };

    const renderEndLabelAdornment = () => {
      if (counterType === "plus/minus") {
        return (
          <div className="flex inputNumberBtn">
            <Button
              size="sm"
              onClick={onIncrease}
              className="min-w-0 ml-2 rounded-lg"
              startIcon={<CurvedPlus className="w-3 h-3" />}
              disabled={max !== undefined ? value >= max : false}
            />
            <Button
              size="sm"
              onClick={onDecrease}
              className="min-w-0 rounded-lg"
              startIcon={<CurvedMinus className="w-3 h-3" />}
              disabled={min !== undefined ? value <= min : false}
            />
          </div>
        );
      }

      if (counterType === "up/down") {
        return (
          <div className="inputNumberBtnChevron flex flex-col justify-between h-full">
            <Button
              className="sbt-input-number-chevron mb-0.5"
              size="sm"
              variant="text"
              onClick={onIncrease}
              startIcon={<Chevron rotate="90" className="w-2 h-2" />}
              disabled={max !== undefined ? value >= max : false}
            />
            <Button
              className="sbt-input-number-chevron mt-0.5"
              size="sm"
              variant="text"
              onClick={onDecrease}
              startIcon={<Chevron rotate="90" flip="vertical" className="w-2 h-2" />}
              disabled={min !== undefined ? value <= min : false}
            />
          </div>
        );
      }

      return "";
    };

    return (
      <Input
        {...restProps}
        ref={passedRef}
        min={min}
        max={max}
        value={inputValue}
        noEndDivider
        type={commaSeparated ? "text" : "number"}
        childrenClassName={classJoin([
          "text-right appearance-none-all dir-ltr",
          value && (negativesInRed && value < 0 ? "text-prompt" : positivesInGreen && value > 0 ? "text-success" : ""),
          baseInputClassName
        ])}
        onChange={onInputChange}
        onKeyDown={onInputKeyDown}
        endAdornmentClassName={counterType === "up/down" ? "inputNumEndAdorn" : ""}
        endAdornment={renderEndLabelAdornment()}
      />
    );
  }
) as CompoundedComponent<IInputNumberProps>;

InputNumber.defaultProps = { counterType: "up/down", commaSeparated: false };

export default InputNumber;
