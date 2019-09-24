
/**
 * 
 * @name sort
 * @param {*} arr 
 */
const sort = (arr) => {
    if (arr.length <= 1) return;
    let left = 0;
    let right = arr.length;
    let mid = left+right >> 1;
    let leftArr = arr.slice(left, mid);
    let rightArr = arr.slice(mid, right);
    
    sort(leftArr);
    sort(rightArr);
    
    let i = 0, j = 0, k = 0;
    
    while (i < leftArr.length && j < rightArr.length) {
      if (leftArr[i] <= rightArr[j]) {
        arr[k] = leftArr[i]; i++;
      }
      else {
        arr[k] = rightArr[j]; j++;
      }
      k++;
    }
    
    while(i < leftArr.length) {
      arr[k] = leftArr[i];
      k++;
      i++;
    }
    
    
    while(j < rightArr.length) {
      arr[k] = rightArr[j];
      k++;
      j++;
    }
  }

  /**
   * @name mergeSort
   * @param {*} arr 
   */
  const mergeSort = (arr) => {
    sort(arr);
    return arr;
  }

  module.exports = mergeSort;
  
  