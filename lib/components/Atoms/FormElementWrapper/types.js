"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.formElWrapperProps = void 0;
/** adornment types */

/*
 * This variable is used to extract props related to Wrapper from all received props in Components like: Input, Select, ...
 * ToDo: This array must always be synced with props list below in the interface
 */
var formElWrapperProps = ["label", "variant", "size", "legendClassName", "fieldsetClassName", "childrenClassName", "startAdornment", "endAdornment", "endAdornmentClassName", "endLabelAdornment", "clearable", "allowClear", "onClear", "onFieldsetClick", "important", "required", "help", "error", "verified", "disabled", "block", "preserveErrorBox", "noEndDivider"];
exports.formElWrapperProps = formElWrapperProps;