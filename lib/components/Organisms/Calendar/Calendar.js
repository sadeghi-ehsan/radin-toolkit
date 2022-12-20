"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
var _react = _interopRequireWildcard(require("react"));
var _reactMultiDatePicker = require("react-multi-date-picker");
var _persian = _interopRequireDefault(require("react-date-object/calendars/persian"));
var _gregorian = _interopRequireDefault(require("react-date-object/calendars/gregorian"));
var _persian_fa = _interopRequireDefault(require("react-date-object/locales/persian_fa"));
var _gregorian_en = _interopRequireDefault(require("react-date-object/locales/gregorian_en"));
var _time_picker = _interopRequireDefault(require("react-multi-date-picker/plugins/time_picker"));
var _utils = require("../../../utils");
var _utils2 = require("./utils");
var _jsxRuntime = require("react/jsx-runtime");
var _excluded = ["children", "className", "value", "onChange", "multiple", "locale", "range", "timePicker", "minDate", "maxDate", "onPropsChange", "onFocusedDateChange", "header"];
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
var weekDaysFA = ["ش", "ی", "د", "س", "چ", "پ", "ج"];
var weekDaysEN = ["Sa", "Mo", "Tu", "We", "Th", "Fr", "sa"];
var Calendar = function Calendar(_ref) {
  var children = _ref.children,
    className = _ref.className,
    value = _ref.value,
    onChange = _ref.onChange,
    multiple = _ref.multiple,
    locale = _ref.locale,
    range = _ref.range,
    timePicker = _ref.timePicker,
    minDate = _ref.minDate,
    maxDate = _ref.maxDate,
    onPropsChange = _ref.onPropsChange,
    onFocusedDateChange = _ref.onFocusedDateChange,
    header = _ref.header,
    restProps = (0, _objectWithoutProperties2["default"])(_ref, _excluded);
  var _useState = (0, _react.useState)(null),
    _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
    initialValue = _useState2[0],
    setInitialValue = _useState2[1];
  var handleOnChange = function handleOnChange(dateObject) {
    // returns UTC date string (or array of strings if multi date picker)
    // example of returning value:
    // 2020-02-11T00:00:00.000Z
    function convertDate(d) {
      var _Date;
      return (_Date = new Date((0, _utils.toJalaliDay)(d).toJSON())) === null || _Date === void 0 ? void 0 : _Date.toISOString();
    }
    var dateStrings = Array.isArray(dateObject) ? dateObject.map(function (d) {
      return convertDate(d);
    }) : convertDate(dateObject);
    onChange(dateStrings);
    setInitialValue(dateStrings);
  };
  (0, _react.useEffect)(function () {
    setInitialValue(value);
  }, [value]);
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactMultiDatePicker.Calendar
  // ref={ref}
  , _objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({
    className: (0, _utils.classJoin)(["sbt-calendar-popup", className]),
    value: Array.isArray(initialValue) ? initialValue.map(function (d) {
      return new Date(d);
    }) : new Date(initialValue),
    onChange: handleOnChange,
    multiple: multiple,
    calendar: locale === "fa" ? _persian["default"] : _gregorian["default"],
    locale: locale === "fa" ? _persian_fa["default"] : _gregorian_en["default"],
    weekDays: locale === "fa" ? weekDaysFA : weekDaysEN,
    range: range,
    shadow: false,
    arrow: false,
    plugins: [].concat((0, _toConsumableArray2["default"])((0, _utils.ifNotEmpty)(header, [/*#__PURE__*/(0, _jsxRuntime.jsx)(_utils2.RenderHeader, {
      position: "top",
      header: header
    }, "header")], [])), (0, _toConsumableArray2["default"])((0, _utils.ifNotEmpty)(timePicker, [/*#__PURE__*/(0, _jsxRuntime.jsx)(_time_picker["default"], {
      position: "bottom"
    }, "TimePicker")], [])))
  }, (0, _utils.ifNotEmpty)(minDate, {
    minDate: minDate
  }, {})), (0, _utils.ifNotEmpty)(maxDate, {
    maxDate: maxDate
  }, {})), (0, _utils.ifNotEmpty)(onPropsChange, {
    onPropsChange: onPropsChange
  }, {})), (0, _utils.ifNotEmpty)(onFocusedDateChange, {
    onFocusedDateChange: onFocusedDateChange
  }, {})), {}, {
    format: timePicker ? "YYYY/MM/DD HH:mm:ss" : "YYYY/MM/DD",
    renderButton: function renderButton(direction, handleClick) {
      return (0, _utils2.renderButton)({
        direction: direction,
        handleClick: handleClick,
        locale: locale
      });
    }
  }, restProps), {}, {
    children: children
  }));
};
Calendar.defaultProps = {
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
};
var _default = Calendar;
exports["default"] = _default;