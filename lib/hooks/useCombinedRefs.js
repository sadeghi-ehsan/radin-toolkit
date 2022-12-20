"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useCombinedRefs = void 0;
var _react = _interopRequireDefault(require("react"));
/* eslint-disable no-param-reassign */

/**
 * This hook receive multiple ref object and will combine them and return one Ref
 * It's useful for combining forwarder ref and inner component ref
 *
 * @param refs - The Refs to combine
 * @returns Combined Ref object
 */
var useCombinedRefs = function useCombinedRefs() {
  for (var _len = arguments.length, refs = new Array(_len), _key = 0; _key < _len; _key++) {
    refs[_key] = arguments[_key];
  }
  var targetRef = _react["default"].useRef();
  _react["default"].useEffect(function () {
    refs.forEach(function (ref) {
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
exports.useCombinedRefs = useCombinedRefs;