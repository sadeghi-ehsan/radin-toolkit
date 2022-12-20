"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = ImageCropperModal;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _react = _interopRequireWildcard(require("react"));
var _radinIcon = require("@sadeghi-ehsan/radin-icon");
var _Button = require("../../Atoms/Button");
var _Modal = require("../Modal");
var _ImageCropper = require("../../Atoms/ImageCropper");
var _jsxRuntime = require("react/jsx-runtime");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function ImageCropperModal(_ref) {
  var visible = _ref.visible,
    closeModal = _ref.closeModal,
    imageSrc = _ref.imageSrc,
    onModalOk = _ref.onModalOk,
    imageCropperProps = _ref.imageCropperProps,
    imageCropperModalProps = _ref.imageCropperModalProps;
  var cropperRef = (0, _react.useRef)();
  var _useState = (0, _react.useState)(0),
    _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
    rotateDeg = _useState2[0],
    setRotateDeg = _useState2[1];
  var _useState3 = (0, _react.useState)(null),
    _useState4 = (0, _slicedToArray2["default"])(_useState3, 2),
    croppedImageBase64 = _useState4[0],
    setCroppedImageBase64 = _useState4[1];

  /**
   * handle rotate image
   * @param deg : number
   */
  function handleRotate(deg) {
    var deg_ = rotateDeg + deg;
    cropperRef.current.cropper.rotateTo(deg_);
    setTimeout(function () {
      setRotateDeg(deg_);
    }, 0);
  }

  /**
   * when click reset button, reset rotate degree to 0 and reset all crops and aspect ratio to default.
   */
  function handleResetAll() {
    setRotateDeg(0);
    cropperRef.current.cropper.reset();
    cropperRef.current.cropper.setAspectRatio(null);
  }

  /**
   * when click ok in modal footer
   */
  function handleOk() {
    onModalOk(croppedImageBase64);
    setTimeout(function () {
      closeModal();
    }, 0);
  }
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_Modal.Modal, _objectSpread(_objectSpread({
    destroyOnClose: true,
    closeIcon: /*#__PURE__*/(0, _jsxRuntime.jsx)(_radinIcon.CloseRounded, {
      onClick: closeModal,
      size: "2xl"
    }),
    visible: visible,
    contentWrapperClassName: "p-6",
    centered: true,
    title: "\u0648\u06CC\u0631\u0627\u06CC\u0634 \u062A\u0635\u0648\u06CC\u0631",
    footer: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Button.Button, {
      className: "mr-auto",
      onClick: handleOk,
      children: "\u062A\u0627\u06CC\u06CC\u062F"
    }),
    maskClosable: false
    // onCancel={closeModal}
  }, imageCropperModalProps), {}, {
    children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      className: "flex h-72",
      children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        className: "flex flex-col items-center justify-center w-4",
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Button.Button, {
          size: "sm",
          variant: "text",
          className: "!min-w-2",
          onClick: function onClick() {
            return handleRotate(+5);
          },
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_radinIcon.RotateRight, {})
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Button.Button, {
          size: "sm",
          variant: "text",
          className: "!min-w-2",
          onClick: function onClick() {
            return handleRotate(-5);
          },
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_radinIcon.RotateRight, {
            rotate: "180"
          })
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Button.Button, {
          size: "sm",
          variant: "text",
          className: "!min-w-2",
          onClick: handleResetAll,
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_radinIcon.Refresh, {
            rotate: "180"
          })
        })]
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_ImageCropper.ImageCropper, _objectSpread({
        ref: cropperRef,
        imageSrc: imageSrc,
        onCropEnd: setCroppedImageBase64,
        minCanvasHeight: 180,
        minCanvasWidth: 280,
        className: "flex-1 mx-10"
      }, imageCropperProps)), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: "w-4"
      })]
    })
  }));
}