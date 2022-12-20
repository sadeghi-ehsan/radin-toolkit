"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
var _react = _interopRequireWildcard(require("react"));
var _rcVirtualList = _interopRequireDefault(require("rc-virtual-list"));
var _react2 = require("@use-gesture/react");
var _radinIcon = require("@sadeghi-ehsan/radin-icon");
var _ParentSelectPopup = _interopRequireDefault(require("./components/ParentSelectPopup"));
var _utils = require("../../../utils");
var _Button = require("../../Atoms/Button");
var _Tooltip = require("../../Atoms/Tooltip");
var _Popover = require("../../Atoms/Popover");
var _Loading = require("../../Atoms/Loading");
var _Badge = require("../../Atoms/Badge");
var _Input = require("../../Molecules/Input");
var _utils2 = require("./utils");
var _jsxRuntime = require("react/jsx-runtime");
var _excluded = ["isLoading", "data", "dataTextField", "dataValueField", "dataChildrenField", "dataGrowthField", "dataSearchFields", "labels", "defaultValue", "onClose", "onSubmit", "className", "submitButtonProps", "cancelButtonProps"];
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
var MultiSelectPopup = /*#__PURE__*/(0, _react.forwardRef)(function (_ref, ref) {
  var isLoading = _ref.isLoading,
    data = _ref.data,
    dataTextField = _ref.dataTextField,
    dataValueField = _ref.dataValueField,
    dataChildrenField = _ref.dataChildrenField,
    dataGrowthField = _ref.dataGrowthField,
    dataSearchFields = _ref.dataSearchFields,
    customLabels = _ref.labels,
    defaultValue = _ref.defaultValue,
    onClose = _ref.onClose,
    onSubmit = _ref.onSubmit,
    className = _ref.className,
    submitButtonProps = _ref.submitButtonProps,
    cancelButtonProps = _ref.cancelButtonProps,
    restProps = (0, _objectWithoutProperties2["default"])(_ref, _excluded);
  var _useState = (0, _react.useState)(false),
    _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
    parentSelectorVisible = _useState2[0],
    setParentSelectorVisible = _useState2[1];
  var _useState3 = (0, _react.useState)([]),
    _useState4 = (0, _slicedToArray2["default"])(_useState3, 2),
    selectedParents = _useState4[0],
    setSelectedParents = _useState4[1];
  var _useState5 = (0, _react.useState)([]),
    _useState6 = (0, _slicedToArray2["default"])(_useState5, 2),
    selectedPopupParents = _useState6[0],
    setSelectedPopupParents = _useState6[1];
  var _useState7 = (0, _react.useState)([]),
    _useState8 = (0, _slicedToArray2["default"])(_useState7, 2),
    selectedItems = _useState8[0],
    setSelectedItems = _useState8[1];
  var _useState9 = (0, _react.useState)(""),
    _useState10 = (0, _slicedToArray2["default"])(_useState9, 2),
    search = _useState10[0],
    setSearch = _useState10[1];
  var selectedItemsRef = (0, _react.useRef)();
  var labels = _objectSpread({
    cancel: "بازگشت",
    submit: "تایید",
    clearSelectedParents: "حذف فیلتر ها",
    parentSelectPopupTitle: "انتخاب صنعت",
    notFoundMessage: "اطلاعاتی یافت نشد"
  }, customLabels);
  var bind = (0, _react2.useGesture)({
    onDrag: function onDrag(_ref2) {
      var _ref2$offset = (0, _slicedToArray2["default"])(_ref2.offset, 1),
        ox = _ref2$offset[0];
      selectedItemsRef.current.scrollLeft = -ox;
    }
  }, {
    drag: {
      axis: "x",
      filterTaps: true,
      from: function from() {
        return [-selectedItemsRef.current.scrollLeft, 0];
      }
    }
  });
  (0, _react.useEffect)(function () {
    if (defaultValue.length > 0) setSelectedItems(defaultValue);
  }, []);
  var searchedData = (0, _react.useMemo)(function () {
    var filteredByParent;
    var result = [];

    /** filter data if any parents are selected and filtered  */
    if (selectedParents.length > 0) {
      filteredByParent = data.filter(function (item) {
        return selectedParents.some(function (selectedParent) {
          return selectedParent === item[dataValueField];
        });
      });
    } else {
      filteredByParent = data;
    }

    /** filter data if search is not empty */
    if (search) {
      filteredByParent.forEach(function (item) {
        if ((0, _utils2.searchInObject)({
          search: search,
          item: item,
          dataSearchFields: dataSearchFields,
          dataTextField: dataTextField
        })) result.push(item);else if (item[dataChildrenField] && item[dataChildrenField].length > 0) {
          var searchedChildren = [];
          item[dataChildrenField].forEach(function (child) {
            if ((0, _utils2.searchInObject)({
              search: search,
              item: child,
              dataSearchFields: dataSearchFields,
              dataTextField: dataTextField
            })) searchedChildren.push(child);
          });
          if (searchedChildren.length > 0) {
            var _result$push;
            result.push((_result$push = {}, (0, _defineProperty2["default"])(_result$push, dataValueField, item[dataValueField]), (0, _defineProperty2["default"])(_result$push, dataTextField, item[dataTextField]), (0, _defineProperty2["default"])(_result$push, dataChildrenField, searchedChildren), _result$push));
          }
        }
      });
    } else {
      result = filteredByParent;
    }
    return result.reduce(function (acc, cur) {
      var parent = _objectSpread({}, cur);
      parent.isParent = true;
      if (cur[dataChildrenField] && cur[dataChildrenField].length > 0) {
        return [].concat((0, _toConsumableArray2["default"])(acc), [parent], (0, _toConsumableArray2["default"])(cur[dataChildrenField]));
      }
      return [].concat((0, _toConsumableArray2["default"])(acc), [parent]);
    }, []);
  }, [JSON.stringify(data), JSON.stringify(selectedParents), search]);
  var clear = function clear() {
    setSelectedItems([]);
  };
  var onSubmitClick = /*#__PURE__*/function () {
    var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              onSubmit({
                selectedItems: selectedItems,
                clear: clear
              });
            case 1:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));
    return function onSubmitClick() {
      return _ref3.apply(this, arguments);
    };
  }();
  var onChildrenItemClick = function onChildrenItemClick(item) {
    if (selectedItems.some(function (s) {
      return s === item[dataValueField];
    })) {
      setSelectedItems(selectedItems.filter(function (s) {
        return s !== item[dataValueField];
      }));
      return;
    }
    setSelectedItems(function (prev) {
      return [].concat((0, _toConsumableArray2["default"])(prev), [item[dataValueField]]);
    });
  };
  var onParentItemClick = function onParentItemClick(item) {
    var isParentSelected = item[dataChildrenField].every(function (child) {
      return selectedItems.some(function (s) {
        return s === child[dataValueField];
      });
    });
    if (!isParentSelected) {
      setSelectedItems([].concat((0, _toConsumableArray2["default"])(selectedItems.filter(function (s) {
        return !item[dataChildrenField].some(function (i) {
          return s === i[dataValueField];
        });
      })), (0, _toConsumableArray2["default"])(item[dataChildrenField].map(function (i) {
        return i[dataValueField];
      }))));
      return;
    }
    setSelectedItems((0, _toConsumableArray2["default"])(selectedItems.filter(function (s) {
      return !item[dataChildrenField].some(function (i) {
        return s === i[dataValueField];
      });
    })));
  };
  var onSelectedItemClick = function onSelectedItemClick(deleteId) {
    setSelectedItems(selectedItems.filter(function (s) {
      return s !== deleteId;
    }));
  };
  var onClearSelectedParents = function onClearSelectedParents() {
    setSelectedParents([]);
    setSelectedPopupParents([]);
  };
  var onParentSelectPopupSubmit = function onParentSelectPopupSubmit(items) {
    setSelectedParents(items);
    setParentSelectorVisible(false);
  };
  var onParentSelectPopupClose = function onParentSelectPopupClose() {
    setParentSelectorVisible(false);
  };
  var renderListItem = function renderListItem(item) {
    if (item.isParent) {
      return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        className: "sbt-multi-select-popup-parent",
        onClick: function onClick() {
          return onParentItemClick(item);
        },
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          className: "ml-1",
          children: "-"
        }), item[dataTextField], /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          className: "flex-1 flex justify-end",
          children: item[dataChildrenField] && item[dataChildrenField].length > 0 ? item[dataChildrenField].every(function (child) {
            return selectedItems.some(function (s) {
              return s === child[dataValueField];
            });
          }) ? /*#__PURE__*/(0, _jsxRuntime.jsx)(_radinIcon.Eye, {
            color: "primary",
            className: "shrink-0",
            size: "1.4xl"
          }) : /*#__PURE__*/(0, _jsxRuntime.jsx)(_radinIcon.WatchlistAdd, {
            color: "white",
            className: "shrink-0",
            size: "1.4xl"
          }) : null
        })]
      });
    }
    return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      className: (0, _utils.classJoin)(["sbt-multi-select-popup-child"]),
      onClick: function onClick() {
        return onChildrenItemClick(item);
      },
      children: [item[dataTextField], /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        className: "flex-1 flex justify-end",
        children: [item[dataGrowthField] && /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          className: (0, _utils.classJoin)(["flex-1 flex justify-end ml-4", item[dataGrowthField] === 0 || typeof item[dataGrowthField] === "string" ? "text-idle" : item[dataGrowthField] > 0 ? "text-success" : "text-prompt"]),
          children: typeof item[dataGrowthField] === "string" ? item[dataGrowthField] : /*#__PURE__*/(0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
              className: "dir-ltr",
              children: "".concat(Math.abs(item[dataGrowthField]), " %")
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_radinIcon.Increase, {
              className: "mr-2",
              flip: item[dataGrowthField] > 0 ? null : "horizontal"
            })]
          })
        }), selectedItems.some(function (s) {
          return s === item[dataValueField];
        }) ? /*#__PURE__*/(0, _jsxRuntime.jsx)(_radinIcon.Eye, {
          color: "primary",
          className: "shrink-0",
          size: "1.4xl"
        }) : /*#__PURE__*/(0, _jsxRuntime.jsx)(_radinIcon.WatchlistAdd, {
          color: "white",
          className: "shrink-0",
          size: "1.4xl"
        })]
      })]
    }, item[dataValueField]);
  };
  var renderList = function renderList() {
    if (isLoading) {
      return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: "flex items-center justify-center text-idle text-xl mb-3 h-75",
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Loading.Loading, {})
      });
    }
    if (searchedData.length === 0) {
      return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: "flex items-center justify-center text-idle text-xl mb-3 h-75",
        children: labels.notFoundMessage
      });
    }
    return /*#__PURE__*/(0, _jsxRuntime.jsx)(_rcVirtualList["default"], {
      data: searchedData,
      height: 300,
      itemHeight: 38,
      itemKey: dataValueField,
      className: "mb-3",
      children: function children(item) {
        return renderListItem(item);
      }
    });
  };
  var renderSelectedItems = function renderSelectedItems() {
    if (selectedItems.length === 0) return null;
    var selectedData = data.reduce(function (prev, dataItem) {
      var result = dataItem[dataChildrenField] ? dataItem[dataChildrenField].filter(function (child) {
        return selectedItems.includes(child[dataValueField]);
      }) : [];
      return [].concat((0, _toConsumableArray2["default"])(prev), (0, _toConsumableArray2["default"])(result));
    }, []);
    return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: "relative select-none overflow-hidden",
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", _objectSpread(_objectSpread({
        className: "sbt-multi-select-popup-selected",
        ref: selectedItemsRef
      }, bind()), {}, {
        children: selectedData.map(function (s) {
          return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
            className: "py-1 px-2 bg-appearing rounded flex items-center text-light cursor-pointer hover:bg-appearing/80 hover:text-terminate whitespace-nowrap transition-all",
            onClick: function onClick() {
              return onSelectedItemClick(s[dataValueField]);
            },
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
              className: "text-light",
              children: s[dataTextField]
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_radinIcon.Close, {
              weight: "fill",
              size: ".6xs",
              className: "mr-2 font-bold"
            })]
          }, s[dataValueField]);
        })
      }))
    });
  };
  var renderSelectedParentsTooltip = function renderSelectedParentsTooltip() {
    return selectedParents.map(function (selectedParent) {
      return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: "m-1",
        children: data.find(function (item) {
          return item[dataValueField] === selectedParent;
        })[dataTextField]
      }, selectedParent);
    });
  };
  var renderHeaderSection = function renderHeaderSection() {
    return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      className: "flex flex-row items-center justify-between pb-2",
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_radinIcon.Search, {
        color: "primary",
        className: "ml-1 shrink-0",
        size: "1.4xl"
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Input.Input, {
        variant: "none",
        className: "!p-0",
        childrenClassName: "!p-0",
        value: search,
        onChange: setSearch,
        fieldsetClassName: "!h-9"
      }), selectedParents.length > 0 ? /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        className: "flex items-center ml-4 cursor-pointer",
        onClick: onClearSelectedParents,
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          className: "text-idle text-sm whitespace-nowrap ml-2",
          children: labels.clearSelectedParents
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          className: "bg-appearing w-4 h-4 rounded-md flex items-center justify-center hover:bg-terminate transition-colors",
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_radinIcon.Close, {
            weight: "fill",
            size: ".6xs",
            color: "card-bg",
            className: "shrink-0"
          })
        })]
      }) : null, !isLoading ? /*#__PURE__*/(0, _jsxRuntime.jsx)(_Popover.Popover, {
        trigger: "click",
        content: /*#__PURE__*/(0, _jsxRuntime.jsx)(_ParentSelectPopup["default"], {
          data: data,
          selectedItems: selectedPopupParents,
          setSelectedItems: setSelectedPopupParents,
          dataTextField: dataTextField,
          dataValueField: dataValueField,
          onClose: onParentSelectPopupClose,
          onSubmit: onParentSelectPopupSubmit,
          labels: labels
        }),
        visible: parentSelectorVisible,
        onVisibleChange: setParentSelectorVisible,
        placement: "bottomLeft",
        className: "",
        children: selectedParents.length > 0 ? /*#__PURE__*/(0, _jsxRuntime.jsx)(_Tooltip.Tooltip, {
          title: renderSelectedParentsTooltip(),
          placement: "bottom",
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Badge.Badge, {
            type: "badge",
            color: "warning-black",
            content: /*#__PURE__*/(0, _jsxRuntime.jsx)(_radinIcon.FilterSquare, {
              className: "cursor-pointer shrink-0",
              size: "1.4xl",
              color: "primary"
            }),
            children: selectedParents.length
          })
        }) : /*#__PURE__*/(0, _jsxRuntime.jsx)(_radinIcon.FilterSquare, {
          className: "cursor-pointer shrink-0",
          size: "1.4xl",
          color: "idle"
        })
      }) : null]
    });
  };
  var renderFooterSection = function renderFooterSection() {
    var disableSubmitButton = selectedItems.length === 0 && defaultValue.length === 0 || isLoading;
    return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      className: "flex",
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Button.Button, _objectSpread(_objectSpread({
        block: true,
        onClick: onSubmitClick,
        disabled: disableSubmitButton
      }, submitButtonProps), {}, {
        children: labels.submit
      })), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Button.Button, _objectSpread(_objectSpread({
        onClick: onClose,
        block: true,
        variant: "text"
      }, cancelButtonProps), {}, {
        children: labels.cancel
      }))]
    });
  };
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", _objectSpread(_objectSpread({
    className: (0, _utils.classJoin)(["sbt-multi-select-popup w-125 select-none", className])
  }, restProps), {}, {
    ref: ref,
    children: [renderHeaderSection(), renderSelectedItems(), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: "border-b border-b-idle-border mb-4"
    }), renderList(), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: "border-b border-b-idle-border mb-4"
    }), renderFooterSection()]
  }));
});
MultiSelectPopup.defaultProps = {
  defaultValue: [],
  dataTextField: "name",
  dataValueField: "id",
  dataChildrenField: "children",
  dataGrowthField: "growth"
};
var _default = MultiSelectPopup;
exports["default"] = _default;