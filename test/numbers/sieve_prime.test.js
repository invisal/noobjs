var PrimeNumber = require('../../src/numbers/prime_number/PrimeNumber');

test ('test sieve prime of 101', () => {
    var arr = PrimeNumber.sieve_prime(101);

    expect(arr[1]).toBe(0);
    expect(arr[2]).toBe(1);
    expect(arr[57]).toBe(0);
    expect(arr[60]).toBe(0);
    expect(arr[91]).toBe(0);
    expect(arr[100]).toBe(0);
    expect(arr[101]).toBe(1);

})

test ('test sieve prime of 100', () => {
    var arr = PrimeNumber.sieve_prime(100);

    expect(arr[1]).toBe(0);
    expect(arr[2]).toBe(1);
    expect(arr[57]).toBe(0);
    expect(arr[60]).toBe(0);
    expect(arr[91]).toBe(0);
    expect(arr[100]).toBe(0);
})

test ('test sieve prime of n=1', () => {
    var arr = PrimeNumber.sieve_prime(1);
    expect(arr).toBe(null);
})