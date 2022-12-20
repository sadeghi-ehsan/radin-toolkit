"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
var _react = require("react");
var _utils = require("../../../utils");
var _Input = require("../Input");
var _jsxRuntime = require("react/jsx-runtime");
var _excluded = ["value", "align", "options", "onChange", "name", "firstOptionAsDefault", "disabled", "readOnly"];
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
var InputMultiplier = function InputMultiplier(_ref) {
  var _options$;
  var value = _ref.value,
    align = _ref.align,
    options = _ref.options,
    onChange = _ref.onChange,
    name = _ref.name,
    firstOptionAsDefault = _ref.firstOptionAsDefault,
    disabled = _ref.disabled,
    readOnly = _ref.readOnly,
    restProps = (0, _objectWithoutProperties2["default"])(_ref, _excluded);
  var _useState = (0, _react.useState)({
      value: (value === null || value === void 0 ? void 0 : value.value) || "",
      selectedOption: (value === null || value === void 0 ? void 0 : value.selectedOption) || (firstOptionAsDefault && options !== null && options !== void 0 && options.length ? options === null || options === void 0 ? void 0 : (_options$ = options[0]) === null || _options$ === void 0 ? void 0 : _options$.value : "") || ""
    }),
    _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
    combinedValue = _useState2[0],
    setCombinedValue = _useState2[1];

  /**
   * onChange handler
   */
  (0, _react.useEffect)(function () {
    if (!(0, _utils.empty)(onChange) && (0, _utils.isCallable)(onChange) && !(0, _utils.empty)(combinedValue) && JSON.stringify(combinedValue) !== JSON.stringify(value)) {
      onChange(combinedValue, name);
    }
  }, [combinedValue]);
  var RenderCircleButtons = (0, _react.useCallback)(function () {
    var _ref2, _ref2$reverse;
    return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: "z-10 flex flex-row-reverse ml-6 -mt-3.5",
      children: (options === null || options === void 0 ? void 0 : options.length) && ((_ref2 = (0, _toConsumableArray2["default"])(options)) === null || _ref2 === void 0 ? void 0 : (_ref2$reverse = _ref2.reverse()) === null || _ref2$reverse === void 0 ? void 0 : _ref2$reverse.map(function (option) {
        return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          className: (0, _utils.classJoin)(["rounded-full cursor-pointer text-white items-center justify-center flex border-3 border-card-bg h-7 min-w-8 -ml-2 pl-1.2 pt-0.5 pr-2 z-10 last:pr-1.2", (combinedValue === null || combinedValue === void 0 ? void 0 : combinedValue.selectedOption) === option.value ? disabled ? "bg-card-border text-idle" : " bg-primary" : " bg-primary-border", disabled ? "bg-disabled text-idle pointer-events-none" : ""]),
          onClick: function onClick() {
            setCombinedValue(function (prev) {
              return _objectSpread(_objectSpread({}, prev), {}, {
                selectedOption: option.value
              });
            });
          },
          children: option.label
        }, option.value);
      }))
    });
  }, [combinedValue, disabled]);
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_Input.Input, _objectSpread(_objectSpread({}, restProps), {}, {
    name: name,
    disabled: disabled,
    readOnly: readOnly,
    onChange: function onChange(v) {
      setCombinedValue(function (prev) {
        return _objectSpread(_objectSpread({}, prev), {}, {
          value: v
        });
      });
    },
    endLabelAdornment: /*#__PURE__*/(0, _jsxRuntime.jsx)(RenderCircleButtons, {}),
    align: align || (0, _utils.ifNotEmpty)(value, "left", "right"),
    value: value === null || value === void 0 ? void 0 : value.value
  }));
};
InputMultiplier.defaultProps = _objectSpread(_objectSpread({}, (0, _utils.filterObj)(_Input.Input.defaultProps, function (v, k) {
  return !["value"].includes(k);
})), {}, {
  firstOptionAsDefault: true
});
var _default = InputMultiplier;
exports["default"] = _default;