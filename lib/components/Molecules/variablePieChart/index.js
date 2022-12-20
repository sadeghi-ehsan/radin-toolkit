"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {
  VariablePieChart: true
};
Object.defineProperty(exports, "VariablePieChart", {
  enumerable: true,
  get: function get() {
    return _VariablePieChart["default"];
  }
});
var _VariablePieChart = _interopRequireDefault(require("./VariablePieChart"));
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