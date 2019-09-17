const urlify = require('../../../cdci/arrays_strings/urlify');

const K1 = "Mr John Smith    ";
const K2 = 13;
const K1_RES = "Mr%20John%20Smith";

const K3 = "Mohana Krishna    a  b  c     ";
const K4 = 25;
const K5_RES = "Mohana%20Krishna%20%20%20%20a%20%20b%20%20c";

describe('Urlify', () => {
    it ('Urlify the string', () => {
        expect(urlify(K1, K2)).toBe(K1_RES);
    })

    it ('Urlify the string 2', () => {
        expect(urlify(K3, K4)).toBe(K5_RES);
    })
})