"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));
var _react = _interopRequireDefault(require("react"));
var _utils = require("../../../../utils");
var _Button = require("../../../Atoms/Button");
var _jsxRuntime = require("react/jsx-runtime");
var ParentSelectPopup = function ParentSelectPopup(_ref) {
  var data = _ref.data,
    onClose = _ref.onClose,
    onSubmit = _ref.onSubmit,
    dataTextField = _ref.dataTextField,
    dataValueField = _ref.dataValueField,
    labels = _ref.labels,
    selectedItems = _ref.selectedItems,
    setSelectedItems = _ref.setSelectedItems;
  var onSubmitClick = function onSubmitClick() {
    onSubmit(selectedItems);
  };
  var onItemClick = function onItemClick(selectedId) {
    if (selectedItems.some(function (selectedItem) {
      return selectedItem === selectedId;
    })) {
      setSelectedItems(selectedItems.filter(function (selectedItem) {
        return selectedItem !== selectedId;
      }));
      return;
    }
    setSelectedItems(function (prev) {
      return [].concat((0, _toConsumableArray2["default"])(prev), [selectedId]);
    });
  };
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: "text-light text-base border-b border-card-border mb-4 pb-1",
      children: labels.parentSelectPopupTitle
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: "grid grid-cols-3 max-h-44 overflow-y-auto scrollbar-primary gap-x-4 gap-y-3 pl-4 mb-4",
      children: data.map(function (item) {
        return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          className: (0, _utils.classJoin)(["sbt-multi-select-popup-parent-select", selectedItems.includes(item[dataValueField]) ? "text-primary bg-primary/10" : "text-light"]),
          onClick: function onClick() {
            return onItemClick(item[dataValueField]);
          },
          children: item[dataTextField]
        }, item[dataValueField]);
      })
    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      className: "flex border-t border-card-border p-4",
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Button.Button, {
        block: true,
        onClick: onSubmitClick,
        children: labels.submit
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Button.Button, {
        onClick: onClose,
        block: true,
        variant: "text",
        children: labels.cancel
      })]
    })]
  });
};
var _default = ParentSelectPopup;
exports["default"] = _default;