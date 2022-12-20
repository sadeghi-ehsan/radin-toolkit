/**
 * This Method convert number value to comma separated format, and return empty string for non-number input
 *
 * @param value - value to format
 * @returns Proper formatted value
 */
export declare const valueToCommaSeparated: (value: number | null | undefined) => string;
/**
 * This return proper input value based on this reality that input cannot be void
 *
 * @param value - raw value (can be number or void)
 * @returns Proper input value
 */
export declare const getProperValue: (value: number | null | undefined) => number | string;
