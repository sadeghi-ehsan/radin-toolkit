import React, { Children, cloneElement, isValidElement } from "react";
import dayjs from "dayjs";
import jalaliday from "jalaliday";
import { formElWrapperProps } from "../components/Atoms/FormElementWrapper";
import { keyboardCodesList } from "./constants";
import { persianToEnglishNumber, extractNumbers } from "./modules/numbers";
import { removeSpaces } from "./modules/spaces";
import { normalizePersianText, createSearchField, isEnglish } from "./modules/text";
import "dayjs/plugin/calendar";
dayjs.extend(jalaliday);
export { persianToEnglishNumber, extractNumbers, removeSpaces, normalizePersianText, createSearchField, isEnglish };
export function empty(data, strict = true) {
    const dataType = typeof data;
    if (dataType === "string" && data.length === 0) {
        return true;
    }
    if (dataType === "number" && data === 0 && strict) {
        return true;
    }
    if (dataType === "boolean" && !data && strict) {
        return true;
    }
    if (dataType === "undefined" || data === null) {
        return true;
    }
    if (Array.isArray(data)) {
        return data.length === 0;
    }
    if (dataType === "object") {
        return Object.keys(data).length === 0;
    }
    return false;
}
/** used for check if all of multiple variables is empty */
export const allEmpty = (value, strict = true) => value.every(val => empty(val, strict));
/** used for check if all of multiple variables is NOT empty */
export const allNotEmpty = (value, strict = true) => value.every(val => !empty(val, strict));
/** checks if param is an object */
export const isObject = (val) => Object.prototype.toString.call(val) === "[object Object]";
/** checks if param is an array */
export const isArray = (val) => Array.isArray(val);
/** checks if param is string */
export const isString = (val) => typeof val === "string";
/** checks if param is number */
export const isNumber = (val) => typeof val === "number";
/** checks if param is number string */
export const isNumberString = (val) => isString(val) && !isNaN(Number(val));
/** checks if param is number in value */
export const isNumberOrNumberStr = (val) => isNumber(val) || isNumberString(val);
/** checks if param is boolean */
export const isBoolean = (val) => typeof val === "boolean";
/** checks if param is a function or it's callable */
export const isCallable = (val) => typeof val === "function";
/** used for concatenating multiple classNames */
export const classJoin = (classes) => classes
    .filter(cls => cls)
    .map((cls) => cls.trim())
    .join(" ");
export const ifEmpty = (value, trueCase = value, falseCase = undefined) => empty(value) ? trueCase : falseCase;
export const ifNotEmpty = (value, trueCase = value, falseCase = undefined) => ifEmpty(value, falseCase, trueCase);
export const filterObj = (obj, callback) => {
    // Convert `obj` to a key/value array
    const filtered = Object.entries(obj).filter(([k, v], i) => callback(v, k, i));
    // Convert the key/value array back to an object:
    return Object.fromEntries(filtered);
};
export const mapObj = (obj, callback) => {
    // Convert `obj` to a key/value array
    const mapped = Object.entries(obj).map(([k, v], i) => [k, callback(v, k, i)]);
    // Convert the key/value array back to an object:
    return Object.fromEntries(mapped);
};
/* generates random string based on the length provided */
export const randomStr = (length = 5) => {
    let result = "";
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    const numbers = "0123456789";
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
        result += characters.concat(i === 0 ? "" : numbers).charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
};
/* This method will extract props related to Wrapper from all received props in Components like: Input, Select, ... */
export const extractFormElementProps = (props, list = formElWrapperProps) => {
    const wrapperProps = {};
    const componentProps = {};
    Object.entries(props).forEach(([key, value]) => {
        if (list.includes(key)) {
            wrapperProps[key] = value;
        }
        else {
            componentProps[key] = value;
        }
    });
    return [wrapperProps, componentProps];
};
/**
 * check pressed key is specific key
 * ex: we want to make sure user press backspace key
 * @param e
 * @param code
 * @param keyCode
 * @returns Boolean
 */
export const keyboardEventChecker = (e, typeCode, keyCode = null) => {
    if (empty(keyCode) && !keyboardCodesList[typeCode]) {
        return undefined;
    }
    // check e is equal to code and keyCode
    return e.code === typeCode || e.keyCode === keyboardCodesList[typeCode] || keyCode;
};
/**
 * Modify React children's
 * ex: append className or other props to children's
 * @param children
 * @param props
 * @param callbackWhenString
 * @returns JSX.Element | String
 */
export function modifyReactChildren(children, props, callbackWhenString) {
    return React.Children.map(children, child => {
        if (isString(child)) {
            return !empty(callbackWhenString) && isCallable(callbackWhenString) ? callbackWhenString(child) : child;
        }
        return React.cloneElement(child, {
            ...child?.props,
            ...props,
            className: classJoin([child?.props?.className, props.className]) // merge className from props and child's className together
        });
    });
}
/**
 * extendChildren is used in a case where you want to pass additional props down to children
 * of a component. way of using it is extendChildren(props.children ,{color:"red"})
 */
export const extendChildren = (children, props) => Children.map(children, child => {
    if (isValidElement(child)) {
        return cloneElement(child, props);
    }
    return child;
});
/**
 * debounce function to avoid multiple calls at the same time and to avoid calling function too often
 * @param func
 * @param timeout
 * @returns
 */
export function debounce(func, timeout = 300) {
    let timer;
    return (...args) => {
        clearTimeout(timer);
        timer = setTimeout(() => {
            func.apply(this, args);
        }, timeout);
    };
}
/**
 * convert File tp base64 string
 * @param file
 * @returns base64 string
 */
