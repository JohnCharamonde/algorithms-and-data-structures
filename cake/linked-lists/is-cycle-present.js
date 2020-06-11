// You have a singly-linked list ↴ and want to check if it contains a cycle.

// A singly-linked list is built with nodes, where each node has:

// node.next—the next node in the list.
// node.value—the data held in the node. For example, if our linked list stores people in line at the movies, node.value might be the person's name.
// For example:

//   class LinkedListNode {
//   constructor(value) {
//     this.value = value;
//     this.next = null;
//   }
// }

// JavaScript
// A cycle occurs when a node’s next points back to a previous node in the list. The linked list is no longer linear with a beginning and end—instead, it cycles through a loop of nodes.

// Write a function containsCycle() that takes the first node in a singly-linked list and returns a boolean indicating whether the list contains a cycle.

  class LinkedListNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

function containsCycle(firstNode) {
    // let seenVals = new Set();
    // let currentNode = firstNode;
    // if(currentNode.next === null) return false;

    // while(currentNode.next !== null) {
    //     let vals = [currentNode.value, currentNode.next];
    //     if(seenVals.has(vals)) {
    //         return false;
    //     }
    //     seenVals.add(vals);
    //     currentNode = currentNode.next;
    // }
    // return true;
      let fast = firstNode;
      let slow = firstNode;

      while(fast && fast.next) {
          fast = fast.next.next;
          slow = slow.next;
          if(fast === slow) {
              return true;
          }
      }

    return false;
}

let a = new LinkedListNode(5);
let b = new LinkedListNode(4);
let c = new LinkedListNode(3);
let d = new LinkedListNode(2);
let e = new LinkedListNode(1);
let f = new LinkedListNode(10)
a.next = b;
b.next = c;
c.next = d;
d.next = e;
e.next = f;
f.next = d;

containsCycle(a)