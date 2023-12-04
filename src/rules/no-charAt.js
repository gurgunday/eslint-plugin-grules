module.exports = {
  meta: {
    fixable: "code",
  },
  create: function (context) {
    return {
      CallExpression(node) {
        if (
          node.callee.type === "MemberExpression" &&
          node.callee.property.name === "charAt"
        ) {
          const objectText = context
            .getSourceCode()
            .getText(node.callee.object);
          const argument = node.arguments[0];
          let replacement;

          if (argument && argument.type === "Literal") {
            replacement = `${objectText}[${argument.raw}]`;
          } else {
            replacement = `${objectText}[${context
              .getSourceCode()
              .getText(argument)}]`;
          }

          context.report({
            node,
            message: "Use bracket notation instead of .charAt()",
            fix(fixer) {
              return fixer.replaceText(node, replacement);
            },
          });
        }
      },
    };
  },
};
