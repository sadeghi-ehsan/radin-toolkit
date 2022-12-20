import React from "react";
import dayjs from "dayjs";
import { keyboardCodesList } from "./constants";
import { persianToEnglishNumber, extractNumbers } from "./modules/numbers";
import { removeSpaces } from "./modules/spaces";
import { normalizePersianText, createSearchField, isEnglish } from "./modules/text";
import "dayjs/plugin/calendar";
export { persianToEnglishNumber, extractNumbers, removeSpaces, normalizePersianText, createSearchField, isEnglish };
export declare function empty(data: any, strict?: boolean): boolean;
/** used for check if all of multiple variables is empty */
export declare const allEmpty: (value: any[], strict?: boolean) => boolean;
/** used for check if all of multiple variables is NOT empty */
export declare const allNotEmpty: (value: any[], strict?: boolean) => boolean;
/** checks if param is an object */
export declare const isObject: (val: any) => boolean;
/** checks if param is an array */
export declare const isArray: (val: any) => boolean;
/** checks if param is string */
export declare const isString: (val: any) => boolean;
/** checks if param is number */
export declare const isNumber: (val: any) => boolean;
/** checks if param is number string */
export declare const isNumberString: (val: any) => boolean;
/** checks if param is number in value */
export declare const isNumberOrNumberStr: (val: any) => boolean;
/** checks if param is boolean */
export declare const isBoolean: (val: any) => boolean;
/** checks if param is a function or it's callable */
export declare const isCallable: (val: any) => boolean;
/** used for concatenating multiple classNames */
export declare const classJoin: (classes: (string | undefined)[]) => string;
export declare const ifEmpty: (value: any, trueCase?: any, falseCase?: any) => any;
export declare const ifNotEmpty: (value: any, trueCase?: any, falseCase?: any) => any;
export declare const filterObj: (obj: {}, callback: (value: any, key: string, index?: number) => boolean) => {
    [k: string]: unknown;
};
export declare const mapObj: (obj: any, callback: (value: any, key: string, index?: number) => any) => any;
export declare const randomStr: (length?: number) => string;
export declare const extractFormElementProps: (props: {
    [x: string]: any;
}, list?: Array<string>) => {
    [x: string]: any;
}[];
/**
 * check pressed key is specific key
 * ex: we want to make sure user press backspace key
 * @param e
 * @param code
 * @param keyCode
 * @returns Boolean
 */
export declare const keyboardEventChecker: (e: any, typeCode: keyof typeof keyboardCodesList | string, keyCode?: number) => number | true;
/**
 * Modify React children's
 * ex: append className or other props to children's
 * @param children
 * @param props
 * @param callbackWhenString
 * @returns JSX.Element | String
 */
export declare function modifyReactChildren(children: any, props: any, callbackWhenString?: (t: String) => void): any;
/**
 * extendChildren is used in a case where you want to pass additional props down to children
 * of a component. way of using it is extendChildren(props.children ,{color:"red"})
 */
export declare const extendChildren: (children: any, props: {
    [key: string]: any;
}) => any;
/**
 * debounce function to avoid multiple calls at the same time and to avoid calling function too often
 * @param func
 * @param timeout
 * @returns
 */
export declare function debounce(func: any, timeout?: number): (...args: any[]) => void;
/**
 * convert File tp base64 string
 * @param file
 * @returns base64 string
 */
export declare const fileToBase64: (file: any) => Promise<unknown>;
/**
 * convert number to comma separated string with N decimal places
 * @param number
 * @param decimalPlaces default: 0
 * @param roundTheDecimals default: true
 *
 * @returns {string}
 *
 * @example
 * ```js
 * commaSeparator(123456.29999999, 4, true) // 123,456.3000
 * commaSeparator(123456.29999999, 4, false) // 123,456.2999
 * commaSeparator(123456789.29999999) // 123,456,789
 * ```
 */
export declare function commaSeparator(number: string | number, decimalPlaces?: number, roundTheDecimals?: boolean): string;
export declare const commaRemover: (val: string | number) => string;
/**
 * capitalize first letter of string
 * @param string
 * @returns
 */
export declare const ucFirst: (string: string) => string;
/**
 * filter a object by val
 * only those have values will be returned
 * @param obj
 * @returns filtered object
 */
export declare const filterObjectHaveVal: (obj: any) => any;
/**
 * encode string to base64
 * @param value
 * @returns
 */
export declare function encodeBase64(value: string): string;
/**
 * decode base64 to string
 * @param value
 * @returns
 */
export declare function decodeBase64(value: string): string;
export declare function useDrag(): {
    dragStart: (ev: React.MouseEvent) => void;
    dragStop: () => number;
    dragMove: (ev: React.MouseEvent, cb: (posDif: number) => void) => void;
    dragging: boolean;
    position: React.MutableRefObject<number>;
    setDragging: React.Dispatch<React.SetStateAction<boolean>>;
};
export declare function usePreventBodyScroll(): {
    disableScroll: () => void;
    enableScroll: () => void;
};
export declare function toJalaliDay(date: dayjs.ConfigType, formats?: dayjs.OptionType, strict?: boolean): dayjs.Dayjs;
declare type convertIntToCurrencyType = {
    value: string;
    unit: string;
};
export declare function convertIntToCurrency(val: number): convertIntToCurrencyType;
/**
 * convert milliseconds input parameter to array with am/pm time items.
 * @param milliseconds milliseconds
 * @returns
 */
export declare const convertMsToTime: (milliseconds: number) => [number, number, number, "am" | "pm"];
/**
 * merge two array objects by key(id or etc.)
 *
 * @example
 * ```js
 * const a = [{id: 1, name: "a"}, {id: 2, name: "b"}];
 * const b = [{id: 1, name: "c"}, {id: 3, name: "d"}];
 * mergeTwoArraysByKey(a, b, "id");
 *
 * // result: [ { id: 1, name: 'c' }, { id: 2, name: 'b' }, { id: 3, name: 'd' } ]
 * ```
 */
export declare function mergeTwoArraysByKey(array1: any[], array2: any[], key?: string): any[];
/**
 * Gets the value at `path` of `obj`. If the resolved value is
 * `undefined`, the `defaultValue` is returned in its place.

 * @returns {*} Returns the resolved value.
 * @example
 *
 *  getObjectNestedValue(object, 'profile.user.canEdit')
 */
export declare function getObjectNestedValue(obj: any, path: string): any;
