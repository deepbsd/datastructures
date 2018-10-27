class HashMap {
    constructor(initialCapacity=8) {
        this.length = 0;
        this._slots = [];
        this._capacity = initialCapacity;
<<<<<<< HEAD
    }

    static _hashString(string) {
        let hash = 5381;
        for (let i=0; i<string.length; i++) {
            hash = (hash << 5) + hash + string.charCodeAt(i);
            hash = hash & hash;
        }
        return hash >>> 0;
=======
        this._deleted = 0;
    }

    get(key) {
        const index = this._findSlot(key);
        if (this._slots[index] === undefined) {
            throw new Error('Key error');
        }
        if (this._slots[index].deleted){
            return 'Item is deleted!';
        }
        return this._slots[index].value;
>>>>>>> db9e95136b437d1320669af06ae1fec4c4ca3b83
    }

    set(key, value) {
        const loadRatio = (this.length + 1) / this._capacity;
        if (loadRatio > HashMap.MAX_LOAD_RATIO) {
            this._resize(this._capacity * HashMap.SIZE_RATIO);
        }

        const index = this._findSlot(key);
        this._slots[index] = {
            key,
<<<<<<< HEAD
            value
=======
            value,
            deleted: false
>>>>>>> db9e95136b437d1320669af06ae1fec4c4ca3b83
        };
        this.length++;
    }

<<<<<<< HEAD
=======
    remove(key) {
        const index = this._findSlot(key);
        const slot = this._slots[index];
        if (slot === undefined) {
            throw new Error('Key error');
        }
        slot.deleted = true;
        this.length--;
        this._deleted++;
    }

>>>>>>> db9e95136b437d1320669af06ae1fec4c4ca3b83
    _findSlot(key) {
        const hash = HashMap._hashString(key);
        const start = hash % this._capacity;

        for (let i=start; i<start + this._capacity; i++) {
            const index = i % this._capacity;
            const slot = this._slots[index];
            if (slot === undefined || slot.key == key) {
                return index;
            }
        }
    }

<<<<<<< HEAD
   _resize(size) {
=======
    _resize(size) {
>>>>>>> db9e95136b437d1320669af06ae1fec4c4ca3b83
        const oldSlots = this._slots;
        this._capacity = size;
        // Reset the length - it will get rebuilt as you add the items back
        this.length = 0;
        this._slots = [];

        for (const slot of oldSlots) {
            if (slot !== undefined) {
                this.set(slot.key, slot.value);
            }
        }
    }
<<<<<<< HEAD
}

HashMap.MAX_LOAD_RATIO = 0.9;
HashMap.SIZE_RATIO = 3;
=======

    static _hashString(string) {
        let hash = 5381;
        for (let i=0; i<string.length; i++) {
            hash = (hash << 5) + hash + string.charCodeAt(i);
            hash = hash & hash;
        }
        return hash >>> 0;
    }
}

HashMap.MAX_LOAD_RATIO = 0.9;
HashMap.SIZE_RATIO = 3;

module.exports = HashMap;
>>>>>>> db9e95136b437d1320669af06ae1fec4c4ca3b83