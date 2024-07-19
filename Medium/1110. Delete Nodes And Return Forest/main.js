class TreeNode {
    constructor(val, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

var delNodes = function(root, to_delete) {
    const toDeleteSet = new Set(to_delete);
    const forest = [];

    const dfs = (node, isRoot) => {
        if (!node) return null;

        const rootDeleted = toDeleteSet.has(node.val);
        if (isRoot && !rootDeleted) {
            forest.push(node);
        }

        node.left = dfs(node.left, rootDeleted);
        node.right = dfs(node.right, rootDeleted);

        return rootDeleted ? null : node;
    };

    dfs(root, true);
    return forest;
};

// Helper function to print tree nodes (for testing purposes)
const printForest = (forest) => {
    const result = [];
    const bfs = (node) => {
        if (!node) return [];
        const queue = [node];
        const values = [];
        while (queue.length) {
            const current = queue.shift();
            values.push(current.val);
            if (current.left) queue.push(current.left);
            if (current.right) queue.push(current.right);
        }
        return values;
    };
    for (const tree of forest) {
        result.push(bfs(tree));
    }
    return result;
};

// Example usage:
let root = new TreeNode(1, 
    new TreeNode(2, new TreeNode(4), new TreeNode(5)), 
    new TreeNode(3, new TreeNode(6), new TreeNode(7))
);
let to_delete = [3, 5];
let forest = delNodes(root, to_delete);
console.log(printForest(forest)); // Output: [[1, 2, 4], [6], [7]]

root = new TreeNode(1, 
    new TreeNode(2, null, new TreeNode(3)), 
    new TreeNode(4)
);
to_delete = [3];
forest = delNodes(root, to_delete);
console.log(printForest(forest)); // Output: [[1, 2, 4]]
