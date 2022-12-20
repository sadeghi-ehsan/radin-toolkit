import React, { FunctionComponent } from "react";
import { classJoin, modifyReactChildren } from "../../../../utils";
import { IDropdownMenuItemProps } from "..";

const MenuItem: FunctionComponent<IDropdownMenuItemProps> = ({
  children,
  className,
  active,
  disabled,
  ...otherProps
}) => {
  const cls = classJoin([
    "p-1.5 text-white rounded transition cursor-pointer block",
    !(active && disabled) ? "hover:text-primary hover:bg-primary hover:bg-opacity-10" : "",
    active && disabled
      ? "text-primary-shadow bg-primary bg-opacity-10 pointer-events-none"
      : disabled
      ? "text-disabled bg-transparent pointer-events-none"
      : active
      ? "text-primary bg-primary bg-opacity-10"
      : "",
    className
  ]);
  return (
    <>
      {modifyReactChildren(children, { className: cls, ...otherProps }, val => (
        <div className={cls} {...otherProps}>
          {val}
        </div>
      ))}
    </>
  );
};

MenuItem.defaultProps = {
  className: ""
};

export default MenuItem;
