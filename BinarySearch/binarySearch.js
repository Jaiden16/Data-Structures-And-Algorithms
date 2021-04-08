function binarySearch(arr,elem){
    let start = 0;
    let end = arr.length -1;
    let middle = Math.floor((start+end)/2);
    while( arr[middle] !== elem && start <= end){
        if(elem < arr[middle]){
            end = middle -1;
        }else{
            start = middle + 1;
        }
        middle = Math.floor((start + end) / 2);
    }

    if(arr[middle] === elem){
        return `element: ${elem} was found at ${middle} index of the array`;
    }else{
        return -1;
    }

}

let array = [1,2,4,5,6,7,9,30,31,50]

console.log(binarySearch(array,50))

/*big O of Binary search
 worst/ avg case: O(log n)
 best case: 0(1) - in the case it's the first thing we are looking for
*/
