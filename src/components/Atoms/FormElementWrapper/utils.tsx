import { ifEmpty } from "../../../utils";

export const wrapperSizes = (isLine: boolean) => ({
  sm: ifEmpty(isLine, "h-11.8" /* +9px = 46px */, "h-[55px]" /* +18px = 55px */), // 37px
  md: ifEmpty(isLine, "h-12.8" /* +9px = 54px */, "h-15.9" /* +18px = 63px */), // 45px
  lg: ifEmpty(isLine, "h-15.9" /* +9px = 63px */, "h-[72px]" /* +18px = 72px */) // 54px
});

// variants of formComponent wrappers which make inputs and selects
export const wrapperVariants = {
  line: "line",
  outline: "outline",
  fill: "fill",
  none: "none"
};

export const sectionsYPadding = {
  sm: "py-2.5", // 10px
  md: "py-3", // 12px
  lg: "py-4" // 16px
};
