const { resolve } = require("node:path");

const project = resolve(process.cwd(), "tsconfig.json");

/** @type {import("eslint").Linter.Config} */
module.exports = {
  extends: [
    "eslint:recommended", 
    "plugin:prettier/recommended",
    "turbo",
  ], 
  plugins: ['@typescript-eslint/eslint-plugin', "only-warn", "import"],  // Make sure to include 'import' plugin
  settings: {
    "import/resolver": {
      typescript: {
        project,
      },
    },
  },
  rules: {
    "no-unused-vars": [
      "error", 
      { 
        "vars": "all",             // Enforce all variables to be used or removed
        "args": "none",            // Don't flag unused function arguments (unless you want this behavior)
        "ignoreRestSiblings": true, // Ignore unused properties when using rest syntax (e.g., `const { a, b, ...rest }`)
        "argsIgnorePattern": "^_"   // Optionally, you can ignore unused function args starting with '_'
      }
    ],
    "import/no-unused-modules": [
      "error", 
      { "unusedExports": true }
    ],
    "import/order": [
      "error",
      {
        "groups": [
          ["builtin", "external"], // Group for external modules
          "internal",               // Group for internal modules
          ["parent", "sibling", "index"], // Group for relative imports

          // Move css imports to the last position manually
          "object",   // For third-party libraries or modules
          "unknown",  // To catch and treat the css as the last import group
        ],
        "newlines-between": "always",  // Enforces newlines between import groups
        "alphabetize": {
          "order": "asc", // Alphabetize imports in ascending order
          "caseInsensitive": true,
        },
      },
    ],
  },
  ignorePatterns: [
    // Ignore dotfiles
    "^.*",
    "node_modules/",
    "dist/",
  ],
  overrides: [{ files: ["*.js?(x)", "*.ts?(x)"] }],
};
