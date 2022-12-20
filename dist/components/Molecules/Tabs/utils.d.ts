/// <reference types="react" />
import { ITabsPaneProps, ITabTitle } from "./types";
export declare function useScroll(sliderRef: any, setRightScroll: any, setLeftScroll: any): {
    addListeners: () => void;
    removeListeners: () => void;
    isDrawing: import("react").MutableRefObject<boolean>;
};
export declare const FavoriteStar: import("react").ForwardRefExoticComponent<{
    type: boolean;
    onClick: () => void;
} & import("react").RefAttributes<SVGSVGElement>>;
export declare const sortData: (data: Array<{
    props?: ITabsPaneProps;
    key?: string;
}>) => {
    props?: ITabsPaneProps;
    key?: string;
}[];
export declare const handleFixedTab: (data: Array<{
    props?: ITabsPaneProps;
    key?: string;
}>) => {
    props?: ITabsPaneProps;
    key?: string;
}[];
export declare const changeProperty: (tab: {
    props?: ITabsPaneProps;
    key?: string;
}, property: string, data: Array<{
    props?: ITabsPaneProps;
    key?: string;
}>, text?: string) => {
    props?: ITabsPaneProps;
    key?: string;
}[];
export declare const findActiveIndex: (defaultActiveKey: any, data: Array<{
    props?: ITabsPaneProps;
    key?: string;
}>) => number;
export declare const TabTitle: import("react").ForwardRefExoticComponent<ITabTitle & import("react").RefAttributes<HTMLDivElement>>;
export declare const SCROLL_WIDTH = 200;
export declare const defaultName = "\u062F\u06CC\u062F\u0647 \u0628\u0627\u0646";
export declare const findTabIndex: (data: any) => any;
export declare function usePrevious(value: any): undefined;
