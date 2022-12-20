"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.renderTypeSelectContent = exports.renderTypeInputContent = void 0;
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _radinIcon = require("@sadeghi-ehsan/radin-icon");
var _reactSelect = require("react-select");
var _utils = require("../../../utils");
var _Input = require("../Input");
var _Select = require("../Select");
var _Dropdown = require("../../Atoms/Dropdown");
var _Badge = require("../../Atoms/Badge");
var _jsxRuntime = require("react/jsx-runtime");
var _excluded = ["name", "disabled", "readOnly", "setCombinedValue", "align", "value"],
  _excluded2 = ["children"],
  _excluded3 = ["name", "disabled", "readOnly", "setCombinedValue", "value", "selectOptions", "setIsDropDownVisible"];
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
var endAdornmentComponent = function endAdornmentComponent(params) {
  var disabled = params.disabled,
    readOnly = params.readOnly,
    combinedValue = params.combinedValue,
    options = params.options,
    setCombinedValue = params.setCombinedValue,
    setIsDropDownVisible = params.setIsDropDownVisible,
    isDropDownVisible = params.isDropDownVisible;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_Dropdown.Dropdown, {
    trigger: ["click"],
    placement: "bottomCenter",
    visible: isDropDownVisible,
    onVisibleChange: function onVisibleChange(v) {
      setIsDropDownVisible(v);
    },
    disabled: disabled || readOnly,
    overlay: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Dropdown.Dropdown.Menu, {
      align: "right",
      children: options === null || options === void 0 ? void 0 : options.map(function (option) {
        return /*#__PURE__*/(0, _jsxRuntime.jsx)(_Dropdown.Dropdown.MenuItem, {
          active: (combinedValue === null || combinedValue === void 0 ? void 0 : combinedValue.selectedOption) === option.value,
          onClick: function onClick() {
            setCombinedValue(function (prev) {
              return _objectSpread(_objectSpread({}, prev), {}, {
                selectedOption: option.value
              });
            });
            setIsDropDownVisible(false);
          },
          children: option.label
        }, option.value);
      })
    }),
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: (0, _utils.classJoin)(["p-1 rounded-md bg-appearing", disabled || readOnly ? "" : "cursor-pointer "]),
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_radinIcon.Chevron, {
        flip: !isDropDownVisible ? "vertical" : null,
        rotate: "90",
        color: disabled || readOnly ? "disabled" : isDropDownVisible ? "white" : "idle",
        size: ".9xs"
      })
    })
  });
};
var startAdornmentComponent = function startAdornmentComponent(params) {
  var _options$find;
  var disabled = params.disabled,
    readOnly = params.readOnly,
    combinedValue = params.combinedValue,
    options = params.options;
  return combinedValue !== null && combinedValue !== void 0 && combinedValue.selectedOption ? /*#__PURE__*/(0, _jsxRuntime.jsx)(_Badge.Badge, {
    color: disabled || readOnly ? "disabled" : "primary",
    children: options && ((_options$find = options.find(function (option) {
      return option.value === combinedValue.selectedOption;
    })) === null || _options$find === void 0 ? void 0 : _options$find.label)
  }) : null;
};
var renderTypeInputContent = function renderTypeInputContent(params) {
  var name = params.name,
    disabled = params.disabled,
    readOnly = params.readOnly,
    setCombinedValue = params.setCombinedValue,
    align = params.align,
    value = params.value,
    restProps = (0, _objectWithoutProperties2["default"])(params, _excluded);
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_Input.Input, _objectSpread(_objectSpread({}, restProps), {}, {
    name: name,
    disabled: disabled,
    readOnly: readOnly,
    startAdornment: startAdornmentComponent(params),
    endAdornment: endAdornmentComponent(params),
    onChange: function onChange(v) {
      setCombinedValue(function (prev) {
        return _objectSpread(_objectSpread({}, prev), {}, {
          value: v
        });
      });
    },
    align: align || (0, _utils.ifNotEmpty)(value, "left", "right"),
    value: value === null || value === void 0 ? void 0 : value.value
  }));
};
exports.renderTypeInputContent = renderTypeInputContent;
var Control = function Control(params) {
  return function (_ref) {
    var children = _ref.children,
      props = (0, _objectWithoutProperties2["default"])(_ref, _excluded2);
    return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_reactSelect.components.Control, _objectSpread(_objectSpread({}, props), {}, {
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: "pl-4 ml-3 border-l border-idle-border",
        children: startAdornmentComponent(params)
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: "flex-1 min-w-44 flex items-center justify-between",
        children: children
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: "pr-4 mr-3 border-r border-idle-border",
        onMouseDown: function onMouseDown(e) {
          return e.stopPropagation();
        },
        children: endAdornmentComponent(params)
      })]
    }));
  };
};
var renderTypeSelectContent = function renderTypeSelectContent(params) {
  var name = params.name,
    disabled = params.disabled,
    readOnly = params.readOnly,
    setCombinedValue = params.setCombinedValue,
    value = params.value,
    selectOptions = params.selectOptions,
    setIsDropDownVisible = params.setIsDropDownVisible,
    restProps = (0, _objectWithoutProperties2["default"])(params, _excluded3);
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_Select.Select, _objectSpread(_objectSpread({}, restProps), {}, {
    name: name,
    disabled: disabled,
    readOnly: readOnly,
    customComponents: {
      Control: Control(params),
      DropdownIndicator: function DropdownIndicator() {
        return null;
      }
    },
    onMenuOpen: function onMenuOpen() {
      setIsDropDownVisible(false);
    },
    value: value === null || value === void 0 ? void 0 : value.value,
    options: selectOptions,
    onChange: function onChange(v) {
      setCombinedValue(function (prev) {
        return _objectSpread(_objectSpread({}, prev), {}, {
          value: v
        });
      });
    }
  }));
};
exports.renderTypeSelectContent = renderTypeSelectContent;