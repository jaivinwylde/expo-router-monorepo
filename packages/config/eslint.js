module.exports = {
  env: {
    browser: true,
    node: true,
    "react-native/react-native": true,
  },
  extends: [
    "next",
    "next/core-web-vitals",
    "plugin:@next/next/recommended",
    "plugin:react/recommended",
    "plugin:react-native/all",
    "plugin:@tanstack/eslint-plugin-query/recommended",
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:import/recommended",
    "plugin:import/typescript",
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:prettier/recommended",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: "module",
  },
  plugins: [
    "react-native",
    "sort-destructure-keys",
    "sort-keys-fix",
    "@tanstack/query",
  ],
  rules: {
    "@tanstack/query/exhaustive-deps": "error",
    "@tanstack/query/prefer-query-object-syntax": "error",
    "@typescript-eslint/consistent-type-imports": [
      "error",
      { prefer: "type-imports" },
    ],
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "import/newline-after-import": ["error", { count: 1 }],
    "import/no-namespace": 2,
    "import/no-unresolved": "off",
    "import/order": [
      "error",
      {
        alphabetize: { caseInsensitive: true, order: "asc" },
        groups: [
          "builtin",
          "index",
          "sibling",
          "parent",
          "internal",
          "external",
          "object",
          "type",
          "unknown",
        ],
        "newlines-between": "always",
        warnOnUnassignedImports: true,
      },
    ],
    "jsx-a11y/alt-text": "off",
    "linebreak-style": ["error", "unix"],
    "no-constant-condition": ["error", { checkLoops: false }],
    "no-unused-vars": "off",
    "react/display-name": "off",
    "react/react-in-jsx-scope": "off",
    "react-hooks/exhaustive-deps": [
      "warn",
      {
        additionalHooks: "(useDerivedValue|useAnimatedStyle|useAnimatedProps)",
      },
    ],
    "react-native/no-color-literals": "off",
    "react-native/no-inline-styles": "off",
    "react-native/no-raw-text": "off",
    "react-native/no-single-element-style-arrays": "off",

    "sort-destructure-keys/sort-destructure-keys": [
      2,
      { caseSensitive: false },
    ],

    "sort-imports": [
      "error",
      {
        ignoreCase: true,
        ignoreDeclarationSort: true,
        ignoreMemberSort: false,
      },
    ],

    "sort-keys-fix/sort-keys-fix": [
      2,
      "asc",
      { caseSensitive: false, natural: true },
    ],
  },
  settings: {
    "import/ignore": ["react-native"],
  },
}
