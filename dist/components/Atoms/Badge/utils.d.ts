import { FunctionComponent } from "react";
import { BadgeTypeBadgeProps, StateTypeBadgeProps, TagTypeBadgeProps } from "./types";
export declare const badgeStateSizes: {
    ".8xs": string;
    ".9xs": string;
    xs: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
};
export declare const badgeSizes: {
    ".8xs": string;
    ".9xs": string;
    xs: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
};
export declare const badgeColors: {
    primary: string;
    warning: string;
    "warning-black": string;
    success: string;
    prompt: string;
    "dark-success": string;
    "dark-prompt": string;
    disabled: string;
    terminate: string;
    error: string;
};
export declare const badgeTypes: {
    tag: FunctionComponent<TagTypeBadgeProps>;
    badge: FunctionComponent<BadgeTypeBadgeProps>;
    state: FunctionComponent<StateTypeBadgeProps>;
};
