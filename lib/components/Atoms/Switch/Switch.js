"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.Switch = void 0;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
var _react = require("react");
var _utils = require("../../../utils");
var _SwitchOption = _interopRequireDefault(require("./SwitchOption"));
var _jsxRuntime = require("react/jsx-runtime");
var _excluded = ["name", "vertical", "disabled", "onChange", "innerClassName", "outerClassName", "children", "value", "labelClassName"];
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
var Switch = function Switch(_ref) {
  var name = _ref.name,
    vertical = _ref.vertical,
    disabled = _ref.disabled,
    onChange = _ref.onChange,
    innerClassName = _ref.innerClassName,
    outerClassName = _ref.outerClassName,
    children = _ref.children,
    value = _ref.value,
    labelClassName = _ref.labelClassName,
    otherProps = (0, _objectWithoutProperties2["default"])(_ref, _excluded);
  var parentRef = (0, _react.useRef)();
  var _useState = (0, _react.useState)({
      width: 0,
      left: "50%",
      top: "50%",
      isDisabled: false
    }),
    _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
    offset = _useState2[0],
    setOffset = _useState2[1];
  var bgSlider = function bgSlider(_ref2) {
    var offsetWidth = _ref2.offsetWidth,
      offsetLeft = _ref2.offsetLeft,
      offsetHeight = _ref2.offsetHeight,
      offsetTop = _ref2.offsetTop,
      _ref2$isDisabled = _ref2.isDisabled,
      isDisabled = _ref2$isDisabled === void 0 ? false : _ref2$isDisabled;
    setOffset({
      width: "".concat(offsetWidth, "px"),
      left: "".concat(offsetLeft, "px"),
      top: "".concat(offsetTop, "px"),
      height: "".concat(offsetHeight, "px"),
      isDisabled: isDisabled
    });
  };
  var onOptionChange = function onOptionChange(v, labelRef) {
    var _labelRef$current = labelRef.current,
      offsetWidth = _labelRef$current.offsetWidth,
      offsetLeft = _labelRef$current.offsetLeft,
      offsetHeight = _labelRef$current.offsetHeight,
      offsetTop = _labelRef$current.offsetTop;
    bgSlider({
      offsetWidth: offsetWidth,
      offsetLeft: offsetLeft,
      offsetHeight: offsetHeight,
      offsetTop: offsetTop
    });
    if ((0, _utils.isCallable)(onChange)) onChange(v, name);
  };
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    ref: parentRef,
    className: (0, _utils.classJoin)(["sbt-switch flex items-center relative p-1 bg-primary", disabled ? "bg-opacity-10" : "hover:bg-primary-hover", vertical ? "flex-col" : "h-10", outerClassName.includes("rounded") ? outerClassName : (0, _utils.classJoin)(["rounded-xxl", outerClassName])]),
    children: [(0, _utils.modifyReactChildren)(children, _objectSpread(_objectSpread({}, otherProps), {}, {
      checked: value,
      name: name,
      vertical: vertical,
      onChange: onOptionChange,
      disabled: disabled,
      bgSlider: bgSlider,
      labelClassName: (0, _utils.classJoin)([!vertical ? "ml-1 pb-1.2" : "pb-0", labelClassName])
    })), /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
      className: (0, _utils.classJoin)(["bg-light-text w-3 inset-y-1 absolute transition-sbt", offset.isDisabled || disabled ? "bg-opacity-20" : "", innerClassName.includes("rounded") ? innerClassName : (0, _utils.classJoin)(["rounded-xl", innerClassName])]),
      style: vertical ? {
        width: offset.width,
        top: offset.top,
        height: offset.height
      } : {
        width: offset.width,
        left: offset.left
      }
    })]
  });
};
exports.Switch = Switch;
Switch.defaultProps = {
  disabled: false,
  innerClassName: "",
  outerClassName: "",
  value: null
};
Switch.Option = _SwitchOption["default"];
var _default = Switch;
exports["default"] = _default;