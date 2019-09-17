const isPermutation = require('../../../cdci/arrays_strings/is_permutation');

const TRUE = true;
const FALSE = false;

const K1 = "bca";
const K2 = "abc";

const K3 = "abcdef";
const K4 = "abcdeo";

const K5 = "a";
const K6 = "a";

describe('Checking the strings permutation is other', () => {
    it ('Checking the success case', () => {
        expect(isPermutation(K1, K2)).toBe(TRUE);
    })

    it ('Checking the failed case', () => {
        expect(isPermutation(K3, K4)).toBe(FALSE);
    })

    it ('Checking with single character, True case', () => {
        expect(isPermutation(K5, K6)).toBe(TRUE);
    })
})