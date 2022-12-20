"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.UserAvatar = void 0;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
var _antd = require("antd");
var _radinIcon = require("@sadeghi-ehsan/radin-icon");
var _utils = require("../../../utils");
var _Dropdown = _interopRequireDefault(require("../Dropdown/Dropdown"));
var _jsxRuntime = require("react/jsx-runtime");
var _excluded = ["firstName", "lastName", "img", "roleList", "role", "users", "maxCount", "allUsersCount", "className"];
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
var UserAvatar = function UserAvatar(_ref) {
  var _users$slice;
  var firstName = _ref.firstName,
    lastName = _ref.lastName,
    img = _ref.img,
    roleList = _ref.roleList,
    role = _ref.role,
    users = _ref.users,
    maxCount = _ref.maxCount,
    allUsersCount = _ref.allUsersCount,
    className = _ref.className,
    restProps = (0, _objectWithoutProperties2["default"])(_ref, _excluded);
  return users ? /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    className: (0, _utils.classJoin)(["flex flex-row-reverse justify-end", className]),
    children: [(users.length > maxCount || allUsersCount) && /*#__PURE__*/(0, _jsxRuntime.jsxs)("span", {
      className: "light-text mt-1 text-1.5x relative content-center grid",
      children: [allUsersCount - maxCount || users.length - maxCount, "+"]
    }), users === null || users === void 0 ? void 0 : (_users$slice = users.slice(0, maxCount)) === null || _users$slice === void 0 ? void 0 : _users$slice.map(function (eachUser) {
      var _eachUser$firstName, _eachUser$lastName;
      return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        className: (0, _utils.classJoin)(["text-xs rounded-full text-center relative border-card-bg border-3.5 content-center grid w-8 h-8 z-10 -mr-3 pr-1.5 last:pr-0", (0, _utils.ifEmpty)(eachUser === null || eachUser === void 0 ? void 0 : eachUser.img, "bg-primary-label"), (0, _utils.ifNotEmpty)(eachUser === null || eachUser === void 0 ? void 0 : eachUser.img, "bg-primary-label")]),
        children: [!(eachUser !== null && eachUser !== void 0 && eachUser.img) && /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
          className: "text-dark-text",
          children: (eachUser === null || eachUser === void 0 ? void 0 : (_eachUser$firstName = eachUser.firstName) === null || _eachUser$firstName === void 0 ? void 0 : _eachUser$firstName.charAt(0)) || (eachUser === null || eachUser === void 0 ? void 0 : (_eachUser$lastName = eachUser.lastName) === null || _eachUser$lastName === void 0 ? void 0 : _eachUser$lastName.charAt(0))
        }), (0, _utils.ifNotEmpty)(eachUser === null || eachUser === void 0 ? void 0 : eachUser.img) && /*#__PURE__*/(0, _jsxRuntime.jsx)("img", {
          className: "rounded-full",
          src: eachUser === null || eachUser === void 0 ? void 0 : eachUser.img,
          alt: "avatar"
        })]
      }, "".concat(eachUser === null || eachUser === void 0 ? void 0 : eachUser.firstName, "-").concat(eachUser === null || eachUser === void 0 ? void 0 : eachUser.lastName));
    })]
  }) : /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    className: (0, _utils.classJoin)(["flex", className]),
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_antd.Avatar, _objectSpread(_objectSpread({}, restProps), {}, {
      className: (0, _utils.classJoin)([(0, _utils.ifEmpty)(img, "bg-primary-label")]),
      src: img,
      size: 40,
      children: (0, _utils.empty)(img) && /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
        className: "text-dark-text",
        children: (lastName === null || lastName === void 0 ? void 0 : lastName.charAt(0)) || (firstName === null || firstName === void 0 ? void 0 : firstName.charAt(0))
      })
    })), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      className: "pr-2 light-text text-sm content-center grid",
      children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("span", {
        children: [firstName, " ", lastName]
      }), role && /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        children: [roleList && /*#__PURE__*/(0, _jsxRuntime.jsx)(_Dropdown["default"], {
          overlay: roleList,
          trigger: ["click"],
          children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("button", {
            type: "button",
            className: "triggerButton text-idle text-xs flex",
            children: [role, /*#__PURE__*/(0, _jsxRuntime.jsx)(_radinIcon.Chevron, {
              className: "pr-1 mr-1 mt-1",
              size: ".8xs",
              rotate: "90",
              flip: "vertical"
            })]
          })
        }), !roleList && role && /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
          className: "text-idle text-xs",
          children: [" ", role]
        })]
      })]
    })]
  });
};
exports.UserAvatar = UserAvatar;
UserAvatar.defaultProps = {
  maxCount: 3,
  firstName: "",
  lastName: "",
  users: null
};
var _default = UserAvatar;
exports["default"] = _default;