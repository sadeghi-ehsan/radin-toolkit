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
var _radinIcon = require("@sadeghi-ehsan/radin-icon");
var _utils = require("../../../utils");
var _Divider = require("../../Atoms/Divider");
var _RenderLogo = _interopRequireDefault(require("./components/RenderLogo"));
var _tailwind = require("../../../constants/tailwind");
var _Tooltip = require("../../Atoms/Tooltip");
var _jsxRuntime = require("react/jsx-runtime");
var _excluded = ["className", "logo", "brandName", "startAdornments", "middleAdornment", "endAdornment", "showLiveStatus", "statusColor", "logoHref", "profileName", "handleClickLogout", "handleClickNotification", "handleClickProfile"];
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
var Header = function Header(_ref) {
  var _currentTime$calendar, _currentTime$calendar2;
  var className = _ref.className,
    logo = _ref.logo,
    brandName = _ref.brandName,
    startAdornments = _ref.startAdornments,
    middleAdornment = _ref.middleAdornment,
    endAdornment = _ref.endAdornment,
    showLiveStatus = _ref.showLiveStatus,
    statusColor = _ref.statusColor,
    logoHref = _ref.logoHref,
    profileName = _ref.profileName,
    handleClickLogout = _ref.handleClickLogout,
    handleClickNotification = _ref.handleClickNotification,
    handleClickProfile = _ref.handleClickProfile,
    restProps = (0, _objectWithoutProperties2["default"])(_ref, _excluded);
  var _useState = (0, _react.useState)(null),
    _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
    currentTime = _useState2[0],
    setCurrentTime = _useState2[1];
  (0, _react.useEffect)(function () {
    if (!(middleAdornment !== null && middleAdornment !== void 0 && middleAdornment.value)) setCurrentTime((0, _utils.toJalaliDay)(new Date()));
    var timer = !(middleAdornment !== null && middleAdornment !== void 0 && middleAdornment.value) && setInterval(function () {
      return setCurrentTime((0, _utils.toJalaliDay)(new Date()));
    }, 1000);
    return function () {
      return clearInterval(timer);
    };
  }, []);
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", _objectSpread(_objectSpread({
    className: (0, _utils.classJoin)(["h-12 w-full bg-card-bg", className])
  }, restProps), {}, {
    children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      className: "h-full w-full bg-dark-text bg-opacity-50 flex justify-between items-center text-xs px-1 sm:px-3 md:px-4 lg:px-5 md:text-sm",
      children: [logoHref ? /*#__PURE__*/(0, _jsxRuntime.jsx)("a", {
        href: logoHref,
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_RenderLogo["default"], {
          logo: logo,
          brandName: brandName
        })
      }) : /*#__PURE__*/(0, _jsxRuntime.jsx)(_RenderLogo["default"], {
        logo: logo,
        brandName: brandName
      }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        className: "flex items-center",
        children: [(startAdornments === null || startAdornments === void 0 ? void 0 : startAdornments.length) > 0 && (startAdornments === null || startAdornments === void 0 ? void 0 : startAdornments.map(function (item, index) {
          return (
            /*#__PURE__*/
            // eslint-disable-next-line react/no-array-index-key
            (0, _jsxRuntime.jsxs)(_react["default"].Fragment, {
              children: [item !== null && item !== void 0 && item.element ? item === null || item === void 0 ? void 0 : item.element : /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
                className: "hidden flex-col items-center text-light md:flex",
                children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
                  className: "text-xs",
                  children: item === null || item === void 0 ? void 0 : item.title
                }), /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
                  className: "text-xs -mt-1",
                  children: item.value
                })]
              }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Divider.Divider, {
                isVertical: true,
                className: "h-6 mr-2 ml-3 border-card-border"
              })]
            }, index)
          );
        })), ((middleAdornment === null || middleAdornment === void 0 ? void 0 : middleAdornment.value) || (middleAdornment === null || middleAdornment === void 0 ? void 0 : middleAdornment.title) || (middleAdornment === null || middleAdornment === void 0 ? void 0 : middleAdornment.element) || currentTime) && /*#__PURE__*/(0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
          children: [(middleAdornment === null || middleAdornment === void 0 ? void 0 : middleAdornment.element) || /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
            className: "flex flex-col items-end text-light",
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
              className: "text-xs",
              children: (middleAdornment === null || middleAdornment === void 0 ? void 0 : middleAdornment.title) || /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
                className: "tracking-tighter",
                children: currentTime === null || currentTime === void 0 ? void 0 : (_currentTime$calendar = currentTime.calendar("jalali")) === null || _currentTime$calendar === void 0 ? void 0 : _currentTime$calendar.format("dd YYYY/MM/DD")
              })
            }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
              className: "text-xs -mt-1 flex justify-between items-center w-full",
              children: [showLiveStatus && /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
                className: "relative",
                children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
                  className: (0, _utils.classJoin)(["absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2  w-1.2 h-1.2 rounded-full bg-opacity-100", _tailwind.textColors[statusColor], _tailwind.bgColors[statusColor]])
                }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
                  className: (0, _utils.classJoin)(["w-2 h-2 rounded-full opacity-75 animate-ping-slow bg-opacity-100", _tailwind.textColors[statusColor], _tailwind.bgColors[statusColor]])
                })]
              }), /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
                className: "mr-auto",
                children: (middleAdornment === null || middleAdornment === void 0 ? void 0 : middleAdornment.value) || (currentTime === null || currentTime === void 0 ? void 0 : (_currentTime$calendar2 = currentTime.calendar("jalali")) === null || _currentTime$calendar2 === void 0 ? void 0 : _currentTime$calendar2.format("HH:mm:ss"))
              })]
            })]
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Divider.Divider, {
            isVertical: true,
            className: "h-6 mr-2 ml-3 border-card-border"
          })]
        }), endAdornment, /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
          className: "flex items-center space-x-2 rtl:space-x-reverse md:space-x-3",
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_radinIcon.Envelope, {
            color: "idle",
            className: "cursor-pointer h-4 w-max md:h-5 md:w-max",
            onClick: handleClickNotification
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_radinIcon.PersonSquare, {
            color: "idle",
            className: "h-4 w-max md:h-5 md:w-max ml-1"
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
            className: "w-17 truncate ... ",
            children: profileName || "کاربر مهمان"
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Tooltip.Tooltip, {
            title: "\u062E\u0631\u0648\u062C",
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_radinIcon.Logout, {
              color: "idle",
              className: "cursor-pointer h-4 w-max md:h-5 md:w-max",
              onClick: handleClickLogout
            })
          })]
        })]
      })]
    })
  }));
};
Header.defaultProps = {
  className: "",
  brandName: "رادین",
  showLiveStatus: true,
  statusColor: "success"
};
var _default = Header;
exports["default"] = _default;