"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.width = exports.textColors = exports.rotateClasses = exports.rotate = exports.height = exports.fontSizeName = exports.fontSize = exports.colors = exports.bgColors = exports.animation = void 0;
/* -------------------------------------------------------------------------- */
/*                    !! THIS IS AN AUTO GENERATED FILE !!                    */
/*                   DO NOT MODIFY THE CONTENT OF THIS FILE!                  */
/*                  INSTEAD RUN COMMAND 'yarn tailwind-build'                 */
/* -------------------------------------------------------------------------- */

var colors = {
  inherit: "inherit",
  current: "currentColor",
  transparent: "transparent",
  black: "#000",
  white: "#fff",
  appearing: "#393F59",
  "filled-bg": "#2C3358",
  description: "#ABBBCB",
  "dark-text": "#080707",
  "dark-text-hover": "#050505",
  light: "#E4E9F5",
  "light-text": "#FAFCFB",
  primary: "#0A84FF",
  "primary-shadow": "#0A84FF4D",
  "primary-shadow-outline": "#0A84FF30",
  "primary-label": "#CCE6FF",
  "primary-hover": "#086ACC",
  "primary-focus": "#064F99",
  "primary-border": "#033160",
  "secondary-pinned": "#9078A4",
  "secondary-hover": "#9150A5",
  necessary: "#BA38E1",
  "necessary-shadow": "#BA38E14D",
  "necessary-shadow-outline": "#BA38E130",
  "necessary-hover": "#A432C7",
  idle: "#8F94A2",
  "idle-border": "#646778",
  disabled: "#525563",
  "card-border": "#283059",
  "card-bg": "#181D36",
  "main-bg": "#232946",
  "table-zebra-light": "#1C213D",
  "table-hover": "#2A2547",
  "table-columns-header": "#14182C",
  "table-selected-row": "#152D54",
  warning: "#FFC832",
  "warning-shadow": "#FFC8324D",
  "warning-shadow-outline": "#FFC83230",
  "warning-hover": "#E6B42D",
  terminate: "#FF6838",
  "terminate-hover": "#CC532D",
  error: "#FF4DA5",
  "error-hover": "#E62B88",
  prompt: "#FF4255",
  "prompt-hover": "#CC3544",
  success: "#00D583",
  "success-hover": "#00B16D",
  "highlight-1": "#FFB561",
  "highlight-2": "#FDE2E4",
  "highlight-3": "#A78A7F",
  "highlight-4": "#FDFFB6",
  "highlight-5": "#FCF45D",
  "highlight-6": "#DFFF61",
  "highlight-7": "#A5BE00",
  "highlight-8": "#BAF19C",
  "highlight-9": "#99C1DE",
  "highlight-10": "#00A6FB",
  "highlight-11": "#8A79FA",
  "highlight-12": "#C1A0FE",
  "tab-hover": "#252241"
};
exports.colors = colors;
var textColors = {
  inherit: "text-inherit",
  current: "text-current",
  transparent: "text-transparent",
  black: "text-black",
  white: "text-white",
  appearing: "text-appearing",
  "filled-bg": "text-filled-bg",
  description: "text-description",
  "dark-text": "text-dark-text",
  "dark-text-hover": "text-dark-text-hover",
  light: "text-light",
  "light-text": "text-light-text",
  primary: "text-primary",
  "primary-shadow": "text-primary-shadow",
  "primary-shadow-outline": "text-primary-shadow-outline",
  "primary-label": "text-primary-label",
  "primary-hover": "text-primary-hover",
  "primary-focus": "text-primary-focus",
  "primary-border": "text-primary-border",
  "secondary-pinned": "text-secondary-pinned",
  "secondary-hover": "text-secondary-hover",
  necessary: "text-necessary",
  "necessary-shadow": "text-necessary-shadow",
  "necessary-shadow-outline": "text-necessary-shadow-outline",
  "necessary-hover": "text-necessary-hover",
  idle: "text-idle",
  "idle-border": "text-idle-border",
  disabled: "text-disabled",
  "card-border": "text-card-border",
  "card-bg": "text-card-bg",
  "main-bg": "text-main-bg",
  "table-zebra-light": "text-table-zebra-light",
  "table-hover": "text-table-hover",
  "table-columns-header": "text-table-columns-header",
  "table-selected-row": "text-table-selected-row",
  warning: "text-warning",
  "warning-shadow": "text-warning-shadow",
  "warning-shadow-outline": "text-warning-shadow-outline",
  "warning-hover": "text-warning-hover",
  terminate: "text-terminate",
  "terminate-hover": "text-terminate-hover",
  error: "text-error",
  "error-hover": "text-error-hover",
  prompt: "text-prompt",
  "prompt-hover": "text-prompt-hover",
  success: "text-success",
  "success-hover": "text-success-hover",
  "highlight-1": "text-highlight-1",
  "highlight-2": "text-highlight-2",
  "highlight-3": "text-highlight-3",
  "highlight-4": "text-highlight-4",
  "highlight-5": "text-highlight-5",
  "highlight-6": "text-highlight-6",
  "highlight-7": "text-highlight-7",
  "highlight-8": "text-highlight-8",
  "highlight-9": "text-highlight-9",
  "highlight-10": "text-highlight-10",
  "highlight-11": "text-highlight-11",
  "highlight-12": "text-highlight-12",
  "tab-hover": "text-tab-hover"
};
exports.textColors = textColors;
var bgColors = {
  inherit: "bg-inherit",
  current: "bg-current",
  transparent: "bg-transparent",
  black: "bg-black",
  white: "bg-white",
  appearing: "bg-appearing",
  "filled-bg": "bg-filled-bg",
  description: "bg-description",
  "dark-text": "bg-dark-text",
  "dark-text-hover": "bg-dark-text-hover",
  light: "bg-light",
  "light-text": "bg-light-text",
  primary: "bg-primary",
  "primary-shadow": "bg-primary-shadow",
  "primary-shadow-outline": "bg-primary-shadow-outline",
  "primary-label": "bg-primary-label",
  "primary-hover": "bg-primary-hover",
  "primary-focus": "bg-primary-focus",
  "primary-border": "bg-primary-border",
  "secondary-pinned": "bg-secondary-pinned",
  "secondary-hover": "bg-secondary-hover",
  necessary: "bg-necessary",
  "necessary-shadow": "bg-necessary-shadow",
  "necessary-shadow-outline": "bg-necessary-shadow-outline",
  "necessary-hover": "bg-necessary-hover",
  idle: "bg-idle",
  "idle-border": "bg-idle-border",
  disabled: "bg-disabled",
  "card-border": "bg-card-border",
  "card-bg": "bg-card-bg",
  "main-bg": "bg-main-bg",
  "table-zebra-light": "bg-table-zebra-light",
  "table-hover": "bg-table-hover",
  "table-columns-header": "bg-table-columns-header",
  "table-selected-row": "bg-table-selected-row",
  warning: "bg-warning",
  "warning-shadow": "bg-warning-shadow",
  "warning-shadow-outline": "bg-warning-shadow-outline",
  "warning-hover": "bg-warning-hover",
  terminate: "bg-terminate",
  "terminate-hover": "bg-terminate-hover",
  error: "bg-error",
  "error-hover": "bg-error-hover",
  prompt: "bg-prompt",
  "prompt-hover": "bg-prompt-hover",
  success: "bg-success",
  "success-hover": "bg-success-hover",
  "highlight-1": "bg-highlight-1",
  "highlight-2": "bg-highlight-2",
  "highlight-3": "bg-highlight-3",
  "highlight-4": "bg-highlight-4",
  "highlight-5": "bg-highlight-5",
  "highlight-6": "bg-highlight-6",
  "highlight-7": "bg-highlight-7",
  "highlight-8": "bg-highlight-8",
  "highlight-9": "bg-highlight-9",
  "highlight-10": "bg-highlight-10",
  "highlight-11": "bg-highlight-11",
  "highlight-12": "bg-highlight-12",
  "tab-hover": "bg-tab-hover"
};
exports.bgColors = bgColors;
var fontSize = {
  xs: "0.75rem",
  sm: "0.875rem",
  base: "1rem",
  lg: "1.125rem",
  xl: "1.25rem",
  "2xl": "1.5rem",
  "3xl": "1.875rem",
  "4xl": "2.25rem",
  "5xl": "3rem",
  "6xl": "3.75rem",
  "7xl": "4.5rem",
  "8xl": "6rem",
  "9xl": "8rem",
  ".5xs": "0.4375rem",
  ".6xs": "0.5rem",
  ".7xs": "0.5625rem",
  ".8xs": "0.625rem",
  ".9xs": "0.6875rem",
  "1.5xs": "0.8125rem",
  "1.5lg": "1.188rem",
  "1.4xl": "1.313rem",
  "3.6xl": "1.75rem",
  "3.4xl": "2rem",
  "4.1xl": "2.313rem",
  "4.6xl": "2.688rem"
};
exports.fontSize = fontSize;
var fontSizeName = {
  xs: "text-xs",
  sm: "text-sm",
  base: "text-base",
  lg: "text-lg",
  xl: "text-xl",
  "2xl": "text-2xl",
  "3xl": "text-3xl",
  "4xl": "text-4xl",
  "5xl": "text-5xl",
  "6xl": "text-6xl",
  "7xl": "text-7xl",
  "8xl": "text-8xl",
  "9xl": "text-9xl",
  ".5xs": "text-.5xs",
  ".6xs": "text-.6xs",
  ".7xs": "text-.7xs",
  ".8xs": "text-.8xs",
  ".9xs": "text-.9xs",
  "1.5xs": "text-1.5xs",
  "1.5lg": "text-1.5lg",
  "1.4xl": "text-1.4xl",
  "3.6xl": "text-3.6xl",
  "3.4xl": "text-3.4xl",
  "4.1xl": "text-4.1xl",
  "4.6xl": "text-4.6xl"
};
exports.fontSizeName = fontSizeName;
var rotate = {
  "0": "0deg",
  "1": "1deg",
  "2": "2deg",
  "3": "3deg",
  "6": "6deg",
  "12": "12deg",
  "45": "45deg",
  "90": "90deg",
  "180": "180deg"
};
exports.rotate = rotate;
var rotateClasses = {
  "0": "rotate-0",
  "1": "rotate-1",
  "2": "rotate-2",
  "3": "rotate-3",
  "6": "rotate-6",
  "12": "rotate-12",
  "45": "rotate-45",
  "90": "rotate-90",
  "180": "rotate-180"
};
exports.rotateClasses = rotateClasses;
var animation = {
  none: "animate-none",
  spin: "animate-spin",
  ping: "animate-ping",
  pulse: "animate-pulse",
  bounce: "animate-bounce",
  "spin-fast": "animate-spin-fast",
  "spin-slow": "animate-spin-slow",
  "ping-fast": "animate-ping-fast",
  "ping-slow": "animate-ping-slow",
  "pulse-fast": "animate-pulse-fast",
  "pulse-slow": "animate-pulse-slow",
  "bounce-fast": "animate-bounce-fast",
  "bounce-slow": "animate-bounce-slow",
  wiggle: "animate-wiggle",
  "wiggle-fast": "animate-wiggle-fast",
  "wiggle-slow": "animate-wiggle-slow"
};
exports.animation = animation;
var width = {
  "0": "w-0",
  "1": "w-1",
  "2": "w-2",
  "3": "w-3",
  "4": "w-4",
  "5": "w-5",
  "6": "w-6",
  "7": "w-7",
  "8": "w-8",
  "9": "w-9",
  "10": "w-10",
  "11": "w-11",
  "12": "w-12",
  "14": "w-14",
  "16": "w-16",
  "17": "w-17",
  "20": "w-20",
  "24": "w-24",
  "28": "w-28",
  "30": "w-30",
  "32": "w-32",
  "36": "w-36",
  "38": "w-38",
  "40": "w-40",
  "44": "w-44",
  "48": "w-48",
  "52": "w-52",
  "56": "w-56",
  "60": "w-60",
  "64": "w-64",
  "72": "w-72",
  "75": "w-75",
  "80": "w-80",
  "96": "w-96",
  "125": "w-125",
  auto: "w-auto",
  px: "w-px",
  "0.5": "w-0.5",
  "1.5": "w-1.5",
  "2.5": "w-2.5",
  "3.5": "w-3.5",
  "0.75": "w-0.75",
  "1.2": "w-1.2",
  "2.4": "w-2.4",
  "3.25": "w-3.25",
  "4.5": "w-4.5",
  "5.5": "w-5.5",
  "7.2": "w-7.2",
  "8.5": "w-8.5",
  "9.3": "w-9.3",
  "10.5": "w-10.5",
  "11.8": "w-11.8",
  "12.8": "w-12.8",
  "15.9": "w-15.9",
  "17.5": "w-17.5",
  "1/2": "w-1/2",
  "1/3": "w-1/3",
  "2/3": "w-2/3",
  "1/4": "w-1/4",
  "2/4": "w-2/4",
  "3/4": "w-3/4",
  "1/5": "w-1/5",
  "2/5": "w-2/5",
  "3/5": "w-3/5",
  "4/5": "w-4/5",
  "1/6": "w-1/6",
  "2/6": "w-2/6",
  "3/6": "w-3/6",
  "4/6": "w-4/6",
  "5/6": "w-5/6",
  "1/12": "w-1/12",
  "2/12": "w-2/12",
  "3/12": "w-3/12",
  "4/12": "w-4/12",
  "5/12": "w-5/12",
  "6/12": "w-6/12",
  "7/12": "w-7/12",
  "8/12": "w-8/12",
  "9/12": "w-9/12",
  "10/12": "w-10/12",
  "11/12": "w-11/12",
  full: "w-full",
  screen: "w-screen",
  min: "w-min",
  max: "w-max",
  fit: "w-fit"
};
exports.width = width;
var height = {
  "0": "h-0",
  "1": "h-1",
  "2": "h-2",
  "3": "h-3",
  "4": "h-4",
  "5": "h-5",
  "6": "h-6",
  "7": "h-7",
  "8": "h-8",
  "9": "h-9",
  "10": "h-10",
  "11": "h-11",
  "12": "h-12",
  "14": "h-14",
  "16": "h-16",
  "17": "h-17",
  "20": "h-20",
  "24": "h-24",
  "28": "h-28",
  "30": "h-30",
  "32": "h-32",
  "36": "h-36",
  "38": "h-38",
  "40": "h-40",
  "44": "h-44",
  "48": "h-48",
  "52": "h-52",
  "56": "h-56",
  "60": "h-60",
  "64": "h-64",
  "72": "h-72",
  "75": "h-75",
  "80": "h-80",
  "96": "h-96",
  "125": "h-125",
  auto: "h-auto",
  px: "h-px",
  "0.5": "h-0.5",
  "1.5": "h-1.5",
  "2.5": "h-2.5",
  "3.5": "h-3.5",
  "0.75": "h-0.75",
  "1.2": "h-1.2",
  "2.4": "h-2.4",
  "3.25": "h-3.25",
  "4.5": "h-4.5",
  "5.5": "h-5.5",
  "7.2": "h-7.2",
  "8.5": "h-8.5",
  "9.3": "h-9.3",
  "10.5": "h-10.5",
  "11.8": "h-11.8",
  "12.8": "h-12.8",
  "15.9": "h-15.9",
  "17.5": "h-17.5",
  "1/2": "h-1/2",
  "1/3": "h-1/3",
  "2/3": "h-2/3",
  "1/4": "h-1/4",
  "2/4": "h-2/4",
  "3/4": "h-3/4",
  "1/5": "h-1/5",
  "2/5": "h-2/5",
  "3/5": "h-3/5",
  "4/5": "h-4/5",
  "1/6": "h-1/6",
  "2/6": "h-2/6",
  "3/6": "h-3/6",
  "4/6": "h-4/6",
  "5/6": "h-5/6",
  full: "h-full",
  screen: "h-screen",
  min: "h-min",
  max: "h-max",
  fit: "h-fit"
};
exports.height = height;