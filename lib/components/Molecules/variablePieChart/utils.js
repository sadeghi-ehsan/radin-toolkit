"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.charTitle = void 0;
var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));
var charTitle = function charTitle(initialCenterText, hoveredItem, data) {
  return "<div class=\"sbt-hoveredValue\">\n      <div>".concat(initialCenterText && !hoveredItem ? "" : "%").concat(hoveredItem ? hoveredItem === null || hoveredItem === void 0 ? void 0 : hoveredItem.value : initialCenterText || Math.max.apply(Math, (0, _toConsumableArray2["default"])(data.map(function (item) {
    return item.y;
  }))), "</div>\n    </div>");
};
exports.charTitle = charTitle;