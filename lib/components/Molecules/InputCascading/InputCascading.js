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
var _utils = require("../../../utils");
var _utils2 = require("./utils");
var _excluded = ["value", "options", "onChange", "name", "firstOptionAsDefault", "inputType"];
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
var InputCascading = function InputCascading(props) {
  var _options$;
  var value = props.value,
    options = props.options,
    onChange = props.onChange,
    name = props.name,
    firstOptionAsDefault = props.firstOptionAsDefault,
    inputType = props.inputType,
    restProps = (0, _objectWithoutProperties2["default"])(props, _excluded);
  var defaultSelectedOption = (firstOptionAsDefault && options !== null && options !== void 0 && options.length ? options === null || options === void 0 ? void 0 : (_options$ = options[0]) === null || _options$ === void 0 ? void 0 : _options$.value : "") || "";
  var _useState = (0, _react.useState)(false),
    _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
    isDropDownVisible = _useState2[0],
    setIsDropDownVisible = _useState2[1];
  var _useState3 = (0, _react.useState)({
      value: (value === null || value === void 0 ? void 0 : value.value) || "",
      selectedOption: (value === null || value === void 0 ? void 0 : value.selectedOption) || defaultSelectedOption
    }),
    _useState4 = (0, _slicedToArray2["default"])(_useState3, 2),
    combinedValue = _useState4[0],
    setCombinedValue = _useState4[1];

  /**
   * onChange handler
   */
  (0, _react.useEffect)(function () {
    if (!(0, _utils.empty)(onChange) && (0, _utils.isCallable)(onChange) && !(0, _utils.empty)(combinedValue) && JSON.stringify(combinedValue) !== JSON.stringify(value)) {
      onChange(combinedValue, name);
    }
  }, [combinedValue]);
  (0, _react.useEffect)(function () {
    if (!(0, _utils.empty)(value) && ((value === null || value === void 0 ? void 0 : value.value) !== combinedValue.value || (value === null || value === void 0 ? void 0 : value.selectedOption) !== combinedValue.selectedOption)) {
      setCombinedValue({
        value: (value === null || value === void 0 ? void 0 : value.value) || "",
        selectedOption: (value === null || value === void 0 ? void 0 : value.selectedOption) || defaultSelectedOption
      });
    }
  }, [value]);
  var renderFunctionsParams = _objectSpread(_objectSpread({}, restProps), {}, {
    name: name,
    combinedValue: combinedValue,
    options: options,
    setCombinedValue: setCombinedValue,
    setIsDropDownVisible: setIsDropDownVisible,
    isDropDownVisible: isDropDownVisible,
    value: value
  });
  if (inputType === "select") return (0, _utils2.renderTypeSelectContent)(renderFunctionsParams);
  return (0, _utils2.renderTypeInputContent)(renderFunctionsParams);
};
InputCascading.defaultProps = {
  inputType: "input",
  firstOptionAsDefault: true
};
var _default = InputCascading;
exports["default"] = _default;