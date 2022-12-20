"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.Tabs = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _react = require("react");
var _radinIcon = require("@sadeghi-ehsan/radin-icon");
var _utils = require("../../../utils");
var _Popover = _interopRequireDefault(require("../../Atoms/Popover/Popover"));
var _utils2 = require("./utils");
var _TabsPane = _interopRequireDefault(require("./TabsPane"));
var _jsxRuntime = require("react/jsx-runtime");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
var Tabs = function Tabs(_ref) {
  var className = _ref.className,
    children = _ref.children,
    defaultActiveKey = _ref.defaultActiveKey,
    tabsClassName = _ref.tabsClassName,
    tabActions = _ref.tabActions,
    newTabDefault = _ref.newTabDefault,
    onTabChange = _ref.onTabChange,
    onDataChange = _ref.onDataChange,
    showFavorite = _ref.showFavorite,
    showAddButton = _ref.showAddButton,
    showMoreOptions = _ref.showMoreOptions,
    showRemove = _ref.showRemove,
    growTabs = _ref.growTabs,
    editable = _ref.editable,
    onDelete = _ref.onDelete,
    access = _ref.access,
    onClickAdd = _ref.onClickAdd,
    headerClassName = _ref.headerClassName,
    headerStyle = _ref.headerStyle,
    style = _ref.style,
    tools = _ref.tools;
  var _useState = (0, _react.useState)(defaultActiveKey || ""),
    _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
    active = _useState2[0],
    setActive = _useState2[1];
  var _useState3 = (0, _react.useState)({
      show: true,
      active: false
    }),
    _useState4 = (0, _slicedToArray2["default"])(_useState3, 2),
    rightScroll = _useState4[0],
    setRightScroll = _useState4[1];
  var _useState5 = (0, _react.useState)({
      show: true,
      active: true
    }),
    _useState6 = (0, _slicedToArray2["default"])(_useState5, 2),
    leftScroll = _useState6[0],
    setLeftScroll = _useState6[1];
  var _useState7 = (0, _react.useState)(null),
    _useState8 = (0, _slicedToArray2["default"])(_useState7, 2),
    data = _useState8[0],
    setData = _useState8[1];
  var _useState9 = (0, _react.useState)(""),
    _useState10 = (0, _slicedToArray2["default"])(_useState9, 2),
    focus = _useState10[0],
    setFocus = _useState10[1];
  var _useState11 = (0, _react.useState)(0),
    _useState12 = (0, _slicedToArray2["default"])(_useState11, 2),
    activeIndex = _useState12[0],
    setActiveIndex = _useState12[1];
  var firstLoad = (0, _react.useRef)(true);
  var sliderRef = (0, _react.useRef)(null);
  var selectedTabRef = (0, _react.useRef)(null);
  var _useState13 = (0, _react.useState)(""),
    _useState14 = (0, _slicedToArray2["default"])(_useState13, 2),
    inputValue = _useState14[0],
    setInputValue = _useState14[1];
  var handleTabChange = function handleTabChange(key, index) {
    onTabChange(key);
    setActive(key);
    setActiveIndex(index);
  };
  var _useScroll = (0, _utils2.useScroll)(sliderRef, setRightScroll, setLeftScroll),
    addListeners = _useScroll.addListeners,
    removeListeners = _useScroll.removeListeners,
    isDrawing = _useScroll.isDrawing;
  var handleFocus = /*#__PURE__*/function () {
    var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(selectedKey, isActive, index) {
      var _selectedTabRef$curre;
      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return setFocus(selectedKey);
            case 2:
              selectedTabRef === null || selectedTabRef === void 0 ? void 0 : (_selectedTabRef$curre = selectedTabRef.current) === null || _selectedTabRef$curre === void 0 ? void 0 : _selectedTabRef$curre.scrollIntoView({
                behavior: "smooth",
                block: "nearest",
                inline: "nearest"
              });
              if (isActive) handleTabChange(selectedKey, index);
              setRightScroll({
                show: true,
                active: true
              });
            case 5:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));
    return function handleFocus(_x, _x2, _x3) {
      return _ref2.apply(this, arguments);
    };
  }();
  var prevKeys = (0, _utils2.usePrevious)(data === null || data === void 0 ? void 0 : data.map(function (item) {
    return item === null || item === void 0 ? void 0 : item.key;
  }));
  (0, _react.useEffect)(function () {
    setData(children && Array.isArray(children) && (0, _utils2.sortData)((0, _utils2.handleFixedTab)(children)));
  }, [children]);
  (0, _react.useEffect)(function () {
    if ((prevKeys === null || prevKeys === void 0 ? void 0 : prevKeys.length) > (data === null || data === void 0 ? void 0 : data.length) && !onDelete && (data === null || data === void 0 ? void 0 : data.findIndex(function (item) {
      return (item === null || item === void 0 ? void 0 : item.key) === (active === null || active === void 0 ? void 0 : active.toString());
    })) === -1) {
      var newActiveIndex = Number(prevKeys === null || prevKeys === void 0 ? void 0 : prevKeys.findIndex(function (item) {
        return item === active;
      })) - 1;
      if ((data === null || data === void 0 ? void 0 : data.length) > 1 && newActiveIndex >= 0) {
        var _data$newActiveIndex;
        setActive(data === null || data === void 0 ? void 0 : (_data$newActiveIndex = data[newActiveIndex]) === null || _data$newActiveIndex === void 0 ? void 0 : _data$newActiveIndex.key);
      } else if ((data === null || data === void 0 ? void 0 : data.length) === 1) {
        var _data$;
        setActive(data === null || data === void 0 ? void 0 : (_data$ = data[0]) === null || _data$ === void 0 ? void 0 : _data$.key);
      }
    }
    if ((prevKeys === null || prevKeys === void 0 ? void 0 : prevKeys.length) < (data === null || data === void 0 ? void 0 : data.length) && (data === null || data === void 0 ? void 0 : data.length) > 1 && !(prevKeys.length === 1 && prevKeys[0] === "primary")) {
      var _data;
      setActive(data === null || data === void 0 ? void 0 : (_data = data[Number(data === null || data === void 0 ? void 0 : data.length) - 1]) === null || _data === void 0 ? void 0 : _data.key);
    }
  }, [data]);
  (0, _react.useEffect)(function () {
    if (!firstLoad.current) {
      if ((0, _toConsumableArray2["default"])(data).findIndex(function (item) {
        var _item$props, _item$props2;
        return (item === null || item === void 0 ? void 0 : (_item$props = item.props) === null || _item$props === void 0 ? void 0 : _item$props.editing) || (item === null || item === void 0 ? void 0 : (_item$props2 = item.props) === null || _item$props2 === void 0 ? void 0 : _item$props2.newTab);
      }) === -1) {
        var modifiedData = data === null || data === void 0 ? void 0 : data.map(function (item) {
          var _item$props3 = item.props,
            pin = _item$props3.pin,
            disabled = _item$props3.disabled,
            notice = _item$props3.notice,
            favorite = _item$props3.favorite,
            title = _item$props3.title,
            fix = _item$props3.fix,
            key = item.key;
          return {
            key: key,
            pin: pin,
            title: title,
            favorite: favorite,
            disabled: disabled,
            notice: notice,
            fix: fix
          };
        });
        onDataChange(modifiedData);
      }
    } else {
      var _data$2;
      if (defaultActiveKey) setActiveIndex((0, _utils2.findActiveIndex)(defaultActiveKey, data));
      if (!defaultActiveKey) setActive(data === null || data === void 0 ? void 0 : (_data$2 = data[0]) === null || _data$2 === void 0 ? void 0 : _data$2.key);
    }
    if (data) firstLoad.current = false;
  }, [data]);
  var scrollSlider = function scrollSlider(type, showLast) {
    var scrollWidth = Math.floor(sliderRef.current.clientWidth / 3) || _utils2.SCROLL_WIDTH;
    if (sliderRef) {
      if (type === "left") {
        sliderRef.current.scrollBy({
          left: showLast ? -scrollWidth * 20 : -scrollWidth,
          behavior: "smooth"
        });
        setRightScroll({
          active: true,
          show: true
        });
        if (sliderRef.current.scrollLeft - scrollWidth - sliderRef.current.clientWidth < -sliderRef.current.scrollWidth) {
          setLeftScroll({
            active: false,
            show: true
          });
        }
      } else {
        setLeftScroll({
          active: true,
          show: true
        });
        sliderRef.current.scrollBy({
          left: scrollWidth,
          behavior: "smooth"
        });
        if (sliderRef.current.scrollLeft >= -scrollWidth) setRightScroll({
          active: false,
          show: true
        });
      }
    }
  };
  var handleAdd = /*#__PURE__*/function () {
    var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2() {
      var _sliderRef$current, _sliderRef$current2;
      var newTabElement;
      return _regenerator["default"].wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              setInputValue("".concat(_utils2.defaultName, " ").concat((0, _utils2.findTabIndex)(data)));
              newTabElement = /*#__PURE__*/(0, _react.createElement)(_TabsPane["default"], {
                title: "",
                key: "tab-".concat(new Date().getTime()),
                newTab: true
              }, newTabDefault);
              _context2.next = 4;
              return setData([].concat((0, _toConsumableArray2["default"])(data), [newTabElement]));
            case 4:
              if ((sliderRef === null || sliderRef === void 0 ? void 0 : (_sliderRef$current = sliderRef.current) === null || _sliderRef$current === void 0 ? void 0 : _sliderRef$current.clientWidth) !== (sliderRef === null || sliderRef === void 0 ? void 0 : (_sliderRef$current2 = sliderRef.current) === null || _sliderRef$current2 === void 0 ? void 0 : _sliderRef$current2.scrollWidth)) scrollSlider("left", true);
            case 5:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));
    return function handleAdd() {
      return _ref3.apply(this, arguments);
    };
  }();
  (0, _react.useLayoutEffect)(function () {
    var _sliderRef$current3, _sliderRef$current4, _sliderRef$current5;
    if (!(data !== null && data !== void 0 && data.length)) {
      setRightScroll({
        active: false,
        show: false
      });
    } else if (data !== null && data !== void 0 && data.length && !rightScroll.show) {
      setRightScroll(function (prev) {
        return _objectSpread(_objectSpread({}, prev), {}, {
          show: true
        });
      });
    }
    if (sliderRef !== null && sliderRef !== void 0 && (_sliderRef$current3 = sliderRef.current) !== null && _sliderRef$current3 !== void 0 && _sliderRef$current3.clientWidth && (sliderRef === null || sliderRef === void 0 ? void 0 : (_sliderRef$current4 = sliderRef.current) === null || _sliderRef$current4 === void 0 ? void 0 : _sliderRef$current4.clientWidth) === (sliderRef === null || sliderRef === void 0 ? void 0 : (_sliderRef$current5 = sliderRef.current) === null || _sliderRef$current5 === void 0 ? void 0 : _sliderRef$current5.scrollWidth) || (data === null || data === void 0 ? void 0 : data.length) === 0) {
      setLeftScroll(_objectSpread(_objectSpread({}, leftScroll), {
        show: false
      }));
    } else {
      setLeftScroll(_objectSpread(_objectSpread({}, leftScroll), {
        show: true
      }));
    }
  }, [data]);
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    style: style,
    className: (0, _utils.classJoin)(["bg-main-bg", className]),
    children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      style: headerStyle,
      className: (0, _utils.classJoin)(["flex overflow-x-auto overflow-y-hidden scrollbar-primary items-center bg-card-bg", headerClassName]),
      children: [rightScroll.show && /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: "h-10 flex items-center shadow-left-scroll ml-0.5",
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_radinIcon.Chevron, {
          onClick: function onClick() {
            return rightScroll.active && scrollSlider("right");
          },
          size: "xl",
          flip: "vertical",
          color: rightScroll.active ? "light-text" : "idle",
          className: "mx-2 cursor-pointer min-w-5"
        })
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        ref: sliderRef,
        className: "flex items-center overflow-y-hidden overflow-x-auto h-10 sbt-tabs",
        onMouseEnter: function onMouseEnter() {
          return addListeners();
        },
        onMouseLeave: function onMouseLeave() {
          isDrawing.current = false;
          removeListeners();
        },
        children: data === null || data === void 0 ? void 0 : data.map(function (child, index) {
          var _child$props, _child$props2, _child$props3;
          return /*#__PURE__*/(0, _jsxRuntime.jsx)(_utils2.TabTitle, {
            ref: focus === (child === null || child === void 0 ? void 0 : child.key) ? selectedTabRef : null,
            active: active,
            child: child,
            data: data,
            editable: editable && (child === null || child === void 0 ? void 0 : (_child$props = child.props) === null || _child$props === void 0 ? void 0 : _child$props.editable) && (child !== null && child !== void 0 && (_child$props2 = child.props) !== null && _child$props2 !== void 0 && _child$props2.notice ? access : true),
            showRemove: showRemove && (child === null || child === void 0 ? void 0 : (_child$props3 = child.props) === null || _child$props3 === void 0 ? void 0 : _child$props3.deletable),
            handleTabChange: handleTabChange,
            setData: setData,
            tabsClassName: tabsClassName,
            tabActions: tabActions,
            showFavorite: showFavorite,
            showMoreOptions: showMoreOptions,
            growTabs: growTabs,
            handleFocus: handleFocus,
            activeIndex: activeIndex,
            onDelete: onDelete,
            index: index,
            inputValue: inputValue,
            setInputValue: setInputValue,
            access: access,
            onFavorite: tabActions.onFavorite
          }, child === null || child === void 0 ? void 0 : child.key);
        })
      }), leftScroll.show && /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: "border-card-border border-x h-10 flex items-center shadow-right-scroll",
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_radinIcon.Chevron, {
          onClick: function onClick() {
            return leftScroll.active && scrollSlider("left");
          },
          size: "lg",
          color: leftScroll.active ? "light-text" : "idle",
          className: "mx-2 cursor-pointer min-w-5"
        })
      }), showAddButton && /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
        onClick: function onClick() {
          return onClickAdd ? onClickAdd() : handleAdd();
        },
        className: "bg-primary p-1 rounded-lg mr-4 transition-sbt cursor-pointer hover:bg-primary-hover",
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_radinIcon.Plus, {
          color: "white"
        })
      }), tools && /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: "pr-2",
        children: tools
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
        className: "mr-auto",
        children: (data === null || data === void 0 ? void 0 : data.length) > 0 && /*#__PURE__*/(0, _jsxRuntime.jsx)(_Popover["default"], {
          className: "min-w-56",
          content: data === null || data === void 0 ? void 0 : data.map(function (child, index) {
            return !child.props.fix && /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
              onClick: function onClick() {
                var _child$props4;
                return handleFocus(child === null || child === void 0 ? void 0 : child.key, !(child !== null && child !== void 0 && (_child$props4 = child.props) !== null && _child$props4 !== void 0 && _child$props4.disabled), index);
              },
              className: "px-3 py-2 cursor-pointer -mx-2 hover:bg-primary/10",
              children: child.props.title
            }, child === null || child === void 0 ? void 0 : child.key);
          }),
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_radinIcon.Chevron, {
            rotate: "90",
            size: "sm",
            flip: "vertical",
            color: "light",
            className: "mx-2 cursor-pointer"
          })
        })
      })]
    }), (data === null || data === void 0 ? void 0 : data.find(function (child) {
      var _child$props5;
      return (child === null || child === void 0 ? void 0 : child.key) === active && !(child !== null && child !== void 0 && (_child$props5 = child.props) !== null && _child$props5 !== void 0 && _child$props5.newTab);
    })) || newTabDefault]
  });
};
exports.Tabs = Tabs;
Tabs.defaultProps = {
  onTabChange: function onTabChange() {},
  onDataChange: function onDataChange() {},
  growTabs: false,
  editable: true,
  tabActions: {}
};
var _default = Tabs;
exports["default"] = _default;