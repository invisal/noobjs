function long_multiplication(a, b)
{
    const BASE = 10000000;
    let i, j, k;

    let c = {
        data: new Array(a.data.length + b.data.length).fill(0),
        sign: (a.sign + a.sign) & 1,
        point: a.point + b.point
    }

    let carry = 0;
    for (i = 0; i < a.data.length; i++) {
        for (j = 0; j < b.data.length; j++) {
            k = i + j;
            c.data[k] += (a.data[i] * b.data[j]) + carry;
            if (c.data[k] >= BASE) {
                carry = Math.floor(c.data[k] / BASE);
                c.data[k] = c.data[k] % BASE;
            } else {
                carry = 0;
            }
        }
        
        c.data[k + 1] += carry;
        carry = 0;
    }

    return c;
}

module.exports = long_multiplication;