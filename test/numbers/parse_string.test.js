var parse_string = require('../../src/numbers/big_number/parse_string');

test('test parse string into big number', () => {

    expect(parse_string('23441')).toEqual([3441, 2]);
    expect(parse_string('91123451')).toEqual([3451, 9112]);
    expect(parse_string('000191123451')).toEqual([3451, 9112, 1]);
});