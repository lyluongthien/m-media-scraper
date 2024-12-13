
/** @type {import("eslint").Linter.Config} */
module.exports = {
  extends: [require.resolve('./base.js'),],
  plugins: ["only-warn"],
  globals: {
    React: true,
    JSX: true,
  },
  env: {
    browser: true,
  },
};
