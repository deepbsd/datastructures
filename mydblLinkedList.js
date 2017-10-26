/*
*  this exercise was for exercism.io on the linked-list exercise
*  I copy it here just to show off that I finally got this stuff to work.  
*  Nicholas Zakas has a wonderful article about doubly linked lists that 
*  helped me get started.  His code is so clear that I was inspired to solve
*  the exercism problem...
*/
function DoublyLinkedList(){
	this._length = 0;
	this._head = null;
	this._tail = null;
}

DoublyLinkedList.prototype = {

	count: function(){
		return this._length;
	},

	delete: function(data){
		var count = 0;
		var current = this._head;
		while (count < this._length){
			if (current.data == data){
				var val = current.data;
				this.remove(count);
				return val;
			} else {
				current = current.next;
				count++;
			}
		}
	},

	pop: function(){
		var val = this._tail.data;
		this.remove(this._length-1);
		return val;
	},

	push: function(data){
		//create a new item object and place data in it
		var node = {
			data: data,
			next: null,
			prev: null
		};
		//if no items in list...
		if (this._length == 0){
			this._head = node;
			this._tail = node;
		} else {
			//attach to the tail node
			this._tail.next = node;
			node.prev = this._tail;
			this._tail = node;
		}
		// update the length
		this._length++;
	},

	remove: function(index){
		//check for out-of-bounds values
		if (index > -1 && index < this._length){
			var current = this._head,
			i = 0;
			//special case: remove first item
			if(index === 0){
				this._head = current.next;
				 /*
                 * If there's only one item in the list and you remove it,
                 * then this._head will be null. In that case, you should
                 * also set this._tail to be null to effectively destroy
                 * the list. Otherwise, set the previous pointer on the
                 * new this._head to be null.
                 */
                 if (!this._head){
                 	this._tail = null;
                 } else {
                 	this._head.prev = null;
                 }
                 //special case: removing last item
                 } else if (index === this._length -1){
                 	current = this._tail;
                 	this._tail = current.prev;
                 	this._tail.next = null;
                 } else {
                 	//find the right location
                 	while (i++ < index){
                 		current = current.next;
                 	}
                 	//skip over the item to remove
                 	current.prev.next = current.next;
                 }
                 // decrement the length
                 this._length--;
                 //return the value
                 return current.data;
			} else {
				return null;
			}
		},

	shift: function(){
		var val = this._head.data;
		this.remove(0);
		return val;
	},

	unshift: function(data){
		//create a new item object and place data in it
		var node = {
			data: data,
			next: null,
			prev: null
		};
		//if no items in list...
		if (this._length == 0){
			this._head = node;
			this._tail = node;
		} else {
			//attach to the first node
			this._head.prev = node;
			node.next = this._head;			
			this._head = node;
		}
		// update the length
		this._length++;
	}

}



module.exports = DoublyLinkedList;