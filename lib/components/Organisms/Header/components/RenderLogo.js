"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _Logo = _interopRequireDefault(require("./Logo"));
var _jsxRuntime = require("react/jsx-runtime");
var RenderLogo = function RenderLogo(_ref) {
  var logo = _ref.logo,
    brandName = _ref.brandName;
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    className: "flex items-center space-x-1 rtl:space-x-reverse md:space-x-2",
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: "shrink-0",
      children: logo || /*#__PURE__*/(0, _jsxRuntime.jsx)(_Logo["default"], {
        className: "h-4 w-max md:h-8 md:w-max"
      })
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: "font-heavy text-xs whitespace-nowrap shrink-0 md:text-lg",
      children: brandName
    })]
  });
};
var _default = RenderLogo;
exports["default"] = _default;