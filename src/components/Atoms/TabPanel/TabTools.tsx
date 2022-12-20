import { FunctionComponent } from "react";
import { IBaseTabPane } from "./types";
import { classJoin } from "../../../utils";

export const TabTools: FunctionComponent<IBaseTabPane> = ({ tools, toolsClassName }) => (
  <div
    className={classJoin([
      "flex flex-row-reverse bg-table-zebra-light max-h-9 border-b border-card-border",
      toolsClassName
    ])}
  >
    {tools?.map((tool, index) => (
      <div
        onClick={() => tool?.onClick && tool?.onClick()}
        className="px-3 py-2 text-xs border-l border-card-border cursor-pointer flex align-middle items-center hover:bg-secondary-hover/10 last:border-r first:border-l-0"
        key={tool.key || index}
      >
        {tool?.title && <span className="px-1">{tool?.title}</span>}
        {tool.icon}
      </div>
    ))}
  </div>
);

export default TabTools;
