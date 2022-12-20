"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.Input = void 0;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
var _react = require("react");
var _BaseInput = require("../../Atoms/BaseInput");
var _FormElementWrapper = require("../../Atoms/FormElementWrapper");
var _utils = require("../../../utils");
var _jsxRuntime = require("react/jsx-runtime");
var _excluded = ["className", "clearedValue", "size", "clearable", "legendClassName", "id", "onChange", "disabled", "readOnly", "value", "name", "style", "type", "align"];
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
var Input = /*#__PURE__*/(0, _react.forwardRef)(function (_ref, passedRef) {
  var className = _ref.className,
    clearedValue = _ref.clearedValue,
    size = _ref.size,
    clearable = _ref.clearable,
    legendClassName = _ref.legendClassName,
    _id = _ref.id,
    onChange = _ref.onChange,
    disabled = _ref.disabled,
    readOnly = _ref.readOnly,
    value = _ref.value,
    name = _ref.name,
    style = _ref.style,
    type = _ref.type,
    align = _ref.align,
    restProps = (0, _objectWithoutProperties2["default"])(_ref, _excluded);
  var id = _id || "Input-".concat(name || (0, _utils.randomStr)());
  var ref = (0, _utils.ifNotEmpty)(passedRef, passedRef, (0, _react.useRef)());
  var _extractFormElementPr = (0, _utils.extractFormElementProps)(restProps),
    _extractFormElementPr2 = (0, _slicedToArray2["default"])(_extractFormElementPr, 2),
    wrapperProps = _extractFormElementPr2[0],
    componentProps = _extractFormElementPr2[1];
  var handleChange = function handleChange(v) {
    var n = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : name;
    var e = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : undefined;
    if (!(0, _utils.empty)(onChange) && (0, _utils.isCallable)(onChange)) {
      onChange(v, n, e);
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
  var focusRef = function focusRef() {
    if (!(0, _utils.empty)(ref === null || ref === void 0 ? void 0 : ref.current)) {
      ref.current.focus();
    }
  };
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_FormElementWrapper.FormElementWrapper, _objectSpread(_objectSpread({}, wrapperProps), {}, {
    id: id,
    onClear: onClear,
    size: size,
    disabled: disabled,
    style: style,
    clearable: !disabled && !readOnly && clearable,
    allowClear: !(0, _utils.empty)(value) || value === undefined,
    className: (0, _utils.classJoin)([className, "sbt-input"]),
    onFieldsetClick: focusRef,
    legendClassName: (0, _utils.classJoin)(["min-w-fit", legendClassName]),
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_BaseInput.BaseInput, _objectSpread(_objectSpread({}, componentProps), {}, {
      id: id,
      name: name,
      value: value,
      type: type,
      align: (0, _utils.ifNotEmpty)(align, align, ["email", "password", "tel", "url", "number"].includes(type) && !(0, _utils.empty)(value) ? "left" : undefined),
      onChange: handleChange,
      disabled: disabled,
      readOnly: readOnly,
      fontSize: size === "sm" ? "xs" : "sm",
      ref: ref
    }))
  }));
});
exports.Input = Input;
Input.defaultProps = _objectSpread(_objectSpread(_objectSpread({}, _FormElementWrapper.FormElementWrapper.defaultProps), (0, _utils.filterObj)(_BaseInput.BaseInput.defaultProps, function (v, k) {
  return k !== "fontSize";
})), {}, {
  type: _BaseInput.BaseInput.defaultProps.type || "text",
  clearedValue: ""
});
var _default = Input;
exports["default"] = _default;