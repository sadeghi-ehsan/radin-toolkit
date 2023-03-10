"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.persianToEnglishNumber = exports.extractNumbers = void 0;
var _spaces = require("../spaces");
var _numberMapping = _interopRequireDefault(require("../utf8-codes/numberMapping"));
/**
 * @param {String} text
 * @returns {String}
 * @description Convert All numbers including Persian and Arabic numbers to English numbers.
 * This function keep characters that are not numbers.
 */
var persianToEnglishNumber = function persianToEnglishNumber(text) {
  if (!text || text === "") return;
  var normalized = text;

  // Arabic digits
  normalized = normalized.replace(/[\u0660-\u0669]/g, function (c) {
    return (c.charCodeAt(0) - 0x0660).toString();
  });

  // Persian digits
  normalized = normalized.replace(/[\u06f0-\u06f9]/g, function (c) {
    return (c.charCodeAt(0) - 0x0660).toString();
  });
  return normalized;
};

/**
 * @param {String} text
 * @returns {String} text
 * @descriptions Into the json file,
 * - First one is english unicode,
 * - Seocnd One is persian unicode
 * - Third one is arabic unicode
 */
exports.persianToEnglishNumber = persianToEnglishNumber;
var extractNumbers = function extractNumbers(text) {
  if (!text || text === "") return;
  var normalized = text;
  normalized = text.toString().split("").map(function (c) {
    var mapped = _numberMapping["default"][c.charCodeAt(0)];
    return typeof mapped === "undefined" ? "" : mapped;
  }).join("");
  normalized = (0, _spaces.removeSpaces)(normalized);
  return normalized;
};
exports.extractNumbers = extractNumbers;