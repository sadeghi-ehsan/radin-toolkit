/* eslint-disable func-names */
import * as yup from "yup";
import { empty, ucFirst } from ".";
import { isValidIpAddress, isValidIranBankCardNumber, isValidIranianNationalCode, isValidIranMobileNumber, isValidIranPostalCode, isValidIranShebaNumber } from "./validation";
/**
 * @method iranNationalId
 * @description Iranians national code validation (کد‌ملی)
 * it is OPTIONAL validation! if you want to require it use `required` after this validation.
 */
yup.addMethod(yup.string, "iranNationalId", function (errorMessage) {
    return this.test(`iranNationalId`, errorMessage, function (value) {
        const { path, createError } = this;
        return empty(value) || (value && isValidIranianNationalCode(value)) || createError({ path, message: errorMessage });
    });
});
/**
 * @method iranMobile
 * @description Iran mobile number validation (شماره‌موبایل)
 * it is OPTIONAL validation! if you want to require it use `required` after this validation.
 */
yup.addMethod(yup.string, "iranMobile", function (errorMessage) {
    return this.test(`iranMobile`, errorMessage, function (value) {
        const { path, createError } = this;
        return empty(value) || (value && isValidIranMobileNumber(value)) || createError({ path, message: errorMessage });
    });
});
/**
 * @method iranBankCard
 * @description Iran bank card number validation (شماره کارت بانکی)
 * it is OPTIONAL validation! if you want to require it use `required` after this validation.
 */
yup.addMethod(yup.string, "iranBankCard", function (errorMessage) {
    return this.test(`iranBankCard`, errorMessage, function (value) {
        const { path, createError } = this;
        return empty(value) || (value && isValidIranBankCardNumber(value)) || createError({ path, message: errorMessage });
    });
});
/**
 * @method iranShebaNumber
 * @description Iran bank Sheba number validation (شماره شبا بانکی)
 * it is OPTIONAL validation! if you want to require it use `required` after this validation.
 */
yup.addMethod(yup.string, "iranShebaNumber", function (errorMessage) {
    return this.test(`iranShebaNumber`, errorMessage, function (value) {
        const { path, createError } = this;
        return empty(value) || (value && isValidIranShebaNumber(value)) || createError({ path, message: errorMessage });
    });
});
/**
 * @method iranPostalCode
 * @description Iran postal code validation (کد پستی)
 * it is OPTIONAL validation! if you want to require it use `required` after this validation.
 */
yup.addMethod(yup.string, "iranPostalCode", function (errorMessage) {
    return this.test(`iranPostalCode`, errorMessage, function (value) {
        const { path, createError } = this;
        return empty(value) || (value && isValidIranPostalCode(value)) || createError({ path, message: errorMessage });
    });
});
/**
 * @method ipAddress
 * @description check is valid ip address
 * it is OPTIONAL validation! if you want to require it use `required` after this validation.
 */
yup.addMethod(yup.string, "ipAddress", function (errorMessage) {
    return this.test(`ipAddress`, errorMessage, function (value) {
        const { path, createError } = this;
        return empty(value) || (value && isValidIpAddress(value)) || createError({ path, message: errorMessage });
    });
});
/**
 * @method optional
 * @override yup.optional
 * @description add our `optional` method to string, number, boolean types
 */
function handleYupOptional(isOptional = true, defaultValue = undefined) {
    return (this.transform(value => {
        // If false is passed, skip the transform
        if (!isOptional)
            return value;
        // If any child property has a value, skip the transform
        if (value && Object.values(value).some(v => !empty(v))) {
            return value;
        }
        return defaultValue;
    })
        // Remember, since we maybe dealing with the `object` type, we have to change the default value
        .default(defaultValue));
}
yup.addMethod(yup.string, "optional", handleYupOptional);
yup.addMethod(yup.number, "optional", handleYupOptional);
yup.addMethod(yup.boolean, "optional", handleYupOptional);
/**
 * @method ucFirst
 * @description will capitalize the first letter of the string
 * i.e `hello world` => `Hello world`
 */
yup.addMethod(yup.string, "ucFirst", function () {
    return this.transform(function (value) {
        return this.isType(value) && value !== null ? ucFirst(value) : value;
    });
});
export default yup;
//# sourceMappingURL=yup.js.map