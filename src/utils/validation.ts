/**
 * check if value is valid email
 * @param value
 * @returns boolean
 */
export const isValidEmail = (value: string): boolean => !!(value && /^[\w%+.-]+@[\d.a-z-]+\.[a-z]{2,4}$/i.test(value));

/**
 * check if value is valid Iranian mobile number
 * @param value
 * @returns boolean
 */
export const isValidIranMobileNumber = (value: string): boolean => !!(value && /^0?9\d{9}$/g.test(value));

/**
 * check if value is valid Iranian national code
 * @param input
 * @returns boolean
 */
export function isValidIranianNationalCode(input: string): boolean {
  if (!/^\d{10}$/.test(input)) return false;
  if (/(\d)\1{5}/.test(input)) return false;
  const check = +input[9];
  const sum =
    input
      .split("")
      .slice(0, 9)
      .reduce((acc, x, i) => acc + +x * (10 - i), 0) % 11;
  return sum < 2 ? check === sum : check + sum === 11;
}

/**
 * check if value is valid Iran bank card number
 * @param input
 * @returns boolean
 * @link http://www.aliarash.com/article/creditcart/credit-debit-cart.htm
 */
export function isValidIranBankCardNumber(input: string): boolean {
  const L = input.length;
  if (L < 16 || parseInt(input.substr(1, 10), 10) === 0 || parseInt(input.substr(10, 6), 10) === 0) return false;
  let s = 0;
  let k;
  let d;
  for (let i = 0; i < 16; i++) {
    k = i % 2 === 0 ? 2 : 1;
    d = parseInt(input.substr(i, 1), 10) * k;
    s += d > 9 ? d - 9 : d;
  }
  return s % 10 === 0;
}

// eslint-disable-next-line camelcase
export function iso7064Mod97_10(iban: string): number {
  let remainder = iban;
  let block;

  while (remainder.length > 2) {
    block = remainder.slice(0, 9);
    remainder = (parseInt(block, 10) % 97) + remainder.slice(block.length);
  }

  return parseInt(remainder, 10) % 97;
}

/**
 * check if value is valid Iran sheba number
 * @param input
 * @returns boolean
 * @link https://gist.github.com/mhf-ir/c17374fae395a57c9f8e5fe7a92bbf23
 */
export function isValidIranShebaNumber(str: string): boolean {
  const pattern = /(IR|ir)\d{24}/;

  if (str.length !== 26) {
    return false;
  }

  if (!pattern.test(str)) {
    return false;
  }

  let newStr = str.substr(4);
  const d1 = str.charCodeAt(0) - 65 + 10;
  const d2 = str.charCodeAt(1) - 65 + 10;
  newStr += d1.toString() + d2.toString() + str.substr(2, 2);

  const remainder = iso7064Mod97_10(newStr);
  if (remainder !== 1) {
    return false;
  }

  return true;
}

/**
 * @method isValidIpAddress
 * @description check is valid ip address
 * @returns boolean
 */
export const isValidIpAddress = (value: string): boolean =>
  !!(value && /\b(?:(?:2(?:[0-4]\d|5[0-5])|[01]?\d?\d)\.){3}(?:2([0-4]\d|5[0-5])|[01]?\d?\d)\b/i.test(value));

/**
 * @method isValidIranPostalCode
 * @description check is valid iran postal code
 * @returns boolean
 * @link https://stackoverflow.com/questions/48719799/iranian-postal-code-validation
 */
export const isValidIranPostalCode = (value: string): boolean =>
  !!(value && /\b(?!(\d)\1{3})[13-9]{4}[1346-9][013-9]{5}\b/i.test(value));
