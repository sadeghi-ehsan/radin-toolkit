"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _FieldGroup = require("../../../Atoms/FieldGroup");
var _RenderField = _interopRequireDefault(require("../../../Organisms/FormBuilder/components/RenderField"));
var _jsxRuntime = require("react/jsx-runtime");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
/**
 * @param formProps: react-hook-form formProps.
 * @param propsInFieldSchema: props object in the field schema.
 * @param component: component to render.
 */
var FieldGroupWrapper = function FieldGroupWrapper(_ref) {
  var _formProps$formState, _Object$keys, _formErrors$propsInFi, _fieldSchema$fields2;
  var fieldSchema = _ref.fieldSchema,
    formProps = _ref.formProps,
    formMethod = _ref.formMethod,
    modifyValidationSchema = _ref.modifyValidationSchema,
    propsInFieldSchema = _ref.propsInFieldSchema,
    returningParams = _ref.returningParams;
  var formErrors = formProps === null || formProps === void 0 ? void 0 : (_formProps$formState = formProps.formState) === null || _formProps$formState === void 0 ? void 0 : _formProps$formState.errors;

  // map on object formErrors to find if contains the field name which in the fieldSchema.fields.
  var isChildInputsHasError = formErrors && ((_Object$keys = Object.keys(formErrors)) === null || _Object$keys === void 0 ? void 0 : _Object$keys.some(function (key) {
    var _fieldSchema$fields;
    return fieldSchema === null || fieldSchema === void 0 ? void 0 : (_fieldSchema$fields = fieldSchema.fields) === null || _fieldSchema$fields === void 0 ? void 0 : _fieldSchema$fields.some(function (field) {
      var _field$props;
      return (field === null || field === void 0 ? void 0 : (_field$props = field.props) === null || _field$props === void 0 ? void 0 : _field$props.name) === key;
    });
  }));
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_FieldGroup.FieldGroup, _objectSpread(_objectSpread({}, propsInFieldSchema), {}, {
    error: (formErrors === null || formErrors === void 0 ? void 0 : (_formErrors$propsInFi = formErrors[propsInFieldSchema === null || propsInFieldSchema === void 0 ? void 0 : propsInFieldSchema.name]) === null || _formErrors$propsInFi === void 0 ? void 0 : _formErrors$propsInFi.message) || isChildInputsHasError,
    children: fieldSchema === null || fieldSchema === void 0 ? void 0 : (_fieldSchema$fields2 = fieldSchema.fields) === null || _fieldSchema$fields2 === void 0 ? void 0 : _fieldSchema$fields2.map(function (item, index) {
      return /*#__PURE__*/(0, _jsxRuntime.jsx)(_RenderField["default"], {
        fieldSchema: item,
        formMethod: formMethod,
        modifyValidationSchema: modifyValidationSchema,
        returningParams: returningParams
      }, index);
    })
  }));
};
var _default = FieldGroupWrapper;
exports["default"] = _default;