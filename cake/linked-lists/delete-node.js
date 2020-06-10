class LinkedListNode {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  

  // unwanted side effects:
  // noteToDelete takes over the node at nodeToDelete.next value/next, effectively stranding that node.
  // 1) references to nodeToDelete now have different value/next than previously set.
  // 2) references to the node at the old nodeToDelete.next are stranded and won't be part of the linked list if referenced again. Will eventually be garbage collected.
  // ALSO...
  // does not work for deleting the tail
  function deleteNode(nodeToDelete) {
    // Delete the input node from the linked list
    nodeToDelete.value = nodeToDelete.next.value;
    nodeToDelete.next = nodeToDelete.next.next;
  }
  
