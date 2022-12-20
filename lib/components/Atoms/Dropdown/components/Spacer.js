"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _utils = require("../../../../utils");
var _jsxRuntime = require("react/jsx-runtime");
var Spacer = function Spacer(_ref) {
  var className = _ref.className;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
    className: (0, _utils.classJoin)(["h-px w-full my-2 bg-white bg-opacity-5 pointer-events-none p-0", className])
  });
};
Spacer.defaultProps = {
  className: ""
};
var _default = Spacer;
exports["default"] = _default;