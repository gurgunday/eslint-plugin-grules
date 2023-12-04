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
          const isUnaryNumber =
            arg.type === "UnaryExpression" &&
            (arg.operator === "+" || arg.operator === "-") &&
            arg.argument.type === "Literal" &&
            typeof arg.argument.value === "number";

          let message;
          let fix = null;

          if (
            (arg.type === "Literal" && typeof arg.value === "number") ||
            isUnaryNumber
          ) {
            const index = isUnaryNumber
              ? arg.operator === "+"
                ? +arg.argument.value
                : -arg.argument.value
              : arg.value;
            const replacement =
              index >= 0
                ? `[${index}]`
                : `[${node.callee.object.name}.length - ${Math.abs(index)}]`;

            message = `Use index-based access ${replacement} instead of '.at(${index})'`;
            fix = (fixer) => {
              return fixer.replaceText(
                node,
                `${node.callee.object.name}${replacement}`
              );
            };
          } else {
            message = "Use index-based access instead of '.at()'";
          }

          context.report({ node, message, fix });
        }
      },
    };
  },
};
