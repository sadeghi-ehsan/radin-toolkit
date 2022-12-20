/**
 *
 * @param text String
 * @returns {String}
 * @description This function remove all not-persian characters from text. and convert arabic characters to persian.
 */
declare const normalizePersianText: (text: string) => string;
/**
 *
 * @param text String
 * @returns {String}
 * @description This function create a text for persian search. remove spaces. Convert persian numbers to english. Convert arabic characters to persian.
 */
declare const createSearchField: (text: string) => string;
/**
 *
 * @param text String
 * @returns {String}
 * @description This function check if text is english or not.
 */
declare const isEnglish: (text: string) => boolean;
export { normalizePersianText, createSearchField, isEnglish };
