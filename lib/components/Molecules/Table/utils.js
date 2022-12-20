"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.tableVariants = exports.tableComponents = exports.TableHeader = exports.TableFooter = exports.RowAction = void 0;
var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
var _react = _interopRequireWildcard(require("react"));
var _radinIcon = require("@sadeghi-ehsan/radin-icon");
var _Tooltip = require("../../Atoms/Tooltip");
var _Checkbox = require("../../Atoms/Checkbox");
var _Popover = require("../../Atoms/Popover");
var _Input = require("../Input");
var _InputNumber = require("../InputNumber");
var _helpers = require("../../../utils/helpers");
var _jsxRuntime = require("react/jsx-runtime");
var _excluded = ["column"],
  _excluded2 = ["children"],
  _excluded3 = ["actions"];
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
var ColumnFilter = function ColumnFilter(_ref) {
  var column = _ref.column,
    resetProps = (0, _objectWithoutProperties2["default"])(_ref, _excluded);
  var _useState = (0, _react.useState)(null),
    _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
    value = _useState2[0],
    setValue = _useState2[1];
  switch (column.search.type) {
    case "boolean":
      return /*#__PURE__*/(0, _jsxRuntime.jsx)(_Checkbox.Checkbox, _objectSpread(_objectSpread({}, resetProps), {}, {
        className: "pt-0",
        color: "success",
        name: "table-filter-choose",
        onChange: function onChange(val, checked) {
          setValue(checked);
          column.search.onFilter(checked);
        },
        size: "lg",
        variant: "check",
        selected: value
      }));
    case "number":
      return /*#__PURE__*/(0, _jsxRuntime.jsx)(_InputNumber.InputNumber, _objectSpread(_objectSpread({}, resetProps), {}, {
        className: "pt-0",
        fieldsetClassName: "!h-6 bg-filled-bg rounded-lg pr-2 ml-0",
        value: value,
        onChange: function onChange(val) {
          setValue(val);
          column.search.onFilter(val);
        },
        size: "sm",
        variant: "none"
      }));
    default:
      return /*#__PURE__*/(0, _jsxRuntime.jsx)(_Input.Input, _objectSpread(_objectSpread({}, resetProps), {}, {
        className: "pt-0",
        fieldsetClassName: "!h-6 bg-filled-bg rounded-lg pr-2 ml-0",
        type: "text",
        variant: "none",
        size: "sm",
        name: "table-filter-input",
        clearable: true,
        onChange: function onChange(val) {
          setValue(val);
          column.search.onFilter(val);
        },
        placeholder: "\u0645\u0642\u062F\u0627\u0631 \u0648\u0631\u0648\u062F\u06CC ...",
        value: value
      }));
  }
};

/**
 * Custom AntDesign components function which return TableComponents object
 * @param tableColumns: Table columns
 * @returns TableComponents
 */
var tableComponents = function tableComponents(columns) {
  return {
    header: {
      row: function row(_ref2) {
        var children = _ref2.children,
          restProps = (0, _objectWithoutProperties2["default"])(_ref2, _excluded2);
        var newChildren = (0, _toConsumableArray2["default"])(children);
        columns.forEach(function (column) {
          for (var i = 0; i < newChildren.length; i++) {
            if (newChildren[i].key === column.key) {
              newChildren[i] = _objectSpread(_objectSpread({}, newChildren[i]), {}, {
                props: _objectSpread(_objectSpread({}, newChildren[i].props), {}, {
                  children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
                    children: [newChildren[i].props.children, column.search !== undefined && /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
                      className: "flex flex-row items-center mt-2",
                      onClick: function onClick(e) {
                        return e.stopPropagation();
                      },
                      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
                        className: "ml-1",
                        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_radinIcon.FilterSquare, {
                          size: "lg",
                          color: "idle"
                        })
                      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(ColumnFilter, {
                        column: column
                      })]
                    })]
                  })
                })
              });
              break;
            }
          }
        });
        return /*#__PURE__*/(0, _jsxRuntime.jsx)("tr", _objectSpread(_objectSpread({}, restProps), {}, {
          className: "whitespace-pre",
          children: newChildren
        }));
      }
    }
  };
};
exports.tableComponents = tableComponents;
var TablePagination = function TablePagination(_ref3) {
  var page = _ref3.page,
    count = _ref3.count,
    onPageChange = _ref3.onPageChange,
    onPageSizeChange = _ref3.onPageSizeChange,
    pageSize = _ref3.pageSize,
    pageSizes = _ref3.pageSizes;
  var _useState3 = (0, _react.useState)(false),
    _useState4 = (0, _slicedToArray2["default"])(_useState3, 2),
    visible = _useState4[0],
    setVisible = _useState4[1];
  var handleVisibleChange = function handleVisibleChange(newVisible) {
    setVisible(newVisible);
  };
  var onFirstPageClick = function onFirstPageClick() {
    onPageChange(1);
  };
  var onNextPageClick = function onNextPageClick() {
    if (page < count) onPageChange(page + 1);
  };
  var onPrevPageClick = function onPrevPageClick() {
    if (page > 1) onPageChange(page - 1);
  };
  var onLastPageClick = function onLastPageClick() {
    if (count > 0) onPageChange(count);
  };
  var onPageSizeChangeClick = function onPageSizeChangeClick(value) {
    onPageSizeChange({
      value: value
    });
    handleVisibleChange(false);
  };
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    className: "flex items-center justify-between",
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Popover.Popover, {
      visible: visible,
      trigger: "click",
      onVisibleChange: handleVisibleChange,
      content: /*#__PURE__*/(0, _jsxRuntime.jsx)(_jsxRuntime.Fragment, {
        children: pageSizes.map(function (pageSizeItem) {
          return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
            onClick: function onClick() {
              return onPageSizeChangeClick(pageSizeItem);
            },
            className: (0, _helpers.classJoin)(["p-2 hover:bg-primary-hover/20 cursor-pointer rounded flex", pageSizeItem === pageSize ? "text-primary" : null]),
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
              className: "ml-1",
              children: pageSizeItem
            }), " \u0631\u062F\u06CC\u0641"]
          }, pageSizeItem);
        })
      }),
      children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        className: (0, _helpers.classJoin)(["rounded-xl border border-filled-bg px-2 py-1 flex items-center cursor-pointer hover:border-primary", visible ? "!border-primary" : null]),
        children: [pageSize, " \u0631\u062F\u06CC\u0641 ", /*#__PURE__*/(0, _jsxRuntime.jsx)(_radinIcon.Chevron, {
          className: "mr-2",
          rotate: "90",
          flip: "vertical"
        })]
      })
    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      className: "flex flex-row items-center select-none text-idle mr-3",
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_radinIcon.DoubleArrow, {
        weight: "fill",
        size: ".7xs",
        color: page === 1 ? "disabled" : "primary",
        onClick: onFirstPageClick,
        className: (0, _helpers.classJoin)(["ml-1 cursor-pointer"]),
        rotate: "180"
      }), "\u0635\u0641\u062D\u0647", /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        className: "flex flex-row items-center w-24 p-1 mx-2 bg-filled-bg rounded-llg",
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_radinIcon.Chevron, {
          size: "sm",
          color: page === 1 ? "disabled" : "primary",
          onClick: onPrevPageClick,
          className: (0, _helpers.classJoin)(["ml-1.5 cursor-pointer"]),
          flip: "vertical"
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          className: "flex-1 text-center text-light-text",
          children: page
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_radinIcon.Chevron, {
          size: "sm",
          color: page === count ? "disabled" : "primary",
          onClick: onNextPageClick,
          className: (0, _helpers.classJoin)(["mr-1 cursor-pointer"])
        })]
      }), "\u0627\u0632", /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
        className: "mr-1 text-light-text",
        children: count
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_radinIcon.DoubleArrow, {
        weight: "fill",
        size: ".7xs",
        color: page === count ? "disabled" : "primary",
        onClick: onLastPageClick,
        className: (0, _helpers.classJoin)(["mr-1.5 cursor-pointer"])
      })]
    })]
  });
};

