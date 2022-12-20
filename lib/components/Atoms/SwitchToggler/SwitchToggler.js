"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.SwitchToggler = void 0;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
var _antd = require("antd");
var _react = require("react");
var _tailwind = require("../../../constants/tailwind");
var _jsxRuntime = require("react/jsx-runtime");
var _excluded = ["color", "style", "reverse"];
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
var SwitchToggler = /*#__PURE__*/(0, _react.forwardRef)(function (_ref, ref) {
  var color = _ref.color,
    style = _ref.style,
    reverse = _ref.reverse,
    restProps = (0, _objectWithoutProperties2["default"])(_ref, _excluded);
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_antd.Switch, _objectSpread({
    ref: ref,
    style: _objectSpread({
      backgroundColor: _tailwind.colors[color],
      transform: reverse ? "rotate(180deg)" : ""
    }, style)
  }, restProps));
});
exports.SwitchToggler = SwitchToggler;
SwitchToggler.defaultProps = {
  color: "success",
  disabled: false,
  size: "default",
  reverse: false,
  defaultChecked: false,
  loading: false,
  autoFocus: false,
  checkedChildren: null,
  unCheckedChildren: null
};
var _default = SwitchToggler;
exports["default"] = _default;