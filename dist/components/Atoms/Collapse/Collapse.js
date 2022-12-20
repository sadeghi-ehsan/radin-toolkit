import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { forwardRef, useRef, useState } from "react";
import { Chevron } from "@sadeghi-ehsan/radin-icon";
import { CLOSE, OPEN } from "./utils";
export const Collapse = forwardRef(({ withHover, title, defaultExpanded, disabled, onChange, className, children }, ref) => {
    const [expand, setExpand] = useState(defaultExpanded);
    const collapseRef = useRef();
    const handleCollapse = () => {
        if (!disabled) {
            onChange(!expand);
            setExpand(!expand);
            const { classList } = collapseRef.current;
            if (classList.contains(CLOSE)) {
                classList.replace(CLOSE, OPEN);
                classList.add("py-2");
            }
            else {
                classList.replace(OPEN, CLOSE);
                classList.remove("py-2");
            }
        }
    };
    const options = withHover
        ? {
            onBlur: handleCollapse,
            onFocus: handleCollapse,
            onMouseOut: handleCollapse,
            onMouseOver: handleCollapse
        }
        : {
            onClick: handleCollapse
        };
    return (_jsxs("div", { className: className, children: [_jsxs("div", { ref: ref, ...options, className: "border-b border-light/20 pb-1 cursor-pointer", children: [_jsx("span", { className: "text-primary-label text-base", children: title }), _jsx(Chevron, { size: "lg", rotate: "90", flip: expand ? "horizontal" : "vertical", color: "light-text", className: "inline mr-1" })] }), _jsx("div", { className: `overflow-hidden transition-all ${defaultExpanded ? `${OPEN} py-2` : CLOSE} duration-700`, ref: collapseRef, children: children })] }));
});
Collapse.defaultProps = {
    withHover: false,
    defaultExpanded: true,
    disabled: false,
    onChange: () => { }
};
export default Collapse;
//# sourceMappingURL=Collapse.js.map