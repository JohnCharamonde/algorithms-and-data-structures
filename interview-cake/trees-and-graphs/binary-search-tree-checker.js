// Write a function to check that a binary tree ↴ is a valid binary search tree. ↴

// Here's a sample binary tree node class:

class BinaryTreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  insertLeft(value) {
    this.left = new BinaryTreeNode(value);
    return this.left;
  }

  insertRight(value) {
    this.right = new BinaryTreeNode(value);
    return this.right;
  }
}

// iterative solution
function isBinarySearchTree(treeRoot) {
  let nodeAndBoundsStack = [{ node: treeRoot, lowerBound: -Infinity, upperBound: Infinity }];
  while(nodeAndBoundsStack.length) {
    let { node, lowerBound, upperBound } = nodeAndBoundsStack.pop();
    if(node.value <= lowerBound || node.value >= upperBound) {
      return false;
    } else {
      if(node.left) nodeAndBoundsStack.push({ node: node.left, lowerBound: lowerBound, upperBound: node.value });
      if(node.right) nodeAndBoundsStack.push({ node: node.right, lowerBound: node.value, upperBound: upperBound });
    }
  }
  return true;
}
