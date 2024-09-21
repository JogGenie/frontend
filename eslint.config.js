import vuePlugin from 'eslint-plugin-vue';
import typescriptPlugin from '@typescript-eslint/eslint-plugin';
import prettierPlugin from 'eslint-plugin-prettier';
import { rules as tsRules } from '@typescript-eslint/eslint-plugin';

export default [
  {
    files: ['**/*.ts', '**/*.tsx', '**/*.js', '**/*.vue'],  // Apply to TypeScript, JS, and Vue files
    ignores: ['node_modules/**'],  // Ignore node_modules directory
    languageOptions: {
      ecmaVersion: 2020,  // ECMAScript 2020
      sourceType: 'module',  // Use ES modules
      parser: require('@typescript-eslint/parser'),  // Use TypeScript parser
    },
    plugins: {
      vue: vuePlugin,  // Vue plugin
      '@typescript-eslint': typescriptPlugin,  // TypeScript plugin
      prettier: prettierPlugin,  // Prettier plugin
    },
    rules: {
      // Vue Recommended Rules
      ...vuePlugin.configs['vue3-essential'].rules,

      // TypeScript Recommended Rules
      ...typescriptPlugin.configs.recommended.rules,

      // Prettier Integration (disables conflicting formatting rules)
      'prettier/prettier': 'error',  // Ensure Prettier formatting issues are considered errors

      // Custom Rules
      'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
      'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',

      // Additional TypeScript specific rules can be enabled as needed
      '@typescript-eslint/explicit-function-return-type': 'off',
      '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
    },
  },
  {
    files: ['**/*.vue'],
    languageOptions: {
      parser: require('vue-eslint-parser'),  // Vue-specific parser
    },
    rules: {
      // Vue-Specific Rules
      'vue/no-unused-vars': 'warn',
      'vue/no-multiple-template-root': 'off',
      'vue/valid-v-slot': 'warn',  // Check for valid use of Vue 3 slot syntax
    },
  },
];


