"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.valueToCommaSeparated = exports.getProperValue = void 0;
var _utils = require("../../../utils");
/**
 * This Method convert number value to comma separated format, and return empty string for non-number input
 *
 * @param value - value to format
 * @returns Proper formatted value
 */
var valueToCommaSeparated = function valueToCommaSeparated(value) {
  if ((0, _utils.isNumberOrNumberStr)(value)) return (0, _utils.commaSeparator)(value);
  return "";
};

/**
 * This return proper input value based on this reality that input cannot be void
 *
 * @param value - raw value (can be number or void)
 * @returns Proper input value
 */
exports.valueToCommaSeparated = valueToCommaSeparated;
var getProperValue = function getProperValue(value) {
  if ((0, _utils.isNumberOrNumberStr)(value)) return value;
  return "";
};
exports.getProperValue = getProperValue;