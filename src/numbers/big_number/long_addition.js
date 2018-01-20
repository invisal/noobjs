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
    let i = 0, j = 0, k = 0, carry = 0;

    // {a} must be the number with longer fractional part
    if (b.point > a.point) {
        let t = b; b = a; a = t;
    }

    // Create c object to store the result
    let c = { 
        data: new Array( a.point + Math.max(a.data.length - a.point, b.data.length - b.point) + 1 ), 
        sign: a.sign, 
        point: a.point
    };

    // Add the fractional part first
    let fractional_length_diff = a.point - b.point;
    for(j = 0; j < fractional_length_diff; j++) c[i++] = a.data[j]

    for(; j < a.point; j++, k++) {
        carry += a.data[j] + b.data[k] - BASE;
        if (carry < 0) { // no carry
            c.data[i++] = carry + BASE; carry = 0;
        } else { // has carry
            c.data[i++] = carry; carry = 1;
        }
    }

    // Add the integer part
    // {a} must the be number with the longer integer length
    if (b.data.length - b.point > a.point.length - a.point) {
        let t = b; b = a; a = t;
        t = j; j = k; k = t;
    }

    for(; k < b.data.length; k++, j++) {
        carry += a.data[j] + b.data[k] - BASE;
        if (carry < 0) { // no carry
            c.data[i++] = carry + BASE; carry = 0;
        } else { // has carry
            c.data[i++] = carry; carry = 1;
        }
    }

    for(; j < a.data.length; j++) {
        carry += a.data[j] - BASE;
        if (carry < 0) { // no carry
            c.data[i++] = carry + BASE; carry = 0;
        } else { // has carry
            c.data[i++] = carry; carry = 1;
        }
    }

    c.data[i] = carry;
    if (c.data[i] === 0) c.data.pop();

    return c;
}

module.exports = long_addition;