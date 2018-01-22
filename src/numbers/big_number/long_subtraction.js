var { greater } = require('.comparison');

/**
 * Subtract two positive a and b where a > b
 * 
 * @param {object} a 
 * @param {object} b
 * 
 * @returns {object} Returns a - b
 */
function long_subtraction(a, b)
{
    const BASE = 10000000;

    let max_point, ai, bi, i, carry = 0; 
    let sign = 0;
    
    if (greater(b, a)) {
        let t = a; a = b; b = t;
        sign = 1;
    }

    if (a.point > b.point) {
        ai = 0;
        bi = a.point - b.point;
        max_point = a.point;
    } else {
        ai = b.point - a.point;
        bi = 0;
        max_point = b.point;
    }

    let size = max_point + Math.max(a.data.length - a.point, b.data.length - b.point) + 1;
    let c = { data: new Array(size).fill(0), sign: sign, point: max_point };

    for(i = 0; i < a.data.length; i++, ai++) c.data[ai]  = a.data[i];
    for(i = 0; i < b.data.length; i++, bi++) c.data[bi] -= b.data[i];
    for(i = 0; i < size; i++) {
        c.data[i] -= carry;
        if (c.data[i] < 0) {
            c.data[i] += BASE;
            carry = 1;
        } else {
            carry = 0;
        }
    }

    return c;
}

module.exports = long_addition;