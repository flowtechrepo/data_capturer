module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  globals: {
    define: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: [
    // 'plugin:vue/recommended',
    // 'plugin:prettier/recommended',
    'plugin:vue/essential',
    'standard',
    'plugin:vue/strongly-recommended'
  ],
  // required to lint *.vue files
  plugins: [
    'vue'
  ],
  // add your custom rules here
  rules: {
    'no-console': 'off',
    'no-debugger': 'off',
    'camelcase': 'off',
    'new-cap': 2,
    'prefer-const': 2,
    'valid-jsdoc': 2,
    'no-const-assign': 2,
    'no-var': 2,
    'no-undef': 2,
    'one-var': 2,
    'no-new-object': 2,
    'object-shorthand': 2,
    'no-array-constructor': 2,
    'array-callback-return': 2,
    'no-loop-func': 1,
    'prefer-rest-params': 2,
    'space-before-blocks': 2,
    'prefer-spread': 2,
    'arrow-body-style': 2,
    'no-confusing-arrow': 2,
    'no-useless-constructor': 2,
    'no-dupe-class-members': 2,
    'no-duplicate-imports': 2,
    'import/no-mutable-exports': 2,
    'import/first': 2,
    'import/no-webpack-loader-syntax': 2,
    'no-case-declarations': 2,
    'no-nested-ternary': 1,
    'no-unneeded-ternary': 2,
    'brace-style': 2,
    'padded-blocks': 2,
    'space-in-parens': 2,
    'no-return-assign': 0,
    'space-before-function-paren': ['error', 'always'],
    'no-unused-vars': 0,
    'no-unexpected-multiline': 2,
    'arrow-parens': 0,
    'generator-star-spacing': 0,
    'no-useless-escape': 0,
    'quote-props': ['error', 'consistent-as-needed']
  }
}
