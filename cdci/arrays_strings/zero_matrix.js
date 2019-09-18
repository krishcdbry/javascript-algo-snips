/**
 * Given a m x n matrix, if an element is 0, set its entire row and column to 0. Do it in-place.
 * 
 * @name zeroMatrix
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
const zeroMatrix = function(matrix) {
    const N = matrix.length, M = matrix[0].length;
    let zeroRow = false, zeroCol = false;
    
    // Finding first row zero's
    for (let i = 0; i < N; i++) {
        if (matrix[i][0] === 0) {
            zeroRow = true; break;
        }
    }
    // Finding first column zero's
    for (let i = 0; i < M; i++) {
        if (matrix[0][i] === 0) {
            zeroCol = true; break;
        }
    }

    // Checking inner matrix and making first row,col 0
    for (let i = 1; i < N; i++) {
        for (let j = 1; j < M; j++) {
            if (matrix[i][j] == 0) matrix[i][0] = 0, matrix[0][j] = 0;
        }
    }
    
    // If first row,col is zero then making item 0
    for (let i = 1; i < N; i++) {
        for (let j = 1; j < M; j++) {
            if (matrix[i][0] == 0 || matrix[0][j] == 0) matrix[i][j] = 0;
        }
    }
    
    // Finally if first row zeros then making entire row zero
    if (zeroRow) {
        for (let i = 0; i < N; i++) {
            matrix[i][0] = 0;
        }
    }
    
    // Finally if first row zeros then making entire col zero
    if (zeroCol) {
        for (let i = 0; i < M; i++) {
            matrix[0][i] = 0;
        }
    }

    return matrix;
}

module.exports = zeroMatrix;