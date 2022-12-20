"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactLottie = _interopRequireDefault(require("react-lottie"));
var _jsxRuntime = require("react/jsx-runtime");
var LottieComponent = function LottieComponent(_ref) {
  var animationFile = _ref.animationFile;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactLottie["default"], {
    width: 26,
    height: 26,
    speed: 1,
    style: {
      cursor: "default",
      margin: "0px",
      justifyContent: "flex-start"
    },
    options: {
      loop: true,
      autoplay: true,
      animationData: animationFile,
      rendererSettings: {
        preserveAspectRatio: "xMidYMid slice"
      }
    },
    isClickToPauseDisabled: true
  });
};
var _default = LottieComponent;
exports["default"] = _default;