import { jsx as _jsx } from "react/jsx-runtime";
import { Switch as AntSwitch } from "antd";
import { forwardRef } from "react";
import { colors } from "../../../constants/tailwind";
export const SwitchToggler = forwardRef(({ color, style, reverse, ...restProps }, ref) => (_jsx(AntSwitch, { ref: ref, style: { backgroundColor: colors[color], transform: reverse ? "rotate(180deg)" : "", ...style }, ...restProps })));
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
//# sourceMappingURL=SwitchToggler.js.map