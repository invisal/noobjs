var parse_string = require('../../src/numbers/big_number/parse_string');

test('test parse string into big number', () => {

    expect(parse_string('23441')).toEqual({
        data: [23441],
        point: 0,
        sign: 0
    });

    expect(parse_string('91123451')).toEqual({
        data: [1123451, 9],
        point: 0,
        sign: 0
    });

    expect(parse_string('000191123451')).toEqual({
        data: [1123451, 19],
        point: 0,
        sign: 0
    });

    expect(parse_string('-56531')).toEqual({
        data: [56531],
        point: 0,
        sign: 1
    });

    expect(parse_string('65421.00420')).toEqual({
        data: [42000, 65421],
        point: 1,
        sign: 0
    });

    expect(parse_string('-2341.1')).toEqual({
        data: [1000000, 2341],
        point: 1,
        sign: 1
    });

    expect(parse_string('-154535214463992341.164454647545424')).toEqual({
        data: [4000000, 4754542, 1644546, 3992341, 3521446, 1545],
        point: 3,
        sign: 1
    });

});