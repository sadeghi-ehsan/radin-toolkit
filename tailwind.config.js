const defaultTheme = require("tailwindcss/defaultTheme");
const aspectRatio = require("@tailwindcss/aspect-ratio");

const customSpacing = {
  ...defaultTheme.spacing,
  0.5: "0.125rem", // 2px
  0.75: "0.1875rem", // 3px
  1.2: "0.3125rem", // 5px
  1.5: "0.375rem", // 6px
  2.4: "0.5625rem", // 9px
  2.5: "0.625rem", // 10px
  3.25: "0.6875rem", // 11px
  3.5: "0.875rem", // 14px
  4.5: "1.125rem", // 18px
  5.5: "1.375rem", // 22px
  7.2: "1.875rem", // 30px
  8.5: "2.125rem", // 34px
  9.3: "2.3125rem", // 37px
  10.5: "2.625rem", // 42px
  11.8: "2.875rem", // 46px
  12.8: "3.375rem", // 54px
  15.9: "3.9375rem", // 63px
  17: "4.25rem", // 68px
  17.5: "4.375rem", // 70px
  30: "7.5rem", // 120px
  38: "9.6rem", // 155px
  75: "18.75rem", // 300px
  125: "31.25rem" // 500px,
};

const customFontSize = {
  ...defaultTheme.fontSize,
  ".5xs": ["0.4375rem", "1.7"], // 7px
  ".6xs": ["0.5rem", "1.7"], // 8px
  ".7xs": ["0.5625rem", "1.7"], // 9px
  ".8xs": ["0.625rem", "1.7"], // 10px
  ".9xs": ["0.6875rem", "1.7"], // 11px
  xs: [defaultTheme.fontSize.xs[0], "1.7"], // 12px
  "1.5xs": ["0.8125rem", "1.7"], // 13px
  sm: [defaultTheme.fontSize.sm[0], "1.7"], // 14px
  base: [defaultTheme.fontSize.base[0], "1.7"], // 16px
  lg: [defaultTheme.fontSize.lg[0], "1.7"], // 18px
  "1.5lg": ["1.188rem", "1.7"], // 19px
  xl: [defaultTheme.fontSize.xl[0], "1.7"], // 20px
  "1.4xl": ["1.313rem", "1.7"], // 21px
  "2xl": [defaultTheme.fontSize["2xl"][0], "1.7"], // 24px
  "3.6xl": ["1.75rem", "1.7"], // 28px
  "3xl": [defaultTheme.fontSize["3xl"][0], "1.7"], // 30px
  "3.4xl": ["2rem", "1.7"], // 32px
  "4xl": [defaultTheme.fontSize["4xl"][0], "1.7"], // 36px
  "4.1xl": ["2.313rem", "1.7"], // 37px
  "4.6xl": ["2.688rem", "1.7"], // 43px
  "5xl": [defaultTheme.fontSize["5xl"][0], "1.7"], // 48px
  "6xl": [defaultTheme.fontSize["6xl"][0], "1.7"], // 60px
  "7xl": [defaultTheme.fontSize["7xl"][0], "1.7"], // 72px
  "8xl": [defaultTheme.fontSize["8xl"][0], "1.7"], // 96px
  "9xl": [defaultTheme.fontSize["9xl"][0], "1.7"] // 128px
};

const primaryColor = "#0A84FF";
const warningColor = "#FFC832";
const necessaryColor = "#BA38E1";
const inputBoxShadowSpread = 5; // px

