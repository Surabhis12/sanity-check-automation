// eslint.config.js
import js from "@eslint/js";

export default [
  js.configs.recommended,
  {
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        console: "readonly", // <-- Fixes the no-undef console issue
      },
    },
    rules: {
      "no-unused-vars": "error",
      "no-undef": "error",
      "eqeqeq": "error",
      "no-console": "warn", // keeps it as a warning instead of fail
      "semi": ["error", "always"],
      "quotes": ["error", "double"]
    }
  }
];
