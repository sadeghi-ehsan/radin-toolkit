import { Switch as AntSwitch } from "antd";
import { forwardRef } from "react";
import { colors } from "../../../constants/tailwind";
import { ISwitchTogglerProps } from "./types";

export const SwitchToggler = forwardRef<HTMLLabelElement, ISwitchTogglerProps>(
  ({ color, style, reverse, ...restProps }, ref) => (
    <AntSwitch
      ref={ref}
      style={{ backgroundColor: colors[color], transform: reverse ? "rotate(180deg)" : "", ...style }}
      {...restProps}
    />
  )
);

SwitchToggler.defaultProps = {
  color: "success",
  disabled: false,
  size: "default",
  reverse: false,
  defaultChecked: false,
  loading: false,
  autoFocus: false,
  checkedChildren: null,
  unCheckedChildren: null
};

export default SwitchToggler;
