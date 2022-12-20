"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.normalizePersianText = exports.isEnglish = exports.createSearchField = void 0;
var _numberMapping = _interopRequireDefault(require("../utf8-codes/numberMapping"));
var _numbers = require("../numbers");
var _spaces = require("../spaces");
var _persianMapping = _interopRequireDefault(require("../utf8-codes/persianMapping"));
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
/**
 *
 * @param text String
 * @returns {String}
 * @description This function remove all not-persian characters from text. and convert arabic characters to persian.
 */
var normalizePersianText = function normalizePersianText(text) {
  if (!text || text === "") return;
  var normalized = text.toString();
  normalized = normalized.toString().split("").map(function (c) {
    var mapped = _persianMapping["default"][c.charCodeAt(0)];
    return typeof mapped === "undefined" ? "" : mapped;
  }).join("");

  // Remove Tashdid
  normalized = normalized.replace(/[\u0651]/g, "");
  return normalized;
};

/**
 *
 * @param text String
 * @returns {String}
 * @description This function create a text for persian search. remove spaces. Convert persian numbers to english. Convert arabic characters to persian.
 */
exports.normalizePersianText = normalizePersianText;
var createSearchField = function createSearchField(text) {
  if (!text || text === "") return;
  var normalized = text.toString();
  normalized = normalized.toString().split("").map(function (c) {
    var mapped = _persianMapping["default"][c.charCodeAt(0)] || _numberMapping["default"][c.charCodeAt(0)] || isEnglishCharacter(c);
    return typeof mapped === "undefined" ? c : mapped;
  }).join("");
  normalized = (0, _spaces.removeSpaces)(normalized);
  normalized = (0, _numbers.persianToEnglishNumber)(normalized);
  return normalized;
};
exports.createSearchField = createSearchField;
var isEnglishCharacter = function isEnglishCharacter(text) {
  if (!text || text === "") return;
  var english = /^[A-Za-z0-9]*$/;
  return english.test(text) !== false ? text : undefined;
};

/**
 *
 * @param text String
 * @returns {String}
 * @description This function check if text is english or not.
 */
var isEnglish = function isEnglish(text) {
  if (!text || text === "") return;
  var _iterator = _createForOfIteratorHelper(text),
    _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var _char = _step.value;
      var english = /^[A-Za-z0-9]*$/;
      if (!english.test(_char)) {
        return false;
      }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
  return true;
};
exports.isEnglish = isEnglish;