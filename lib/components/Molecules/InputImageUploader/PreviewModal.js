"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = PreviewModal;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _react = _interopRequireDefault(require("react"));
var _Button = require("../../Atoms/Button");
var _Modal = require("../Modal");
var _jsxRuntime = require("react/jsx-runtime");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function PreviewModal(_ref) {
  var visible = _ref.visible,
    closeModal = _ref.closeModal,
    handleChangeImage = _ref.handleChangeImage,
    uploadedImageSrc = _ref.uploadedImageSrc,
    previewModalProps = _ref.previewModalProps,
    disabled = _ref.disabled;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_Modal.Modal, _objectSpread(_objectSpread({
    visible: visible,
    onCancel: closeModal,
    contentWrapperClassName: "p-6",
    centered: true,
    title: disabled ? "مشاهده عکس" : "مشاهده و تغییر عکس",
    footer: !disabled && /*#__PURE__*/(0, _jsxRuntime.jsx)(_Button.Button, {
      className: "mr-auto",
      onClick: handleChangeImage,
      children: "\u062A\u063A\u06CC\u06CC\u0640\u0640\u0640\u0631 \u062A\u0640\u0640\u0635\u0648\u06CC\u0640\u0631"
    })
  }, previewModalProps), {}, {
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)("img", {
      src: uploadedImageSrc,
      alt: "cropped",
      className: "w-full h-full max-w-xs p-2 mx-auto border border-dashed select-none max-h-max border-card-border rounded-2xl",
      draggable: false
    })
  }));
}