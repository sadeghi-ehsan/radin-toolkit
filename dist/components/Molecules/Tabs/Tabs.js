import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { createElement, useEffect, useLayoutEffect, useRef, useState } from "react";
import { Chevron, Plus } from "@sadeghi-ehsan/radin-icon";
import { classJoin } from "../../../utils";
import Popover from "../../Atoms/Popover/Popover";
import { handleFixedTab, SCROLL_WIDTH, sortData, TabTitle, findActiveIndex, useScroll, defaultName, findTabIndex, usePrevious } from "./utils";
import TabsPane from "./TabsPane";
export const Tabs = ({ className, children, defaultActiveKey, tabsClassName, tabActions, newTabDefault, onTabChange, onDataChange, showFavorite, showAddButton, showMoreOptions, showRemove, growTabs, editable, onDelete, access, onClickAdd, headerClassName, headerStyle, style, tools }) => {
    const [active, setActive] = useState(defaultActiveKey || "");
    const [rightScroll, setRightScroll] = useState({ show: true, active: false });
    const [leftScroll, setLeftScroll] = useState({ show: true, active: true });
    const [data, setData] = useState(null);
    const [focus, setFocus] = useState("");
    const [activeIndex, setActiveIndex] = useState(0);
    const firstLoad = useRef(true);
    const sliderRef = useRef(null);
    const selectedTabRef = useRef(null);
    const [inputValue, setInputValue] = useState("");
    const handleTabChange = (key, index) => {
        onTabChange(key);
        setActive(key);
        setActiveIndex(index);
    };
    const { addListeners, removeListeners, isDrawing } = useScroll(sliderRef, setRightScroll, setLeftScroll);
    const handleFocus = async (selectedKey, isActive, index) => {
        await setFocus(selectedKey);
        selectedTabRef?.current?.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "nearest" });
        if (isActive)
            handleTabChange(selectedKey, index);
        setRightScroll({ show: true, active: true });
    };
    const prevKeys = usePrevious(data?.map(item => item?.key));
    useEffect(() => {
        setData(children && Array.isArray(children) && sortData(handleFixedTab(children)));
    }, [children]);
    useEffect(() => {
        if (prevKeys?.length > data?.length &&
            !onDelete &&
            data?.findIndex(item => item?.key === active?.toString()) === -1) {
            const newActiveIndex = Number(prevKeys?.findIndex(item => item === active)) - 1;
            if (data?.length > 1 && newActiveIndex >= 0) {
                setActive(data?.[newActiveIndex]?.key);
            }
            else if (data?.length === 1) {
                setActive(data?.[0]?.key);
            }
        }
        if (prevKeys?.length < data?.length && data?.length > 1 && !(prevKeys.length === 1 && prevKeys[0] === "primary")) {
            setActive(data?.[Number(data?.length) - 1]?.key);
        }
    }, [data]);
    useEffect(() => {
        if (!firstLoad.current) {
            if ([...data].findIndex(item => item?.props?.editing || item?.props?.newTab) === -1) {
                const modifiedData = data?.map(item => {
                    const { props: { pin, disabled, notice, favorite, title, fix }, key } = item;
                    return { key, pin, title, favorite, disabled, notice, fix };
                });
                onDataChange(modifiedData);
            }
        }
        else {
            if (defaultActiveKey)
                setActiveIndex(findActiveIndex(defaultActiveKey, data));
            if (!defaultActiveKey)
                setActive(data?.[0]?.key);
        }
        if (data)
            firstLoad.current = false;
    }, [data]);
    const scrollSlider = (type, showLast) => {
        const scrollWidth = Math.floor(sliderRef.current.clientWidth / 3) || SCROLL_WIDTH;
        if (sliderRef) {
            if (type === "left") {
                sliderRef.current.scrollBy({ left: showLast ? -scrollWidth * 20 : -scrollWidth, behavior: "smooth" });
                setRightScroll({ active: true, show: true });
                if (sliderRef.current.scrollLeft - scrollWidth - sliderRef.current.clientWidth <
                    -sliderRef.current.scrollWidth) {
                    setLeftScroll({ active: false, show: true });
                }
            }
            else {
                setLeftScroll({ active: true, show: true });
                sliderRef.current.scrollBy({ left: scrollWidth, behavior: "smooth" });
                if (sliderRef.current.scrollLeft >= -scrollWidth)
                    setRightScroll({ active: false, show: true });
            }
        }
    };
    const handleAdd = async () => {
        setInputValue(`${defaultName} ${findTabIndex(data)}`);
        const newTabElement = createElement(TabsPane, {
            title: "",
            key: `tab-${new Date().getTime()}`,
            newTab: true
        }, newTabDefault);
        await setData([...data, newTabElement]);
        if (sliderRef?.current?.clientWidth !== sliderRef?.current?.scrollWidth)
            scrollSlider("left", true);
    };
    useLayoutEffect(() => {
        if (!data?.length) {
            setRightScroll({ active: false, show: false });
        }
        else if (data?.length && !rightScroll.show) {
            setRightScroll(prev => ({ ...prev, show: true }));
        }
        if ((sliderRef?.current?.clientWidth && sliderRef?.current?.clientWidth === sliderRef?.current?.scrollWidth) ||
            data?.length === 0) {
            setLeftScroll({
                ...leftScroll,
                ...{ show: false }
            });
        }
        else {
            setLeftScroll({
                ...leftScroll,
                ...{ show: true }
            });
        }
    }, [data]);
    return (_jsxs("div", { style: style, className: classJoin(["bg-main-bg", className]), children: [_jsxs("div", { style: headerStyle, className: classJoin([
                    "flex overflow-x-auto overflow-y-hidden scrollbar-primary items-center bg-card-bg",
                    headerClassName
                ]), children: [rightScroll.show && (_jsx("div", { className: "h-10 flex items-center shadow-left-scroll ml-0.5", children: _jsx(Chevron, { onClick: () => rightScroll.active && scrollSlider("right"), size: "xl", flip: "vertical", color: rightScroll.active ? "light-text" : "idle", className: "mx-2 cursor-pointer min-w-5" }) })), _jsx("div", { ref: sliderRef, className: "flex items-center overflow-y-hidden overflow-x-auto h-10 sbt-tabs", onMouseEnter: () => addListeners(), onMouseLeave: () => {
                            isDrawing.current = false;
                            removeListeners();
                        }, children: data?.map((child, index) => (_jsx(TabTitle, { ref: focus === child?.key ? selectedTabRef : null, ...{
                                active,
                                child,
                                data,
                                editable: editable && child?.props?.editable && (child?.props?.notice ? access : true),
                                showRemove: showRemove && child?.props?.deletable,
                                handleTabChange,
                                setData,
                                tabsClassName,
                                tabActions,
                                showFavorite,
                                showMoreOptions,
                                growTabs,
                                handleFocus,
                                activeIndex,
                                onDelete,
                                index,
                                inputValue,
                                setInputValue,
                                access,
                                onFavorite: tabActions.onFavorite
                            } }, child?.key))) }), leftScroll.show && (_jsx("div", { className: "border-card-border border-x h-10 flex items-center shadow-right-scroll", children: _jsx(Chevron, { onClick: () => leftScroll.active && scrollSlider("left"), size: "lg", color: leftScroll.active ? "light-text" : "idle", className: "mx-2 cursor-pointer min-w-5" }) })), showAddButton && (_jsx("span", { onClick: () => (onClickAdd ? onClickAdd() : handleAdd()), className: "bg-primary p-1 rounded-lg mr-4 transition-sbt cursor-pointer hover:bg-primary-hover", children: _jsx(Plus, { color: "white" }) })), tools && _jsx("div", { className: "pr-2", children: tools }), _jsx("span", { className: "mr-auto", children: data?.length > 0 && (_jsx(Popover, { className: "min-w-56", content: data?.map((child, index) => !child.props.fix && (_jsx("div", { onClick: () => handleFocus(child?.key, !child?.props?.disabled, index), className: "px-3 py-2 cursor-pointer -mx-2 hover:bg-primary/10", children: child.props.title }, child?.key))), children: _jsx(Chevron, { rotate: "90", size: "sm", flip: "vertical", color: "light", className: "mx-2 cursor-pointer" }) })) })] }), data?.find(child => child?.key === active && !child?.props?.newTab) || newTabDefault] }));
};
Tabs.defaultProps = {
    onTabChange: () => { },
    onDataChange: () => { },
    growTabs: false,
    editable: true,
    tabActions: {}
};
export default Tabs;
//# sourceMappingURL=Tabs.js.map