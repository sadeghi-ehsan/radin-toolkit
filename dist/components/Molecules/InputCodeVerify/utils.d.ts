import { ClipboardEvent, KeyboardEvent } from "react";
/**
 * when onFieldsetClick then focus first input
 */
export declare const focusRef: (ref: any) => void;
/**
 * focus previous input
 */
export declare function focusPrevField(InputIndex: any, { itemsRef }: {
    itemsRef: any;
}): void;
/**
 * focus next input
 */
export declare function focusNextField(InputIndex: any, { itemsRef }: {
    itemsRef: any;
}): void;
/**
 * handle on paste event
 * @param e clipboard event
 */
export declare const handlePaste: (e: ClipboardEvent<HTMLInputElement>, { setCombinedValue, inputsLength }: {
    setCombinedValue: any;
    inputsLength: any;
}) => void;
/**
 * handle on key down event
 * @param e keyboard event
 */
export declare const handleKeyDown: (e: KeyboardEvent<HTMLInputElement>, { itemsRef }: {
    itemsRef: any;
}) => void;
/**
 * handle on change event
 * @param v value
 * @param n name
 */
export declare const handleChange: (v: any, n: any, { itemsRef, setCombinedValue }: {
    itemsRef: any;
    setCombinedValue: any;
}) => void;
