// Implement a Linked List


class LinkedList = {

    constructor(){
        this.head = null;
        this.length = 0;
    }

    insert(index, value){
        if (index < 0 || index >= this.length){
            throw new Error('Index error!')
        }

        const newValue = {value}

        if (index = 0){
            this.head = newValue;
            this.next = null;
            this.length++;
        } else {
            // find node to insert after
            // change that nodes next pointer to point two values down
            // set node after's value to newValue
            const prevNode = _find(index-1);
            const node = _find(index);
            const tmp = prevNode.next;

            prevNode.next = newValue;

            newValue.next = tmp;
            
        }

        

        

    }

    _find(index){
        // iterate through structure until we increment 'index' number of times
        // return that node
    }

    get(index){
        // return the node found by index
    }

    remove(index){
        // find the node prior to the index
        // set priorNode.next to nodeToDelete.next
        //
    }


}
