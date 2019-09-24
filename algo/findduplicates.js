
/**
 * @name findDuplicates
 * @param {*} a 
 * @param {*} b 
 */
function findDuplicates(a, b) {
    const obj = {};
    return [...a, ...b].filter(item => {
       if (!obj.hasOwnProperty(item)) obj[item] = 1;
       else return item;
    })
  }

module.exports = findDuplicates;