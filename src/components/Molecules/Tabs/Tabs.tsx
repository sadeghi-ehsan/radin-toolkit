import { createElement, FunctionComponent, ReactNode, useEffect, useLayoutEffect, useRef, useState } from "react";
import { Chevron, Plus } from "@sadeghi-ehsan/radin-icon";
import { IScrollButton, ITabsPaneProps, ITabsProps } from "./types";
import { classJoin } from "../../../utils";
import Popover from "../../Atoms/Popover/Popover";
import {
  handleFixedTab,
  SCROLL_WIDTH,
  sortData,
  TabTitle,
  findActiveIndex,
  useScroll,
  defaultName,
  findTabIndex,
  usePrevious
} from "./utils";
import TabsPane from "./TabsPane";

export const Tabs: FunctionComponent<ITabsProps> = ({
  className,
  children,
  defaultActiveKey,
  tabsClassName,
  tabActions,
  newTabDefault,
  onTabChange,
  onDataChange,
  showFavorite,
  showAddButton,
  showMoreOptions,
  showRemove,
  growTabs,
  editable,
  onDelete,
  access,
  onClickAdd,
  headerClassName,
  headerStyle,
  style,
  tools
}) => {
  const [active, setActive] = useState<string>(defaultActiveKey || "");
  const [rightScroll, setRightScroll] = useState<IScrollButton>({ show: true, active: false });
  const [leftScroll, setLeftScroll] = useState<IScrollButton>({ show: true, active: true });
  const [data, setData] = useState<Array<{ props?: ITabsPaneProps; key?: string }>>(null);
  const [focus, setFocus] = useState<string>("");
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const firstLoad = useRef(true);
  const sliderRef = useRef(null);
  const selectedTabRef = useRef(null);
  const [inputValue, setInputValue] = useState("");
  const handleTabChange = (key: string, index: number) => {
    onTabChange(key);
    setActive(key);
    setActiveIndex(index);
  };
  const { addListeners, removeListeners, isDrawing } = useScroll(sliderRef, setRightScroll, setLeftScroll);
  const handleFocus = async (selectedKey: string, isActive?: boolean, index?: number) => {
    await setFocus(selectedKey);
    selectedTabRef?.current?.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "nearest" });
    if (isActive) handleTabChange(selectedKey, index);
    setRightScroll({ show: true, active: true });
  };
  const prevKeys: string[] = usePrevious(data?.map(item => item?.key));

  useEffect(() => {
    setData(children && Array.isArray(children) && sortData(handleFixedTab(children)));
  }, [children]);

  useEffect(() => {
    if (
      prevKeys?.length > data?.length &&
      !onDelete &&
      data?.findIndex(item => item?.key === active?.toString()) === -1
    ) {
      const newActiveIndex = Number(prevKeys?.findIndex(item => item === (active as string))) - 1;
      if (data?.length > 1 && newActiveIndex >= 0) {
        setActive(data?.[newActiveIndex]?.key);
      } else if (data?.length === 1) {
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
          const {
            props: { pin, disabled, notice, favorite, title, fix },
            key
          } = item;
          return { key, pin, title, favorite, disabled, notice, fix };
        });
        onDataChange(modifiedData);
      }
    } else {
      if (defaultActiveKey) setActiveIndex(findActiveIndex(defaultActiveKey, data));
      if (!defaultActiveKey) setActive(data?.[0]?.key);
    }
    if (data) firstLoad.current = false;
  }, [data]);

  const scrollSlider = (type: string, showLast?: boolean) => {
    const scrollWidth = Math.floor(sliderRef.current.clientWidth / 3) || SCROLL_WIDTH;
    if (sliderRef) {
      if (type === "left") {
        sliderRef.current.scrollBy({ left: showLast ? -scrollWidth * 20 : -scrollWidth, behavior: "smooth" });
        setRightScroll({ active: true, show: true });
        if (
          sliderRef.current.scrollLeft - scrollWidth - sliderRef.current.clientWidth <
          -sliderRef.current.scrollWidth
        ) {
          setLeftScroll({ active: false, show: true });
        }
      } else {
        setLeftScroll({ active: true, show: true });
        sliderRef.current.scrollBy({ left: scrollWidth, behavior: "smooth" });
        if (sliderRef.current.scrollLeft >= -scrollWidth) setRightScroll({ active: false, show: true });
      }
    }
  };

  const handleAdd = async () => {
    setInputValue(`${defaultName} ${findTabIndex(data)}`);
    const newTabElement = createElement(
      TabsPane,
      {
        title: "",
        key: `tab-${new Date().getTime()}`,
        newTab: true
      },
      newTabDefault
    );
    await setData([...data, newTabElement as { props?: ITabsPaneProps; key?: string }]);
    if (sliderRef?.current?.clientWidth !== sliderRef?.current?.scrollWidth) scrollSlider("left", true);
  };

  useLayoutEffect(() => {
    if (!data?.length) {
      setRightScroll({ active: false, show: false });
    } else if (data?.length && !rightScroll.show) {
      setRightScroll(prev => ({ ...prev, show: true }));
    }
    if (
      (sliderRef?.current?.clientWidth && sliderRef?.current?.clientWidth === sliderRef?.current?.scrollWidth) ||
      data?.length === 0
    ) {
      setLeftScroll({
        ...leftScroll,
        ...{ show: false }
      });
    } else {
      setLeftScroll({
        ...leftScroll,
        ...{ show: true }
      });
    }
  }, [data]);

  return (
    <div style={style} className={classJoin(["bg-main-bg", className])}>
      <div
        style={headerStyle}
        className={classJoin([
          "flex overflow-x-auto overflow-y-hidden scrollbar-primary items-center bg-card-bg",
          headerClassName
        ])}
      >
        {rightScroll.show && (
          <div className="h-10 flex items-center shadow-left-scroll ml-0.5">
            <Chevron
              onClick={() => rightScroll.active && scrollSlider("right")}
              size="xl"
              flip="vertical"
              color={rightScroll.active ? "light-text" : "idle"}
              className="mx-2 cursor-pointer min-w-5"
            />
          </div>
        )}
        <div
          ref={sliderRef}
          className="flex items-center overflow-y-hidden overflow-x-auto h-10 sbt-tabs"
          onMouseEnter={() => addListeners()}
          onMouseLeave={() => {
            isDrawing.current = false;
            removeListeners();
          }}
        >
          {data?.map((child, index) => (
            <TabTitle
              key={child?.key}
              ref={focus === child?.key ? selectedTabRef : null}
              {...{
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
              }}
            />
          ))}
        </div>
        {leftScroll.show && (
          <div className="border-card-border border-x h-10 flex items-center shadow-right-scroll">
            <Chevron
              onClick={() => leftScroll.active && scrollSlider("left")}
              size="lg"
              color={leftScroll.active ? "light-text" : "idle"}
              className="mx-2 cursor-pointer min-w-5"
            />
          </div>
        )}
        {showAddButton && (
          <span
            onClick={() => (onClickAdd ? onClickAdd() : handleAdd())}
            className="bg-primary p-1 rounded-lg mr-4 transition-sbt cursor-pointer hover:bg-primary-hover"
          >
            <Plus color="white" />
          </span>
        )}
        {tools && <div className="pr-2">{tools}</div>}
        <span className="mr-auto">
          {data?.length > 0 && (
            <Popover
              className="min-w-56"
              content={data?.map(
                (child, index) =>
                  !child.props.fix && (
                    <div
                      onClick={() => handleFocus(child?.key, !child?.props?.disabled, index)}
                      className="px-3 py-2 cursor-pointer -mx-2 hover:bg-primary/10"
                      key={child?.key}
                    >
                      {child.props.title}
                    </div>
                  )
              )}
            >
              <Chevron rotate="90" size="sm" flip="vertical" color="light" className="mx-2 cursor-pointer" />
            </Popover>
          )}
        </span>
      </div>

      {(data?.find(child => child?.key === active && !child?.props?.newTab) as ReactNode) || newTabDefault}
    </div>
  );
};

Tabs.defaultProps = {
  onTabChange: () => {},
  onDataChange: () => {},
  growTabs: false,
  editable: true,
  tabActions: {}
};

export default Tabs;
