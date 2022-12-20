import { forwardRef, useEffect, useRef, useState } from "react";
import { Star, Notification, Close, Export, Import, More, NotificationUser } from "radin-icon";
import { INotice, ITabsPaneProps, ITabTitle } from "./types";
import { classJoin } from "../../../utils";
import Popover from "../../Atoms/Popover/Popover";
import { SwitchToggler } from "../../Atoms/SwitchToggler";
import { notification as displayNotification } from "../../Atoms/Notification";
import BaseInput from "../../Atoms/BaseInput/BaseInput";
import { Tooltip } from "../../Atoms/Tooltip";

export function useScroll(sliderRef, setRightScroll, setLeftScroll) {
  const isDrawing = useRef(false);

  const handleDragScroll = e => {
    if (isDrawing.current) {
      sliderRef.current.scrollBy({ left: -e.movementX / 2 });
      if (e.movementX > 0) {
        setRightScroll({ active: true, show: true });
      } else {
        setLeftScroll({ active: true, show: true });
      }
    }
  };

  const handleWheelScroll = e => {
    sliderRef.current.scrollBy({ left: e.wheelDelta > 0 ? -50 : 50 });
  };

  const disableDrawing = () => {
    isDrawing.current = false;
  };

  const enableDrawing = () => {
    isDrawing.current = true;
  };

  const addListeners = () => {
    if (sliderRef.current) {
      sliderRef.current.addEventListener("mousedown", enableDrawing);
      sliderRef.current.addEventListener("mouseup", disableDrawing);
      sliderRef.current.addEventListener("mousemove", handleDragScroll);
      sliderRef.current.addEventListener("wheel", handleWheelScroll);
    }
  };

  const removeListeners = () => {
    isDrawing.current = false;
    if (sliderRef.current) {
      sliderRef.current.removeEventListener("mousedown", enableDrawing);
      sliderRef.current.removeEventListener("mouseup", disableDrawing);
      sliderRef.current.removeEventListener("mousemove", handleDragScroll);
      sliderRef.current.removeEventListener("wheel", handleDragScroll);
    }
  };

  useEffect(() => {
    addListeners();
    return () => {
      removeListeners();
    };
  }, [sliderRef]);

  return {
    addListeners,
    removeListeners,
    isDrawing
  };
}

export const FavoriteStar = forwardRef<SVGSVGElement, { type: boolean; onClick: () => void }>(
  ({ type, onClick }, ref) => {
    const [hover, setHover] = useState(false);
    const mouseEvents = {
      ref,
      onClick,
      onMouseEnter: () => setHover(true),
      onMouseLeave: () => setHover(false)
    };
    if (type && !hover) {
      return <Star weight="fill" {...mouseEvents} color="warning" />;
    }
    if (hover) {
      return <Star weight="fill" {...mouseEvents} color="warning-shadow" />;
    }
    return <Star {...mouseEvents} color="warning" />;
  }
);

export const sortData = (data: Array<{ props?: ITabsPaneProps; key?: string }>) => {
  const sortedFavoriteData =
    Array.isArray(data) && data.sort((a, b) => Number(Boolean(b.props.favorite)) - Number(Boolean(a.props.favorite)));
  const sortedPins = sortedFavoriteData.sort((a, b) => Number(Boolean(b.props.pin)) - Number(Boolean(a.props.pin)));
  const sortedFixed = sortedPins.sort((a, b) => Number(Boolean(b.props.fix)) - Number(Boolean(a.props.fix)));
  return sortedFixed.sort((a, b) => Number(Boolean(a.props.disabled)) - Number(Boolean(b.props.disabled)));
};

export const handleFixedTab = (data: Array<{ props?: ITabsPaneProps; key?: string }>) =>
  data.map(item => {
    if (item.props.fix) return { ...item, props: { ...item.props, pin: true, notice: "public" as INotice } };
    return item;
  });

export const changeProperty = (
  tab: { props?: ITabsPaneProps; key?: string },
  property: string,
  data: Array<{ props?: ITabsPaneProps; key?: string }>,
  text?: string
) =>
  data?.map(item => {
    if (item?.key === tab?.key) {
      if (property === "title") {
        return {
          ...item,
          props: {
            ...item.props,
            title: text,
            editing: true,
            newTab: false
          }
        };
      }
      if (property === "notice") {
        return {
          ...item,
          props: {
            ...item.props,
            notice: item.props?.notice === "public" ? false : ("public" as INotice),
            editing: false,
            newTab: false
          }
        };
      }
      return { ...item, props: { ...item.props, [property]: !item.props?.[property] } };
    }
    return item;
  });

