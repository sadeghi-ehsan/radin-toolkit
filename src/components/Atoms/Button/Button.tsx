import { Button as AntButton } from "antd";
import { forwardRef, ForwardRefRenderFunction } from "react";
import { CompoundedComponent } from "../../../types/common";
import { classJoin, empty } from "../../../utils";
import { ButtonShape, ButtonSize, ButtonTheme, ButtonVariant, IButtonProps } from "./types";
import { buttonShapes, buttonSizes, buttonThemes, buttonVariants } from "./utils";

// TODO: Must add Icon component for startIcon & endIcon then fix the width & height to be square

const ButtonComponent: ForwardRefRenderFunction<HTMLButtonElement, IButtonProps> = (
  {
    children,
    className,
    theme,
    variant,
    href,
    target,
    type,
    loading,
    disabled,
    size,
    shape,
    startIcon,
    endIcon,
    isIcon,
    ...restProps
  }: IButtonProps,
  ref
) => (
  <AntButton
    {...restProps}
    ref={ref}
    size="middle"
    {...(!empty(href) ? { href, target } : {})}
    htmlType={type}
    loading={loading}
    disabled={disabled || loading}
    className={classJoin([
      "sbt-btn",
      buttonThemes[theme as ButtonTheme],
      buttonVariants[variant as ButtonVariant],
      isIcon ? `${buttonSizes[size as ButtonSize]}-icon` : buttonSizes[size as ButtonSize],
      "!justify-start ",
      !empty(children) ? "sbt-btn-min-w" : "",
      !empty(shape) ? buttonShapes[shape as ButtonShape] : "",
      className
    ])}
  >
    <span className={classJoin([!empty(startIcon) && (!empty(children) || !empty(endIcon)) ? "ml-2" : ""])}>
      {startIcon}
    </span>
    <span className="mx-auto">{children}</span>
    <span className={classJoin(["text-center", !empty(children) && !empty(endIcon) ? "mr-2" : ""])}>{endIcon}</span>
  </AntButton>
);

export const Button = forwardRef<HTMLButtonElement, IButtonProps>(ButtonComponent) as CompoundedComponent<IButtonProps>;

Button.displayName = "Button";
Button.defaultProps = {
  disabled: false,
  theme: "primary",
  block: false,
  type: "button",
  loading: false,
  variant: "default",
  size: "md",
  target: "_self",
  isIcon: false,
  shape: "default"
};

export default Button;
