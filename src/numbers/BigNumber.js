var parse_string = require('./big_number/parse_string');
var long_addition = require('./big_number/long_addition');

class BigNumber 
{
    // constructor
    constructor(number = '')
    {
        if (typeof number === 'object') {
            this.r = number;
        } else if (number !== '') {
            this.r = parse_string(number);
        } else {
            this.r = { data: [0], sign: 0, point: 0 };
        }
    }

    toString() 
    {
        let r = this.r;
        let result = '';
        let allow_trimming_zero = true;
        let tmp;

        for(let i = r.data.length - 1; i > 0; i--) {
            if (allow_trimming_zero && r.data[i] === 0) continue;

            allow_trimming_zero = false;

            tmp = r.data[i].toString();
            result += '0000'.substring(0, 7 - tmp.length) + tmp;
        }

        tmp = r.data[0].toString();
        result += '0000'.substring(0, 7 - tmp.length) + tmp;
        result  = result.replace(/^[0]+/g, '');
        return result === '' ? '0' : result;
    }

    add(a) 
    {
        let c = long_addition(this.r, a.r);
        return new BigNumber(c);
    }
}

module.exports = BigNumber;