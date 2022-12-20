"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.Stepper = void 0;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
var _react = require("react");
var _antd = require("antd");
var _utils = require("./utils");
var _utils2 = require("../../../utils");
var _jsxRuntime = require("react/jsx-runtime");
var _excluded = ["children", "steps", "currentStep", "currentStepStatus", "beforeStep", "editMode", "stepStyles", "onClickStep", "isIconsOutlined", "showMidLine", "stepProps", "direction", "isShowPreLine", "isShowLastLine", "midLineClassName", "stepClassName"];
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
var Step = _antd.Steps.Step;
var Stepper = function Stepper(_ref) {
  var children = _ref.children,
    steps = _ref.steps,
    currentStep = _ref.currentStep,
    currentStepStatus = _ref.currentStepStatus,
    beforeStep = _ref.beforeStep,
    editMode = _ref.editMode,
    stepStyles = _ref.stepStyles,
    onClickStep = _ref.onClickStep,
    isIconsOutlined = _ref.isIconsOutlined,
    showMidLine = _ref.showMidLine,
    stepProps = _ref.stepProps,
    direction = _ref.direction,
    isShowPreLine = _ref.isShowPreLine,
    isShowLastLine = _ref.isShowLastLine,
    midLineClassName = _ref.midLineClassName,
    stepClassName = _ref.stepClassName,
    restProps = (0, _objectWithoutProperties2["default"])(_ref, _excluded);
  var RenderIcon = (0, _react.useCallback)(function (step, index) {
    var icon = step.icon,
      status = step.status;
    var isCurrentStep = currentStep === index;
    var isBeforeStep = beforeStep === index;
    var isRemainStep = index < currentStep;
    var isFinish = status === "finish" || isCurrentStep && currentStepStatus === "finish";
    var isError = status === "error" || isCurrentStep && currentStepStatus === "error";
    var midLineColorClassess = isError ? "bg-necessary" : isCurrentStep ? "bg-primary" : "bg-disabled bg-opacity-50";
    return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      className: (0, _utils2.classJoin)(["flex items-center justify-between ", direction === "horizontal" ? icon ? "flex-col" : " flex-col-reverse" : ""]),
      children: [icon && /*#__PURE__*/(0, _jsxRuntime.jsx)(_utils.RenderMainIcon, {
        icon: icon,
        isActive: isCurrentStep,
        isBeforeStep: isBeforeStep,
        isRemainIcon: isRemainStep || isCurrentStep,
        isIconOutlined: isIconsOutlined,
        isError: isError
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: (0, _utils2.classJoin)([direction === "vertical" ? "w-3.25 md:w-4 h-px" : "h-3.25 md:h-4 w-px", showMidLine ? midLineColorClassess : "bg-transparent", midLineClassName])
      }), editMode ? /*#__PURE__*/(0, _jsxRuntime.jsx)(_utils.RenderEditIcon, {
        direction: direction
      }) : /*#__PURE__*/(0, _jsxRuntime.jsx)(_utils.RenderStepIcon, {
        isCurrent: isCurrentStep,
        isError: isError,
        isFinish: index < currentStep || isFinish
      })]
    });
  }, [currentStep, beforeStep, editMode, isIconsOutlined, currentStepStatus, showMidLine, direction]);
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
    className: "w-full h-full stepper1",
    children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_antd.Steps
    // prefixCls="sbt-stepper"
    , _objectSpread(_objectSpread({
      direction: direction,
      current: currentStep,
      labelPlacement: "vertical",
      responsive: false,
      status: currentStepStatus
    }, restProps), {}, {
      children: [isShowPreLine && direction === "vertical" && /*#__PURE__*/(0, _jsxRuntime.jsx)(Step, {
        icon: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {}),
        status: "finish"
      }), steps === null || steps === void 0 ? void 0 : steps.map(function (step, index) {
        var _steps;
        return /*#__PURE__*/(0, _jsxRuntime.jsx)(Step, _objectSpread({
          title: step.title,
          description: step.description,
          icon: RenderIcon(step, index),
          status: step.status,
          disabled: !editMode && step.disabled,
          style: _objectSpread(_objectSpread({}, step.style || stepStyles || {}), {}, {
            cursor: step.disabled ? "not-allowed" : "pointer"
          }),
          onClick: function onClick() {
            return !step.disabled && !(0, _utils2.empty)(onClickStep) && (0, _utils2.isCallable)(onClickStep) && onClickStep(index);
          },
          className: (0, _utils2.classJoin)([steps[index + 1] && ((_steps = steps[index + 1]) === null || _steps === void 0 ? void 0 : _steps.status) === "error" && "ant-steps-next-error",
          // ant do it automatically (when currentStepStatus) but not do when we set status inside `step` itself.
          step.icon ? "has-icon" : "", stepClassName])
        }, stepProps), index);
      }), isShowLastLine && direction === "vertical" && /*#__PURE__*/(0, _jsxRuntime.jsx)(Step, {
        icon: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          className: (0, _utils2.classJoin)(["bg-primary rounded-full w-1.5 h-1.5 ml-1", steps !== null && steps !== void 0 && steps.find(function (a) {
            return a.icon;
          }) ? "mt-2" : ""])
        }),
        status: "finish"
      })]
    }))
  });
};
exports.Stepper = Stepper;
Stepper.defaultProps = {
  direction: "vertical"
};
var _default = Stepper;
exports["default"] = _default;