import React, { forwardRef, SyntheticEvent, useEffect, useRef, useState } from "react";
import { classJoin } from "../../../utils";
import { INotificationBoxProps, TNotificationObject } from "./types";
import NotificationBody from "./components/RenderNotificationBody";
import NotificationHeader from "./components/RenderNotificationHeader";

const NotificationBox = forwardRef<HTMLDivElement, INotificationBoxProps>(
  (
    {
      headerAdornments,
      notificationMessagesList,
      notificationButtonLabels,
      customUnreadMessage,
      emptyListMessage,
      hasMessage,
      enableReadAll,
      className,
      onConfirm,
      onCancel,
      onCollapse,
      onExpand,
      onReadAll,
      ...restProps
    },
    ref
  ) => {
    const [notificationList, setNotificationList] = useState<TNotificationObject[]>(notificationMessagesList || []);
    const [readAllFlag, setReadAllFlag] = useState(false);

    const scrollableElement = useRef<HTMLDivElement>(null);

    useEffect(() => {
      setNotificationList(notificationMessagesList);

      scrollableElement.current?.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    }, [notificationMessagesList]);

    useEffect(() => {
      if (notificationList?.filter(item => !item.read).length > 0) {
        setReadAllFlag(true);
      }
    });

    const collapseExpandNotification = (array, id: number) =>
      array.map(el => (el.id === id ? { ...el, isCollapsed: !el.isCollapsed } : el));

    const handleClickConfirm = (e: SyntheticEvent, id: number) => {
      e.stopPropagation();
      onConfirm?.(e, id);
    };

    const handleClickCancel = (e: SyntheticEvent, id: number) => {
      e.stopPropagation();
      onCancel?.(e, id);
    };

    const handleCollapse = (e: SyntheticEvent, id: number) => {
      e.stopPropagation();
      onCollapse?.(e, id);

      const result = collapseExpandNotification(notificationList, id);
      setNotificationList(result);
    };

    const handleExpand = (id: number) => {
      onExpand?.(id);

      const result = collapseExpandNotification(notificationList, id);
      setNotificationList(result);
    };

    const handleReadAll = () => {
      setReadAllFlag(!readAllFlag);
      onReadAll?.(readAllFlag);
    };

    return (
      <div className={classJoin(["h-full flex flex-col relative", className])} {...restProps} ref={ref}>
        <NotificationHeader
          headerAdornments={headerAdornments}
          hasMessage={hasMessage}
          customUnreadMessage={customUnreadMessage}
          enableReadAll={enableReadAll}
          readAllFlag={readAllFlag}
          notificationButtonLabels={notificationButtonLabels}
          handleReadAll={handleReadAll}
        />
        <div
          className="pl-1 overflow-y-auto h-full scrollbar-primary-sm mt-1 relative flex-1 pb-7"
          ref={scrollableElement}
        >
          <NotificationBody
            notificationList={notificationList}
            notificationButtonLabels={notificationButtonLabels}
            handleExpand={handleExpand}
            handleClickConfirm={handleClickConfirm}
            handleClickCancel={handleClickCancel}
            handleCollapse={handleCollapse}
            emptyListMessage={emptyListMessage}
          />
        </div>
        {/* ----------- DIV with Gradient ----------- */}
        <div className="absolute h-14 bottom-0 right-0 left-2 bg-gradient-to-t from-card-bg pointer-events-none" />
      </div>
    );
  }
);
NotificationBox.defaultProps = { hasMessage: true, enableReadAll: true };

export default NotificationBox;
