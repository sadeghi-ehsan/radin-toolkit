import { FC } from "react";
import { IFieldGroupProps } from "./types";
import { classJoin } from "../../../utils";
import { FormElementWrapper } from "../FormElementWrapper";

const FieldGroup: FC<IFieldGroupProps> = ({
  children,
  groupLabel,
  error,
  disabled,
  labelColor,
  fieldsetClassName,
  legendClassName,
  variant,
  legendVariant,
  fieldsetVariant,
  ...otherProps
}) => (
  <FormElementWrapper
    fieldsetClassName={classJoin([
      "rounded-3.2xl px-6 pt-6 pb-8 h-unset",
      variant === "none" && "px-0 !ml-0 pt-3",
      error ? "border-error" : "border-card-border",
      fieldsetClassName
    ])}
    legendClassName={classJoin(["!h-5.5", legendClassName])}
    label={groupLabel}
    labelClassName={classJoin(["text-sm", `text-${labelColor}`])}
    error={error}
    disabled={disabled}
    {...(fieldsetVariant && legendVariant ? { fieldsetVariant, legendVariant } : { variant })}
    {...otherProps}
  >
    {children}
  </FormElementWrapper>
);

FieldGroup.defaultProps = {
  error: false,
  groupLabel: "",
  legendClassName: "",
  fieldsetClassName: "",
  labelColor: "primary-label",
  variant: "outline"
};

export default FieldGroup;
