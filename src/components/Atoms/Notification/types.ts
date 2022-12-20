import { ArgsProps } from "antd/lib/notification";
import { ReactElement, ReactNode } from "react";

export type NotificationColorType = "primary" | "terminate" | "warning" | "error" | "success";

// type WholeIconProps = IconProps & { weight: string };
export interface INotificationProps extends Omit<ArgsProps, "icon" | "closeIcon" | "message"> {
  /**
   * indicates color of some parts of the notification box
   */
  color?: NotificationColorType;

  /**
   * title of the notification
   */
  title?: string;

  /**
   * if show icon in the notification box or not
   */
  hasIcon?: boolean;

  /**
   * customize the icon shown in the notification box
   */
  icon?: ReactElement;

  /**
   * if show close icon or not
   */
  hasCloseIcon?: boolean;

  /**
   * customize close icon
   */
  closeIcon?: ReactElement;

  /**
   * shows if the notification has any cancel button or not
   */
  hasCancel?: boolean;

  /**
   * a text set for cancelButton's innerText
   */
  cancelText?: string;

  /**
   * the function called when closeButton is clicked
   */
  onCancel?: (closeFunc: Function) => void;

  /**
   * shows if the notification has any confirm button or not
   */
  hasConfirm?: boolean;

  /**
   * a text set for confirmButton's innerText
   */
  confirmText?: string;

  /**
   * the function called when confirm button is clicked
   */
  onConfirm?: (closeFunc: Function) => void;

  /**
   * if provided, the text will be shown below description instead of Date.
   */
  subDescription?: ReactNode;

  /**
   * message of the notification
   */
  message: ReactNode;
}
