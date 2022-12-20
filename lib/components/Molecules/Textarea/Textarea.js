"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
var _react = require("react");
var _radinIcon = require("@sadeghi-ehsan/radin-icon");
var _FormElementWrapper = require("../../Atoms/FormElementWrapper");
var _utils = require("../../../utils");
var _useCombinedRefs = require("../../../hooks/useCombinedRefs");
var _utils2 = require("./utils");
var _jsxRuntime = require("react/jsx-runtime");
var _excluded = ["id", "className", "style", "disabled", "resize", "keepOpen", "autoFocus", "rows"];
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
var Textarea = /*#__PURE__*/(0, _react.forwardRef)(function (_ref, ref) {
  var id = _ref.id,
    className = _ref.className,
    style = _ref.style,
    disabled = _ref.disabled,
    resize = _ref.resize,
    keepOpen = _ref.keepOpen,
    autoFocus = _ref.autoFocus,
    rows = _ref.rows,
    restProps = (0, _objectWithoutProperties2["default"])(_ref, _excluded);
  var _useState = (0, _react.useState)(false),
    _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
    isOpenState = _useState2[0],
    setIsOpen = _useState2[1];
  var formElementWrapperRef = (0, _react.useRef)();
  var textAreaRef = (0, _react.useRef)();
  var textAreaContentRef = (0, _react.useRef)();
  var combinedRefs = (0, _useCombinedRefs.useCombinedRefs)(ref, formElementWrapperRef);
  var _extractFormElementPr = (0, _utils.extractFormElementProps)(restProps),
    _extractFormElementPr2 = (0, _slicedToArray2["default"])(_extractFormElementPr, 2),
    wrapperProps = _extractFormElementPr2[0],
    componentProps = _extractFormElementPr2[1];
  var isOpen = keepOpen || isOpenState;
  var onOpen = function onOpen() {
    if (!disabled) setIsOpen(true);
  };
  var onClose = function onClose() {
    combinedRefs.current.querySelector("fieldset").style.transition = "";
    setIsOpen(false);
  };
  var updateFieldsetHeight = function updateFieldsetHeight() {
    combinedRefs.current.querySelector("fieldset").style.height = "".concat((textAreaRef.current || textAreaContentRef.current).offsetHeight + 33, "px");
  };
  (0, _react.useEffect)(function () {
    updateFieldsetHeight();
    var resizeObserver;
    if (textAreaRef.current) {
      resizeObserver = new ResizeObserver(updateFieldsetHeight);
      resizeObserver.observe(textAreaRef.current);
    }
    if (isOpen) {
      setTimeout(function () {
        combinedRefs.current.querySelector("fieldset").style.transition = "none";
      }, 100);
    }
    return function () {
      if (resizeObserver) resizeObserver.disconnect();
    };
  }, [isOpen]);
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_FormElementWrapper.FormElementWrapper, _objectSpread(_objectSpread({}, wrapperProps), {}, {
    id: id,
    style: style,
    disabled: disabled,
    fieldsetClassName: (0, _utils.classJoin)(["overflow-hidden", className]),
    endAdornment: !isOpen ? /*#__PURE__*/(0, _jsxRuntime.jsx)(_radinIcon.ExternalLink, {
      onClick: onOpen,
      className: "hover:text-primary focus:text-primary"
    }) : undefined,
    ref: combinedRefs,
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      children: isOpen ? /*#__PURE__*/(0, _jsxRuntime.jsx)("textarea", _objectSpread(_objectSpread({}, componentProps), {}, {
        className: (0, _utils.classJoin)(["w-full bg-transparent outline-none scrollbar-primary pl-2 align-middle text-white disabled:text-disabled", _utils2.textareaResizeValues[resize], componentProps.className]),
        disabled: disabled,
        onBlur: onClose
        // eslint-disable-next-line jsx-a11y/no-autofocus
        ,
        autoFocus: keepOpen ? autoFocus : true,
        ref: textAreaRef,
        onScroll: updateFieldsetHeight,
        rows: rows
      })) : /*#__PURE__*/(0, _jsxRuntime.jsx)("div", _objectSpread(_objectSpread({
        className: "grid",
        ref: textAreaContentRef
      }, componentProps), {}, {
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          className: (0, _utils.classJoin)(["truncate select-none cursor-pointer ", disabled ? "text-disabled" : "", componentProps.value ? "text-white" : "text-idle"]),
          onClick: onOpen,
          children: componentProps.value || componentProps.placeholder || "-"
        })
      }))
    })
  }));
});
Textarea.defaultProps = _objectSpread({
  resize: "none",
  rows: 4,
  readOnly: false,
  disabled: false
}, (0, _utils.filterObj)(_FormElementWrapper.FormElementWrapper.defaultProps, function (v, k) {
  return !["startAdornment", "clearable", "allowClear", "onClear", "verified", "disabled", "endLabelAdornment"].includes(k);
}));
var _default = Textarea;
exports["default"] = _default;