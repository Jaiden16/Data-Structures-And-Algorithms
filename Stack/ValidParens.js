var isValid = function(s) {
    // if string is empty return true
    if ( s === null || s.length <= 0 ) return true;
    
    // create a "stack"
    stack = []
    
    //loop through string 
    for(let  char of s){
        if (char === '[') stack.push(']')
        else if (char === '{') stack.push('}')
        else if( char === '(') stack.push(')')
        else if( stack.length === 0 || char !== stack.pop()) return false
    }
    if (stack.length === 0) return true;
    return false;
};

let string = "([])"

console.log(isValid(string))