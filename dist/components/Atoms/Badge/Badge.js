import { jsx as _jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import { badgeTypes } from "./utils";
export const Badge = forwardRef(({ type, ...restProps }, ref) => {
    const RelatedBadgeComponent = badgeTypes[type];
    return _jsx(RelatedBadgeComponent, { ...restProps, ref: ref });
});
Badge.defaultProps = { size: "xs", color: "primary", type: "tag" };
export default Badge;
//# sourceMappingURL=Badge.js.map