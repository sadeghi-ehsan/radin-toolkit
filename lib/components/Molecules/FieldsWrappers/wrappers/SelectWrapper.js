"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _reactHookForm = require("react-hook-form");
var _utils = require("../../../../utils");
var _Select = require("../../Select");
var _jsxRuntime = require("react/jsx-runtime");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
/**
 * @param formProps: react-hook-form formProps.
 * @param propsInFieldSchema: props object in the field schema.
 */
var SelectWrapper = function SelectWrapper(_ref) {
  var fieldSchema = _ref.fieldSchema,
    formProps = _ref.formProps,
    propsInFieldSchema = _ref.propsInFieldSchema;
  var control = formProps.control;
  var name = propsInFieldSchema.name,
    options = propsInFieldSchema.options,
    _onChange = propsInFieldSchema.onChange;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactHookForm.Controller, {
    name: fieldSchema.name || name,
    control: control,
    render: function render(_ref2) {
      var _fieldState$error, _options$find;
      var field = _ref2.field,
        fieldState = _ref2.fieldState;
      return /*#__PURE__*/(0, _jsxRuntime.jsx)(_Select.Select, _objectSpread(_objectSpread({}, _objectSpread(_objectSpread({}, field), {}, {
        error: (_fieldState$error = fieldState.error) === null || _fieldState$error === void 0 ? void 0 : _fieldState$error.message
      }, propsInFieldSchema)), {}, {
        onChange: function onChange(v) {
          return _onChange && (0, _utils.isCallable)(_onChange) ? _onChange(v) : field.onChange(v === null || v === void 0 ? void 0 : v.value);
        },
        value: field.value && {
          value: field.value,
          label: (options === null || options === void 0 ? void 0 : (_options$find = options.find(function (o) {
            return o.value === field.value;
          })) === null || _options$find === void 0 ? void 0 : _options$find.label) || field.value
        }
      }));
    }
  });
};
var _default = SelectWrapper;
exports["default"] = _default;