import { jsxs as _jsxs, jsx as _jsx } from "react/jsx-runtime";
import { ProgressBar } from "../../Atoms/ProgressBar";
import { classJoin, empty, modifyReactChildren } from "../../../utils";
import { imageStyles, bodyPaddings } from "./utils";
export const Cards = ({ children, image, imageSize, style, size, className, bodyClassName, footer, progressBarProps, actionAdornment, imageClassName, hideImageShadow, ...restProps }) => (_jsxs("div", { ...restProps, style: style, className: classJoin([
        "group relative overflow-hidden bg-card-bg border border-card-border hover:border-primary-border focus-within:border-primary-border transition rounded-xxl",
        className
    ]), children: [!empty(image) && (_jsxs("div", { className: classJoin(["relative pb-0", size === "zero" ? "" : "p-2"]), children: [modifyReactChildren(image, {
                    className: classJoin(["rounded-lg w-full object-cover relative z-10", imageClassName]),
                    style: imageStyles[imageSize]
                }), !hideImageShadow &&
                    modifyReactChildren(image, {
                        className: "rounded-lg object-cover blur opacity-20 absolute -bottom-2.5 right-0 left-0 w-full px-5",
                        style: { height: "72px" }
                    })] })), _jsxs("div", { className: classJoin([bodyPaddings[size], bodyClassName]), children: [!empty(children) && children, !empty(footer) && _jsx("div", { className: classJoin(["border-t border-card-border pt-4 mt-4"]), children: footer })] }), !empty(progressBarProps) && (_jsx(ProgressBar, { ...progressBarProps, className: classJoin(["absolute -bottom-2.4", progressBarProps?.className]) })), !empty(actionAdornment) && _jsx("div", { className: "absolute top-px left-px", children: actionAdornment })] }));
Cards.defaultProps = { imageSize: "md", size: "lg", hideImageShadow: false };
export default Cards;
//# sourceMappingURL=Card.js.map