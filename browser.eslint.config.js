module.exports = {
    env: {
        browser: true,
        jquery: true,
    },
    extends: ["eslint:recommended", "prettier"],
    parserOptions: {
        ecmaVersion: 5,
    },
    plugins: ["prettier"],
    rules: {
        "array-bracket-newline": [
            "error",
            {
                multiline: true,
            },
        ],
        "array-bracket-spacing": ["error", "never"],
        "array-element-newline": [
            "error",
            {
                multiline: true,
            },
        ],
        "block-scoped-var": "error",
        "block-spacing": "error",
        "brace-style": ["error", "stroustrup"],
        "callback-return": "error",
        "camelcase": "error",
        "capitalized-comments": ["error", "always"],
        "comma-dangle": ["error", "always-multiline"],
        "comma-spacing": [
            "error",
            {
                before: false,
                after: true,
            },
        ],
        "comma-style": ["error", "last"],
        "complexity": "error",
        "computed-property-spacing": ["error", "never"],
        "consistent-return": "error",
        "curly": "error",
        "default-case": "error",
        "dot-notation": "error",
        "eol-last": "error",
        "eqeqeq": "error",
        "func-call-spacing": "error",
        "func-name-matching": "error",
        "func-style": ["error", "expression"],
        "function-paren-newline": "error",
        "guard-for-in": "error",
        "handle-callback-err": ["error", "error"],
        "indent": [
            "error",
            4,
            {
                SwitchCase: 1,
                MemberExpression: "off",
            },
        ],
        "key-spacing": [
            "error",
            {
                beforeColon: false,
                afterColon: true,
                mode: "strict",
            },
        ],
        "keyword-spacing": [
            "error",
            {
                before: true,
                after: true,
            },
        ],
        "lines-around-comment": [
            "error",
            {
                beforeBlockComment: true,
            },
        ],
        "max-depth": [
            "error",
            {
                max: 4,
            },
        ],
        "max-nested-callbacks": ["error", 3],
        "max-params": ["error", 4],
        "max-statements-per-line": [
            "error",
            {
                max: 1,
            },
        ],
        "multiline-comment-style": ["error", "starred-block"],
        "multiline-ternary": ["error", "always-multiline"],
        "new-parens": "error",
        "newline-per-chained-call": [
            "warn",
            {
                ignoreChainWithDepth: 2,
            },
        ],
        "no-array-constructor": "error",
        "no-async-promise-executor": "error",
        "no-await-in-loop": "warn",
        "no-bitwise": "error",
        "no-console": "off",
        "no-else-return": "error",
        "no-empty-function": "error",
        "no-eq-null": "error",
        "no-extend-native": "error",
        "no-extra-bind": "error",
        "no-extra-parens": ["warn", "all"],
        "no-floating-decimal": "error",
        "no-implicit-coercion": "error",
        "no-implicit-globals": "error",
        "no-inner-declarations": ["error", "functions"],
        "no-invalid-this": "error",
        "no-lone-blocks": "error",
        "no-lonely-if": "error",
        "no-loop-func": "error",
        "no-magic-numbers": [
            "error",
            {
                ignore: [
                    // Used in general
                    -1,
                    0,
                    1,
                    // Speed values for jQuery
                    200,
                    400,
                    600,
                ],
                ignoreArrayIndexes: true,
            },
        ],
        "no-mixed-operators": "warn",
        "no-multi-spaces": "error",
        "no-multi-str": "error",
        "no-multiple-empty-lines": [
            "error",
            {
                max: 1,
            },
        ],
        "no-negated-condition": "error",
        "no-negated-in-lhs": "error",
        "no-nested-ternary": "error",
        "no-new": "warn",
        "no-new-object": "error",
        "no-new-wrappers": "error",
        "no-prototype-builtins": "error",
        "no-return-assign": ["error", "always"],
        "no-return-await": "error",
        "no-script-url": "error",
        "no-self-compare": "error",
        "no-sequences": "error",
        "no-shadow": "error",
        "no-shadow-restricted-names": "error",
        "no-tabs": "error",
        "no-throw-literal": "error",
        "no-trailing-spaces": "error",
        "no-undef-init": "error",
        "no-undefined": "error",
        "no-underscore-dangle": "error",
        "no-unmodified-loop-condition": "error",
        "no-unneeded-ternary": "error",
        "no-unused-expressions": [
            "error",
            {
                allowShortCircuit: false,
                allowTernary: false,
                allowTaggedTemplates: false,
            },
        ],
        "no-use-before-define": [
            "error",
            {
                functions: true,
                variables: true,
            },
        ],
        "no-useless-call": "error",
        "no-useless-catch": "error",
        "no-useless-computed-key": "error",
        "no-useless-concat": "error",
        "no-useless-return": "error",
        "no-whitespace-before-property": "error",
        "object-curly-newline": [
            "error",
            {
                multiline: true,
                minProperties: 2,
                consistent: true,
            },
        ],
        "object-curly-spacing": ["error", "never"],
        "object-property-newline": "error",
        "one-var-declaration-per-line": ["error", "initializations"],
        "operator-assignment": ["error", "always"],
        "operator-linebreak": ["error", "after"],
        "prefer-promise-reject-errors": "error",
        "quote-props": ["error", "consistent-as-needed"],
        "quotes": ["error", "double"],
        "radix": ["error", "always"],
        "require-atomic-updates": "error",
        "require-await": "warn",
        "semi": ["error", "always"],
        "semi-spacing": [
            "error",
            {
                before: false,
                after: true,
            },
        ],
        "semi-style": ["error", "last"],
        "space-before-blocks": ["error", "always"],
        "space-before-function-paren": ["error", "never"],
        "space-in-parens": ["error", "never"],
        "space-infix-ops": "error",
        "space-unary-ops": "error",
        "spaced-comment": ["error", "always"],
        "strict": ["error", "function"],
        "switch-colon-spacing": [
            "error",
            {
                before: false,
                after: true,
            },
        ],
        "wrap-iife": ["error", "inside"],
        "yoda": ["error", "never"],
    },
};
