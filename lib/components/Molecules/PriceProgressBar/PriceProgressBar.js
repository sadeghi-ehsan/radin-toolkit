"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.PriceProgressBar = void 0;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
var _react = require("react");
var _utils = require("../../../utils");
var _Badge = require("../../Atoms/Badge");
var _jsxRuntime = require("react/jsx-runtime");
var _excluded = ["count", "volume", "percentage", "direction", "className", "style"];
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
var PriceProgressBar = /*#__PURE__*/(0, _react.forwardRef)(function (_ref, ref) {
  var count = _ref.count,
    volume = _ref.volume,
    percentage = _ref.percentage,
    direction = _ref.direction,
    className = _ref.className,
    style = _ref.style,
    restProps = (0, _objectWithoutProperties2["default"])(_ref, _excluded);
  // The below statement check if percentage be between 0 and 100 and return 0 if it was undefined
  var inRangePercentage = percentage > 100 ? 100 : percentage < 0 ? 0 : percentage || 0;
  var volumeData = volume || volume === 0 ? (0, _utils.convertIntToCurrency)(volume) : null;
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", _objectSpread(_objectSpread({
    ref: ref,
    style: _objectSpread({
      direction: direction
    }, style),
    className: (0, _utils.classJoin)(["w-44", className])
  }, restProps), {}, {
    children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      className: "flex flex-row justify-between mb-1",
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
        dir: "rtl",
        children: volume || volume === 0 ? /*#__PURE__*/(0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
          children: [volumeData.unit && /*#__PURE__*/(0, _jsxRuntime.jsx)(_Badge.Badge, {
            className: "!bg-dark-text !bg-opacity-20 !text-white ml-1",
            children: volumeData.unit
          }), (0, _utils.commaSeparator)(volumeData.value)]
        }) : /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
          children: "-"
        })
      }), count || count === 0 ? /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
        children: (0, _utils.commaSeparator)(count)
      }) : /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
        children: "-"
      })]
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: "relative bg-light bg-opacity-20 h-3 rounded mb-0.5",
      children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        style: {
          width: "".concat(inRangePercentage, "%")
        },
        className: (0, _utils.classJoin)(["h-3 rounded", direction === "rtl" ? "radin-price-progress-bar-prompt-bar" : "radin-price-progress-bar-success-bar"]),
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
          children: "\xA0"
        }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
          className: (0, _utils.classJoin)(["rounded text-xs text-center w-12 bg-dark-text bg-opacity-30", direction === "rtl" ? "radin-price-progress-bar-prompt-percentage" : "radin-price-progress-bar-success-percentage"]),
          children: [inRangePercentage, "%"]
        })]
      })
    })]
  }));
});
exports.PriceProgressBar = PriceProgressBar;
PriceProgressBar.defaultProps = {
  direction: "rtl"
};
var _default = PriceProgressBar;
exports["default"] = _default;