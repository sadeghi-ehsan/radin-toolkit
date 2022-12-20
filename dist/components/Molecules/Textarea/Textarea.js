import { jsx as _jsx } from "react/jsx-runtime";
import { forwardRef, useEffect, useRef, useState } from "react";
import { ExternalLink } from "@sadeghi-ehsan/radin-icon";
import { FormElementWrapper } from "../../Atoms/FormElementWrapper";
import { classJoin, extractFormElementProps, filterObj } from "../../../utils";
import { useCombinedRefs } from "../../../hooks/useCombinedRefs";
import { textareaResizeValues } from "./utils";
const Textarea = forwardRef(({ id, className, style, disabled, resize, keepOpen, autoFocus, rows, ...restProps }, ref) => {
    const [isOpenState, setIsOpen] = useState(false);
    const formElementWrapperRef = useRef();
    const textAreaRef = useRef();
    const textAreaContentRef = useRef();
    const combinedRefs = useCombinedRefs(ref, formElementWrapperRef);
    const [wrapperProps, componentProps] = extractFormElementProps(restProps);
    const isOpen = keepOpen || isOpenState;
    const onOpen = () => {
        if (!disabled)
            setIsOpen(true);
    };
    const onClose = () => {
        combinedRefs.current.querySelector("fieldset").style.transition = "";
        setIsOpen(false);
    };
    const updateFieldsetHeight = () => {
        combinedRefs.current.querySelector("fieldset").style.height = `${(textAreaRef.current || textAreaContentRef.current).offsetHeight + 33}px`;
    };
    useEffect(() => {
        updateFieldsetHeight();
        let resizeObserver;
        if (textAreaRef.current) {
            resizeObserver = new ResizeObserver(updateFieldsetHeight);
            resizeObserver.observe(textAreaRef.current);
        }
        if (isOpen) {
            setTimeout(() => {
                combinedRefs.current.querySelector("fieldset").style.transition = "none";
            }, 100);
        }
        return () => {
            if (resizeObserver)
                resizeObserver.disconnect();
        };
    }, [isOpen]);
    return (_jsx(FormElementWrapper, { ...wrapperProps, id: id, style: style, disabled: disabled, fieldsetClassName: classJoin(["overflow-hidden", className]), endAdornment: !isOpen ? _jsx(ExternalLink, { onClick: onOpen, className: "hover:text-primary focus:text-primary" }) : undefined, ref: combinedRefs, children: _jsx("div", { children: isOpen ? (_jsx("textarea", { ...componentProps, className: classJoin([
                    "w-full bg-transparent outline-none scrollbar-primary pl-2 align-middle text-white disabled:text-disabled",
                    textareaResizeValues[resize],
                    componentProps.className
                ]), disabled: disabled, onBlur: onClose, 
                // eslint-disable-next-line jsx-a11y/no-autofocus
                autoFocus: keepOpen ? autoFocus : true, ref: textAreaRef, onScroll: updateFieldsetHeight, rows: rows })) : (_jsx("div", { className: "grid", ref: textAreaContentRef, ...componentProps, children: _jsx("div", { className: classJoin([
                        "truncate select-none cursor-pointer ",
                        disabled ? "text-disabled" : "",
                        componentProps.value ? "text-white" : "text-idle"
                    ]), onClick: onOpen, children: componentProps.value || componentProps.placeholder || "-" }) })) }) }));
});
Textarea.defaultProps = {
    resize: "none",
    rows: 4,
    readOnly: false,
    disabled: false,
    ...filterObj(FormElementWrapper.defaultProps, (v, k) => !["startAdornment", "clearable", "allowClear", "onClear", "verified", "disabled", "endLabelAdornment"].includes(k))
};
export default Textarea;
//# sourceMappingURL=Textarea.js.map