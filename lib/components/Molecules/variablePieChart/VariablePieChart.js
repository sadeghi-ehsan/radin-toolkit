"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.VariablePieChart = void 0;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
var _react = require("react");
var _highcharts = _interopRequireDefault(require("highcharts"));
var _highchartsReactOfficial = _interopRequireDefault(require("highcharts-react-official"));
var _variablePie = _interopRequireDefault(require("highcharts/modules/variable-pie.js"));
var _lodash = _interopRequireDefault(require("lodash.merge"));
var _utils = require("../../../utils");
var _tailwind = require("../../../constants/tailwind");
var _utils2 = require("./utils");
var _jsxRuntime = require("react/jsx-runtime");
var _excluded = ["className", "data", "options", "initialCenterText"];
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
var VariablePieChart = function VariablePieChart(_ref) {
  var className = _ref.className,
    data = _ref.data,
    options = _ref.options,
    initialCenterText = _ref.initialCenterText,
    restProps = (0, _objectWithoutProperties2["default"])(_ref, _excluded);
  (0, _variablePie["default"])(_highcharts["default"]);
  var _useState = (0, _react.useState)(null),
    _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
    hoveredItem = _useState2[0],
    setHoveredItem = _useState2[1];
  var chartRef = (0, _react.useRef)(null);
  var loadingRef = (0, _react.useRef)(0);
  var renderInitialOptions = function renderInitialOptions() {
    return {
      chart: {
        backgroundColor: "transparent",
        type: "variablepie",
        marginTop: 0,
        spacingTop: 0,
        height: 250
      },
      title: {
        text: (0, _utils2.charTitle)(initialCenterText, hoveredItem, data),
        useHTML: true,
        y: 114
      },
      legend: {
        enabled: false
      },
      tooltip: {
        enabled: false
      },
      credits: {
        enabled: false
      },
      plotOptions: {
        variablepie: {
          borderWidth: 4,
          borderColor: _tailwind.colors["card-bg"],
          allowPointSelect: true,
          slicedOffset: 3,
          cursor: "pointer",
          dataLabels: {
            enabled: false
          },
          showInLegend: true
        }
      },
      series: [{
        minPointSize: 30,
        // zMin: 5,
        // zMax: 10,
        name: "",
        colorByPoint: true,
        innerSize: "20%",
        states: {
          select: {
            borderColor: hoveredItem === null || hoveredItem === void 0 ? void 0 : hoveredItem.color
          }
        },
        point: {
          events: {
            mouseOver: function mouseOver() {
              var item = this;
              if (loadingRef.current > 2) {
                var _chartRef$current, _chartRef$current$cha, _chartRef$current$cha2, _chartRef$current$cha3, _chartRef$current$cha4;
                chartRef === null || chartRef === void 0 ? void 0 : (_chartRef$current = chartRef.current) === null || _chartRef$current === void 0 ? void 0 : (_chartRef$current$cha = _chartRef$current.chart) === null || _chartRef$current$cha === void 0 ? void 0 : (_chartRef$current$cha2 = _chartRef$current$cha.series[0]) === null || _chartRef$current$cha2 === void 0 ? void 0 : (_chartRef$current$cha3 = _chartRef$current$cha2.points) === null || _chartRef$current$cha3 === void 0 ? void 0 : (_chartRef$current$cha4 = _chartRef$current$cha3[item === null || item === void 0 ? void 0 : item.x]) === null || _chartRef$current$cha4 === void 0 ? void 0 : _chartRef$current$cha4.select(true);
                setHoveredItem({
                  value: item.y,
                  name: item.name,
                  color: item === null || item === void 0 ? void 0 : item.color
                });
              } else {
                loadingRef.current++;
              }
            },
            mouseOut: function mouseOut() {
              var _chartRef$current2, _chartRef$current2$ch, _chartRef$current2$ch2, _chartRef$current2$ch3, _chartRef$current2$ch4;
              var item = this;
              chartRef === null || chartRef === void 0 ? void 0 : (_chartRef$current2 = chartRef.current) === null || _chartRef$current2 === void 0 ? void 0 : (_chartRef$current2$ch = _chartRef$current2.chart) === null || _chartRef$current2$ch === void 0 ? void 0 : (_chartRef$current2$ch2 = _chartRef$current2$ch.series[0]) === null || _chartRef$current2$ch2 === void 0 ? void 0 : (_chartRef$current2$ch3 = _chartRef$current2$ch2.points) === null || _chartRef$current2$ch3 === void 0 ? void 0 : (_chartRef$current2$ch4 = _chartRef$current2$ch3[item === null || item === void 0 ? void 0 : item.x]) === null || _chartRef$current2$ch4 === void 0 ? void 0 : _chartRef$current2$ch4.select(false);
              setHoveredItem(null);
            }
          }
        },
        events: {
          mouseOut: function mouseOut() {
            var chart = this.chart;
            if (chart.lbl) {
              chart.lbl.hide();
            }
          }
        },
        data: data
      }]
    };
  };
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
    className: (0, _utils.classJoin)(["sbt-variablePieChart mx-auto", className]),
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_highchartsReactOfficial["default"], _objectSpread(_objectSpread({}, restProps), {}, {
      highcharts: _highcharts["default"],
      options: (0, _lodash["default"])(renderInitialOptions(), options),
      ref: chartRef
    }))
  });
};
exports.VariablePieChart = VariablePieChart;
VariablePieChart.defaultProps = {
  initialCenterText: ""
};
var _default = VariablePieChart;
exports["default"] = _default;