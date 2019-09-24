/**
 * @name mulCalc
 * @param {*} a 
 * @param {*} b 
 */
const mulCalc = (a, b) => {
	if (b === 0) return 0;
    if (b === 1) return a;
  
    const s = b >> 1;
    const halfCalc = mulCalc(a, s);

    if (b % 2 == 0) {
        return halfCalc + halfCalc;
    }
    else {
    	return halfCalc + halfCalc + a;
    }
}

const multiplyRecursive = (a, b) => {
    if (a < 0 || b < 0) return 0;
    if (b > a) {
        b = [a, a = b][0]
    }
    return mulCalc(a,b);
}

module.exports = multiplyRecursive;