import { ReactElement } from "react";
import { TailwindColors } from "../../../types/tailwind";
import { StandardProps } from "../../../types/common";

type TAdornment = { title?: string; value?: string; element?: ReactElement };
export interface IHeaderProps extends Omit<StandardProps, "children"> {
  /**
   * logo image
   * @default RadinLogoSVG
   */
  logo?: ReactElement;

  /**
   * brand name beside logo
   */
  brandName?: string;

  /**
   * if passed, a <a> tag will wrap on the logo and brand name.
   * @optional
   */
  logoHref?: string;

  /**
   * start Adornments
   * @type { title?: string; value?: string; element?: ReactElement }
   * @example:
   * ```
   * startAdornments: [
   * {
   *   title: "شاخص شستا",
   *   value: "1,500,000"
   * }
   * ```
   */
  startAdornments?: TAdornment[];

  /**
   * clock section Adornment
   * @type { title?: string; value?: string; element?: ReactElement }
   */
  middleAdornment?: TAdornment;

  /**
   * @type ReactElement
   */
  endAdornment?: ReactElement;

  /**
   * is show live status indicator or not
   */
  showLiveStatus?: boolean;

  /**
   * is show live status indicator or not
   */
  statusColor?: TailwindColors;

  /**
   * handle Logout user from profile
   */
  handleClickLogout?: () => void;

  /**
   * route user to the Notification panel
   */
  handleClickNotification?: () => void;

  /**
   * route user to the Profile page
   */
  handleClickProfile?: () => void;

  /**
   * user profile name is shown in the header
   */
  profileName?: string;
}
