import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Check, Envelope } from "@sadeghi-ehsan/radin-icon";
import { Divider } from "../../../Atoms/Divider";
import { classJoin } from "../../../../utils";
const NotificationHeader = ({ headerAdornments, hasMessage, customUnreadMessage, enableReadAll, readAllFlag, notificationButtonLabels, handleReadAll }) => (_jsxs("div", { className: "flex-shrink-0", children: [_jsxs("div", { className: "flex justify-between py-2", children: [_jsx("div", { className: "flex items-right", children: _jsxs("div", { className: "flex-col items-center text-light ", children: [_jsxs("div", { className: "flex -no-wrap items-center", children: [_jsx(Envelope, { color: "primary", className: "h-5 w-max" }), _jsx("div", { className: "text-lg mr-2", children: headerAdornments?.headerTitle })] }), hasMessage
                                ? customUnreadMessage ||
                                    (headerAdornments?.unreadMessages ? (_jsxs("div", { className: "text-xs text-idle ", children: ["\u0634\u0645\u0627 ", headerAdornments?.unreadMessages, " \u067E\u06CC\u0627\u0645 \u062E\u0648\u0627\u0646\u062F\u0647 \u0646\u0634\u062F\u0647 \u062F\u0627\u0631\u06CC\u062F"] })) : null)
                                : null] }) }), headerAdornments?.unreadMessages && enableReadAll ? (_jsxs("div", { className: classJoin([
                        readAllFlag ? "text-light hover:text-primary" : "text-disabled",
                        "flex flex-nowrap pt-1 cursor-pointer relative "
                    ]), onClick: handleReadAll, children: [_jsx("span", { className: "text-xs absolute -right-20 ", children: notificationButtonLabels?.readAll }), _jsx(Check, { size: "xl", className: " absolute -right-5 " }), _jsx(Check, { size: "xl", className: " absolute -right-6 " })] })) : null] }), headerAdornments?.unreadMessages ? _jsx(Divider, { className: "border-card-border" }) : null] }));
export default NotificationHeader;
//# sourceMappingURL=RenderNotificationHeader.js.map