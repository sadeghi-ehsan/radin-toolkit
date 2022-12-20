import { jsx as _jsx } from "react/jsx-runtime";
import { classJoin } from "../../../utils";
const Divider = ({ isVertical, className, ...otherProps }) => (_jsx("div", { className: classJoin([
        isVertical ? "w-0 border-0 border-r" : "h-0 border-0 border-b",
        "border border-solid border-idle-border",
        className
    ]), ...otherProps }));
Divider.defaultProps = { className: "", isVertical: false };
export default Divider;
//# sourceMappingURL=Divider.js.map