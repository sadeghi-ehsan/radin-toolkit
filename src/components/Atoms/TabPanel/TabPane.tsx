import { FunctionComponent } from "react";
import { ITabPaneProps } from "./types";
import { classJoin } from "../../../utils";
import TabTools from "./TabTools";

export const TabPane: FunctionComponent<ITabPaneProps> = ({ className, toolsClassName, children, tools }) => (
  <>
    {tools && <TabTools tools={tools} toolsClassName={toolsClassName} />}
    <div className={classJoin(["pt-2", className])}>{children}</div>
  </>
);

export default TabPane;
