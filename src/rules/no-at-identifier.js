// File: rules/no-at-method.js

module.exports = {
  meta: {
    fixable: "code",
  },
  create: (context) => {
    return {
      CallExpression: (node) => {
        if (
          node.callee.type === "MemberExpression" &&
          node.callee.property.name === "at" &&
          node.callee.object.type === "Identifier" &&
          node.arguments.length === 1
        ) {
          const arg = node.arguments[0];
          let message, replacement;

          if (arg.type === "Literal" && typeof arg.value === "number") {
            if (arg.value >= 0) {
              // Positive index
              replacement = `[${arg.value}]`;
              message = `Use index-based access ${replacement} instead of '.at(${arg.value})'`;
            } else {
              // Negative index
              const index = Math.abs(arg.value);
              replacement = `[${node.callee.object.name}.length - ${index}]`;
              message = `Use index-based access ${replacement} instead of '.at(${arg.value})'`;
            }
          } else {
            // Complex expression
            replacement = `[${node.callee.object.name}.length - index]`;
            message =
              "Use index-based access with length minus index instead of '.at(index)'";
          }

          context.report({
            node,
            message: message,
            fix: function (fixer) {
              return fixer.replaceText(
                node,
                `${node.callee.object.name}${replacement}`
              );
            },
          });
        }
      },
    };
  },
};
