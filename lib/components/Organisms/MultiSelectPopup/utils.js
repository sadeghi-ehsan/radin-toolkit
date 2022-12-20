"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.searchInObject = void 0;
var searchInObject = function searchInObject(_ref) {
  var search = _ref.search,
    item = _ref.item,
    dataSearchFields = _ref.dataSearchFields,
    dataTextField = _ref.dataTextField;
  var searchFields = dataSearchFields || [dataTextField];
  return searchFields.map(function (searchField) {
    var _item$searchField;
    return ((_item$searchField = item[searchField]) === null || _item$searchField === void 0 ? void 0 : _item$searchField.includes(search)) || false;
  }).reduce(function (prev, field) {
    return prev || field;
  }, false);
};
exports.searchInObject = searchInObject;