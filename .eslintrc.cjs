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
  plugins: ["@typescript-eslint", "vue", "simple-import-sort", "pii"],
  rules: {
    "simple-import-sort/imports": "warn",
    "simple-import-sort/exports": "warn",
    //! Better safe than sorry.
    "pii/no-phone-number": "error",
    "pii/no-email": "error",
    "pii/no-ip": "error",
    "pii/no-dob": "warn",
  },
};
