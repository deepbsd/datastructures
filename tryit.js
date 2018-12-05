// create a linked list class

class LinkedList{
    constructor(){
        this.head = null;
        this.length = 0;
    }

    insert(index, value){

        if (index > this.length || index < 0){
            throw new Error("Index error!");
        }
        
        const newNode = { value };

        
        if (index === 0){

            newNode.next = this.head;
            this.head = newNode;

        }else{

            // **** ARRGGGGGGHHHHHH!!!!!
            // find node we want to insert after
            const prevNode = this._find(index-1);
            newNode.next = prevNode.next;
            prevNode.next = newNode;

        }

        this.length++;
    }


    _find(index){
        let node;
        for (let i=0; i<index; i++){
            node = node.next;
        }
        return node;
    }

    get(index){
        return _find(index).value;
    }

    remove(index){
        if (index > this.length || index < 0){
            throw new Error("index Error!");
        }

        if (index === 0){
            
            this.head = this.head.next;
            this.length--;

        } else {

            let prevNode = _find(index-1);
            prevNode.next = prevNode.next.next;
            this.length--;

        }



    }



}


module.exports = {LinkedList}
