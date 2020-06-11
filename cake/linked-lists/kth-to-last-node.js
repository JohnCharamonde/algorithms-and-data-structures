// You have a linked list ↴ and want to find the kkth to last node.

// Write a function kthToLastNode() that takes an integer kk and the headNode of a singly-linked list, and returns the kkth to last node in the list.

// For example:

class LinkedListNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

const a = new LinkedListNode("Angel Food");
const b = new LinkedListNode("Bundt");
const c = new LinkedListNode("Cheese");
const d = new LinkedListNode("Devil's Food");
const e = new LinkedListNode("Eccles");

a.next = b;
b.next = c;
c.next = d;
d.next = e;

kthToLastNode(2, a);
// Returns the node with value "Devil's Food" (the 2nd to last node)

function kthToLastNode(k, head) {
    if(k <= 0) throw new Error('k <= 0')
    let current = head;
    let length = 0;
    while(current) {
        length++;
        current = current.next;
    }
    let depth = length - k;
    current = head;
    while(depth) {
        current = current.next;
        depth--;
    }
    return current;
};

// use a measuring stick of length k
function stickMethodKthToLastNode(k, head) {
    if(k <= 0) throw new Error('k <= 0')
    let start = head;
    let end = head;
    let stick = 1;

    while(end) {
        if(stick < k) {
            if(!end.next) {
                throw new Error('k > list length')
            }
            end = end.next;
            stick++;
        } else {
          if(end.next === null) {
            return start;
          }
            end = end.next;
            start = start.next;
        }
    }
}
