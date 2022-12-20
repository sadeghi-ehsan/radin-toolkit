import { Dropdown as AntDropdown } from "antd";
import { empty } from "../../../utils";
import { DropdownClasses } from "./utils";
import Menu from "./components/Menu";
import MenuItem from "./components/MenuItem";
import { TDropDownProps } from ".";
import Spacer from "./components/Spacer";

const Dropdown: TDropDownProps = ({ children, className, overlay, variant, placement, ...otherProps }) => (
  <AntDropdown
    {...{
      /* TODO fix and remove comment ts-ignore */
      // @ts-ignore
      overlay: !empty(variant) ? <div className={DropdownClasses[variant]}>{overlay}</div> : overlay,
      className,
      placement
    }}
    {...otherProps}
  >
    {children}
  </AntDropdown>
);

Dropdown.defaultProps = {
  variant: "bordered",
  placement: "bottomLeft"
};
Dropdown.Menu = Menu;
Dropdown.MenuItem = MenuItem;
Dropdown.Spacer = Spacer;

export default Dropdown;
