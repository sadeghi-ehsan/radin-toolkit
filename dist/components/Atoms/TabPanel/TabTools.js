import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { classJoin } from "../../../utils";
export const TabTools = ({ tools, toolsClassName }) => (_jsx("div", { className: classJoin([
        "flex flex-row-reverse bg-table-zebra-light max-h-9 border-b border-card-border",
        toolsClassName
    ]), children: tools?.map((tool, index) => (_jsxs("div", { onClick: () => tool?.onClick && tool?.onClick(), className: "px-3 py-2 text-xs border-l border-card-border cursor-pointer flex align-middle items-center hover:bg-secondary-hover/10 last:border-r first:border-l-0", children: [tool?.title && _jsx("span", { className: "px-1", children: tool?.title }), tool.icon] }, tool.key || index))) }));
export default TabTools;
//# sourceMappingURL=TabTools.js.map