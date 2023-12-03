module.exports = {
  meta: {
    fixable: "code",
  },
  create: (context) => {
    return {
      CallExpression: (node) => {
        if (
          node.callee.type === "MemberExpression" &&
          node.callee.property.name === "charAt" &&
          node.callee.object.type === "Identifier" &&
          node.arguments.length === 1
        ) {
          const arg = node.arguments[0];
          let replacement;

          if (arg.type === "Literal" && typeof arg.value === "number") {
            // Simple number index
            replacement = `[${arg.value}]`;
          } else {
            // Complex expression or non-numeric literal
            replacement = `[${context.getSourceCode().getText(arg)}]`;
          }

          context.report({
            node,
            message: `Use index-based access ${replacement} instead of '.charAt()'`,
            fix: (fixer) => {
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
