
/**
 * 
 * @param {*} arr 
 * @param {*} target 
 */
const binarySearch = (arr, target) => {
   
    let i = 0;
    let j = arr.length;
  
    while (i < j) {
        if (arr[i] == target) return i;
        else if (arr[j] == target) return j;

        const mid = i+j >> 1;

        if (arr[mid] == target) return mid;
        else if (arr[mid] < target) {
            i = mid+1;
        }
        else j = mid-1;
    }

    return -1;
}


module.exports = binarySearch;


