"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
var _antd = require("antd");
var _radinIcon = require("@sadeghi-ehsan/radin-icon");
var _ = require("../../..");
var _utils = require("../../../utils");
var _Badge = require("../Badge");
var _utils2 = require("./utils");
var _jsxRuntime = require("react/jsx-runtime");
var _excluded = ["color", "title", "message", "duration", "hasCloseIcon", "closeIcon", "hasIcon", "icon", "hasCancel", "cancelText", "onCancel", "hasConfirm", "confirmText", "onConfirm", "placement", "className", "subDescription", "key"];
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
var notification = function notification(_ref) {
  var _ref$color = _ref.color,
    color = _ref$color === void 0 ? "primary" : _ref$color,
    title = _ref.title,
    message = _ref.message,
    _ref$duration = _ref.duration,
    duration = _ref$duration === void 0 ? 4.5 : _ref$duration,
    _ref$hasCloseIcon = _ref.hasCloseIcon,
    hasCloseIcon = _ref$hasCloseIcon === void 0 ? true : _ref$hasCloseIcon,
    closeIcon = _ref.closeIcon,
    _ref$hasIcon = _ref.hasIcon,
    hasIcon = _ref$hasIcon === void 0 ? true : _ref$hasIcon,
    icon = _ref.icon,
    hasCancel = _ref.hasCancel,
    _ref$cancelText = _ref.cancelText,
    cancelText = _ref$cancelText === void 0 ? "انصراف" : _ref$cancelText,
    onCancel = _ref.onCancel,
    hasConfirm = _ref.hasConfirm,
    _ref$confirmText = _ref.confirmText,
    confirmText = _ref$confirmText === void 0 ? "تایید" : _ref$confirmText,
    onConfirm = _ref.onConfirm,
    _ref$placement = _ref.placement,
    placement = _ref$placement === void 0 ? "bottomRight" : _ref$placement,
    className = _ref.className,
    subDescription = _ref.subDescription,
    _ref$key = _ref.key,
    key = _ref$key === void 0 ? (0, _utils.randomStr)() : _ref$key,
    restProps = (0, _objectWithoutProperties2["default"])(_ref, _excluded);
  var DefaultIcon = color === "error" ? _radinIcon.Close : _radinIcon.Check;
  function closeNotification() {
    _antd.notification.close(key);
  }
  function handleClickConfirm() {
    onConfirm === null || onConfirm === void 0 ? void 0 : onConfirm(closeNotification);
  }
  function handleClickCancel() {
    onCancel === null || onCancel === void 0 ? void 0 : onCancel(closeNotification);
  }
  _antd.notification.config({
    rtl: true
  });
  _antd.notification.open(_objectSpread({
    key: key,
    duration: duration,
    closeIcon: hasCloseIcon ? /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: "group w-5 h-5 rounded-full bg-filled-bg border-2 border-card-bg flex items-center justify-center",
      children: closeIcon || /*#__PURE__*/(0, _jsxRuntime.jsx)(_radinIcon.Close, {
        size: ".6xs",
        weight: "fill",
        className: "text-idle group-hover:text-white"
      })
    }) : /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {}),
    placement: placement,
    // ---------------------------------- Title ---------------------------------
    message: title && /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      className: "flex items-center space-x-1 rtl:space-x-reverse",
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Badge.Badge, {
        type: "state",
        size: ".9xs",
        color: _utils2.bindBadgeColor[color]
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: "text-card-bg font-bold text-xs",
        children: title
      })]
    }),
    description: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        className: "flex items-start space-x-2 rtl:space-x-reverse",
        children: [hasIcon && /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
          className: "relative ml-2",
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_radinIcon.RoundedSquare, {
            weight: "fill",
            size: "3xl",
            color: "card-bg",
            className: "opacity-60"
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
            className: "absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2",
            children: icon || /*#__PURE__*/(0, _jsxRuntime.jsx)(DefaultIcon, {
              color: color,
              size: "lg"
            })
          })]
        }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
          className: "flex-1",
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
            className: "text-filled-bg text-xs",
            children: message
          }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
            className: "flex justify-between items-center mt-2",
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
              className: "text-disabled text-.9xs",
              children: subDescription !== null && subDescription !== void 0 ? subDescription : (0, _utils.toJalaliDay)(new Date()).format("YYYY/MM/DD [ , ساعت] HH:mm")
            }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
              className: "flex items-center space-x-2 rtl:space-x-reverse",
              children: [hasCancel && /*#__PURE__*/(0, _jsxRuntime.jsx)(_.Button, {
                size: "sm",
                theme: "primary",
                variant: "text",
                className: "!border-none !min-w-14 !rounded-md !py-0 !h-fit !bg-light/60 !text-filled-bg hover:!bg-primary hover:!text-light-text focus:!text-light-text focus:!bg-primary-hover",
                onClick: handleClickCancel,
                children: cancelText
              }), hasConfirm && /*#__PURE__*/(0, _jsxRuntime.jsx)(_.Button, {
                size: "sm",
                theme: "primary",
                className: "!border-none !min-w-14 !rounded-md !py-0 !h-fit !bg-light/60 !text-filled-bg hover:!bg-primary hover:!text-light-text focus:!text-light-text focus:!bg-primary-hover",
                onClick: handleClickConfirm,
                children: confirmText
              })]
            })]
          })]
        })]
      })
    }),
    className: (0, _utils.classJoin)(["sbt-notification", className])
  }, restProps));
};
var _default = notification;
exports["default"] = _default;