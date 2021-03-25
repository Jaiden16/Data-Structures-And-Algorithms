/* if given a string of lower case letters
the objective is to remove duplicate letters
that are adjacent to each other

ie: "loop"
output: "lp"

Ie: "room"
out: "rm"

i can always assume input would be lower case
*/

// input: "abbaca"
// output: "ca"

/*
  //loop through string and push into an array
  loop through the array check if current index plus
  [a,c,a,b,b]
  output: a,c,a
  [a,c,a,a]
  'a,c'
  "ca" 
  
   */

/**
 * i can use two loops to check 1st letter and letter plus 1st letter to see if letters are adjacent to each other
 */

function adjacentDuplicate(str){
    let arr = [];
    //loop through string push into array 1 char at a time
    
    for(let i = 0; i < str.length; i ++){
      if(arr[arr.length -1] === str[i] ){
        console.log(arr[arr.length -1])
        arr.pop()
      }else{
        arr.push(str[i])
      }
    }
    return arr.join("")  
    
  }
  
  console.log(adjacentDuplicate("abbaca"))  