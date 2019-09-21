const findDuplicates = require('../algo/findduplicates.js');

const K1 = [1,2,3,4,5];
const K2 = [10,2,12,1,6,3];
const K1_RES = [2,1,3];

const K3 = [1,2,3,4,5];
const K4 = [6,7,8,9,10];

it ('Checking duplicates with 2 valid arrays', () => {
    expect(findDuplicates(K1, K2)).toStrictEqual(K1_RES);
})

it ('Checking duplicates with 2 empty arrays', () => {
    expect(findDuplicates([], [])).toStrictEqual([]);
})

it ('Checking duplicates with 2 arrays with no duplicates', () => {
    expect(findDuplicates(K3, K4)).toStrictEqual([]);
})