export const fileToBase64 = file => new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
});
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
export function commaSeparator(number, decimalPlaces = 0, roundTheDecimals = true) {
    if (!isNumberOrNumberStr(number))
        return undefined;
    let value = Number(number);
    if (roundTheDecimals) {
        // number with decimals with rounding last digit
        value = value.toFixed(decimalPlaces);
    }
    else {
        // number with decimals without rounding
        value = (Math.floor(value * 10 ** decimalPlaces) / 10 ** decimalPlaces).toFixed(decimalPlaces);
    }
    const parts = value.toString().split(".");
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return parts.join(".");
}
export const commaRemover = (val) => val.toString().replace(/\$\s?|(,*)/g, "");
/**
 * capitalize first letter of string
 * @param string
 * @returns
 */
export const ucFirst = (string) => string.charAt(0).toUpperCase() + string.slice(1);
/**
 * filter a object by val
 * only those have values will be returned
 * @param obj
 * @returns filtered object
 */
export const filterObjectHaveVal = obj => Object.keys(obj)?.reduce((acc, key) => {
    if (obj[key]) {
        acc[key] = obj[key];
    }
    return acc;
}, {});
/**
 * encode string to base64
 * @param value
 * @returns
 */
export function encodeBase64(value) {
    return Buffer.from(value, "ascii").toString("base64");
}
/**
 * decode base64 to string
 * @param value
 * @returns
 */
export function decodeBase64(value) {
    return Buffer.from(value, "base64").toString("ascii");
}
export function useDrag() {
    const [clicked, setClicked] = React.useState(false);
    const [dragging, setDragging] = React.useState(false);
    const position = React.useRef(0);
    const dragStart = React.useCallback((ev) => {
        position.current = ev.clientX;
        setClicked(true);
    }, []);
    const dragStop = React.useCallback(() => 
    // NOTE: need some delay so item under cursor won't be clicked
    window.requestAnimationFrame(() => {
        setDragging(false);
        setClicked(false);
    }), []);
    const dragMove = (ev, cb) => {
        const newDiff = position.current - ev.clientX;
        const movedEnough = Math.abs(newDiff) > 5;
        if (clicked && movedEnough) {
            setDragging(true);
        }
        if (dragging && movedEnough) {
            position.current = ev.clientX;
            cb(newDiff);
        }
    };
    return {
        dragStart,
        dragStop,
        dragMove,
        dragging,
        position,
        setDragging
    };
}
/** Used in usePreventBodyScroll Function */
const preventDefault = (ev) => {
    if (ev.preventDefault) {
        ev.preventDefault();
    }
    // eslint-disable-next-line no-param-reassign
    ev.returnValue = false;
};
/** Used in usePreventBodyScroll Function */
const enableBodyScroll = () => {
    if (document) {
        document.removeEventListener("wheel", preventDefault, false);
    }
};
/** Used in usePreventBodyScroll Function */
const disableBodyScroll = () => {
    if (document) {
        document.addEventListener("wheel", preventDefault, {
            passive: false
        });
    }
};
export function usePreventBodyScroll() {
    const [hidden, setHidden] = React.useState(false);
    React.useEffect(() => {
        if (hidden) {
            disableBodyScroll();
        }
        else {
            enableBodyScroll();
        }
        return enableBodyScroll;
    }, [hidden]);
    const disableScroll = React.useCallback(() => setHidden(true), []);
    const enableScroll = React.useCallback(() => setHidden(false), []);
    return { disableScroll, enableScroll };
}
export function toJalaliDay(date, formats, strict) {
    // @ts-ignore
    return dayjs(date, formats, strict)?.calendar("jalali")?.locale("fa");
}
/* convert To International Currency System */
export function convertIntToCurrency(val) {
    // Nine Zeroes for Billions
    return Math.abs(Number(val)) >= 1.0e9
        ? {
            value: (Math.abs(Number(val)) / 1.0e9).toFixed(2),
            unit: "B"
        } // Six Zeroes for Millions
        : Math.abs(Number(val)) >= 1.0e6
            ? {
                value: (Math.abs(Number(val)) / 1.0e6).toFixed(2),
                unit: "M"
            } // Three Zeroes for Thousands
            : Math.abs(Number(val)) >= 1.0e3
                ? {
                    value: (Math.abs(Number(val)) / 1.0e3).toFixed(2),
                    unit: "K"
                }
                : {
                    value: Math.abs(Number(val)).toFixed(2),
                    unit: ""
                };
}
/**
 * convert milliseconds input parameter to array with am/pm time items.
 * @param milliseconds milliseconds
 * @returns
 */
export const convertMsToTime = (milliseconds) => {
    let seconds = Math.floor((milliseconds || 0) / 1000);
    let minutes = Math.floor(seconds / 60);
    let hours = Math.floor(minutes / 60);
    seconds %= 60;
    minutes %= 60;
    hours %= 24;
    const ampm = hours >= 12 ? "pm" : "am";
    if (hours === 0)
        hours = 12;
    else if (hours >= 13)
        hours %= 12;
    return [hours, minutes, seconds, ampm];
};
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
export function mergeTwoArraysByKey(array1, array2, key = "id") {
    return [
        ...[...array1, ...array2]
            .reduce((acc, curr) => acc.set(curr[key], { ...acc.get(curr[key]), ...curr }), new Map())
            .values()
    ];
}
/**
 * Gets the value at `path` of `obj`. If the resolved value is
 * `undefined`, the `defaultValue` is returned in its place.

 * @returns {*} Returns the resolved value.
 * @example
 *
 *  getObjectNestedValue(object, 'profile.user.canEdit')
 */
export function getObjectNestedValue(obj, path) {
    if (!path)
        return obj;
    const properties = path.split(".");
    return getObjectNestedValue(obj[properties.shift()], properties.join("."));
}
//# sourceMappingURL=helpers.js.map