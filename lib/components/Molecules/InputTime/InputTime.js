"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
var _react = require("react");
var _Switch = require("../../Atoms/Switch");
var _FormElementWrapper = require("../../Atoms/FormElementWrapper");
var _utils = require("../../../utils");
var _utils2 = require("./utils");
var _jsxRuntime = require("react/jsx-runtime");
var _excluded = ["groupLabel", "className", "onChange", "value", "name", "disabled", "readOnly", "fieldsetClassName", "fieldGroupVariant", "inputVariant", "switchClasses", "error", "required", "disableHourSelection", "hourLabel", "disableMinuteSelection", "minuteLabel", "disableSecondSelection", "secondLabel"];
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
var InputTime = /*#__PURE__*/(0, _react.forwardRef)(function (_ref) {
  var groupLabel = _ref.groupLabel,
    className = _ref.className,
    onChange = _ref.onChange,
    value = _ref.value,
    name = _ref.name,
    disabled = _ref.disabled,
    readOnly = _ref.readOnly,
    fieldsetClassName = _ref.fieldsetClassName,
    fieldGroupVariant = _ref.fieldGroupVariant,
    inputVariant = _ref.inputVariant,
    _ref$switchClasses = _ref.switchClasses,
    outerClassName = _ref$switchClasses.outerClassName,
    innerClassName = _ref$switchClasses.innerClassName,
    labelClassName = _ref$switchClasses.labelClassName,
    error = _ref.error,
    required = _ref.required,
    disableHourSelection = _ref.disableHourSelection,
    hourLabel = _ref.hourLabel,
    disableMinuteSelection = _ref.disableMinuteSelection,
    minuteLabel = _ref.minuteLabel,
    disableSecondSelection = _ref.disableSecondSelection,
    secondLabel = _ref.secondLabel,
    restProps = (0, _objectWithoutProperties2["default"])(_ref, _excluded);
  var inputsContainerRef = (0, _react.useRef)();
  var _ref2 = (0, _utils.isNumber)(value) ? (0, _utils.convertMsToTime)(value) : [null, null, null, null],
    _ref3 = (0, _slicedToArray2["default"])(_ref2, 4),
    hours = _ref3[0],
    minutes = _ref3[1],
    seconds = _ref3[2],
    ampm = _ref3[3];

  /**
   * Convert am/pm time to milliseconds
   *
   * @param h - am/pm hours
   * @param m - minutes
   * @param s - seconds
   */
  var onInputTimesChange = function onInputTimesChange(h, m, s) {
    var newValue;
    if (ampm === "am" && h === 12) newValue = (m * 60 + s) * 1000;else if (ampm === "pm" && h >= 1 && h <= 11) newValue = (((h + 12) * 60 + m) * 60 + s) * 1000;else newValue = ((h * 60 + m) * 60 + s) * 1000;
    onChange(newValue);
  };

  /**
   * Check if am/pm is changed, and change value properly based on component milliseconds value and new am/pm value
   *
   * @param newAMPMValue - new changed am/pm value
   */
  var onAMPMChange = function onAMPMChange(newAMPMValue) {
    if (newAMPMValue === ampm) return;
    if (!(0, _utils.isNumber)(value)) {
      if (newAMPMValue === "am") onChange(0);else onChange(43200000);
      return;
    }
    if (newAMPMValue === "am") onChange(value - 43200000);else onChange(value + 43200000);
  };

  /**
   * Paste event handler which decide if provided information on clipboard is suited for Input or not
   *
   * @param event - The event providing information related to modification of the clipboard
   */
  var onInputPaste = function onInputPaste(event) {
    var paste = (event.clipboardData || window.clipboardData).getData("text");
    var splitedPaste = paste.split(":").map(function (p) {
      return parseInt(p, 10);
    });
    if (splitedPaste.length === 3) {
      event.preventDefault();
      var h = splitedPaste[0] >= 1 && splitedPaste[0] <= 24 ? splitedPaste[0] : 12;
      var m = splitedPaste[1] >= 0 && splitedPaste[1] <= 59 ? splitedPaste[1] : 0;
      var s = splitedPaste[2] >= 0 && splitedPaste[2] <= 59 ? splitedPaste[2] : 0;
      onInputTimesChange(h, m, s);
    }
  };

  /**
   * Return Input element by provided index
   *
   * @param inputIndex - The Index of input
   * @returns - Return Input element by provided index
   */
  var getInputByIndex = function getInputByIndex(inputIndex) {
    return inputsContainerRef.current.querySelectorAll("input")[inputIndex];
  };

  /**
   * Focus and select on current field
   *
   * @param currentInputIndex - The index of current input element
   */
  var focusField = function focusField(currentInputIndex) {
    if (inputsContainerRef.current && currentInputIndex >= 0 && currentInputIndex <= 5) {
      getInputByIndex(currentInputIndex).select();
    }
  };

  /**
   * Common props between InputTimeGroups
   */
  var inputTimeGroupProps = {
    inputVariant: inputVariant,
    disabled: disabled,
    error: error,
    required: required,
    onPaste: onInputPaste,
    focusField: focusField
  };
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_FormElementWrapper.FormElementWrapper, _objectSpread(_objectSpread({
    className: className,
    label: groupLabel,
    childrenClassName: "!p-0",
    fieldsetClassName: (0, _utils.classJoin)(["!h-auto rounded-3.2xl px-6 pt-6 pb-8 h-unset", fieldsetClassName]),
    legendClassName: "!h-5 text-sm !leading-normal",
    variant: fieldGroupVariant,
    disabled: disabled,
    error: error,
    required: required
  }, restProps), {}, {
    children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      className: "flex flex-row",
      children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        ref: inputsContainerRef,
        className: "flex dir-ltr",
        children: [!disableHourSelection && /*#__PURE__*/(0, _jsxRuntime.jsx)(_utils2.InputTimeGroup, _objectSpread({
          inputGroupIndex: 0,
          groupLabel: hourLabel,
          value: hours,
          onChange: function onChange(v) {
            onInputTimesChange(v, minutes, seconds);
          },
          min: 1,
          max: 12
        }, inputTimeGroupProps)), !disableHourSelection && !disableMinuteSelection || !disableHourSelection && !disableSecondSelection ? /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          className: "mx-2 mt-5.5",
          children: ":"
        }) : null, !disableMinuteSelection && /*#__PURE__*/(0, _jsxRuntime.jsx)(_utils2.InputTimeGroup, _objectSpread({
          inputGroupIndex: 1,
          groupLabel: minuteLabel,
          value: minutes,
          onChange: function onChange(v) {
            onInputTimesChange(hours, v, seconds);
          },
          min: 0,
          max: 59
        }, inputTimeGroupProps)), !disableMinuteSelection && !disableSecondSelection ? /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          className: "mx-2 mt-5",
          children: ":"
        }) : null, !disableSecondSelection && /*#__PURE__*/(0, _jsxRuntime.jsx)(_utils2.InputTimeGroup, _objectSpread({
          inputGroupIndex: 2,
          groupLabel: secondLabel,
          value: seconds,
          onChange: function onChange(v) {
            onInputTimesChange(hours, minutes, v);
          },
          min: 0,
          max: 59
        }, inputTimeGroupProps))]
      }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_Switch.Switch, {
        name: "AM_PM",
        value: ampm,
        onChange: onAMPMChange,
        vertical: true,
        outerClassName: (0, _utils.classJoin)(["rounded-lg h-fit mt-auto mr-2", outerClassName]),
        labelClassName: (0, _utils.classJoin)(["text-xs leading-4 !px-2 py-0 pt-0.75", labelClassName]),
        innerClassName: (0, _utils.classJoin)(["rounded", innerClassName]),
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Switch.Switch.Option, {
          value: "am",
          children: "AM"
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Switch.Switch.Option, {
          value: "pm",
          children: "PM"
        })]
      })]
    })
  }));
});
InputTime.defaultProps = {
  disableHourSelection: false,
  hourLabel: "H",
  disableMinuteSelection: false,
  minuteLabel: "M",
  disableSecondSelection: false,
  secondLabel: "S",
  switchClasses: {
    labelClassName: "",
    innerClassName: "",
    outerClassName: ""
  }
};
var _default = InputTime;
exports["default"] = _default;