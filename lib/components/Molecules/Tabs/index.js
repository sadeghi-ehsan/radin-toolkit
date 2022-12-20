"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {
  TabsPane: true,
  Tabs: true
};
Object.defineProperty(exports, "Tabs", {
  enumerable: true,
  get: function get() {
    return _Tabs.Tabs;
  }
});
Object.defineProperty(exports, "TabsPane", {
  enumerable: true,
  get: function get() {
    return _TabsPane.TabsPane;
  }
});
var _TabsPane = require("./TabsPane");
var _Tabs = require("./Tabs");
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