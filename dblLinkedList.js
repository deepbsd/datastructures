class dblLinkedList {
    constructor() {
        this.length = 0;
        this.head = null;
        this.tail = null;
    }

     insert(index, value) {
        if (index < 0 || index > this.length) {
            throw new Error('Index error');
        }

        const newNode = {
            value
        };

        if (index == 0) {
            newNode.next = this.head;
            newNode.prev = this.tail;
            this.head = newNode;
            this.tail = newNode;
        }
        else {
            // Find the node which we want to insert after
            const node = this._find(index - 1);
            newNode.next = node.next;
            node.prev = this._find(index-2);
            node.next = newNode;
            node.tail = node;
        }

        this.length++;
    }

    _find(index) {
        let node = this.head;
        for (let i=0; i<index; i++) {
            node = node.next;
        }
        return node;
    }
    
    get(index) {
        
        console.log(this);
        if (index < 0 || index >= this.length) {
            throw new Error('Index error');
        }
        
        return this._find(index)
    }
    remove(index) {
        if (index < 0 || index >= this.length) {
            throw new Error('Index error');
        }

        if (index == 0) {
            this.head = this.head.next;
        }
        else {
            // Find the node before the one we want to remove
            const node = this._find(index - 1);
            node.next = node.next.next;
            node.prev = this._find(index-2);
        }

        this.length--;
    }

}    

module.exports = dblLinkedList;