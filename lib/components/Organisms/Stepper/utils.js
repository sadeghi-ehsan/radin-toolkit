"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RenderStepIcon = exports.RenderMainIcon = exports.RenderEditIcon = void 0;
var _radinIcon = require("@sadeghi-ehsan/radin-icon");
var _utils = require("../../../utils");
var _jsxRuntime = require("react/jsx-runtime");
var RenderMainIcon = function RenderMainIcon(_ref) {
  var icon = _ref.icon,
    isIconOutlined = _ref.isIconOutlined,
    isActive = _ref.isActive,
    isBeforeStep = _ref.isBeforeStep,
    isRemainIcon = _ref.isRemainIcon,
    isError = _ref.isError;
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    className: "relative shrink-0",
    children: [isIconOutlined ? /*#__PURE__*/(0, _jsxRuntime.jsx)(_radinIcon.RoundedSquare, {
      className: "w-7.2 h-7.2 md:w-10 md:h-10",
      color: isError ? "necessary" : isActive ? "primary" : "idle"
    }) : /*#__PURE__*/(0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
      children: [isBeforeStep && /*#__PURE__*/(0, _jsxRuntime.jsx)(_radinIcon.RoundedSquare, {
        className: "w-7.2 h-7.2 md:w-10 md:h-10 absolute top-1/2 left-1/2 z-10 -translate-x-1/2 -translate-y-1/2",
        color: isError ? "necessary" : "primary"
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_radinIcon.RoundedSquare, {
        weight: "fill",
        className: "w-7.2 h-7.2 md:w-10 md:h-10",
        color: isError ? "necessary" : isActive ? "primary" : "idle"
      }), isBeforeStep && /*#__PURE__*/(0, _jsxRuntime.jsx)(_radinIcon.RoundedSquare, {
        weight: "fill",
        className: "absolute -translate-x-1/2 -translate-y-1/2 w-9 h-9 md:w-12 md:h-12 opacity-20 top-1/2 left-1/2 -z-10",
        color: isError ? "necessary" : "primary"
      })]
    }), icon && /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: (0, _utils.classJoin)(["absolute m-0 -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2", isRemainIcon || isIconOutlined || isError ? "text-white" : "text-disabled"]),
      children: icon
    })]
  });
};
exports.RenderMainIcon = RenderMainIcon;
var RenderEditIcon = function RenderEditIcon(_ref2) {
  var direction = _ref2.direction;
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    className: (0, _utils.classJoin)(["relative group", direction === "vertical" ? "-ml-0.75 md:-ml-1.2" : " -mt-0.5 md:-mt-1"]),
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_radinIcon.RoundedSquare, {
      weight: "fill",
      className: "w-5 h-5 md:w-6 md:h-6 transition text-primary group-hover:text-primary-hover"
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: "absolute m-0 text-white -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2",
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_radinIcon.Pencil, {
        className: "w-2.5 h-2.5 md:w-3.5 md:h-3.5"
      })
    })]
  });
};
exports.RenderEditIcon = RenderEditIcon;
var RenderStepIcon = function RenderStepIcon(_ref3) {
  var isCurrent = _ref3.isCurrent,
    isFinish = _ref3.isFinish,
    isError = _ref3.isError;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
    className: (0, _utils.classJoin)(["w-3.5 h-3.5 border rounded-full shrink-0", isFinish ? "pr-px pt-px" : "p-0.75"]),
    children: isFinish ? /*#__PURE__*/(0, _jsxRuntime.jsx)(_radinIcon.Check, {
      size: ".8xs",
      color: "white"
    }) : /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: (0, _utils.classJoin)(["w-full h-full rounded-full", isError ? "bg-necessary" : !isCurrent ? "bg-transparent" : "bg-primary"])
    })
  });
};
exports.RenderStepIcon = RenderStepIcon;