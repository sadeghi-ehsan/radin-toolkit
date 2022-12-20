"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _utils = require("../../../utils");
var _tailwind = require("../../../constants/tailwind");
var _jsxRuntime = require("react/jsx-runtime");
var Loading = function Loading(_ref) {
  var color = _ref.color,
    className = _ref.className;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
    className: (0, _utils.classJoin)(["loading-spinner1", !(className !== null && className !== void 0 && className.includes("w-")) ? "w-10" : "", !(className !== null && className !== void 0 && className.includes("h-")) ? "h-10" : "", className]),
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: "loader",
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)("svg", {
        className: "circular",
        viewBox: "25 25 50 50",
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)("circle", {
          className: "path",
          cx: "50",
          cy: "50",
          r: "20",
          fill: "none",
          strokeWidth: "6",
          strokeMiterlimit: "10",
          stroke: _tailwind.colors[color]
        })
      })
    })
  });
};
Loading.defaultProps = {
  color: "white"
};
var _default = Loading;
exports["default"] = _default;