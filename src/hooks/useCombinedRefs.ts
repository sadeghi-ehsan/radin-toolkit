/* eslint-disable no-param-reassign */
import React, { ForwardedRef, MutableRefObject } from "react";

/**
 * This hook receive multiple ref object and will combine them and return one Ref
 * It's useful for combining forwarder ref and inner component ref
 *
 * @param refs - The Refs to combine
 * @returns Combined Ref object
 */
const useCombinedRefs = <T>(...refs: (ForwardedRef<T> | MutableRefObject<T>)[]) => {
  const targetRef = React.useRef<T>();

  React.useEffect(() => {
    refs.forEach(ref => {
      if (!ref) return;

      if (typeof ref === "function") {
        ref(targetRef.current);
      } else {
        ref.current = targetRef.current;
      }
    });
  }, [refs]);

  return targetRef;
};

export { useCombinedRefs };
