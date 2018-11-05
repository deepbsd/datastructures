// These are answers to some of the exercises from the linked list exercises


function findMiddle(linkedList){
    let node = linkedList.head;
    let count = 0;
    while (node !== null){
        node = node.next;
        count++;
    }
    for (let i = count; i <= Math.round(count/2); i--){
        node = node.prev;
    }
    return node;
}


function find3rdFromEnd(list){
    let node = linkedList.head;
    let count = 0;
    while (node !== null){
        node = node.next;
        count++;
    }
    for (let i = count; i <= count-3; i--){
        node = node.prev;
    }
    return node;
}


function reverseLinkedList(linkedList){
  let LL = new LinkedList();
  let node = null;
  for (let i=0; i<linkedList.length-1; i++){
      node = node.next;
  }
  // node should now point to the last node in linkedList
  for (let i=0; i<linkedList.length; i++){
      LL.insert(i, node);
      node = linkedList.prev;
  }
  return LL;
}


// This functions assume I can write to the linked list
// Perhaps I could also create a copy if I cannot;
// There's also the fast and slow pointer approach to 
// finding a cycle
function hasCycle(linkedList){
    let node = null;
    for (let i=0; i<linkedList.length; i++){
        node = linkedList.next;
        if (node.visited){ return true; }
        node.visited = true;
    }
    return false;
}

function hasCycle1(linkedList){
    let node = linkedList.head;
    if (node === null){ return false; }
    let slow = node;
    let fast = node.next;
    for (let i=0; i<linkedList.length; i++){
        if (slow === fast) { return true; }
        slow = slow.next;
        fast = fast.next.next;
    }
    return false;
}
