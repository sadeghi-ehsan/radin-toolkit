"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.Checkbox = void 0;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
var _react = require("react");
var _radinIcon = require("@sadeghi-ehsan/radin-icon");
var _utils = require("../../../utils");
var _utils2 = require("./utils");
var _jsxRuntime = require("react/jsx-runtime");
var _excluded = ["name", "value", "selected", "disabled", "variant", "block", "onChange", "size", "color", "className", "id", "children", "readOnly"];
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
var Checkbox = /*#__PURE__*/(0, _react.forwardRef)(function (_ref, ref) {
  var name = _ref.name,
    value = _ref.value,
    selected = _ref.selected,
    disabled = _ref.disabled,
    variant = _ref.variant,
    block = _ref.block,
    onChange = _ref.onChange,
    size = _ref.size,
    color = _ref.color,
    className = _ref.className,
    id = _ref.id,
    children = _ref.children,
    readOnly = _ref.readOnly,
    restProps = (0, _objectWithoutProperties2["default"])(_ref, _excluded);
  // @ts-ignore
  var isSelected = (0, _utils.isCallable)(selected) ? selected(value, name) : selected;
  var onCheckboxChange = function onCheckboxChange(e) {
    if ((0, _utils.isCallable)(onChange)) onChange(value, e.target.checked, name);
  };
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("label", _objectSpread(_objectSpread(_objectSpread({}, restProps), {}, {
    ref: ref,
    className: (0, _utils.classJoin)(["sbt-checkbox relative", (0, _utils.ifEmpty)(disabled, "cursor-pointer"), (0, _utils.ifNotEmpty)(block, "flex", "inline-flex"), "items-center text-sm whitespace-nowrap", "transition-sbt", (0, _utils.ifNotEmpty)(isSelected, "checkbox-checked"), (0, _utils.ifNotEmpty)(disabled, "opacity-50"), (0, _utils.ifNotEmpty)(readOnly, "pointer-events-none"), (0, _utils.ifEmpty)(isSelected, "text-idle", "text-light-text"), className])
  }, (0, _utils.ifNotEmpty)(id, {
    htmlFor: id
  }, {})), {}, {
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_radinIcon.Icon, {
      as: _utils2.SquircleBorderSvg,
      size: size,
      selected: isSelected,
      padding: ["xs", "sm"].includes(size) ? 2 : 3,
      variant: variant
      // @ts-ignore
      ,
      color: color,
      className: "ml-1"
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("input", _objectSpread({
      type: "checkbox",
      checked: isSelected,
      disabled: disabled,
      value: value,
      onChange: onCheckboxChange,
      className: (0, _utils.classJoin)(["absolute -z-10 invisible opacity-0"])
    }, (0, _utils.ifNotEmpty)(id, {
      id: id
    }, {}))), (0, _utils.ifNotEmpty)(children)]
  }));
});
exports.Checkbox = Checkbox;
Checkbox.defaultProps = {
  color: "primary",
  selected: false,
  disabled: false,
  size: "base",
  variant: "fill"
};
var _default = Checkbox;
exports["default"] = _default;