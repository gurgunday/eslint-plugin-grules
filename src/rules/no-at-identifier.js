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
          let message, fix;

          if (arg.type === "Literal" && typeof arg.value === "number") {
            let replacement;

            message = `Use index-based access ${replacement} instead of '.at(${arg.value})'`;

            if (arg.value >= 0) {
              replacement = `[${arg.value}]`;
            } else {
              replacement = `[${node.callee.object.name}.length - ${Math.abs(
                arg.value
              )}]`;
            }

            fix = (fixer) => {
              return fixer.replaceText(
                node,
                `${node.callee.object.name}${replacement}`
              );
            };
          } else {
            message = "Use index-based access instead of '.at()'";
          }

          context.report({
            node,
            message: message,
            fix,
          });
        }
      },
    };
  },
};
