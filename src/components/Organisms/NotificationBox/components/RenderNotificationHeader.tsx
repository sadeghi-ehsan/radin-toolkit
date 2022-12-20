import { Check, Envelope } from "@sadeghi-ehsan/radin-icon";
import { FunctionComponent } from "react";
import { Divider } from "../../../Atoms/Divider";
import { classJoin } from "../../../../utils";
import { INotificationHeaderProps } from "../types";

const NotificationHeader: FunctionComponent<INotificationHeaderProps> = ({
  headerAdornments,
  hasMessage,
  customUnreadMessage,
  enableReadAll,
  readAllFlag,
  notificationButtonLabels,
  handleReadAll
}): JSX.Element => (
  <div className="flex-shrink-0">
    <div className="flex justify-between py-2">
      <div className="flex items-right">
        <div className="flex-col items-center text-light ">
          <div className="flex -no-wrap items-center">
            <Envelope color="primary" className="h-5 w-max" />
            <div className="text-lg mr-2">{headerAdornments?.headerTitle}</div>
          </div>
          {hasMessage
            ? customUnreadMessage ||
              (headerAdornments?.unreadMessages ? (
                <div className="text-xs text-idle ">شما {headerAdornments?.unreadMessages} پیام خوانده نشده دارید</div>
              ) : null)
            : null}
        </div>
      </div>
      {headerAdornments?.unreadMessages && enableReadAll ? (
        <div
          className={classJoin([
            readAllFlag ? "text-light hover:text-primary" : "text-disabled",
            "flex flex-nowrap pt-1 cursor-pointer relative "
          ])}
          onClick={handleReadAll}
        >
          <span className="text-xs absolute -right-20 ">{notificationButtonLabels?.readAll}</span>
          <Check size="xl" className=" absolute -right-5 " />
          <Check size="xl" className=" absolute -right-6 " />
        </div>
      ) : null}
    </div>
    {headerAdornments?.unreadMessages ? <Divider className="border-card-border" /> : null}
  </div>
);

export default NotificationHeader;
