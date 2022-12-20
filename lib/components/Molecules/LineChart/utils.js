"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useReflowChart = exports.renderTooltip = exports.renderInitialOptions = void 0;
var _react = require("react");
var _tailwind = require("../../../constants/tailwind");
var _utils = require("../../../utils");
var renderTooltip = function renderTooltip(point) {
  var customToolTip = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;
  return "\n  <div class=\"sbt-linechart-tooltip\">\n    <div style=\"border-right: 1px solid ".concat(point.color, "; padding: 2px 4px\">\n    ").concat(customToolTip ? customToolTip(point) : "\n        <div>\n          <div>".concat(point.y, "</div>\n          <div>").concat(point.x, "</div>\n        </div>\n    "), "\n    </div>\n  </div>\n");
};
exports.renderTooltip = renderTooltip;
var useReflowChart = function useReflowChart(chartRef) {
  (0, _react.useEffect)(function () {
    var timer = setTimeout(function () {
      var _chartRef$current;
      var chart = (_chartRef$current = chartRef.current) === null || _chartRef$current === void 0 ? void 0 : _chartRef$current.chart;
      chart.reflow();
    }, 5);
    return function () {
      clearTimeout(timer);
    };
  }, []);
};
exports.useReflowChart = useReflowChart;
var renderInitialOptions = function renderInitialOptions(_ref) {
  var chartTitle = _ref.chartTitle,
    customToolTip = _ref.customToolTip,
    series = _ref.series;
  return {
    chart: {
      backgroundColor: "transparent"
      // marginTop: 80,
      // spacingTop: 0
    },

    credits: {
      enabled: false
    },
    exporting: {
      enabled: false,
      // for hiding default export button (hamburger icon)
      chartOptions: {
        navigator: {
          enabled: false
        },
        scrollbar: {
          enabled: false
        },
        chart: {
          backgroundColor: "#181D36" // default color, you can change it to any color you want from outside.
        }
      }
    },

    title: {
      style: {
        color: _tailwind.colors["light-text"],
        fontSize: "11px",
        fontFamily: "yekan-bakh"
      },
      text: chartTitle,
      align: "left",
      x: 80
    },
    legend: {
      itemStyle: {
        color: _tailwind.colors["light-text"]
      },
      align: "right",
      verticalAlign: "top",
      x: 0
    },
    plotOptions: {
      series: {
        marker: {
          enabled: false
        }
      },
      area: {
        fillColor: {
          linearGradient: {
            x1: 0,
            y1: 0,
            x2: 0,
            y2: 1
          },
          stops: [[0, "rgba(10,132,255,0.24)"], [1, "rgba(244,244,244,0)"]]
        },
        lineWidth: 1,
        marker: {
          enabled: false
        },
        shadow: false,
        states: {
          hover: {
            lineWidth: 1
          }
        },
        threshold: null
      }
    },
    tooltip: {
      backgroundColor: null,
      borderWidth: 0,
      shadow: false,
      useHTML: true,
      formatter: function formatter() {
        return renderTooltip(this, customToolTip);
      }
    },
    yAxis: {
      gridLineColor: "transparent",
      labels: {
        useHTML: true,
        formatter: function formatter() {
          var item = this;
          if (typeof item.value !== "number") {
            var label = item.axis.defaultLabelFormatter.call(this);
            return "<text>".concat(label, "</text>");
          }
          var converted = (0, _utils.convertIntToCurrency)(Number(item.value));
          return "<text>".concat(converted.value, "</text> ").concat(converted.unit && "<span class=\"badge\">".concat(converted.unit, "</span>"));
        }
      },
      title: {
        text: ""
      }
    },
    xAxis: {
      gridLineWidth: 1,
      gridLineDashStyle: "DashDot",
      gridLineColor: "rgba(255,255,255,0.18)",
      tickWidth: 0
    },
    series: series
  };
};
exports.renderInitialOptions = renderInitialOptions;