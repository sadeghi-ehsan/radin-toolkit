import { ReactNode } from "react";
import { StandardProps } from "../../../types/common";
export interface IBaseToolsTabPanel {
    /** Specifies the key of the tool */
    key?: string | number;
    /** specifies the method to run when tool clicked */
    onClick?: (value?: string) => void;
}
interface IToolWithTitle extends IBaseToolsTabPanel {
    /** Specifies the name of the tab */
    title: string;
    /** Specifies the icon of the tab */
    icon?: ReactNode;
}
interface IToolWithIcon extends IBaseToolsTabPanel {
    /** Specifies the icon of the tab */
    icon: ReactNode;
    /** Specifies the name of the tab */
    title?: string;
}
export declare type IToolsTabPanel = IToolWithIcon | IToolWithTitle;
export interface IBaseTabPane extends StandardProps {
    /**  */
    children?: ReactNode;
    /** indicate number of tools and properties of theme */
    tools?: Array<IToolsTabPanel>;
    /** indicate custom class name of tools section  */
    toolsClassName?: string;
    /** indicate tabPane is enabled or disabled. */
    disabled?: boolean;
    /** Specifies the key of the tab */
    key?: string | number;
}
interface ITabPaneWithTitle extends IBaseTabPane {
    /** Specifies the name of the tab */
    title: string;
    /** Specifies the icon of the tab */
    icon?: ReactNode;
}
interface ITabPaneWithIcon extends IBaseTabPane {
    /** Specifies the icon of the tab */
    icon: ReactNode;
    /** Specifies the name of the tab */
    title?: string;
}
export declare type ITabPaneProps = ITabPaneWithIcon | ITabPaneWithTitle;
export interface ITabPanelProps extends Omit<StandardProps, "children"> {
    /** Called when the active tab changes */
    onTabChange?: (value: string | number) => void;
    /** indicate tabPans of the tabs component */
    children?: Array<{
        props?: ITabPaneProps;
        key?: string;
    }> | ReactNode;
    /** determines the default active key  */
    defaultActiveKey?: string;
    /** determines whether tab grows to fill the empty space or not */
    growTabs?: boolean;
    /** determines the custom class of tabs  */
    tabsClassName?: string;
    /** indicate number of tools and properties of theme */
    tools?: Array<IToolsTabPanel>;
}
export {};
