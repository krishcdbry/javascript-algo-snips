const zeroMatrix = require('../../../cdci/arrays_strings/zero_matrix');

const K1 = [[1,0]]
const K1_RES = [[0,0]]

const K2 = [[ 5, 1, 9, 11],[ 0, 4, 8, 10],[13, 3, 6, 7],[15, 14, 12,0]];
const K2_RES = [[ 0, 1, 9, 0],[ 0, 0, 0, 0],[0, 3, 6, 0],[0, 0, 0 ,0]];

describe('Zero matrix ', () => {
    it ('Zero matrix check - 1', () => {
        expect(zeroMatrix(K1)).toStrictEqual(K1_RES);
    })

    it ('Zero matrix check - 2', () => {
        expect(zeroMatrix(K2)).toStrictEqual(K2_RES);
    })
})
