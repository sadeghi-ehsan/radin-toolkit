declare const tailwindTheme: {
    colors: {
        inherit: string;
        current: string;
        transparent: string;
        black: string;
        white: string;
        appearing: string;
        "filled-bg": string;
        description: string;
        dark: {
            DEFAULT: string;
            text: string;
            "text-hover": string;
        };
        light: {
            DEFAULT: string;
            text: string;
        };
        primary: {
            DEFAULT: string;
            shadow: string;
            label: string;
            hover: string;
            focus: string;
            border: string;
        };
        secondary: {
            DEFAULT: string;
            pinned: string;
            hover: string;
        };
        necessary: {
            DEFAULT: string;
            hover: string;
        };
        idle: {
            DEFAULT: string;
            border: string;
        };
        disabled: {
            DEFAULT: string;
        };
        card: {
            border: string;
            bg: string;
        };
        main: {
            bg: string;
        };
        table: {
            "zebra-light": string;
        };
        warning: {
            DEFAULT: string;
            shadow: string;
            hover: string;
        };
        terminate: {
            DEFAULT: string;
            hover: string;
        };
        error: {
            DEFAULT: string;
            hover: string;
        };
        prompt: {
            DEFAULT: string;
            hover: string;
        };
        success: {
            DEFAULT: string;
            hover: string;
        };
    };
    boxShadow: {
        sm: string;
        DEFAULT: string;
        md: string;
        lg: string;
        xl: string;
        "2xl": string;
        inner: string;
        none: string;
        right: string;
        input: string;
        "input-outline": string;
        "clear-icon": string;
        progress: string;
    };
    fontSize: {
        xs: string[];
        sm: string[];
        base: string[];
        lg: string[];
        xl: string[];
        "2xl": string[];
        "3xl": string[];
        "4xl": string[];
        "5xl": string[];
        "6xl": string[];
        "7xl": string[];
        "8xl": string[];
        "9xl": string[];
        ".5xs": string[];
        ".6xs": string[];
        ".7xs": string[];
        ".8xs": string[];
        ".9xs": string[];
        "1.5xs": string[];
        "1.5lg": string[];
        "1.4xl": string[];
        "3.6xl": string[];
        "3.4xl": string[];
        "4.1xl": string[];
        "4.6xl": string[];
    };
    lineHeight: {
        3: string;
        4: string;
        5: string;
        6: string;
        7: string;
        8: string;
        9: string;
        10: string;
        none: string;
        tight: string;
        snug: string;
        normal: string;
        relaxed: string;
        loose: string;
        xs: string;
        sm: string;
        base: string;
        lg: string;
        xl: string;
        "2xl": string;
        "3xl": string;
        "4xl": string;
        "5xl": string;
        "6xl": string;
        "7xl": string;
        "8xl": string;
        "9xl": string;
        ".5xs": string;
        ".6xs": string;
        ".7xs": string;
        ".8xs": string;
        ".9xs": string;
        "1.5xs": string;
        "1.5lg": string;
        "1.4xl": string;
        "3.6xl": string;
        "3.4xl": string;
        "4.1xl": string;
        "4.6xl": string;
    };
    fontWeight: {
        thin: string;
        extralight: string;
        light: string;
        normal: string;
        medium: string;
        semibold: string;
        bold: string;
        extrabold: string;
        black: string;
        regular: string;
        heavy: string;
        fat: string;
    };
    fontFamily: {
        sans: string[];
        serif: string[];
        mono: string[];
    };
    borderRadius: {
        none: string;
        sm: string;
        DEFAULT: string;
        md: string;
        lg: string;
        xl: string;
        "2xl": string;
        "3xl": string;
        full: string;
        "4xl": string;
        xxl: string;
        llg: string;
        half: string;
    };
    animation: {
        none: string;
        spin: string;
        ping: string;
        pulse: string;
        bounce: string;
        "spin-fast": string;
        "spin-slow": string;
        "ping-fast": string;
        "ping-slow": string;
        "pulse-fast": string;
        "pulse-slow": string;
        "bounce-fast": string;
        "bounce-slow": string;
        wiggle: string;
        "wiggle-fast": string;
        "wiggle-slow": string;
    };
    keyframes: {
        spin: {
            to: {
                transform: string;
            };
        };
        ping: {
            "75%, 100%": {
                transform: string;
                opacity: string;
            };
        };
        pulse: {
            "50%": {
                opacity: string;
            };
        };
        bounce: {
            "0%, 100%": {
                transform: string;
                animationTimingFunction: string;
            };
            "50%": {
                transform: string;
                animationTimingFunction: string;
            };
        };
        wiggle: {
            "0%, 100%": {
                transform: string;
            };
            "50%": {
                transform: string;
            };
        };
    };
    spacing: {
        0: string;
        1: string;
        2: string;
        3: string;
        4: string;
        5: string;
        6: string;
        7: string;
        8: string;
        9: string;
        10: string;
        11: string;
        12: string;
        14: string;
        16: string;
        20: string;
        24: string;
        28: string;
        32: string;
        36: string;
        40: string;
        44: string;
        48: string;
        52: string;
        56: string;
        60: string;
        64: string;
        72: string;
        80: string;
        96: string;
        px: string;
        0.5: string;
        1.5: string;
        2.5: string;
        3.5: string;
        0.75: string;
        1.2: string;
        2.4: string;
        3.25: string;
        4.5: string;
        5.5: string;
        8.5: string;
        9.3: string;
        10.5: string;
        11.8: string;
        12.8: string;
        15.9: string;
    };
    minWidth: {
        0: string;
        1: string;
        2: string;
        3: string;
        4: string;
        5: string;
        6: string;
        7: string;
        8: string;
        9: string;
        10: string;
        11: string;
        12: string;
        14: string;
        16: string;
        20: string;
        24: string;
        28: string;
        32: string;
        36: string;
        40: string;
        44: string;
        48: string;
        52: string;
        56: string;
        60: string;
        64: string;
        72: string;
        80: string;
        96: string;
        full: string;
        min: string;
        max: string;
        fit: string;
        px: string;
        0.5: string;
        1.5: string;
        2.5: string;
        3.5: string;
        0.75: string;
        1.2: string;
        2.4: string;
        3.25: string;
        4.5: string;
        5.5: string;
        8.5: string;
        9.3: string;
        10.5: string;
        11.8: string;
        12.8: string;
        15.9: string;
    };
    transitionProperty: {
        none: string;
        all: string;
        DEFAULT: string;
        colors: string;
        opacity: string;
        shadow: string;
        transform: string;
        inherit: string;
    };
    transitionDelay: {
        75: string;
        100: string;
        150: string;
        200: string;
        300: string;
        500: string;
        700: string;
        1000: string;
        inherit: string;
    };
    transitionDuration: {
        75: string;
        100: string;
        150: string;
        200: string;
        300: string;
        500: string;
        700: string;
        1000: string;
        DEFAULT: string;
        inherit: string;
    };
    transitionTimingFunction: {
        DEFAULT: string;
        linear: string;
        in: string;
        out: string;
        "in-out": string;
        inherit: string;
    };
    aspectRatio: {
        1: string;
        2: string;
        3: string;
        4: string;
        5: string;
        6: string;
        7: string;
        8: string;
        9: string;
        10: string;
        11: string;
        12: string;
        13: string;
        14: string;
        15: string;
        16: string;
    };
    screens: {
        sm: string;
        md: string;
        lg: string;
        xl: string;
        "2xl": string;
    };
    columns: {
        1: string;
        2: string;
        3: string;
        4: string;
        5: string;
        6: string;
        7: string;
        8: string;
        9: string;
        10: string;
        11: string;
        12: string;
        auto: string;
        "3xs": string;
        "2xs": string;
        xs: string;
        sm: string;
        md: string;
        lg: string;
        xl: string;
        "2xl": string;
        "3xl": string;
        "4xl": string;
        "5xl": string;
        "6xl": string;
        "7xl": string;
    };
    backdropBlur: {
        0: string;
        none: string;
        sm: string;
        DEFAULT: string;
        md: string;
        lg: string;
        xl: string;
        "2xl": string;
        "3xl": string;
    };
    backdropBrightness: {
        0: string;
        50: string;
        75: string;
        90: string;
        95: string;
        100: string;
        105: string;
        110: string;
        125: string;
        150: string;
        200: string;
    };
    backdropContrast: {
        0: string;
        50: string;
        75: string;
        100: string;
        125: string;
        150: string;
        200: string;
    };
    backdropGrayscale: {
        0: string;
        DEFAULT: string;
    };
    backdropHueRotate: {
        0: string;
        15: string;
        30: string;
        60: string;
        90: string;
        180: string;
    };
    backdropInvert: {
        0: string;
        DEFAULT: string;
    };
    backdropOpacity: {
        0: string;
        5: string;
        10: string;
        20: string;
        25: string;
        30: string;
        40: string;
        50: string;
        60: string;
        70: string;
        75: string;
        80: string;
        90: string;
        95: string;
        100: string;
    };
    backdropSaturate: {
        0: string;
        50: string;
        100: string;
        150: string;
        200: string;
    };
    backdropSepia: {
        0: string;
        DEFAULT: string;
    };
    backgroundColor: {
        inherit: string;
        current: string;
        transparent: string;
        black: string;
        white: string;
        appearing: string;
        "filled-bg": string;
        description: string;
        dark: {
            DEFAULT: string;
            text: string;
            "text-hover": string;
        };
        light: {
            DEFAULT: string;
            text: string;
        };
        primary: {
            DEFAULT: string;
            shadow: string;
            label: string;
            hover: string;
            focus: string;
            border: string;
        };
        secondary: {
            DEFAULT: string;
            pinned: string;
            hover: string;
        };
        necessary: {
            DEFAULT: string;
            hover: string;
        };
        idle: {
            DEFAULT: string;
            border: string;
        };
        disabled: {
            DEFAULT: string;
        };
        card: {
            border: string;
            bg: string;
        };
        main: {
            bg: string;
        };
        table: {
            "zebra-light": string;
        };
        warning: {
            DEFAULT: string;
            shadow: string;
            hover: string;
        };
        terminate: {
            DEFAULT: string;
            hover: string;
        };
        error: {
            DEFAULT: string;
            hover: string;
        };
        prompt: {
            DEFAULT: string;
            hover: string;
        };
        success: {
            DEFAULT: string;
            hover: string;
        };
    };
    backgroundImage: {
        none: string;
        "gradient-to-t": string;
        "gradient-to-tr": string;
        "gradient-to-r": string;
        "gradient-to-br": string;
        "gradient-to-b": string;
        "gradient-to-bl": string;
        "gradient-to-l": string;
        "gradient-to-tl": string;
    };
    backgroundOpacity: {
        0: string;
        5: string;
        10: string;
        20: string;
        25: string;
        30: string;
        40: string;
        50: string;
        60: string;
        70: string;
        75: string;
        80: string;
        90: string;
        95: string;
        100: string;
    };
    backgroundPosition: {
        bottom: string;
        center: string;
        left: string;
        "left-bottom": string;
        "left-top": string;
        right: string;
        "right-bottom": string;
        "right-top": string;
        top: string;
    };
    backgroundSize: {
        auto: string;
        cover: string;
        contain: string;
    };
    blur: {
        0: string;
        none: string;
        sm: string;
        DEFAULT: string;
        md: string;
        lg: string;
        xl: string;
        "2xl": string;
        "3xl": string;
    };
    brightness: {
        0: string;
        50: string;
        75: string;
        90: string;
        95: string;
        100: string;
        105: string;
        110: string;
        125: string;
        150: string;
        200: string;
    };
    borderColor: {
        inherit: string;
        current: string;
        transparent: string;
        black: string;
        white: string;
        appearing: string;
        "filled-bg": string;
        description: string;
        dark: {
            DEFAULT: string;
            text: string;
            "text-hover": string;
        };
        light: {
            DEFAULT: string;
            text: string;
        };
        primary: {
            DEFAULT: string;
            shadow: string;
            label: string;
            hover: string;
            focus: string;
            border: string;
        };
        secondary: {
            DEFAULT: string;
            pinned: string;
            hover: string;
        };
        necessary: {
            DEFAULT: string;
            hover: string;
        };
        idle: {
            DEFAULT: string;
            border: string;
        };
        disabled: {
            DEFAULT: string;
        };
        card: {
            border: string;
            bg: string;
        };
        main: {
            bg: string;
        };
        table: {
            "zebra-light": string;
        };
        warning: {
            DEFAULT: string;
            shadow: string;
            hover: string;
        };
        terminate: {
            DEFAULT: string;
            hover: string;
        };
        error: {
            DEFAULT: string;
            hover: string;
        };
        prompt: {
            DEFAULT: string;
            hover: string;
        };
        success: {
            DEFAULT: string;
            hover: string;
        };
        DEFAULT: string;
    };
    borderOpacity: {
        0: string;
        5: string;
        10: string;
        20: string;
        25: string;
        30: string;
        40: string;
        50: string;
        60: string;
        70: string;
        75: string;
        80: string;
        90: string;
        95: string;
        100: string;
    };
    borderWidth: {
        0: string;
        2: string;
        4: string;
        8: string;
        DEFAULT: string;
    };
    boxShadowColor: {
        inherit: string;
        current: string;
        transparent: string;
        black: string;
        white: string;
        appearing: string;
        "filled-bg": string;
        description: string;
        dark: {
            DEFAULT: string;
            text: string;
            "text-hover": string;
        };
        light: {
            DEFAULT: string;
            text: string;
        };
        primary: {
            DEFAULT: string;
            shadow: string;
            label: string;
            hover: string;
            focus: string;
            border: string;
        };
        secondary: {
            DEFAULT: string;
            pinned: string;
            hover: string;
        };
        necessary: {
            DEFAULT: string;
            hover: string;
        };
        idle: {
            DEFAULT: string;
            border: string;
        };
        disabled: {
            DEFAULT: string;
        };
        card: {
            border: string;
            bg: string;
        };
        main: {
            bg: string;
        };
        table: {
            "zebra-light": string;
        };
        warning: {
            DEFAULT: string;
            shadow: string;
            hover: string;
        };
        terminate: {
            DEFAULT: string;
            hover: string;
        };
        error: {
            DEFAULT: string;
            hover: string;
        };
        prompt: {
            DEFAULT: string;
            hover: string;
        };
        success: {
            DEFAULT: string;
            hover: string;
        };
    };
    caretColor: {
        inherit: string;
        current: string;
        transparent: string;
        black: string;
        white: string;
        appearing: string;
        "filled-bg": string;
        description: string;
        dark: {
            DEFAULT: string;
            text: string;
            "text-hover": string;
        };
        light: {
            DEFAULT: string;
            text: string;
        };
        primary: {
            DEFAULT: string;
            shadow: string;
            label: string;
            hover: string;
            focus: string;
            border: string;
        };
        secondary: {
            DEFAULT: string;
            pinned: string;
            hover: string;
        };
        necessary: {
            DEFAULT: string;
            hover: string;
        };
        idle: {
            DEFAULT: string;
            border: string;
        };
        disabled: {
            DEFAULT: string;
        };
        card: {
            border: string;
            bg: string;
        };
        main: {
            bg: string;
        };
        table: {
            "zebra-light": string;
        };
        warning: {
            DEFAULT: string;
            shadow: string;
            hover: string;
        };
        terminate: {
            DEFAULT: string;
            hover: string;
        };
        error: {
            DEFAULT: string;
            hover: string;
        };
        prompt: {
            DEFAULT: string;
            hover: string;
        };
        success: {
            DEFAULT: string;
            hover: string;
        };
    };
    accentColor: {
        inherit: string;
        current: string;
        transparent: string;
        black: string;
        white: string;
        appearing: string;
        "filled-bg": string;
        description: string;
        dark: {
            DEFAULT: string;
            text: string;
            "text-hover": string;
        };
        light: {
            DEFAULT: string;
            text: string;
        };
        primary: {
            DEFAULT: string;
            shadow: string;
            label: string;
            hover: string;
            focus: string;
            border: string;
        };
        secondary: {
            DEFAULT: string;
            pinned: string;
            hover: string;
        };
        necessary: {
            DEFAULT: string;
            hover: string;
        };
        idle: {
            DEFAULT: string;
            border: string;
        };
        disabled: {
            DEFAULT: string;
        };
        card: {
            border: string;
            bg: string;
        };
        main: {
            bg: string;
        };
        table: {
            "zebra-light": string;
        };
        warning: {
            DEFAULT: string;
            shadow: string;
            hover: string;
        };
        terminate: {
            DEFAULT: string;
            hover: string;
        };
        error: {
            DEFAULT: string;
            hover: string;
        };
        prompt: {
            DEFAULT: string;
            hover: string;
        };
        success: {
            DEFAULT: string;
            hover: string;
        };
        auto: string;
    };
    contrast: {
        0: string;
        50: string;
        75: string;
        100: string;
        125: string;
        150: string;
        200: string;
    };
    container: {};
    content: {
        none: string;
    };
    cursor: {
        auto: string;
        default: string;
        pointer: string;
        wait: string;
        text: string;
        move: string;
        help: string;
        "not-allowed": string;
        none: string;
        "context-menu": string;
        progress: string;
        cell: string;
        crosshair: string;
        "vertical-text": string;
        alias: string;
        copy: string;
        "no-drop": string;
        grab: string;
        grabbing: string;
        "all-scroll": string;
        "col-resize": string;
        "row-resize": string;
        "n-resize": string;
        "e-resize": string;
        "s-resize": string;
        "w-resize": string;
        "ne-resize": string;
        "nw-resize": string;
        "se-resize": string;
        "sw-resize": string;
        "ew-resize": string;
        "ns-resize": string;
        "nesw-resize": string;
        "nwse-resize": string;
        "zoom-in": string;
        "zoom-out": string;
    };
    divideColor: {
        inherit: string;
        current: string;
        transparent: string;
        black: string;
        white: string;
        appearing: string;
        "filled-bg": string;
        description: string;
        dark: {
            DEFAULT: string;
            text: string;
            "text-hover": string;
        };
        light: {
            DEFAULT: string;
            text: string;
        };
        primary: {
            DEFAULT: string;
            shadow: string;
            label: string;
            hover: string;
            focus: string;
            border: string;
        };
        secondary: {
            DEFAULT: string;
            pinned: string;
            hover: string;
        };
        necessary: {
            DEFAULT: string;
            hover: string;
        };
        idle: {
            DEFAULT: string;
            border: string;
        };
        disabled: {
            DEFAULT: string;
        };
        card: {
            border: string;
            bg: string;
        };
        main: {
            bg: string;
        };
        table: {
            "zebra-light": string;
        };
        warning: {
            DEFAULT: string;
            shadow: string;
            hover: string;
        };
        terminate: {
            DEFAULT: string;
            hover: string;
        };
        error: {
            DEFAULT: string;
            hover: string;
        };
        prompt: {
            DEFAULT: string;
            hover: string;
        };
        success: {
            DEFAULT: string;
            hover: string;
        };
        DEFAULT: string;
    };
    divideOpacity: {
        0: string;
        5: string;
        10: string;
        20: string;
        25: string;
        30: string;
        40: string;
        50: string;
        60: string;
        70: string;
        75: string;
        80: string;
        90: string;
        95: string;
        100: string;
    };
    divideWidth: {
        0: string;
        2: string;
        4: string;
        8: string;
        DEFAULT: string;
    };
    dropShadow: {
        sm: string;
        DEFAULT: string[];
        md: string[];
        lg: string[];
        xl: string[];
        "2xl": string;
        none: string;
    };
    fill: {
        inherit: string;
        current: string;
        transparent: string;
        black: string;
        white: string;
        appearing: string;
        "filled-bg": string;
        description: string;
        dark: {
            DEFAULT: string;
            text: string;
            "text-hover": string;
        };
        light: {
            DEFAULT: string;
            text: string;
        };
        primary: {
            DEFAULT: string;
            shadow: string;
            label: string;
            hover: string;
            focus: string;
            border: string;
        };
        secondary: {
            DEFAULT: string;
            pinned: string;
            hover: string;
        };
        necessary: {
            DEFAULT: string;
            hover: string;
        };
        idle: {
            DEFAULT: string;
            border: string;
        };
        disabled: {
            DEFAULT: string;
        };
        card: {
            border: string;
            bg: string;
        };
        main: {
            bg: string;
        };
        table: {
            "zebra-light": string;
        };
        warning: {
            DEFAULT: string;
            shadow: string;
            hover: string;
        };
        terminate: {
            DEFAULT: string;
            hover: string;
        };
        error: {
            DEFAULT: string;
            hover: string;
        };
        prompt: {
            DEFAULT: string;
            hover: string;
        };
        success: {
            DEFAULT: string;
            hover: string;
        };
    };
    grayscale: {
        0: string;
        DEFAULT: string;
    };
    hueRotate: {
        0: string;
        15: string;
        30: string;
        60: string;
        90: string;
        180: string;
    };
    invert: {
        0: string;
        DEFAULT: string;
    };
    flex: {
        1: string;
        auto: string;
        initial: string;
        none: string;
    };
    flexBasis: {
        0: string;
        1: string;
        2: string;
        3: string;
        4: string;
        5: string;
        6: string;
        7: string;
        8: string;
        9: string;
        10: string;
        11: string;
        12: string;
        14: string;
        16: string;
        20: string;
        24: string;
        28: string;
        32: string;
        36: string;
        40: string;
        44: string;
        48: string;
        52: string;
        56: string;
        60: string;
        64: string;
        72: string;
        80: string;
        96: string;
        auto: string;
        px: string;
        0.5: string;
        1.5: string;
        2.5: string;
        3.5: string;
        0.75: string;
        1.2: string;
        2.4: string;
        3.25: string;
        4.5: string;
        5.5: string;
        8.5: string;
        9.3: string;
        10.5: string;
        11.8: string;
        12.8: string;
        15.9: string;
        "1/2": string;
        "1/3": string;
        "2/3": string;
        "1/4": string;
        "2/4": string;
        "3/4": string;
        "1/5": string;
        "2/5": string;
        "3/5": string;
        "4/5": string;
        "1/6": string;
        "2/6": string;
        "3/6": string;
        "4/6": string;
        "5/6": string;
        "1/12": string;
        "2/12": string;
        "3/12": string;
        "4/12": string;
        "5/12": string;
        "6/12": string;
        "7/12": string;
        "8/12": string;
        "9/12": string;
        "10/12": string;
        "11/12": string;
        full: string;
    };
    flexGrow: {
        0: string;
        DEFAULT: string;
    };
    flexShrink: {
        0: string;
        DEFAULT: string;
    };
    gap: {
        0: string;
        1: string;
        2: string;
        3: string;
        4: string;
        5: string;
        6: string;
        7: string;
        8: string;
        9: string;
        10: string;
        11: string;
        12: string;
        14: string;
        16: string;
        20: string;
        24: string;
        28: string;
        32: string;
        36: string;
        40: string;
        44: string;
        48: string;
        52: string;
        56: string;
        60: string;
        64: string;
        72: string;
        80: string;
        96: string;
        px: string;
        0.5: string;
        1.5: string;
        2.5: string;
        3.5: string;
        0.75: string;
        1.2: string;
        2.4: string;
        3.25: string;
        4.5: string;
        5.5: string;
        8.5: string;
        9.3: string;
        10.5: string;
        11.8: string;
        12.8: string;
        15.9: string;
    };
    gradientColorStops: {
        inherit: string;
        current: string;
        transparent: string;
        black: string;
        white: string;
        appearing: string;
        "filled-bg": string;
        description: string;
        dark: {
            DEFAULT: string;
            text: string;
            "text-hover": string;
        };
        light: {
            DEFAULT: string;
            text: string;
        };
        primary: {
            DEFAULT: string;
            shadow: string;
            label: string;
            hover: string;
            focus: string;
            border: string;
        };
        secondary: {
            DEFAULT: string;
            pinned: string;
            hover: string;
        };
        necessary: {
            DEFAULT: string;
            hover: string;
        };
        idle: {
            DEFAULT: string;
            border: string;
        };
        disabled: {
            DEFAULT: string;
        };
        card: {
            border: string;
            bg: string;
        };
        main: {
            bg: string;
        };
        table: {
            "zebra-light": string;
        };
        warning: {
            DEFAULT: string;
            shadow: string;
            hover: string;
        };
        terminate: {
            DEFAULT: string;
            hover: string;
        };
        error: {
            DEFAULT: string;
            hover: string;
        };
        prompt: {
            DEFAULT: string;
            hover: string;
        };
        success: {
            DEFAULT: string;
            hover: string;
        };
    };
    gridAutoColumns: {
        auto: string;
        min: string;
        max: string;
        fr: string;
    };
    gridAutoRows: {
        auto: string;
        min: string;
        max: string;
        fr: string;
    };
    gridColumn: {
        auto: string;
        "span-1": string;
        "span-2": string;
        "span-3": string;
        "span-4": string;
        "span-5": string;
        "span-6": string;
        "span-7": string;
        "span-8": string;
        "span-9": string;
        "span-10": string;
        "span-11": string;
        "span-12": string;
        "span-full": string;
    };
    gridColumnEnd: {
        1: string;
        2: string;
        3: string;
        4: string;
        5: string;
        6: string;
        7: string;
        8: string;
        9: string;
        10: string;
        11: string;
        12: string;
        13: string;
        auto: string;
    };
    gridColumnStart: {
        1: string;
        2: string;
        3: string;
        4: string;
        5: string;
        6: string;
        7: string;
        8: string;
        9: string;
        10: string;
        11: string;
        12: string;
        13: string;
        auto: string;
    };
    gridRow: {
        auto: string;
        "span-1": string;
        "span-2": string;
        "span-3": string;
        "span-4": string;
        "span-5": string;
        "span-6": string;
        "span-full": string;
    };
    gridRowStart: {
        1: string;
        2: string;
        3: string;
        4: string;
        5: string;
        6: string;
        7: string;
        auto: string;
    };
    gridRowEnd: {
        1: string;
        2: string;
        3: string;
        4: string;
        5: string;
        6: string;
        7: string;
        auto: string;
    };
    gridTemplateColumns: {
        1: string;
        2: string;
        3: string;
        4: string;
        5: string;
        6: string;
        7: string;
        8: string;
        9: string;
        10: string;
        11: string;
        12: string;
        none: string;
    };
    gridTemplateRows: {
        1: string;
        2: string;
        3: string;
        4: string;
        5: string;
        6: string;
        none: string;
    };
    height: {
        0: string;
        1: string;
        2: string;
        3: string;
        4: string;
        5: string;
        6: string;
        7: string;
        8: string;
        9: string;
        10: string;
        11: string;
        12: string;
        14: string;
        16: string;
        20: string;
        24: string;
        28: string;
        32: string;
        36: string;
        40: string;
        44: string;
        48: string;
        52: string;
        56: string;
        60: string;
        64: string;
        72: string;
        80: string;
        96: string;
        auto: string;
        px: string;
        0.5: string;
        1.5: string;
        2.5: string;
        3.5: string;
        0.75: string;
        1.2: string;
        2.4: string;
        3.25: string;
        4.5: string;
        5.5: string;
        8.5: string;
        9.3: string;
        10.5: string;
        11.8: string;
        12.8: string;
        15.9: string;
        "1/2": string;
        "1/3": string;
        "2/3": string;
        "1/4": string;
        "2/4": string;
        "3/4": string;
        "1/5": string;
        "2/5": string;
        "3/5": string;
        "4/5": string;
        "1/6": string;
        "2/6": string;
        "3/6": string;
        "4/6": string;
        "5/6": string;
        full: string;
        screen: string;
        min: string;
        max: string;
        fit: string;
    };
    inset: {
        0: string;
        1: string;
        2: string;
        3: string;
        4: string;
        5: string;
        6: string;
        7: string;
        8: string;
        9: string;
        10: string;
        11: string;
        12: string;
        14: string;
        16: string;
        20: string;
        24: string;
        28: string;
        32: string;
        36: string;
        40: string;
        44: string;
        48: string;
        52: string;
        56: string;
        60: string;
        64: string;
        72: string;
        80: string;
        96: string;
        auto: string;
        px: string;
        0.5: string;
        1.5: string;
        2.5: string;
        3.5: string;
        0.75: string;
        1.2: string;
        2.4: string;
        3.25: string;
        4.5: string;
        5.5: string;
        8.5: string;
        9.3: string;
        10.5: string;
        11.8: string;
        12.8: string;
        15.9: string;
        "1/2": string;
        "1/3": string;
        "2/3": string;
        "1/4": string;
        "2/4": string;
        "3/4": string;
        full: string;
    };
    letterSpacing: {
        tighter: string;
        tight: string;
        normal: string;
        wide: string;
        wider: string;
        widest: string;
    };
    listStyleType: {
        none: string;
        disc: string;
        decimal: string;
    };
    margin: {
        0: string;
        1: string;
        2: string;
        3: string;
        4: string;
        5: string;
        6: string;
        7: string;
        8: string;
        9: string;
        10: string;
        11: string;
        12: string;
        14: string;
        16: string;
        20: string;
        24: string;
        28: string;
        32: string;
        36: string;
        40: string;
        44: string;
        48: string;
        52: string;
        56: string;
        60: string;
        64: string;
        72: string;
        80: string;
        96: string;
        auto: string;
        px: string;
        0.5: string;
        1.5: string;
        2.5: string;
        3.5: string;
        0.75: string;
        1.2: string;
        2.4: string;
        3.25: string;
        4.5: string;
        5.5: string;
        8.5: string;
        9.3: string;
        10.5: string;
        11.8: string;
        12.8: string;
        15.9: string;
    };
    maxHeight: {
        0: string;
        1: string;
        2: string;
        3: string;
        4: string;
        5: string;
        6: string;
        7: string;
        8: string;
        9: string;
        10: string;
        11: string;
        12: string;
        14: string;
        16: string;
        20: string;
        24: string;
        28: string;
        32: string;
        36: string;
        40: string;
        44: string;
        48: string;
        52: string;
        56: string;
        60: string;
        64: string;
        72: string;
        80: string;
        96: string;
        px: string;
        0.5: string;
        1.5: string;
        2.5: string;
        3.5: string;
        0.75: string;
        1.2: string;
        2.4: string;
        3.25: string;
        4.5: string;
        5.5: string;
        8.5: string;
        9.3: string;
        10.5: string;
        11.8: string;
        12.8: string;
        15.9: string;
        full: string;
        screen: string;
        min: string;
        max: string;
        fit: string;
    };
    maxWidth: {
        0: string;
        none: string;
        xs: string;
        sm: string;
        md: string;
        lg: string;
        xl: string;
        "2xl": string;
        "3xl": string;
        "4xl": string;
        "5xl": string;
        "6xl": string;
        "7xl": string;
        full: string;
        min: string;
        max: string;
        fit: string;
        prose: string;
        "screen-sm": string;
        "screen-md": string;
        "screen-lg": string;
        "screen-xl": string;
        "screen-2xl": string;
    };
    minHeight: {
        0: string;
        full: string;
        screen: string;
        min: string;
        max: string;
        fit: string;
    };
    objectPosition: {
        bottom: string;
        center: string;
        left: string;
        "left-bottom": string;
        "left-top": string;
        right: string;
        "right-bottom": string;
        "right-top": string;
        top: string;
    };
    opacity: {
        0: string;
        5: string;
        10: string;
        20: string;
        25: string;
        30: string;
        40: string;
        50: string;
        60: string;
        70: string;
        75: string;
        80: string;
        90: string;
        95: string;
        100: string;
    };
    order: {
        1: string;
        2: string;
        3: string;
        4: string;
        5: string;
        6: string;
        7: string;
        8: string;
        9: string;
        10: string;
        11: string;
        12: string;
        first: string;
        last: string;
        none: string;
    };
    padding: {
        0: string;
        1: string;
        2: string;
        3: string;
        4: string;
        5: string;
        6: string;
        7: string;
        8: string;
        9: string;
        10: string;
        11: string;
        12: string;
        14: string;
        16: string;
        20: string;
        24: string;
        28: string;
        32: string;
        36: string;
        40: string;
        44: string;
        48: string;
        52: string;
        56: string;
        60: string;
        64: string;
        72: string;
        80: string;
        96: string;
        px: string;
        0.5: string;
        1.5: string;
        2.5: string;
        3.5: string;
        0.75: string;
        1.2: string;
        2.4: string;
        3.25: string;
        4.5: string;
        5.5: string;
        8.5: string;
        9.3: string;
        10.5: string;
        11.8: string;
        12.8: string;
        15.9: string;
    };
    placeholderColor: {
        inherit: string;
        current: string;
        transparent: string;
        black: string;
        white: string;
        appearing: string;
        "filled-bg": string;
        description: string;
        dark: {
            DEFAULT: string;
            text: string;
            "text-hover": string;
        };
        light: {
            DEFAULT: string;
            text: string;
        };
        primary: {
            DEFAULT: string;
            shadow: string;
            label: string;
            hover: string;
            focus: string;
            border: string;
        };
        secondary: {
            DEFAULT: string;
            pinned: string;
            hover: string;
        };
        necessary: {
            DEFAULT: string;
            hover: string;
        };
        idle: {
            DEFAULT: string;
            border: string;
        };
        disabled: {
            DEFAULT: string;
        };
        card: {
            border: string;
            bg: string;
        };
        main: {
            bg: string;
        };
        table: {
            "zebra-light": string;
        };
        warning: {
            DEFAULT: string;
            shadow: string;
            hover: string;
        };
        terminate: {
            DEFAULT: string;
            hover: string;
        };
        error: {
            DEFAULT: string;
            hover: string;
        };
        prompt: {
            DEFAULT: string;
            hover: string;
        };
        success: {
            DEFAULT: string;
            hover: string;
        };
    };
    placeholderOpacity: {
        0: string;
        5: string;
        10: string;
        20: string;
        25: string;
        30: string;
        40: string;
        50: string;
        60: string;
        70: string;
        75: string;
        80: string;
        90: string;
        95: string;
        100: string;
    };
    outlineColor: {
        inherit: string;
        current: string;
        transparent: string;
        black: string;
        white: string;
        appearing: string;
        "filled-bg": string;
        description: string;
        dark: {
            DEFAULT: string;
            text: string;
            "text-hover": string;
        };
        light: {
            DEFAULT: string;
            text: string;
        };
        primary: {
            DEFAULT: string;
            shadow: string;
            label: string;
            hover: string;
            focus: string;
            border: string;
        };
        secondary: {
            DEFAULT: string;
            pinned: string;
            hover: string;
        };
        necessary: {
            DEFAULT: string;
            hover: string;
        };
        idle: {
            DEFAULT: string;
            border: string;
        };
        disabled: {
            DEFAULT: string;
        };
        card: {
            border: string;
            bg: string;
        };
        main: {
            bg: string;
        };
        table: {
            "zebra-light": string;
        };
        warning: {
            DEFAULT: string;
            shadow: string;
            hover: string;
        };
        terminate: {
            DEFAULT: string;
            hover: string;
        };
        error: {
            DEFAULT: string;
            hover: string;
        };
        prompt: {
            DEFAULT: string;
            hover: string;
        };
        success: {
            DEFAULT: string;
            hover: string;
        };
    };
    outlineOffset: {
        0: string;
        1: string;
        2: string;
        4: string;
        8: string;
    };
    outlineWidth: {
        0: string;
        1: string;
        2: string;
        4: string;
        8: string;
    };
    ringColor: {
        DEFAULT: string;
        inherit: string;
        current: string;
        transparent: string;
        black: string;
        white: string;
        appearing: string;
        "filled-bg": string;
        description: string;
        dark: {
            DEFAULT: string;
            text: string;
            "text-hover": string;
        };
        light: {
            DEFAULT: string;
            text: string;
        };
        primary: {
            DEFAULT: string;
            shadow: string;
            label: string;
            hover: string;
            focus: string;
            border: string;
        };
        secondary: {
            DEFAULT: string;
            pinned: string;
            hover: string;
        };
        necessary: {
            DEFAULT: string;
            hover: string;
        };
        idle: {
            DEFAULT: string;
            border: string;
        };
        disabled: {
            DEFAULT: string;
        };
        card: {
            border: string;
            bg: string;
        };
        main: {
            bg: string;
        };
        table: {
            "zebra-light": string;
        };
        warning: {
            DEFAULT: string;
            shadow: string;
            hover: string;
        };
        terminate: {
            DEFAULT: string;
            hover: string;
        };
        error: {
            DEFAULT: string;
            hover: string;
        };
        prompt: {
            DEFAULT: string;
            hover: string;
        };
        success: {
            DEFAULT: string;
            hover: string;
        };
    };
    ringOffsetColor: {
        inherit: string;
        current: string;
        transparent: string;
        black: string;
        white: string;
        appearing: string;
        "filled-bg": string;
        description: string;
        dark: {
            DEFAULT: string;
            text: string;
            "text-hover": string;
        };
        light: {
            DEFAULT: string;
            text: string;
        };
        primary: {
            DEFAULT: string;
            shadow: string;
            label: string;
            hover: string;
            focus: string;
            border: string;
        };
        secondary: {
            DEFAULT: string;
            pinned: string;
            hover: string;
        };
        necessary: {
            DEFAULT: string;
            hover: string;
        };
        idle: {
            DEFAULT: string;
            border: string;
        };
        disabled: {
            DEFAULT: string;
        };
        card: {
            border: string;
            bg: string;
        };
        main: {
            bg: string;
        };
        table: {
            "zebra-light": string;
        };
        warning: {
            DEFAULT: string;
            shadow: string;
            hover: string;
        };
        terminate: {
            DEFAULT: string;
            hover: string;
        };
        error: {
            DEFAULT: string;
            hover: string;
        };
        prompt: {
            DEFAULT: string;
            hover: string;
        };
        success: {
            DEFAULT: string;
            hover: string;
        };
    };
    ringOffsetWidth: {
        0: string;
        1: string;
        2: string;
        4: string;
        8: string;
    };
    ringOpacity: {
        0: string;
        5: string;
        10: string;
        20: string;
        25: string;
        30: string;
        40: string;
        50: string;
        60: string;
        70: string;
        75: string;
        80: string;
        90: string;
        95: string;
        100: string;
        DEFAULT: string;
    };
    ringWidth: {
        0: string;
        1: string;
        2: string;
        4: string;
        8: string;
        DEFAULT: string;
    };
    rotate: {
        0: string;
        1: string;
        2: string;
        3: string;
        6: string;
        12: string;
        45: string;
        90: string;
        180: string;
    };
    saturate: {
        0: string;
        50: string;
        100: string;
        150: string;
        200: string;
    };
    scale: {
        0: string;
        50: string;
        75: string;
        90: string;
        95: string;
        100: string;
        105: string;
        110: string;
        125: string;
        150: string;
    };
    scrollMargin: {
        0: string;
        1: string;
        2: string;
        3: string;
        4: string;
        5: string;
        6: string;
        7: string;
        8: string;
        9: string;
        10: string;
        11: string;
        12: string;
        14: string;
        16: string;
        20: string;
        24: string;
        28: string;
        32: string;
        36: string;
        40: string;
        44: string;
        48: string;
        52: string;
        56: string;
        60: string;
        64: string;
        72: string;
        80: string;
        96: string;
        px: string;
        0.5: string;
        1.5: string;
        2.5: string;
        3.5: string;
        0.75: string;
        1.2: string;
        2.4: string;
        3.25: string;
        4.5: string;
        5.5: string;
        8.5: string;
        9.3: string;
        10.5: string;
        11.8: string;
        12.8: string;
        15.9: string;
    };
    scrollPadding: {
        0: string;
        1: string;
        2: string;
        3: string;
        4: string;
        5: string;
        6: string;
        7: string;
        8: string;
        9: string;
        10: string;
        11: string;
        12: string;
        14: string;
        16: string;
        20: string;
        24: string;
        28: string;
        32: string;
        36: string;
        40: string;
        44: string;
        48: string;
        52: string;
        56: string;
        60: string;
        64: string;
        72: string;
        80: string;
        96: string;
        px: string;
        0.5: string;
        1.5: string;
        2.5: string;
        3.5: string;
        0.75: string;
        1.2: string;
        2.4: string;
        3.25: string;
        4.5: string;
        5.5: string;
        8.5: string;
        9.3: string;
        10.5: string;
        11.8: string;
        12.8: string;
        15.9: string;
    };
    sepia: {
        0: string;
        DEFAULT: string;
    };
    skew: {
        0: string;
        1: string;
        2: string;
        3: string;
        6: string;
        12: string;
    };
    space: {
        0: string;
        1: string;
        2: string;
        3: string;
        4: string;
        5: string;
        6: string;
        7: string;
        8: string;
        9: string;
        10: string;
        11: string;
        12: string;
        14: string;
        16: string;
        20: string;
        24: string;
        28: string;
        32: string;
        36: string;
        40: string;
        44: string;
        48: string;
        52: string;
        56: string;
        60: string;
        64: string;
        72: string;
        80: string;
        96: string;
        px: string;
        0.5: string;
        1.5: string;
        2.5: string;
        3.5: string;
        0.75: string;
        1.2: string;
        2.4: string;
        3.25: string;
        4.5: string;
        5.5: string;
        8.5: string;
        9.3: string;
        10.5: string;
        11.8: string;
        12.8: string;
        15.9: string;
    };
    stroke: {
        inherit: string;
        current: string;
        transparent: string;
        black: string;
        white: string;
        appearing: string;
        "filled-bg": string;
        description: string;
        dark: {
            DEFAULT: string;
            text: string;
            "text-hover": string;
        };
        light: {
            DEFAULT: string;
            text: string;
        };
        primary: {
            DEFAULT: string;
            shadow: string;
            label: string;
            hover: string;
            focus: string;
            border: string;
        };
        secondary: {
            DEFAULT: string;
            pinned: string;
            hover: string;
        };
        necessary: {
            DEFAULT: string;
            hover: string;
        };
        idle: {
            DEFAULT: string;
            border: string;
        };
        disabled: {
            DEFAULT: string;
        };
        card: {
            border: string;
            bg: string;
        };
        main: {
            bg: string;
        };
        table: {
            "zebra-light": string;
        };
        warning: {
            DEFAULT: string;
            shadow: string;
            hover: string;
        };
        terminate: {
            DEFAULT: string;
            hover: string;
        };
        error: {
            DEFAULT: string;
            hover: string;
        };
        prompt: {
            DEFAULT: string;
            hover: string;
        };
        success: {
            DEFAULT: string;
            hover: string;
        };
    };
    strokeWidth: {
        0: string;
        1: string;
        2: string;
    };
    textColor: {
        inherit: string;
        current: string;
        transparent: string;
        black: string;
        white: string;
        appearing: string;
        "filled-bg": string;
        description: string;
        dark: {
            DEFAULT: string;
            text: string;
            "text-hover": string;
        };
        light: {
            DEFAULT: string;
            text: string;
        };
        primary: {
            DEFAULT: string;
            shadow: string;
            label: string;
            hover: string;
            focus: string;
            border: string;
        };
        secondary: {
            DEFAULT: string;
            pinned: string;
            hover: string;
        };
        necessary: {
            DEFAULT: string;
            hover: string;
        };
        idle: {
            DEFAULT: string;
            border: string;
        };
        disabled: {
            DEFAULT: string;
        };
        card: {
            border: string;
            bg: string;
        };
        main: {
            bg: string;
        };
        table: {
            "zebra-light": string;
        };
        warning: {
            DEFAULT: string;
            shadow: string;
            hover: string;
        };
        terminate: {
            DEFAULT: string;
            hover: string;
        };
        error: {
            DEFAULT: string;
            hover: string;
        };
        prompt: {
            DEFAULT: string;
            hover: string;
        };
        success: {
            DEFAULT: string;
            hover: string;
        };
    };
    textDecorationColor: {
        inherit: string;
        current: string;
        transparent: string;
        black: string;
        white: string;
        appearing: string;
        "filled-bg": string;
        description: string;
        dark: {
            DEFAULT: string;
            text: string;
            "text-hover": string;
        };
        light: {
            DEFAULT: string;
            text: string;
        };
        primary: {
            DEFAULT: string;
            shadow: string;
            label: string;
            hover: string;
            focus: string;
            border: string;
        };
        secondary: {
            DEFAULT: string;
            pinned: string;
            hover: string;
        };
        necessary: {
            DEFAULT: string;
            hover: string;
        };
        idle: {
            DEFAULT: string;
            border: string;
        };
        disabled: {
            DEFAULT: string;
        };
        card: {
            border: string;
            bg: string;
        };
        main: {
            bg: string;
        };
        table: {
            "zebra-light": string;
        };
        warning: {
            DEFAULT: string;
            shadow: string;
            hover: string;
        };
        terminate: {
            DEFAULT: string;
            hover: string;
        };
        error: {
            DEFAULT: string;
            hover: string;
        };
        prompt: {
            DEFAULT: string;
            hover: string;
        };
        success: {
            DEFAULT: string;
            hover: string;
        };
    };
    textDecorationThickness: {
        0: string;
        1: string;
        2: string;
        4: string;
        8: string;
        auto: string;
        "from-font": string;
    };
    textUnderlineOffset: {
        0: string;
        1: string;
        2: string;
        4: string;
        8: string;
        auto: string;
    };
    textIndent: {
        0: string;
        1: string;
        2: string;
        3: string;
        4: string;
        5: string;
        6: string;
        7: string;
        8: string;
        9: string;
        10: string;
        11: string;
        12: string;
        14: string;
        16: string;
        20: string;
        24: string;
        28: string;
        32: string;
        36: string;
        40: string;
        44: string;
        48: string;
        52: string;
        56: string;
        60: string;
        64: string;
        72: string;
        80: string;
        96: string;
        px: string;
        0.5: string;
        1.5: string;
        2.5: string;
        3.5: string;
        0.75: string;
        1.2: string;
        2.4: string;
        3.25: string;
        4.5: string;
        5.5: string;
        8.5: string;
        9.3: string;
        10.5: string;
        11.8: string;
        12.8: string;
        15.9: string;
    };
    textOpacity: {
        0: string;
        5: string;
        10: string;
        20: string;
        25: string;
        30: string;
        40: string;
        50: string;
        60: string;
        70: string;
        75: string;
        80: string;
        90: string;
        95: string;
        100: string;
    };
    transformOrigin: {
        center: string;
        top: string;
        "top-right": string;
        right: string;
        "bottom-right": string;
        bottom: string;
        "bottom-left": string;
        left: string;
        "top-left": string;
    };
    translate: {
        0: string;
        1: string;
        2: string;
        3: string;
        4: string;
        5: string;
        6: string;
        7: string;
        8: string;
        9: string;
        10: string;
        11: string;
        12: string;
        14: string;
        16: string;
        20: string;
        24: string;
        28: string;
        32: string;
        36: string;
        40: string;
        44: string;
        48: string;
        52: string;
        56: string;
        60: string;
        64: string;
        72: string;
        80: string;
        96: string;
        px: string;
        0.5: string;
        1.5: string;
        2.5: string;
        3.5: string;
        0.75: string;
        1.2: string;
        2.4: string;
        3.25: string;
        4.5: string;
        5.5: string;
        8.5: string;
        9.3: string;
        10.5: string;
        11.8: string;
        12.8: string;
        15.9: string;
        "1/2": string;
        "1/3": string;
        "2/3": string;
        "1/4": string;
        "2/4": string;
        "3/4": string;
        full: string;
    };
    width: {
        0: string;
        1: string;
        2: string;
        3: string;
        4: string;
        5: string;
        6: string;
        7: string;
        8: string;
        9: string;
        10: string;
        11: string;
        12: string;
        14: string;
        16: string;
        20: string;
        24: string;
        28: string;
        32: string;
        36: string;
        40: string;
        44: string;
        48: string;
        52: string;
        56: string;
        60: string;
        64: string;
        72: string;
        80: string;
        96: string;
        auto: string;
        px: string;
        0.5: string;
        1.5: string;
        2.5: string;
        3.5: string;
        0.75: string;
        1.2: string;
        2.4: string;
        3.25: string;
        4.5: string;
        5.5: string;
        8.5: string;
        9.3: string;
        10.5: string;
        11.8: string;
        12.8: string;
        15.9: string;
        "1/2": string;
        "1/3": string;
        "2/3": string;
        "1/4": string;
        "2/4": string;
        "3/4": string;
        "1/5": string;
        "2/5": string;
        "3/5": string;
        "4/5": string;
        "1/6": string;
        "2/6": string;
        "3/6": string;
        "4/6": string;
        "5/6": string;
        "1/12": string;
        "2/12": string;
        "3/12": string;
        "4/12": string;
        "5/12": string;
        "6/12": string;
        "7/12": string;
        "8/12": string;
        "9/12": string;
        "10/12": string;
        "11/12": string;
        full: string;
        screen: string;
        min: string;
        max: string;
        fit: string;
    };
    willChange: {
        auto: string;
        scroll: string;
        contents: string;
        transform: string;
    };
    zIndex: {
        0: string;
        10: string;
        20: string;
        30: string;
        40: string;
        50: string;
        auto: string;
    };
};
export default tailwindTheme;
