import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { forwardRef } from "react";
import { colors } from "../../../constants/tailwind";
export const radioSizes = {
    sm: "w-3 h-3 p-0.5",
    base: "w-3.5 h-3.5 p-0.5",
    lg: "w-4 h-4 p-0.75",
    xl: "w-4.5 h-4.5 p-0.75"
};
export const radioColors = {
    primary: { shape: "border-primary", bullet: "bg-primary" },
    error: { shape: "border-error", bullet: "bg-error" },
    success: { shape: "border-success", bullet: "bg-success" }
};
export const radioVariants = {
    check: "",
    fill: "",
    times: "",
    circleFill: ""
};
export const SquircleBorderSvg = forwardRef(({ fill, selected, strokeWidth = 1, padding = 3, variant = "fill", ...restProps }, ref) => {
    // @ts-ignore
    const w = parseFloat(restProps.width) * 16;
    const h = w / 2;
    const sW = strokeWidth + 0.5;
    const curve = (w * 18) / 200;
    const padd = padding + 1;
    const drawIcon = () => {
        switch (variant) {
            case "check":
                return (_jsx("path", { className: "transition-sbt", stroke: selected ? fill : "transparent", strokeMiterlimit: "10", strokeWidth: sW, strokeLinecap: "round", strokeLinejoin: "round", fill: "none", d: `M${w - sW - padd} ${sW + padd}l-${((w - (sW + padd) * 2) * 2) / 3} ${w - (sW + padd) * 2}-${(w - (sW + padd) * 2) / 3}-${(w - (sW + padd) * 2) / 2}` }));
            case "times":
                return (_jsx("path", { className: "transition-sbt", stroke: selected ? fill : "transparent", strokeMiterlimit: "10", strokeWidth: sW, strokeLinecap: "round", strokeLinejoin: "round", fill: "none", d: `M ${sW + padd} ${sW + padd} L ${w - sW - padd} ${w - sW - padd} M ${w - (sW + padd)} ${sW + padd} L ${sW + padd} ${w - sW - padd}` }));
            default:
                return (_jsx("g", { transform: `translate(${sW + padding}, ${sW + padding})`, children: _jsx("path", { className: "transition-sbt", d: `
        M 0, ${h}
        C 0, ${curve} ${curve}, 0 ${h}, 0
        S ${w}, ${curve} ${w}, ${h}
        ${w - curve}, ${w} ${h}, ${w}
        0, ${w - curve} 0, ${h}
        `, transform: `scale(${(w - (sW + padding) * 2) / w})`, style: { fill: selected ? fill : "transparent" } }) }));
        }
    };
    return (
    // @ts-ignore
    _jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", ...restProps, viewBox: `0 0 ${w} ${w}`, ref: ref, children: [drawIcon(), _jsx("path", { className: "transition-sbt", d: `
        M 0, ${h}
        C 0, ${curve} ${curve}, 0 ${h}, 0
        S ${w}, ${curve} ${w}, ${h}
        ${w - curve}, ${w} ${h}, ${w}
        0, ${w - curve} 0, ${h}
        `, fill: "none", transform: `scale(${(w - sW) / w}) translate(${sW / 2}, ${sW / 2})`, stroke: selected ? fill : colors.idle, strokeWidth: sW })] }));
});
//# sourceMappingURL=utils.js.map