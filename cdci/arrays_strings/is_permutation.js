/**
 * Given two strings,write a method to decide if one is a permutation of the
 * other.
 * 
 * @name isPermutation
 * @param {*} str1 
 * @param {*} str2 
 * @returns {boolean}
 */

const isPermutation = (str1, str2) => {
    const trackObj = {};
    const strLen = str1.length;

    if (strLen != str2.length) return false;

    for (let i = 0; i < strLen; i++) {
        let item = str1[i];
        if (trackObj[item]) trackObj[item]++;
        else trackObj[item] = 1;
    }

    for (let i = 0; i < strLen; i++) {
        let item = str2[i];
        if (!trackObj[item]) return false;
        else trackObj[item]--;
    }

    return true;
}

module.exports = isPermutation;