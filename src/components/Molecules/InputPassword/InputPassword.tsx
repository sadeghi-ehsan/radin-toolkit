import { FunctionComponent, useState } from "react";
import { Lock, Eye, EyeSlash } from "@sadeghi-ehsan/radin-icon";
import { ifNotEmpty } from "../../../utils";
import { IInputPasswordProps } from "./types";
import { Input } from "../Input";

const EyeView = ({ showPassword, setShowPassword }) => {
  const Icon = showPassword ? Eye : EyeSlash;

  return (
    <Icon
      size="xl"
      color="current"
      className="cursor-pointer text-idle hover:text-primary"
      onClick={() => setShowPassword(prev => !prev)}
    />
  );
};

const InputPassword: FunctionComponent<IInputPasswordProps> = ({ value, align, ...restProps }) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <Input
      {...restProps}
      type={showPassword ? "text" : "password"}
      startAdornment={<Lock size="xl" color="idle" />}
      endAdornment={<EyeView showPassword={showPassword} setShowPassword={setShowPassword} />}
      align={align || ifNotEmpty(value, "left", "right")}
      value={value}
    />
  );
};

InputPassword.defaultProps = {};

export default InputPassword;
