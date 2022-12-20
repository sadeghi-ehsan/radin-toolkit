import { FunctionComponent, useEffect, useRef } from "react";
import { classJoin, isCallable } from "../../../utils";
import { ISwitchOptionProps } from "./types";

export const SwitchOption: FunctionComponent<ISwitchOptionProps> = ({
  name,
  value,
  checked,
  children,
  labelClassName,
  noLabelStyle,
  onChange,
  bgSlider,
  disabled,
  isOptionDisabled,
  defaultValue,
  ...otherProps
}) => {
  const isSelected = checked === value || value === defaultValue;

  const modifiedDisabled = disabled || isOptionDisabled;
  const labelRef = useRef<HTMLLabelElement>();

  useEffect(() => {
    if (isSelected) {
      setTimeout(() => {
        onChange?.(value, labelRef);
      }, 10);
    }
  }, [isSelected]);

  const onInputChange = e => {
    if (isCallable(onChange)) {
      onChange(e.target.value, labelRef);
    }
  };

  const generatedId = `${name}-${value || "nv"}`;
  return (
    <>
      <input
        {...otherProps}
        type="radio"
        name={name}
        value={value}
        checked={isSelected}
        defaultChecked={isSelected}
        disabled={modifiedDisabled}
        id={generatedId}
        className="absolute invisible -z-10"
        onChange={onInputChange}
      />
      <label
        {...otherProps}
        ref={labelRef}
        htmlFor={generatedId}
        className={classJoin([
          "text-light-text",
          noLabelStyle ? "" : "text-sm px-3.5 pt-1.2",
          "transition-sbt w-full text-center whitespace-nowrap z-10",
          modifiedDisabled ? "text-opacity-20" : "cursor-pointer",
          isSelected && !modifiedDisabled ? "text-card-bg" : "",
          labelClassName
        ])}
      >
        {children}
      </label>
    </>
  );
};

SwitchOption.defaultProps = {
  disabled: false,
  noLabelStyle: false
};

export default SwitchOption;
