"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
var _utils = require("../../../utils");
var _FormElementWrapper = require("../FormElementWrapper");
var _jsxRuntime = require("react/jsx-runtime");
var _excluded = ["children", "groupLabel", "error", "disabled", "labelColor", "fieldsetClassName", "legendClassName", "variant", "legendVariant", "fieldsetVariant"];
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
var FieldGroup = function FieldGroup(_ref) {
  var children = _ref.children,
    groupLabel = _ref.groupLabel,
    error = _ref.error,
    disabled = _ref.disabled,
    labelColor = _ref.labelColor,
    fieldsetClassName = _ref.fieldsetClassName,
    legendClassName = _ref.legendClassName,
    variant = _ref.variant,
    legendVariant = _ref.legendVariant,
    fieldsetVariant = _ref.fieldsetVariant,
    otherProps = (0, _objectWithoutProperties2["default"])(_ref, _excluded);
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_FormElementWrapper.FormElementWrapper, _objectSpread(_objectSpread(_objectSpread({
    fieldsetClassName: (0, _utils.classJoin)(["rounded-3.2xl px-6 pt-6 pb-8 h-unset", variant === "none" && "px-0 !ml-0 pt-3", error ? "border-error" : "border-card-border", fieldsetClassName]),
    legendClassName: (0, _utils.classJoin)(["!h-5.5", legendClassName]),
    label: groupLabel,
    labelClassName: (0, _utils.classJoin)(["text-sm", "text-".concat(labelColor)]),
    error: error,
    disabled: disabled
  }, fieldsetVariant && legendVariant ? {
    fieldsetVariant: fieldsetVariant,
    legendVariant: legendVariant
  } : {
    variant: variant
  }), otherProps), {}, {
    children: children
  }));
};
FieldGroup.defaultProps = {
  error: false,
  groupLabel: "",
  legendClassName: "",
  fieldsetClassName: "",
  labelColor: "primary-label",
  variant: "outline"
};
var _default = FieldGroup;
exports["default"] = _default;