export const findActiveIndex = (defaultActiveKey, data: Array<{ props?: ITabsPaneProps; key?: string }>) =>
  defaultActiveKey ? data?.findIndex(item => item.key === defaultActiveKey) : 0;
export const TabTitle = forwardRef<HTMLDivElement, ITabTitle>(
  (
    {
      data,
      growTabs,
      tabsClassName,
      child,
      active,
      handleTabChange,
      setData,
      tabActions,
      showFavorite,
      showMoreOptions,
      showRemove,
      handleFocus,
      activeIndex,
      index,
      editable,
      onDelete,
      inputValue,
      setInputValue,
      access
    },
    ref
  ) => {
    const {
      props: { pin, disabled, notice, favorite, title, newTab, fix, editing }
    } = child;
    const [hover, setHover] = useState(false);
    const [showPopOver, setShowPopOver] = useState(false);
    const [editingName, setEditingName] = useState(false);
    const { onActivate, onNotice, onImport, onExport } = tabActions;
    const deleteTab = () => {
      const res = onDelete(child?.key);
      res.then(() => {
        const modified = data.filter(item => item.key !== child?.key);
        setData(modified);
        if (child?.key === active) {
          handleTabChange(modified[0]?.key, index);
        }
      });
    };

    const favoriteTab = () => {
      const res = tabActions?.onFavorite(child?.key);
      res.then(() => {
        setData(sortData(changeProperty(child, "favorite", data)));
      });
    };

    function checkShowOptions() {
      if (onActivate || onExport || onImport) return true;
      return onNotice && access && child?.key !== "primary";
    }

    function renderTabOptions(id) {
      const renderRow = (name, icon, onClick, key) => (
        <div {...{ key, onClick }} className="flex justify-between p-2 -mx-2 cursor-pointer hover:bg-table-zebra-light">
          <div>{name}</div>
          {icon}
        </div>
      );
      const tabOptions = [];
      if (onActivate)
        tabOptions.push({
          name: "فعال",
          icon: <SwitchToggler size="small" defaultChecked={!disabled} />,
          onClick: () => {
            setShowPopOver(false);
            setData(sortData(changeProperty(child, "disabled", data)));
            if (onActivate) onActivate(child?.key);
          },
          key: "active"
        });
      if (onNotice)
        tabOptions.push({
          name: "اعلان عمومی",
          icon: (
            <Notification
              weight={notice === "public" ? "fill" : "regular"}
              color={notice === "public" ? "warning" : "current"}
              size="1.4xl"
            />
          ),
          onClick: () => {
            setShowPopOver(false);
            handleFocus(child?.key);
            if (!fix) setData(sortData(changeProperty(child, "notice", data)));
            if (onNotice && !fix) onNotice(child?.key);
          },
          key: "pin"
        });

      if (onExport)
        tabOptions.push({
          name: "ایجاد خروجی",
          icon: <Export size="1.4xl" />,
          onClick: () => {
            setShowPopOver(false);
            if (onExport) onExport(child?.key);
          },
          key: "export"
        });

      if (onImport)
        tabOptions.push({
          name: "وارد کردن",
          icon: <Import size="1.4xl" />,
          onClick: () => {
            setShowPopOver(false);
            if (onImport) onImport(child?.key);
          },
          key: "import"
        });
      return (
        <div className="min-w-44">
          {tabOptions.map(
            ({ name, icon, onClick, key }) =>
              (id !== "primary" || (key !== "active" && key !== "pin")) &&
              ((access && key === "pin") || key !== "pin") &&
              renderRow(name, icon, onClick, key)
          )}
        </div>
      );
    }

    const onChange = v => {
      setInputValue(v);
      setData(changeProperty(child, "title", data, v));
    };

    const onBlur = e => {
      setInputValue("");
      if (e.target?.value?.trim()) {
        setEditingName(false);
        setData(
          [...sortData(changeProperty(child, "title", data, e.target?.value))].map(item => ({
            ...item,
            props: { ...item.props, editing: false }
          }))
        );
      } else {
        displayNotification({
          key: "error",
          message: "نام دیده بان نمیتواند خالی باشد",
          color: "error"
        });
      }
    };

    return (
      <div
        ref={ref}
        role="presentation"
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        onBlur={() => setHover(false)}
        className={classJoin([
          "md:text-sm text-xs h-10 cursor-pointer flex align-middle border-main-bg items-center justify-between text-center first-of-type:border-r",
          "pl-0 pr-2",
          growTabs ? "grow" : "",
          index + 1 === activeIndex ? "rounded-bl-xl" : "border-l",
          index - 1 === activeIndex && "rounded-br-xl",
          disabled
            ? "bg-dark-text text-disabled cursor-not-allowed"
            : active === child?.key
            ? "bg-main-bg bg-error-bg rounded-tl-lg rounded-tr-lg"
            : "bg-card-bg hover:bg-tab-hover",
          pin ? "min-w-36" : growTabs ? "xl:min-w-72 lg:min-w-60 md:min-w-32" : "",
          tabsClassName
        ])}
        key={child?.key}
      >
        <div
          className="flex align-middle items-center justify-between grow h-full"
          onClick={() => !disabled && handleTabChange(child?.key, index)}
        >
          {!pin && showFavorite && (
            <FavoriteStar onClick={() => !disabled && tabActions?.onFavorite && favoriteTab()} type={favorite} />
          )}
          {!notice && showMoreOptions && checkShowOptions() && <span className="min-w-4" />}
          <div
            onClick={() => {
              if (!disabled && active === child?.key && editable && child?.key !== "primary") {
                setInputValue(title);
                setEditingName(true);
              }
            }}
            className={`${
              pin
                ? `truncate ... w-16 ${showMoreOptions && checkShowOptions() ? "" : "pl-3"}`
                : growTabs
                ? ""
                : !showFavorite && !showMoreOptions && !showRemove
                ? "w-max px-6"
                : "w-max pr-5"
            } grow`}
          >
            {notice === "public" && <Notification weight="fill" className="inline ml-1" color="warning" size="sm" />}
            {notice === "private" && <NotificationUser className="inline ml-1" color="success" size="sm" />}
            {!editingName && !pin && !editing && title}
            {!editingName && pin && (
              <Tooltip className="max-h-0" title={title}>
                <span className="">{title}</span>
              </Tooltip>
            )}
            {(editingName || newTab || editing) && (
              <BaseInput
                autoFocus
                className={classJoin(["border border-primary rounded-md px-1 text-center", pin ? "w-40" : ""])}
                onChange={onChange}
                onBlur={onBlur}
                onKeyDown={e => {
                  if (e.key === "Enter") onBlur(e);
                }}
                value={inputValue}
              />
            )}
          </div>
        </div>
        {showRemove && child?.key !== "primary" && (
          <span className={classJoin([(!showMoreOptions || !checkShowOptions()) && "ml-3", "min-w-4"])}>
            {hover && (
              <Close
                weight="fill"
                className="bg-appearing p-1 rounded"
                onClick={() => !disabled && deleteTab()}
                color="card-bg"
              />
            )}
          </span>
        )}
        {showMoreOptions && checkShowOptions() && (
          <Popover
            visible={showPopOver}
            onVisibleChange={setShowPopOver}
            className="px-0"
            placement="bottomLeft"
            trigger="click"
            content={renderTabOptions(child?.key)}
          >
            <div className={classJoin([hover ? "visible" : "invisible", "pl-3 pt-3 pb-3"])}>
              <More color="description" size="sm" />
            </div>
          </Popover>
        )}
        <span />
      </div>
    );
  }
);

export const SCROLL_WIDTH = 200;

export const defaultName = "دیده بان";

export const findTabIndex = data => {
  const filtered = data
    ?.filter(item => item?.props?.title?.includes(defaultName))
    ?.map(item => Number(item?.props?.title?.match(/\d+/)?.[0]))
    ?.filter(i => i > 0)
    ?.sort((a, b) => a - b);
  return filtered?.length > 0 ? filtered[Number(filtered?.length) - 1] + 1 : 1;
};

export function usePrevious(value) {
  const ref = useRef();
  useEffect(() => {
    ref.current = value;
  }, [value]);
  return ref.current;
}
