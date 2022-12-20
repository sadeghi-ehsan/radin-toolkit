import { Check, Chevron, RoundedSquare } from "@sadeghi-ehsan/radin-icon";
import { FunctionComponent } from "react";
import { Badge } from "../../../Atoms/Badge";
import { classJoin, toJalaliDay } from "../../../../utils";
import { Button } from "../../../Atoms/Button";
import { INotificationBodyProps } from "../types";

const NotificationBody: FunctionComponent<INotificationBodyProps> = ({
  notificationList,
  notificationButtonLabels,
  emptyListMessage,
  handleExpand,
  handleClickConfirm,
  handleClickCancel,
  handleCollapse
}) => (
  <div>
    {notificationList?.length > 0 ? (
      notificationList?.map((item, index) => (
        <div
          key={item.id}
          className={classJoin([
            item.read
              ? notificationList[index + 1]?.read
                ? "border-b border-solid border-primary-border last:border-b-0"
                : "bg-card-bg"
              : "bg-appearing/20 rounded mb-1",
            ""
          ])}
        >
          {/* ---------------------------------- Body ---------------------------------- */}
          <div
            className={classJoin(["flex flex-col px-3 pt-3.5 pb-1 cursor-pointer"])}
            onClick={() => handleExpand(item.id)}
          >
            <div className="flex flex-row items-start">
              {/*  ---------------------------------- Icon ---------------------------------- */}
              <div className="relative">
                <RoundedSquare weight="fill" size="3xl" color="light-text" className="opacity-10" />
                {item?.read || (
                  <div className="absolute -top-1.5">
                    <Badge type="state" size=".9xs" className="!bg-light" />
                  </div>
                )}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  ">
                  {item?.iconType}
                </div>
              </div>
              {/* --------------------------------- message -------------------------------- */}
              <div
                className={classJoin([!item.isCollapsed ? "mb-4" : "overflow-hidden", "flex flex-col flex-1 pr-2.5  "])}
              >
                <div className="font-bold text-xs text-label">{item?.title}</div>
                <div
                  className={classJoin([
                    item.read ? "text-idle" : "text-label",
                    item.isCollapsed ? "truncate  " : "",
                    "text-xs"
                  ])}
                >
                  {item.description}
                </div>
              </div>
            </div>
            {/* --------------------------------- buttons of notification -------------------------------- */}
            <div className=" flex flex-row items-center justify-between ">
              <div className="text-idle text-.9xs ">
                {item.dateTime || toJalaliDay(new Date()).format("YYYY/MM/DD [ , ساعت] HH:mm")}
              </div>
              <div className="flex flex-row items-center ">
                {item.isCollapsed || (
                  <>
                    {item?.hasConfirm || (
                      <>
                        <Button
                          size="sm"
                          onClick={e => handleClickConfirm(e, item.id)}
                          className="!min-w-0 w-14 !bg-filled-bg"
                        >
                          {notificationButtonLabels.submit}
                        </Button>
                        <Button
                          size="sm"
                          variant="text"
                          onClick={e => handleClickCancel(e, item.id)}
                          className="!min-w-0 w-14"
                        >
                          {notificationButtonLabels.cancel}
                        </Button>
                      </>
                    )}
                    <div
                      className="relative cursor-pointer hover:text-primary"
                      onClick={e => handleCollapse(e, item.id)}
                    >
                      <RoundedSquare weight="fill" size="xl" color="idle" className="opacity-40" />
                      <Chevron
                        size="xs"
                        rotate="90"
                        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 "
                      />
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      ))
    ) : (
      // {/* ---------------------------------- No Notification ----------------------------------*/}
      <div className="bg-card-bg bg-appearing/20 rounded mb-1">
        <div className={classJoin(["flex flex-col p-3 cursor-pointer"])}>
          <div className="flex flex-row items-center">
            {/*  ---------------------------------- Icon ---------------------------------- */}
            <div className="relative">
              <RoundedSquare weight="fill" size="3xl" color="light-text" className="opacity-10" />
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  ">
                <Check color="idle" size="lg" />
              </div>
            </div>
            {/* --------------------------------- message -------------------------------- */}
            <div className={classJoin(["overflow-hidden", "flex flex-col flex-1 pr-2.5  "])}>
              <div className={classJoin(["text-label", "text-xs"])}>{emptyListMessage}</div>
            </div>
          </div>
        </div>
      </div>
    )}
  </div>
);
export default NotificationBody;
