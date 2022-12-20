import React, { FunctionComponent, useState } from "react";
import { classJoin } from "../../../utils";
import { Button } from "../Button";
import { IToggleButtonProps } from "./types";

const ToggleButton: FunctionComponent<IToggleButtonProps> = ({
  id,
  block,
  disabled,
  selected,
  className,
  onChange,
  children,
  size,
  theme,
  shape,
  ...restProps
}) => {
  const [isSelected, setIsSelected] = useState(selected);

  const changeState = () => {
    setIsSelected(!isSelected);
    onChange(isSelected);
  };

  return (
    <Button
      block={block}
      size={size}
      theme={theme}
      disabled={disabled}
      shape={shape}
      className={classJoin([isSelected ? "sbt-variant-toggle" : "sbt-variant-unToggle"])}
      {...restProps}
      onClick={changeState}
    >
      {children}
    </Button>
  );
};

ToggleButton.defaultProps = {
  theme: "primary",
  selected: false,
  disabled: false,
  shape: "toggle"
};
export default ToggleButton;
