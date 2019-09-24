

/**
 * You are climbing a stair case. It takes n steps to reach to the top.
 * Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?
 * Note: Given n will be a positive integer.
 * 
 * @name climbStairs
 * @param {number} n
 * @return {number}
 */
const climbStairs = (n) => {
    const obj = {1:1, 2:2};
    for (let i = 3; i <= n; i++) {
        obj[i] = 0;
        if (obj.hasOwnProperty(i-1)) obj[i] += obj[i-1];
        if (obj.hasOwnProperty(i-2)) obj[i] += obj[i-2];
    }
    return obj[n];
};

module.exports = climbStairs;