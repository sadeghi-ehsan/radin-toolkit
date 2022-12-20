import { ForwardRefExoticComponent, RefAttributes, CSSProperties, ReactNode } from "react";
export interface StandardProps {
    /** Unique id of element */
    id?: string;
    /** Additional classes */
    className?: string;
    /** Additional style */
    style?: CSSProperties;
    /** children props passes by react */
    children?: ReactNode | undefined;
}
export interface AnyProps {
    [x: string]: any;
}
export interface CompoundedComponent<ComponentProps> extends ForwardRefExoticComponent<ComponentProps & RefAttributes<HTMLElement>> {
}
