"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.SwitchOption = void 0;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
var _react = require("react");
var _utils = require("../../../utils");
var _jsxRuntime = require("react/jsx-runtime");
var _excluded = ["name", "value", "checked", "children", "labelClassName", "noLabelStyle", "onChange", "bgSlider", "disabled", "isOptionDisabled", "defaultValue"];
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
var SwitchOption = function SwitchOption(_ref) {
  var name = _ref.name,
    value = _ref.value,
    checked = _ref.checked,
    children = _ref.children,
    labelClassName = _ref.labelClassName,
    noLabelStyle = _ref.noLabelStyle,
    onChange = _ref.onChange,
    bgSlider = _ref.bgSlider,
    disabled = _ref.disabled,
    isOptionDisabled = _ref.isOptionDisabled,
    defaultValue = _ref.defaultValue,
    otherProps = (0, _objectWithoutProperties2["default"])(_ref, _excluded);
  var isSelected = checked === value || value === defaultValue;
  var modifiedDisabled = disabled || isOptionDisabled;
  var labelRef = (0, _react.useRef)();
  (0, _react.useEffect)(function () {
    if (isSelected) {
      setTimeout(function () {
        onChange === null || onChange === void 0 ? void 0 : onChange(value, labelRef);
      }, 10);
    }
  }, [isSelected]);
  var onInputChange = function onInputChange(e) {
    if ((0, _utils.isCallable)(onChange)) {
      onChange(e.target.value, labelRef);
    }
  };
  var generatedId = "".concat(name, "-").concat(value || "nv");
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("input", _objectSpread(_objectSpread({}, otherProps), {}, {
      type: "radio",
      name: name,
      value: value,
      checked: isSelected,
      defaultChecked: isSelected,
      disabled: modifiedDisabled,
      id: generatedId,
      className: "absolute invisible -z-10",
      onChange: onInputChange
    })), /*#__PURE__*/(0, _jsxRuntime.jsx)("label", _objectSpread(_objectSpread({}, otherProps), {}, {
      ref: labelRef,
      htmlFor: generatedId,
      className: (0, _utils.classJoin)(["text-light-text", noLabelStyle ? "" : "text-sm px-3.5 pt-1.2", "transition-sbt w-full text-center whitespace-nowrap z-10", modifiedDisabled ? "text-opacity-20" : "cursor-pointer", isSelected && !modifiedDisabled ? "text-card-bg" : "", labelClassName]),
      children: children
    }))]
  });
};
exports.SwitchOption = SwitchOption;
SwitchOption.defaultProps = {
  disabled: false,
  noLabelStyle: false
};
var _default = SwitchOption;
exports["default"] = _default;