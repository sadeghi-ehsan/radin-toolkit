import React, { ForwardedRef, MutableRefObject } from "react";
/**
 * This hook receive multiple ref object and will combine them and return one Ref
 * It's useful for combining forwarder ref and inner component ref
 *
 * @param refs - The Refs to combine
 * @returns Combined Ref object
 */
declare const useCombinedRefs: <T>(...refs: React.ForwardedRef<T>[]) => React.MutableRefObject<T>;
export { useCombinedRefs };
