"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.InputImageUploader = void 0;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
var _react = require("react");
var _radinIcon = require("@sadeghi-ehsan/radin-icon");
var _FormElementWrapper = require("../../Atoms/FormElementWrapper");
var _utils = require("../../../utils");
var _Button = require("../../Atoms/Button");
var _ImageCropperModal = _interopRequireDefault(require("./ImageCropperModal"));
var _ImagePickerModal = _interopRequireDefault(require("./ImagePickerModal"));
var _ProgressBar = require("../../Atoms/ProgressBar");
var _PreviewModal = _interopRequireDefault(require("./PreviewModal"));
var _Tooltip = require("../../Atoms/Tooltip");
var _jsxRuntime = require("react/jsx-runtime");
var _excluded = ["children", "style", "className", "size", "disabled", "placeholder", "onSelectImage", "onCancelUpload", "onDeleteImage", "progressPercent", "uploadedImageSrc", "verified", "filePickerProps", "filePickerModalProps", "imageCropperProps", "imageCropperModalProps", "previewModalProps", "renderInputComponent"];
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
var InputImageUploader = function InputImageUploader(_ref) {
  var children = _ref.children,
    style = _ref.style,
    className = _ref.className,
    size = _ref.size,
    disabled = _ref.disabled,
    placeholder = _ref.placeholder,
    onSelectImage = _ref.onSelectImage,
    onCancelUpload = _ref.onCancelUpload,
    onDeleteImage = _ref.onDeleteImage,
    progressPercent_ = _ref.progressPercent,
    uploadedImageSrc = _ref.uploadedImageSrc,
    verified = _ref.verified,
    filePickerProps = _ref.filePickerProps,
    filePickerModalProps = _ref.filePickerModalProps,
    imageCropperProps = _ref.imageCropperProps,
    imageCropperModalProps = _ref.imageCropperModalProps,
    previewModalProps = _ref.previewModalProps,
    renderInputComponent = _ref.renderInputComponent,
    restProps = (0, _objectWithoutProperties2["default"])(_ref, _excluded);
  var progressPercent = (0, _utils.empty)(progressPercent_) || progressPercent_ === 0 ? null : progressPercent_;
  var _extractFormElementPr = (0, _utils.extractFormElementProps)(restProps),
    _extractFormElementPr2 = (0, _slicedToArray2["default"])(_extractFormElementPr, 1),
    wrapperProps = _extractFormElementPr2[0];
  var _useState = (0, _react.useState)({
      showImageCropperModal: false,
      showImagePickerModal: false,
      showPreviewModal: false
    }),
    _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
    showModals = _useState2[0],
    setShowModals = _useState2[1];
  var _useState3 = (0, _react.useState)([]),
    _useState4 = (0, _slicedToArray2["default"])(_useState3, 2),
    imageSrc = _useState4[0],
    setImageSrc = _useState4[1];

  /**
   * after image cropper modal closed and hit ok button.
   * @param croppedImageBase64
   */
  function handleImageSelect(croppedImageBase64) {
    if (!(0, _utils.empty)(onSelectImage) && (0, _utils.isCallable)(onSelectImage) && !(0, _utils.empty)(croppedImageBase64)) {
      onSelectImage(croppedImageBase64);
    }
  }

  /**
   * when click on plus icon.
   */
  function pickImage() {
    setShowModals(function (prev) {
      return _objectSpread(_objectSpread({}, prev), {}, {
        showImagePickerModal: true
      });
    });
  }

  /**
   * when click on change image button.
   */
  function previewAndChangeImage() {
    setShowModals(function (prev) {
      return _objectSpread(_objectSpread({}, prev), {}, {
        showPreviewModal: true
      });
    });
  }

  /**
   * when click on edit icon.
   * @param imgStr
   */
  function editImage(imgStr) {
    setImageSrc(imgStr);
    setTimeout(function () {
      setShowModals(function (prev) {
        return _objectSpread(_objectSpread({}, prev), {}, {
          showImageCropperModal: true
        });
      });
    }, 0);
  }

  /**
   * when click on trash icon.
   */
  function deleteImage() {
    if (!(0, _utils.empty)(onDeleteImage) && (0, _utils.isCallable)(onDeleteImage)) {
      onDeleteImage();
    }
  }

  /**
   * Render when image uploaded OR image already provided by initial value.
   */
  var RenderFilled = (0, _react.useCallback)(function () {
    return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      className: "flex justify-between h-full",
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("img", {
        src: uploadedImageSrc,
        alt: "cropped",
        className: (0, _utils.classJoin)(["object-cover w-12 h-full ml-4 transition rounded select-none cursor-pointer", disabled ? "opacity-70" : "group-hover:shadow-progress group-hover:shadow-primary"]),
        draggable: false,
        onClick: !disabled && previewAndChangeImage
      }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        className: (0, _utils.classJoin)(["flex justify-between items-center transition border rounded-lg opacity-0 cursor-pointer border-primary py-0.5 px-0.5 ", disabled ? "hidden" : "group-hover:opacity-100 hover:shadow-input hover:shadow-primary"]),
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Tooltip.Tooltip, {
          title: "\u0645\u0634\u0627\u0647\u062F\u0647 \u0648 \u062A\u063A\u06CC\u06CC\u0631 \u0639\u06A9\u0633",
          placement: "bottomRight",
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Button.Button, {
            variant: "text",
            className: "!p-0 !min-w-0 mx-2",
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_radinIcon.Replace, {
              onClick: previewAndChangeImage
            })
          })
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Tooltip.Tooltip, {
          title: "\u0648\u06CC\u0631\u0627\u06CC\u0634",
          placement: "bottomRight",
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Button.Button, {
            variant: "text",
            className: "!p-0 !min-w-0 mx-2",
            onClick: function onClick() {
              return editImage(uploadedImageSrc);
            },
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_radinIcon.Edit, {})
          })
        }), !(0, _utils.empty)(onDeleteImage) && (0, _utils.isCallable)(onDeleteImage) && /*#__PURE__*/(0, _jsxRuntime.jsx)(_Tooltip.Tooltip, {
          title: "\u062D\u0630\u0641",
          placement: "bottomRight",
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Button.Button, {
            variant: "text",
            className: "!p-0 !min-w-0 mx-2",
            onClick: deleteImage,
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_radinIcon.Trash, {})
          })
        })]
      }), verified && /*#__PURE__*/(0, _jsxRuntime.jsx)(_radinIcon.Check, {
        className: (0, _utils.classJoin)(["absolute -mt-2 transition left-4 top-1/2 ", disabled ? "text-success-hover" : "text-success group-hover:opacity-0"])
      })]
    });
  }, [uploadedImageSrc, progressPercent, disabled, verified]);

  /**
   * Render input component
   * @returns ReactNode
   */
  var renderInputElement = function renderInputElement() {
    if (renderInputComponent) return renderInputComponent({
      pickImage: pickImage,
      editImage: editImage
    });
    return /*#__PURE__*/(0, _jsxRuntime.jsx)(_FormElementWrapper.FormElementWrapper, _objectSpread(_objectSpread({}, wrapperProps), {}, {
      size: size || "lg",
      disabled: disabled,
      style: style,
      className: (0, _utils.classJoin)(["group", className]),
      fieldsetClassName: "h-16",
      startAdornment: !(progressPercent || uploadedImageSrc) && /*#__PURE__*/(0, _jsxRuntime.jsx)(_Button.Button, {
        size: "sm",
        className: "!min-w-0 !px-0.75 !h-6",
        onClick: function onClick() {
          return !disabled && pickImage();
        },
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_radinIcon.Plus, {
          color: "white"
        })
      }),
      childrenClassName: (0, _utils.classJoin)(["flex flex-col justify-center h-full", !disabled && !(progressPercent || uploadedImageSrc) && "cursor-pointer"]),
      children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        onClick: function onClick() {
          return !disabled && !(progressPercent || uploadedImageSrc) && pickImage();
        },
        children: [!(progressPercent || uploadedImageSrc) && /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
          className: disabled ? "text-disabled" : "text-idle",
          children: placeholder
        }), progressPercent > 0 && /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
          className: "flex items-center",
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_ProgressBar.ProgressBar, {
            percent: progressPercent,
            size: "sm",
            direction: "rtl"
          }), !(0, _utils.empty)(onCancelUpload) && (0, _utils.isCallable)(onCancelUpload) && /*#__PURE__*/(0, _jsxRuntime.jsx)(_Button.Button, {
            size: "sm",
            className: "!min-w-0 !p-0 !h-4.5 !w-6 !bg-appearing !text-card-bg !rounded-lg mr-4 text-center !border-none hover:opacity-75",
            onClick: onCancelUpload,
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_radinIcon.Close, {
              size: "1.5xs",
              className: "pl-px transition-sbt"
            })
          })]
        }), uploadedImageSrc && !progressPercent && /*#__PURE__*/(0, _jsxRuntime.jsx)(RenderFilled, {})]
      })
    }));
  };
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
    children: [renderInputElement(), /*#__PURE__*/(0, _jsxRuntime.jsx)(_ImagePickerModal["default"], {
      visible: showModals.showImagePickerModal,
      closeModal: function closeModal() {
        return setShowModals(function (prev) {
          return _objectSpread(_objectSpread({}, prev), {}, {
            showImagePickerModal: false
          });
        });
      },
      setImageSrc: setImageSrc,
      openCropperModal: function openCropperModal() {
        return setShowModals(function (prev) {
          return _objectSpread(_objectSpread({}, prev), {}, {
            showImageCropperModal: true
          });
        });
      },
      filePickerProps: filePickerProps,
      filePickerModalProps: filePickerModalProps
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_ImageCropperModal["default"], {
      visible: showModals.showImageCropperModal,
      closeModal: function closeModal() {
        return setShowModals(function (prev) {
          return _objectSpread(_objectSpread({}, prev), {}, {
            showImageCropperModal: false
          });
        });
      },
      imageSrc: imageSrc,
      onModalOk: handleImageSelect,
      imageCropperProps: imageCropperProps,
      imageCropperModalProps: imageCropperModalProps
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_PreviewModal["default"], {
      disabled: disabled,
      visible: showModals.showPreviewModal,
      uploadedImageSrc: uploadedImageSrc,
      closeModal: function closeModal() {
        return setShowModals(function (prev) {
          return _objectSpread(_objectSpread({}, prev), {}, {
            showPreviewModal: false
          });
        });
      },
      handleChangeImage: function handleChangeImage() {
        setShowModals(function (prev) {
          return _objectSpread(_objectSpread({}, prev), {}, {
            showPreviewModal: false
          });
        });
        pickImage();
      },
      previewModalProps: previewModalProps
    })]
  });
};
exports.InputImageUploader = InputImageUploader;
InputImageUploader.defaultProps = _objectSpread(_objectSpread({}, (0, _utils.filterObj)(_FormElementWrapper.FormElementWrapper.defaultProps, function (v, k) {
  return !["allowClear", "clearable", "onFieldsetClick", "onClear"].includes(k);
})), {}, {
  onCancelUpload: null
});
var _default = InputImageUploader;
exports["default"] = _default;