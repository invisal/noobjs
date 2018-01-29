var parse_string = require('./big_number/parse_string');
var long_addition = require('./big_number/long_addition');
var long_subtraction = require('./big_number/long_subtraction');
var long_multiplication = require('./big_number/long_multiplication');
var { long_division, long_single_division } = require('./big_number/long_division');

class BigNumber 
{
    // constructor
    constructor(number = '')
    {
        if (typeof number === 'object') {
            this.r = number;
        } else if (number.toString() !== '') {
            this.r = parse_string(number.toString());
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

        // showing the integer part
        for(let i = r.data.length - 1; i >= r.point; i--) {
            if (allow_trimming_zero && r.data[i] === 0) continue;
            allow_trimming_zero = false;

            tmp = r.data[i].toString();
            result += '00000000'.substring(0, 7 - tmp.length) + tmp;
        }
        result = result.replace(/^[0]+/g, '');

        if (result === '') result = '0';
        if (r.point > 0) result += '.';

        for(let i = r.point - 1; i >= 0; i--) {
            tmp = r.data[i].toString();
            result += '00000000'.substring(0, 7 - tmp.length) + tmp;
        }
        if (r.point > 0) result = result.replace(/[0]+$/g, '');
        if (r.sign === 1) result = '-' + result;

        return result;
    }

    /**
     * Add current number with another number
     * 
     * @param {BigNumber|string|number} b 
     * @return {BigNumber} Returns result of this number adding with another number
     */
    add(b) 
    {
        if (typeof b !== 'object') 
            b = new BigNumber(b.toString());

        // For a + b or -a + -b
        if (this.r.sign === b.r.sign)
            return new BigNumber(long_addition(this.r, b.r));
        
        // For -a + b, it is the same as b - a
        if (this.r.sign === 1)
            return new BigNumber(long_subtraction(b.r, this.r));

        // For a + -b, it is the same as a - b
        return new BigNumber(long_subtraction(this.r, b.r));
    }

    /**
     * Subtract current number with another number
     * 
     * @param {BigNumber|string|number} b 
     * @return {BigNumber} Returns result of this number subtracting with another number
     */
    subtract(b)
    {
        if (typeof b !== 'object') 
            b = new BigNumber(b.toString());

        // For a - b
        if (this.r.sign === 0 && b.r.sign === 0)
            return new BigNumber(long_subtraction(this.r, b.r));
        
        // For (-a) - (-b), it is same as b - a
        if (this.r.sign === 1 && b.r.sign === 1)
            return new BigNumber(long_subtraction(b, this.r));

        // For -a - b, it is same as -a + -b
        // For a - (-b), it is same as a + b
        return new BigNumber(long_addition(this.r, b.r));

        
    }

    /**
     * Multiply current number with another number
     * 
     * @param {BigNumber|string|number} b 
     * @return {BigNumber} Returns result of this number multiplying with another number
     */
    multiply(b) {
        if (typeof b !== 'object') 
            b = new BigNumber(b.toString());

        let c = long_multiplication(this.r, b.r);
        return new BigNumber(c);
    }

    divide(b) {
        if (typeof b !== 'object') 
            b = new BigNumber(b.toString());

        if (b.r.data.length > 1)
            return new BigNumber(long_division(this.r, b.r));
        return new BigNumber(long_single_division(this.r, b.r));
    }  
}

module.exports = BigNumber;