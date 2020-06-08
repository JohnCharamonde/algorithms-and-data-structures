// Write a function to find the 2nd largest element in a binary search tree. ↴

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


// function findSecondLargest(treeRoot) {

//     // Find the second largest item in the binary search tree
//     if(!treeRoot) throw new Error('Tree must have at least 1 node!');
//     let largest = treeRoot.value;
//     let larger = null;
    
//     let nodes = [treeRoot]
    
//     while(nodes.length) {
//       let node = nodes.pop();
//       if(largest && node.value > largest) {
//         larger = largest;
//         largest = node.value;
//       } else if(larger && node.value > larger) {
//         large = larger;
//         larger = node.value;
//       } 
//       if(node.left) nodes.push(node.left);
//       if(node.right) nodes.push(node.right);
//     }
  
//     return larger;
//   }


// incorrect logic... The second largest is not necessarily the second most right node!
// function findSecondLargest(treeRoot, previousValue) {
//   if(!treeRoot) throw new Error('The tree must have at least 1 node!');

//   previousValue = previousValue !== undefined ? previousValue : null;

//   if(!treeRoot.right) {
//     return previousValue;
//   }

//   return findSecondLargest(treeRoot.right, treeRoot.value)
// }



// WORKING SOLUTION USING RECURSION...
// function findLargest(treeNode) {
//   if(!treeNode) throw new Error('Tree must have at least 1 node!');
//   if(treeNode.right) return findLargest(treeNode.right);
//   return treeNode.value;
// }

// function findSecondLargest(treeNode) {
//   if(!treeNode || !treeNode.right && !treeNode.left) throw new Error('Tree must have a least 2 nodes!')
//   if(treeNode.left && !treeNode.right) return findLargest(treeNode.left);
//   if(treeNode.right && !treeNode.right.right && !treeNode.right.left) return treeNode.value;
//   return findSecondLargest(treeNode.right);
// }

// Iterative solution
function findLargest(treeNode) {
    let current = treeNode;
    while(current) {
      if(!current.right) return current.value;
      current = current.right;
    }
  }

function findSecondLargest(treeNode) {
    if(!treeNode || !treeNode.left && !treeNode.right) throw new Error('Must have at least 2 nodes in the tree!')
    let current = treeNode;
    while(current) {
      if(!current.right && treeNode.left) return findLargest(current.left);
      if(current.right && !current.right.left && !current.right.right) return current.value;
      current = current.right;
    }
}