//piece of data - val
//reference to next node - next

class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class SingleLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val) {
        let newNode = new Node(val);

        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            this.tail.next = newNode
            this.tail = newNode
        }
        this.length++
        return this
    }
    pop() {
        //if there are no nodes in the list, return undefined
        if (!this.head) {
            return 'nothing to return'
        }
        //loop through the list until you each the tail
        let current = this.head;
        let newTail = current

        while (current.next) {
            newTail = current;
            current = current.next
        }

        //set the tail to be the 2nd to last node
        this.tail = newTail
        //set the next propety of the 2nd to last node to be null
        this.tail.next = null
        //decrement the length of the list by 1
        this.length--
        //check to see if the list is empty
        if (this.length === 0) {
            this.head = null
            this.tail = null
        }
        //return the value of the node removed
        return current
    }

    shift() {
        //if there are no nodes, return undefined
        if (!this.head) {
            return 'nothing to return'
        }
        //store the current head property in a variable
        let current = this.head
        //set the head property to be the current head's next property
        this.head = current.next
        //decrement the length by 1
        this.length--
        //return the value of the node removed
        return current
    }

    unshift(val) {
        //This function should accept a value
        //Create a new node using the value passed to the function
        let newNode = new Node(val)
        //If there is no head property on the list, set the head and tail to be
        //the newly created node
        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            //Otherwise set the newly created node's next property to be the current head
            //property on the list
            newNode.next = this.head
            //Set the head property on the list to be that newly created node
            this.head = newNode
            //Increment the length of the list by 1
        }
        this.length++
        //Return the linked list
        return this
    }

    get(idx) {
        //This function should accept an index
        //If the index is less than Zero or grater thatn or equal to the length of the list
        //return null
        //Loop through the list until you reach the index and return the node at the specific index
        if ((idx < 0 || idx >= this.length) ||
            // || isNaN(idx) 
            typeof (idx) !== 'number') {
            return null;
        }
        let counter = 0;
        let current = this.head
        while (counter !== idx) {
            current = current.next;
            counter++
        }
        return current;
    }

    set(idx, val) {
        let node = this.get(idx)
        if (node) {
            node.val = val
            return node
        }
        return false
    }

    insert(index, val) {
        //if the index is less then zero or greater that the length, return false
        if (index < 0 || index > this.length) {
            return false
        }
        //if the index is the same as the length, push a new node to the end of the list
        if (index === this.length) {
            this.push(val)
            return true
        }
        //if the index is 0, unshift a new node to the start of the list
        if (index === 0) {
            this.unshift(val)
            return true
        }
        let newNode = new Node(val)
        //otherwise, using the get method, access the node at the index -1
        let oldNode = this.get(index - 1)
        let temp = oldNode.next
        //set the next property on that node to be the new node
        oldNode.next = newNode
        //set the next property on the new node to be the previous next
        newNode.next = temp

        //increment the length
        this.length++
        //return true
        return true
    }

    remove(index){
        //if the index is less then 0 or greater then the length return undefined
        if (index  < 0 || index >= this.length){
            return null
        }

        //if the index is the same as the length -1 pop
        if (index === this.length -1){
            return this.pop()
        }
        //if the index is 0, shift
        if (index === 0){
            return this.shift()
        }
        //otherwise, using the get method, access the node at the index -1
        let prev = this.get(index -1)
        let removed = prev.next
        //set the next property on that node to be the next of the next node
        prev.next = removed.next
        //decrement the length
        this.length --
        //return the value of the node removed
        return removed
    }





    traverse() {
        let current = this.head
        while (current) {
            console.log(current.val)
            current = current.next
        }
    }
}

module.exports = SingleLinkedList



list = new SingleLinkedList()

// console.log(list)

// console.log(list.unshift("add me"))
 list.push("Jaiden")
 list.push("is")
 list.push("the")
 list.push("best")
 list.shift()
//  list.pop()
//  list.pop()
//  console.log(list)
// console.log(list)
// console.log(list.remove(4))
// list.traverse()
// console.log(list)
// list.traverse()
// console.log(list.get(1))
// console.log(list.set(1, 'always'))
// console.log(list.get(1))
// list.traverse()
// console.log(list.shift())
// console.log('114',list.unshift("I am"))
// console.log(list.pop())
// console.log(list.pop())
// console.log(list)
// console.log(list.pop())