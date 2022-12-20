module.exports = {
  extends: [
    "airbnb",
    "prettier",
    "plugin:compat/recommended",
    "plugin:jest/recommended",
    "plugin:react/recommended",
    "plugin:import/typescript",
    "plugin:markdown/recommended",
    "plugin:storybook/recommended"
  ],
  env: {
    browser: true,
    es2021: true,
    node: true,
    jasmine: true,
    jest: true,
    es6: true
  },
  settings: {
    react: {
      version: "16.9"
    },
    polyfills: ["Promise", "URL"],
    "import/resolver": {
      typescript: {}
    }
  },
  parser: "@typescript-eslint/parser",
  plugins: ["react", "babel", "jest", "@typescript-eslint", "react-hooks", "unicorn", "markdown"],
  // https://github.com/typescript-eslint/typescript-eslint/issues/46#issuecomment-470486034
  overrides: [
    {
      files: ["*.ts", "*.tsx"],
      rules: {
        "@typescript-eslint/no-unused-vars": [
          2,
          {
            args: "none"
          }
        ],
        "no-unused-expressions": "off",
        "@typescript-eslint/no-unused-expressions": 2
      }
    },
    {
      // In v2, explicitly apply eslint-plugin-markdown's `markdown`
      // processor on any Markdown files you want to lint.
      files: ["src/components/*/demo/*.md"],
      processor: "markdown/markdown"
    },
    {
      // In v2, configuration for fenced code blocks is separate from the
      // containing Markdown file. Each code block has a virtual filename
      // appended to the Markdown file's path.
      files: [
        "src/components/*/demo/*.md/*.ts",
        "src/components/*/demo/*.md/*.tsx",
        "src/components/*/demo/*.md/*.js",
        "src/components/*/demo/*.md/*.jsx"
      ],
      // Configuration for fenced code blocks goes with the override for
      // the code block's virtual filename, for example:
      globals: {
        React: true,
        ReactDOM: true,
        mountNode: true
      },
      rules: {
        indent: 0,
        "default-case": 0,
        "eol-last": 0,
        "no-console": 0,
        "no-plusplus": 0,
        "no-script-url": 0,
        "prefer-rest-params": 0,
        "compat/compat": 0,
        "class-methods-use-this": 0,
        "react/no-access-state-in-setstate": 0,
        "react/destructuring-assignment": 0,
        "react/no-multi-comp": 0,
        "react/no-array-index-key": 0,
        "jsx-a11y/href-no-hash": 0,
        "jsx-a11y/control-has-associated-label": 0,
        "import/no-extraneous-dependencies": 0
      }
    }
  ],
  rules: {
    "no-nested-ternary": 0,
    "no-delete-var": "error",
    "no-dupe-args": "error",
    "no-dupe-class-members": "error",
    "react/self-closing-comp": "error",
    "no-dupe-keys": "error",
    "no-duplicate-case": "error",
    "import/no-named-as-default": 0,
    "react/react-in-jsx-scope": 0,
    "import/prefer-default-export": 0,
    "react/jsx-one-expression-per-line": 0,
    "react/prop-types": 0,
    "react/forbid-prop-types": 0,
    "react/jsx-indent": 0,
    "react/jsx-wrap-multilines": [
      "error",
      {
        declaration: false,
        assignment: false
      }
    ],
    "jsx-a11y/label-has-associated-control": [
      "error",
      {
        required: {
          some: ["nesting", "id"]
        }
      }
    ],
    "jsx-a11y/label-has-for": [
      "error",
      {
        required: {
          some: ["nesting", "id"]
        }
      }
    ],
    "react/function-component-definition": 0,
    "react/jsx-filename-extension": 0,
    "react/state-in-constructor": 0,
    "react/jsx-props-no-spreading": 0,
    "react/destructuring-assignment": 0,
    // TODO: remove later
    "react/require-default-props": 0,
    "react/sort-comp": 0,
    "react/display-name": 0,
    "react/static-property-placement": 0,
    "react/jsx-no-bind": 0,
    // Should not check test file
    "react/no-find-dom-node": 0,
    "react/no-unused-prop-types": 0,
    "react/default-props-match-prop-types": 0,
    "react-hooks/rules-of-hooks": 2,
    // Checks rules of Hooks
    "import/extensions": 0,
    "import/no-cycle": 0,
    "import/no-extraneous-dependencies": [
      "error",
      {
        devDependencies: [
          "tests/**",
          "scripts/**",
          "**/*.test.js",
          "**/**/**/*.test.tsx",
          "**/__tests__/*",
          "*.config.js",
          "**/*.md"
        ]
      }
    ],
    "jsx-a11y/no-static-element-interactions": 0,
    "jsx-a11y/anchor-has-content": 0,
    "jsx-a11y/click-events-have-key-events": 0,
    "jsx-a11y/anchor-is-valid": 0,
    "jsx-a11y/no-noninteractive-element-interactions": 0,
    // label-has-for has been deprecated
    // https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/label-has-for.md
    "comma-dangle": ["error", "never"],
    // 'consistent-return': 0, // TODO: remove later
    // 'no-param-reassign': 0, // TODO: remove later
    "no-underscore-dangle": 0,
    // for (let i = 0; i < len; i++)
    "no-plusplus": 0,
    // https://eslint.org/docs/rules/no-continue
    // labeledLoop is conflicted with `eslint . --fix`
    "no-continue": 0,
    // ban this for Number.isNaN needs polyfill
    "no-restricted-globals": 0,
    "max-classes-per-file": 0,
    "jest/no-test-callback": 0,
    "jest/expect-expect": 0,
    "jest/no-done-callback": 0,
    "jest/valid-title": 0,
    "jest/no-conditional-expect": 0,
    "unicorn/better-regex": 2,
    "unicorn/prefer-string-trim-start-end": 2,
    "unicorn/expiring-todo-comments": 2,
    "unicorn/no-abusive-eslint-disable": 2,
    // https://github.com/typescript-eslint/typescript-eslint/issues/2540#issuecomment-692866111
    "no-use-before-define": 0,
    "@typescript-eslint/no-use-before-define": 2,
    "no-shadow": 0,
    "@typescript-eslint/no-shadow": [
      2,
      {
        ignoreTypeValueShadow: true
      }
    ],
    // https://github.com/typescript-eslint/typescript-eslint/issues/2528#issuecomment-689369395
    "no-undef": 0
  },
  globals: {
    gtag: true
  }
};
