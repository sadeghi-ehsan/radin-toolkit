import { ReactElement } from "react";
export declare const RenderHeader: ({ header }: {
    position: "top" | "bottom" | "left" | "right";
    header: ReactElement | string;
}) => ReactElement;
/**
 * Left & Right Arrow buttons in header of the calendar
 */
export declare const renderButton: ({ direction, handleClick, locale }: {
    direction: any;
    handleClick: any;
    locale: any;
}) => JSX.Element;
