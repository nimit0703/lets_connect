module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'jsdom',
    transform: {
      '^.+\\.vue$': '@vue/vue3-jest', // Handles .vue files
      '^.+\\.ts$': 'ts-jest',         // Handles TypeScript files
      '^.+\\.js$': 'babel-jest',       // Handles JS files
    },
    moduleFileExtensions: ['vue', 'js', 'ts', 'json'],
    testMatch: ['**/tests/**/*.spec.[jt]s?(x)'],  // Update testMatch if necessary
    moduleNameMapper: {
      '^@/(.*)$': '<rootDir>/src/$1',
      "^@vue/test-utils": "<rootDir>/node_modules/@vue/test-utils/dist/vue-test-utils.cjs.js"
    },
    transformIgnorePatterns: ['<rootDir>/node_modules/']
  };
  