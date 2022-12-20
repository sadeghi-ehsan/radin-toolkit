import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import React, { useEffect, useState } from "react";
import { Envelope, Logout, PersonSquare } from "@sadeghi-ehsan/radin-icon";
import { classJoin, toJalaliDay } from "../../../utils";
import { Divider } from "../../Atoms/Divider";
import RenderLogo from "./components/RenderLogo";
import { textColors, bgColors } from "../../../constants/tailwind";
import { Tooltip } from "../../Atoms/Tooltip";
const Header = ({ className, logo, brandName, startAdornments, middleAdornment, endAdornment, showLiveStatus, statusColor, logoHref, profileName, handleClickLogout, handleClickNotification, handleClickProfile, ...restProps }) => {
    const [currentTime, setCurrentTime] = useState(null);
    useEffect(() => {
        if (!middleAdornment?.value)
            setCurrentTime(toJalaliDay(new Date()));
        const timer = !middleAdornment?.value && setInterval(() => setCurrentTime(toJalaliDay(new Date())), 1000);
        return () => clearInterval(timer);
    }, []);
    return (_jsx("div", { className: classJoin(["h-12 w-full bg-card-bg", className]), ...restProps, children: _jsxs("div", { className: "h-full w-full bg-dark-text bg-opacity-50 flex justify-between items-center text-xs px-1 sm:px-3 md:px-4 lg:px-5 md:text-sm", children: [logoHref ? (_jsx("a", { href: logoHref, children: _jsx(RenderLogo, { ...{ logo, brandName } }) })) : (_jsx(RenderLogo, { ...{ logo, brandName } })), _jsxs("div", { className: "flex items-center", children: [startAdornments?.length > 0 &&
                            startAdornments?.map((item, index) => (
                            // eslint-disable-next-line react/no-array-index-key
                            _jsxs(React.Fragment, { children: [item?.element ? (item?.element) : (_jsxs("div", { className: "hidden flex-col items-center text-light md:flex", children: [_jsx("span", { className: "text-xs", children: item?.title }), _jsx("span", { className: "text-xs -mt-1", children: item.value })] })), _jsx(Divider, { isVertical: true, className: "h-6 mr-2 ml-3 border-card-border" })] }, index))), (middleAdornment?.value || middleAdornment?.title || middleAdornment?.element || currentTime) && (_jsxs(_Fragment, { children: [middleAdornment?.element || (_jsxs("div", { className: "flex flex-col items-end text-light", children: [_jsx("div", { className: "text-xs", children: middleAdornment?.title || (_jsx("span", { className: "tracking-tighter", children: currentTime?.calendar("jalali")?.format("dd YYYY/MM/DD") })) }), _jsxs("div", { className: "text-xs -mt-1 flex justify-between items-center w-full", children: [showLiveStatus && (_jsxs("div", { className: "relative", children: [_jsx("div", { className: classJoin([
                                                                "absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2  w-1.2 h-1.2 rounded-full bg-opacity-100",
                                                                textColors[statusColor],
                                                                bgColors[statusColor]
                                                            ]) }), _jsx("div", { className: classJoin([
                                                                "w-2 h-2 rounded-full opacity-75 animate-ping-slow bg-opacity-100",
                                                                textColors[statusColor],
                                                                bgColors[statusColor]
                                                            ]) })] })), _jsx("span", { className: "mr-auto", children: middleAdornment?.value || currentTime?.calendar("jalali")?.format("HH:mm:ss") })] })] })), _jsx(Divider, { isVertical: true, className: "h-6 mr-2 ml-3 border-card-border" })] })), endAdornment, _jsxs("div", { className: "flex items-center space-x-2 rtl:space-x-reverse md:space-x-3", children: [_jsx(Envelope, { color: "idle", className: "cursor-pointer h-4 w-max md:h-5 md:w-max", onClick: handleClickNotification }), _jsx(PersonSquare, { color: "idle", className: "h-4 w-max md:h-5 md:w-max ml-1" }), _jsx("span", { className: "w-17 truncate ... ", children: profileName || "کاربر مهمان" }), _jsx(Tooltip, { title: "\u062E\u0631\u0648\u062C", children: _jsx(Logout, { color: "idle", className: "cursor-pointer h-4 w-max md:h-5 md:w-max", onClick: handleClickLogout }) })] })] })] }) }));
};
Header.defaultProps = { className: "", brandName: "رادین", showLiveStatus: true, statusColor: "success" };
export default Header;
//# sourceMappingURL=Header.js.map