const climbstairs = require('../../../cdci/recursion_dp/climbstairs');

const K1 = 2;
const K1_RES = 2;

const K2 = 100;
const K2_RES = 573147844013817200640;

const K3 = 1;
const K3_RES = 1;

describe('climbstairs check', () => {
    it ('Checking climbstaris for 2nd step', () => {
        expect(climbstairs(K1)).toBe(K1_RES);
    })

    it ('Checking climbstaris for 100th step', () => {
        expect(climbstairs(K2)).toBe(K2_RES);
    })

    it ('Checking climbstaris for 1st step', () => {
        expect(climbstairs(K3)).toBe(K3_RES);
    })
})