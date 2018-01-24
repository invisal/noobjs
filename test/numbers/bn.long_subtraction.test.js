var parse_string = require('../../src/numbers/big_number/parse_string');
var long_subtraction = require('../../src/numbers/big_number/long_subtraction');

test('test long subtraction', () => {

    a = parse_string('23441');
    b = parse_string('52313');
    c = long_subtraction(a, b); // -28872
    expect(c).toEqual({
        data: [28872],
        point: 0,
        sign: 1
    });

});