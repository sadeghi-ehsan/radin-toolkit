import { ReactNode, SyntheticEvent } from "react";
import { StandardProps } from "../../../types/common";
import { buttonThemes, buttonVariants, buttonSizes, buttonShapes } from "./utils";
export declare type ButtonTheme = keyof typeof buttonThemes;
export declare type ButtonVariant = keyof typeof buttonVariants;
/**
 * The button's type attribute. This is set to "button" by default so that
 * forms are not accidentally submitted when this prop is omitted since
 * buttons without a type attribute work as submit by default.
 */
export declare type ButtonType = "button" | "submit" | "reset";
export declare type ButtonSize = keyof typeof buttonSizes;
export declare type ButtonShape = keyof typeof buttonShapes;
export declare type ButtonTarget = "_blank" | "_self" | "_parent" | "_top";
export interface IButtonProps extends Omit<StandardProps, "children"> {
    /**
     * Any children to render within the button. This will normally just be text
     * or an icon.
     *
     * Please note that it is considered invalid html to have a `<span>` as a
     * descendant of a `<button>`.
     */
    children?: ReactNode;
    /** Indicates the different variants of the button */
    variant?: ButtonVariant;
    /** Indicates different sizes of the button */
    size?: ButtonSize;
    /**
     * Enabling this prop will apply the disabled styles to a `Button`. When this
     * is also applied to the button component, the button will be updated so that
     * it can no longer be interacted with.
     */
    disabled?: boolean;
    /**
     * theme to apply to the button. The theme prop will
     * update the look and feel of the button by applying different background
     * and/or foreground colors.
     */
    theme?: ButtonTheme;
    /**
     * Defines HTML button type attribute.
     *
     * @default 'button'
     */
    type?: ButtonType;
    /**
     *  indicate how button looks and feel, if it set to true, will be an Icon
     */
    isIcon?: boolean;
    /** Called when the button is clicked. */
    onClick?: (event: SyntheticEvent) => void;
    /** A button can show a loading indicator */
    loading?: boolean;
    /** Providing a `href` will render an `<a>` element, _styled_ as a button */
    href?: string;
    /** Indicates how to handle clicking on link. This only works when href has set */
    target?: ButtonTarget;
    /** Indicates the shape of the button */
    shape?: ButtonShape;
    /**
     * Renders the button as a block element.
     */
    block?: boolean;
    /** Showing an icon on the start of the button */
    startIcon?: ReactNode;
    /** Showing an icon on the end of the button */
    endIcon?: ReactNode;
    /**
     * button `form` attribute
     * @link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#attr-form
     */
    form?: string;
}
