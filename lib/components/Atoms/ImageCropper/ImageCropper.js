"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.ImageCropper = void 0;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
var _react = require("react");
var _reactCropper = _interopRequireDefault(require("react-cropper"));
var _utils = require("../../../utils");
var _jsxRuntime = require("react/jsx-runtime");
var _excluded = ["imageSrc", "onCropEnd", "onCropEndTimeout", "centerIcon"];
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
var ImageCropper = /*#__PURE__*/(0, _react.forwardRef)(function (_ref, passedRef) {
  var imageSrc = _ref.imageSrc,
    onCropEnd = _ref.onCropEnd,
    onCropEndTimeout = _ref.onCropEndTimeout,
    centerIcon = _ref.centerIcon,
    restProps = (0, _objectWithoutProperties2["default"])(_ref, _excluded);
  var cropperRef = (0, _utils.ifNotEmpty)(passedRef, passedRef, (0, _react.useRef)());
  var getBase64CroppedImage = (0, _utils.debounce)(function () {
    var _cropperRef$current;
    var cropper_ = cropperRef === null || cropperRef === void 0 ? void 0 : (_cropperRef$current = cropperRef.current) === null || _cropperRef$current === void 0 ? void 0 : _cropperRef$current.cropper;
    if (!(0, _utils.empty)(onCropEnd) && (0, _utils.isCallable)(onCropEnd) && cropper_) {
      onCropEnd(cropper_.getCroppedCanvas().toDataURL());
    }
  }, onCropEndTimeout);
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactCropper["default"], _objectSpread({
    ref: cropperRef,
    src: imageSrc,
    crop: getBase64CroppedImage,
    center: centerIcon
  }, restProps));
});
exports.ImageCropper = ImageCropper;
ImageCropper.defaultProps = {
  viewMode: 1,
  initialAspectRatio: null,
  aspectRatio: null,
  preview: null,
  guides: true,
  centerIcon: true,
  background: true,
  autoCrop: true,
  autoCropArea: 0.8,
  movable: true,
  rotatable: true,
  scalable: true,
  zoomable: true,
  zoomOnTouch: true,
  zoomOnWheel: true,
  wheelZoomRatio: 0.1,
  cropBoxMovable: true,
  cropBoxResizable: true,
  dragMode: "none",
  toggleDragModeOnDblclick: true,
  minContainerWidth: 200,
  minContainerHeight: 100,
  minCropBoxWidth: 0,
  minCropBoxHeight: 0,
  onCropEndTimeout: 200
};
var _default = ImageCropper;
exports["default"] = _default;