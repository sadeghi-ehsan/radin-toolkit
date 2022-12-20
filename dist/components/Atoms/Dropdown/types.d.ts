import { DropDownProps as AntDropDownProps } from "antd/lib/dropdown";
import { DOMAttributes, FunctionComponent, ReactNode } from "react";
import { DropdownVariants } from "./utils";
import { StandardProps } from "../../../types/common";
export declare type TDropDownProps = FunctionComponent<IDropdownProps> & {
    /**
     * The dropdown menu Wrapper.
     */
    Menu?: FunctionComponent<IDropdownMenuProps>;
    /**
     * The dropdown menu item.
     */
    MenuItem?: FunctionComponent<IDropdownMenuItemProps>;
    /**
     * The dropdown spacer.
     */
    Spacer?: FunctionComponent<IDropdownSpacerProps>;
};
export interface IDropdownProps extends Omit<AntDropDownProps, "placement"> {
    /**
     * The dropdown variant
     * @default "default"
     */
    variant?: keyof typeof DropdownVariants;
    /**
     * placement of the dropdown based on trigger element
     */
    placement?: "topLeft" | "topCenter" | "topRight" | "bottomLeft" | "bottomCenter" | "bottomRight";
    children?: ReactNode;
}
export interface IDropdownMenuProps extends StandardProps {
    /**
     * align each menu
     */
    align?: "left" | "right" | "center";
}
export interface IDropdownMenuItemProps extends DOMAttributes<any> {
    /**
     * className of each item
     */
    className?: string;
    /**
     * is menu item is active or not
     */
    active?: boolean;
    /**
     * is menu item is disabled or not
     */
    disabled?: boolean;
}
export interface IDropdownSpacerProps {
    className?: string;
}
