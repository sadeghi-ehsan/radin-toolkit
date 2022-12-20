"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.FilePicker = void 0;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
var _antd = require("antd");
var _radinIcon = require("@sadeghi-ehsan/radin-icon");
var _utils = require("../../../utils");
var _jsxRuntime = require("react/jsx-runtime");
var _excluded = ["children", "className", "description", "icon", "onChange", "disabled", "error"];
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
var Dragger = _antd.Upload.Dragger;
var FilePicker = function FilePicker(_ref) {
  var children = _ref.children,
    className = _ref.className,
    description = _ref.description,
    icon = _ref.icon,
    _onChange = _ref.onChange,
    disabled = _ref.disabled,
    error = _ref.error,
    restProps = (0, _objectWithoutProperties2["default"])(_ref, _excluded);
  return (
    /*#__PURE__*/
    /* TODO fix and remove comment ts-ignore */
    // @ts-ignore
    (0, _jsxRuntime.jsx)(Dragger, _objectSpread(_objectSpread({}, restProps), {}, {
      className: (0, _utils.classJoin)(["transition-colors duration-200 border-2 border-dashed  rounded-xxl ", disabled ? "border-disabled !cursor-not-allowed" : "border-idle-border hover:border-idle cursor-pointer", className]),
      prefixCls: "sbt-upload",
      beforeUpload: function beforeUpload() {
        return false;
      },
      showUploadList: false,
      disabled: disabled,
      onChange: function onChange(info) {
        if (!(0, _utils.empty)(_onChange) && (0, _utils.isCallable)(_onChange)) {
          _onChange(info);
        }
      },
      children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        className: "flex flex-col justify-center h-full pb-8 pointer-events-none select-none pt-9 px-11",
        children: [!(0, _utils.empty)(icon) && (0, _utils.modifyReactChildren)(icon, {
          className: (0, _utils.classJoin)(["mx-auto mb-6", disabled ? "!text-disabled" : ""])
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
          className: (0, _utils.classJoin)(["font-light ", disabled ? "text-disabled" : "text-description"]),
          children: description
        }), error && /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
          className: "flex mt-2",
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_radinIcon.Error, {
            weight: "bold",
            className: "ml-2",
            color: "error"
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
            className: "text-sm text-error",
            children: error
          })]
        })]
      })
    }))
  );
};
exports.FilePicker = FilePicker;
FilePicker.defaultProps = {
  description: "برای بارگذاری لطفا تصویر خود را از صفحه دسکتاپ بکشید و اینجا رها کنید و یا روی اینجا کلیک کنید",
  icon: /*#__PURE__*/(0, _jsxRuntime.jsx)(_radinIcon.AddImage, {
    size: "5xl",
    className: "text-primary"
  }),
  disabled: false,
  multiple: false,
  maxCount: 1,
  openFileDialogOnClick: true,
  accept: "image/*"
};
var _default = FilePicker;
exports["default"] = _default;