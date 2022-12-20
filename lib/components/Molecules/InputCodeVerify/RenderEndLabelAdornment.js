"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _radinIcon = require("@sadeghi-ehsan/radin-icon");
var _Button = require("../../Atoms/Button");
var _utils = require("../../../utils");
var _Loading = require("../../Atoms/Loading");
var _jsxRuntime = require("react/jsx-runtime");
var RenderEndLabelAdornment = function RenderEndLabelAdornment(_ref) {
  var isLoading = _ref.isLoading,
    disabled = _ref.disabled,
    onResend = _ref.onResend,
    handleResend = _ref.handleResend,
    counter = _ref.counter,
    resendBtnText = _ref.resendBtnText;
  if (isLoading) {
    return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: "-mt-10",
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Loading.Loading, {
        className: "w-5 h-5"
      })
    });
  }
  if (disabled || (0, _utils.empty)(onResend) || !(0, _utils.isCallable)(onResend)) {
    return null;
  }
  var minutes = Math.floor(counter / 60);
  var remainingSeconds = counter % 60;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
    className: "-mt-12",
    children: counter === 0 ? /*#__PURE__*/(0, _jsxRuntime.jsx)(_Button.Button, {
      className: "mt-1 -ml-2 group",
      onClick: handleResend,
      shape: "round",
      startIcon: /*#__PURE__*/(0, _jsxRuntime.jsx)(_radinIcon.Refresh, {
        color: "current",
        className: "self-center !text-success group-hover:!text-error"
      }),
      theme: "error",
      variant: "text",
      size: "sm",
      children: resendBtnText
    }) : /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      className: "flex items-center py-2 space-x-2 space-x-reverse",
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_radinIcon.Time, {
        color: "white"
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        children: "".concat(minutes < 10 ? "0" : "").concat(minutes, ":").concat(remainingSeconds < 10 ? "0" : "").concat(remainingSeconds)
      })]
    })
  });
};
var _default = RenderEndLabelAdornment;
exports["default"] = _default;