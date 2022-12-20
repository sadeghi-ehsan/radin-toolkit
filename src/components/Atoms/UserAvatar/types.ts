import { StandardProps } from "../../../types/common";

interface IUser {
  /** Indicates name of user */
  firstName?: string;
  /** Indicates family of user */
  lastName?: string;
  /** Indicates image url */
  img?: string;
  /** Indicates roles dropDown */
  roleList?: JSX.Element;
}

export interface IUserProps extends StandardProps, IUser {
  /** Indicates role of user */
  role?: string;
  /** Max user to show */
  maxCount?: number;
  /** indicate Number of all users */
  allUsersCount?: number;
  /** list of user to show in MULTIPLE USERS */
  users?: Array<IUser>;
}
