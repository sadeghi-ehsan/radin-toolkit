"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
var _react = require("react");
var _radinIcon = require("@sadeghi-ehsan/radin-icon");
var _utils = require("../../../utils");
var _Input = require("../Input");
var _jsxRuntime = require("react/jsx-runtime");
var _excluded = ["value", "align"];
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
var EyeView = function EyeView(_ref) {
  var showPassword = _ref.showPassword,
    setShowPassword = _ref.setShowPassword;
  var Icon = showPassword ? _radinIcon.Eye : _radinIcon.EyeSlash;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(Icon, {
    size: "xl",
    color: "current",
    className: "cursor-pointer text-idle hover:text-primary",
    onClick: function onClick() {
      return setShowPassword(function (prev) {
        return !prev;
      });
    }
  });
};
var InputPassword = function InputPassword(_ref2) {
  var value = _ref2.value,
    align = _ref2.align,
    restProps = (0, _objectWithoutProperties2["default"])(_ref2, _excluded);
  var _useState = (0, _react.useState)(false),
    _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
    showPassword = _useState2[0],
    setShowPassword = _useState2[1];
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_Input.Input, _objectSpread(_objectSpread({}, restProps), {}, {
    type: showPassword ? "text" : "password",
    startAdornment: /*#__PURE__*/(0, _jsxRuntime.jsx)(_radinIcon.Lock, {
      size: "xl",
      color: "idle"
    }),
    endAdornment: /*#__PURE__*/(0, _jsxRuntime.jsx)(EyeView, {
      showPassword: showPassword,
      setShowPassword: setShowPassword
    }),
    align: align || (0, _utils.ifNotEmpty)(value, "left", "right"),
    value: value
  }));
};
InputPassword.defaultProps = {};
var _default = InputPassword;
exports["default"] = _default;