let h1 = [3,2,1,1,1]
let h2 = [4,3,2]
let h3 = [1,1,4,1]


function equalStacks(h1, h2, h3) {
    // Write your code here
    //get the sum of each array - x
    //compare the sum of each array
    //if i return false, pop tallest array
    //continue until i either return true or false
    let sum1 = getSum(h1);
    let sum2 = getSum(h2);
    let sum3 = getSum(h3);
    // console.log(`${sum1} ${sum2} ${sum3}`)

    while(!checkNumbers(sum1,sum2,sum3)){
      let result = Math.max(sum1,sum2,sum3)

      if(result === sum1){
        h1.shift()
        sum1 = getSum(h1)
      }else if (result === sum2){
        h2.shift()
        sum2 = getSum(h2)
      }else{
        h3.shift()
        sum3 = getSum(h3)
      }
    }
    
    return sum1 

}

console.log(equalStacks(h1,h2,h3))
    
    


function checkNumbers(num1,num2,num3){
  let sum;
  if( (num1 === num2) && (num2 === num3) ){
    return true;
  }else{
    return false
  }
}

function getSum(arr){
  let sum = arr.reduce((total, val) => total + val, 0);
  return sum; 
}
