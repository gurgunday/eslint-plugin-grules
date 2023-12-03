module.exports = {
  meta: {
    type: "suggestion",
    docs: {
      description: "disallow += 1 and -= 1, suggest ++ or -- instead",
    },
    fixable: "code",
    schema: [], // no options
  },
  create(context) {
    return {
      AssignmentExpression(node) {
        if (node.operator === "+=" && node.right.value === 1) {
          context.report({
            node,
            message: "Use '++' instead of '+= 1'",
            fix: function (fixer) {
              return fixer.replaceText(node, `++${node.left.name}`);
            },
          });
        } else if (node.operator === "-=" && node.right.value === 1) {
          context.report({
            node,
            message: "Use '--' instead of '-= 1'",
            fix: function (fixer) {
              return fixer.replaceText(node, `--${node.left.name}`);
            },
          });
        }
      },
    };
  },
};
