module.exports = {
  parser: '@typescript-eslint/parser', // Specifies the ESLint parser
  plugins: [ 'prettier'],
  parserOptions: {
    ecmaVersion: 2018, // Allows for the parsing of modern ECMAScript features
    sourceType: 'module' // Allows for the use of imports
  },
  rules: {
    semi: ['error', 'never'],
    quotes: [2, 'single']
  }
}
