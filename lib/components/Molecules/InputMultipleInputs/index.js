"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {
  InputMultipleInputs: true
};
Object.defineProperty(exports, "InputMultipleInputs", {
  enumerable: true,
  get: function get() {
    return _InputMultipleInputs["default"];
  }
});
var _InputMultipleInputs = _interopRequireDefault(require("./InputMultipleInputs"));
var _types = require("./types");
Object.keys(_types).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _types[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _types[key];
    }
  });
});