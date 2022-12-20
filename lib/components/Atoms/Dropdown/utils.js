"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DropdownVariants = exports.DropdownClasses = void 0;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _DropdownClasses;
// variants of DropdownClasses
var DropdownVariants = {
  none: "none",
  bordered: "bordered"
};
exports.DropdownVariants = DropdownVariants;
var DropdownClasses = (_DropdownClasses = {}, (0, _defineProperty2["default"])(_DropdownClasses, DropdownVariants.none, ""), (0, _defineProperty2["default"])(_DropdownClasses, DropdownVariants.bordered, "p-2 rounded-xl border border-primary bg-card-bg w-auto shadow-input shadow-primary-focus"), _DropdownClasses);
exports.DropdownClasses = DropdownClasses;