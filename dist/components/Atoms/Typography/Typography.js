import { createElement } from "react";
import { textColors } from "../../../constants/tailwind";
import { classJoin } from "../../../utils";
import { fontWeights, textVariants } from "./utils";
const Typography = ({ children, tag, variant, className, color, weight, ...otherProps }) => createElement(tag, {
    ...otherProps,
    className: classJoin([
        textVariants[variant],
        fontWeights[weight],
        textColors[color],
        className
    ])
}, children);
Typography.defaultProps = {
    variant: "body1",
    color: "white",
    tag: "div",
    weight: "regular"
};
export default Typography;
//# sourceMappingURL=Typography.js.map