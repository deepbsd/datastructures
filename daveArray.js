import memory from './memory';

class Array {
    constructor(){
        this.length = 0;
        this.ptr = memory.allocate(this.length);
    }

    push(value){
        this._resize(this.length+1);
        memory.set(this.ptr + this.length, value);
        this.length++;
    }


    resize(size){
        const oldPtr = this.ptr;
        this.ptr = memory.allocate(size);
        if (this.memory === null){
            throw new Error("Out of memory!")
        }
        memory.copy(oldPtr, this.ptr, size);
        memory.free(oldPtr);
    }

    get(index){
        if (index < 0 || index > this.length){
            throw new Error("Index error!");
        }
        return memory.get(this.ptr + index);
    }

    insert(ptr, value){

    }

    pop(){

    }


    remove(ptr){

    }


}


module.exports = Array
