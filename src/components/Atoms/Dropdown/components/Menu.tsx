import { FunctionComponent } from "react";
import { classJoin } from "../../../../utils";
import { IDropdownMenuProps } from "..";

const Menu: FunctionComponent<IDropdownMenuProps> = ({ children, className, align, ...otherProps }) => (
  <div
    {...otherProps}
    className={classJoin([
      className,
      align === "left" ? "text-left" : align === "right" ? "text-right" : "text-center"
    ])}
  >
    {children}
  </div>
);

Menu.defaultProps = {
  align: "left",
  className: ""
};

export default Menu;
