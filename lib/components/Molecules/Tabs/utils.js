"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sortData = exports.handleFixedTab = exports.findTabIndex = exports.findActiveIndex = exports.defaultName = exports.changeProperty = exports.TabTitle = exports.SCROLL_WIDTH = exports.FavoriteStar = void 0;
exports.usePrevious = usePrevious;
exports.useScroll = useScroll;
var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _react = require("react");
var _radinIcon = require("@sadeghi-ehsan/radin-icon");
var _utils = require("../../../utils");
var _Popover = _interopRequireDefault(require("../../Atoms/Popover/Popover"));
var _SwitchToggler = require("../../Atoms/SwitchToggler");
var _Notification = require("../../Atoms/Notification");
var _BaseInput = _interopRequireDefault(require("../../Atoms/BaseInput/BaseInput"));
var _Tooltip = require("../../Atoms/Tooltip");
var _jsxRuntime = require("react/jsx-runtime");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function useScroll(sliderRef, setRightScroll, setLeftScroll) {
  var isDrawing = (0, _react.useRef)(false);
  var handleDragScroll = function handleDragScroll(e) {
    if (isDrawing.current) {
      sliderRef.current.scrollBy({
        left: -e.movementX / 2
      });
      if (e.movementX > 0) {
        setRightScroll({
          active: true,
          show: true
        });
      } else {
        setLeftScroll({
          active: true,
          show: true
        });
      }
    }
  };
  var handleWheelScroll = function handleWheelScroll(e) {
    sliderRef.current.scrollBy({
      left: e.wheelDelta > 0 ? -50 : 50
    });
  };
  var disableDrawing = function disableDrawing() {
    isDrawing.current = false;
  };
  var enableDrawing = function enableDrawing() {
    isDrawing.current = true;
  };
  var addListeners = function addListeners() {
    if (sliderRef.current) {
      sliderRef.current.addEventListener("mousedown", enableDrawing);
      sliderRef.current.addEventListener("mouseup", disableDrawing);
      sliderRef.current.addEventListener("mousemove", handleDragScroll);
      sliderRef.current.addEventListener("wheel", handleWheelScroll);
    }
  };
  var removeListeners = function removeListeners() {
    isDrawing.current = false;
    if (sliderRef.current) {
      sliderRef.current.removeEventListener("mousedown", enableDrawing);
      sliderRef.current.removeEventListener("mouseup", disableDrawing);
      sliderRef.current.removeEventListener("mousemove", handleDragScroll);
      sliderRef.current.removeEventListener("wheel", handleDragScroll);
    }
  };
  (0, _react.useEffect)(function () {
    addListeners();
    return function () {
      removeListeners();
    };
  }, [sliderRef]);
  return {
    addListeners: addListeners,
    removeListeners: removeListeners,
    isDrawing: isDrawing
  };
}
var FavoriteStar = /*#__PURE__*/(0, _react.forwardRef)(function (_ref, ref) {
  var type = _ref.type,
    onClick = _ref.onClick;
  var _useState = (0, _react.useState)(false),
    _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
    hover = _useState2[0],
    setHover = _useState2[1];
  var mouseEvents = {
    ref: ref,
    onClick: onClick,
    onMouseEnter: function onMouseEnter() {
      return setHover(true);
    },
    onMouseLeave: function onMouseLeave() {
      return setHover(false);
    }
  };
  if (type && !hover) {
    return /*#__PURE__*/(0, _jsxRuntime.jsx)(_radinIcon.Star, _objectSpread(_objectSpread({
      weight: "fill"
    }, mouseEvents), {}, {
      color: "warning"
    }));
  }
  if (hover) {
    return /*#__PURE__*/(0, _jsxRuntime.jsx)(_radinIcon.Star, _objectSpread(_objectSpread({
      weight: "fill"
    }, mouseEvents), {}, {
      color: "warning-shadow"
    }));
  }
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_radinIcon.Star, _objectSpread(_objectSpread({}, mouseEvents), {}, {
    color: "warning"
  }));
});
exports.FavoriteStar = FavoriteStar;
var sortData = function sortData(data) {
  var sortedFavoriteData = Array.isArray(data) && data.sort(function (a, b) {
    return Number(Boolean(b.props.favorite)) - Number(Boolean(a.props.favorite));
  });
  var sortedPins = sortedFavoriteData.sort(function (a, b) {
    return Number(Boolean(b.props.pin)) - Number(Boolean(a.props.pin));
  });
  var sortedFixed = sortedPins.sort(function (a, b) {
    return Number(Boolean(b.props.fix)) - Number(Boolean(a.props.fix));
  });
  return sortedFixed.sort(function (a, b) {
    return Number(Boolean(a.props.disabled)) - Number(Boolean(b.props.disabled));
  });
};
exports.sortData = sortData;
var handleFixedTab = function handleFixedTab(data) {
  return data.map(function (item) {
    if (item.props.fix) return _objectSpread(_objectSpread({}, item), {}, {
      props: _objectSpread(_objectSpread({}, item.props), {}, {
        pin: true,
        notice: "public"
      })
    });
    return item;
  });
};
exports.handleFixedTab = handleFixedTab;
var changeProperty = function changeProperty(tab, property, data, text) {
  return data === null || data === void 0 ? void 0 : data.map(function (item) {
    if ((item === null || item === void 0 ? void 0 : item.key) === (tab === null || tab === void 0 ? void 0 : tab.key)) {
      var _item$props2;
      if (property === "title") {
        return _objectSpread(_objectSpread({}, item), {}, {
          props: _objectSpread(_objectSpread({}, item.props), {}, {
            title: text,
            editing: true,
            newTab: false
          })
        });
      }
      if (property === "notice") {
        var _item$props;
        return _objectSpread(_objectSpread({}, item), {}, {
          props: _objectSpread(_objectSpread({}, item.props), {}, {
            notice: ((_item$props = item.props) === null || _item$props === void 0 ? void 0 : _item$props.notice) === "public" ? false : "public",
            editing: false,
            newTab: false
          })
        });
      }
      return _objectSpread(_objectSpread({}, item), {}, {
        props: _objectSpread(_objectSpread({}, item.props), {}, (0, _defineProperty2["default"])({}, property, !((_item$props2 = item.props) !== null && _item$props2 !== void 0 && _item$props2[property])))
      });
    }
    return item;
  });
};
exports.changeProperty = changeProperty;
var findActiveIndex = function findActiveIndex(defaultActiveKey, data) {
  return defaultActiveKey ? data === null || data === void 0 ? void 0 : data.findIndex(function (item) {
    return item.key === defaultActiveKey;
  }) : 0;
};
exports.findActiveIndex = findActiveIndex;
var TabTitle = /*#__PURE__*/(0, _react.forwardRef)(function (_ref2, ref) {
  var data = _ref2.data,
    growTabs = _ref2.growTabs,
    tabsClassName = _ref2.tabsClassName,
    child = _ref2.child,
    active = _ref2.active,
    handleTabChange = _ref2.handleTabChange,
    setData = _ref2.setData,
    tabActions = _ref2.tabActions,
    showFavorite = _ref2.showFavorite,
    showMoreOptions = _ref2.showMoreOptions,
    showRemove = _ref2.showRemove,
    handleFocus = _ref2.handleFocus,
    activeIndex = _ref2.activeIndex,
    index = _ref2.index,
    editable = _ref2.editable,
    onDelete = _ref2.onDelete,
    inputValue = _ref2.inputValue,
    setInputValue = _ref2.setInputValue,
    access = _ref2.access;
  var _child$props = child.props,
    pin = _child$props.pin,
    disabled = _child$props.disabled,
    notice = _child$props.notice,
    favorite = _child$props.favorite,
    title = _child$props.title,
    newTab = _child$props.newTab,
    fix = _child$props.fix,
    editing = _child$props.editing;
  var _useState3 = (0, _react.useState)(false),
    _useState4 = (0, _slicedToArray2["default"])(_useState3, 2),
    hover = _useState4[0],
    setHover = _useState4[1];
  var _useState5 = (0, _react.useState)(false),
    _useState6 = (0, _slicedToArray2["default"])(_useState5, 2),
    showPopOver = _useState6[0],
    setShowPopOver = _useState6[1];
  var _useState7 = (0, _react.useState)(false),
    _useState8 = (0, _slicedToArray2["default"])(_useState7, 2),
    editingName = _useState8[0],
    setEditingName = _useState8[1];
  var onActivate = tabActions.onActivate,
    onNotice = tabActions.onNotice,
    onImport = tabActions.onImport,
    onExport = tabActions.onExport;
  var deleteTab = function deleteTab() {
    var res = onDelete(child === null || child === void 0 ? void 0 : child.key);
    res.then(function () {
      var modified = data.filter(function (item) {
        return item.key !== (child === null || child === void 0 ? void 0 : child.key);
      });
      setData(modified);
      if ((child === null || child === void 0 ? void 0 : child.key) === active) {
        var _modified$;
        handleTabChange((_modified$ = modified[0]) === null || _modified$ === void 0 ? void 0 : _modified$.key, index);
      }
    });
  };
  var favoriteTab = function favoriteTab() {
    var res = tabActions === null || tabActions === void 0 ? void 0 : tabActions.onFavorite(child === null || child === void 0 ? void 0 : child.key);
    res.then(function () {
      setData(sortData(changeProperty(child, "favorite", data)));
    });
  };
  function checkShowOptions() {
    if (onActivate || onExport || onImport) return true;
    return onNotice && access && (child === null || child === void 0 ? void 0 : child.key) !== "primary";
  }
  function renderTabOptions(id) {
    var renderRow = function renderRow(name, icon, onClick, key) {
      return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        key: key,
        onClick: onClick,
        className: "flex justify-between p-2 -mx-2 cursor-pointer hover:bg-table-zebra-light",
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          children: name
        }), icon]
      });
    };
    var tabOptions = [];
    if (onActivate) tabOptions.push({
      name: "فعال",
      icon: /*#__PURE__*/(0, _jsxRuntime.jsx)(_SwitchToggler.SwitchToggler, {
        size: "small",
        defaultChecked: !disabled
      }),
      onClick: function onClick() {
        setShowPopOver(false);
        setData(sortData(changeProperty(child, "disabled", data)));
        if (onActivate) onActivate(child === null || child === void 0 ? void 0 : child.key);
      },
      key: "active"
    });
    if (onNotice) tabOptions.push({
      name: "اعلان عمومی",
      icon: /*#__PURE__*/(0, _jsxRuntime.jsx)(_radinIcon.Notification, {
        weight: notice === "public" ? "fill" : "regular",
        color: notice === "public" ? "warning" : "current",
        size: "1.4xl"
      }),
      onClick: function onClick() {
        setShowPopOver(false);
        handleFocus(child === null || child === void 0 ? void 0 : child.key);
        if (!fix) setData(sortData(changeProperty(child, "notice", data)));
        if (onNotice && !fix) onNotice(child === null || child === void 0 ? void 0 : child.key);
      },
      key: "pin"
    });
    if (onExport) tabOptions.push({
      name: "ایجاد خروجی",
      icon: /*#__PURE__*/(0, _jsxRuntime.jsx)(_radinIcon.Export, {
        size: "1.4xl"
      }),
      onClick: function onClick() {
        setShowPopOver(false);
        if (onExport) onExport(child === null || child === void 0 ? void 0 : child.key);
      },
      key: "export"
    });
    if (onImport) tabOptions.push({
      name: "وارد کردن",
      icon: /*#__PURE__*/(0, _jsxRuntime.jsx)(_radinIcon.Import, {
        size: "1.4xl"
      }),
      onClick: function onClick() {
        setShowPopOver(false);
        if (onImport) onImport(child === null || child === void 0 ? void 0 : child.key);
      },
      key: "import"
    });
    return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: "min-w-44",
      children: tabOptions.map(function (_ref3) {
        var name = _ref3.name,
          icon = _ref3.icon,
          onClick = _ref3.onClick,
          key = _ref3.key;
        return (id !== "primary" || key !== "active" && key !== "pin") && (access && key === "pin" || key !== "pin") && renderRow(name, icon, onClick, key);
      })
    });
  }
  var onChange = function onChange(v) {
    setInputValue(v);
    setData(changeProperty(child, "title", data, v));
  };
  var onBlur = function onBlur(e) {
    var _e$target, _e$target$value;
    setInputValue("");
    if ((_e$target = e.target) !== null && _e$target !== void 0 && (_e$target$value = _e$target.value) !== null && _e$target$value !== void 0 && _e$target$value.trim()) {
      var _e$target2;
      setEditingName(false);
      setData((0, _toConsumableArray2["default"])(sortData(changeProperty(child, "title", data, (_e$target2 = e.target) === null || _e$target2 === void 0 ? void 0 : _e$target2.value))).map(function (item) {
        return _objectSpread(_objectSpread({}, item), {}, {
          props: _objectSpread(_objectSpread({}, item.props), {}, {
            editing: false
          })
        });
      }));
    } else {
      (0, _Notification.notification)({
        key: "error",
        message: "نام دیده بان نمیتواند خالی باشد",
        color: "error"
      });
    }
  };
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    ref: ref,
    role: "presentation",
    onMouseEnter: function onMouseEnter() {
      return setHover(true);
    },
    onMouseLeave: function onMouseLeave() {
      return setHover(false);
    },
    onBlur: function onBlur() {
      return setHover(false);
    },
    className: (0, _utils.classJoin)(["md:text-sm text-xs h-10 cursor-pointer flex align-middle border-main-bg items-center justify-between text-center first-of-type:border-r", "pl-0 pr-2", growTabs ? "grow" : "", index + 1 === activeIndex ? "rounded-bl-xl" : "border-l", index - 1 === activeIndex && "rounded-br-xl", disabled ? "bg-dark-text text-disabled cursor-not-allowed" : active === (child === null || child === void 0 ? void 0 : child.key) ? "bg-main-bg bg-error-bg rounded-tl-lg rounded-tr-lg" : "bg-card-bg hover:bg-tab-hover", pin ? "min-w-36" : growTabs ? "xl:min-w-72 lg:min-w-60 md:min-w-32" : "", tabsClassName]),
    children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      className: "flex align-middle items-center justify-between grow h-full",
      onClick: function onClick() {
        return !disabled && handleTabChange(child === null || child === void 0 ? void 0 : child.key, index);
      },
      children: [!pin && showFavorite && /*#__PURE__*/(0, _jsxRuntime.jsx)(FavoriteStar, {
        onClick: function onClick() {
          return !disabled && (tabActions === null || tabActions === void 0 ? void 0 : tabActions.onFavorite) && favoriteTab();
        },
        type: favorite
      }), !notice && showMoreOptions && checkShowOptions() && /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
        className: "min-w-4"
      }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        onClick: function onClick() {
          if (!disabled && active === (child === null || child === void 0 ? void 0 : child.key) && editable && (child === null || child === void 0 ? void 0 : child.key) !== "primary") {
            setInputValue(title);
            setEditingName(true);
          }
        },
        className: "".concat(pin ? "truncate ... w-16 ".concat(showMoreOptions && checkShowOptions() ? "" : "pl-3") : growTabs ? "" : !showFavorite && !showMoreOptions && !showRemove ? "w-max px-6" : "w-max pr-5", " grow"),
        children: [notice === "public" && /*#__PURE__*/(0, _jsxRuntime.jsx)(_radinIcon.Notification, {
          weight: "fill",
          className: "inline ml-1",
          color: "warning",
          size: "sm"
        }), notice === "private" && /*#__PURE__*/(0, _jsxRuntime.jsx)(_radinIcon.NotificationUser, {
          className: "inline ml-1",
          color: "success",
          size: "sm"
        }), !editingName && !pin && !editing && title, !editingName && pin && /*#__PURE__*/(0, _jsxRuntime.jsx)(_Tooltip.Tooltip, {
          className: "max-h-0",
          title: title,
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
            className: "",
            children: title
          })
        }), (editingName || newTab || editing) && /*#__PURE__*/(0, _jsxRuntime.jsx)(_BaseInput["default"], {
          autoFocus: true,
          className: (0, _utils.classJoin)(["border border-primary rounded-md px-1 text-center", pin ? "w-40" : ""]),
          onChange: onChange,
          onBlur: onBlur,
          onKeyDown: function onKeyDown(e) {
            if (e.key === "Enter") onBlur(e);
          },
          value: inputValue
        })]
      })]
    }), showRemove && (child === null || child === void 0 ? void 0 : child.key) !== "primary" && /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
      className: (0, _utils.classJoin)([(!showMoreOptions || !checkShowOptions()) && "ml-3", "min-w-4"]),
      children: hover && /*#__PURE__*/(0, _jsxRuntime.jsx)(_radinIcon.Close, {
        weight: "fill",
        className: "bg-appearing p-1 rounded",
        onClick: function onClick() {
          return !disabled && deleteTab();
        },
        color: "card-bg"
      })
    }), showMoreOptions && checkShowOptions() && /*#__PURE__*/(0, _jsxRuntime.jsx)(_Popover["default"], {
      visible: showPopOver,
      onVisibleChange: setShowPopOver,
      className: "px-0",
      placement: "bottomLeft",
      trigger: "click",
      content: renderTabOptions(child === null || child === void 0 ? void 0 : child.key),
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: (0, _utils.classJoin)([hover ? "visible" : "invisible", "pl-3 pt-3 pb-3"]),
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_radinIcon.More, {
          color: "description",
          size: "sm"
        })
      })
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {})]
  }, child === null || child === void 0 ? void 0 : child.key);
});
exports.TabTitle = TabTitle;
var SCROLL_WIDTH = 200;
exports.SCROLL_WIDTH = SCROLL_WIDTH;
var defaultName = "دیده بان";
exports.defaultName = defaultName;
var findTabIndex = function findTabIndex(data) {
  var _data$filter, _data$filter$map, _data$filter$map$filt;
  var filtered = data === null || data === void 0 ? void 0 : (_data$filter = data.filter(function (item) {
    var _item$props3, _item$props3$title;
    return item === null || item === void 0 ? void 0 : (_item$props3 = item.props) === null || _item$props3 === void 0 ? void 0 : (_item$props3$title = _item$props3.title) === null || _item$props3$title === void 0 ? void 0 : _item$props3$title.includes(defaultName);
  })) === null || _data$filter === void 0 ? void 0 : (_data$filter$map = _data$filter.map(function (item) {
    var _item$props4, _item$props4$title, _item$props4$title$ma;
    return Number(item === null || item === void 0 ? void 0 : (_item$props4 = item.props) === null || _item$props4 === void 0 ? void 0 : (_item$props4$title = _item$props4.title) === null || _item$props4$title === void 0 ? void 0 : (_item$props4$title$ma = _item$props4$title.match(/\d+/)) === null || _item$props4$title$ma === void 0 ? void 0 : _item$props4$title$ma[0]);
  })) === null || _data$filter$map === void 0 ? void 0 : (_data$filter$map$filt = _data$filter$map.filter(function (i) {
    return i > 0;
  })) === null || _data$filter$map$filt === void 0 ? void 0 : _data$filter$map$filt.sort(function (a, b) {
    return a - b;
  });
  return (filtered === null || filtered === void 0 ? void 0 : filtered.length) > 0 ? filtered[Number(filtered === null || filtered === void 0 ? void 0 : filtered.length) - 1] + 1 : 1;
};
exports.findTabIndex = findTabIndex;
function usePrevious(value) {
  var ref = (0, _react.useRef)();
  (0, _react.useEffect)(function () {
    ref.current = value;
  }, [value]);
  return ref.current;
}