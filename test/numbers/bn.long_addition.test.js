var parse_string = require('../../src/numbers/big_number/parse_string');
var long_addition = require('../../src/numbers/big_number/long_addition');

test('add two positive numbers', () => {

    let a;
    let b;
    let c;

    a = parse_string('23441');
    b = parse_string('52313');
    c = long_addition(a, b); // 75754
    expect(c).toEqual({
        data: [75754],
        point: 0,
        sign: 0
    });

    a = parse_string('23.441');
    b = parse_string('2055.23131');
    c = long_addition(a, b); // 2078.67231
    expect(c).toEqual({
        data: [6723100, 2078],
        point: 1,
        sign: 0
    });

    a = parse_string('23215463462232348954643.2313543657324234');
    b = parse_string('998634346.47722354457887845');
    c = long_addition(a, b);
    expect(c).toEqual({
        data: [1850000 ,1031130, 7085779, 7588989, 6223334, 2154634, 23],
        point: 3,
        sign: 0
    });

    a = parse_string('9999999.99999999999999');
    b = parse_string('0.00000000000001');
    c = long_addition(a, b);
    expect(c).toEqual({
        data: [0 ,1],
        point: 0,
        sign: 0
    })
});