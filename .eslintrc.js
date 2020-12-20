// https://eslint.org/docs/user-guide/configuring

module.exports = {
 root: true,
 parserOptions: {
  parser: 'babel-eslint',
  ecmaVersion: 12,
  parser: "@typescript-eslint/parser",
  sourceType: "module"
 },
 env: {
  browser: true,
  es2021: true
 },
 extends: [
  // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
  // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
  'plugin:vue/essential', 
  "airbnb-base"
 ],
 // required to lint *.vue files
 plugins: [
  "vue",
  "@typescript-eslint"
 ],
 // add your custom rules here
 rules: {
  // allow async-await
  'generator-star-spacing': 'off',
  // allow debugger during development
  'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off'
 }
}
