class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    Insert(val) {

        let newNode = new Node(val);
        if (!this.root) {
            return this.root = newNode;
        }


        let current = this.root;
        // console.log("line 14");
        while (true) {
            if (val === current.value) return null;

            if (val < current.value) {
                if (current.left === null) {
                    current.left = newNode;
                    return this;
                } else {
                    current = current.left;
                }
            }
            else if (val > current.value) {
                if (current.right === null) {
                    current.right = newNode;
                    return this;
                } else {
                    current = current.right;
                }
            }

        }

    }

    Find(value) {

        // console.log('line 41:', "node:", start, 'value:', valueArg)

        if (!this.root) return "no root";
        //let found = false;

        function recursive(bst) {
            if (value === bst.value) {
                console.log("found it")
                // found = true;
                return true;
            }

            if (bst.left !== null && value < bst.value) {
                return recursive(bst.left);
            }

            if (bst.right !== null && value > bst.value) {
                return recursive(bst.right);
            }

            return false;
        }
        let found = recursive(this.root)
        return found;
    }

    Contain(value){

        if(!this.root) return false;
        let found = false;
        let current = this.root;

        while(!found && current !== null){
            if(value < current.value){
                if(current.left !== null){
                    current = current.left;
                }
            }else if(value > current.value){
                if(current.right !== null){
                    current = current.right;
                }
            }else{
                return true;
            }
        }
        return false;
    }
}













class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

var tree = new BinarySearchTree();


tree.Insert(7);
//console.log(tree);
tree.Insert(5);
//console.log(tree);
tree.Insert(8);
//console.log(tree);
tree.Insert(4);
//console.log(tree);
tree.Insert(6);
//console.log(tree);
console.log(tree.Find(4))

// function add (a , b){
//  let sum = a + b;
//  return sum;
// }
// let result = add(1,2);
// console.log(result);