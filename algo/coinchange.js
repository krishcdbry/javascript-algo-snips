
/*
Given a value N, if we want to make change for N cents, 
and we have infinite supply of each of  S = { S1, S2, .. , Sm} 
valued coins, how many ways can we make the change? The order of coins doesn’t matter.

For example, 

For N = 4 and S = {1,2,3}, 
There are four solutions: {1,1,1,1},{1,1,2},{2,2},{1,3}. 
So output should be 4. 

For N = 10 and S = {2, 5, 3, 6}, 
there are five solutions: {2,2,2,2,2}, {2,2,3,3}, {2,2,6}, {2,3,5} and {5,5}. 
So the output should be 5.
*/
// Method 1 with Arrays

/**
 * @name getCoinChange
 * @param {*} n 
 * @param {*} c 
 */
function getCoinChange(n, c) {
    const arrObj = new Array(n + 1).fill(0);
    const cLen = c.length;
    arrObj[0] = 1;

    for (let i = 0; i < cLen; i++) {
        for (let j = c[i]; j <= n; j++) {
          arrObj[j] += arrObj[j - c[i]];          
        }     
    }
  
   return arrObj[n];
}

// Method 2 with Key,Val pair - Better space complexity 
/**
 * @name getCoinChangeObj
 * @param {*} n 
 * @param {*} c 
 */
function getCoinChangeObj(n, c) {
    const arrObj = {}
    const cLen = c.length;
    arrObj[0] = 1;

    for (let i = 0; i < cLen; i++) {
        for (let j = c[i]; j <= n; j++) {
          const item = arrObj[j - c[i]] || 0;
          if (arrObj.hasOwnProperty(j)) arrObj[j] += item;
          else arrObj[j] = item;
        }     
    }

   return arrObj[n] || 0;
}

module.exports = {
    getCoinChange,
    getCoinChangeObj
}
