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

    insert(index, value){
        if (index < 0 || index > this.length){
            throw new Error("Index Error!");
        }

        if (this.size>this.length){ memory.allocate(this.size * SIZE_RATIO) }

        memory.copy(this.ptr, this.size+1, this.ptr.length);
        memory.set(this.index, value);

    }

    pop(){
        if (this.length = 0){
            throw new Error("Nothing left in memory!");
        }

        let value = memory.get(this.ptr+this.length-1);
        this.length--;
        return value;
    }



    remove(index){
        if (index<0 || index>this.length){
            throw new Error("Index Error!");
        }
        memory.free(this.index);
        memory.copy(this.index+1, this.length-1, this.length-this.index+1);
        this.length--;

    }


    Array.SIZE_RATIO = 3;
}


module.exports = Array
