"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.ProgressBar = void 0;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
var _react = require("react");
var _antd = require("antd");
var _utils = require("../../../utils");
var _tailwind = require("../../../constants/tailwind");
var _utils2 = require("./utils");
var _jsxRuntime = require("react/jsx-runtime");
var _excluded = ["color", "size", "shape", "percent", "direction", "className", "width"];
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
var ProgressBar = /*#__PURE__*/(0, _react.forwardRef)(function (_ref, ref) {
  var color = _ref.color,
    size = _ref.size,
    shape = _ref.shape,
    percent = _ref.percent,
    direction = _ref.direction,
    className = _ref.className,
    width = _ref.width,
    restProps = (0, _objectWithoutProperties2["default"])(_ref, _excluded);
  var normalizedPercent = percent < 0 ? 0 : percent;
  normalizedPercent = normalizedPercent > 100 ? 100 : normalizedPercent;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_antd.ConfigProvider, {
    direction: direction,
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_antd.Progress, _objectSpread(_objectSpread({}, restProps), {}, {
      percent: normalizedPercent
      // @ts-ignore
      ,
      ref: ref,
      className: (0, _utils.classJoin)(["sbt-progress-bar", direction === "ltr" ? "dir-ltr-all" : "dir-rtl-all", "sbt-progress-".concat(size), "sbt-progress-".concat(color), "sbt-progress-".concat(direction), className]),
      type: shape,
      strokeColor: _tailwind.colors[color],
      strokeWidth: _utils2.progressBarSizes[size],
      strokeLinecap: "square",
      trailColor: _tailwind.colors.appearing
    }, shape === "circle" && {
      width: width
    }))
  });
});
exports.ProgressBar = ProgressBar;
ProgressBar.defaultProps = {
  size: "md",
  color: "primary",
  shape: "line",
  percent: 0,
  direction: "ltr",
  showInfo: true,
  format: function format(percent) {
    return "".concat(percent, "%");
  },
  width: 80
};
var _default = ProgressBar;
exports["default"] = _default;