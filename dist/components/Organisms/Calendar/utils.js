import { jsx as _jsx } from "react/jsx-runtime";
import { Chevron } from "@sadeghi-ehsan/radin-icon";
export const RenderHeader = ({ header }) => typeof header === "string" ? (_jsx("div", { className: "text-right pt-4 pb-3 px-4 text-sm font-medium text-primary-label", children: header })) : (header);
/**
 * Left & Right Arrow buttons in header of the calendar
 */
export const renderButton = ({ direction, handleClick, locale }) => {
    const horizontalFlip = locale === "fa" ? (direction === "left" ? "vertical" : null) : direction === "right" ? "vertical" : null;
    return (_jsx("div", { onClick: handleClick, className: "px-4 py-2 cursor-pointer text-idle hover:text-primary", children: _jsx(Chevron, { weight: "fill", size: ".7xs", flip: horizontalFlip, className: " " }) }));
};
//# sourceMappingURL=utils.js.map