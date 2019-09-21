const mergeSort = require('../../../cdci/searching_sorting/merge_sort');

const K1 = [1,4,5,6,12,3,15,3,2,20];
const K1_RES = [1,2,3,3,4,5,6,12,15,20];


const K2 = [21, 10, 7, -5, -25, -3, 11, 3, 20];
const K2_RES = [-25, -5, -3, 3, 7, 10, 11, 20, 21];


it ('Checking quick sort', () => {
    expect(mergeSort(K1)).toStrictEqual(K1_RES);
})

it ('Checking quick sort', () => {
    expect(mergeSort(K2)).toStrictEqual(K2_RES);
})