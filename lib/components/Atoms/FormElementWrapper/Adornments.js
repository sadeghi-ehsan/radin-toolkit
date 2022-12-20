"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StartAdornment = exports.EndLabelAdornment = exports.EndAdornment = exports.ClearIcon = void 0;
var _radinIcon = require("@sadeghi-ehsan/radin-icon");
var _utils = require("../../../utils");
var _Divider = require("../Divider");
var _jsxRuntime = require("react/jsx-runtime");
var StartAdornment = function StartAdornment(_ref) {
  var component = _ref.component,
    noDivider = _ref.noDivider,
    className = _ref.className;
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    className: (0, _utils.classJoin)(["flex h-full pr-4", className]),
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: "self-center",
      children: component
    }), !noDivider ? /*#__PURE__*/(0, _jsxRuntime.jsx)(_Divider.Divider, {
      isVertical: true,
      className: "mr-4"
    }) : null]
  });
};
exports.StartAdornment = StartAdornment;
StartAdornment.defaultProps = {
  noDivider: false
};
var EndAdornment = function EndAdornment(_ref2) {
  var component = _ref2.component,
    noDivider = _ref2.noDivider,
    className = _ref2.className;
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    className: (0, _utils.classJoin)(["flex h-full pl-4", className]),
    children: [!noDivider && /*#__PURE__*/(0, _jsxRuntime.jsx)(_Divider.Divider, {
      isVertical: true,
      className: "ml-4"
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: "self-center",
      children: component
    })]
  });
};
exports.EndAdornment = EndAdornment;
EndAdornment.defaultProps = {
  noDivider: false
};
var EndLabelAdornment = function EndLabelAdornment(_ref3) {
  var component = _ref3.component;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
    className: "absolute top-0 left-0",
    children: component
  });
};
exports.EndLabelAdornment = EndLabelAdornment;
EndLabelAdornment.defaultProps = {};
var ClearIcon = function ClearIcon(_ref4) {
  var onClick = _ref4.onClick,
    disabled = _ref4.disabled;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
    className: (0, _utils.classJoin)(["clear-icon self-center ml-4 flex items-center justify-center rounded-[6px] bg-appearing w-[15px] h-[15px]", (0, _utils.ifEmpty)(disabled, "cursor-pointer", "clear-icon-disabled")]),
    onClick: disabled ? undefined : onClick,
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_radinIcon.Close, {
      size: "1.5xs",
      className: "text-card-bg transition-sbt"
    })
  });
};
exports.ClearIcon = ClearIcon;