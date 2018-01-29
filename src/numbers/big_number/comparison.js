/**
 * Comparison a is greater than b where a and b are positive number
 * 
 * @param {object} a Base 10,000,000 decimal point representation
 * @param {object} b Base 10,000,000 decimal point representation
 * 
 * @returns {object} Returns if a > b
 */
function greater(a, b)
{  
    // check integer part length
    let diff = (a.data.length - a.data.point) -  (b.data.length - b.data.point);
    if (diff > 0) return true;
    if (diff < 0) return false;

    let i = a.data.length - 1;
    let j = b.data.length - 1;
    let k = Math.min(a.data.length, b.data.length);

    for(; k > 0; k--, i--, j--) {
        if (a.data[i] > b.data[j]) return true;
        else if (a.data[i] < b.data[j]) return false;
    }

    if (b.data.length >= a.data.length) return false;
    return true;
}

module.exports = { greater }