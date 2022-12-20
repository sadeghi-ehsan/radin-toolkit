"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.TabPane = void 0;
var _utils = require("../../../utils");
var _TabTools = _interopRequireDefault(require("./TabTools"));
var _jsxRuntime = require("react/jsx-runtime");
var TabPane = function TabPane(_ref) {
  var className = _ref.className,
    toolsClassName = _ref.toolsClassName,
    children = _ref.children,
    tools = _ref.tools;
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
    children: [tools && /*#__PURE__*/(0, _jsxRuntime.jsx)(_TabTools["default"], {
      tools: tools,
      toolsClassName: toolsClassName
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: (0, _utils.classJoin)(["pt-2", className]),
      children: children
    })]
  });
};
exports.TabPane = TabPane;
var _default = TabPane;
exports["default"] = _default;