/** Table footer */
var TableFooter = function TableFooter(props) {
  var footerClassName = props.footerClassName,
    hideFooterPagination = props.hideFooterPagination;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
    className: (0, _helpers.classJoin)(["sbt-table-footer", footerClassName]),
    children: !hideFooterPagination ? /*#__PURE__*/(0, _jsxRuntime.jsx)(TablePagination, _objectSpread({}, props)) : null
  });
};

/** Table top header */
exports.TableFooter = TableFooter;
var TableHeader = function TableHeader(props) {
  var startContent = props.startContent,
    endContent = props.endContent,
    title = props.title,
    headerClassName = props.headerClassName,
    displayHeaderPagination = props.displayHeaderPagination;
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    className: (0, _helpers.classJoin)(["flex flex-row items-center justify-between px-4 pt-6 pb-5 border-t border-r border-l border-card-border rounded-t-3xl", headerClassName]),
    children: [startContent, /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: "text-base text-primary-label font-bold flex-1",
      children: title
    }), displayHeaderPagination ? /*#__PURE__*/(0, _jsxRuntime.jsx)(TablePagination, _objectSpread({}, props)) : null, endContent]
  });
};

/** Indicate Table line and striped variants */
exports.TableHeader = TableHeader;
var tableVariants = {
  none: "sbt-table-variant-none",
  striped: "sbt-table-variant-striped",
  horizontalLine: "sbt-table-variant-horizontalLine",
  grid: "sbt-table-variant-grid"
};
exports.tableVariants = tableVariants;
var RowAction = function RowAction(_ref4) {
  var actions = _ref4.actions,
    restProps = (0, _objectWithoutProperties2["default"])(_ref4, _excluded3);
  var _useState5 = (0, _react.useState)(false),
    _useState6 = (0, _slicedToArray2["default"])(_useState5, 2),
    visible = _useState6[0],
    setVisible = _useState6[1];
  var renderPopoverContent = function renderPopoverContent() {
    return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: "flex space-x-4 space-x-reverse",
      children: actions.map(function (_ref5, index) {
        var tooltip = _ref5.tooltip,
          content = _ref5.content,
          _onClick = _ref5.onClick;
        return (
          /*#__PURE__*/
          // eslint-disable-next-line react/no-array-index-key
          (0, _jsxRuntime.jsx)(_Tooltip.Tooltip, {
            title: tooltip,
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
              className: "cursor-pointer",
              onClick: function onClick() {
                if (_onClick) _onClick(function () {
                  return setVisible(false);
                });
              },
              children: content
            })
          }, index)
        );
      })
    });
  };
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_Popover.Popover, _objectSpread(_objectSpread({
    content: renderPopoverContent(),
    trigger: "click"
  }, restProps), {}, {
    visible: visible,
    onVisibleChange: setVisible,
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_radinIcon.More, {
      className: "cursor-pointer"
    })
  }));
};
exports.RowAction = RowAction;
RowAction.defaultProps = {
  placement: "bottomLeft"
};