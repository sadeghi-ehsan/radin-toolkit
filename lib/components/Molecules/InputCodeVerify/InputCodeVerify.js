"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.InputCodeVerify = void 0;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
var _react = require("react");
var _utils = require("../../../utils");
var _FormElementWrapper = require("../../Atoms/FormElementWrapper");
var _Input = require("../Input");
var _BaseInput = require("../../Atoms/BaseInput");
var _RenderEndLabelAdornment = _interopRequireDefault(require("./RenderEndLabelAdornment"));
var _utils2 = require("./utils");
var _jsxRuntime = require("react/jsx-runtime");
var _excluded = ["className", "size", "id", "onChange", "disabled", "readOnly", "value", "name", "style", "inputsLength", "placeholder", "onResend", "counterSeconds", "autoFocusFirstField", "isLoading", "resendBtnText"];
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
var InputCodeVerify = /*#__PURE__*/(0, _react.forwardRef)(function (_ref, passedRef) {
  var className = _ref.className,
    size = _ref.size,
    _id = _ref.id,
    onChange = _ref.onChange,
    disabled = _ref.disabled,
    readOnly = _ref.readOnly,
    value = _ref.value,
    name = _ref.name,
    style = _ref.style,
    inputsLength = _ref.inputsLength,
    placeholder = _ref.placeholder,
    onResend = _ref.onResend,
    counterSeconds = _ref.counterSeconds,
    autoFocusFirstField = _ref.autoFocusFirstField,
    isLoading = _ref.isLoading,
    resendBtnText = _ref.resendBtnText,
    restProps = (0, _objectWithoutProperties2["default"])(_ref, _excluded);
  var id = _id || "InputCodeVerify-".concat(name || (0, _utils.randomStr)());
  var _extractFormElementPr = (0, _utils.extractFormElementProps)(restProps),
    _extractFormElementPr2 = (0, _slicedToArray2["default"])(_extractFormElementPr, 1),
    wrapperProps = _extractFormElementPr2[0];
  var ref = (0, _utils.ifNotEmpty)(passedRef, passedRef, (0, _react.useRef)());
  var itemsRef = (0, _react.useRef)([]);
  var _useState = (0, _react.useState)(false),
    _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
    focused = _useState2[0],
    setFocused = _useState2[1];
  var _useState3 = (0, _react.useState)((value === null || value === void 0 ? void 0 : value.slice(0, inputsLength)) || ""),
    _useState4 = (0, _slicedToArray2["default"])(_useState3, 2),
    combinedValue = _useState4[0],
    setCombinedValue = _useState4[1];
  var _useState5 = (0, _react.useState)(0),
    _useState6 = (0, _slicedToArray2["default"])(_useState5, 2),
    numberOfResendClicked = _useState6[0],
    setNumberOfResendClicked = _useState6[1];
  var _useState7 = (0, _react.useState)(counterSeconds),
    _useState8 = (0, _slicedToArray2["default"])(_useState7, 2),
    counter = _useState8[0],
    setCounter = _useState8[1];
  (0, _react.useEffect)(function () {
    if (value !== combinedValue) {
      setCombinedValue((value === null || value === void 0 ? void 0 : value.slice(0, inputsLength)) || "");
    }

    /**
     * auto focus first field if value set to empty
     */
    if (value === null || value === "" || value === undefined) {
      var _itemsRef$current, _itemsRef$current$;
      itemsRef === null || itemsRef === void 0 ? void 0 : (_itemsRef$current = itemsRef.current) === null || _itemsRef$current === void 0 ? void 0 : (_itemsRef$current$ = _itemsRef$current[0]) === null || _itemsRef$current$ === void 0 ? void 0 : _itemsRef$current$.focus();
    }
  }, [value]);
  (0, _react.useEffect)(function () {
    var timer = !disabled && !isLoading && counter > 0 && setInterval(function () {
      return setCounter(counter - 1);
    }, 1000);
    return function () {
      return clearInterval(timer);
    };
  }, [counter, disabled, isLoading]);
  (0, _react.useEffect)(function () {
    itemsRef.current = itemsRef.current.slice(0, inputsLength);
  }, [inputsLength]);

  /**
   * onChange handler
   */
  (0, _react.useEffect)(function () {
    if (!(0, _utils.empty)(onChange) && (0, _utils.isCallable)(onChange) && !(0, _utils.empty)("".concat(combinedValue)) && "".concat(combinedValue) !== value) {
      onChange("".concat(combinedValue), name, null);
    }
  }, [combinedValue]);
  function handleResend() {
    if (!(0, _utils.empty)(onResend) && (0, _utils.isCallable)(onResend)) {
      onResend(numberOfResendClicked);
      setCounter(counterSeconds);
      setCombinedValue("");
      setNumberOfResendClicked(function (prev) {
        return prev + 1;
      });
    }
  }
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_FormElementWrapper.FormElementWrapper, _objectSpread(_objectSpread({}, wrapperProps), {}, {
    id: id,
    size: "md",
    disabled: disabled,
    style: style,
    className: (0, _utils.classJoin)(["sbt-input", className]),
    onFieldsetClick: function onFieldsetClick() {
      return (0, _utils2.focusRef)(ref);
    },
    fieldsetClassName: "!h-auto",
    legendClassName: "!mb-5",
    endLabelAdornment: /*#__PURE__*/(0, _jsxRuntime.jsx)(_RenderEndLabelAdornment["default"], {
      isLoading: isLoading,
      disabled: disabled,
      onResend: onResend,
      handleResend: handleResend,
      counter: counter,
      resendBtnText: resendBtnText
    }),
    variant: "none",
    childrenClassName: "flex flex-nowrap items-center dir-ltr justify-center h-auto py-0 pl-0",
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      children: (0, _toConsumableArray2["default"])(Array(inputsLength).keys()).map(function (i) {
        return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          className: (0, _utils.classJoin)(["flex-1 text-center h-auto px-1 first:pl-0 last:pr-0"]),
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_BaseInput.BaseInput, {
            name: "part".concat(i),
            id: i === 0 ? id : undefined,
            ref: function ref(el) {
              itemsRef.current[i] = el;
            },
            autoFocus: autoFocusFirstField && i === 0,
            autoComplete: "off",
            onFocus: function onFocus() {
              return setFocused(true);
            },
            onBlur: function onBlur() {
              return setFocused(false);
            },
            value: combinedValue === null || combinedValue === void 0 ? void 0 : combinedValue.charAt(i),
            type: "number",
            align: "center",
            onChange: function onChange(e) {
              var n = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : name;
              return (0, _utils2.handleChange)(e, n, {
                itemsRef: itemsRef,
                setCombinedValue: setCombinedValue
              });
            },
            disabled: disabled || isLoading,
            readOnly: readOnly,
            fontSize: size === "sm" ? "xs" : "sm",
            onKeyDown: function onKeyDown(e) {
              return (0, _utils2.handleKeyDown)(e, {
                itemsRef: itemsRef
              });
            },
            onPaste: function onPaste(e) {
              return (0, _utils2.handlePaste)(e, {
                setCombinedValue: setCombinedValue,
                inputsLength: inputsLength
              });
            },
            className: (0, _utils.classJoin)(["rounded-xl border appearance-none-all transition focus:shadow-input focus:shadow-primary-shadow", size === "sm" ? " leading-xs h-9 w-10 " : "leading-sm w-12 h-11 ", (0, _utils.ifNotEmpty)(wrapperProps.error, "border-error shadow-input shadow-error", focused || value ? "border-primary" : "border-disabled")]),
            placeholder: placeholder
          })
        }, i);
      })
    })
  }));
});
exports.InputCodeVerify = InputCodeVerify;
InputCodeVerify.defaultProps = _objectSpread(_objectSpread({}, (0, _utils.filterObj)(_Input.Input.defaultProps, function (v, k) {
  return !["variant", "type", "align", "onPaste", "onKeyDown", "size", "clearable", "allowClear", "clearedValue", "endLabelAdornment", "fieldsetClassName", "legendClassName"].includes(k);
})), {}, {
  inputsLength: 4,
  counterSeconds: 60,
  autoFocusFirstField: true,
  resendBtnText: "ارسال مجدد"
});
var _default = InputCodeVerify;
exports["default"] = _default;