"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.renderButton = exports.RenderHeader = void 0;
var _radinIcon = require("@sadeghi-ehsan/radin-icon");
var _jsxRuntime = require("react/jsx-runtime");
var RenderHeader = function RenderHeader(_ref) {
  var header = _ref.header;
  return typeof header === "string" ? /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
    className: "text-right pt-4 pb-3 px-4 text-sm font-medium text-primary-label",
    children: header
  }) : header;
};

/**
 * Left & Right Arrow buttons in header of the calendar
 */
exports.RenderHeader = RenderHeader;
var renderButton = function renderButton(_ref2) {
  var direction = _ref2.direction,
    handleClick = _ref2.handleClick,
    locale = _ref2.locale;
  var horizontalFlip = locale === "fa" ? direction === "left" ? "vertical" : null : direction === "right" ? "vertical" : null;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
    onClick: handleClick,
    className: "px-4 py-2 cursor-pointer text-idle hover:text-primary",
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_radinIcon.Chevron, {
      weight: "fill",
      size: ".7xs",
      flip: horizontalFlip,
      className: " "
    })
  });
};
exports.renderButton = renderButton;