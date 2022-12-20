"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.Popover = void 0;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
var _antd = require("antd");
var _tailwind = require("../../../constants/tailwind");
var _utils = require("../../../utils");
var _jsxRuntime = require("react/jsx-runtime");
var _excluded = ["children", "className", "content", "placement", "backgroundColor", "borderColor", "shadowColor", "overlayInnerStyle"];
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
var Popover = function Popover(_ref) {
  var children = _ref.children,
    className = _ref.className,
    content = _ref.content,
    placement = _ref.placement,
    backgroundColor = _ref.backgroundColor,
    borderColor = _ref.borderColor,
    shadowColor = _ref.shadowColor,
    overlayInnerStyle = _ref.overlayInnerStyle,
    otherProps = (0, _objectWithoutProperties2["default"])(_ref, _excluded);
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_antd.Popover, _objectSpread(_objectSpread({
    content: content,
    placement: placement,
    color: !(0, _utils.empty)(backgroundColor) ? _tailwind.colors[backgroundColor] : undefined,
    overlayClassName: (0, _utils.classJoin)(["sbt-popover", className]),
    overlayInnerStyle: _objectSpread({
      border: "1px solid transparent",
      borderColor: !(0, _utils.empty)(borderColor) ? _tailwind.colors[borderColor] : "transparent",
      borderRadius: "12px",
      "--tw-shadow": "0px 0px 5px ".concat(!(0, _utils.empty)(shadowColor) ? _tailwind.colors[shadowColor] : "transparent")
    }, overlayInnerStyle)
  }, otherProps), {}, {
    children: children
  }));
};
exports.Popover = Popover;
Popover.defaultProps = {
  placement: "bottom",
  backgroundColor: "card-bg",
  borderColor: "primary",
  shadowColor: "primary-focus",
  trigger: ["hover"]
};
var _default = Popover;
exports["default"] = _default;