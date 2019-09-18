
/**
 * String Compression: Implement a method to perform basic string compression using the counts of 
 * repeated characters. For example, the string aabcccccaaa would become a2blc5a3. 
 * If the "compressed" string would not become smaller than the original string, 
 * your method should return the original string. You can assume the string has only uppercase 
 * and lowercase letters (a - z).
 * 
 * @name stringCompression
 * @param {*} str 
 * @param {*} str
 */
const stringCompression = (str) => {
    let newString = "";
    let currentChar = str[0];
    let currentCount = 0;
    const strLength = str.length;

    for (let i = 0; i < strLength; i++) {
        if (currentChar != str[i]) {
            newString += currentChar+currentCount;
            if (newString.length >= str.length) return str;
            currentChar = str[i]; 
            currentCount = 1;
        }
        else currentCount++;
    }

    newString += currentChar+currentCount;

    return newString.length >= str.length ? str : newString;
}

module.exports = stringCompression;