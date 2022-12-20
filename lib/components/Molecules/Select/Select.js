"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.Select = void 0;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
var _react = require("react");
var _FormElementWrapper = require("../../Atoms/FormElementWrapper");
var _utils = require("../../../utils");
var _utils2 = require("./utils");
var _jsxRuntime = require("react/jsx-runtime");
var _excluded = ["className", "clearedValue", "searchable", "id", "onChange", "onInputChange", "disabled", "value", "name", "style", "loading", "multi", "placeholder", "type", "onMenuOpen", "onMenuClose", "size", "clearable", "childrenClassName", "fieldsetClassName", "customComponents"];
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
var Select = /*#__PURE__*/(0, _react.forwardRef)(function (_ref, passedRef) {
  var className = _ref.className,
    clearedValue = _ref.clearedValue,
    searchable = _ref.searchable,
    _id = _ref.id,
    onChange = _ref.onChange,
    onInputChange = _ref.onInputChange,
    disabled = _ref.disabled,
    value = _ref.value,
    name = _ref.name,
    style = _ref.style,
    loading = _ref.loading,
    multi = _ref.multi,
    placeholder = _ref.placeholder,
    type = _ref.type,
    _onMenuOpen = _ref.onMenuOpen,
    _onMenuClose = _ref.onMenuClose,
    size = _ref.size,
    clearable = _ref.clearable,
    childrenClassName = _ref.childrenClassName,
    fieldsetClassName = _ref.fieldsetClassName,
    customComponents = _ref.customComponents,
    restProps = (0, _objectWithoutProperties2["default"])(_ref, _excluded);
  var id = _id || "InputSelect-".concat(name || (0, _utils.randomStr)());
  var ref = (0, _utils.ifNotEmpty)(passedRef, passedRef, (0, _react.useRef)());
  var _useState = (0, _react.useState)(false),
    _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
    open = _useState2[0],
    setOpen = _useState2[1];
  var SelectComponent = _utils2.selectTypes[type];
  var _extractFormElementPr = (0, _utils.extractFormElementProps)(restProps),
    _extractFormElementPr2 = (0, _slicedToArray2["default"])(_extractFormElementPr, 2),
    wrapperProps = _extractFormElementPr2[0],
    componentProps = _extractFormElementPr2[1];
  var handleChange = function handleChange(v, o) {
    if (!(0, _utils.empty)(onChange) && (0, _utils.isCallable)(onChange)) {
      onChange(v, name, o);
    }
  };
  var handleInputChange = function handleInputChange(v) {
    if (!(0, _utils.empty)(onInputChange) && (0, _utils.isCallable)(onInputChange) && v) onInputChange(v);
  };
  var onClear = function onClear() {
    handleChange(clearedValue);
    if (value === undefined) {
      if (!(0, _utils.empty)(ref === null || ref === void 0 ? void 0 : ref.current)) {
        ref.current.value = "";
      }
    }
  };
  var fieldsetClicked = function fieldsetClicked() {
    // setOpen(!open);
  };
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_FormElementWrapper.FormElementWrapper, _objectSpread(_objectSpread({}, wrapperProps), {}, {
    id: id,
    onClear: onClear,
    size: size,
    disabled: disabled,
    style: style,
    clearable: false,
    allowClear: !(0, _utils.empty)(value) || value === undefined,
    className: (0, _utils.classJoin)(["sbt-select", className]),
    childrenClassName: (0, _utils.classJoin)(["py-0 pl-0 pr-0", childrenClassName]),
    onFieldsetClick: fieldsetClicked,
    fieldsetClassName: (0, _utils.classJoin)(["!py-0 focus-within:shadow-none", (0, _utils.ifNotEmpty)(open, "rounded-b-none border-b-transparent bg-red hover:border-b-transparent focus-within:border-b-transparent"), fieldsetClassName]),
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(SelectComponent, _objectSpread(_objectSpread(_objectSpread({}, componentProps), (0, _defineProperty2["default"])({}, type === "asyncPaginate" ? "selectRef" : "ref", ref)), {}, {
      classNamePrefix: "select",
      value: value,
      id: id,
      name: name,
      placeholder: placeholder,
      onChange: handleChange,
      onInputChange: handleInputChange,
      menuPlacement: "auto",
      menuPosition: "absolute",
      menuPortalTarget: document.body,
      styles: (0, _utils2.customStyles)(),
      theme: (0, _utils2.customTheme)(),
      components: _objectSpread(_objectSpread({}, _utils2.customComponents), customComponents)
      // menuIsOpen
      ,
      onMenuOpen: function onMenuOpen() {
        setOpen(true);
        if (_onMenuOpen) _onMenuOpen();
      },
      onMenuClose: function onMenuClose() {
        setOpen(false);
        if (_onMenuClose) _onMenuClose();
      },
      closeMenuOnSelect: !multi
      // open={open}
      // onDropdownVisibleChange={setOpen}
      // showSearch={searchable}
      // bordered={false}
      ,
      isDisabled: disabled,
      isSearchable: searchable || ["creatable", "async", "asyncCreatable"].includes(type),
      isLoading: loading,
      isClearable: clearable,
      isMulti: multi,
      isRtl: true,
      parentRef: ref
      // dropdownClassName="sbt-select-dropdown py-0 overflow-visible"
    }))
  }));
});
exports.Select = Select;
Select.defaultProps = _objectSpread(_objectSpread({}, _FormElementWrapper.FormElementWrapper.defaultProps), {}, {
  customComponents: {},
  type: "default",
  clearedValue: "",
  searchable: false
});
var _default = Select;
exports["default"] = _default;