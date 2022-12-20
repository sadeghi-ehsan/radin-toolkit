"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.InputSheba = void 0;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
var _react = require("react");
var _utils = require("../../../utils");
var _FormElementWrapper = require("../../Atoms/FormElementWrapper");
var _BaseInput = require("../../Atoms/BaseInput");
var _Input = require("../Input");
var _jsxRuntime = require("react/jsx-runtime");
var _excluded = ["className", "clearedValue", "size", "clearable", "id", "onChange", "disabled", "readOnly", "value", "name", "style", "placeholder"];
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
var InputSheba = /*#__PURE__*/(0, _react.forwardRef)(function (_ref, passedRef) {
  var _value$toLowerCase;
  var className = _ref.className,
    clearedValue = _ref.clearedValue,
    size = _ref.size,
    clearable = _ref.clearable,
    _id = _ref.id,
    onChange = _ref.onChange,
    disabled = _ref.disabled,
    readOnly = _ref.readOnly,
    _value = _ref.value,
    name = _ref.name,
    style = _ref.style,
    placeholder = _ref.placeholder,
    restProps = (0, _objectWithoutProperties2["default"])(_ref, _excluded);
  var id = _id || "InputSheba-".concat(name || (0, _utils.randomStr)());
  var ref = (0, _utils.ifNotEmpty)(passedRef, passedRef, (0, _react.useRef)());
  var value = !(0, _utils.empty)(_value) ? _value === null || _value === void 0 ? void 0 : (_value$toLowerCase = _value.toLowerCase()) === null || _value$toLowerCase === void 0 ? void 0 : _value$toLowerCase.replaceAll("ir", "") : "";
  var _extractFormElementPr = (0, _utils.extractFormElementProps)(restProps),
    _extractFormElementPr2 = (0, _slicedToArray2["default"])(_extractFormElementPr, 2),
    wrapperProps = _extractFormElementPr2[0],
    componentProps = _extractFormElementPr2[1];
  var handleChange = function handleChange(v) {
    var n = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : name;
    var e = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : undefined;
    if ((v === null || v === void 0 ? void 0 : v.length) > 24) return;
    if (!(0, _utils.empty)(onChange) && (0, _utils.isCallable)(onChange)) {
      onChange(!(0, _utils.empty)(v) ? "IR".concat(v) : "", n, e);
    }
  };
  var onClear = function onClear() {
    handleChange(clearedValue);
    if (value === undefined) {
      if (!(0, _utils.empty)(ref === null || ref === void 0 ? void 0 : ref.current)) {
        ref.current.value = "";
      }
    }
  };
  var handlePaste = function handlePaste(e) {
    var _pasteData$toLowerCas;
    if (!e.clipboardData || !e.clipboardData.getData) {
      return;
    }

    // regex replace all whitespace with empty string
    var pasteData = e.clipboardData.getData("text/plain").replace(/\s/g, "");
    if (!pasteData) {
      return;
    }
    if (pasteData !== null && pasteData !== void 0 && (_pasteData$toLowerCas = pasteData.toLowerCase()) !== null && _pasteData$toLowerCas !== void 0 && _pasteData$toLowerCas.includes("ir")) {
      var _pasteData$toLowerCas2;
      handleChange(pasteData === null || pasteData === void 0 ? void 0 : (_pasteData$toLowerCas2 = pasteData.toLowerCase()) === null || _pasteData$toLowerCas2 === void 0 ? void 0 : _pasteData$toLowerCas2.replaceAll("ir", ""));
    }
  };
  var focusRef = function focusRef() {
    if (!(0, _utils.empty)(ref === null || ref === void 0 ? void 0 : ref.current)) {
      ref.current.focus();
    }
  };
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_FormElementWrapper.FormElementWrapper, _objectSpread(_objectSpread({}, wrapperProps), {}, {
    id: id,
    size: size,
    disabled: disabled,
    style: style,
    onClear: onClear,
    clearable: !disabled && !readOnly && clearable,
    allowClear: !(0, _utils.empty)(value) || value === undefined,
    className: (0, _utils.classJoin)(["sbt-input", className]),
    onFieldsetClick: focusRef,
    childrenClassName: "flex flex-nowrap items-center dir-ltr justify-end ",
    children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: (0, _utils.classJoin)(["border-r select-none", disabled ? "border-r-disabled" : "border-r-primary"]),
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          className: (0, _utils.classJoin)(["mr-1.5 border-b border-b-disabled", disabled ? " text-disabled" : " text-white"]),
          children: "IR"
        })
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: (0, _utils.classJoin)(["text-right h-full px-1.5 first:pl-2 last:pr-2"]),
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_BaseInput.BaseInput, _objectSpread(_objectSpread({}, componentProps), {}, {
          id: id,
          name: name,
          value: value,
          type: "number",
          align: "left",
          onChange: handleChange,
          disabled: disabled,
          readOnly: readOnly,
          fontSize: size === "sm" ? "xs" : "sm",
          onPaste: handlePaste,
          className: (0, _utils.classJoin)(["border-b border-disabled appearance-none-all h-full w-52", size === "sm" ? "leading-xs" : "leading-sm"]),
          ref: ref
        }))
      })]
    })
  }));
});
exports.InputSheba = InputSheba;
InputSheba.defaultProps = _objectSpread({}, (0, _utils.filterObj)(_Input.Input.defaultProps, function (v, k) {
  return !["type", "align", "onPaste", "onKeyDown", "maxLength"].includes(k);
}));
var _default = InputSheba;
exports["default"] = _default;