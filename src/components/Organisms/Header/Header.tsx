import React, { FunctionComponent, useEffect, useState } from "react";
import { Envelope, Logout, PersonSquare } from "@sadeghi-ehsan/radin-icon";
import { classJoin, toJalaliDay } from "../../../utils";
import { IHeaderProps } from "./types";
import { Divider } from "../../Atoms/Divider";
import RenderLogo from "./components/RenderLogo";
import { textColors, bgColors } from "../../../constants/tailwind";
import { Tooltip } from "../../Atoms/Tooltip";

const Header: FunctionComponent<IHeaderProps> = ({
  className,
  logo,
  brandName,
  startAdornments,
  middleAdornment,
  endAdornment,
  showLiveStatus,
  statusColor,
  logoHref,
  profileName,
  handleClickLogout,
  handleClickNotification,
  handleClickProfile,
  ...restProps
}) => {
  const [currentTime, setCurrentTime] = useState(null);

  useEffect(() => {
    if (!middleAdornment?.value) setCurrentTime(toJalaliDay(new Date()));
    const timer = !middleAdornment?.value && setInterval(() => setCurrentTime(toJalaliDay(new Date())), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className={classJoin(["h-12 w-full bg-card-bg", className])} {...restProps}>
      <div className="h-full w-full bg-dark-text bg-opacity-50 flex justify-between items-center text-xs px-1 sm:px-3 md:px-4 lg:px-5 md:text-sm">
        {/* -------- Right side (Logo & brand name) -------- */}
        {logoHref ? (
          <a href={logoHref}>
            <RenderLogo {...{ logo, brandName }} />
          </a>
        ) : (
          <RenderLogo {...{ logo, brandName }} />
        )}

        {/* ------------------ Left Side ------------------ */}
        <div className="flex items-center">
          {/* start Adornments */}
          {startAdornments?.length > 0 &&
            startAdornments?.map((item, index) => (
              // eslint-disable-next-line react/no-array-index-key
              <React.Fragment key={index}>
                {item?.element ? (
                  item?.element
                ) : (
                  <div className="hidden flex-col items-center text-light md:flex">
                    <span className="text-xs">{item?.title}</span>
                    <span className="text-xs -mt-1">{item.value}</span>
                  </div>
                )}
                <Divider isVertical className="h-6 mr-2 ml-3 border-card-border" />
              </React.Fragment>
            ))}

          {/* middle Adornment */}
          {(middleAdornment?.value || middleAdornment?.title || middleAdornment?.element || currentTime) && (
            <>
              {middleAdornment?.element || (
                <div className="flex flex-col items-end text-light">
                  <div className="text-xs">
                    {middleAdornment?.title || (
                      <span className="tracking-tighter">
                        {currentTime?.calendar("jalali")?.format("dd YYYY/MM/DD")}
                      </span>
                    )}
                  </div>
                  <div className="text-xs -mt-1 flex justify-between items-center w-full">
                    {showLiveStatus && (
                      <div className="relative">
                        <div
                          className={classJoin([
                            "absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2  w-1.2 h-1.2 rounded-full bg-opacity-100",
                            textColors[statusColor],
                            bgColors[statusColor]
                          ])}
                        />
                        <div
                          className={classJoin([
                            "w-2 h-2 rounded-full opacity-75 animate-ping-slow bg-opacity-100",
                            textColors[statusColor],
                            bgColors[statusColor]
                          ])}
                        />
                      </div>
                    )}
                    <span className="mr-auto">
                      {middleAdornment?.value || currentTime?.calendar("jalali")?.format("HH:mm:ss")}
                    </span>
                  </div>
                </div>
              )}
              <Divider isVertical className="h-6 mr-2 ml-3 border-card-border" />
            </>
          )}

          {/* end Adornment */}
          {endAdornment}
          <div className="flex items-center space-x-2 rtl:space-x-reverse md:space-x-3">
            <Envelope
              color="idle"
              className="cursor-pointer h-4 w-max md:h-5 md:w-max"
              onClick={handleClickNotification}
            />
            <PersonSquare color="idle" className="h-4 w-max md:h-5 md:w-max ml-1" />
            <span className="w-17 truncate ... ">{profileName || "کاربر مهمان"}</span>
            <Tooltip title="خروج">
              <Logout color="idle" className="cursor-pointer h-4 w-max md:h-5 md:w-max" onClick={handleClickLogout} />
            </Tooltip>
          </div>
        </div>
      </div>
    </div>
  );
};

Header.defaultProps = { className: "", brandName: "رادین", showLiveStatus: true, statusColor: "success" };

export default Header;
