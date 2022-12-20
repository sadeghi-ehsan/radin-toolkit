/* eslint-disable no-param-reassign */
import React from "react";
/**
 * This hook receive multiple ref object and will combine them and return one Ref
 * It's useful for combining forwarder ref and inner component ref
 *
 * @param refs - The Refs to combine
 * @returns Combined Ref object
 */
const useCombinedRefs = (...refs) => {
    const targetRef = React.useRef();
    React.useEffect(() => {
        refs.forEach(ref => {
            if (!ref)
                return;
            if (typeof ref === "function") {
                ref(targetRef.current);
            }
            else {
                ref.current = targetRef.current;
            }
        });
    }, [refs]);
    return targetRef;
};
export { useCombinedRefs };
//# sourceMappingURL=useCombinedRefs.js.map