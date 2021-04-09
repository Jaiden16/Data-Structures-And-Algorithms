function binarySearchRecursive(arr,elem,s,e){
    s = ( s === undefined ? 0 : s)
    e = ( e === undefined ? 0 : arr.length -1) 
    
    let start = s;
    let end = e;
    let middle = Math.floor((start+end)/2);
        
    if(elem === arr[middle]){
        return `index: ${middle} value: ${arr[middle]}`;
    } else if (elem < arr[middle] && start <= end){
        end = middle -1;
        return binarySearchRecursive(arr,elem,start,end)
    }else if (elem > arr[middle] && start <= end){
        start = middle + 1
        return binarySearchRecursive(arr,elem,start,end)
    }else{
        return -1
    } 
}

let array = [1,2,4,5,6,7,9,30,31,50]
console.log(binarySearchRecursive(array,50))
