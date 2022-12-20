"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.charTitle = void 0;
var _types = require("./types");
var charTitle = function charTitle(hoveredItem, centerText, condition) {
  var hoveredValue = "\n<div class=\"sbt-donut-hoveredValue\">\n  <div>\n    <div>%".concat(hoveredItem === null || hoveredItem === void 0 ? void 0 : hoveredItem.value, "</div>\n    <span class=\"").concat(condition === _types.donutChartConditions.Ascending ? "sbt-arrowDown" : "sbt-arrowUp", "\" />\n  </div>\n  <div>").concat(hoveredItem === null || hoveredItem === void 0 ? void 0 : hoveredItem.name, "</div>\n</div>\n");
  var initialValue = "\n<div class=\"sbt-chartTitle\">".concat(centerText, "\n  <div class=\"").concat(condition === _types.donutChartConditions.Ascending ? "sbt-arrowUp" : "sbt-arrowDown", "\" />\n</div>\n");
  return hoveredItem ? hoveredValue : initialValue;
};
exports.charTitle = charTitle;