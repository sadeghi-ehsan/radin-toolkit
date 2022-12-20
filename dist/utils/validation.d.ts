/**
 * check if value is valid email
 * @param value
 * @returns boolean
 */
export declare const isValidEmail: (value: string) => boolean;
/**
 * check if value is valid Iranian mobile number
 * @param value
 * @returns boolean
 */
export declare const isValidIranMobileNumber: (value: string) => boolean;
/**
 * check if value is valid Iranian national code
 * @param input
 * @returns boolean
 */
export declare function isValidIranianNationalCode(input: string): boolean;
/**
 * check if value is valid Iran bank card number
 * @param input
 * @returns boolean
 * @link http://www.aliarash.com/article/creditcart/credit-debit-cart.htm
 */
export declare function isValidIranBankCardNumber(input: string): boolean;
export declare function iso7064Mod97_10(iban: string): number;
/**
 * check if value is valid Iran sheba number
 * @param input
 * @returns boolean
 * @link https://gist.github.com/mhf-ir/c17374fae395a57c9f8e5fe7a92bbf23
 */
export declare function isValidIranShebaNumber(str: string): boolean;
/**
 * @method isValidIpAddress
 * @description check is valid ip address
 * @returns boolean
 */
export declare const isValidIpAddress: (value: string) => boolean;
/**
 * @method isValidIranPostalCode
 * @description check is valid iran postal code
 * @returns boolean
 * @link https://stackoverflow.com/questions/48719799/iranian-postal-code-validation
 */
export declare const isValidIranPostalCode: (value: string) => boolean;
