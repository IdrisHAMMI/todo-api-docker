import js from "@eslint/js";
import globals from "globals";

export default [
  js.configs.recommended,
  {
    files: ["**/*.js"],
    languageOptions: {
      globals: {
        ...globals.node,    // Node.js globals 
        ...globals.jest,    // Jest globals
      },
      ecmaVersion: 2021,
      sourceType: "commonjs"
    },
    rules: {
      "no-unused-vars": ["error", { "argsIgnorePattern": "^_|next" }],
      "no-console": "off",
      "semi": ["error", "always"]
    }
  }
];