"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _radinIcon = require("@sadeghi-ehsan/radin-icon");
var _Divider = require("../../../Atoms/Divider");
var _utils = require("../../../../utils");
var _jsxRuntime = require("react/jsx-runtime");
var NotificationHeader = function NotificationHeader(_ref) {
  var headerAdornments = _ref.headerAdornments,
    hasMessage = _ref.hasMessage,
    customUnreadMessage = _ref.customUnreadMessage,
    enableReadAll = _ref.enableReadAll,
    readAllFlag = _ref.readAllFlag,
    notificationButtonLabels = _ref.notificationButtonLabels,
    handleReadAll = _ref.handleReadAll;
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    className: "flex-shrink-0",
    children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      className: "flex justify-between py-2",
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: "flex items-right",
        children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
          className: "flex-col items-center text-light ",
          children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
            className: "flex -no-wrap items-center",
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_radinIcon.Envelope, {
              color: "primary",
              className: "h-5 w-max"
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
              className: "text-lg mr-2",
              children: headerAdornments === null || headerAdornments === void 0 ? void 0 : headerAdornments.headerTitle
            })]
          }), hasMessage ? customUnreadMessage || (headerAdornments !== null && headerAdornments !== void 0 && headerAdornments.unreadMessages ? /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
            className: "text-xs text-idle ",
            children: ["\u0634\u0645\u0627 ", headerAdornments === null || headerAdornments === void 0 ? void 0 : headerAdornments.unreadMessages, " \u067E\u06CC\u0627\u0645 \u062E\u0648\u0627\u0646\u062F\u0647 \u0646\u0634\u062F\u0647 \u062F\u0627\u0631\u06CC\u062F"]
          }) : null) : null]
        })
      }), headerAdornments !== null && headerAdornments !== void 0 && headerAdornments.unreadMessages && enableReadAll ? /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        className: (0, _utils.classJoin)([readAllFlag ? "text-light hover:text-primary" : "text-disabled", "flex flex-nowrap pt-1 cursor-pointer relative "]),
        onClick: handleReadAll,
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
          className: "text-xs absolute -right-20 ",
          children: notificationButtonLabels === null || notificationButtonLabels === void 0 ? void 0 : notificationButtonLabels.readAll
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_radinIcon.Check, {
          size: "xl",
          className: " absolute -right-5 "
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_radinIcon.Check, {
          size: "xl",
          className: " absolute -right-6 "
        })]
      }) : null]
    }), headerAdornments !== null && headerAdornments !== void 0 && headerAdornments.unreadMessages ? /*#__PURE__*/(0, _jsxRuntime.jsx)(_Divider.Divider, {
      className: "border-card-border"
    }) : null]
  });
};
var _default = NotificationHeader;
exports["default"] = _default;