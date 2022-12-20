import { notification as antdNotification } from "antd";
import { Check, Close, RoundedSquare } from "radin-icon";
import { Button } from "../../..";
import { classJoin, randomStr, toJalaliDay } from "../../../utils";
import { Badge } from "../Badge";
import { INotificationProps } from "./types";
import { bindBadgeColor } from "./utils";

const notification: (props: INotificationProps) => void = ({
  color = "primary",
  title,
  message,
  duration = 4.5,
  hasCloseIcon = true,
  closeIcon,
  hasIcon = true,
  icon,
  hasCancel,
  cancelText = "انصراف",
  onCancel,
  hasConfirm,
  confirmText = "تایید",
  onConfirm,
  placement = "bottomRight",
  className,
  subDescription,
  key = randomStr(),
  ...restProps
}) => {
  const DefaultIcon = color === "error" ? Close : Check;

  function closeNotification() {
    antdNotification.close(key);
  }

  function handleClickConfirm() {
    onConfirm?.(closeNotification);
  }

  function handleClickCancel() {
    onCancel?.(closeNotification);
  }

  antdNotification.config({
    rtl: true
  });

  antdNotification.open({
    key,
    duration,
    closeIcon: hasCloseIcon ? (
      <div className="group w-5 h-5 rounded-full bg-filled-bg border-2 border-card-bg flex items-center justify-center">
        {closeIcon || <Close size=".6xs" weight="fill" className="text-idle group-hover:text-white" />}
      </div>
    ) : (
      <div />
    ),
    placement,
    // ---------------------------------- Title ---------------------------------
    message: title && (
      <div className="flex items-center space-x-1 rtl:space-x-reverse">
        <Badge type="state" size=".9xs" color={bindBadgeColor[color]} />
        <div className="text-card-bg font-bold text-xs">{title}</div>
      </div>
    ),
    description: (
      <div>
        {/* ---------------------------------- Body ---------------------------------- */}
        <div className="flex items-start space-x-2 rtl:space-x-reverse">
          {/* Main Icon */}
          {hasIcon && (
            <div className="relative ml-2">
              <RoundedSquare weight="fill" size="3xl" color="card-bg" className="opacity-60" />
              <div className="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2">
                {icon || <DefaultIcon color={color} size="lg" />}
              </div>
            </div>
          )}
          <div className="flex-1">
            {/* --------------------------------- message -------------------------------- */}
            <div className="text-filled-bg text-xs">{message}</div>

            {/* --------------------------------- Footer --------------------------------- */}
            <div className="flex justify-between items-center mt-2">
              <div className="text-disabled text-.9xs">
                {subDescription ?? toJalaliDay(new Date()).format("YYYY/MM/DD [ , ساعت] HH:mm")}
              </div>
              <div className="flex items-center space-x-2 rtl:space-x-reverse">
                {hasCancel && (
                  <Button
                    size="sm"
                    theme="primary"
                    variant="text"
                    className="!border-none !min-w-14 !rounded-md !py-0 !h-fit !bg-light/60 !text-filled-bg hover:!bg-primary hover:!text-light-text focus:!text-light-text focus:!bg-primary-hover"
                    onClick={handleClickCancel}
                  >
                    {cancelText}
                  </Button>
                )}

                {hasConfirm && (
                  <Button
                    size="sm"
                    theme="primary"
                    className="!border-none !min-w-14 !rounded-md !py-0 !h-fit !bg-light/60 !text-filled-bg hover:!bg-primary hover:!text-light-text focus:!text-light-text focus:!bg-primary-hover"
                    onClick={handleClickConfirm}
                  >
                    {confirmText}
                  </Button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
    className: classJoin(["sbt-notification", className]),
    ...restProps
  });
};

export default notification;
