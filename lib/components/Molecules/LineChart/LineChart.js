"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.LineChart = void 0;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
var _react = require("react");
var _highcharts = _interopRequireDefault(require("highcharts"));
var _highchartsReactOfficial = _interopRequireDefault(require("highcharts-react-official"));
var _lodash = _interopRequireDefault(require("lodash.merge"));
var _utils = require("../../../utils");
var _utils2 = require("./utils");
var _Slider = require("../../Atoms/Slider");
var _jsxRuntime = require("react/jsx-runtime");
var _excluded = ["className", "series", "options", "customChartLib", "customToolTip", "chartTitle", "showSlider", "sliderClassName", "sliderProps"];
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
var LineChart = /*#__PURE__*/(0, _react.forwardRef)(function (_ref, passedRef) {
  var className = _ref.className,
    series = _ref.series,
    options = _ref.options,
    customChartLib = _ref.customChartLib,
    customToolTip = _ref.customToolTip,
    chartTitle = _ref.chartTitle,
    showSlider = _ref.showSlider,
    sliderClassName = _ref.sliderClassName,
    sliderProps = _ref.sliderProps,
    restProps = (0, _objectWithoutProperties2["default"])(_ref, _excluded);
  var chartRef = (0, _utils.ifNotEmpty)(passedRef, passedRef, (0, _react.useRef)(null));
  (0, _utils2.useReflowChart)(chartRef);
  // HighChartBoostModule(Highcharts);

  var handleRange = (0, _utils.debounce)(function (_ref2) {
    var _chartRef$current;
    var _ref3 = (0, _slicedToArray2["default"])(_ref2, 2),
      min = _ref3[0],
      max = _ref3[1];
    var chart = (_chartRef$current = chartRef.current) === null || _chartRef$current === void 0 ? void 0 : _chartRef$current.chart;
    chart.xAxis.forEach(function (axis) {
      axis.setExtremes(min, max);
    });
  }, 250);
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", _objectSpread(_objectSpread({}, restProps), {}, {
    className: (0, _utils.classJoin)(["sbt-lineChart w-full mx-auto", className]),
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_highchartsReactOfficial["default"], {
      highcharts: !(0, _utils.empty)(customChartLib) ? customChartLib(_highcharts["default"]) : _highcharts["default"],
      options: (0, _lodash["default"])((0, _utils2.renderInitialOptions)({
        chartTitle: chartTitle,
        customToolTip: customToolTip,
        series: series
      }), options),
      ref: chartRef
    }), showSlider && /*#__PURE__*/(0, _jsxRuntime.jsx)(_Slider.Slider, _objectSpread({
      className: "ml-4",
      range: true,
      reverse: true,
      onChange: function onChange(val) {
        handleRange(val);
      }
    }, sliderProps))]
  }));
});
exports.LineChart = LineChart;
LineChart.defaultProps = {
  showSlider: false
};
var _default = LineChart;
exports["default"] = _default;