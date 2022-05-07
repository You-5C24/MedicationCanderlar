// eslint-disable-next-line no-undef
module.exports = {
  env: {
    browser: true,
    es2021: true,
    'vue/setup-compiler-macros': true
  },
  extends: [
    'eslint:recommended',
    'plugin:vue/vue3-essential',
    'plugin:@typescript-eslint/recommended',
    // 1. 接入 prettier 的规则
    'prettier',
    'plugin:prettier/recommended'
  ],
  parser: 'vue-eslint-parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    parser: '@typescript-eslint/parser',
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  // 2. 加入 prettier 的 eslint 插件
  plugins: ['vue', '@typescript-eslint', 'prettier'],
  rules: {
    // 3. 注意要加上这一句，开启 prettier 自动修复的功能
    'prettier/prettier': 'error',
    quotes: ['error', 'single'],
    semi: ['error', 'always']
  }
};
