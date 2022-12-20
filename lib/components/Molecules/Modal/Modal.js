"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.Modal = void 0;
var _antd = require("antd");
var _radinIcon = require("@sadeghi-ehsan/radin-icon");
var _jsxRuntime = require("react/jsx-runtime");
_antd.Modal.defaultProps = {
  closable: true,
  maskClosable: true,
  mask: true,
  centered: false,
  footer: null,
  closeIcon: /*#__PURE__*/(0, _jsxRuntime.jsx)(_radinIcon.CloseRounded, {
    size: "2xl"
  }),
  cancelText: "انصراف",
  okText: "تایید"
};
var Modal = _antd.Modal;
exports.Modal = Modal;
var _default = Modal;
exports["default"] = _default;