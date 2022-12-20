import { jsx as _jsx } from "react/jsx-runtime";
export const TabsPane = ({ className, children, paneStyle }) => (_jsx("div", { style: paneStyle, className: className, children: children }));
export default TabsPane;
TabsPane.defaultProps = {
    pin: false,
    disabled: false,
    notice: false,
    favorite: false,
    title: "",
    newTab: false,
    fix: false,
    deletable: true,
    editable: true
};
//# sourceMappingURL=TabsPane.js.map