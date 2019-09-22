
/**
 * @param {number[]} nums
 * @return {number[][]}
 */

const calcSubsets = (nums, res, i = 0, subset = []) => {
    res.push(subset);
    for (; i < nums.length; i++) {
        calcSubsets(nums, res, i+1, [...subset, nums[i]])
    }
}

const powerSet = function(nums) {
    const arr = [];
    calcSubsets(nums, arr);
    return arr;
};

module.exports = powerSet;
    
