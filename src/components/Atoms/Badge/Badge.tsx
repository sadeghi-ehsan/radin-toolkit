import { forwardRef, FunctionComponent } from "react";
import { IBadgeProps } from "./types";
import { badgeTypes } from "./utils";

export const Badge = forwardRef<HTMLSpanElement, IBadgeProps>(({ type, ...restProps }, ref) => {
  const RelatedBadgeComponent: FunctionComponent<IBadgeProps> = badgeTypes[type];

  return <RelatedBadgeComponent {...restProps} ref={ref} />;
});

Badge.defaultProps = { size: "xs", color: "primary", type: "tag" };

export default Badge;
