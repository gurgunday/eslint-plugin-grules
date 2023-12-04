module.exports = {
  configs: {
    all: {
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
      },
      env: {
        browser: true,
        node: false,
      },
      reportUnusedDisableDirectives: true,
      extends: [
        "eslint:recommended",
        "plugin:promise/recommended",
        "plugin:n/recommended",
        "prettier",
      ],
      plugins: ["prettier", "unicorn", "grules"],
      rules: {
        "prettier/prettier": "error",

        "unicorn/better-regex": "error",
        "unicorn/catch-error-name": "off",
        "unicorn/consistent-destructuring": "error",
        "unicorn/consistent-function-scoping": "error",
        "unicorn/custom-error-definition": "off",
        "unicorn/empty-brace-spaces": "error",
        "unicorn/error-message": "error",
        "unicorn/escape-case": "error",
        "unicorn/expiring-todo-comments": "off",
        "unicorn/explicit-length-check": "off",
        "unicorn/filename-case": "off",
        "unicorn/import-style": "error",
        "unicorn/new-for-builtins": "error",
        "unicorn/no-abusive-eslint-disable": "off",
        "unicorn/no-array-callback-reference": "off",
        "unicorn/no-array-for-each": "error",
        "unicorn/no-array-method-this-argument": "error",
        "unicorn/no-array-push-push": "error",
        "unicorn/no-array-reduce": "off",
        "unicorn/no-await-expression-member": "off",
        "unicorn/no-console-spaces": "error",
        "unicorn/no-document-cookie": "error",
        "unicorn/no-empty-file": "off",
        "unicorn/no-for-loop": "off",
        "unicorn/no-hex-escape": "off",
        "unicorn/no-instanceof-array": "error",
        "unicorn/no-invalid-remove-event-listener": "error",
        "unicorn/no-keyword-prefix": "off",
        "unicorn/no-lonely-if": "error",
        "no-negated-condition": "off",
        "unicorn/no-negated-condition": "error",
        "no-nested-ternary": "off",
        "unicorn/no-nested-ternary": "error",
        "unicorn/no-new-array": "error",
        "unicorn/no-new-buffer": "error",
        "unicorn/no-null": "off",
        "unicorn/no-object-as-default-parameter": "off",
        "unicorn/no-process-exit": "error",
        "unicorn/no-static-only-class": "error",
        "unicorn/no-thenable": "error",
        "unicorn/no-this-assignment": "off",
        "unicorn/no-typeof-undefined": "off",
        "unicorn/no-unnecessary-await": "error",
        "unicorn/no-unreadable-array-destructuring": "error",
        "unicorn/no-unreadable-iife": "error",
        "unicorn/no-unused-properties": "off",
        "unicorn/no-useless-fallback-in-spread": "error",
        "unicorn/no-useless-length-check": "error",
        "unicorn/no-useless-promise-resolve-reject": "error",
        "unicorn/no-useless-spread": "error",
        "unicorn/no-useless-switch-case": "error",
        "unicorn/no-useless-undefined": "error",
        "unicorn/no-zero-fractions": "error",
        "unicorn/number-literal-case": "error",
        "unicorn/numeric-separators-style": "error",
        "unicorn/prefer-add-event-listener": "error",
        "unicorn/prefer-array-find": "error",
        "unicorn/prefer-array-flat": "error",
        "unicorn/prefer-array-flat-map": "error",
        "unicorn/prefer-array-index-of": "error",
        "unicorn/prefer-array-some": "error",
        "unicorn/prefer-at": "off",
        "unicorn/prefer-blob-reading-methods": "error",
        "unicorn/prefer-code-point": "error",
        "unicorn/prefer-date-now": "error",
        "unicorn/prefer-default-parameters": "error",
        "unicorn/prefer-dom-node-append": "error",
        "unicorn/prefer-dom-node-dataset": "error",
        "unicorn/prefer-dom-node-remove": "error",
        "unicorn/prefer-dom-node-text-content": "error",
        "unicorn/prefer-event-target": "error",
        "unicorn/prefer-export-from": "error",
        "unicorn/prefer-includes": "error",
        "unicorn/prefer-json-parse-buffer": "off",
        "unicorn/prefer-keyboard-event-key": "error",
        "unicorn/prefer-logical-operator-over-ternary": "error",
        "unicorn/prefer-math-trunc": "error",
        "unicorn/prefer-modern-dom-apis": "error",
        "unicorn/prefer-modern-math-apis": "error",
        "unicorn/prefer-module": "off",
        "unicorn/prefer-native-coercion-functions": "error",
        "unicorn/prefer-negative-index": "error",
        "unicorn/prefer-node-protocol": "error",
        "unicorn/prefer-number-properties": "error",
        "unicorn/prefer-object-from-entries": "error",
        "unicorn/prefer-optional-catch-binding": "error",
        "unicorn/prefer-prototype-methods": "error",
        "unicorn/prefer-query-selector": "error",
        "unicorn/prefer-reflect-apply": "error",
        "unicorn/prefer-regexp-test": "error",
        "unicorn/prefer-set-has": "error",
        "unicorn/prefer-set-size": "error",
        "unicorn/prefer-spread": "off",
        "unicorn/prefer-string-replace-all": "off",
        "unicorn/prefer-string-slice": "error",
        "unicorn/prefer-string-starts-ends-with": "error",
        "unicorn/prefer-string-trim-start-end": "error",
        "unicorn/prefer-switch": "error",
        "unicorn/prefer-ternary": "error",
        "unicorn/prefer-top-level-await": "off",
        "unicorn/prefer-type-error": "error",
        "unicorn/prevent-abbreviations": "off",
        "unicorn/relative-url-style": "error",
        "unicorn/require-array-join-separator": "error",
        "unicorn/require-number-to-fixed-digits-argument": "error",
        "unicorn/require-post-message-target-origin": "off",
        "unicorn/string-content": "off",
        "unicorn/switch-case-braces": "off",
        "unicorn/template-indent": "off",
        "unicorn/text-encoding-identifier-case": "error",
        "unicorn/throw-new-error": "error",

        "grules/no-charAt": "error",
        "grules/prefer-arrow-functions": "error",
        "grules/prefer-inc-dec": "error",
        "grules/prefer-index-access": "error",
        "grules/prefer-string-length-comparison": "error",

        "n/prefer-global/buffer": ["error", "never"],
        "n/prefer-global/process": ["error", "never"],

        "array-callback-return": ["error", { allowImplicit: true }],
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
        "require-atomic-updates": ["error", { allowProperties: true }],

        "arrow-body-style": ["error", "always"],
        camelcase: ["error", { properties: "never" }],
        "capitalized-comments": "off",
        "class-methods-use-this": "error",
        complexity: "off",
        "consistent-return": "off",
        "consistent-this": "off",
        curly: "error",
        "default-case": "off",
        "default-param-last": "off",
        "dot-notation": "error",
        eqeqeq: ["error", "always", { null: "ignore" }],
        "func-name-matching": "error",
        "func-names": ["error", "never"],
        "guard-for-in": "error",
        "id-denylist": "off",
        "id-length": "off",
        "init-declarations": "off",
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
        "multiline-comment-style": "off",
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
        "no-empty-function": ["error", { allow: ["arrowFunctions"] }],
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
        "no-negated-condition": "off",
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
          "UnaryExpression[operator='void']",
          "SequenceExpression",
          "LabeledStatement",
          "WithStatement",
        ],
        "no-return-assign": "error",
        "no-script-url": "error",
        "no-shadow": "off",
        "no-ternary": "off",
        "no-throw-literal": "error",
        "no-undef-init": "off",
        "no-undefined": "off",
        "no-underscore-dangle": "off",
        "no-unneeded-ternary": "error",
        "no-unused-expressions": "error",
        "no-useless-call": "error",
        "no-useless-computed-key": "error",
        "no-useless-concat": "error",
        "no-useless-constructor": "error",
        "no-useless-rename": "error",
        "no-useless-return": "error",
        "no-warning-comments": "error",
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
        "sort-keys": "off",
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
    "no-charAt": require("./rules/no-charAt.js"),
    "prefer-arrow-functions": require("./rules/prefer-arrow-functions.js"),
    "prefer-explicit-conditionals": require("./rules/prefer-explicit-conditionals.js"),
    "prefer-inc-dec": require("./rules/prefer-inc-dec.js"),
    "prefer-index-access": require("./rules/prefer-index-access.js"),
    "prefer-string-length-comparison": require("./rules/prefer-string-length-comparison.js"),
  },
};
