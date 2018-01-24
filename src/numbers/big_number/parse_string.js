/**
 * Parse the numerical format string to a 
 * base 10,000,000 decimal point representation
 *
 * @param {string} str 
 */
function parse_string(str) 
{
    let power = [0, 1000000, 100000, 10000, 1000, 100, 10, 1];
    let r = { data: [], sign: 0, point: 0 };

    // remove all the space
    str.trim();

    // divide integer part and fractional part
    let decimal_point = str.indexOf('.');
    let int_part      = (decimal_point === -1) ? str : str.substring(0, decimal_point);
    let frac_part   = (decimal_point === -1) ? '' : str.substring(decimal_point + 1);
    let size = 0;

    int_part = int_part.replace(/^[0]+/g, '');
    frac_part = frac_part.replace(/[0]+$/g, '');

    // remove the sign if has one
    if (int_part[0] === '-') {
        r.sign = 1;
        int_part = int_part.substring(1);
    }

    // read 7 characters per time for fractional part
    for(let i = 0; i < frac_part.length; i += 7) {
        let stmp = frac_part.substring(i, i + 7);
        let tmp = parseInt(stmp);

        tmp *= power[stmp.length];
        r.data.push(tmp);
    }

    r.data = r.data.reverse();
    r.point = r.data.length;

    // read 7 characters per time for integer part
    size = Math.ceil(int_part.length / 7)
    for(let i = 0; i < size; i++) {
        let tmp = parseInt(int_part.substring(int_part.length - i * 7 - 7, int_part.length - i * 7));
        r.data.push(tmp);
    }

    if (r.data.length === 1 && r.data[0] === 0 && r.sign === 1)
        r.sign = 0;

    return r;
}

module.exports = parse_string;