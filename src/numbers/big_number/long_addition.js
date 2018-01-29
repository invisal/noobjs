var { trim_zeroes } = require('./utility');

/**
 * Add two base 10,000,000 decimal point of the same sign
 * 
 * @param {object} a Base 10,000,000 decimal point representation
 * @param {object} b Base 10,000,000 decimal point representation
 * 
 * @returns {object} Returns base 10,000,000 decimal point representation
 */
function long_addition(a, b)
{
    const BASE = 10000000;
    let max_point, ai, bi, i, carry = 0; 

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
    let c = { data: new Array(size).fill(0), sign: a.sign, point: max_point };

    for(i = 0; i < a.data.length; i++, ai++) c.data[ai]  = a.data[i];
    for(i = 0; i < b.data.length; i++, bi++) c.data[bi] += b.data[i];
    for(i = 0; i < size; i++) {
        c.data[i] += carry;
        if (c.data[i] >= BASE) {
            c.data[i] -= BASE;
            carry = 1;
        } else {
            carry = 0;
        }
    }

    trim_zeroes(c);
    return c;
}

module.exports = long_addition;