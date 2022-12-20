"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _react = require("react");
var _reactHookForm = require("react-hook-form");
var _yup = require("@hookform/resolvers/yup");
var yup = _interopRequireWildcard(require("yup"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
var useFormBuilder = function useFormBuilder() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
    formOptions = _ref.formOptions;
  var _useState = (0, _react.useState)({}),
    _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
    validationSchemaObj = _useState2[0],
    setValidationSchemaObj = _useState2[1];

  /**
   * form validation Cyclic dependency
   * usage: if in form we check conditionally a field with himself,
   * we need to pass array of that field in order to prevent cyclic dependency
   * how? we will have `deps` in each item of `validationSchemaObj`. we use `deps` object and combine them together.
   */
  var formValidationSchemaCyclicDeps = Object.values(validationSchemaObj).reduce(function (acc, curr) {
    var _curr$deps;
    if ((_curr$deps = curr.deps) !== null && _curr$deps !== void 0 && _curr$deps.length) {
      var _curr$deps2, _curr$deps2$filter;
      (_curr$deps2 = curr.deps) === null || _curr$deps2 === void 0 ? void 0 : (_curr$deps2$filter = _curr$deps2.filter(function (item, pos) {
        return curr.deps.indexOf(item) === pos;
      }) // remove duplicates
      ) === null || _curr$deps2$filter === void 0 ? void 0 : _curr$deps2$filter.map(function (dep) {
        return acc.push([dep, dep]);
      });
    }
    return acc;
  }, []);
  var formProps = (0, _reactHookForm.useForm)(_objectSpread({
    resolver: (0, _yup.yupResolver)(yup.object().shape(validationSchemaObj, formValidationSchemaCyclicDeps))
  }, formOptions || {}));
  return {
    formProps: formProps,
    setValidationSchemaObj: setValidationSchemaObj
  };
};
var _default = useFormBuilder;
exports["default"] = _default;