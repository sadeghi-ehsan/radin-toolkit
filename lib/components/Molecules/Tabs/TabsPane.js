"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.TabsPane = void 0;
var _jsxRuntime = require("react/jsx-runtime");
var TabsPane = function TabsPane(_ref) {
  var className = _ref.className,
    children = _ref.children,
    paneStyle = _ref.paneStyle;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
    style: paneStyle,
    className: className,
    children: children
  });
};
exports.TabsPane = TabsPane;
var _default = TabsPane;
exports["default"] = _default;
TabsPane.defaultProps = {
  pin: false,
  disabled: false,
  notice: false,
  favorite: false,
  title: "",
  newTab: false,
  fix: false,
  deletable: true,
  editable: true
};