"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = ImagePickerModal;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _react = _interopRequireWildcard(require("react"));
var _utils = require("../../../utils");
var _Modal = require("../Modal");
var _FilePicker = require("../../Atoms/FilePicker");
var _jsxRuntime = require("react/jsx-runtime");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function ImagePickerModal(_ref) {
  var visible = _ref.visible,
    closeModal = _ref.closeModal,
    setImageSrc = _ref.setImageSrc,
    openCropperModal = _ref.openCropperModal,
    filePickerProps = _ref.filePickerProps,
    filePickerModalProps = _ref.filePickerModalProps;
  var _useState = (0, _react.useState)(null),
    _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
    error = _useState2[0],
    setError = _useState2[1];
  (0, _react.useEffect)(function () {
    setError(null);
  }, [visible]);
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_Modal.Modal, _objectSpread(_objectSpread({
    visible: visible,
    onCancel: closeModal,
    closable: false,
    contentWrapperClassName: "!p-6",
    centered: true
  }, filePickerModalProps), {}, {
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_FilePicker.FilePicker, _objectSpread({
      error: error,
      onChange: /*#__PURE__*/function () {
        var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(info) {
          var _info$file$type;
          return _regenerator["default"].wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  if (info.file) {
                    _context.next = 3;
                    break;
                  }
                  setError("لطفا یک فایل را انتخاب کنید");
                  return _context.abrupt("return");
                case 3:
                  if ((_info$file$type = info.file.type) !== null && _info$file$type !== void 0 && _info$file$type.includes("image")) {
                    _context.next = 6;
                    break;
                  }
                  setError("فرمت فایل انتخابی باید عکس باشد");
                  return _context.abrupt("return");
                case 6:
                  if (!(info.file.status !== "uploading")) {
                    _context.next = 14;
                    break;
                  }
                  _context.t0 = setImageSrc;
                  _context.next = 10;
                  return (0, _utils.fileToBase64)(info.file);
                case 10:
                  _context.t1 = _context.sent;
                  (0, _context.t0)(_context.t1);
                  closeModal();
                  setTimeout(function () {
                    openCropperModal();
                  }, 0);
                case 14:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee);
        }));
        return function (_x) {
          return _ref2.apply(this, arguments);
        };
      }()
    }, filePickerProps))
  }));
}