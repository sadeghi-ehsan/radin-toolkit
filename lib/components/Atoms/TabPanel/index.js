"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {
  TabPane: true,
  TabPanel: true
};
Object.defineProperty(exports, "TabPane", {
  enumerable: true,
  get: function get() {
    return _TabPane.TabPane;
  }
});
Object.defineProperty(exports, "TabPanel", {
  enumerable: true,
  get: function get() {
    return _TabPanel.TabPanel;
  }
});
var _TabPane = require("./TabPane");
var _TabPanel = require("./TabPanel");
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