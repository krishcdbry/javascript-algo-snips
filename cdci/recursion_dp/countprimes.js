/**
 * @name countPrimes
 * @param {number} n
 * @return {number}
 */
const countPrimes = (n) => {
    const nArr = new Array(n).fill(1);
    nArr[0] = 0;
    if (n >= 2) nArr[1] = 0;
    
    const primLimit = Math.sqrt(n);

    for (let i = 2;i <= primLimit; i++) {
        if (nArr[i]) {
            for (let j = i*i; j < n; j += i) {
                  nArr[j] = 0;
            }
        }
    }
    
    let count = 0;
    for (let item of nArr) {
        if (item) count++;
    }
    
    return count;
};

module.exports = countPrimes;