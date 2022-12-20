"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
var _react = require("react");
var _radinIcon = require("@sadeghi-ehsan/radin-icon");
var _Input = require("../Input");
var _Button = require("../../Atoms/Button");
var _utils = require("../../../utils");
var _utils2 = require("./utils");
var _jsxRuntime = require("react/jsx-runtime");
var _excluded = ["counterType", "onChange", "onKeyDown", "name", "min", "max", "value", "negativesInRed", "positivesInGreen", "commaSeparated", "baseInputClassName"];
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
var InputNumber = /*#__PURE__*/(0, _react.forwardRef)(function (_ref, passedRef) {
  var counterType = _ref.counterType,
    onChange = _ref.onChange,
    onKeyDown = _ref.onKeyDown,
    name = _ref.name,
    min = _ref.min,
    max = _ref.max,
    value = _ref.value,
    negativesInRed = _ref.negativesInRed,
    positivesInGreen = _ref.positivesInGreen,
    commaSeparated = _ref.commaSeparated,
    baseInputClassName = _ref.baseInputClassName,
    restProps = (0, _objectWithoutProperties2["default"])(_ref, _excluded);
  var inputValue = commaSeparated ? (0, _utils2.valueToCommaSeparated)(value) : (0, _utils2.getProperValue)(value);
  var changeValue = function changeValue(val) {
    if (min === undefined || val < min) return;
    if (max === undefined || val > max) return;
    onChange(val, name);
  };
  var onInputChange = function onInputChange(val) {
    if (commaSeparated) changeValue(parseFloat(val.replace(/,/g, "")) || null);else changeValue(val);
  };

  /** onClick of counter + or up button */
  var onIncrease = function onIncrease() {
    changeValue(value + 1);
  };

  /** onClick of counter - or down button */
  var onDecrease = function onDecrease() {
    changeValue(value - 1);
  };
  var onInputKeyDown = function onInputKeyDown(e) {
    var val = e.target.value;

    /** checks to delete - when there is only one integer left like -4.
     * with this block, if there is -4 left in the input box and
     * by hitting backspace it will blank the input box
     */
    if (/^-\d$/gm.test(val) && (0, _utils.keyboardEventChecker)(e, "Backspace")) onChange("", name);
    if (commaSeparated) {
      if ((0, _utils.keyboardEventChecker)(e, "ArrowUp")) onIncrease();
      if ((0, _utils.keyboardEventChecker)(e, "ArrowDown")) onDecrease();
    }
    if (typeof onKeyDown === "function") onKeyDown(e);
  };
  var renderEndLabelAdornment = function renderEndLabelAdornment() {
    if (counterType === "plus/minus") {
      return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        className: "flex inputNumberBtn",
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Button.Button, {
          size: "sm",
          onClick: onIncrease,
          className: "min-w-0 ml-2 rounded-lg",
          startIcon: /*#__PURE__*/(0, _jsxRuntime.jsx)(_radinIcon.CurvedPlus, {
            className: "w-3 h-3"
          }),
          disabled: max !== undefined ? value >= max : false
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Button.Button, {
          size: "sm",
          onClick: onDecrease,
          className: "min-w-0 rounded-lg",
          startIcon: /*#__PURE__*/(0, _jsxRuntime.jsx)(_radinIcon.CurvedMinus, {
            className: "w-3 h-3"
          }),
          disabled: min !== undefined ? value <= min : false
        })]
      });
    }
    if (counterType === "up/down") {
      return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        className: "inputNumberBtnChevron flex flex-col justify-between h-full",
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Button.Button, {
          className: "sbt-input-number-chevron mb-0.5",
          size: "sm",
          variant: "text",
          onClick: onIncrease,
          startIcon: /*#__PURE__*/(0, _jsxRuntime.jsx)(_radinIcon.Chevron, {
            rotate: "90",
            className: "w-2 h-2"
          }),
          disabled: max !== undefined ? value >= max : false
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Button.Button, {
          className: "sbt-input-number-chevron mt-0.5",
          size: "sm",
          variant: "text",
          onClick: onDecrease,
          startIcon: /*#__PURE__*/(0, _jsxRuntime.jsx)(_radinIcon.Chevron, {
            rotate: "90",
            flip: "vertical",
            className: "w-2 h-2"
          }),
          disabled: min !== undefined ? value <= min : false
        })]
      });
    }
    return "";
  };
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_Input.Input, _objectSpread(_objectSpread({}, restProps), {}, {
    ref: passedRef,
    min: min,
    max: max,
    value: inputValue,
    noEndDivider: true,
    type: commaSeparated ? "text" : "number",
    childrenClassName: (0, _utils.classJoin)(["text-right appearance-none-all dir-ltr", value && (negativesInRed && value < 0 ? "text-prompt" : positivesInGreen && value > 0 ? "text-success" : ""), baseInputClassName]),
    onChange: onInputChange,
    onKeyDown: onInputKeyDown,
    endAdornmentClassName: counterType === "up/down" ? "inputNumEndAdorn" : "",
    endAdornment: renderEndLabelAdornment()
  }));
});
InputNumber.defaultProps = {
  counterType: "up/down",
  commaSeparated: false
};
var _default = InputNumber;
exports["default"] = _default;