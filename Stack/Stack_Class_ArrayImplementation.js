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


//A stack class
class Stack {
    constructor() {
        this.array = []
        this.size = 0;
        this.total = 0;
    }

    push(val) {
        this.array.push(val);
        this.size = this.array.length;
        this.total += val;
        return `value added: ${val} new total: ${this.total}  new size: ${this.size}`;
    }

    pop() {
        if (this.size = 0) return null;
        
        let temp = this.array[this.array.length-1];
        this.array.pop();
        this.size = this.array.length;
        this.total -= temp
        return `value removed: ${temp} new total: ${this.total} new size: ${this.size}`;

    }

    peek(){
        return this.size > 0? this.array[this.array.length-1] : null;
    }

    isEmpty(){
        return this.size > 0? false : true;
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
        return this.array
    }
}

// module.exports = Stack
let stack = new Stack()
let array = [1,2,4]
console.log(stack);
console.log(stack.fromArray(array))
console.log(stack.peek())
// stack.push(1)
// stack.push(2)
// console.log(stack);
// console.log(stack.total)
// stack.pop()
// console.log(stack);
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

