"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _radinIcon = require("@sadeghi-ehsan/radin-icon");
var _Badge = require("../../../Atoms/Badge");
var _utils = require("../../../../utils");
var _Button = require("../../../Atoms/Button");
var _jsxRuntime = require("react/jsx-runtime");
var NotificationBody = function NotificationBody(_ref) {
  var notificationList = _ref.notificationList,
    notificationButtonLabels = _ref.notificationButtonLabels,
    emptyListMessage = _ref.emptyListMessage,
    handleExpand = _ref.handleExpand,
    handleClickConfirm = _ref.handleClickConfirm,
    handleClickCancel = _ref.handleClickCancel,
    handleCollapse = _ref.handleCollapse;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
    children: (notificationList === null || notificationList === void 0 ? void 0 : notificationList.length) > 0 ? notificationList === null || notificationList === void 0 ? void 0 : notificationList.map(function (item, index) {
      var _notificationList;
      return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: (0, _utils.classJoin)([item.read ? (_notificationList = notificationList[index + 1]) !== null && _notificationList !== void 0 && _notificationList.read ? "border-b border-solid border-primary-border last:border-b-0" : "bg-card-bg" : "bg-appearing/20 rounded mb-1", ""]),
        children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
          className: (0, _utils.classJoin)(["flex flex-col px-3 pt-3.5 pb-1 cursor-pointer"]),
          onClick: function onClick() {
            return handleExpand(item.id);
          },
          children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
            className: "flex flex-row items-start",
            children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
              className: "relative",
              children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_radinIcon.RoundedSquare, {
                weight: "fill",
                size: "3xl",
                color: "light-text",
                className: "opacity-10"
              }), (item === null || item === void 0 ? void 0 : item.read) || /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
                className: "absolute -top-1.5",
                children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Badge.Badge, {
                  type: "state",
                  size: ".9xs",
                  className: "!bg-light"
                })
              }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
                className: "absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  ",
                children: item === null || item === void 0 ? void 0 : item.iconType
              })]
            }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
              className: (0, _utils.classJoin)([!item.isCollapsed ? "mb-4" : "overflow-hidden", "flex flex-col flex-1 pr-2.5  "]),
              children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
                className: "font-bold text-xs text-label",
                children: item === null || item === void 0 ? void 0 : item.title
              }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
                className: (0, _utils.classJoin)([item.read ? "text-idle" : "text-label", item.isCollapsed ? "truncate  " : "", "text-xs"]),
                children: item.description
              })]
            })]
          }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
            className: " flex flex-row items-center justify-between ",
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
              className: "text-idle text-.9xs ",
              children: item.dateTime || (0, _utils.toJalaliDay)(new Date()).format("YYYY/MM/DD [ , ساعت] HH:mm")
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
              className: "flex flex-row items-center ",
              children: item.isCollapsed || /*#__PURE__*/(0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
                children: [(item === null || item === void 0 ? void 0 : item.hasConfirm) || /*#__PURE__*/(0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
                  children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Button.Button, {
                    size: "sm",
                    onClick: function onClick(e) {
                      return handleClickConfirm(e, item.id);
                    },
                    className: "!min-w-0 w-14 !bg-filled-bg",
                    children: notificationButtonLabels.submit
                  }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Button.Button, {
                    size: "sm",
                    variant: "text",
                    onClick: function onClick(e) {
                      return handleClickCancel(e, item.id);
                    },
                    className: "!min-w-0 w-14",
                    children: notificationButtonLabels.cancel
                  })]
                }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
                  className: "relative cursor-pointer hover:text-primary",
                  onClick: function onClick(e) {
                    return handleCollapse(e, item.id);
                  },
                  children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_radinIcon.RoundedSquare, {
                    weight: "fill",
                    size: "xl",
                    color: "idle",
                    className: "opacity-40"
                  }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_radinIcon.Chevron, {
                    size: "xs",
                    rotate: "90",
                    className: "absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 "
                  })]
                })]
              })
            })]
          })]
        })
      }, item.id);
    }) :
    /*#__PURE__*/
    // {/* ---------------------------------- No Notification ----------------------------------*/}
    (0, _jsxRuntime.jsx)("div", {
      className: "bg-card-bg bg-appearing/20 rounded mb-1",
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: (0, _utils.classJoin)(["flex flex-col p-3 cursor-pointer"]),
        children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
          className: "flex flex-row items-center",
          children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
            className: "relative",
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_radinIcon.RoundedSquare, {
              weight: "fill",
              size: "3xl",
              color: "light-text",
              className: "opacity-10"
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
              className: "absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  ",
              children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_radinIcon.Check, {
                color: "idle",
                size: "lg"
              })
            })]
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
            className: (0, _utils.classJoin)(["overflow-hidden", "flex flex-col flex-1 pr-2.5  "]),
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
              className: (0, _utils.classJoin)(["text-label", "text-xs"]),
              children: emptyListMessage
            })
          })]
        })
      })
    })
  });
};
var _default = NotificationBody;
exports["default"] = _default;