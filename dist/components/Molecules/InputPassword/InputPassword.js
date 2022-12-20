import { jsx as _jsx } from "react/jsx-runtime";
import { useState } from "react";
import { Lock, Eye, EyeSlash } from "@sadeghi-ehsan/radin-icon";
import { ifNotEmpty } from "../../../utils";
import { Input } from "../Input";
const EyeView = ({ showPassword, setShowPassword }) => {
    const Icon = showPassword ? Eye : EyeSlash;
    return (_jsx(Icon, { size: "xl", color: "current", className: "cursor-pointer text-idle hover:text-primary", onClick: () => setShowPassword(prev => !prev) }));
};
const InputPassword = ({ value, align, ...restProps }) => {
    const [showPassword, setShowPassword] = useState(false);
    return (_jsx(Input, { ...restProps, type: showPassword ? "text" : "password", startAdornment: _jsx(Lock, { size: "xl", color: "idle" }), endAdornment: _jsx(EyeView, { showPassword: showPassword, setShowPassword: setShowPassword }), align: align || ifNotEmpty(value, "left", "right"), value: value }));
};
InputPassword.defaultProps = {};
export default InputPassword;
//# sourceMappingURL=InputPassword.js.map