import { jsx as _jsx } from "react/jsx-runtime";
import { classJoin } from "../../../../utils";
const Menu = ({ children, className, align, ...otherProps }) => (_jsx("div", { ...otherProps, className: classJoin([
        className,
        align === "left" ? "text-left" : align === "right" ? "text-right" : "text-center"
    ]), children: children }));
Menu.defaultProps = {
    align: "left",
    className: ""
};
export default Menu;
//# sourceMappingURL=Menu.js.map