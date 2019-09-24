/**
 * @name threeSum
 * @param {number[]} nums
 * @return {number[][]}
 */
const threeSum = (nums) => {
    const trackObj = {};
    const res = [];
    
    const isUnique = (arr) => {
        return res.find(item => {
            return item+"" ===  arr+""
        }) ? false :  true;
    }
    
    for (let i = 0; i < nums.length; i++) {
        for (let j = i+1; j < nums.length; j++) {
            let item = nums[j];
            if (trackObj.hasOwnProperty(item)) {
                let trackObjItem = trackObj[item];
                if (trackObjItem['key'].indexOf(j) == -1) {
                    let arr = trackObjItem['val'].slice(0);
                    arr.push(item);
                    arr.sort((a, b) => a-b);
                    if (isUnique(arr)) {
                        res.unshift(arr);
                    }
                    delete trackObj[item];
                }
               
            }
            else {
                let obj = {
                    val : [nums[i], nums[j]],
                    key : [i,j]
                };
                trackObj[0-(nums[i]+nums[j])] = obj;
            }
        }
    }
    res = res.sort((a, b) => a[0]-b[0]);
    return res;
};


const threeSumOpt = (num) => {
    num.sort((a, b) => a - b);
    const res = []; 
    for (let i = 0; i < num.length - 2; i++) {
        if (i == 0 || (i > 0 && num[i] != num[i-1])) {
            let lo = i+1, hi = num.length-1, sum = 0 - num[i];
            while (lo < hi) {
                if (num[lo] + num[hi] == sum) {
                    res.push([num[i], num[lo], num[hi]]);
                    while (lo < hi && num[lo] == num[lo+1]) lo++;
                    while (lo < hi && num[hi] == num[hi-1]) hi--;
                    lo++; hi--;
                } else if (num[lo] + num[hi] < sum) lo++;
                else hi--;
           }
        }
    }
    return res;
};