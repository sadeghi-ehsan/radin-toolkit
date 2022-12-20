"use strict";

var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var yup = _interopRequireWildcard(require("yup"));
var _ = require(".");
var _validation = require("./validation");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
/* eslint-disable func-names */

/**
 * @method iranNationalId
 * @description Iranians national code validation (کد‌ملی)
 * it is OPTIONAL validation! if you want to require it use `required` after this validation.
 */
yup.addMethod(yup.string, "iranNationalId", function (errorMessage) {
  return this.test("iranNationalId", errorMessage, function (value) {
    var path = this.path,
      createError = this.createError;
    return (0, _.empty)(value) || value && (0, _validation.isValidIranianNationalCode)(value) || createError({
      path: path,
      message: errorMessage
    });
  });
});

/**
 * @method iranMobile
 * @description Iran mobile number validation (شماره‌موبایل)
 * it is OPTIONAL validation! if you want to require it use `required` after this validation.
 */
yup.addMethod(yup.string, "iranMobile", function (errorMessage) {
  return this.test("iranMobile", errorMessage, function (value) {
    var path = this.path,
      createError = this.createError;
    return (0, _.empty)(value) || value && (0, _validation.isValidIranMobileNumber)(value) || createError({
      path: path,
      message: errorMessage
    });
  });
});

/**
 * @method iranBankCard
 * @description Iran bank card number validation (شماره کارت بانکی)
 * it is OPTIONAL validation! if you want to require it use `required` after this validation.
 */
yup.addMethod(yup.string, "iranBankCard", function (errorMessage) {
  return this.test("iranBankCard", errorMessage, function (value) {
    var path = this.path,
      createError = this.createError;
    return (0, _.empty)(value) || value && (0, _validation.isValidIranBankCardNumber)(value) || createError({
      path: path,
      message: errorMessage
    });
  });
});

/**
 * @method iranShebaNumber
 * @description Iran bank Sheba number validation (شماره شبا بانکی)
 * it is OPTIONAL validation! if you want to require it use `required` after this validation.
 */
yup.addMethod(yup.string, "iranShebaNumber", function (errorMessage) {
  return this.test("iranShebaNumber", errorMessage, function (value) {
    var path = this.path,
      createError = this.createError;
    return (0, _.empty)(value) || value && (0, _validation.isValidIranShebaNumber)(value) || createError({
      path: path,
      message: errorMessage
    });
  });
});

/**
 * @method iranPostalCode
 * @description Iran postal code validation (کد پستی)
 * it is OPTIONAL validation! if you want to require it use `required` after this validation.
 */
yup.addMethod(yup.string, "iranPostalCode", function (errorMessage) {
  return this.test("iranPostalCode", errorMessage, function (value) {
    var path = this.path,
      createError = this.createError;
    return (0, _.empty)(value) || value && (0, _validation.isValidIranPostalCode)(value) || createError({
      path: path,
      message: errorMessage
    });
  });
});

/**
 * @method ipAddress
 * @description check is valid ip address
 * it is OPTIONAL validation! if you want to require it use `required` after this validation.
 */
yup.addMethod(yup.string, "ipAddress", function (errorMessage) {
  return this.test("ipAddress", errorMessage, function (value) {
    var path = this.path,
      createError = this.createError;
    return (0, _.empty)(value) || value && (0, _validation.isValidIpAddress)(value) || createError({
      path: path,
      message: errorMessage
    });
  });
});

/**
 * @method optional
 * @override yup.optional
 * @description add our `optional` method to string, number, boolean types
 */
function handleYupOptional() {
  var isOptional = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
  var defaultValue = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;
  return this.transform(function (value) {
    // If false is passed, skip the transform
    if (!isOptional) return value;

    // If any child property has a value, skip the transform
    if (value && Object.values(value).some(function (v) {
      return !(0, _.empty)(v);
    })) {
      return value;
    }
    return defaultValue;
  })
  // Remember, since we maybe dealing with the `object` type, we have to change the default value
  ["default"](defaultValue);
}
yup.addMethod(yup.string, "optional", handleYupOptional);
yup.addMethod(yup.number, "optional", handleYupOptional);
yup.addMethod(yup["boolean"], "optional", handleYupOptional);

/**
 * @method ucFirst
 * @description will capitalize the first letter of the string
 * i.e `hello world` => `Hello world`
 */
yup.addMethod(yup.string, "ucFirst", function () {
  return this.transform(function (value) {
    return this.isType(value) && value !== null ? (0, _.ucFirst)(value) : value;
  });
});
var _default = yup;
exports["default"] = _default;