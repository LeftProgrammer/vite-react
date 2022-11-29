module.exports = {
    "env": {
        "browser": true,
        "es2021": true,
        "node": true
    },
    "settings": {
        react: {
            version: "detect"
        }
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:@typescript-eslint/recommended",
        "prettier",
        "plugin:prettier/recommended"
    ],
    "overrides": [
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "react",
        "@typescript-eslint",
        "prettier"
    ],
    "rules": {
        "prettier/prettier": "error",
        "quotes": ["error", "single"],
        "semi": ["error", "always"],
        "react/react-in-jsx-scope": "off",
        // "no-cond-assign": ["error", "always"],
        // "@typescript-eslint/ban-ts-comment": "error",
        // "@typescript-eslint/no-explicit-any": "warn"
    }
}
