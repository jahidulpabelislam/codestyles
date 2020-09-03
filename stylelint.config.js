module.exports = {
    extends: "stylelint-config-sass-guidelines",
    rules: {
        "color-hex-length": "long",
        "color-named": ["never", {ignore: ["inside-function"]}],
        "function-parentheses-space-inside": "never-single-line",
        "indentation": 4,
        "order/properties-alphabetical-order": null,
        "order/order": [
            [
                "dollar-variables",
                {
                    type: "at-rule",
                    name: "extend",
                },
                {
                    type: "at-rule",
                    name: "include",
                },
                "declarations",
                "rules",
                "at-rules",
            ],
        ],
        "selector-class-pattern": "([a-z-]+)((?:--|__)([a-z-]+))?", // BEM
        "selector-no-qualifying-type": [true, {ignore: ["attribute", "class"]}],
        "string-quotes": "double",
        "rule-empty-line-before": null,
    },
};
