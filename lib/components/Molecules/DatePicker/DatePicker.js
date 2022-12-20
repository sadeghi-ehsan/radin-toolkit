"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.DatePicker = void 0;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
var _react = require("react");
var _utils = require("./utils");
var _Popover = require("../../Atoms/Popover");
var _Calendar = require("../../Organisms/Calendar");
var _jsxRuntime = require("react/jsx-runtime");
var _excluded = ["onChange", "value", "calendarProps", "popOverProps", "element"];
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
var DatePicker = /*#__PURE__*/(0, _react.forwardRef)(function (_ref, ref) {
  var onChange = _ref.onChange,
    value = _ref.value,
    calendarProps = _ref.calendarProps,
    popOverProps = _ref.popOverProps,
    element = _ref.element,
    formElementWrapperProps = (0, _objectWithoutProperties2["default"])(_ref, _excluded);
  var _useState = (0, _react.useState)(null),
    _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
    initialValue = _useState2[0],
    setInitialValue = _useState2[1];
  var handleOnChange = function handleOnChange(v) {
    onChange(v);
    setInitialValue(v);
  };
  (0, _react.useEffect)(function () {
    try {
      setInitialValue(Array.isArray(value) ? value.map(function (d) {
        return new Date(d).toISOString();
      }) : new Date(value).toISOString());
    } catch (error) {
      console.error("invalid value");
    }
  }, [value]);
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_Popover.Popover, _objectSpread(_objectSpread({
    className: "p-0",
    content: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Calendar.Calendar, _objectSpread(_objectSpread({
      ref: ref,
      value: initialValue,
      onChange: function onChange(v) {
        return handleOnChange(v);
      }
    }, calendarProps), {}, {
      children: calendarProps === null || calendarProps === void 0 ? void 0 : calendarProps.children
    }))
  }, popOverProps), {}, {
    children: element ? typeof element === "function" ? element({
      value: initialValue
    }) : /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      children: element
    }) : /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_utils.InputDatePicker, _objectSpread({
        calendarProps: calendarProps,
        value: initialValue
      }, formElementWrapperProps))
    })
  }));
});
exports.DatePicker = DatePicker;
DatePicker.defaultProps = {
  calendarProps: {
    multiple: false,
    locale: "fa",
    range: false,
    timePicker: false,
    showOtherDays: false,
    disableYearPicker: false,
    disableMonthPicker: false,
    disableDayPicker: false,
    hideMonth: false,
    hideYear: false
  },
  placeholder: "تاریخ"
};
var _default = DatePicker;
exports["default"] = _default;