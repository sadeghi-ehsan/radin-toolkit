import * as yup from "yup";
/**
 * add customs types to yup types
 */
declare module "yup" {
    interface StringSchema {
        /**
         * @method iranNationalId
         * @description Iranians national code validation (کد‌ملی).
         * it is `optional` validation! use `required` if you want to require it.
         */
        iranNationalId(msg?: string): this;
        /**
         * @method iranMobile
         * @description Iran mobile number validation (شماره‌موبایل).
         * it is `optional` validation! use `required` if you want to require it.
         */
        iranMobile(msg?: string): this;
        /**
         * @method iranBankCard
         * @description Iran bank card number validation (شماره کارت بانکی).
         * it is `optional` validation! use `required` if you want to require it.
         */
        iranBankCard(msg?: string): this;
        /**
         * @method iranShebaNumber
         * @description Iran bank sheba number validation (شماره شبا بانکی).
         * it is `optional` validation! use `required` if you want to require it.
         */
        iranShebaNumber(msg?: string): this;
        /**
         * @method iranPostalCode
         * @description Iran postal code validation (کد پستی).
         * it is `optional` validation! use `required` if you want to require it.
         */
        iranPostalCode(msg?: string): this;
        /**
         * @method ipAddress
         * @description check is valid ip address.
         * it is `optional` validation! use `required` if you want to require it.
         */
        ipAddress(msg?: string): this;
        /**
         * @method ucFirst
         * @type {transformer}
         * @description will capitalize the first letter of the string.
         * i.e `hello world` => `Hello world`
         */
        ucFirst(msg?: string): this;
    }
}
export default yup;
