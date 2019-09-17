const palindromePermutation = require('../../../cdci/arrays_strings/palindrome_permutation');

const TRUE = true;
const FALSE = false;

const K1 = "aaaaaab";
const K2 = "abc";
const K3 = "abcdefghijklmnopqrstuvwxyzzabcdefghijklmnopqrstuvwzyz";

describe('Palindrome permutation check', () => {
    it ('Checking the strings permutation can be palindrome - 1', () => {
        expect(palindromePermutation(K1)).toBe(TRUE);
    })

    it ('Checking the strings permutation can be palindrome - 2', () => {
        expect(palindromePermutation(K2)).toBe(FALSE);
    })

    it ('Checking the strings permutation can be palindrome - 3', () => {
        expect(palindromePermutation(K3)).toBe(TRUE);
    })
})