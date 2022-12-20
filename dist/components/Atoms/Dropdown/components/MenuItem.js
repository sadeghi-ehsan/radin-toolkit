import { jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import { classJoin, modifyReactChildren } from "../../../../utils";
const MenuItem = ({ children, className, active, disabled, ...otherProps }) => {
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
    return (_jsx(_Fragment, { children: modifyReactChildren(children, { className: cls, ...otherProps }, val => (_jsx("div", { className: cls, ...otherProps, children: val }))) }));
};
MenuItem.defaultProps = {
    className: ""
};
export default MenuItem;
//# sourceMappingURL=MenuItem.js.map