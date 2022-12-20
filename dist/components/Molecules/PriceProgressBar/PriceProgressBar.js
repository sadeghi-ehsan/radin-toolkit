import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { forwardRef } from "react";
import { convertIntToCurrency, commaSeparator, classJoin } from "../../../utils";
import { Badge } from "../../Atoms/Badge";
export const PriceProgressBar = forwardRef(({ count, volume, percentage, direction, className, style, ...restProps }, ref) => {
    // The below statement check if percentage be between 0 and 100 and return 0 if it was undefined
    const inRangePercentage = percentage > 100 ? 100 : percentage < 0 ? 0 : percentage || 0;
    const volumeData = volume || volume === 0 ? convertIntToCurrency(volume) : null;
    return (_jsxs("div", { ref: ref, style: { direction, ...style }, className: classJoin(["w-44", className]), ...restProps, children: [_jsxs("div", { className: "flex flex-row justify-between mb-1", children: [_jsx("span", { dir: "rtl", children: volume || volume === 0 ? (_jsxs(_Fragment, { children: [volumeData.unit && (_jsx(Badge, { className: "!bg-dark-text !bg-opacity-20 !text-white ml-1", children: volumeData.unit })), commaSeparator(volumeData.value)] })) : (_jsx("span", { children: "-" })) }), count || count === 0 ? _jsx("span", { children: commaSeparator(count) }) : _jsx("span", { children: "-" })] }), _jsx("div", { className: "relative bg-light bg-opacity-20 h-3 rounded mb-0.5", children: _jsxs("div", { style: { width: `${inRangePercentage}%` }, className: classJoin([
                        `h-3 rounded`,
                        direction === "rtl" ? "radin-price-progress-bar-prompt-bar" : "radin-price-progress-bar-success-bar"
                    ]), children: [_jsx("span", { children: "\u00A0" }), _jsxs("div", { className: classJoin([
                                "rounded text-xs text-center w-12 bg-dark-text bg-opacity-30",
                                direction === "rtl"
                                    ? "radin-price-progress-bar-prompt-percentage"
                                    : "radin-price-progress-bar-success-percentage"
                            ]), children: [inRangePercentage, "%"] })] }) })] }));
});
PriceProgressBar.defaultProps = { direction: "rtl" };
export default PriceProgressBar;
//# sourceMappingURL=PriceProgressBar.js.map