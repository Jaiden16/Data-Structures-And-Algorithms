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

    BFS(){
        //Create a queue(this can be an array) and a variable to store the values of nodes visited
        let queue = [];
        let data = [];
        let node = this.root;
        //Place the root node in the queue
        queue.push(node);
        
        //loop as long as there is something in the queue
        while(queue.length){
            //-Dequeue a node from the queue and push the value of the node
            //into the variable that stores the nodes
            node = queue.shift();
            data.push(node.value);
            //-if there is a left property on the node dequeue - add it to the queue
            if(node.left)queue.push(node.left);
            //-if there is a right property on the node dequeue = add it to the queue
            if(node.right)queue.push(node.right);
        }
        return data;
    }

    DFS_PreOrder(){
        //Create a variable to store the valiues of nodes visited
        let data = [];
        
        //Store the root of the BST in a variable called current
        //let current = this.root;
       
        //Write a helper function which accepts a node
       function traverse(node){
           //-Push the value of the node to the variable that stores the values
           data.push(node.value);
           //if the node has a left property, call the helper function with the left property of the node
           if(node.left)  traverse(node.left);
           //if the node has a right property, call the helper function with the right property on the node
           if(node.right) traverse(node.right);
        }
        
        //invoke the helper function with the current variable
        traverse(this.root);
        //return the array of values
        return data;
    }

    DFS_PostOrder(){
        //Create a variable to store the valiues of nodes visited
        let data = [];
        
        //Store the root of the BST in a variable called current
        //let current = this.root;
       
        //Write a helper function which accepts a node
       function traverse(node){
           //if the node has a left property, call the helper function with the left property of the node
           if(node.left)  traverse(node.left);
           //if the node has a right property, call the helper function with the right property on the node
           if(node.right) traverse(node.right);
           
           //-Push the value of the node to the variable that stores the values
           data.push(node.value);
        }
        
        //invoke the helper function with the current variable
        traverse(this.root);
        //return the array of values
        return data;

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

tree.Insert(10);
//console.log(tree);
tree.Insert(6);
//console.log(tree);
tree.Insert(15);
//console.log(tree);
tree.Insert(3);
//console.log(tree);
tree.Insert(8);
tree.Insert(20);
//console.log(tree);
//console.log(tree.Find(4))
// console.log(tree.BFS());
console.log(tree.DFS_PreOrder());
console.log(tree.DFS_PostOrder());