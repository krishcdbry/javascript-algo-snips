/**
 * One Away: There are three types of edits that can be performed on strings: 
 * insert a character, remove a character, or replace a character. Given two strings, 
 * write a function to check if they are one edit (or zero edits) away.
 * 
 * EXAMPLE
 * pale, ple -> true 
 * pales, pale -> true 
 * pale, bale -> true 
 * pale, bake -> false
 * 
 * @name oneAway
 * @param {*} str1 
 * @param {*} str2 
 * #@returns {boolean}
 */
const oneAway = (str1, str2) => {
    const trackerObj = {};
    for (let i = 0; i < str2.length; i++) {
        let item = str2[i];
        if (trackerObj[item]) trackerObj[item]++;
        else trackerObj[item] = 1;
    }

    for (let i = 0; i < str1.length; i++) {
        let item = str1[i];
        if (trackerObj[item]) trackerObj[item]--;
    }

    return Object.values(trackerObj).reduce((a, b) => a+b) <= 1;
}

module.exports = oneAway;