"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.radioVariants = exports.radioSizes = exports.radioColors = exports.SquircleBorderSvg = void 0;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
var _react = require("react");
var _tailwind = require("../../../constants/tailwind");
var _jsxRuntime = require("react/jsx-runtime");
var _excluded = ["fill", "selected", "strokeWidth", "padding", "variant"];
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
var radioSizes = {
  sm: "w-3 h-3 p-0.5",
  base: "w-3.5 h-3.5 p-0.5",
  lg: "w-4 h-4 p-0.75",
  xl: "w-4.5 h-4.5 p-0.75"
};
exports.radioSizes = radioSizes;
var radioColors = {
  primary: {
    shape: "border-primary",
    bullet: "bg-primary"
  },
  error: {
    shape: "border-error",
    bullet: "bg-error"
  },
  success: {
    shape: "border-success",
    bullet: "bg-success"
  }
};
exports.radioColors = radioColors;
var radioVariants = {
  check: "",
  fill: "",
  times: "",
  circleFill: ""
};
exports.radioVariants = radioVariants;
var SquircleBorderSvg = /*#__PURE__*/(0, _react.forwardRef)(function (_ref, ref) {
  var fill = _ref.fill,
    selected = _ref.selected,
    _ref$strokeWidth = _ref.strokeWidth,
    strokeWidth = _ref$strokeWidth === void 0 ? 1 : _ref$strokeWidth,
    _ref$padding = _ref.padding,
    padding = _ref$padding === void 0 ? 3 : _ref$padding,
    _ref$variant = _ref.variant,
    variant = _ref$variant === void 0 ? "fill" : _ref$variant,
    restProps = (0, _objectWithoutProperties2["default"])(_ref, _excluded);
  // @ts-ignore
  var w = parseFloat(restProps.width) * 16;
  var h = w / 2;
  var sW = strokeWidth + 0.5;
  var curve = w * 18 / 200;
  var padd = padding + 1;
  var drawIcon = function drawIcon() {
    switch (variant) {
      case "check":
        return /*#__PURE__*/(0, _jsxRuntime.jsx)("path", {
          className: "transition-sbt",
          stroke: selected ? fill : "transparent",
          strokeMiterlimit: "10",
          strokeWidth: sW,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          fill: "none",
          d: "M".concat(w - sW - padd, " ").concat(sW + padd, "l-").concat((w - (sW + padd) * 2) * 2 / 3, " ").concat(w - (sW + padd) * 2, "-").concat((w - (sW + padd) * 2) / 3, "-").concat((w - (sW + padd) * 2) / 2)
        });
      case "times":
        return /*#__PURE__*/(0, _jsxRuntime.jsx)("path", {
          className: "transition-sbt",
          stroke: selected ? fill : "transparent",
          strokeMiterlimit: "10",
          strokeWidth: sW,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          fill: "none",
          d: "M ".concat(sW + padd, " ").concat(sW + padd, " L ").concat(w - sW - padd, " ").concat(w - sW - padd, " M ").concat(w - (sW + padd), " ").concat(sW + padd, " L ").concat(sW + padd, " ").concat(w - sW - padd)
        });
      default:
        return /*#__PURE__*/(0, _jsxRuntime.jsx)("g", {
          transform: "translate(".concat(sW + padding, ", ").concat(sW + padding, ")"),
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)("path", {
            className: "transition-sbt",
            d: "\n        M 0, ".concat(h, "\n        C 0, ").concat(curve, " ").concat(curve, ", 0 ").concat(h, ", 0\n        S ").concat(w, ", ").concat(curve, " ").concat(w, ", ").concat(h, "\n        ").concat(w - curve, ", ").concat(w, " ").concat(h, ", ").concat(w, "\n        0, ").concat(w - curve, " 0, ").concat(h, "\n        "),
            transform: "scale(".concat((w - (sW + padding) * 2) / w, ")"),
            style: {
              fill: selected ? fill : "transparent"
            }
          })
        });
    }
  };
  return (
    /*#__PURE__*/
    // @ts-ignore
    (0, _jsxRuntime.jsxs)("svg", _objectSpread(_objectSpread({
      xmlns: "http://www.w3.org/2000/svg"
    }, restProps), {}, {
      viewBox: "0 0 ".concat(w, " ").concat(w),
      ref: ref,
      children: [drawIcon(), /*#__PURE__*/(0, _jsxRuntime.jsx)("path", {
        className: "transition-sbt",
        d: "\n        M 0, ".concat(h, "\n        C 0, ").concat(curve, " ").concat(curve, ", 0 ").concat(h, ", 0\n        S ").concat(w, ", ").concat(curve, " ").concat(w, ", ").concat(h, "\n        ").concat(w - curve, ", ").concat(w, " ").concat(h, ", ").concat(w, "\n        0, ").concat(w - curve, " 0, ").concat(h, "\n        "),
        fill: "none",
        transform: "scale(".concat((w - sW) / w, ") translate(").concat(sW / 2, ", ").concat(sW / 2, ")"),
        stroke: selected ? fill : _tailwind.colors.idle,
        strokeWidth: sW
      })]
    }))
  );
});
exports.SquircleBorderSvg = SquircleBorderSvg;