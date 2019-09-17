
/**
 * Palindrome Permutation: Given a string, write a function to check if it is a permutation 
 * of a palin­ drome. A palindrome is a word or phrase that is the same forwards and backwards. 
 * A permutation is a rearrangement of letters. The palindrome does not need to be limited to just 
 * dictionary words. 
 * 
 * EXAMPLE
 * Input: TactCoa
 * Output: True (permutations: "tacocat", "atcoeta", etc.)
 * 
 * @name permutationPalindrome
 * @param {*} str 
 * @returns {boolean}
 */
const permutationPalindrome = (str) => {
    const trackObj = {};
    const strLength = str.length;
    for (let i = 0; i < strLength; i++) {
        const item = str[i];
        if (trackObj[item]) trackObj[item]--;
        else if (item != " ") trackObj[item] = 1;
    }
    return Object.values(trackObj).reduce((a, b) => a+b) < 2;
}

module.exports = permutationPalindrome;