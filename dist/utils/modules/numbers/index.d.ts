/**
 * @param {String} text
 * @returns {String}
 * @description Convert All numbers including Persian and Arabic numbers to English numbers.
 * This function keep characters that are not numbers.
 */
declare const persianToEnglishNumber: (text: string) => string;
/**
 * @param {String} text
 * @returns {String} text
 * @descriptions Into the json file,
 * - First one is english unicode,
 * - Seocnd One is persian unicode
 * - Third one is arabic unicode
 */
declare const extractNumbers: (text: string) => string;
export { persianToEnglishNumber, extractNumbers };
