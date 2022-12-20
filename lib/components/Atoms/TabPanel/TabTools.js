"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.TabTools = void 0;
var _utils = require("../../../utils");
var _jsxRuntime = require("react/jsx-runtime");
var TabTools = function TabTools(_ref) {
  var tools = _ref.tools,
    toolsClassName = _ref.toolsClassName;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
    className: (0, _utils.classJoin)(["flex flex-row-reverse bg-table-zebra-light max-h-9 border-b border-card-border", toolsClassName]),
    children: tools === null || tools === void 0 ? void 0 : tools.map(function (tool, index) {
      return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        onClick: function onClick() {
          return (tool === null || tool === void 0 ? void 0 : tool.onClick) && (tool === null || tool === void 0 ? void 0 : tool.onClick());
        },
        className: "px-3 py-2 text-xs border-l border-card-border cursor-pointer flex align-middle items-center hover:bg-secondary-hover/10 last:border-r first:border-l-0",
        children: [(tool === null || tool === void 0 ? void 0 : tool.title) && /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
          className: "px-1",
          children: tool === null || tool === void 0 ? void 0 : tool.title
        }), tool.icon]
      }, tool.key || index);
    })
  });
};
exports.TabTools = TabTools;
var _default = TabTools;
exports["default"] = _default;