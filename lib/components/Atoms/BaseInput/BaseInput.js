"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.BaseInput = void 0;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
var _react = require("react");
var _utils = require("../../../utils");
var _utils2 = require("./utils");
var _tailwind = require("../../../constants/tailwind");
var _jsxRuntime = require("react/jsx-runtime");
var _excluded = ["name", "align", "className", "disabled", "fontSize", "onChange", "value", "readOnly"];
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
var BaseInput = /*#__PURE__*/(0, _react.forwardRef)(function (_ref, ref) {
  var name = _ref.name,
    align = _ref.align,
    className = _ref.className,
    disabled = _ref.disabled,
    fontSize = _ref.fontSize,
    _onChange = _ref.onChange,
    value = _ref.value,
    readOnly = _ref.readOnly,
    restProps = (0, _objectWithoutProperties2["default"])(_ref, _excluded);
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("input", _objectSpread(_objectSpread({}, restProps), {}, {
    name: name,
    className: (0, _utils.classJoin)(["bg-transparent outline-none focus:outline-none", (0, _utils.ifNotEmpty)(fontSize, _tailwind.fontSizeName[fontSize]), (0, _utils.ifNotEmpty)(align, _utils2.baseInputAlignments[align]), (0, _utils.ifEmpty)(disabled, "text-light-text placeholder-idle", "text-disabled placeholder-disabled"), readOnly ? "cursor-default" : "", className]),
    disabled: disabled,
    ref: ref,
    readOnly: readOnly,
    value: value
  }, (0, _utils.ifNotEmpty)(_onChange, {
    onChange: function onChange(e) {
      e.persist();
      return _onChange(e.target.value, name, e);
    }
  }, {})));
});
exports.BaseInput = BaseInput;
BaseInput.defaultProps = {
  type: "text",
  fontSize: "sm"
};
var _default = BaseInput;
exports["default"] = _default;