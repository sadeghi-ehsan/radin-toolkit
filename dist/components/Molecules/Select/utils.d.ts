/// <reference types="react" />
import ReactSelectCreatable from "react-select/creatable";
import ReactSelectAsync from "react-select/async";
import ReactSelectAsyncCreatable from "react-select/async-creatable";
import ReactSelect, { GroupBase, Props } from "react-select";
import { ThemeConfig } from "react-select/dist/declarations/src/theme";
export declare const selectTypes: {
    default: ReactSelect;
    creatable: ReactSelectCreatable;
    async: ReactSelectAsync;
    asyncCreatable: ReactSelectAsyncCreatable;
    asyncPaginate: (props: any) => any;
};
declare type CustomStyles = <Option = unknown, IsMulti extends boolean = false, Group extends GroupBase<Option> = GroupBase<Option>>() => Props<Option, IsMulti, Group>["styles"];
export declare const customStyles: CustomStyles;
export declare const customTheme: () => ThemeConfig;
export declare const customComponents: {
    Menu: (props: any) => JSX.Element;
    ValueContainer: (props: any) => JSX.Element;
    IndicatorSeparator: () => any;
};
export {};
