/**
 * @param {number} n
 * @return {number}
 */

const tribonacci = function(n) {
    const fib = {0:0, 1:1, 2:1};
    for (let i = 3; i <= n; i++) {
        fib[i] = fib[i-1]+fib[i-2]+fib[i-3];
    }
    return fib[n];
};


module.exports = tribonacci;