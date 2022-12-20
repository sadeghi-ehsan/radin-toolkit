"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.Button = void 0;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
var _antd = require("antd");
var _react = require("react");
var _utils = require("../../../utils");
var _utils2 = require("./utils");
var _jsxRuntime = require("react/jsx-runtime");
var _excluded = ["children", "className", "theme", "variant", "href", "target", "type", "loading", "disabled", "size", "shape", "startIcon", "endIcon", "isIcon"];
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
// TODO: Must add Icon component for startIcon & endIcon then fix the width & height to be square

var ButtonComponent = function ButtonComponent(_ref, ref) {
  var children = _ref.children,
    className = _ref.className,
    theme = _ref.theme,
    variant = _ref.variant,
    href = _ref.href,
    target = _ref.target,
    type = _ref.type,
    loading = _ref.loading,
    disabled = _ref.disabled,
    size = _ref.size,
    shape = _ref.shape,
    startIcon = _ref.startIcon,
    endIcon = _ref.endIcon,
    isIcon = _ref.isIcon,
    restProps = (0, _objectWithoutProperties2["default"])(_ref, _excluded);
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_antd.Button, _objectSpread(_objectSpread(_objectSpread({}, restProps), {}, {
    ref: ref,
    size: "middle"
  }, !(0, _utils.empty)(href) ? {
    href: href,
    target: target
  } : {}), {}, {
    htmlType: type,
    loading: loading,
    disabled: disabled || loading,
    className: (0, _utils.classJoin)(["sbt-btn", _utils2.buttonThemes[theme], _utils2.buttonVariants[variant], isIcon ? "".concat(_utils2.buttonSizes[size], "-icon") : _utils2.buttonSizes[size], "!justify-start ", !(0, _utils.empty)(children) ? "sbt-btn-min-w" : "", !(0, _utils.empty)(shape) ? _utils2.buttonShapes[shape] : "", className]),
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
      className: (0, _utils.classJoin)([!(0, _utils.empty)(startIcon) && (!(0, _utils.empty)(children) || !(0, _utils.empty)(endIcon)) ? "ml-2" : ""]),
      children: startIcon
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
      className: "mx-auto",
      children: children
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
      className: (0, _utils.classJoin)(["text-center", !(0, _utils.empty)(children) && !(0, _utils.empty)(endIcon) ? "mr-2" : ""]),
      children: endIcon
    })]
  }));
};
var Button = /*#__PURE__*/(0, _react.forwardRef)(ButtonComponent);
exports.Button = Button;
Button.displayName = "Button";
Button.defaultProps = {
  disabled: false,
  theme: "primary",
  block: false,
  type: "button",
  loading: false,
  variant: "default",
  size: "md",
  target: "_self",
  isIcon: false,
  shape: "default"
};
var _default = Button;
exports["default"] = _default;