const LinkedList = require("./linkedListsUdemy")
// const Node = require("./linkedListsUdemy")
//   Definition for singly-linked list.
function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */



var mergeTwoLists = function (l1, l2) {
    let i = 0;
    let j = 0;
    let result = new LinkedList();

    //if both list are empty return an empty array
    if (l1.length === 0 && l2.length === 0) {
        return []
    }
    //if one list is empty return the other list
    if (l1.length === 0) {
        return l2
    } else if (l2.length === 0) {
        return l1
    }

    // if (l1.head.val < l2.head.val) {
    //     result.push(l1.head.val)
    //     l1.shift()

    // } else {
    //     result.push(l2.head.val)

    // }

    while ((l1.length !== 0) && (l2.length !== 0)) {

        if (l1.head.val < l2.head.val) {
            result.push(l1.head.val)
            l1.shift()
        } else {
            result.push(l2.head.val)
            l2.shift()
        }

    }

    while (l1.length > 0) {
        result.push(l1.head.val)
        l1.shift()
    }

    while (l2.length > 0) {
        result.push(l2.head.val)
        l2.shift()
    }
    return result
};

//write a function that takes in an array and turns it into a linked list
let arrayToLinkedList = (arr) => {
    let linkedList = new LinkedList()
    if (arr === null) {
        linkedList.push("undefined")
    }

    for (let i = 0; i < arr.length; i++) {
        linkedList.push(arr[i])
    }
    return linkedList
}

let l1 = arrayToLinkedList([1, 2, 4])
let l2 = arrayToLinkedList([3, 4, 5, 5])
let l3 = arrayToLinkedList([])
let l4 = arrayToLinkedList([])
// console.log(l1)
// let result = mergeTwoLists(l1, l2)
// console.log(result)

var mergeTwoLists2 = function (l1, l2) {
    let result = null
    let tail = null;

    //if both list are empty return an empty array
    if (!l1 && !l2) {
        return null
    }
    //if one list is empty return the other list
    if (!l1) {
        return l2
    }

    if (!l2) {
        return l1
    }


    while (l1 && l2) {

        if (l1.val < l2.val) {
            
            if (result === null) {
                result = new ListNode(l1.val)
                tail = result
            } else {
                tail.next = new ListNode(l1.val)
                tail = tail.next
            }
            l1 = l1.next
        } else {
            
            if(result === null){
                result = new ListNode(l2.val)
                tail = result
            }else{
                tail.next = new ListNode(l2.val)
                tail = tail.next
            }
            l2 = l2.next
        }

    }

    while (l1) {
        tail.next = new ListNode(l1.val)
        tail = tail.next
        l1 = l1.next
    }

    while (l2) {
        tail.next = new ListNode(l2.val)
        tail = tail.next
        l2 = l2.next
    }
    return result
};

let result2 = mergeTwoLists2(l1.head, l2.head)
console.log('146',result2)
console.log(JSON.stringify(result2,null,2))
