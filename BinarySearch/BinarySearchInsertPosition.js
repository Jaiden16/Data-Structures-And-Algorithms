//  @param {number[]} nums
  //@param {number} target
 // @return {number}
 
var searchInsert = function(nums, target) {
    let start = 0;
    let end = nums.length;
    
    while( start <= end){
        let middle = Math.floor( (start + end) / 2);
        // console.log(start,end);
        if(nums[middle] === target){
            return middle;
        }else if(nums[middle] < target){
            start = middle + 1
        }else{
            end = middle - 1
        }
    }
    return start
};

let array = [1,3,5,6]

console.log(searchInsert(array,5))