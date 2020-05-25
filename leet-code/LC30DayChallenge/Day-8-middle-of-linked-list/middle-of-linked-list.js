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
var middleNode = function(head) {
  let vals = [];

  getVals = (node) => {
      vals.push(node);
      if(node.next === null) {
          return;
      }
      getVals(node.next);
  }
  getVals(head);

  return vals.length % 2 === 1 ? vals[Math.floor(vals.length / 2)] : vals[vals.length / 2];
};