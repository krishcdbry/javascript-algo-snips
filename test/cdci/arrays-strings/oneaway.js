const oneAway = require('../../../cdci/arrays_strings/one_away');

const TRUE = true;
const FALSE = false;

const K1 = "abc";
const K2 = "abcd";

const K3 = "aaaac";
const K4 = "acccc";

const K5 = "pale";
const K6 = "bale";

describe('One away to complete string', () => {
    it ('Checking the strings if one away other - 1', () => {
        expect(oneAway(K1, K2)).toBe(TRUE);
    })

    it ('Checking the strings if one away other - 2', () => {
        expect(oneAway(K3, K4)).toBe(FALSE);
    })

    it ('Checking the strings if one away other - 3', () => {
        expect(oneAway(K5, K6)).toBe(TRUE);
    })
})