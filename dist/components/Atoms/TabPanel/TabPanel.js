import { jsxs as _jsxs, jsx as _jsx } from "react/jsx-runtime";
import { useState } from "react";
import { classJoin } from "../../../utils";
import TabTools from "./TabTools";
export const TabPanel = ({ className, children, defaultActiveKey, growTabs, tabsClassName, onTabChange, tools }) => {
    const [active, setActive] = useState(defaultActiveKey || children?.[0]?.key);
    const handleTabChange = (key) => {
        onTabChange(key);
        setActive(key);
    };
    const activeTab = Array.isArray(children) && children?.find(child => child.key === active);
    return (_jsxs("div", { className: classJoin(["bg-card-bg border border-card-border rounded-3xl", className]), children: [_jsx("div", { className: "flex overflow-x-auto overflow-y-hidden rounded-tl-3xl rounded-tr-3xl scrollbar-primary whitespace-nowrap border-b border-card-border", children: Array.isArray(children) &&
                    children?.map(child => (_jsxs("div", { className: classJoin([
                            "border-l md:text-sm text-xs border-card-border h-10 cursor-pointer flex align-middle items-center justify-center text-center first:rounded-tr-3xl first:rounded-tl",
                            child.props.title ? "lg:min-w-38 md:min-w-32 px-2" : "",
                            growTabs ? "grow" : "",
                            tabsClassName,
                            !child.props.title && child.props.icon ? "min-w-16" : "",
                            child.props.disabled
                                ? "bg-dark-text text-disabled cursor-not-allowed"
                                : active === child.key
                                    ? "bg-card-border"
                                    : "bg-card-bg hover:bg-secondary-hover/10",
                            child.props.icon ? "grow-0" : ""
                        ]), onClick: () => !child.props.disabled && handleTabChange(child?.key), children: [child.props?.title, child.props?.icon] }, child.key))) }), _jsxs("div", { children: [tools && !activeTab.props.tools && _jsx(TabTools, { tools: tools }), activeTab] })] }));
};
TabPanel.defaultProps = {
    onTabChange: () => { },
    growTabs: false
};
export default TabPanel;
//# sourceMappingURL=TabPanel.js.map