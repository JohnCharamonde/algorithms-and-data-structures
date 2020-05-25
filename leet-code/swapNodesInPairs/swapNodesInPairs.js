/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function(head) {
  let newHead = head.next;
  let switchNexts = (node) => {
    if(node === null) {
      return;
    }
    let newFirst = node.next;
    if(newFirst === null) {
      return;
    }
    node.next = newFirst.next;
    newFirst.next = node;
    switchNexts(node.next)
  }
  switchNexts(head)

  return newHead;
};

function ListNode(val) {
  this.val = val;
  this.next = null;
}
let a = new ListNode(1);
let b = new ListNode(2);
let c = new ListNode(3);
let d = new ListNode(4);
let e = new ListNode(5);
let f = new ListNode(6);
let g = new ListNode(7);
let h = new ListNode(8);
let i = new ListNode(9);
let j = new ListNode(10);
a.next = b;
b.next = c;
c.next = d;
d.next = e;
e.next = f;
f.next = g;
g.next = h;
h.next = i;
i.next = j;
let hello = swapPairs(a)

var vals = [];
let getVals = (node) => {
  vals.push(node.val)
  if(node.next !== null) {
    getVals(node.next);
  }
}

getVals(hello)
console.log(vals);


