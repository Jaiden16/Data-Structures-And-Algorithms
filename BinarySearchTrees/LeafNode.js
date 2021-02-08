/* Consider all the leaves of a binary tree, from left
    to right order, the values of those leaves form a
    LEAF VALUE SEQUENCE

    Return true if and only if the two given trees with head
    nodes root1 and root2 are leaf-similar.
 */

 const BinarySearch = require("./BinaryTree");

let leafSimilar = (root1,root2)=>{
    
    function dfs(node, leafs){
        if(node !== null){
            if(node.left == null && node.right == null){
                leafs.push(node.value)
            }
            dfs(node.left,leafs)
            dfs(node.right,leafs)
        }
    }

    let leaf1 = [];
    let leaf2 = [];
    dfs(root1,leaf1);
    dfs(root2,leaf2);
    console.log(leaf1)
    console.log(leaf2)

    if(leaf1.length == leaf2.length){
        for(let i = 0; i < leaf1.length; i++){
            if(leaf1[i] !== leaf2[i]){
                return false
            }
        }
        return true;
    }
}

let array1 = [10,6,15,3,8,20];
let array2 = [10,6,15,3,8,25];

let tree1 = new BinarySearch();
let tree2 = new BinarySearch();
tree1.FromArray(array1);
tree2.FromArray(array2);

console.log(leafSimilar(tree1.root,tree2.root));


