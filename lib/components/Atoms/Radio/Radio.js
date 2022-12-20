"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.Radio = void 0;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
var _react = require("react");
var _radinIcon = require("@sadeghi-ehsan/radin-icon");
var _utils = require("../../../utils");
var _utils2 = require("./utils");
var _jsxRuntime = require("react/jsx-runtime");
var _excluded = ["name", "value", "selected", "disabled", "variant", "block", "onChange", "size", "color", "className", "id", "children"];
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
var Radio = /*#__PURE__*/(0, _react.forwardRef)(function (_ref, ref) {
  var _radioColors$color, _radioColors$color2;
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
    restProps = (0, _objectWithoutProperties2["default"])(_ref, _excluded);
  // @ts-ignore
  var isSelected = (0, _utils.isCallable)(selected) ? selected(value, name) : selected;
  var onRadioChange = function onRadioChange(e) {
    if ((0, _utils.isCallable)(onChange)) onChange(value, e.target.checked, name);
  };
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("label", _objectSpread(_objectSpread(_objectSpread({}, restProps), {}, {
    ref: ref,
    className: (0, _utils.classJoin)(["sbt-radio relative", (0, _utils.ifNotEmpty)(block, "flex", "inline-flex"), "items-start text-xs whitespace-pre-wrap", "transition-sbt", (0, _utils.ifNotEmpty)(isSelected, "radio-checked"), (0, _utils.ifEmpty)(disabled, "cursor-pointer"), (0, _utils.ifNotEmpty)(isSelected && !disabled, "text-light-text", (0, _utils.ifNotEmpty)(disabled, "text-disabled", "text-idle")), className])
  }, (0, _utils.ifNotEmpty)(id, {
    htmlFor: id
  }, {})), {}, {
    children: [variant === "circleFill" ? /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
      className: (0, _utils.classJoin)(["radio-shape block rounded-full border ml-1 shrink-0", (0, _utils.ifNotEmpty)(size, _utils2.radioSizes[size]), (0, _utils.ifNotEmpty)(disabled, "border-disabled", (0, _utils.ifNotEmpty)(color && isSelected, (_radioColors$color = _utils2.radioColors[color]) === null || _radioColors$color === void 0 ? void 0 : _radioColors$color.shape, "border-idle")), "transition-sbt"]),
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
        className: (0, _utils.classJoin)(["block w-full h-full rounded-full", "transition-sbt", (0, _utils.ifNotEmpty)(isSelected, (0, _utils.ifNotEmpty)(disabled, "bg-disabled", (0, _utils.ifNotEmpty)(color, (_radioColors$color2 = _utils2.radioColors[color]) === null || _radioColors$color2 === void 0 ? void 0 : _radioColors$color2.bullet, "bg-idle")))])
      })
    }) : /*#__PURE__*/(0, _jsxRuntime.jsx)(_radinIcon.Icon, {
      as: _utils2.SquircleBorderSvg,
      size: size,
      selected: isSelected,
      padding: ["xs", "sm"].includes(size) ? 2 : 3,
      variant: variant,
      color: color,
      className: "ml-1 shrink-0"
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("input", _objectSpread({
      type: "radio",
      checked: isSelected,
      disabled: disabled,
      value: value,
      onChange: onRadioChange,
      className: (0, _utils.classJoin)(["absolute -z-10 invisible opacity-0"])
    }, (0, _utils.ifNotEmpty)(id, {
      id: id
    }, {}))), (0, _utils.ifNotEmpty)(children)]
  }));
});
exports.Radio = Radio;
Radio.defaultProps = {
  color: "primary",
  selected: false,
  disabled: false,
  size: "lg",
  variant: "circleFill"
};
var _default = Radio;
exports["default"] = _default;