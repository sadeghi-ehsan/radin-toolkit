"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.FormElementWrapper = void 0;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
var _react = require("react");
var _radinIcon = require("@sadeghi-ehsan/radin-icon");
var _Typography = require("../Typography");
var _utils = require("../../../utils");
var _Adornments = require("./Adornments");
var _utils2 = require("./utils");
var _jsxRuntime = require("react/jsx-runtime");
var _excluded = ["id", "children", "label", "variant", "legendVariant", "fieldsetVariant", "startAdornment", "endAdornment", "endAdornmentClassName", "onFieldsetClick", "onClear", "clearable", "allowClear", "important", "required", "disabled", "block", "size", "help", "className", "legendClassName", "labelClassName", "fieldsetClassName", "childrenClassName", "endLabelAdornment", "noEndDivider", "verified", "error", "preserveErrorBox"];
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
var FormElementWrapper = /*#__PURE__*/(0, _react.forwardRef)(function (_ref, ref) {
  var _fieldsetClasses, _legendClasses;
  var id = _ref.id,
    children = _ref.children,
    label = _ref.label,
    variant = _ref.variant,
    legendVariant = _ref.legendVariant,
    fieldsetVariant = _ref.fieldsetVariant,
    startAdornment = _ref.startAdornment,
    endAdornment = _ref.endAdornment,
    endAdornmentClassName = _ref.endAdornmentClassName,
    onFieldsetClick = _ref.onFieldsetClick,
    onClear = _ref.onClear,
    clearable = _ref.clearable,
    allowClear = _ref.allowClear,
    important = _ref.important,
    required = _ref.required,
    disabled = _ref.disabled,
    block = _ref.block,
    size = _ref.size,
    help = _ref.help,
    className = _ref.className,
    legendClassName = _ref.legendClassName,
    labelClassName = _ref.labelClassName,
    fieldsetClassName = _ref.fieldsetClassName,
    childrenClassName = _ref.childrenClassName,
    endLabelAdornment = _ref.endLabelAdornment,
    noEndDivider = _ref.noEndDivider,
    verified = _ref.verified,
    error = _ref.error,
    preserveErrorBox = _ref.preserveErrorBox,
    otherProps = (0, _objectWithoutProperties2["default"])(_ref, _excluded);
  var isLine = variant === _utils2.wrapperVariants.line || variant === _utils2.wrapperVariants.none;
  var showLabel = !(0, _utils.empty)(error) || !(0, _utils.empty)(required) || !(0, _utils.empty)(important) || !(0, _utils.empty)(label);
  var fieldsetClasses = (_fieldsetClasses = {}, (0, _defineProperty2["default"])(_fieldsetClasses, _utils2.wrapperVariants.line, (0, _utils.classJoin)(["relative ml-6", (0, _utils.ifNotEmpty)(important, "important-fieldset"), (0, _utils.ifNotEmpty)(required, "required-fieldset"), error ? "error-fieldset" : ""])), (0, _defineProperty2["default"])(_fieldsetClasses, _utils2.wrapperVariants.none, (0, _utils.classJoin)(["relative ml-6", (0, _utils.ifNotEmpty)(important, "important-fieldset"), (0, _utils.ifNotEmpty)(required, "required-fieldset")])), (0, _defineProperty2["default"])(_fieldsetClasses, _utils2.wrapperVariants.outline, (0, _utils.classJoin)(["text-idle border-solid border rounded-xl", (0, _utils.ifEmpty)(disabled, (0, _utils.classJoin)(["focus-within:shadow-input-outline", (0, _utils.ifNotEmpty)(error, "border-error error-fieldset", "border-idle-border"), (0, _utils.ifNotEmpty)(important, "hover:border-primary focus-within:border-primary focus-within:shadow-primary-shadow-outline"), (0, _utils.ifNotEmpty)(required, "hover:border-primary focus-within:border-primary focus-within:shadow-primary-shadow-outline"), (0, _utils.ifEmpty)(important || required, "hover:border-primary focus-within:border-primary focus-within:shadow-primary-shadow-outline")]), "border-disabled")])), (0, _defineProperty2["default"])(_fieldsetClasses, _utils2.wrapperVariants.fill, (0, _utils.classJoin)(["border-solid border rounded-xl bg-filled-bg focus-within:shadow-input", (0, _utils.ifEmpty)(disabled, (0, _utils.classJoin)([(0, _utils.ifNotEmpty)(error, "border-error error-fieldset", "border-transparent"), (0, _utils.ifNotEmpty)(important, "important-fieldset hover:border-idle-border focus-within:!border-warning focus-within:shadow-warning-shadow"), (0, _utils.ifNotEmpty)(required, "required-fieldset hover:border-idle-border focus-within:!border-necessary focus-within:shadow-necessary-shadow"), (0, _utils.ifEmpty)(important || required, "hover:border-idle-border focus-within:!border-primary focus-within:shadow-primary-shadow")]), "border-transparent bg-opacity-40")])), _fieldsetClasses);
  var legendClasses = (_legendClasses = {}, (0, _defineProperty2["default"])(_legendClasses, _utils2.wrapperVariants.line, "mb-0"), (0, _defineProperty2["default"])(_legendClasses, _utils2.wrapperVariants.none, "mb-0"), (0, _defineProperty2["default"])(_legendClasses, _utils2.wrapperVariants.fill, (0, _utils.classJoin)(["fill-legend border border-solid rounded bg-filled-bg", (0, _utils.ifNotEmpty)(disabled, "!border-disabled"), (0, _utils.ifEmpty)(disabled, (0, _utils.ifNotEmpty)(error, "border-error", "border-idle-border"))])), _legendClasses);
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", _objectSpread(_objectSpread({}, otherProps), {}, {
    ref: ref,
    className: (0, _utils.classJoin)([(0, _utils.ifEmpty)(block, "inline-block", "w-full"), (0, _utils.ifEmpty)(showLabel, "pt-2.4"), className]),
    children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("fieldset", {
      disabled: disabled,
      className: (0, _utils.classJoin)(["transition-sbt relative", "".concat(variant, "-fieldset"), (0, _utils2.wrapperSizes)(isLine)[size], fieldsetClasses[variant], fieldsetClasses[fieldsetVariant], fieldsetClassName]),
      onClick: onFieldsetClick,
      children: [showLabel && /*#__PURE__*/(0, _jsxRuntime.jsx)("legend", {
        className: (0, _utils.classJoin)(["h-4.5 w-auto transition-sbt", legendClasses[variant], legendClasses[legendVariant], (0, _utils.ifEmpty)(isLine, "mx-4 -mb-2.4"), legendClassName]),
        children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("label", {
          htmlFor: id,
          className: (0, _utils.classJoin)(["flex items-center h-full", (0, _utils.ifEmpty)(isLine, "px-2"), variant === _utils2.wrapperVariants.outline ? "pt-px" : ""]),
          children: [!(0, _utils.empty)(error) && /*#__PURE__*/(0, _jsxRuntime.jsx)(_radinIcon.Error, {
            color: "error",
            size: "sm",
            weight: "bold",
            className: "ml-1"
          }), required && /*#__PURE__*/(0, _jsxRuntime.jsxs)("span", {
            className: "inline-block relative w-[7px] h-[7px] ml-1",
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
              className: "absolute w-full h-full rounded-full opacity-75 animate-ping-slow bg-necessary"
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
              className: "relative block w-full h-full rounded-full bg-necessary"
            })]
          }), important && /*#__PURE__*/(0, _jsxRuntime.jsx)(_radinIcon.Important, {
            color: "warning",
            className: "ml-1 text-sm"
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Typography.Typography, {
            tag: "span",
            color: (0, _utils.ifEmpty)(disabled, "primary-label", "disabled"),
            variant: "body3",
            className: (0, _utils.classJoin)(["inline-block max-h-full transition-sbt leading-4 truncate", labelClassName]),
            children: label
          })]
        })
      }), !(0, _utils.empty)(endLabelAdornment) && /*#__PURE__*/(0, _jsxRuntime.jsx)(_Adornments.EndLabelAdornment, {
        component: endLabelAdornment
      }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        className: "flex h-full w-full",
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          children: !(0, _utils.empty)(startAdornment) && /*#__PURE__*/(0, _jsxRuntime.jsx)(_Adornments.StartAdornment, {
            component: startAdornment,
            className: (0, _utils.classJoin)([_utils2.sectionsYPadding[size], (0, _utils.ifNotEmpty)(isLine, "pr-0")])
          })
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          className: "w-full overflow-hidden",
          children: !(0, _utils.empty)(children) && (0, _utils.modifyReactChildren)(children, {
            className: (0, _utils.classJoin)(["w-full h-full pl-4", _utils2.sectionsYPadding[size], (0, _utils.ifEmpty)(isLine && (0, _utils.empty)(startAdornment), "pr-4"), childrenClassName])
          })
        }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
          className: (0, _utils.classJoin)(["flex relative"]),
          children: [verified && /*#__PURE__*/(0, _jsxRuntime.jsx)(_radinIcon.Check, {
            color: "success",
            className: (0, _utils.classJoin)([(0, _utils.ifEmpty)(isLine, "self-center ml-4", "absolute h-4 -left-7 bottom-0 top-0 m-auto")])
          }), clearable && !(0, _utils.empty)(onClear) && /*#__PURE__*/(0, _jsxRuntime.jsx)(_Adornments.ClearIcon, {
            onClick: onClear,
            disabled: disabled || !allowClear
          }), !(0, _utils.empty)(endAdornment) && /*#__PURE__*/(0, _jsxRuntime.jsx)(_Adornments.EndAdornment, {
            noDivider: noEndDivider,
            component: endAdornment,
            className: (0, _utils.classJoin)([_utils2.sectionsYPadding[size], (0, _utils.ifNotEmpty)(isLine, "pl-0"), endAdornmentClassName])
          })]
        })]
      }), isLine && variant !== _utils2.wrapperVariants.none && /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: (0, _utils.classJoin)(["underline-section", "border-b border-solid rounded-none w-full h-0 transition-sbt", "absolute bottom-0 left-0 right-0", (0, _utils.ifEmpty)(disabled, (0, _utils.ifNotEmpty)(error, "border-error shadow-error", "border-idle-border"), "!border-disabled")])
      })]
    }), (preserveErrorBox || !(0, _utils.empty)(error) && !(0, _utils.isBoolean)(error)) && /*#__PURE__*/(0, _jsxRuntime.jsx)(_Typography.Typography, {
      className: "text-error mt-2 leading-base min-h-[1rem]",
      variant: "body2",
      children: error
    }), help && /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      className: (0, _utils.classJoin)(["flex mt-2", (0, _utils.ifNotEmpty)(isLine, "ml-6")]),
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: "pl-1",
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_radinIcon.Chevron, {
          weight: "fill",
          color: "primary-focus",
          size: ".8xs",
          className: "mt-1"
        })
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Typography.Typography, {
        color: "description",
        variant: "body3",
        children: help
      })]
    })]
  }));
});
exports.FormElementWrapper = FormElementWrapper;
FormElementWrapper.defaultProps = {
  label: undefined,
  variant: "outline",
  size: "md",
  disabled: false,
  clearable: false,
  allowClear: true,
  important: false,
  required: false,
  verified: false,
  error: false,
  preserveErrorBox: false,
  block: true,
  legendClassName: "",
  fieldsetClassName: ""
};
var _default = FormElementWrapper;
exports["default"] = _default;