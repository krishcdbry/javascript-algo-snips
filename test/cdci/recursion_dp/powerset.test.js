const powerset = require('../../../cdci/recursion_dp/powerset');

const K1 = [1,3,5];
const K1_RES = [ [], [ 1 ], [ 1, 3 ], [ 1, 3, 5 ], [ 1, 5 ], [ 3 ], [ 3, 5 ], [ 5 ] ];

const K2 = [0];
const K2_RES = [[],[0]];

const K3 = [];
const K3_RES = [[]]


describe('Finding power set', () => {
    it ('Finding power of array of 3 items', () => {
        expect(powerset(K1)).toStrictEqual(K1_RES);
    })

    it ('Finding power of array of 1 item', () => {
        expect(powerset(K2)).toStrictEqual(K2_RES);
    })

    it ('Finding power of array of 0 items', () => {
        expect(powerset(K3)).toStrictEqual(K3_RES);
    })
})