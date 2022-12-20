"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.Collapse = void 0;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _react = require("react");
var _radinIcon = require("@sadeghi-ehsan/radin-icon");
var _utils = require("./utils");
var _jsxRuntime = require("react/jsx-runtime");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
var Collapse = /*#__PURE__*/(0, _react.forwardRef)(function (_ref, ref) {
  var withHover = _ref.withHover,
    title = _ref.title,
    defaultExpanded = _ref.defaultExpanded,
    disabled = _ref.disabled,
    onChange = _ref.onChange,
    className = _ref.className,
    children = _ref.children;
  var _useState = (0, _react.useState)(defaultExpanded),
    _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
    expand = _useState2[0],
    setExpand = _useState2[1];
  var collapseRef = (0, _react.useRef)();
  var handleCollapse = function handleCollapse() {
    if (!disabled) {
      onChange(!expand);
      setExpand(!expand);
      var classList = collapseRef.current.classList;
      if (classList.contains(_utils.CLOSE)) {
        classList.replace(_utils.CLOSE, _utils.OPEN);
        classList.add("py-2");
      } else {
        classList.replace(_utils.OPEN, _utils.CLOSE);
        classList.remove("py-2");
      }
    }
  };
  var options = withHover ? {
    onBlur: handleCollapse,
    onFocus: handleCollapse,
    onMouseOut: handleCollapse,
    onMouseOver: handleCollapse
  } : {
    onClick: handleCollapse
  };
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    className: className,
    children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", _objectSpread(_objectSpread({
      ref: ref
    }, options), {}, {
      className: "border-b border-light/20 pb-1 cursor-pointer",
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
        className: "text-primary-label text-base",
        children: title
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_radinIcon.Chevron, {
        size: "lg",
        rotate: "90",
        flip: expand ? "horizontal" : "vertical",
        color: "light-text",
        className: "inline mr-1"
      })]
    })), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: "overflow-hidden transition-all ".concat(defaultExpanded ? "".concat(_utils.OPEN, " py-2") : _utils.CLOSE, " duration-700"),
      ref: collapseRef,
      children: children
    })]
  });
});
exports.Collapse = Collapse;
Collapse.defaultProps = {
  withHover: false,
  defaultExpanded: true,
  disabled: false,
  onChange: function onChange() {}
};
var _default = Collapse;
exports["default"] = _default;