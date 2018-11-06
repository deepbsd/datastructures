// These are answers to some of the exercises from the linked list exercises


function findMiddle(linkedList){
    let node = linkedList.head;
    let count = 0;
    while (node !== null){
        node = node.next;
        count++;
    }
    node = linkedList.head;
    for (let i = 0; i <= Math.round(count/2); i++){
        node = node.next;
    }
    return node;
}

function findMiddle1(linkedList){
    let slow = linkedList.head;
    let fast = linkedList.head;

    while (fast.next !== null && fast !== null){
        slow = slow.next;
        fast = fast.next.next;
    }
    return slow;
}

function find3rdFromEnd(list){
    let node = linkedList.head;
    let count = 0;
    while (node !== null){
        node = node.next;
        count++;
    }
    let limit = count-3;
    let node = linkedList.head;
    for (let i = 0; i <= limit; i++){
        node = node.next;
    }
    return node;
}

function find3rdFromEnd1(list){
    let node = list.head;
    let slow = list.head;
    let count = 0;
    while (node !== null){
        if (count >= 2){
            slow = slow.next;
        }
        node = node.next;
        count++;
    }
    return slow;
}

function reverseLinkedList(linkedList){
    let prevptr = null, currptr = linkedList.head; 
    let nextptr = currptr.next;
    
    while (currptr !== null){
        // step 1 is to increment the three pointers, to 
        // move them to the right so to speak
        prevptr = currptr; nextptr = currptr.next.next; currptr = currptr.next;

        // step 2 is to make the pointers "rotate" so the next becomes
        // the previous and so on
        currptr.next = null; nextptr.next = currptr; 
    }
    linkedList.head = currptr;
    return linkedList;
}

//function reverseLinkedList(linkedList){
//  let LL = new LinkedList();
//  let node = linkedList.head;
//  for (let i=0; i<linkedList.length-1; i++){
//      node = node.next;
//  }
//  // node should now point to the last node in linkedList
//  for (let i=0; i<linkedList.length; i++){
//      LL.insert(i, node);
//      node = linkedList.prev;
//  }
//  return LL;
//}


// This functions assume I can write to the linked list
// Perhaps I could also create a copy if I cannot;
// There's also the fast and slow pointer approach to 
// finding a cycle
function hasCycle(linkedList){
    let node = linkedList.head;
    for (let i=0; i<linkedList.length; i++){
        if (node.visited){ return true; }
        node.visited = true;
        node = node.next;
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

module.exports = { hasCycle1, hasCycle, findMiddle, findMiddle1, find3rdFromEnd, find3rdFromEnd1, reverseLinkedList }
