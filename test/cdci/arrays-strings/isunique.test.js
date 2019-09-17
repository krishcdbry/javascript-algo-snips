const isUnique = require('../../../cdci/arrays_strings/is_unique');

const K1 = "abcdefghijklmnop"
const K1_RES = true;

const K2 = "abcdefghgjkliopab"
const K2_RES = false;

const K3 = "aa"
const K3_RES = false;

const K4 = ""
const K4_RES = false;

describe('Checking the string with unique characters', () => {
    it ('Checking unique string - True case', () => {
        expect(isUnique(K1)).toBe(K1_RES);
    })

    it ('Checking unique string - False case', () => {
        expect(isUnique(K2)).toBe(K2_RES);
    })

    it ('Checking unique string - False case 2 characters', () => {
        expect(isUnique(K3)).toBe(K3_RES);
    })

    it ('Checking unique string empty string - False case 2 characters', () => {
        expect(isUnique(K4)).toBe(K4_RES);
    })
})