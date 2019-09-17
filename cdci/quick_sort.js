/**
 * 
 * @param {*} arr 
 * @param {*} left 
 * @param {*} j 
 */
const partition = (arr, left, j) => {
    const pivot = arr[j];
    let right = j-1;

    while (left <= right) {
        if (arr[left] > pivot) {
            if (arr[right] >= pivot) right--;
            else {
                let temp = arr[left];
                arr[left] = arr[right];
                arr[right] = temp;
                right--;
            }
        }
        else left++;
    }

    let temp = arr[left];
    arr[left] = arr[j];
    arr[j] = temp;

    return left;
}

/**
 * 
 * @param {*} arr 
 * @param {*} i 
 * @param {*} j 
 */
const sort = (arr, i, j) => {
    if (i >= j) return;
    let pivot = partition(arr, i, j);
    sort(arr, i, pivot-1);
    sort(arr, pivot+1, j);
}

/**
 * 
 * @param {*} arr 
 */
const quickSort = (arr) => {
    sort(arr, 0, arr.length-1);
    return arr;
}

module.exports = quickSort;