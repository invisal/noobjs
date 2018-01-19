var PrimeNumber = require('../../src/numbers/prime_number/PrimeNumber');

test('test is_prime function', () => {
    expect(PrimeNumber.is_prime(-1)).toBe(false);
    expect(PrimeNumber.is_prime(0)).toBe(false);
    expect(PrimeNumber.is_prime(2)).toBe(true);
    expect(PrimeNumber.is_prime(1)).toBe(false);
    expect(PrimeNumber.is_prime(5)).toBe(true);
    expect(PrimeNumber.is_prime(57)).toBe(false);
    expect(PrimeNumber.is_prime(101)).toBe(true);
})

test ('test sieve prime of 101', () => {
    var arr = PrimeNumber.sieve_prime(101);
    for(var i=2; i<=101; i++) {
        expect(arr[i]).toBe(PrimeNumber.is_prime(i));
    }

})

test ('test sieve prime of n=1', () => {
    var arr = PrimeNumber.sieve_prime(1);
    expect(arr).toBe(null);
})