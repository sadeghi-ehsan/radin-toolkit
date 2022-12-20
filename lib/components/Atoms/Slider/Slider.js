"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.Slider = void 0;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
var _react = require("react");
var _antd = require("antd");
var _radinIcon = require("@sadeghi-ehsan/radin-icon");
var _utils = require("../../../utils");
var _Typography = require("../Typography");
var _jsxRuntime = require("react/jsx-runtime");
var _excluded = ["color", "marks", "step", "centerLabel", "range", "verified", "className", "onChange", "labelClassName", "disableMarks"];
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
var Slider = /*#__PURE__*/(0, _react.forwardRef)(function (_ref, ref) {
  var color = _ref.color,
    marks = _ref.marks,
    step = _ref.step,
    centerLabel = _ref.centerLabel,
    range = _ref.range,
    verified = _ref.verified,
    className = _ref.className,
    onChange = _ref.onChange,
    labelClassName = _ref.labelClassName,
    disableMarks = _ref.disableMarks,
    otherProps = (0, _objectWithoutProperties2["default"])(_ref, _excluded);
  var reverse = otherProps.reverse,
    tipFormatter = otherProps.tipFormatter,
    defaultValue = otherProps.defaultValue;
  var _useState = (0, _react.useState)(step),
    _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
    sliderStep = _useState2[0],
    setSliderStep = _useState2[1];
  var _useState3 = (0, _react.useState)(null),
    _useState4 = (0, _slicedToArray2["default"])(_useState3, 2),
    modifiedMarks = _useState4[0],
    setModifiedMarks = _useState4[1];
  var _useState5 = (0, _react.useState)(defaultValue),
    _useState6 = (0, _slicedToArray2["default"])(_useState5, 2),
    selected = _useState6[0],
    setSelected = _useState6[1];
  var handleChange = function handleChange(e) {
    if (disableMarks) setSelected(e);
    if (onChange) onChange(e);
  };
  (0, _react.useEffect)(function () {
    var marksObj = {};
    var sortedKeys = marks ? Object.keys(marks).map(function (key) {
      return Number(key);
    }).sort(function (aa, bb) {
      return aa - bb;
    }) : typeof defaultValue !== "number" ? defaultValue : [];
    sortedKeys.forEach(function (point, key) {
      var pointValue = marks !== null && marks !== void 0 && marks[point] ? marks === null || marks === void 0 ? void 0 : marks[point] : typeof selected !== "number" && selected.includes(point) ? tipFormatter ? tipFormatter(point) : point : "";
      var specificStep;
      if (!(0, _utils.isString)(pointValue) && !(0, _utils.isNumber)(pointValue) && !(0, _utils.isArray)(pointValue)) {
        specificStep = (0, _typeof2["default"])(pointValue) === "object" ? pointValue === null || pointValue === void 0 ? void 0 : pointValue.step : null;
        if (sliderStep && specificStep) {
          setSliderStep(null);
        }
      } else {
        specificStep = step;
      }
      marksObj[point] = {
        label: /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
          children: [((0, _typeof2["default"])(pointValue) === "object" ? pointValue === null || pointValue === void 0 ? void 0 : pointValue.label : pointValue) && /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
            className: "h-2 w-px border-r border-solid border-primary mt-1.5"
          }), (!(0, _utils.empty)(point) || point === 0) && /*#__PURE__*/(0, _jsxRuntime.jsx)(_Typography.Typography, {
            className: (0, _utils.classJoin)(["whitespace-nowrap", labelClassName, centerLabel ? reverse ? "-translate-x-2/4" : "translate-x-2/4" : ""]),
            color: "idle",
            children: (0, _typeof2["default"])(pointValue) === "object" ? pointValue === null || pointValue === void 0 ? void 0 : pointValue.label : pointValue
          })]
        })
      };
      var currentPoint = point + specificStep;
      while (currentPoint < sortedKeys[key + 1]) {
        marksObj[currentPoint] = {
          label: !disableMarks || currentPoint === selected || typeof selected !== "number" && (selected === null || selected === void 0 ? void 0 : selected.indexOf(currentPoint)) > -1 ? /*#__PURE__*/(0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
              className: "h-2 w-px border-r border-solid border-appearing mt-1.5"
            }), disableMarks && /*#__PURE__*/(0, _jsxRuntime.jsx)(_Typography.Typography, {
              className: (0, _utils.classJoin)(["whitespace-nowrap", labelClassName, centerLabel ? reverse ? "-translate-x-2/4" : "translate-x-2/4" : ""]),
              color: "idle",
              children: tipFormatter ? tipFormatter(currentPoint) : currentPoint
            })]
          }) : null
        };
        currentPoint += Number(specificStep);
      }
    });
    setModifiedMarks(marksObj);
  }, [marks, selected]);
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    className: "flex",
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_antd.Slider, _objectSpread({}, _objectSpread(_objectSpread({}, otherProps), {}, {
      ref: ref,
      className: (0, _utils.classJoin)(["sbt-slider", color, range ? "range" : "", className]),
      step: step || null,
      onChange: handleChange,
      /* getTooltipPopupContainer should be here to be found by the slider handle */
      getTooltipPopupContainer: function getTooltipPopupContainer(el) {
        return el;
      },
      marks: modifiedMarks,
      range: range
    }))), verified ? /*#__PURE__*/(0, _jsxRuntime.jsx)(_radinIcon.Check, {
      color: "success",
      size: "lg",
      className: "mr-8 -mt-1"
    }) : verified === false ? /*#__PURE__*/(0, _jsxRuntime.jsx)(_radinIcon.Error, {
      color: "error",
      size: "lg",
      className: "mr-8 -mt-1"
    }) : null]
  });
});
exports.Slider = Slider;
Slider.defaultProps = {
  color: "primary",
  // marks: {},
  range: false,
  tooltipVisible: undefined,
  centerLabel: true,
  onChange: undefined
};
var _default = Slider;
exports["default"] = _default;