
/**
 * Rotate Matrix: Given an image represented by an NxN matrix, where each pixel in the image is 4 bytes, 
 * write a method to rotate the image by 90 degrees. Can you do this in place?
 * 
 * @name rotateMatrix
 * @param {*} arr 
 * @returns {*} arr
 */
const rotateMatrix = (arr) => {
    const N = arr.length;
    for (let i = 0; i < N/2; i++) {
        let layer = N-i-1;
        for (let j = i; j < layer; j++) {
            let offset = j-i;
            // Swap operation
            let temp = arr[i][j];
            arr[i][j] = arr[layer-offset][i];
            arr[layer-offset][i] = arr[layer][layer-offset];
            arr[layer][layer-offset] = arr[j][layer];
            arr[j][layer] = temp;
        }
    }
    return arr;
}

module.exports = rotateMatrix;