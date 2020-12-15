/**
 * What is a Stack? - An abstarct Data structure
 * LIFO - Last in first out. 
 * 
 * How is it used?
 * Think about a stack of plates, or a stack of books
 * as you pile it up the last thing(or the topmost thing) is removed first
 * 
 * Type of stacks 
 * - Recursion
 * - Managaing function invocations
 * - Undo / Redo
 * - Routing(the history object) is treated like a stack 
*/

/**
 * Pushing Psuedocode
 * -The function should accept a value
 * 
 * -Create a new node with that value
 * 
 * -If there are no node in the stack, set the first and last property
 *  to be the newly created node
 * 
 * -If there is at least one node create a variable that stores the current first property on the stack
 * -Reset the first property to be the newly created node
 * 
 * -Set the next property on the node to be the previously created variable
 * Increment the size of the stack by 1
*/

/**
 * Pop Psuedocode
 * -If there are no nodes in the stack, return null
 * -Create a temporary variable to store the first property on the stack
 * -If there is only 1 node, set the first and last property to be null
 * -If there is more then one node, set the first property to be the next property on the current first
 * -Decrement the size by 1
 * -Return the value of the node removed
*/

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

//A stack class
class Stack {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
        this.total = 0;
    }

    push(val) {
        let newNode = new Node(val);

        if (!this.first) {
            this.first = newNode;
            this.last = newNode;
            this.total += this.first.value;
            this.size ++
        }
        else {
            let temp = this.first;
            this.first = newNode;
            this.first.next = temp;
            this.total += this.first.value;
            this.size ++
        }
        return `value added: ${newNode.value} new total: ${this.total}  new size: ${this.size}`;
    }

    pop() {
        if (!this.first) return null;
        var temp = this.first;
        if (this.first === this.last) {
            this.last = null;
        }
        this.first = this.first.next;
        this.size--;
        this.total -= temp.value
        return `value removed: ${temp.value} new total: ${this.total} new size: ${this.size}`;

    }

    peek(){
        return this.first? this.first.value : null
    }

    isEmpty(){
        return !this.first? true : false
    }

    amount(){
        return this.total;
    }

    fromArray(arr){
        // for( let el of arr){
        //     this.push(el)

        // }
        for(let i = arr.length-1; i >= 0; i --){
            this.push(arr[i])
        }
        return this.first
    }
}

module.exports = Stack
// let array = [1,2,4]

// let stack = new Stack()
// console.log(stack.fromArray(array))
// console.log(stack.total)
// console.log(stack.push(1))
// console.log(stack.push(2))
// console.log(stack.push(4))
// console.log(stack.pop())
// console.log(stack.peek())
// console.log(stack.isEmpty())

// for (let el of array){
//     sum += el
// }


// console.log(sum)
// console.log(sum2)

