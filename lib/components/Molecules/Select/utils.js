"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.selectTypes = exports.customTheme = exports.customStyles = exports.customComponents = void 0;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _creatable = _interopRequireDefault(require("react-select/creatable"));
var _async = _interopRequireDefault(require("react-select/async"));
var _asyncCreatable = _interopRequireDefault(require("react-select/async-creatable"));
var _reactSelectAsyncPaginate = require("react-select-async-paginate");
var _reactSelect = _interopRequireWildcard(require("react-select"));
var _reactHorizontalScrollingMenu = require("react-horizontal-scrolling-menu");
var _radinIcon = require("@sadeghi-ehsan/radin-icon");
var _tailwind = require("../../../constants/tailwind");
var _utils = require("../../../utils");
var _jsxRuntime = require("react/jsx-runtime");
var _react = require("react");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
var selectTypes = {
  "default": _reactSelect["default"],
  creatable: _creatable["default"],
  // Use the Async component to load options from a remote source as the user types
  async: _async["default"],
  asyncCreatable: _asyncCreatable["default"],
  asyncPaginate: _reactSelectAsyncPaginate.AsyncPaginate
};
exports.selectTypes = selectTypes;
var MultiValueLabel = function MultiValueLabel(_ref) {
  var opt = _ref.opt,
    removeValue = _ref.removeValue,
    className = _ref.className;
  var _opt$disable = opt.disable,
    disable = _opt$disable === void 0 ? false : _opt$disable,
    label = opt.label;
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    className: (0, _utils.classJoin)(["inline-flex items-center text-light-text text-sm bg-appearing rounded py-0.5 px-2 cursor-default whitespace-nowrap", className]),
    children: [label, /*#__PURE__*/(0, _jsxRuntime.jsx)(_radinIcon.Close, _objectSpread({
      className: (0, _utils.classJoin)(["mr-2", (0, _utils.ifEmpty)(disable, "cursor-pointer transition-sbt hover:text-terminate")])
    }, (0, _utils.ifEmpty)(disable, {
      onClick: function onClick() {
        return removeValue(opt);
      },
      onTouchEnd: function onTouchEnd() {
        return removeValue(opt);
      }
    }, {})))]
  });
};
var exObj = function exObj(list, keys) {
  return (0, _utils.filterObj)(list, function (v, k) {
    return !keys.includes(k);
  });
};
var customStyles = function customStyles() {
  return {
    control: function control(provided) {
      return _objectSpread(_objectSpread({}, provided), {}, {
        backgroundColor: "transparent",
        borderWidth: 0,
        height: "100%",
        boxShadow: "none"
      });
    },
    menuPortal: function menuPortal(provided) {
      return _objectSpread(_objectSpread({}, provided), {}, {
        zIndex: 9999
      });
    },
    menu: function menu(provided) {
      return _objectSpread(_objectSpread({}, exObj(provided, ["marginTop", "marginBottom", "borderRadius", "boxShadow"])), {}, {
        backgroundColor: _tailwind.colors["card-bg"]
      });
    },
    menuList: function menuList(provided) {
      return _objectSpread({}, exObj(provided, ["paddingTop", "paddingBottom"]));
    },
    option: function option(provided, state) {
      return _objectSpread(_objectSpread({}, exObj(provided, ["backgroundColor", "cursor", "padding"])), state.isSelected ? {
        color: _tailwind.colors.primary
      } : {});
    },
    input: function input(provided) {
      return _objectSpread({}, exObj(provided, ["color", "margin", "paddingTop", "paddingBottom"]));
    },
    singleValue: function singleValue(provided, state) {
      return _objectSpread(_objectSpread({}, exObj(provided, ["marginLeft", "marginRight"])), state.isDisabled ? {
        color: _tailwind.colors.disabled
      } : {
        color: _tailwind.colors["light-text"]
      });
    },
    valueContainer: function valueContainer(provided) {
      return _objectSpread({}, exObj(provided, ["padding"]));
    },
    placeholder: function placeholder(provided) {
      return _objectSpread({}, exObj(provided, ["marginLeft", "marginRight"]));
    }
  };
};
exports.customStyles = customStyles;
var customTheme = function customTheme() {
  return function (t) {
    return _objectSpread({}, t);
  };
};
exports.customTheme = customTheme;
var ValueContainer = function ValueContainer(props) {
  var _parentRef$current;
  var children = props.children,
    className = props.className,
    cx = props.cx,
    innerProps = props.innerProps,
    isMulti = props.isMulti,
    getStyles = props.getStyles,
    getValue = props.getValue,
    hasValue = props.hasValue,
    _props$selectProps = props.selectProps,
    menuIsOpen = _props$selectProps.menuIsOpen,
    getOptionLabel = _props$selectProps.getOptionLabel,
    isDisabled = _props$selectProps.isDisabled,
    placeholder = _props$selectProps.placeholder,
    parentRef = _props$selectProps.parentRef;
  var selectValue = getValue();
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", _objectSpread(_objectSpread({
    style: getStyles("valueContainer", props),
    className: cx({
      "value-container": true,
      "value-container--is-multi": isMulti,
      "value-container--has-value": hasValue
    }, className)
  }, innerProps), {}, {
    children: [isMulti && !(0, _utils.empty)(selectValue) && menuIsOpen ? /*#__PURE__*/(0, _react.createElement)(_reactSelect.components.Placeholder, _objectSpread(_objectSpread({}, props), {}, {
      key: "placeholder",
      isDisabled: isDisabled,
      isFocused: false,
      innerProps: {
        id: parentRef === null || parentRef === void 0 ? void 0 : (_parentRef$current = parentRef.current) === null || _parentRef$current === void 0 ? void 0 : _parentRef$current.getElementId("placeholder")
      }
    }), placeholder) : null, children.map(function (child, index) {
      if (isMulti && (0, _utils.isArray)(child)) {
        var _child$props$id, _child$props;
        if (menuIsOpen) {
          return undefined;
        }
        return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          className: "truncate text-light-text",
          children: selectValue.map(function (opt) {
            return getOptionLabel(opt);
          }).join(", ")
        }, (_child$props$id = child === null || child === void 0 ? void 0 : (_child$props = child.props) === null || _child$props === void 0 ? void 0 : _child$props.id) !== null && _child$props$id !== void 0 ? _child$props$id : index);
      }
      return child;
    })]
  }));
};
var Menu = function Menu(props) {
  var children = props.children,
    className = props.className,
    cx = props.cx,
    getStyles = props.getStyles,
    getValue = props.getValue,
    isMulti = props.isMulti,
    innerRef = props.innerRef,
    innerProps = props.innerProps,
    _props$selectProps2 = props.selectProps,
    getOptionValue = _props$selectProps2.getOptionValue,
    onChange = _props$selectProps2.onChange;
  var selectValue = getValue();
  var removeValue = function removeValue(removedValue) {
    var candidate = getOptionValue(removedValue);
    var newValueArray = selectValue.filter(function (i) {
      return getOptionValue(i) !== candidate;
    });
    var newValue = isMulti ? newValueArray : newValueArray[0] || null;

    // @ts-ignore
    onChange(newValue, {
      action: "remove-value",
      removedValue: removedValue
    });
  };
  var onWheel = function onWheel(apiObj, ev) {
    var isTouchpad = Math.abs(ev.deltaX) !== 0 || Math.abs(ev.deltaY) < 15;
    if (isTouchpad) {
      ev.stopPropagation();
      return;
    }
    if (ev.deltaY > 0) {
      apiObj.scrollNext();
    } else if (ev.deltaY < 0) {
      apiObj.scrollPrev();
    }
  };
  var _usePreventBodyScroll = (0, _utils.usePreventBodyScroll)(),
    disableScroll = _usePreventBodyScroll.disableScroll,
    enableScroll = _usePreventBodyScroll.enableScroll;
  var _useDrag = (0, _utils.useDrag)(),
    dragStart = _useDrag.dragStart,
    dragStop = _useDrag.dragStop,
    dragMove = _useDrag.dragMove;
  var handleDrag = function handleDrag(_ref2) {
    var scrollContainer = _ref2.scrollContainer;
    return function (ev) {
      return (
        // @ts-ignore
        dragMove(ev, function (posDiff) {
          if (scrollContainer.current) {
            // eslint-disable-next-line no-param-reassign
            scrollContainer.current.scrollLeft += posDiff;
          }
        })
      );
    };
  };
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", _objectSpread(_objectSpread({}, innerProps), {}, {
    ref: innerRef,
    style: getStyles("menu", props),
    className: cx({
      menu: true
    }, (0, _utils.classJoin)(["sbt-select-Menu dir-rtl pl-4 pr-2 py-3", className])),
    children: [isMulti && !(0, _utils.empty)(selectValue) && /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      onMouseEnter: disableScroll,
      onMouseLeave: function onMouseLeave() {
        enableScroll();
        dragStop();
      },
      className: "mb-3",
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactHorizontalScrollingMenu.ScrollMenu
      // @ts-ignore
      , {
        onWheel: onWheel,
        onMouseDown: function onMouseDown() {
          return dragStart;
        },
        onMouseUp: function onMouseUp() {
          return dragStop;
        }
        // @ts-ignore
        ,
        onMouseMove: handleDrag,
        children: selectValue.map(function (opt, ind) {
          return /*#__PURE__*/(0, _jsxRuntime.jsx)(MultiValueLabel, {
            // @ts-ignore
            itemId: getOptionValue(opt),
            opt: opt,
            removeValue: removeValue,
            className: selectValue.length === ind + 1 ? "ml-9" : "ml-2"
          }, getOptionValue(opt));
        })
      })
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: "border-t border-card-border mb-3 mr-2"
    }), children]
  }));
};
var customComponents = {
  Menu: Menu,
  ValueContainer: ValueContainer,
  IndicatorSeparator: function IndicatorSeparator() {
    return null;
  }
};
exports.customComponents = customComponents;