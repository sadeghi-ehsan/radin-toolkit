"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.Badge = void 0;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
var _react = require("react");
var _utils = require("./utils");
var _jsxRuntime = require("react/jsx-runtime");
var _excluded = ["type"];
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
var Badge = /*#__PURE__*/(0, _react.forwardRef)(function (_ref, ref) {
  var type = _ref.type,
    restProps = (0, _objectWithoutProperties2["default"])(_ref, _excluded);
  var RelatedBadgeComponent = _utils.badgeTypes[type];
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(RelatedBadgeComponent, _objectSpread(_objectSpread({}, restProps), {}, {
    ref: ref
  }));
});
exports.Badge = Badge;
Badge.defaultProps = {
  size: "xs",
  color: "primary",
  type: "tag"
};
var _default = Badge;
exports["default"] = _default;