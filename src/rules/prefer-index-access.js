module.exports = {
  meta: {
    fixable: "code",
  },
  create: function (context) {
    return {
      CallExpression(node) {
        if (
          node.callee.type === "MemberExpression" &&
          node.callee.property.name === "at" &&
          (node.callee.object.type === "Identifier" ||
            node.callee.object.type === "MemberExpression")
        ) {
          const objectText = context
              .getSourceCode()
              .getText(node.callee.object),
            argument = node.arguments[0];
          let value;

          if (
            argument.type === "UnaryExpression" &&
            typeof argument.argument.value === "number"
          ) {
            value =
              argument.operator === "-"
                ? -argument.argument.value
                : +argument.argument.value;
          } else if (
            argument.type === "Literal" &&
            typeof argument.value === "number"
          ) {
            value = argument.value;
          }

          let replacement;
          if (value === undefined) {
            replacement = `${objectText}[${context
              .getSourceCode()
              .getText(argument)}]`;
          } else {
            if (value >= 0) {
              replacement = `${objectText}[${value}]`;
            } else {
              replacement = `${objectText}[${objectText}.length - ${Math.abs(
                value
              )}]`;
            }
          }

          context.report({
            node,
            message: "Use array indexing instead of .at()",
            fix(fixer) {
              return fixer.replaceText(node, replacement);
            },
          });
        }
      },
    };
  },
};
