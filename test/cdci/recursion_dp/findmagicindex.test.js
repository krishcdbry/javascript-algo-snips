const findMagicIndex = require('../../../cdci/recursion_dp/find_magic_index');

const K1 = [-70, -70, 0, 1, 4, 5, 6];
const K1_RES = 4;

const K2 = [-1,-1,-1,0,1,1];
const K2_RES = -1;

const K3 = [0]
const K3_RES = 0;

const K4 = [-33, -22, -11, 3, 4, 5, 5, 10, 8]
const K4_RES = 4;


describe('Finding magic index', () => {
    it ('Finding magic index for a valid set', () => {
        expect(findMagicIndex(K1)).toBe(K1_RES);
    })

    it ('Finding magic index for an invalid set having no index', () => {
        expect(findMagicIndex(K2)).toBe(K2_RES);
    })

    it ('Finding magic index for a single element with 0 index as 0', () => {
        expect(findMagicIndex(K3)).toBe(K3_RES);
    })

    it ('Finding magic index for a valid set with two magic indices - But should return left most one', () => {
        expect(findMagicIndex(K4)).toBe(K4_RES);
    })
})