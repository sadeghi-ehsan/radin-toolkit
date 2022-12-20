"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.Cards = void 0;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
var _ProgressBar = require("../../Atoms/ProgressBar");
var _utils = require("../../../utils");
var _utils2 = require("./utils");
var _jsxRuntime = require("react/jsx-runtime");
var _excluded = ["children", "image", "imageSize", "style", "size", "className", "bodyClassName", "footer", "progressBarProps", "actionAdornment", "imageClassName", "hideImageShadow"];
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
var Cards = function Cards(_ref) {
  var children = _ref.children,
    image = _ref.image,
    imageSize = _ref.imageSize,
    style = _ref.style,
    size = _ref.size,
    className = _ref.className,
    bodyClassName = _ref.bodyClassName,
    footer = _ref.footer,
    progressBarProps = _ref.progressBarProps,
    actionAdornment = _ref.actionAdornment,
    imageClassName = _ref.imageClassName,
    hideImageShadow = _ref.hideImageShadow,
    restProps = (0, _objectWithoutProperties2["default"])(_ref, _excluded);
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", _objectSpread(_objectSpread({}, restProps), {}, {
    style: style,
    className: (0, _utils.classJoin)(["group relative overflow-hidden bg-card-bg border border-card-border hover:border-primary-border focus-within:border-primary-border transition rounded-xxl", className]),
    children: [!(0, _utils.empty)(image) && /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      className: (0, _utils.classJoin)(["relative pb-0", size === "zero" ? "" : "p-2"]),
      children: [(0, _utils.modifyReactChildren)(image, {
        className: (0, _utils.classJoin)(["rounded-lg w-full object-cover relative z-10", imageClassName]),
        style: _utils2.imageStyles[imageSize]
      }), !hideImageShadow && (0, _utils.modifyReactChildren)(image, {
        className: "rounded-lg object-cover blur opacity-20 absolute -bottom-2.5 right-0 left-0 w-full px-5",
        style: {
          height: "72px"
        }
      })]
    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      className: (0, _utils.classJoin)([_utils2.bodyPaddings[size], bodyClassName]),
      children: [!(0, _utils.empty)(children) && children, !(0, _utils.empty)(footer) && /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: (0, _utils.classJoin)(["border-t border-card-border pt-4 mt-4"]),
        children: footer
      })]
    }), !(0, _utils.empty)(progressBarProps) && /*#__PURE__*/(0, _jsxRuntime.jsx)(_ProgressBar.ProgressBar, _objectSpread(_objectSpread({}, progressBarProps), {}, {
      className: (0, _utils.classJoin)(["absolute -bottom-2.4", progressBarProps === null || progressBarProps === void 0 ? void 0 : progressBarProps.className])
    })), !(0, _utils.empty)(actionAdornment) && /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: "absolute top-px left-px",
      children: actionAdornment
    })]
  }));
};
exports.Cards = Cards;
Cards.defaultProps = {
  imageSize: "md",
  size: "lg",
  hideImageShadow: false
};
var _default = Cards;
exports["default"] = _default;