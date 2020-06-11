function reverseLinkedListInPlace(firstNode) {
    let current = firstNode;
    let previous = null;
    let upcoming = null;
  
    while(current) {
      upcoming = current.next;
      current.next = previous;
      previous = current;
      current = upcoming;
    }
  
    return previous;
  }
  
  class LinkedListNode {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  let a = new LinkedListNode(5);
  let b = new LinkedListNode(4);
  let c = new LinkedListNode(3);
  let d = new LinkedListNode(2);
  let e = new LinkedListNode(1);
  
  a.next = b;
  b.next = c;
  c.next = d;
  d.next = e;
  
  // reverseLinkedListInPlace(a)
  
  // val  1      val  2       val  3
  // next 2      next 3       next null
  
  // val  1      val  2       val  3
  // next null   next 3       next null
  
  // val  1      val  2       val  3
  // next null   next 3       next null
  
  // val  1      val  2       val  3
  // next null   next 1       next null
  
  // val  1      val  2       val  3
  // next null   next 3       next 2
  
  
  function reverseLinkedListOutOfPlace(headNode) {
    let originalCurrent = headNode;
    let current = new LinkedListNode(originalCurrent.value);
    let upcoming = null;
    let previous = null;
  
    while(originalCurrent) {
      upcoming = originalCurrent.next ? new LinkedListNode(originalCurrent.next.value) : null;
      current.next = previous;
      previous = current;
      current = upcoming;
      originalCurrent = originalCurrent.next;
    }
  
    return previous;
  };
  
  
  function getLinkedListValsArr(headNode) {
      let current = headNode
      let nodes = [];
      while(current) {
      nodes.push(current.value)
      current = current.next;
    }
    return nodes;
  };
  
  
  // original linked list
  console.log('* Original Linked List values:', getLinkedListValsArr(a));
  
  // original linked list reversed OUT OF PLACE
  console.log('* Values of original Linked List reversed using reverseLinkedListOutOfPlace:', getLinkedListValsArr(reverseLinkedListOutOfPlace(a)));
  
  // original linked list not mutated
  console.log('* reverseLinkedListOutOfPlace does not mutate original Linked List:', getLinkedListValsArr(a));
  
  //  original linked list reversed IN PLACE
  console.log('* Values of original Linked List reversed using reverseLinkedListInPlace:', getLinkedListValsArr(reverseLinkedListInPlace(a)));
  
  console.log('* reverseLinkedListInPlace DOES mutate original Linked List', getLinkedListValsArr(a));