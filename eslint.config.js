module.exports = {
  languageOptions: {
    parserOptions: {
      ecmaVersion: 2021, // Specify the ECMAScript version
      sourceType: "module", // Allow use of imports
      // Other parser options as needed
    },
    global: {
      env: {
        node: true, // Node.js global variables and Node.js scoping
        es2021: true, // Enable ES2021 globals
      },
    },
  },
  extends: [
    "eslint:recommended", // Use the recommended rules from ESLint
    "plugin:prettier/recommended", // Enable Prettier plugin
    // Add other configurations or plugins as needed
  ],
  rules: {
    // Customize rules if needed
    // For example, to override a rule from eslint:recommended
    // 'no-console': 'off',
  },
  // Add plugins and other configurations here
};
