
/**
 * Finding magic index 
 * @name findMagicIndex
 * @param {*} arr 
 */
const findMagicIndex = (arr) => {
    let left = 0;
    let right = arr.length-1;
    
    while (left <= right) {
        if (arr[left] == left) return left;
  
        const pivot = left+right >> 1;
      if (arr[pivot] == pivot) return pivot;
      else if (arr[pivot] < pivot) left = pivot+1;
      else right = pivot-1;
    }
    
    return -1;
}

module.exports = findMagicIndex;
  
