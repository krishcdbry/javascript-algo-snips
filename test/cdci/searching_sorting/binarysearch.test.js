const binarySearch = require("../../../cdci/searching_sorting/binary_search");

const K1 = [1,2,3,7,8,9,12,15,16,56,60,77,99,100];
const TARGET1 = 56;
const RES1 = 9;

it ('binary search - Finding Target 1 - 56', () => {
    expect(binarySearch(K1, TARGET1)).toBe(RES1);
})