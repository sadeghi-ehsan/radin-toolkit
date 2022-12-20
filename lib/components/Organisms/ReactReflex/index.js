"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _ReactReflex = require("./ReactReflex");
Object.keys(_ReactReflex).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _ReactReflex[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _ReactReflex[key];
    }
  });
});