"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {
  Switch: true,
  SwitchOption: true
};
Object.defineProperty(exports, "Switch", {
  enumerable: true,
  get: function get() {
    return _Switch["default"];
  }
});
Object.defineProperty(exports, "SwitchOption", {
  enumerable: true,
  get: function get() {
    return _SwitchOption["default"];
  }
});
var _Switch = _interopRequireDefault(require("./Switch"));
var _SwitchOption = _interopRequireDefault(require("./SwitchOption"));
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