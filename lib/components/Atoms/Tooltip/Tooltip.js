"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.Tooltip = void 0;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
var _antd = require("antd");
var _tailwind = require("../../../constants/tailwind");
var _utils = require("../../../utils");
var _utils2 = require("./utils");
var _jsxRuntime = require("react/jsx-runtime");
var _excluded = ["children", "style", "className", "backgroundColor", "borderColor", "overlayInnerStyle", "verticalLine", "title", "size"];
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
var Tooltip = function Tooltip(_ref) {
  var children = _ref.children,
    style = _ref.style,
    className = _ref.className,
    backgroundColor = _ref.backgroundColor,
    borderColor = _ref.borderColor,
    overlayInnerStyle = _ref.overlayInnerStyle,
    verticalLine = _ref.verticalLine,
    title = _ref.title,
    size = _ref.size,
    restProps = (0, _objectWithoutProperties2["default"])(_ref, _excluded);
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_antd.Tooltip, _objectSpread(_objectSpread({
    color: _tailwind.colors[backgroundColor],
    overlayInnerStyle: _objectSpread(_objectSpread(_objectSpread({
      borderColor: borderColor,
      border: "1px solid ".concat(_tailwind.colors[borderColor])
    }, !(0, _utils.empty)(verticalLine) && verticalLine === "right" && {
      paddingRight: "14px"
    }), !(0, _utils.empty)(verticalLine) && verticalLine === "left" && {
      paddingLeft: "14px"
    }), {}, {
      paddingTop: _utils2.sizes[size],
      paddingBottom: _utils2.sizes[size]
    }, overlayInnerStyle),
    title: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
      children: [!(0, _utils.empty)(verticalLine) && /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: (0, _utils.classJoin)(["absolute w-px top-1.5 bottom-1.5", verticalLine === "right" ? "right-2" : "left-2", borderColor === "primary-border" ? "bg-primary" : _tailwind.bgColors[borderColor]])
      }), title]
    })
  }, restProps), {}, {
    children: children
  }));
};
exports.Tooltip = Tooltip;
Tooltip.defaultProps = {
  backgroundColor: "main-bg",
  borderColor: "primary-border",
  arrowPointAtCenter: true,
  defaultVisible: false,
  placement: "top",
  trigger: "hover",
  verticalLine: "right",
  size: "md"
};
var _default = Tooltip;
exports["default"] = _default;