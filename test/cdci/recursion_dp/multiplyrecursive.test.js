const multiplyRecursive = require('../../../cdci/recursion_dp/multiplyRecursive');


const K1 = 20;
const K11 = 0;
const K11_RES = 0;

const K2 = 50;
const K21 = 100;
const K21_RES = 5000;

const K3 = 10000;
const K31 = 20000;
const K31_RES = 200000000;

const K4 = 10000;
const K41 = -1;
const K41_RES = 0;


describe('Multiply recursive check', () => {
    it ('Finding product of two numbers with zero including', () => {
        expect(multiplyRecursive(K1, K11)).toBe(K11_RES);
    })

    it ('Finding product of two positive numbers', () => {
        expect(multiplyRecursive(K2, K21)).toBe(K21_RES);
    })

    it ('Finding product of two big positive numbers', () => {
        expect(multiplyRecursive(K3, K31)).toBe(K31_RES);
    })

    it ('Finding product of positive & negative numbers should return 0', () => {
        expect(multiplyRecursive(K4, K41)).toBe(K41_RES);
    })
})