"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.badgeTypes = exports.badgeStateSizes = exports.badgeSizes = exports.badgeColors = void 0;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
var _utils = require("../../../utils");
var _jsxRuntime = require("react/jsx-runtime");
var _excluded = ["children", "color", "style", "className", "content"],
  _excluded2 = ["color", "style", "size", "className"],
  _excluded3 = ["children", "color", "style", "size", "className"];
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
var badgeStateSizes = {
  ".8xs": "w-1 h-1",
  ".9xs": "w-1.5 h-1.5",
  xs: "w-2.5 h-2.5",
  sm: "w-3 h-3",
  md: "w-3.5 h-3.5",
  lg: "w-4 h-4",
  xl: "w-4.5 h-4.5"
};
exports.badgeStateSizes = badgeStateSizes;
var badgeSizes = {
  ".8xs": "text-.8xs",
  ".9xs": "text-.9xs",
  xs: "text-xs",
  sm: "text-sm",
  md: "text-base",
  lg: "text-lg",
  xl: "text-xl"
};
exports.badgeSizes = badgeSizes;
var badgeColors = {
  primary: "bg-primary bg-opacity-20 text-primary",
  warning: "bg-warning bg-opacity-20 text-warning",
  "warning-black": "bg-warning text-black",
  success: "bg-success bg-opacity-20 text-success",
  prompt: "bg-prompt bg-opacity-20 text-prompt",
  "dark-success": "bg-dark-text bg-opacity-20 text-success",
  "dark-prompt": "bg-dark-text bg-opacity-20 text-prompt",
  disabled: "bg-disabled bg-opacity-20 text-idle",
  terminate: "bg-terminate bg-opacity-20 text-terminate",
  error: "bg-error bg-opacity-20 text-error"
};
exports.badgeColors = badgeColors;
var BadgeComponent = function BadgeComponent(_ref) {
  var children = _ref.children,
    color = _ref.color,
    style = _ref.style,
    className = _ref.className,
    content = _ref.content,
    restProps = (0, _objectWithoutProperties2["default"])(_ref, _excluded);
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("span", _objectSpread(_objectSpread({}, restProps), {}, {
    style: style,
    className: "relative",
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: (0, _utils.classJoin)(["inline-flex items-center justify-center absolute top-1/4 left-full transform -translate-x-1 -translate-y-2/3 px-0.75 rounded-full min-w-3 min-h-3 leading-none whitespace-nowrap font-extrabold text-xs", badgeColors[color], className]),
      children: children
    }), content]
  }));
};
var StateComponent = function StateComponent(_ref2) {
  var color = _ref2.color,
    style = _ref2.style,
    size = _ref2.size,
    className = _ref2.className,
    restProps = (0, _objectWithoutProperties2["default"])(_ref2, _excluded2);
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("span", _objectSpread(_objectSpread({}, restProps), {}, {
    style: style,
    className: (0, _utils.classJoin)(["inline-block relative ml-1", badgeStateSizes[size]]),
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
      className: (0, _utils.classJoin)([badgeColors[color], "absolute w-full h-full rounded-full opacity-75 animate-ping-slow bg-opacity-100", className])
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
      className: (0, _utils.classJoin)([badgeColors[color], "relative block w-full h-full rounded-full bg-opacity-100", className])
    })]
  }));
};
var TagComponent = function TagComponent(_ref3) {
  var children = _ref3.children,
    color = _ref3.color,
    style = _ref3.style,
    size = _ref3.size,
    className = _ref3.className,
    restProps = (0, _objectWithoutProperties2["default"])(_ref3, _excluded3);
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("span", _objectSpread(_objectSpread({}, restProps), {}, {
    style: style,
    className: (0, _utils.classJoin)(["inline-flex items-center justify-center px-1 py-1 leading-none rounded whitespace-nowrap", badgeSizes[size], badgeColors[color], className]),
    children: children
  }));
};
var badgeTypes = {
  tag: TagComponent,
  badge: BadgeComponent,
  state: StateComponent
};
exports.badgeTypes = badgeTypes;