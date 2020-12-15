const Stack = require("./Stack_Class")
let stack1 = new Stack()
let stack2 = new Stack()
let stack3 = new Stack()

let h1 = [3,2,1,1,1]
let h2 = [4,3,2]
let h3 = [1,1,4,1]

stack1.fromArray(h1)
stack2.fromArray(h2)
stack3.fromArray(h3)

function equalStacks(stack1, stack2, stack3) {
    // Write your code here
    //get the sum of each array - x
    //compare the sum of each array
    //if i return false, pop tallest array
    //continue until i either return true or false
    let sum1 = stack1.amount()
    let sum2 = stack2.amount();
    let sum3 = stack3.amount();
    // console.log(`${sum1} ${sum2} ${sum3}`)

    while(!checkNumbers(sum1,sum2,sum3)){
      let result = Math.max(sum1,sum2,sum3)

      if(result === sum1){
        stack1.pop()
        sum1 = stack1.amount()
      }else if (result === sum2){
        stack2.pop()
        sum2 = stack2.amount()
      }else{
        stack3.pop()
        sum3 = stack3.amount()
      }
    }
    
    return sum1 
}

console.log(equalStacks(stack1,stack2,stack3))
    
function checkNumbers(num1,num2,num3){
  if( (num1 === num2) && (num2 === num3) ){
    return true;
  }else{
    return false
  }
}