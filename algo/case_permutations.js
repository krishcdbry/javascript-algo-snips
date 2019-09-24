/**
 * Given a string S, we can transform every letter individually to be lowercase or uppercase to create another string.  Return a list of all possible strings we could create.

    Examples:
    Input: S = "a1b2"
    Output: ["a1b2", "a1B2", "A1b2", "A1B2"]

    Input: S = "3z4"
    Output: ["3z4", "3Z4"]

    Input: S = "12345"
    Output: ["12345"]


 */

 /**
 * @param {string} S
 * @return {string[]}
 */

const letterCasePermutation = function(S) {
    const arr = [];
    const len = S.length;
    const perm = (prefix, i) => {
        const item = S[i];
        if (i >= len) {
            arr.push(prefix);
            return;
        }
        if (item >= 0 && item <= 9) perm(prefix+item, i+1);
        else {
            perm(prefix+item.toLowerCase(),i+1);
            perm(prefix+item.toUpperCase(),i+1);
        }
    }
    perm("", 0);
    return arr;
}

module.exports = letterCasePermutation;