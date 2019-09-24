const towersOfHanoi = require('../../../cdci/recursion_dp/towers_of_hanoi');

const K1 = 3;
const K1_RES = 7;

const K2 = 5;
const K2_RES = 31;

describe('Towers of hanoi', () => {
    it ('Towers of hanoi for stack of 3', () => {
        expect(towersOfHanoi(K1)).toStrictEqual(K1_RES);
    })

    it ('Towers of hanoi for stack of 5', () => {
        expect(towersOfHanoi(K2)).toStrictEqual(K2_RES);
    })
})