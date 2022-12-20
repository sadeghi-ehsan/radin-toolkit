"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.InputDatePicker = void 0;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
var _react = require("react");
var _dayjs2 = _interopRequireDefault(require("dayjs"));
var _radinIcon = require("@sadeghi-ehsan/radin-icon");
var _utils = require("../../../utils");
var _FormElementWrapper = require("../../Atoms/FormElementWrapper");
var _jsxRuntime = require("react/jsx-runtime");
var _excluded = ["value", "calendarProps", "endAdornment", "className", "disabled", "readOnly", "clearable", "legendClassName", "placeholder"];
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
var InputDatePicker = /*#__PURE__*/(0, _react.forwardRef)(function (_ref)
// passedRef
{
  var val = _ref.value,
    calendarProps = _ref.calendarProps,
    endAdornment = _ref.endAdornment,
    className = _ref.className,
    disabled = _ref.disabled,
    readOnly = _ref.readOnly,
    clearable = _ref.clearable,
    legendClassName = _ref.legendClassName,
    placeholder = _ref.placeholder,
    formElementWrapperProps = (0, _objectWithoutProperties2["default"])(_ref, _excluded);
  // const ref = ifNotEmpty(passedRef, passedRef, useRef());
  var _calendarProps$locale = calendarProps.locale,
    locale = _calendarProps$locale === void 0 ? "fa" : _calendarProps$locale,
    timePicker = calendarProps.timePicker;
  var value = !val ? null : !Array.isArray(val) ? [val] : val; // insure always will be array because react-multi-date-picker will return array

  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_FormElementWrapper.FormElementWrapper, _objectSpread(_objectSpread({}, formElementWrapperProps), {}, {
    disabled: disabled,
    clearable: !disabled && !readOnly && clearable,
    allowClear: !(0, _utils.empty)(value) || value === undefined,
    // onClear: () => handleOnChange(undefined),
    className: (0, _utils.classJoin)(["sbt-input", className]),
    legendClassName: (0, _utils.classJoin)(["min-w-fit", legendClassName]),
    childrenClassName: "flex items-center",
    endAdornment: endAdornment !== undefined ? endAdornment : /*#__PURE__*/(0, _jsxRuntime.jsx)(_radinIcon.Calendar, {
      size: "xl",
      color: "idle"
    }),
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      children: (0, _utils.empty)(value) ? placeholder : (value === null || value === void 0 ? void 0 : value.length) > 0 && (value === null || value === void 0 ? void 0 : value.map(function (item, index) {
        var _dayjs, _dayjs$calendar;
        var v = item;
        var date = // @ts-ignore
        (_dayjs = (0, _dayjs2["default"])(v, {
          jalali: locale === "fa"
        })) === null || _dayjs === void 0 ? void 0 : (_dayjs$calendar = _dayjs.calendar(locale === "fa" ? "jalali" : "gregory")
        // @ts-ignore
        ) === null || _dayjs$calendar === void 0 ? void 0 : _dayjs$calendar.locale("fa");
        return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
            className: "sbt-input-date-picker",
            children: [index + 1 !== (value === null || value === void 0 ? void 0 : value.length) && /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
              children: "-"
            }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
              className: "date",
              children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
                children: date.format("YYYY")
              }), /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
                children: date.format("MM")
              }), /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
                children: date.format("DD")
              })]
            }), timePicker && /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
              className: "time",
              children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
                children: date.format("HH")
              }), ":", /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
                children: date.format("mm")
              }), ":", /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
                children: date.format("ss")
              })]
            })]
          })
        }, index);
      }))
    })
  }));
});
exports.InputDatePicker = InputDatePicker;