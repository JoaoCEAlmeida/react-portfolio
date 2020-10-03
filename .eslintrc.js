module.exports = {
  extends: [
    'standard',
    'prettier',
    'eslint:recommended',
    'plugin:react/recommended'
  ],
  plugins: [
    "react"
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    }
  },
  rules: {
    "react/jsx-uses-react": "error",
    "react/jsx-uses-vars": "error",
  }
}
