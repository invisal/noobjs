var { greater } = require('../../src/numbers/big_number/comparison');
var parse_string = require('../../src/numbers/big_number/parse_string');

test('test greater comparison a > b', () => {

    let a = parse_string('12331.22232364321');
    let b = parse_string('10330.00000364321');
    expect(greater(a, b)).toBe(true);

});

test('test greater comparison a < b', () => {

    let a = parse_string('22232364321.22232364321977');
    let b = parse_string('22232364321.2223236432197700001');
    expect(greater(a, b)).toBe(false);

});

test('test greater comparison a == b', () => {

    let a = parse_string('29876687323455.001');
    let b = parse_string('29876687323455.001');
    expect(greater(a, b)).toBe(false);

});