import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { classJoin } from "../../../utils";
import TabTools from "./TabTools";
export const TabPane = ({ className, toolsClassName, children, tools }) => (_jsxs(_Fragment, { children: [tools && _jsx(TabTools, { tools: tools, toolsClassName: toolsClassName }), _jsx("div", { className: classJoin(["pt-2", className]), children: children })] }));
export default TabPane;
//# sourceMappingURL=TabPane.js.map