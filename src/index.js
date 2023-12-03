module.exports = {
  configs: {
    all: {
      extends: [
        "eslint:recommended",
        "plugin:promise/recommended",
        "plugin:n/recommended",
        "plugin:unicorn/recommended",
        "prettier",
      ],
      plugins: ["prettier", "grules"],
      rules: {
        "prettier/prettier": "error",

        "grules/explicit-conditionals": "error",
        "grules/no-at-identifier": "error",
        "grules/no-charAt": "error",
        "grules/no-empty-string-compare": "error",
        "grules/no-plus-minus-one": "error",
        "grules/prefer-arrow-functions": "error",

        "n/prefer-global/buffer": ["error", "never"],
        "n/prefer-global/process": ["error", "never"],

        "unicorn/prefer-at": "off",
        "unicorn/no-abusive-eslint-disable": "off",
        "unicorn/no-null": "off",

        "array-callback-return": "error",
        "no-await-in-loop": "warn",
        "no-constant-binary-expression": "error",
        "no-constructor-return": "error",
        "no-duplicate-imports": "error",
        "no-new-native-nonconstructor": "error",
        "no-promise-executor-return": "error",
        "no-self-compare": "error",
        "no-template-curly-in-string": "warn",
        "no-unmodified-loop-condition": "error",
        "no-unreachable-loop": "error",
        "no-unused-private-class-members": "error",
        "no-use-before-define": "error",
        "require-atomic-updates": "error",

        "arrow-body-style": ["error", "always"],
        camelcase: "off",
        "capitalized-comments": "off",
        "class-methods-use-this": "error",
        complexity: "off",
        "consistent-return": "error",
        "consistent-this": "error",
        curly: ["error", "all"],
        "default-case": "off",
        "default-param-last": "off",
        "dot-notation": "error",
        eqeqeq: ["error", "always", { null: "ignore" }],
        "func-name-matching": "error",
        "func-names": ["error", "as-needed"],
        "guard-for-in": "error",
        "id-denylist": "off",
        "id-length": "off",
        "init-declarations": "error",
        "logical-assignment-operators": [
          "error",
          "always",
          { enforceForIfStatements: true },
        ],
        "max-classes-per-file": "off",
        "max-depth": "off",
        "max-lines": "off",
        "max-lines-per-function": "off",
        "max-nested-callbacks": "off",
        "max-params": "off",
        "max-statements": "off",
        "multiline-comment-style": ["error", "starred-block"],
        "new-cap": "error",
        "no-alert": "error",
        "no-array-constructor": "error",
        "no-bitwise": "error",
        "no-caller": "error",
        "no-console": "error",
        "no-continue": "off",
        "no-div-regex": "off",
        "no-else-return": ["error", { allowElseIf: false }],
        "no-empty": ["error", { allowEmptyCatch: true }],
        "no-empty-function": { allow: ["arrowFunctions"] },
        "no-empty-static-block": "error",
        "no-eq-null": "off",
        "no-eval": "error",
        "no-extend-native": "error",
        "no-extra-bind": "error",
        "no-implicit-coercion": "error",
        "no-implicit-globals": "off",
        "no-implied-eval": "error",
        "no-inline-comments": "off",
        "no-invalid-this": "off",
        "no-iterator": "error",
        "no-lone-blocks": "error",
        "no-lonely-if": "error",
        "no-loop-func": "error",
        "no-magic-numbers": "off",
        "no-multi-assign": ["error", { ignoreNonDeclaration: true }],
        "no-multi-str": "error",
        "no-negated-condition": "error",
        "no-nested-ternary": "off",
        "no-new": "error",
        "no-new-func": "off",
        "no-new-wrappers": "error",
        "no-object-constructor": "error",
        "no-octal-escape": "error",
        "no-param-reassign": "error",
        "no-plusplus": "off",
        "no-proto": "error",
        "no-restricted-exports": [
          "error",
          {
            restrictDefaultExports: {
              direct: false,
              named: true,
              defaultFrom: true,
            },
          },
        ],
        "no-restricted-globals": "off",
        "no-restricted-imports": "off",
        "no-restricted-properties": "off",
        "no-restricted-syntax": [
          "error",
          "ClassDeclaration",
          "MethodDefinition[kind='get']",
          "MethodDefinition[kind='set']",
          "FunctionDeclaration",
          "VariableDeclaration[kind='var']",
          "LabeledStatement",
          "WithStatement",
        ],
        "no-return-assign": "error",
        "no-script-url": "error",
        "no-sequences": "error",
        "no-shadow": "off",
        "no-ternary": "off",
        "no-throw-literal": "error",
        "no-undef-init": "error",
        "no-undefined": "error",
        "no-underscore-dangle": "error",
        "no-unneeded-ternary": "error",
        "no-unused-expressions": [
          "error",
          { allowShortCircuit: true, allowTernary: true },
        ], // hmm not sure
        "no-useless-call": "error",
        "no-useless-computed-key": "error",
        "no-useless-concat": "error",
        "no-useless-constructor": "error",
        "no-useless-rename": "error",
        "no-useless-return": "error",
        "no-void": "error",
        "no-warning-comments": "off",
        "object-shorthand": "error",
        "one-var": ["error", "consecutive"],
        "operator-assignment": ["error", "always"],
        "prefer-arrow-callback": "error",
        "prefer-const": "error",
        "prefer-destructuring": "error",
        "prefer-exponentiation-operator": "error",
        "prefer-named-capture-group": "error",
        "prefer-numeric-literals": "error",
        "prefer-object-has-own": "error",
        "prefer-object-spread": "error",
        "prefer-promise-reject-errors": "error",
        "prefer-regex-literals": "error",
        "prefer-rest-params": "error",
        "prefer-spread": "error",
        "prefer-template": "error",
        radix: ["error", "as-needed"],
        "require-await": "warn",
        "require-unicode-regexp": "error",
        "sort-imports": "error",
        "sort-keys": "error",
        "sort-vars": "off",
        strict: "off",
        "symbol-description": "error",
        "vars-on-top": "error",
        yoda: "error",

        "line-comment-position": "off",
        "unicode-bom": "off",
      },
    },
  },
  rules: {
    "explicit-conditionals": require("./rules/explicit-conditionals.js"),
    "no-at-identifier": require("./rules/no-at-identifier.js"),
    "no-charAt": require("./rules/no-charAt.js"),
    "no-empty-string-compare": require("./rules/no-empty-string-compare.js"),
    "no-plus-minus-one": require("./rules/no-plus-minus-one.js"),
    "prefer-arrow-functions": require("./rules/prefer-arrow-functions.js"),
  },
};
