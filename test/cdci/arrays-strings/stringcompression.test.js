const stringCompression = require('../../../cdci/arrays_strings/string_compression');

const K1 = "aaabbcccdefghhaaaaaaaaaaaar";
const K1_RES = "a3b2c3d1e1f1g1h2a12r1";

const K2 = "abc";
const K2_RES = "abc";

const K3 = "aaaaab";
const K3_RES = "a5b1";

describe('String compression', () => {
    it ('Checking the string compression - 1', () => {
        expect(stringCompression(K1)).toBe(K1_RES);
    })

    it ('Checking the string compression - 2', () => {
        expect(stringCompression(K2)).toBe(K2_RES);
    })

    it ('Checking the string compression - 3', () => {
        expect(stringCompression(K3)).toBe(K3_RES);
    })
})