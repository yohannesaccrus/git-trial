module.exports = [
  {
    files: ['*.js', '*.jsx'], // Target JavaScript and JSX files
    languageOptions: {
      parserOptions: {
        ecmaVersion: 2021, // Specify the ECMAScript version
        sourceType: 'module', // Allow use of imports
        ecmaFeatures: {
          jsx: true, // Enable JSX parsing
        },
      },
      global: {
        browser: true, // Enable browser global variables like `window`, `document`, etc.
        es2021: true, // Enable ES2021 global variables
      },
    },
    rules: {
      // Add any additional rules or overrides specific to these files
    },
  },
  // Add more objects as needed for different file types or contexts
];
