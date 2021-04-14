
//@param {number[]} arr
 //@return {number}

var peakIndexInMountainArray = function(arr) {
    // for(let i = 0; i < arr.length; i ++){
    //     if(arr[i] > arr[i + 1]){
    //         return i
    //     }
    // }
    
    let low = 0;
    let high = arr.length -1
    
    while (low < high){
        let mid = Math.floor((low + high) / 2);
        console.log("low:" +low,"high" +high,"mid" + mid)
        if( arr[mid] < arr[mid + 1]){
            low = mid + 1;
        }else{
            high = mid
        }
    }
    return low
    
};

let array = [24,69,100,99,79,78,67,36,26,19]

console.log(peakIndexInMountainArray(array))