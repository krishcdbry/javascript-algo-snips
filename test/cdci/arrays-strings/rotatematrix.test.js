const rotateMatrix = require('../../../cdci/arrays_strings/rotate_matrix');

const K1 = [[1,2,3],[4,5,6],[7,8,9]];
const K1_RES = [[7,4,1],[8,5,2],[9,6,3]];

const K2 = [[ 5, 1, 9,11],[ 2, 4, 8,10],[13, 3, 6, 7],[15,14,12,16]];
const K2_RES = [[15,13,2,5],[14,3,4,1],[12,6,8,9],[16,7,10,11]];

describe('Checking matrix rotation', () => {
    it ('Matrix rotation 90 deg - 1', () => {
        expect(rotateMatrix(K1)).toStrictEqual(K1_RES);
    })

    it ('Matrix rotation 90 deg - 2', () => {
        expect(rotateMatrix(K2)).toStrictEqual(K2_RES);
    })
})