// @ts-check
module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:vue/vue3-essential",
    "@nuxt/eslint-config",
    "plugin:promise/recommended",
    "plugin:import/recommended",
    "plugin:security/recommended",
    "plugin:jsdoc/recommended",
    "prettier",
  ],
  overrides: [
    {
      env: {
        node: true,
      },
      files: [".eslintrc.{js,cjs}"],
      parserOptions: {
        sourceType: "script",
      },
    },
  ],
  parserOptions: {
    ecmaVersion: "latest",
    parser: "@typescript-eslint/parser",
    sourceType: "module",
  },
  plugins: [
    "@typescript-eslint",
    "vue",
    "simple-import-sort",
    "pii",
    "unicorn",
  ],
  rules: {
    "simple-import-sort/imports": "warn",
    "simple-import-sort/exports": "warn",
    //! Better safe than sorry.
    "pii/no-phone-number": "error",
    "pii/no-email": "error",
    "pii/no-ip": "error",
    "pii/no-dob": "warn",

    /*
     ?  Unicorn autofixable subset.
     ?
     ?  Only a subset of eslint-plugin-unicorn's rules were enabled within this
     ?  configuration. It's highly opinionated nature may prove to be too strict
     ?  for use, and even then only auto-fixable rules were enabled to get it
     ?  out of the user's way.
     */
    "no-lonely-if": "warn",

    "unicorn/better-regex": "warn",
    "unicorn/catch-error-name": ["warn", {}],
    "unicorn/explicit-length-check": "warn",
    "unicorn/new-for-builtins": "warn",
    "unicorn/no-for-loop": "warn",
    "unicorn/no-instanceof-array": "warn",
    "unicorn/no-lonely-if": "warn",
    "unicorn/no-new-array": "warn",
    "unicorn/no-typeof-undefined": "warn",
    "unicorn/no-useless-length-check": "warn",
    "unicorn/no-useless-spread": "warn",
    "unicorn/numeric-separators-style": "warn",
    "unicorn/prefer-array-flat": "warn",
    "unicorn/prefer-array-flat-map": "warn",
    "unicorn/prefer-date-now": "warn",
    "unicorn/prefer-keyboard-event-key": "warn",
    "unicorn/prefer-modern-math-apis": "warn",
    "unicorn/prefer-node-protocol": "warn",
    "unicorn/prefer-set-size": "warn",
    "unicorn/require-array-join-separator": "warn",
  },
};
