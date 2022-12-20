import { empty, keyboardEventChecker } from "../../../utils";
/**
 * when onFieldsetClick then focus first input
 */
export const focusRef = ref => {
    if (!empty(ref?.current)) {
        ref.current.focus();
    }
};
/**
 * focus previous input
 */
export function focusPrevField(InputIndex, { itemsRef }) {
    const target = itemsRef.current[InputIndex - 1];
    if (target) {
        setTimeout(() => {
            target.focus();
        }, 0);
    }
}
/**
 * focus next input
 */
export function focusNextField(InputIndex, { itemsRef }) {
    const target = itemsRef.current[InputIndex + 1];
    if (target) {
        setTimeout(() => {
            target.focus();
        }, 0);
    }
}
/**
 * handle on paste event
 * @param e clipboard event
 */
export const handlePaste = (e, { setCombinedValue, inputsLength }) => {
    e.preventDefault();
    if (!e.clipboardData || !e.clipboardData.getData) {
        return;
    }
    // regex replace all whitespace with empty string
    const pasteData = e.clipboardData.getData("text/plain").replace(/\s/g, "");
    if (!pasteData) {
        return;
    }
    setCombinedValue(pasteData?.slice(0, inputsLength) || "");
};
/**
 * handle on key down event
 * @param e keyboard event
 */
export const handleKeyDown = (e, { itemsRef }) => {
    const backspace = keyboardEventChecker(e, "Backspace");
    const isNumber = /^\d$/i.test(e.key);
    const target = e.target;
    const InputIndex = itemsRef.current.indexOf(target);
    if (isNumber && target.value.length + 1 > 1) {
        e.preventDefault();
        return;
    }
    if (backspace) {
        if ((target?.value?.length || 0) - 1 < 0) {
            focusPrevField(InputIndex, { itemsRef });
        }
    }
};
/**
 * handle on change event
 * @param v value
 * @param n name
 */
export const handleChange = (v, n, { itemsRef, setCombinedValue }) => {
    const InputIndex = itemsRef.current.findIndex(a => a.name === n);
    setCombinedValue(prev => !v ? prev.substring(0, InputIndex) : prev.substring(0, InputIndex) + v + prev.substring(InputIndex + v.length));
    if (v.length >= 1) {
        focusNextField(InputIndex, { itemsRef });
    }
};
//# sourceMappingURL=utils.js.map