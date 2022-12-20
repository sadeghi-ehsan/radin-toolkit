"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.TabPanel = void 0;
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _react = require("react");
var _utils = require("../../../utils");
var _TabTools = _interopRequireDefault(require("./TabTools"));
var _jsxRuntime = require("react/jsx-runtime");
var TabPanel = function TabPanel(_ref) {
  var _children$;
  var className = _ref.className,
    children = _ref.children,
    defaultActiveKey = _ref.defaultActiveKey,
    growTabs = _ref.growTabs,
    tabsClassName = _ref.tabsClassName,
    onTabChange = _ref.onTabChange,
    tools = _ref.tools;
  var _useState = (0, _react.useState)(defaultActiveKey || (children === null || children === void 0 ? void 0 : (_children$ = children[0]) === null || _children$ === void 0 ? void 0 : _children$.key)),
    _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
    active = _useState2[0],
    setActive = _useState2[1];
  var handleTabChange = function handleTabChange(key) {
    onTabChange(key);
    setActive(key);
  };
  var activeTab = Array.isArray(children) && (children === null || children === void 0 ? void 0 : children.find(function (child) {
    return child.key === active;
  }));
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    className: (0, _utils.classJoin)(["bg-card-bg border border-card-border rounded-3xl", className]),
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: "flex overflow-x-auto overflow-y-hidden rounded-tl-3xl rounded-tr-3xl scrollbar-primary whitespace-nowrap border-b border-card-border",
      children: Array.isArray(children) && (children === null || children === void 0 ? void 0 : children.map(function (child) {
        var _child$props, _child$props2;
        return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
          className: (0, _utils.classJoin)(["border-l md:text-sm text-xs border-card-border h-10 cursor-pointer flex align-middle items-center justify-center text-center first:rounded-tr-3xl first:rounded-tl", child.props.title ? "lg:min-w-38 md:min-w-32 px-2" : "", growTabs ? "grow" : "", tabsClassName, !child.props.title && child.props.icon ? "min-w-16" : "", child.props.disabled ? "bg-dark-text text-disabled cursor-not-allowed" : active === child.key ? "bg-card-border" : "bg-card-bg hover:bg-secondary-hover/10", child.props.icon ? "grow-0" : ""]),
          onClick: function onClick() {
            return !child.props.disabled && handleTabChange(child === null || child === void 0 ? void 0 : child.key);
          },
          children: [(_child$props = child.props) === null || _child$props === void 0 ? void 0 : _child$props.title, (_child$props2 = child.props) === null || _child$props2 === void 0 ? void 0 : _child$props2.icon]
        }, child.key);
      }))
    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      children: [tools && !activeTab.props.tools && /*#__PURE__*/(0, _jsxRuntime.jsx)(_TabTools["default"], {
        tools: tools
      }), activeTab]
    })]
  });
};
exports.TabPanel = TabPanel;
TabPanel.defaultProps = {
  onTabChange: function onTabChange() {},
  growTabs: false
};
var _default = TabPanel;
exports["default"] = _default;