import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { notification as antdNotification } from "antd";
import { Check, Close, RoundedSquare } from "@sadeghi-ehsan/radin-icon";
import { Button } from "../../..";
import { classJoin, randomStr, toJalaliDay } from "../../../utils";
import { Badge } from "../Badge";
import { bindBadgeColor } from "./utils";
const notification = ({ color = "primary", title, message, duration = 4.5, hasCloseIcon = true, closeIcon, hasIcon = true, icon, hasCancel, cancelText = "انصراف", onCancel, hasConfirm, confirmText = "تایید", onConfirm, placement = "bottomRight", className, subDescription, key = randomStr(), ...restProps }) => {
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
        closeIcon: hasCloseIcon ? (_jsx("div", { className: "group w-5 h-5 rounded-full bg-filled-bg border-2 border-card-bg flex items-center justify-center", children: closeIcon || _jsx(Close, { size: ".6xs", weight: "fill", className: "text-idle group-hover:text-white" }) })) : (_jsx("div", {})),
        placement,
        // ---------------------------------- Title ---------------------------------
        message: title && (_jsxs("div", { className: "flex items-center space-x-1 rtl:space-x-reverse", children: [_jsx(Badge, { type: "state", size: ".9xs", color: bindBadgeColor[color] }), _jsx("div", { className: "text-card-bg font-bold text-xs", children: title })] })),
        description: (_jsx("div", { children: _jsxs("div", { className: "flex items-start space-x-2 rtl:space-x-reverse", children: [hasIcon && (_jsxs("div", { className: "relative ml-2", children: [_jsx(RoundedSquare, { weight: "fill", size: "3xl", color: "card-bg", className: "opacity-60" }), _jsx("div", { className: "absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2", children: icon || _jsx(DefaultIcon, { color: color, size: "lg" }) })] })), _jsxs("div", { className: "flex-1", children: [_jsx("div", { className: "text-filled-bg text-xs", children: message }), _jsxs("div", { className: "flex justify-between items-center mt-2", children: [_jsx("div", { className: "text-disabled text-.9xs", children: subDescription ?? toJalaliDay(new Date()).format("YYYY/MM/DD [ , ساعت] HH:mm") }), _jsxs("div", { className: "flex items-center space-x-2 rtl:space-x-reverse", children: [hasCancel && (_jsx(Button, { size: "sm", theme: "primary", variant: "text", className: "!border-none !min-w-14 !rounded-md !py-0 !h-fit !bg-light/60 !text-filled-bg hover:!bg-primary hover:!text-light-text focus:!text-light-text focus:!bg-primary-hover", onClick: handleClickCancel, children: cancelText })), hasConfirm && (_jsx(Button, { size: "sm", theme: "primary", className: "!border-none !min-w-14 !rounded-md !py-0 !h-fit !bg-light/60 !text-filled-bg hover:!bg-primary hover:!text-light-text focus:!text-light-text focus:!bg-primary-hover", onClick: handleClickConfirm, children: confirmText }))] })] })] })] }) })),
        className: classJoin(["sbt-notification", className]),
        ...restProps
    });
};
export default notification;
//# sourceMappingURL=Notification.js.map