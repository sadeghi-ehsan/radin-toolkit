"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.InputBankCard = void 0;
var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _react = require("react");
var _radinIcon = require("@sadeghi-ehsan/radin-icon");
var _utils = require("../../../utils");
var _FormElementWrapper = require("../../Atoms/FormElementWrapper");
var _BaseInput = require("../../Atoms/BaseInput");
var _utils2 = require("./utils");
var _Input = require("../Input");
var _jsxRuntime = require("react/jsx-runtime");
var _excluded = ["className", "clearedValue", "size", "clearable", "id", "onChange", "disabled", "readOnly", "value", "name", "style", "startAdornment", "placeholder"];
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
// normalize value to 4 parts object
var splitStrToSeparatePartsObj = function splitStrToSeparatePartsObj(str) {
  var skip = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  if (skip === 1) {
    return _objectSpread(_objectSpread({
      part2: str === null || str === void 0 ? void 0 : str.slice(0, 4)
    }, (str === null || str === void 0 ? void 0 : str.slice(4, 8)) && {
      part3: str === null || str === void 0 ? void 0 : str.slice(4, 8)
    }), (str === null || str === void 0 ? void 0 : str.slice(8, 12)) && {
      part4: str === null || str === void 0 ? void 0 : str.slice(8, 12)
    });
  }
  if (skip === 2) {
    return _objectSpread({
      part3: str === null || str === void 0 ? void 0 : str.slice(0, 4)
    }, (str === null || str === void 0 ? void 0 : str.slice(4, 8)) && {
      part4: str === null || str === void 0 ? void 0 : str.slice(4, 8)
    });
  }
  if (skip === 3) {
    return {
      part4: str === null || str === void 0 ? void 0 : str.slice(0, 4)
    };
  }
  return _objectSpread(_objectSpread(_objectSpread({
    part1: str === null || str === void 0 ? void 0 : str.slice(0, 4)
  }, (str === null || str === void 0 ? void 0 : str.slice(4, 8)) && {
    part2: str === null || str === void 0 ? void 0 : str.slice(4, 8)
  }), (str === null || str === void 0 ? void 0 : str.slice(8, 12)) && {
    part3: str === null || str === void 0 ? void 0 : str.slice(8, 12)
  }), (str === null || str === void 0 ? void 0 : str.slice(12, 16)) && {
    part4: str === null || str === void 0 ? void 0 : str.slice(12, 16)
  });
};
var InputBankCard = /*#__PURE__*/(0, _react.forwardRef)(function (_ref, passedRef) {
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
    restProps = (0, _objectWithoutProperties2["default"])(_ref, _excluded);
  var id = _id || "InputBankCard-".concat(filedName || (0, _utils.randomStr)());
  var ref = (0, _utils.ifNotEmpty)(passedRef, passedRef, (0, _react.useRef)());
  var inputsContainerRef = (0, _react.useRef)();
  var _extractFormElementPr = (0, _utils.extractFormElementProps)(restProps),
    _extractFormElementPr2 = (0, _slicedToArray2["default"])(_extractFormElementPr, 1),
    wrapperProps = _extractFormElementPr2[0];
  var _useState = (0, _react.useState)(_utils2.initialState),
    _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
    combinedValue = _useState2[0],
    setCombinedValue = _useState2[1];
  var inputsContainer = inputsContainerRef.current;
  var inputs = (0, _toConsumableArray2["default"])((inputsContainer === null || inputsContainer === void 0 ? void 0 : inputsContainer.querySelectorAll("input")) || []);
  var normalizedValue = "".concat(combinedValue.part1).concat(combinedValue.part2).concat(combinedValue.part3).concat(combinedValue.part4);
  function focusPrevField(InputIndex) {
    if (inputs[InputIndex - 1]) {
      setTimeout(function () {
        inputs[InputIndex - 1].focus();
      }, 0);
    }
  }
  function focusNextField(InputIndex) {
    if (inputs[InputIndex + 1]) {
      setTimeout(function () {
        inputs[InputIndex + 1].focus();
      }, 0);
    }
  }
  (0, _react.useEffect)(function () {
    if (!(0, _utils.empty)(value) && value !== normalizedValue) {
      setCombinedValue(function (prev) {
        return _objectSpread(_objectSpread({}, prev), splitStrToSeparatePartsObj(value));
      });
    } else if ((0, _utils.empty)(value)) {
      setCombinedValue(_utils2.initialState);
    }
  }, [value]);

  /**
   * onChange handler
   */
  (0, _react.useEffect)(function () {
    if (!(0, _utils.empty)(onChange) && (0, _utils.isCallable)(onChange) && !(0, _utils.empty)(normalizedValue) && JSON.stringify(normalizedValue) !== JSON.stringify(value)) {
      onChange(normalizedValue, filedName, null);
    }
  }, [normalizedValue]);
  var onClear = function onClear() {
    setCombinedValue(function (prev) {
      return clearedValue ? _objectSpread(_objectSpread({}, prev), splitStrToSeparatePartsObj(clearedValue)) : _utils2.initialState;
    });
    if (value === undefined) {
      if (!(0, _utils.empty)(ref === null || ref === void 0 ? void 0 : ref.current)) {
        ref.current.value = "";
      }
    }
  };
  var handleChange = function handleChange(v, n) {
    if (!(0, _utils.isNumberString)(v)) {
      return;
    }
    setCombinedValue(function (prev) {
      return _objectSpread(_objectSpread({}, prev), {}, (0, _defineProperty2["default"])({}, n, (v === null || v === void 0 ? void 0 : v.length) > 4 ? v.slice(0, 4) : v));
    });
    if (v.length >= 4) {
      var InputIndex = inputs.findIndex(function (a) {
        return a.name === n;
      });
      focusNextField(InputIndex);
    }
  };

  // handleEnter
  var handleKeyDown = function handleKeyDown(e) {
    var backspace = (0, _utils.keyboardEventChecker)(e, "Backspace");
    var target = e.target;
    var InputIndex = inputs.indexOf(target);
    if (backspace) {
      var _target$value;
      if (((target === null || target === void 0 ? void 0 : (_target$value = target.value) === null || _target$value === void 0 ? void 0 : _target$value.length) || 0) - 1 < 0) {
        focusPrevField(InputIndex);
      }
    }
  };
  var handlePaste = function handlePaste(e) {
    e.preventDefault();
    if (!e.clipboardData || !e.clipboardData.getData) {
      return;
    }

    // regex replace all whitespace with empty string
    var pasteData = e.clipboardData.getData("text/plain").replace(/\s/g, "");
    if (!pasteData) {
      return;
    }
    var target = e.target;
    var InputIndex = inputs.indexOf(target);
    setCombinedValue(function (prev) {
      return _objectSpread(_objectSpread({}, prev), splitStrToSeparatePartsObj(pasteData, InputIndex === 0 ? null : InputIndex));
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
    childrenClassName: "flex flex-nowrap items-center dir-ltr justify-center ",
    startAdornment: startAdornment || /*#__PURE__*/(0, _jsxRuntime.jsx)(_radinIcon.BankCardAdd, {
      size: "xl",
      color: disabled ? "disabled" : "idle"
    }),
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      ref: inputsContainerRef,
      children: [1, 2, 3, 4].map(function (i) {
        return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          className: (0, _utils.classJoin)(["flex-1 text-center h-full px-6 first:pl-2 last:pr-2 border-r last:border-r-0", disabled ? "border-r-disabled" : "border-r-primary"]),
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_BaseInput.BaseInput, {
            name: "part".concat(i),
            id: i === 1 ? id : undefined,
            value: combinedValue === null || combinedValue === void 0 ? void 0 : combinedValue["part".concat(i)],
            type: "text",
            align: "center",
            onChange: handleChange,
            disabled: disabled,
            readOnly: readOnly,
            fontSize: size === "sm" ? "xs" : "sm",
            onKeyDown: handleKeyDown,
            onPaste: function onPaste(e) {
              return handlePaste(e);
            },
            className: (0, _utils.classJoin)(["w-8.5 border-b border-disabled appearance-none-all h-full", size === "sm" ? "leading-xs" : "leading-sm"]),
            placeholder: placeholder
          })
        }, i);
      })
    })
  }));
});
exports.InputBankCard = InputBankCard;
InputBankCard.defaultProps = _objectSpread({}, (0, _utils.filterObj)(_Input.Input.defaultProps, function (v, k) {
  return !["type", "align", "onPaste", "onKeyDown", "maxLength"].includes(k);
}));
var _default = InputBankCard;
exports["default"] = _default;