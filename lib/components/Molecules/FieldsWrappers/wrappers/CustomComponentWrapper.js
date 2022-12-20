"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _reactHookForm = require("react-hook-form");
var _utils = require("../../../../utils");
var _jsxRuntime = require("react/jsx-runtime");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
/**
 * @param formProps: react-hook-form formProps.
 * @param propsInFieldSchema: props object in the field schema.
 * @param component: component to render.
 */
var CustomComponentWrapper = function CustomComponentWrapper(_ref) {
  var fieldSchema = _ref.fieldSchema,
    formProps = _ref.formProps,
    propsInFieldSchema = _ref.propsInFieldSchema,
    component = _ref.component,
    returningParams = _ref.returningParams;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactHookForm.Controller, {
    name: fieldSchema.name || propsInFieldSchema.name || (0, _utils.randomStr)(),
    control: formProps.control,
    render: function render(_ref2) {
      var field = _ref2.field,
        fieldState = _ref2.fieldState,
        formState = _ref2.formState;
      return component(_objectSpread({
        field: field,
        fieldState: fieldState,
        formState: formState
      }, returningParams || {}));
    }
  });
};
var _default = CustomComponentWrapper;
exports["default"] = _default;