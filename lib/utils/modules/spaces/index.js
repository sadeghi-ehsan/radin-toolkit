"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.removeSpaces = void 0;
/**
 *
 * @param {String} text
 * @returns {String}
 * @description This function remove all spaces from text.
 */
var removeSpaces = function removeSpaces(text) {
  if (!text || text === "") return;
  var normalized = text;
  normalized = normalized.replace(/\s+/g, "");
  normalized = normalized.replace(/[\u2000-\u200f]/g, "");
  return normalized;
};
exports.removeSpaces = removeSpaces;