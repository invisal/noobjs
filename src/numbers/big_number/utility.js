function trim_zeroes(c)
{
    while(c.point > 0) {
        if (c.data[0] === 0) { c.data.shift(); c.point--; continue; }
        else break;
    }

    while(c.data.length - c.point > 0) {
        if (c.data[c.data.length - 1] === 0) c.data.pop();
        else break;
    }
}

module.exports = { trim_zeroes }