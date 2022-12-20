import { ReactElement, SyntheticEvent } from "react";
import { StandardProps } from "../../../types/common";

/**
 * this type has elements of notification header  (title and unread messages)
 * @example:
 * ```
 * headerAdornments:
 * {
 *   headerTitle: "صندوق پیام ها",
 *   unreadMessages: "۱۱"
 *  }
 *
 * ```
 */
type HeaderAdornment = { headerTitle?: string; unreadMessages?: number };

/**
 * this type has values of notification body and actions
 * @example
 *   {
 *   id: 1,
 *   title: "تگ عمومی",
 *   description:
 *     " تگ عمومی شاهرود-کلاته خیج توسط ادمین عمومی نرم افزار شما 3:20 پیش بروز رسانی شد. از ویژگی های جدید نرم افزار ورژن 25.3.4 افزودن مدیریت صندوق و سبد از داشبورد سبدگردان می باشد. aaaaaaaaaaaaaa",
 *   read: true,
 *   isCollapsed: true,
 *   dateTime: "",
 *   iconType: <Check color="primary" size="lg" />,
 *   hasConfirm: false
 *  }
 */
export type TNotificationObject = {
  // indicate the id of the notification which is unique number
  id: number;

  // title for the notification
  title?: string;

  // notification message
  description?: string;

  /**
   *  used for state of the message if set to true means the message read before
   *  if it set to false unread dot badge will blink
   */
  read?: boolean;

  // if it sets to true, summary of message will show
  isCollapsed?: boolean;

  // shows the date and time of notification
  dateTime?: string;

  /* the Icon of notification like :
   * <Check color="primary" size="lg" />
   */
  iconType?: ReactElement;

  // if it sets to true confirm and cancel buttons will show on the body of notification
  hasConfirm?: boolean;
};
/**
 * this type is for button labels
 * @example:
 * ```
 * notificationButtonLabels:
 * {
 *     cancel: "انصراف",
 *     submit: "تایید",
 *     readAll: "خواندن همه"
 *   }
 *
 * ```
 */
type NotificationButtonLabels = {
  cancel?: string;
  submit?: string;
  readAll?: string;
};
export interface INotificationHeaderProps {
  /**
   * this type has elements of notification header  (title and unread messages)
   * @type { headerTitle?: string; unreadMessages?: string }
   */
  headerAdornments?: HeaderAdornment;

  /**
   *  this prop is used for show/hide message
   */
  hasMessage?: boolean;

  /**
   *  this prop is used for custom unread messages
   */
  customUnreadMessage?: string;

  /**
   *  indicate read all button should show or not
   */
  enableReadAll?: boolean;

  /**
   *  indicate the state of flag (enable/disable/idle)
   */
  readAllFlag?: boolean;

  /**
   * this type is for button labels
   * @type {
   *   cancel?: string;
   *   submit?: string;
   *   readAll?: string;
   * }
   */
  notificationButtonLabels?: NotificationButtonLabels;

  /**
   * the function called when read all text is clicked
   */
  handleReadAll?: (event: SyntheticEvent) => void;
}

export interface INotificationBodyProps {
  /**
   * this type has elements of notification body and actions
   * @type {
   *   id: number;
   *   title?: string;
   *   description?: string;
   *   read?: boolean;
   *   isCollapsed?: boolean;
   *   dateTime?: string;
   *   iconType?: ReactElement;
   *   element?: ReactElement;
   *   hasConfirm?: boolean;
   * }
   */
  notificationList?: TNotificationObject[];

  /**
   * this type is for button labels
   * @type {
   *   cancel?: string;
   *   submit?: string;
   *   readAll?: string;
   * }
   *
   */
  notificationButtonLabels?: NotificationButtonLabels;

  /** this message will show if the length of the notification list is empty */
  emptyListMessage?: string;

  /**
   * the function called when openNotificationExpand is clicked
   */
  handleExpand?: (id: number) => void;

  /**
   * the function called when confirm button is clicked
   */
  handleClickConfirm?: (event: SyntheticEvent, id: number) => void;

  /**
   * the function called when cancelButton is clicked
   */
  handleClickCancel?: (event: SyntheticEvent, id: number) => void;

  /**
   * the function called when collapse button is clicked
   */
  handleCollapse?: (event: SyntheticEvent, id: number) => void;
}

export interface INotificationBoxProps extends Omit<StandardProps, "children"> {
  /**
   * the function called when cancelButton is clicked
   */
  onCancel?: (event: SyntheticEvent, id: number) => void;

  /**
   * the function called when collapse button is clicked
   */
  onCollapse?: (event: SyntheticEvent, id: number) => void;

  /**
   * the function called when openNotificationExpand is clicked
   */
  onExpand?: (id: number) => void;

  /**
   * the function called when confirm button is clicked
   */
  onConfirm?: (event: SyntheticEvent, id: number) => void;

  /**
   * the function called when read all text is clicked
   */
  onReadAll?: (flag: boolean) => void;

  /**
   * this type has elements of notification header  (title and unread messages)
   * @type { headerTitle?: string; unreadMessages?: string }
   * @example:
   * ```
   * headerAdornments:
   * {
   *   headerTitle: "صندوق پیام ها",
   *   unreadMessages: "۱۱"
   *  }
   *
   * ```
   */
  headerAdornments?: HeaderAdornment;

  /**
   * this type has elements of notification body and actions
   * @type {
   *   id: number;
   *   title?: string;
   *   description?: string;
   *   read?: boolean;
   *   isCollapsed?: boolean;
   *   dateTime?: string;
   *   iconType?: ReactElement;
   *   element?: ReactElement;
   *   hasConfirm?: boolean;
   * }
   * @example:
   * ```
   * notificationPropertiesList:[
   * {
   *  id: 4,
   *  title: "خرید موفق",
   *  description: " خرید سهام دکوثر برای صندوق مالک با مو",
   *  read: true,
   *  isCollapsed: true,
   *  dateTime: "",
   *  iconType: <Check color="success" size="lg" />,
   *  hasConfirm: false
   *  }]
   *
   * ```
   */
  notificationMessagesList: TNotificationObject[];

  /**
   * this type is for button labels
   * @type {
   *   cancel?: string;
   *   submit?: string;
   *   readAll?: string;
   * }
   *
   * @example:
   * ```
   * notificationButtonLabels:
   * {
   *     cancel: "انصراف",
   *     submit: "تایید",
   *     readAll: "خواندن همه"
   *   }
   *
   * ```
   */
  notificationButtonLabels?: NotificationButtonLabels;

  /**
   *  this prop is used for custom unread messages
   */
  customUnreadMessage?: string;

  /**
   *  this prop is used for show/hide message
   */
  hasMessage?: boolean;

  /**
   *  this type is used for adding extra class to the parent of Card component
   */
  cardClassName?: string;

  /**
   *  indicate read all button should show or not
   */
  enableReadAll?: boolean;

  /**
   *  indicate the state of flag (enable/disable/idle)
   */
  readAllFlag?: boolean;

  /** this message will show if the length of the notification list is empty */
  emptyListMessage?: string;
}
