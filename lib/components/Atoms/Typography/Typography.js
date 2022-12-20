"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
var _react = require("react");
var _tailwind = require("../../../constants/tailwind");
var _utils = require("../../../utils");
var _utils2 = require("./utils");
var _excluded = ["children", "tag", "variant", "className", "color", "weight"];
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
var Typography = function Typography(_ref) {
  var children = _ref.children,
    tag = _ref.tag,
    variant = _ref.variant,
    className = _ref.className,
    color = _ref.color,
    weight = _ref.weight,
    otherProps = (0, _objectWithoutProperties2["default"])(_ref, _excluded);
  return /*#__PURE__*/(0, _react.createElement)(tag, _objectSpread(_objectSpread({}, otherProps), {}, {
    className: (0, _utils.classJoin)([_utils2.textVariants[variant], _utils2.fontWeights[weight], _tailwind.textColors[color], className])
  }), children);
};
Typography.defaultProps = {
  variant: "body1",
  color: "white",
  tag: "div",
  weight: "regular"
};
var _default = Typography;
exports["default"] = _default;