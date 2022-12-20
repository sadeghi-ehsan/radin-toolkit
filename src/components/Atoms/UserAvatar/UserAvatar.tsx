// this component can be used in two ways SINGLE USER and MULTIPLE USERS
// to use in multiple-user mode just give arrays of user info(firstName, lastName, ....) to users props.
// to use in single-user mode give (firstname and Lastname, ...)and don't give anything to users prop.

import { FunctionComponent } from "react";
import { Avatar } from "antd";
import { Chevron } from "radin-icon";
import { IUserProps } from "./types";
import { classJoin, empty, ifEmpty, ifNotEmpty } from "../../../utils";
import Dropdown from "../Dropdown/Dropdown";

export const UserAvatar: FunctionComponent<IUserProps> = ({
  firstName,
  lastName,
  img,
  roleList,
  role,
  users,
  maxCount,
  allUsersCount,
  className,
  ...restProps
}) =>
  users ? (
    <div className={classJoin(["flex flex-row-reverse justify-end", className])}>
      {(users.length > maxCount || allUsersCount) && (
        <span className="light-text mt-1 text-1.5x relative content-center grid">
          {allUsersCount - maxCount || users.length - maxCount}+
        </span>
      )}
      {users?.slice(0, maxCount)?.map(eachUser => (
        <div
          className={classJoin([
            `text-xs rounded-full text-center relative border-card-bg border-3.5 content-center grid w-8 h-8 z-10 -mr-3 pr-1.5 last:pr-0`,
            ifEmpty(eachUser?.img, "bg-primary-label"),
            ifNotEmpty(eachUser?.img, "bg-primary-label")
          ])}
          key={`${eachUser?.firstName}-${eachUser?.lastName}`}
        >
          {!eachUser?.img && (
            <span className="text-dark-text">{eachUser?.firstName?.charAt(0) || eachUser?.lastName?.charAt(0)}</span>
          )}
          {ifNotEmpty(eachUser?.img) && <img className="rounded-full" src={eachUser?.img} alt="avatar" />}
        </div>
      ))}
    </div>
  ) : (
    <div className={classJoin(["flex", className])}>
      <Avatar {...restProps} className={classJoin([ifEmpty(img, "bg-primary-label")])} src={img} size={40}>
        {empty(img) && <span className="text-dark-text">{lastName?.charAt(0) || firstName?.charAt(0)}</span>}
      </Avatar>
      <div className="pr-2 light-text text-sm content-center grid">
        <span>
          {firstName} {lastName}
        </span>
        {role && (
          <div>
            {roleList && (
              <Dropdown overlay={roleList} trigger={["click"]}>
                <button type="button" className="triggerButton text-idle text-xs flex">
                  {role}
                  <Chevron className="pr-1 mr-1 mt-1" size=".8xs" rotate="90" flip="vertical" />
                </button>
              </Dropdown>
            )}
            {!roleList && role && <div className="text-idle text-xs"> {role}</div>}
          </div>
        )}
      </div>
    </div>
  );

UserAvatar.defaultProps = { maxCount: 3, firstName: "", lastName: "", users: null };

export default UserAvatar;
