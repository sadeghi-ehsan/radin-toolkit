import { ContextType, CSSProperties, Dispatch, ReactNode, SetStateAction } from "react";
import { VisibilityContext } from "react-horizontal-scrolling-menu";
import { StandardProps } from "../../../types/common";
export interface IScrollButton {
    active: boolean;
    show: boolean;
}
export declare type INotice = false | "private" | "public";
export interface ITabsPaneProps extends StandardProps {
    /** indicate title of the tabPane */
    title?: string;
    /** indicate tabPane is enabled or disabled. */
    disabled?: boolean;
    /** Specifies the key of the tab */
    key?: string | number;
    /** is tab favorite or not */
    favorite?: boolean;
    /** is tab pin or not */
    pin?: boolean;
    /** is tab newTab or not */
    newTab?: boolean;
    /** is tab have notice or not */
    notice?: INotice;
    /** is tab have fixed and have fixed badge or not */
    fix?: boolean;
    /** determine tab Can be deleted or not  */
    deletable?: boolean;
    /** determine tab Can be renamed or not  */
    editable?: boolean;
    editing?: boolean;
    /** style of tabPane section */
    paneStyle?: CSSProperties;
}
export interface ITabsActions {
    /** this method will be Called when the activate button clicked */
    onActivate?: (key: string) => void;
    /** this method will be Called when the pin button clicked */
    onNotice?: (key: string) => void;
    /** this method will be Called when the import button clicked */
    onImport?: (key: string) => void;
    /** this method will be Called when the export button clicked */
    onExport?: (key: string) => void;
    /** this method will be Called when the favorite button clicked */
    onFavorite?: (value: string | number) => Promise<string | number | undefined>;
}
export interface ITabsProps extends StandardProps {
    /** Called when the active tab runs */
    onTabChange?: (value: string | number) => void;
    /** indicate tabPans of the tabs component */
    /** determines the default active key  */
    defaultActiveKey?: string;
    /** determines whether tab grows to fill the empty space or not */
    growTabs?: boolean;
    /** determines the custom class of tabs  */
    tabsClassName?: string;
    /** determines methods to run when each action called  */
    tabActions?: ITabsActions;
    /** determines what to show when a new tab created */
    newTabDefault?: ReactNode;
    /** this method will be run when tabs properties change */
    onDataChange?: (value: ITabsPaneProps[]) => void;
    /** show add button or not */
    showAddButton?: boolean;
    /** show favorite star or not */
    showFavorite?: boolean;
    /** show remove button or not */
    showRemove?: boolean;
    /** show more options button or not */
    showMoreOptions?: boolean;
    /** tabs name be editable or not */
    editable?: boolean;
    /** this method will be called when delete button clicked */
    onDelete?: (value: string | number) => Promise<string | number | undefined>;
    /** determines the key of the tab which is active */
    activeKey?: string;
    /** with this prop, you can define the role of the person and modify permission and authorization for now role is just admin and anything else */
    access?: boolean;
    /** this method will be called when add button clicked if this is empty default flow will be runs */
    onClickAdd?: () => void;
    /** this props add icons or button beside add button */
    tools?: ReactNode;
    /** class name of tabs header section */
    headerClassName?: string;
    /** style of tabs header section */
    headerStyle?: CSSProperties;
}
export declare type scrollVisibilityApiType = ContextType<typeof VisibilityContext>;
export interface ITabTitle extends ITabsProps {
    /** tabs data stores here */
    data: Array<{
        props?: ITabsPaneProps;
        key?: string;
    }>;
    /** Specifies the properties of the tab */
    child: {
        props?: ITabsPaneProps;
        key?: string;
    };
    /** tab is activate or deactivate */
    active: string;
    /** this method will be run when tab changes */
    handleTabChange: (key: string, index: number) => void;
    handleFocus?: (key: string) => Promise<void>;
    /** determines methods to run when each action called  */
    tabActions?: ITabsActions;
    /** update data of all tabs */
    setData: Dispatch<SetStateAction<Array<{
        props?: ITabsPaneProps;
        key?: string;
    }>>>;
    /** this prop determines the index of the active tab */
    activeIndex?: number;
    /** this prop determines the index of each tab */
    index?: number;
    /** in editing mode value of initial value of input will be passed by this props */
    inputValue: string;
    role?: string;
    /** when we need to go to editing mode call this method */
    setAddingNewTab?(value: boolean): void;
    /** this method is used to changing the value of input */
    setInputValue?(value: string): void;
}
