
/**
 * Implement an algorithm to determine if a string has all unique characters. 
 * What if you cannot use additional data structures?
 * 
 * @name isUnique
 * @param {*} str 
 * @returns {boolean}
 */

const isUnique = (str) => {
    if (str.length == 0) return false;
    const strLength = str.length;
    for (let i = 0; i < strLength; i++) {
        if (str.indexOf(str[i]) != str.lastIndexOf(str[i])) return false;
    }
    return true;
}

module.exports = isUnique;