const countPrimes = require('../../../cdci/recursion_dp/countprimes');

const K1 = 10;
const K1_RES = 4;

const K2 = 100;
const K2_RES = 25;

const K3 = 1000;
const K3_RES = 168;

describe('Count primes', () => {
    it ('Count primes for 2', () => {
        expect(countPrimes(K1)).toBe(K1_RES);
    })

    it ('Count primes for 10', () => {
        expect(countPrimes(K2)).toBe(K2_RES);
    })

    it ('Count primes for 50', () => {
        expect(countPrimes(K3)).toBe(K3_RES);
    })
})