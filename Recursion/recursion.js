/*
    What is recursion? - A process that calls itself.

    it's everywhere
    *Json.parse / JSON.stringify
    *document.getElementByID and DOM traversal algorithms
    *Object traversal
    *We will see it with more complex data structures
    *It's sometimes a cleaner alternative to iteration


*/

//simple recursive function
function addNum(num){
    //base case
    //if num is equal to 10, log 10 and return the number
    if (num === 10){
        console.log(num)
        return
    }
    //log the number and then increment it
    console.log(num)
    num ++
    //call add number again and repeat the process
    addNum(num)
}

//addNum(0)


function totalSum(num){
    //base case
    if(num === 1){
        return  1
    }
    
    let result = num + totalSum(num-1)
    return result

}
//console.log(totalSum(8))
/**
 
 */

//power recursive
function power(base,exp){
    if (exp == 0){
        return 1
    }
    return base * power(base, exp - 1)
}
//console.log(power(2,10))

//factorial recursive
function factorial(num){
    //base case
    if (num < 0){
        return 0
    }
    //if num <= 1 return number
    if (num <= 1){
        return 1;
    }
    return num * factorial(num - 1)
} 
console.log(factorial(5))

//helper method

function collectEvenValues(arr){
    let result = []

    function helper(helperInput){
        if(helperInput.length === 0){
            return;
        }

        if(helperInput[0] % 2 == 0 ){
            result.push(helperInput[0])
        }
        helper(helperInput.slice(1))
    }
     
    helper(arr)
    return result;
}
//console.log(collectEvenValues([0,1,2,3,4,5,6]))