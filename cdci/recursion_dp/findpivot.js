/**
 * Given an array of integers nums, write a method that returns the "pivot" 
 * index of this array. We define the pivot index as the index where the sum of the 
 * numbers to the left of the index is equal to the sum of the numbers to the 
 * right of the index. If no such index exists, we should return -1. 
 * If there are multiple pivot indexes, you should return the left-most pivot index.
 * 
 * @name pivotIndex
 * @param {number[]} nums
 * @return {number}
 */
const pivotIndex = function(nums) {
    const numsLen = nums.length;
    if (numsLen < 2) return -1;
    let left = 0, right = nums.reduce((a,b) => a+b);       
    for (let i = 0; i < numsLen; i++) {
	    right -= nums[i];
        if (left === right) return i;                  // left === right 
        left += nums[i]    // add item to left and remove item from right 
    }
    return -1;
};

module.exports = pivotIndex;