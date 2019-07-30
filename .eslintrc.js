module.exports = {
    env: {
        es6: true,
        node: true
    },
    overrides: [
        {
            files: ["src/**/*"]
        }
    ],
    extends: [
        "plugin:@typescript-eslint/recommended",
        "prettier",
        "prettier/@typescript-eslint"
    ],
    parser: "@typescript-eslint/parser",
    plugins: ["@typescript-eslint"],
    rules: {
        "@typescript-eslint/explicit-function-return-type": "off",
        "@typescript-eslint/no-non-null-assertion": "off",
        "@typescript-eslint/prefer-interface": "off",
        "@typescript-eslint/no-explicit-any": "off",
        "@typescript-eslint/camelcase": "off",
        "@typescript-eslint/no-var-requires": "off",
        "@typescript-eslint/no-unused-vars": "error",
        "global-require": "off",
        "comma-dangle": [
            "error",
            {
                arrays: "never",
                objects: "never",
                imports: "never",
                exports: "never",
                functions: "never"
            }
        ],
        "comma-style": ["error", "last"],
        "prefer-arrow-callback": "error",
        "arrow-parens": "off",
        "space-before-function-paren": "off",
        "operator-linebreak": "off",
        "implicit-arrow-linebreak": "off",
        "function-paren-newline": "off",
        "no-undef": "off",
        "no-unused-vars": "error",
        "no-console": "off",
        "no-plusplus": "off",
        "no-shadow": "off",
        "no-continue": "off",
        "no-param-reassign": "off",
        "no-new": "off",
        "wrap-iife": "off",
        "class-methods-use-this": "off",
        quotes: ["error", "double"],
        "no-underscore-dangle": "off",
        "no-use-before-define": ["error", "nofunc"],
        "no-loop-func": "off",
        "no-multi-assign": "off",
        strict: ["error", "never"],
        "consistent-return": "off",
        "max-len": "off",
        "one-var": "off",
        "func-names": [1, "never"],
        "jsx-a11y/label-has-associated-control": "off",
        indent: ["error", 4],
        "no-mixed-spaces-and-tabs": "error",
        "no-unused-expressions": [
            "error",
            {
                allowTernary: true
            }
        ],
        camelcase: ["off"]
    }
};
