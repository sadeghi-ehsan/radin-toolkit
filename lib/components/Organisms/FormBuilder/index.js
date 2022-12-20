"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {
  FormBuilder: true,
  useFormBuilder: true
};
Object.defineProperty(exports, "FormBuilder", {
  enumerable: true,
  get: function get() {
    return _FormBuilder["default"];
  }
});
Object.defineProperty(exports, "useFormBuilder", {
  enumerable: true,
  get: function get() {
    return _useFormBuilder["default"];
  }
});
var _FormBuilder = _interopRequireDefault(require("./FormBuilder"));
var _useFormBuilder = _interopRequireDefault(require("./components/useFormBuilder"));
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