var BigNumber = require('../../src/numbers/BigNumber');

test('test initialize big number', () => {

    let b = new BigNumber();
    expect(b.toString()).toBe('0');

    b = new BigNumber('245124');
    expect(b.toString()).toBe('245124');

    b = new BigNumber('000056312396423230');
    expect(b.toString()).toBe('56312396423230');

    b = new BigNumber('9995631239.642399923');
    expect(b.toString()).toBe('9995631239.642399923');

    b = new BigNumber('0.1');
    expect(b.toString()).toBe('0.1');

    b = new BigNumber('0.00000000021');
    expect(b.toString()).toBe('0.00000000021');
});

test('test add two big numbers', () => {

    let a, b, c;

    a = new BigNumber('2423252642366321');
    b = new BigNumber('12099993453252674346');
    c = a.add(b);
    expect(c.toString()).toBe('12102416705895040667');

    a = new BigNumber('-2423252642366321');
    b = new BigNumber('-12099993453252674346');
    c = a.add(b);
    expect(c.toString()).toBe('-12102416705895040667');
    
    a = new BigNumber('-34343699243245465124353.4345987');
    b = new BigNumber('44356232435464545467575');
    c = a.add(b);
    expect(c.toString()).toBe('10012533192219080343221.5654013');

    a = new BigNumber('99956533.866893225');
    b = new BigNumber('-664547454578.9998877');
    c = a.add(b);
    expect(c.toString()).toBe('-664447498045.132994475');

    a = new BigNumber('99956533.866893225');
    b = new BigNumber('-99956533.866893225');
    c = a.add(b);
    expect(c.toString()).toBe('0');
});

test('test subtract two big numbers', () => {

    let a, b, c;

    a = new BigNumber('2423252642366321');
    b = new BigNumber('12099993453252674346');
    c = a.subtract(b);
    expect(c.toString()).toBe('-12097570200610308025');
});

test('test multiply big number', () => {

    let a, b, c;

    a = new BigNumber('2423252642366321');
    b = new BigNumber('12099993453252674346');
    c = a.multiply(b);
    expect(c.toString()).toBe('29321341108209728304299095051101066');

    a = new BigNumber('2423252642366321');
    b = new BigNumber('0.0000001');
    c = a.multiply(b);
    expect(c.toString()).toBe('242325264.2366321');

    a = new BigNumber('29321341108209728304299.3435464');
    b = new BigNumber('92909728304299.213469');
    c = a.multiply(b);
    expect(c.toString()).toBe('2724237835881445460790830381167056711.5025411064616');
    
});