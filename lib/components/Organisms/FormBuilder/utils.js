"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.generateValidationObj = exports.formDefaultValuesObj = void 0;
exports.modifyValidationSchema = modifyValidationSchema;
exports.widthMap = void 0;
var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var yup = _interopRequireWildcard(require("yup"));
var _utils = require("../../../utils");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
var widthMap = {
  "1/2": "sm:!w-1/2",
  "1/3": "sm:!w-1/3",
  "2/3": "sm:!w-2/3",
  "1/4": "sm:!w-1/4",
  "2/4": "sm:!w-2/4",
  "3/4": "sm:!w-3/4"
};

/**
 * generate the validation object for the form.
 */
exports.widthMap = widthMap;
var generateValidationObj = function generateValidationObj(_ref) {
  var returningParams = _ref.returningParams,
    schema = _ref.schema,
    validationsToIgnore = _ref.validationsToIgnore,
    defaultRequiredErrorMessage = _ref.defaultRequiredErrorMessage;
  return schema.reduce(function (prev, field) {
    var props = (0, _utils.isCallable)(field.props) ? field.props(returningParams) : field.props;
    var name = field.name || (props === null || props === void 0 ? void 0 : props.name);
    var rule = field.rule || null;

    /**
     * for handle nested fields
     * i.e. fields inside FieldGroup component which have `fields` array inside himself.
     */
    if (field !== null && field !== void 0 && field.fields) {
      rule = generateValidationObj({
        returningParams: returningParams,
        schema: field.fields,
        validationsToIgnore: validationsToIgnore,
        defaultRequiredErrorMessage: defaultRequiredErrorMessage
      });
      return _objectSpread(_objectSpread({}, prev), rule && _objectSpread({}, rule));
    }

    /**
     * return if field hasn't `name` prop or prop is empty or exist in validations to ignore.
     */
    if (!props || !name || validationsToIgnore !== null && validationsToIgnore !== void 0 && validationsToIgnore.includes(name)) {
      return prev;
    }
    if (!rule && "required" in props && props !== null && props !== void 0 && props.required) {
      rule = yup.string().required(defaultRequiredErrorMessage === null || defaultRequiredErrorMessage === void 0 ? void 0 : defaultRequiredErrorMessage.replace("$", !(0, _utils.empty)(props === null || props === void 0 ? void 0 : props.label) && (0, _utils.isString)(props === null || props === void 0 ? void 0 : props.label) ? props === null || props === void 0 ? void 0 : props.label : ""));
    }
    return _objectSpread(_objectSpread({}, prev), rule && (0, _defineProperty2["default"])({}, name, rule));
  }, {});
};

/**
 * form default values.
 */
exports.generateValidationObj = generateValidationObj;
var formDefaultValuesObj = function formDefaultValuesObj(_ref3) {
  var returningParams = _ref3.returningParams,
    schema = _ref3.schema,
    formDefaultValues = _ref3.formDefaultValues;
  return schema.reduce(function (prev, field) {
    var props = field.props;
    var propsInFieldSchema = typeof props === "function" ? props(returningParams) : props;
    var name = field.name || (propsInFieldSchema === null || propsInFieldSchema === void 0 ? void 0 : propsInFieldSchema.name);
    /**
     * for handle nested fields
     * i.e. fields inside FieldGroup component which have `fields` array inside himself.
     */
    if (field !== null && field !== void 0 && field.fields) {
      var _value = formDefaultValuesObj({
        returningParams: returningParams,
        schema: field.fields,
        formDefaultValues: formDefaultValues
      });
      return _objectSpread(_objectSpread({}, prev), _value && _objectSpread({}, _value));
    }
    if (!propsInFieldSchema || !name) return prev;
    var value = field.value ? (0, _utils.isCallable)(field.value) ? field.value(returningParams) : field.value : formDefaultValues === null || formDefaultValues === void 0 ? void 0 : formDefaultValues[name];
    return _objectSpread(_objectSpread({}, prev), value && (0, _defineProperty2["default"])({}, name, value));
  }, {});
};

/**
 * set validations to ignore.
 * @param fieldName : field name
 * @param isAdd : i want to add to array / remove from array
 */
exports.formDefaultValuesObj = formDefaultValuesObj;
function modifyValidationSchema(fieldName, isAdd, _ref5) {
  var formProps = _ref5.formProps,
    validationsToIgnore = _ref5.validationsToIgnore,
    setValidationsToIgnore = _ref5.setValidationsToIgnore;
  if (isAdd) {
    // add to ignore this field in the validation.
    if (!(validationsToIgnore !== null && validationsToIgnore !== void 0 && validationsToIgnore.includes(fieldName))) {
      // if not exist in array
      formProps.setValue(fieldName, undefined); // remove the value from the form.
      setValidationsToIgnore(function (prev) {
        return [].concat((0, _toConsumableArray2["default"])(prev), [fieldName]);
      });
    }
  } else if (validationsToIgnore !== null && validationsToIgnore !== void 0 && validationsToIgnore.includes(fieldName)) {
    // remove from array to un-ignore this field in the validation.
    setValidationsToIgnore(function (prev) {
      return prev.filter(function (a) {
        return a !== fieldName;
      });
    });
  }
}