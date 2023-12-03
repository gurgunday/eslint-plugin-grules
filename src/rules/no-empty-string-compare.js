module.exports = {
  meta: {
    fixable: "code",
  },
  create: (context) => {
    return {
      BinaryExpression: (node) => {
        if (
          (node.operator === "===" || node.operator === "!==") &&
          ((node.left.type === "Literal" && node.left.value === "") ||
            (node.right.type === "Literal" && node.right.value === ""))
        ) {
          const isLeftLiteral = node.left.type === "Literal";
          const variablePart = isLeftLiteral
            ? context.getSourceCode().getText(node.right)
            : context.getSourceCode().getText(node.left);
          const replacement =
            node.operator === "==="
              ? `${variablePart}?.length === 0`
              : `${variablePart}?.length > 0`;

          context.report({
            node,
            message: `Use '${replacement}' instead of comparing directly with an empty string`,
            fix: (fixer) => {
              return fixer.replaceText(node, replacement);
            },
          });
        }
      },
    };
  },
};
