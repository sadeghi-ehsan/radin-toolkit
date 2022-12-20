import { forwardRef } from "react";
import { CompoundedComponent } from "../../../types/common";
import { classJoin, ifEmpty, ifNotEmpty } from "../../../utils";
import { IBaseInputProps } from "./types";
import { baseInputAlignments } from "./utils";
import { fontSizeName } from "../../../constants/tailwind";

export const BaseInput = forwardRef<HTMLInputElement, IBaseInputProps>(
  ({ name, align, className, disabled, fontSize, onChange, value, readOnly, ...restProps }, ref) => (
    <input
      {...restProps}
      name={name}
      className={classJoin([
        "bg-transparent outline-none focus:outline-none",
        ifNotEmpty(fontSize, fontSizeName[fontSize]),
        ifNotEmpty(align, baseInputAlignments[align]),
        ifEmpty(disabled, "text-light-text placeholder-idle", "text-disabled placeholder-disabled"),
        readOnly ? "cursor-default" : "",
        className
      ])}
      disabled={disabled}
      ref={ref}
      readOnly={readOnly}
      value={value}
      {...ifNotEmpty(
        onChange,
        {
          onChange: e => {
            e.persist();
            return onChange(e.target.value, name, e);
          }
        },
        {}
      )}
    />
  )
) as CompoundedComponent<IBaseInputProps>;

BaseInput.defaultProps = {
  type: "text",
  fontSize: "sm"
};

export default BaseInput;
