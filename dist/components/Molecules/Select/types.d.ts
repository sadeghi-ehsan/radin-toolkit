import { GroupBase, Props, SelectComponentsConfig } from "react-select";
import { CreatableProps } from "react-select/creatable";
import { AsyncProps } from "react-select/async";
import { AsyncPaginateProps } from "react-select-async-paginate";
import { AsyncCreatableProps } from "react-select/async-creatable";
import { IFormElWrapperProps } from "../../Atoms/FormElementWrapper";
import { selectTypes } from "./utils";
export declare type SelectTypes = keyof typeof selectTypes;
declare type OmittedReactSelectProps = "onChange" | "isSearchable" | "isLoading" | "isMulti" | "isRtl" | "selectRef" | "closeMenuOnSelect";
interface ReactSelectProps<Option = unknown, IsMulti extends boolean = false, Group extends GroupBase<Option> = GroupBase<Option>> extends Omit<Props<Option, IsMulti, Group>, OmittedReactSelectProps> {
    /** The type attribute specifies the type of <select> element to display. */
    type?: "default";
}
interface ReactSelectCreatableProps<Option = unknown, IsMulti extends boolean = false, Group extends GroupBase<Option> = GroupBase<Option>> extends Omit<CreatableProps<Option, IsMulti, Group>, OmittedReactSelectProps> {
    /** The type attribute specifies the type of <select> element to display. */
    type?: "creatable";
}
interface ReactSelectAsyncProps<Option = unknown, IsMulti extends boolean = false, Group extends GroupBase<Option> = GroupBase<Option>> extends Omit<AsyncProps<Option, IsMulti, Group>, OmittedReactSelectProps> {
    /** The type attribute specifies the type of <select> element to display. */
    type?: "async";
}
interface ReactSelectAsyncCreatableProps<Option = unknown, IsMulti extends boolean = false, Group extends GroupBase<Option> = GroupBase<Option>> extends Omit<AsyncCreatableProps<Option, IsMulti, Group>, OmittedReactSelectProps> {
    /** The type attribute specifies the type of <select> element to display. */
    type?: "asyncCreatable";
}
interface ReactSelectAsyncPaginateProps<Option = unknown, IsMulti extends boolean = false, Group extends GroupBase<Option> = GroupBase<Option>, Add = {}> extends Omit<AsyncPaginateProps<Option, Group, Add, IsMulti>, OmittedReactSelectProps> {
    /** The type attribute specifies the type of <select> element to display. */
    type?: "asyncPaginate";
}
declare type ReactSelectTypes<Option = unknown, IsMulti extends boolean = false, Group extends GroupBase<Option> = GroupBase<Option>> = ReactSelectProps<Option, IsMulti, Group> | ReactSelectCreatableProps<Option, IsMulti, Group> | ReactSelectAsyncProps<Option, IsMulti, Group> | ReactSelectAsyncCreatableProps<Option, IsMulti, Group>;
export declare type ISelectProps<Option = unknown, IsMulti extends boolean = false, Group extends GroupBase<Option> = GroupBase<Option>, Add = {}> = Omit<IFormElWrapperProps, "onClear" | "onFieldsetClick"> & (ReactSelectTypes<Option, IsMulti, Group> | ReactSelectAsyncPaginateProps<Option, IsMulti, Group, Add>) & {
    name: string;
    onChange?: (value: any, name: string, option?: any) => void;
    /** this method will be called when the value of the search bar changes */
    onInputChange?: (value: any) => void;
    /** the value set to form elements when clear icon is clicked */
    clearedValue?: string | boolean | {
        [key: string]: any;
    };
    /** Whether to enable search functionality */
    searchable?: Props["isSearchable"];
    /** Show a loading indicator */
    loading?: Props["isLoading"];
    /**  allow the user to select multiple values */
    multi?: Props["isMulti"];
    /** change the text displayed when no option is selected */
    placeholder?: string;
    /** custom react select component */
    customComponents?: SelectComponentsConfig<Option, IsMulti, Group>;
};
export {};
