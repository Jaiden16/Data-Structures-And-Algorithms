var isValid = function(s) {
    // if string is empty return true
    if ( s === null || s.length <= 0 ) return true;
    //split string
    arr = s.split('')
    // create a "stack"
    stack = []
    //loop through string 
    for(let  i of arr){
        if (i === '[') stack.push(']')
        else if (i === '{') stack.push('}')
        else if( i === '(') stack.push(')')
        else if( stack.length === 0 || i !== stack.pop()) return false
    }
    if (stack.length === 0) return true;
    return false;
};

let string = "(])"

console.log(isValid(string))