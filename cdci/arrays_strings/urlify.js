/**
 * URLify: Write a method to replace all spaces in a string with '%20'. 
 * You may assume that the string has sufficient space at the end to hold the additional characters,
 * and that you are given the "true" length of the string. 
 * (Note: If implementing in Java,please use a character array so that you can perform this operation in place.)
 * 
 * EXAMPLE
 * Input: "Mr John Smith ", 13 
 * Output: "Mr%20John%20Smith"
 * @name URLify
 * @param {*} str
 * @param {*} length
 * @returns {boolean}
 */

const URLify = (str, length) => {
    let i = 0;
    while (i < length) {
        if (str[i] == " ") {
          str = str.substring(0,i) + "%20" + str.substring(i+1, length);
          i = i+2; 
          length = length+2;
        }
        i++;
    }
    return str;
 }
 

 module.exports = URLify;