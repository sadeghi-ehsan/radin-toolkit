"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = FieldComponent;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _react = require("react");
var Components = _interopRequireWildcard(require("../../../.."));
var ComponentWrappers = _interopRequireWildcard(require("../../../Molecules/FieldsWrappers"));
var _utils = require("../../../../utils");
var _CustomComponentWrapper = _interopRequireDefault(require("../../../Molecules/FieldsWrappers/wrappers/CustomComponentWrapper"));
var _jsxRuntime = require("react/jsx-runtime");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
/**
 * render the field component.
 */
function FieldComponent(_ref) {
  var _propsInFieldSchema;
  var fieldSchema = _ref.fieldSchema,
    formProps = _ref.formProps,
    formMethod = _ref.formMethod,
    modifyValidationSchema = _ref.modifyValidationSchema,
    returningParams = _ref.returningParams;
  var fieldType = fieldSchema.fieldType,
    props = fieldSchema.props,
    onDidMount = fieldSchema.onDidMount,
    onDidUnMount = fieldSchema.onDidUnMount;
  var ـfieldType = fieldType && (0, _utils.ucFirst)(fieldType);

  /**
   * onDidMount is a function that will be called after the field is mounted.
   * onDidUnMount is a function that will be called after the field is unmounted.
   */
  (0, _react.useEffect)(function () {
    if (onDidMount && (0, _utils.isCallable)(onDidMount)) {
      onDidMount(returningParams);
    }
    return function () {
      if (onDidUnMount && (0, _utils.isCallable)(onDidUnMount)) {
        onDidUnMount(returningParams);
      }
    };
  }, []);

  /**
   * render empty component.
   */
  if (fieldType === "space") {
    return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {});
  }

  /**
   * props In Field Schema
   */
  var propsInFieldSchema = (0, _utils.isCallable)(props) ? props(returningParams) : props;
  propsInFieldSchema = _objectSpread(_objectSpread({}, propsInFieldSchema || {}), {
    readOnly: formMethod === "readOnly" || propsInFieldSchema && ((_propsInFieldSchema = propsInFieldSchema) === null || _propsInFieldSchema === void 0 ? void 0 : _propsInFieldSchema.readOnly)
  });

  /**
   * if fieldType : Component
   */
  if (fieldSchema.component && (0, _utils.isCallable)(fieldSchema.component)) {
    return /*#__PURE__*/(0, _jsxRuntime.jsx)(_CustomComponentWrapper["default"], {
      component: fieldSchema.component,
      fieldSchema: fieldSchema,
      formProps: formProps,
      returningParams: returningParams,
      propsInFieldSchema: propsInFieldSchema,
      formMethod: formMethod,
      modifyValidationSchema: modifyValidationSchema
    });
  }

  /**
   * if component have a specific wrapper.
   * find the component in the components in the folder `FieldsWrappers`.
   * if the component wrapper founded:
   */
  var ComponentFoundedWrapper = ComponentWrappers["".concat(ـfieldType, "Wrapper")];
  if (ComponentFoundedWrapper && (0, _utils.isCallable)(ComponentFoundedWrapper)) {
    return /*#__PURE__*/(0, _jsxRuntime.jsx)(ComponentFoundedWrapper, {
      fieldSchema: fieldSchema,
      formProps: formProps,
      returningParams: returningParams,
      propsInFieldSchema: propsInFieldSchema,
      formMethod: formMethod,
      modifyValidationSchema: modifyValidationSchema
    });
  }

  /**
   * if component have NOT specific wrapper.
   * then check if component is exist in the folder `src`.
   * if the component founded:
   * @param component: component to render.
   */
  var MyComponent = Components[ـfieldType];
  var GeneralWrapper = ComponentWrappers.GeneralWrapper;
  if (MyComponent) {
    return /*#__PURE__*/(0, _jsxRuntime.jsx)(GeneralWrapper, {
      component: MyComponent,
      fieldSchema: fieldSchema,
      formProps: formProps,
      returningParams: returningParams,
      propsInFieldSchema: propsInFieldSchema,
      formMethod: formMethod,
      modifyValidationSchema: modifyValidationSchema
    });
  }

  /**
   * if nothing founded.
   */
  return null;
}