const findPivot = require('../../../cdci/recursion_dp/findpivot');

const K1 = [1,7,3,6,5,6];
const K1_RES = 3;

const K2 = [-1,-1,-1,0,1,1];
const K2_RES = 0;

const K3 = [0]
const K3_RES = -1;

const K4 = [1,2,3,4,5,6]
const K4_RES = -1;


describe('Finding pivot index', () => {
    it ('Finding pivot index for valid item set', () => {
        expect(findPivot(K1)).toBe(K1_RES);
    })

    it ('Finding pivot index for valid item set with pivot index as 1st item', () => {
        expect(findPivot(K2)).toBe(K2_RES);
    })

    it ('Finding pivot index for single item set', () => {
        expect(findPivot(K3)).toBe(K3_RES);
    })

    it ('Finding pivot index for non-valid set', () => {
        expect(findPivot(K4)).toBe(K4_RES);
    })
})