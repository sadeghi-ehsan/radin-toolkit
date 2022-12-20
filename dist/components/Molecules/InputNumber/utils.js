import { isNumberOrNumberStr, commaSeparator } from "../../../utils";
/**
 * This Method convert number value to comma separated format, and return empty string for non-number input
 *
 * @param value - value to format
 * @returns Proper formatted value
 */
export const valueToCommaSeparated = (value) => {
    if (isNumberOrNumberStr(value))
        return commaSeparator(value);
    return "";
};
/**
 * This return proper input value based on this reality that input cannot be void
 *
 * @param value - raw value (can be number or void)
 * @returns Proper input value
 */
export const getProperValue = (value) => {
    if (isNumberOrNumberStr(value))
        return value;
    return "";
};
//# sourceMappingURL=utils.js.map