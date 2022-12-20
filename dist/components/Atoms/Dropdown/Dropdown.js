import { jsx as _jsx } from "react/jsx-runtime";
import { Dropdown as AntDropdown } from "antd";
import { empty } from "../../../utils";
import { DropdownClasses } from "./utils";
import Menu from "./components/Menu";
import MenuItem from "./components/MenuItem";
import Spacer from "./components/Spacer";
const Dropdown = ({ children, className, overlay, variant, placement, ...otherProps }) => (_jsx(AntDropdown, { ...{
        /* TODO fix and remove comment ts-ignore */
        // @ts-ignore
        overlay: !empty(variant) ? _jsx("div", { className: DropdownClasses[variant], children: overlay }) : overlay,
        className,
        placement
    }, ...otherProps, children: children }));
Dropdown.defaultProps = {
    variant: "bordered",
    placement: "bottomLeft"
};
Dropdown.Menu = Menu;
Dropdown.MenuItem = MenuItem;
Dropdown.Spacer = Spacer;
export default Dropdown;
//# sourceMappingURL=Dropdown.js.map