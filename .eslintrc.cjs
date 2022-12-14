module.exports = {
  root: true,
  env: {
    browser: true,
    jasmine: true,
    node: true,
  },
  extends: ['airbnb-base'],
  plugins: ['jasmine'],
  rules: {
    indent: ['error', 'tab', { SwitchCase: 1 }],
    semi: ['error', 'never'],
    'arrow-parens': ['error', 'as-needed'],
    'import/extensions': [
      'error',
      'always',
    ],
    'no-tabs': ['error', { allowIndentationTabs: true }],
    'no-underscore-dangle': 1,
    'nuxt/no-cjs-in-config': 'off',
  },
}
