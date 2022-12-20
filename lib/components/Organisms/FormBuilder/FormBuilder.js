"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.FormBuilder = void 0;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
var _react = require("react");
var _reactHookForm = require("react-hook-form");
var _utils = require("../../../utils");
var _utils2 = require("./utils");
var _RenderField = _interopRequireDefault(require("./components/RenderField"));
var _jsxRuntime = require("react/jsx-runtime");
var _excluded = ["schema", "form", "onSubmit", "defaultRequiredErrorMessage", "formDefaultValues", "className", "formMethod", "children"];
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
var FormBuilder = /*#__PURE__*/(0, _react.forwardRef)(function (_ref, passedRef) {
  var schema = _ref.schema,
    form = _ref.form,
    onSubmit = _ref.onSubmit,
    defaultRequiredErrorMessage = _ref.defaultRequiredErrorMessage,
    formDefaultValues = _ref.formDefaultValues,
    className = _ref.className,
    formMethod = _ref.formMethod,
    children = _ref.children,
    restProps = (0, _objectWithoutProperties2["default"])(_ref, _excluded);
  var ref = (0, _utils.ifNotEmpty)(passedRef, passedRef, (0, _react.useRef)());
  var _useState = (0, _react.useState)([]),
    _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
    validationsToIgnore = _useState2[0],
    setValidationsToIgnore = _useState2[1];
  if (!form) {
    throw new Error("`form` property is required in FormBuilder");
  }
  var formProps = form.formProps,
    setValidationSchemaObj = form.setValidationSchemaObj;

  /**
   * params returned in the following functions (in schema):
   * - props
   * - hideOnForm
   * - onDidMount
   * - onDidUnMount
   *
   * i.e:
   *  props: ({ formProps, formMethod }) => ({
   *  ...
   * })
   */
  var returningParams = {
    formProps: formProps,
    formMethod: formMethod
  };

  /**
   * set form initial values.
   * we use 'useEffect" because we need to pass 'formProps' to formDefaultValuesObj.
   * because in formDefaultValuesObj we pass 'formProps' to the 'schema'. because sometimes the 'props' is not object but function in schema.
   */
  (0, _react.useEffect)(function () {
    var obj = (0, _utils2.formDefaultValuesObj)({
      returningParams: returningParams,
      schema: schema,
      formDefaultValues: formDefaultValues
    });
    if (obj) {
      formProps.reset(obj);
    }
  }, [formDefaultValues]);

  /**
   * set validation schema.
   * we use 'useEffect" because we need to pass 'formProps' to generateValidationObj.
   * because in generateValidationObj we pass 'formProps' to the 'schema'. because sometimes the 'props' is not object but function in schema.
   */
  (0, _react.useEffect)(function () {
    var obj = (0, _utils2.generateValidationObj)({
      returningParams: returningParams,
      schema: schema,
      validationsToIgnore: validationsToIgnore,
      defaultRequiredErrorMessage: defaultRequiredErrorMessage
    });
    if (obj) {
      setValidationSchemaObj(obj);
    }
  }, [validationsToIgnore]);
  var _modifyValidationSchema = function _modifyValidationSchema(fieldName, isAdd) {
    return (0, _utils2.modifyValidationSchema)(fieldName, isAdd, {
      formProps: formProps,
      validationsToIgnore: validationsToIgnore,
      setValidationsToIgnore: setValidationsToIgnore
    });
  };
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactHookForm.FormProvider, _objectSpread(_objectSpread({}, formProps), {}, {
    children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("form", _objectSpread(_objectSpread({
      ref: ref,
      onSubmit: onSubmit,
      className: (0, _utils.classJoin)(["flex flex-wrap sm:-mx-2", className])
    }, restProps), {}, {
      children: [schema.map(function (item, index) {
        return /*#__PURE__*/(0, _jsxRuntime.jsx)(_RenderField["default"], {
          fieldSchema: item,
          formMethod: formMethod,
          modifyValidationSchema: _modifyValidationSchema,
          returningParams: returningParams
        }, index);
      }), children && children]
    }))
  }));
});
exports.FormBuilder = FormBuilder;
FormBuilder.defaultProps = {
  defaultRequiredErrorMessage: "$ الزامی می‌باشد",
  formMethod: "new" // new | edit | view
};
var _default = FormBuilder;
exports["default"] = _default;