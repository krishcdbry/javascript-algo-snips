const {getCoinChange, getCoinChangeObj} = require('../algo/coinchange.js');

const K1 = 10;
const K1_SET = [2,5,3,6];

it('Coing change checking with Array implementation', () => {
    expect(getCoinChange(K1, K1_SET)).toBe(5)
})

it('Coing change checking with Key,Val pair implementation', () => {
    expect(getCoinChangeObj(K1, K1_SET)).toBe(5)
})