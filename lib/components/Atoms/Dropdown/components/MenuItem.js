"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
var _react = _interopRequireDefault(require("react"));
var _utils = require("../../../../utils");
var _jsxRuntime = require("react/jsx-runtime");
var _excluded = ["children", "className", "active", "disabled"];
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
var MenuItem = function MenuItem(_ref) {
  var children = _ref.children,
    className = _ref.className,
    active = _ref.active,
    disabled = _ref.disabled,
    otherProps = (0, _objectWithoutProperties2["default"])(_ref, _excluded);
  var cls = (0, _utils.classJoin)(["p-1.5 text-white rounded transition cursor-pointer block", !(active && disabled) ? "hover:text-primary hover:bg-primary hover:bg-opacity-10" : "", active && disabled ? "text-primary-shadow bg-primary bg-opacity-10 pointer-events-none" : disabled ? "text-disabled bg-transparent pointer-events-none" : active ? "text-primary bg-primary bg-opacity-10" : "", className]);
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_jsxRuntime.Fragment, {
    children: (0, _utils.modifyReactChildren)(children, _objectSpread({
      className: cls
    }, otherProps), function (val) {
      return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", _objectSpread(_objectSpread({
        className: cls
      }, otherProps), {}, {
        children: val
      }));
    })
  });
};
MenuItem.defaultProps = {
  className: ""
};
var _default = MenuItem;
exports["default"] = _default;