//linear time
/*function hash(key,arrayLength){
    let total = 0;
    for(let char of key){
        //map 'a' to 1, 'b' to 2, 'c' to 3, etc
        let value = char.charCodeAt(0) - 96;
        total = (total+ value) % arrayLength;
    }
    return total;
}
*/

//only works for strings
// function hash(key,arrayLength){
//     let total = 0;
//     let prime = 31;
//     for(let i = 0; i < Math.min(key.length, 100); i++){
//         let char = key[i];
//         let value = char.charCodeAt(0) - 96;
//         total = (total * prime + value) % arrayLength;
//     }
//     return total;
// }

//Dealing with Collisions
/*
    Even with a large array and a great hash function collisions are inevitable.

    There are many strategies for dealing with collisions, but we'll focus on two;

    1: Seperate Chaining
    2: Linear probing 

    Seperate Chaining

    With seperate chaining, at each index in our array we store value usoing a 
    more sophisticaded data structure (eg an array or a linked list)

    this allows us to store multiple key value pairs at the same position

    Linear Probing

    with linear probing, wnen we find a collision, we search through the array
    to find the next empty slot

    unlike with seperate chaining, this allows us to store a single key-value at each index

*/

/*
        HashTable Class

        Set/GET

        Set
        1. Accepts a key and a value
        2. Hashes the key
        3. Stores the key-value pair in the hash table array
           via seperate chaining
        
        Get
        1. Accepts a key
        2. Hashes the key
        3. Retrieve the value
        4. If the key isn't there return undefined 

*/

class HashTable {
    constructor(size = 6) {
        this.keyMap = new Array(size);
    }

    hash(key) {
        let total = 0;
        let prime = 31;
        for (let i = 0; i < Math.min(key.length, 100); i++) {
            let char = key[i];
            let value = char.toLowerCase().charCodeAt(0) - 96;
            total = (total * prime + value) % this.keyMap.length;
        }
        return total;
    }


    Set(key, value) {
        let index = this.hash(key)
        if (!this.keyMap[index]) {
            this.keyMap[index] = [];
        }
        this.keyMap[index].push([key.toLowerCase(), value])
        return index;
    }

    Get(key) {
        let index = this.hash(key.toLowerCase())
        if (this.keyMap[index]) {
            for (let i = 0; i < this.keyMap[index].length; i++) {
                if (this.keyMap[index][i][0] === key.toLowerCase()) {
                    return this.keyMap[index][i]
                }
            }
        }
        return undefined;
    }

    values() {
        let valuesArr = [];
        for (let i = 0; i < this.keyMap.length; i++) {
            if (this.keyMap[i]) {
                for (let j = 0; j < this.keyMap[i].length; j++) {
                    if (!valuesArr.includes(this.keyMap[i][j][1]))
                        valuesArr.push(this.keyMap[i][j][1])
                }
            }
        }
        return valuesArr;
    }

    keys() {
        let keysArr = [];
        for (let i = 0; i < this.keyMap.length; i++) {
            if (this.keyMap[i]) {
                for (let j = 0; j < this.keyMap[i].length; j++) {
                    if (!keysArr.includes(this.keyMap[i][j][0]))
                        keysArr.push(this.keyMap[i][j][0])
                }
            }
        }
        return keysArr;
    }
}

// let log = console.log
// let table = new HashTable()
// table.Set("hello world", "hi");
// table.Set("Goodbye world", "bye")
// table.Set("Jayden", "The Son")
// table.Set("jaiden", "the father")
// table.Set("Pamela", "the mom")
// log(table.keyMap[3]);
// log(table.Get("jaiden"))
// log(table.keys())
// log(table.values())

function twoSum(nums, target){
    let obj = {};
    for( let i = 0; i < nums.length; i ++){
        let curr = nums[i]
        if(obj[curr]){
            return [obj[curr], i]
        }
        obj[target - curr] = i
        console.log(obj)
    }
}
            
let arr = [2 , 5, 3, 4, 7, 10] 
console.log(twoSum(arr, 9))