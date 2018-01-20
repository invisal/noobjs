var BigNumber = require('../../src/numbers/BigNumber');

test('test initialize big number', () => {

    let b = new BigNumber();
    expect(b.toString()).toBe('0');

    b = new BigNumber('245124');
    expect(b.toString()).toBe('245124');

    b = new BigNumber('000056312396423230');
    expect(b.toString()).toBe('56312396423230');
});

test('test add positive big number', () => {

    let a, b, c;

    a = new BigNumber('2423252642366321');
    b = new BigNumber('12099993453252674346');

    c = a.add(b);
    expect(c.toString()).toBe('12102416705895040667');
    
});