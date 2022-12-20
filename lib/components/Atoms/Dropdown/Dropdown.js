"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
var _antd = require("antd");
var _utils = require("../../../utils");
var _utils2 = require("./utils");
var _Menu = _interopRequireDefault(require("./components/Menu"));
var _MenuItem = _interopRequireDefault(require("./components/MenuItem"));
var _Spacer = _interopRequireDefault(require("./components/Spacer"));
var _jsxRuntime = require("react/jsx-runtime");
var _excluded = ["children", "className", "overlay", "variant", "placement"];
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
var Dropdown = function Dropdown(_ref) {
  var children = _ref.children,
    className = _ref.className,
    overlay = _ref.overlay,
    variant = _ref.variant,
    placement = _ref.placement,
    otherProps = (0, _objectWithoutProperties2["default"])(_ref, _excluded);
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_antd.Dropdown, _objectSpread(_objectSpread({
    /* TODO fix and remove comment ts-ignore */
    // @ts-ignore
    overlay: !(0, _utils.empty)(variant) ? /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: _utils2.DropdownClasses[variant],
      children: overlay
    }) : overlay,
    className: className,
    placement: placement
  }, otherProps), {}, {
    children: children
  }));
};
Dropdown.defaultProps = {
  variant: "bordered",
  placement: "bottomLeft"
};
Dropdown.Menu = _Menu["default"];
Dropdown.MenuItem = _MenuItem["default"];
Dropdown.Spacer = _Spacer["default"];
var _default = Dropdown;
exports["default"] = _default;