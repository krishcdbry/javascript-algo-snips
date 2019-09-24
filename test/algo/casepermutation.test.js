const casePermutations = require('../../algo/case_permutations');

const K1 = "a1b2";
const K1_RES = ["a1b2", "a1B2", "A1b2", "A1B2"]

const K2 = "c";
const K2_RES = ['c','C'];

const K3 = "";
const K3_RES = [""];

describe('Finding case permutations', () => {
    it ('Finding case permutations for valid string', () => {
        expect(casePermutations(K1)).toStrictEqual(K1_RES);
    })

    it ('Finding case permutations for single letter', () => {
        expect(casePermutations(K2)).toStrictEqual(K2_RES);
    })

    it ('Finding case permutations for none', () => {
        expect(casePermutations(K3)).toStrictEqual(K3_RES);
    })
})