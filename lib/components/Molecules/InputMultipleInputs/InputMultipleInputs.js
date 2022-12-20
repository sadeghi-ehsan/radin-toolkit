"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.InputMultipleInputs = void 0;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
var _react = require("react");
var _utils = require("../../../utils");
var _FormElementWrapper = require("../../Atoms/FormElementWrapper");
var _BaseInput = require("../../Atoms/BaseInput");
var _Input = require("../Input");
var _jsxRuntime = require("react/jsx-runtime");
var _excluded = ["className", "clearedValue", "size", "clearable", "id", "onChange", "disabled", "readOnly", "value", "name", "style", "startAdornment", "placeholder", "schema", "direction", "align"];
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
var InputMultipleInputs = /*#__PURE__*/(0, _react.forwardRef)(function (_ref, passedRef) {
  var className = _ref.className,
    clearedValue = _ref.clearedValue,
    size = _ref.size,
    clearable = _ref.clearable,
    _id = _ref.id,
    onChange = _ref.onChange,
    disabled = _ref.disabled,
    readOnly = _ref.readOnly,
    value = _ref.value,
    filedName = _ref.name,
    style = _ref.style,
    startAdornment = _ref.startAdornment,
    placeholder = _ref.placeholder,
    schema = _ref.schema,
    direction = _ref.direction,
    align = _ref.align,
    restProps = (0, _objectWithoutProperties2["default"])(_ref, _excluded);
  var id = _id || "InputMultipleInputs-".concat(filedName || (0, _utils.randomStr)());
  var ref = (0, _utils.ifNotEmpty)(passedRef, passedRef, (0, _react.useRef)());
  var inputsContainerRef = (0, _react.useRef)();
  var _extractFormElementPr = (0, _utils.extractFormElementProps)(restProps),
    _extractFormElementPr2 = (0, _slicedToArray2["default"])(_extractFormElementPr, 1),
    wrapperProps = _extractFormElementPr2[0];
  var _useState = (0, _react.useState)(undefined),
    _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
    combinedValue = _useState2[0],
    setCombinedValue = _useState2[1];
  (0, _react.useEffect)(function () {
    if (!(0, _utils.empty)(value) && (0, _utils.empty)(combinedValue)) {
      setCombinedValue(function (prev) {
        return _objectSpread(_objectSpread({}, prev), value);
      });
    }
  }, [value]);

  /**
   * onChange handler
   */
  (0, _react.useEffect)(function () {
    if (!(0, _utils.empty)(onChange) && (0, _utils.isCallable)(onChange) && !(0, _utils.empty)(combinedValue) && JSON.stringify(combinedValue) !== JSON.stringify(value)) {
      onChange(combinedValue, filedName, null);
    }
  }, [combinedValue]);
  var onClear = function onClear() {
    setCombinedValue(clearedValue || {});
    if (value === undefined) {
      if (!(0, _utils.empty)(ref === null || ref === void 0 ? void 0 : ref.current)) {
        ref.current.value = "";
      }
    }
  };
  var handleChange = function handleChange(v, n) {
    setCombinedValue(function (prev) {
      return _objectSpread(_objectSpread({}, prev), {}, (0, _defineProperty2["default"])({}, n, v));
    });
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
    childrenClassName: (0, _utils.classJoin)(["flex flex-row items-center justify-center", direction === "rtl" ? "dir-rtl" : "dir-ltr"]),
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      ref: inputsContainerRef,
      children: schema === null || schema === void 0 ? void 0 : schema.map(function (input, index) {
        return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          className: (0, _utils.classJoin)(["text-center h-full px-1.5", disabled ? "border-disabled" : "border-primary", direction === "rtl" ? "border-l first:pr-2 last:pl-2 last:border-l-0" : "border-r first:pl-2 last:pr-2 last:border-r-0", input.rootClassName || ""]),
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_BaseInput.BaseInput, {
            name: input.name,
            id: "".concat(id, "-part").concat(index),
            value: (combinedValue === null || combinedValue === void 0 ? void 0 : combinedValue[input === null || input === void 0 ? void 0 : input.name]) || "",
            type: input.type || "text",
            align: input.align || align,
            onChange: handleChange,
            disabled: disabled,
            readOnly: readOnly,
            fontSize: size === "sm" ? "xs" : "sm",
            className: (0, _utils.classJoin)(["w-full border-b border-disabled appearance-none-all h-full", size === "sm" ? "leading-xs" : "leading-sm"]),
            placeholder: input.placeholder
          })
        }, index);
      })
    })
  }));
});
exports.InputMultipleInputs = InputMultipleInputs;
InputMultipleInputs.defaultProps = _objectSpread(_objectSpread({}, (0, _utils.filterObj)(_Input.Input.defaultProps, function (v, k) {
  return !["type"].includes(k);
})), {}, {
  direction: "rtl",
  schema: [{
    name: "address",
    type: "text",
    placeholder: "آدرس",
    rootClassName: "basis-full"
  }, {
    name: "no",
    type: "text",
    placeholder: "پلاک",
    rootClassName: "basis-1/4"
  }, {
    name: "floor",
    type: "text",
    placeholder: "طبقه",
    rootClassName: "basis-1/4"
  }, {
    name: "unit",
    type: "text",
    placeholder: "واحد",
    rootClassName: "basis-1/4"
  }]
});
var _default = InputMultipleInputs;
exports["default"] = _default;