module.exports = {
  darkMode: "media", // or 'media' or 'class'
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true
  },
  content: ["./src/**/*.{ts,tsx,js,jsx}", "./playground/**/*.{ts,tsx,js,jsx}", "./.storybook/**/*.{ts,tsx,js,jsx}"],
  theme: {
    colors: {
      inherit: "inherit",
      current: "currentColor",
      transparent: "transparent",
      black: "#000",
      white: "#fff",

      appearing: "#393F59",
      "filled-bg": "#2C3358",
      description: "#ABBBCB",

      dark: { DEFAULT: "", text: "#080707", "text-hover": "#050505" },
      light: { DEFAULT: "#E4E9F5", text: "#FAFCFB" },

      primary: {
        DEFAULT: primaryColor,
        shadow: `${primaryColor}4D`,
        "shadow-outline": `${primaryColor}30`,
        label: "#CCE6FF",
        hover: "#086ACC",
        focus: "#064F99",
        border: "#033160"
      },

      secondary: {
        DEFAULT: "",
        pinned: "#9078A4",
        hover: "#9150A5"
      },

      necessary: {
        DEFAULT: necessaryColor,
        shadow: `${necessaryColor}4D`,
        "shadow-outline": `${necessaryColor}30`,
        hover: "#A432C7"
      },

      idle: { DEFAULT: "#8F94A2", border: "#646778" },

      disabled: { DEFAULT: "#525563" },

      card: { border: "#283059", bg: "#181D36" },

      main: { bg: "#232946" },

      table: { "zebra-light": "#1C213D", hover: "#2A2547", "columns-header": "#14182C", "selected-row": "#152D54" },

      warning: {
        DEFAULT: warningColor,
        shadow: `${warningColor}4D`,
        "shadow-outline": `${warningColor}30`,
        hover: "#E6B42D"
      },

      terminate: { DEFAULT: "#FF6838", hover: "#CC532D" },

      error: { DEFAULT: "#FF4DA5", hover: "#E62B88" },

      prompt: { DEFAULT: "#FF4255", hover: "#CC3544" },

      success: { DEFAULT: "#00D583", hover: "#00B16D" },

      highlight: {
        1: "#FFB561",
        2: "#FDE2E4",
        3: "#A78A7F",
        4: "#FDFFB6",
        5: "#FCF45D",
        6: "#DFFF61",
        7: "#A5BE00",
        8: "#BAF19C",
        9: "#99C1DE",
        10: "#00A6FB",
        11: "#8A79FA",
        12: "#C1A0FE"
      },

      "tab-hover": "#252241"
    },

    boxShadow: {
      ...defaultTheme.boxShadow,
      right: "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
      input: `0px 0px ${inputBoxShadowSpread}px #00D1E0`,
      "input-outline": `0px ${inputBoxShadowSpread * 0.4}px ${inputBoxShadowSpread * 0.6}px #00D1E0`,
      "clear-icon": "3px 0px 5px #13172B4D",
      progress: "0px 0px 10px rgb(0 0 0 / 0.1)",
      tooltip: "0 5px 8px #10132467",
      modal: "0 0 8px #0A84FF4D",
      "right-scroll": "9px 0px 12px -7px rgb(114 109 109 / 46%)",
      "left-scroll": "-9px 0px 12px -7px rgb(114 109 109 / 46%)",
      notification: "inset -4px 3px 14px #ffffff61, 0px 7px 8px #00000029"
    },
    fontSize: {
      ...customFontSize
    },
    lineHeight: {
      ...defaultTheme.lineHeight,
      ...Object.fromEntries(Object.entries(customFontSize).map(([k, v]) => [k, Array.isArray(v) ? v[0] : v]))
    },
    fontWeight: {
      ...defaultTheme.fontWeight,
      regular: defaultTheme.fontWeight.normal,
      heavy: defaultTheme.fontWeight.extrabold,
      fat: defaultTheme.fontWeight.black
    },
    fontFamily: {
      sans: ["yekan-bakh", ...defaultTheme.fontFamily.sans],
      serif: ["yekan-bakh", ...defaultTheme.fontFamily.serif],
      mono: ["yekan-bakh", ...defaultTheme.fontFamily.mono]
    },
    borderRadius: {
      ...defaultTheme.borderRadius,
      "4xl": "2rem", // 32px
      "3.2xl": "1.688rem", // 27px
      xxl: "0.875rem", // 14px
      xl: "0.75rem", // 12px
      llg: "0.625rem", // 10px
      half: "50%"
    },
    borderWidth: {
      ...defaultTheme.borderWidth,
      3: "3px", // 3px
      3.5: "3.5px", // 3.5px
      6: "6px" // 6px
    },
    animation: {
      ...defaultTheme.animation,
      "spin-fast": "spin 0.5s linear infinite",
      "spin-slow": "spin 2s linear infinite",
      "ping-fast": "ping 0.5s cubic-bezier(0, 0, 0.2, 1) infinite",
      "ping-slow": "ping 2s cubic-bezier(0, 0, 0.2, 1) infinite",
      "pulse-fast": "pulse 1s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      "pulse-slow": "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      "bounce-fast": "bounce 0.5s infinite",
      "bounce-slow": "bounce 2s infinite",
      wiggle: "wiggle 1s ease-in-out infinite",
      "wiggle-fast": "wiggle 0.5s ease-in-out infinite",
      "wiggle-slow": "wiggle 2s ease-in-out infinite"
    },
    keyframes: {
      ...defaultTheme.keyframes,
      wiggle: {
        "0%, 100%": { transform: "rotate(-3deg)" },
        "50%": { transform: "rotate(3deg)" }
      }
    },
    spacing: {
      ...customSpacing
    },
    minWidth: {
      ...defaultTheme.minWidth,
      ...customSpacing
    },
    transitionProperty: {
      ...defaultTheme.transitionProperty,
      inherit: "inherit"
    },
    transitionDelay: {
      ...defaultTheme.transitionDelay,
      inherit: "inherit"
    },
    transitionDuration: {
      ...defaultTheme.transitionDuration,
      inherit: "inherit"
    },
    transitionTimingFunction: {
      ...defaultTheme.transitionTimingFunction,
      inherit: "inherit"
    },
    extend: {
      backdropBlur: {
        "1.5sm": "6px"
      },
      backgroundSize: { 8: "8px 8px" },
      opacity: {
        15: ".15"
      },
      lineHeight: {
        0: "0px"
      }
    }
  },
  variants: {
    extend: {
      opacity: ["disabled"],
      cursor: ["disabled"],
      textColor: ["disabled"],
      textOpacity: ["disabled"],
      backgroundColor: ["disabled"],
      backgroundOpacity: ["disabled"],
      borderStyle: ["focus", "disabled"],
      borderColor: ["disabled"],
      borderOpacity: ["disabled"]
    }
  },
  plugins: [aspectRatio]
};
