"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
var _react = _interopRequireWildcard(require("react"));
var _utils = require("../../../utils");
var _RenderNotificationBody = _interopRequireDefault(require("./components/RenderNotificationBody"));
var _RenderNotificationHeader = _interopRequireDefault(require("./components/RenderNotificationHeader"));
var _jsxRuntime = require("react/jsx-runtime");
var _excluded = ["headerAdornments", "notificationMessagesList", "notificationButtonLabels", "customUnreadMessage", "emptyListMessage", "hasMessage", "enableReadAll", "className", "onConfirm", "onCancel", "onCollapse", "onExpand", "onReadAll"];
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
var NotificationBox = /*#__PURE__*/(0, _react.forwardRef)(function (_ref, ref) {
  var headerAdornments = _ref.headerAdornments,
    notificationMessagesList = _ref.notificationMessagesList,
    notificationButtonLabels = _ref.notificationButtonLabels,
    customUnreadMessage = _ref.customUnreadMessage,
    emptyListMessage = _ref.emptyListMessage,
    hasMessage = _ref.hasMessage,
    enableReadAll = _ref.enableReadAll,
    className = _ref.className,
    onConfirm = _ref.onConfirm,
    onCancel = _ref.onCancel,
    onCollapse = _ref.onCollapse,
    onExpand = _ref.onExpand,
    onReadAll = _ref.onReadAll,
    restProps = (0, _objectWithoutProperties2["default"])(_ref, _excluded);
  var _useState = (0, _react.useState)(notificationMessagesList || []),
    _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
    notificationList = _useState2[0],
    setNotificationList = _useState2[1];
  var _useState3 = (0, _react.useState)(false),
    _useState4 = (0, _slicedToArray2["default"])(_useState3, 2),
    readAllFlag = _useState4[0],
    setReadAllFlag = _useState4[1];
  var scrollableElement = (0, _react.useRef)(null);
  (0, _react.useEffect)(function () {
    var _scrollableElement$cu;
    setNotificationList(notificationMessagesList);
    (_scrollableElement$cu = scrollableElement.current) === null || _scrollableElement$cu === void 0 ? void 0 : _scrollableElement$cu.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }, [notificationMessagesList]);
  (0, _react.useEffect)(function () {
    if ((notificationList === null || notificationList === void 0 ? void 0 : notificationList.filter(function (item) {
      return !item.read;
    }).length) > 0) {
      setReadAllFlag(true);
    }
  });
  var collapseExpandNotification = function collapseExpandNotification(array, id) {
    return array.map(function (el) {
      return el.id === id ? _objectSpread(_objectSpread({}, el), {}, {
        isCollapsed: !el.isCollapsed
      }) : el;
    });
  };
  var handleClickConfirm = function handleClickConfirm(e, id) {
    e.stopPropagation();
    onConfirm === null || onConfirm === void 0 ? void 0 : onConfirm(e, id);
  };
  var handleClickCancel = function handleClickCancel(e, id) {
    e.stopPropagation();
    onCancel === null || onCancel === void 0 ? void 0 : onCancel(e, id);
  };
  var handleCollapse = function handleCollapse(e, id) {
    e.stopPropagation();
    onCollapse === null || onCollapse === void 0 ? void 0 : onCollapse(e, id);
    var result = collapseExpandNotification(notificationList, id);
    setNotificationList(result);
  };
  var handleExpand = function handleExpand(id) {
    onExpand === null || onExpand === void 0 ? void 0 : onExpand(id);
    var result = collapseExpandNotification(notificationList, id);
    setNotificationList(result);
  };
  var handleReadAll = function handleReadAll() {
    setReadAllFlag(!readAllFlag);
    onReadAll === null || onReadAll === void 0 ? void 0 : onReadAll(readAllFlag);
  };
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", _objectSpread(_objectSpread({
    className: (0, _utils.classJoin)(["h-full flex flex-col relative", className])
  }, restProps), {}, {
    ref: ref,
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_RenderNotificationHeader["default"], {
      headerAdornments: headerAdornments,
      hasMessage: hasMessage,
      customUnreadMessage: customUnreadMessage,
      enableReadAll: enableReadAll,
      readAllFlag: readAllFlag,
      notificationButtonLabels: notificationButtonLabels,
      handleReadAll: handleReadAll
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: "pl-1 overflow-y-auto h-full scrollbar-primary-sm mt-1 relative flex-1 pb-7",
      ref: scrollableElement,
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_RenderNotificationBody["default"], {
        notificationList: notificationList,
        notificationButtonLabels: notificationButtonLabels,
        handleExpand: handleExpand,
        handleClickConfirm: handleClickConfirm,
        handleClickCancel: handleClickCancel,
        handleCollapse: handleCollapse,
        emptyListMessage: emptyListMessage
      })
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: "absolute h-14 bottom-0 right-0 left-2 bg-gradient-to-t from-card-bg pointer-events-none"
    })]
  }));
});
NotificationBox.defaultProps = {
  hasMessage: true,
  enableReadAll: true
};
var _default = NotificationBox;
exports["default"] = _default;