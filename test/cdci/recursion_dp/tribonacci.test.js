const tribonacci = require('../../../cdci/recursion_dp/tribonacci');

const K1 = 2;
const K1_RES = 1;

const K2 = 10;
const K2_RES = 149;

const K3 = 50;
const K3_RES = 5742568741225;

describe('Tribonacci Finder', () => {
    it ('Checking tribonacci for 2', () => {
        expect(tribonacci(K1)).toBe(K1_RES);
    })

    it ('Checking tribonacci for 10', () => {
        expect(tribonacci(K2)).toBe(K2_RES);
    })

    it ('Checking tribonacci for 50', () => {
        expect(tribonacci(K3)).toBe(K3_RES);
    })
})