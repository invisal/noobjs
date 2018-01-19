function sieve_prime(n) {

    if (n < 2) {
        return null;
    }

    var arr = Array.apply(null, Array(n+1)).map(Boolean.prototype.valueOf, true);
    arr[0] = false;
    arr[1] = false;

    var sqrt_n = Math.sqrt(n)
    for (var i=2; i<=sqrt_n; i++) {
        if (arr[i]) {
            for (var j=i*i; j<=n; j+=i) {
                arr[j] = false;
            }
        }
    }

    return arr
}

function is_prime(n) {
    if (n<2) return false;
    var sqrt_n = Math.sqrt(n);
    for (var i=2; i<=sqrt_n; i++) {
        if (n % i == 0) {
            return false;
        }
    }
    return true;
}

module.exports = {
    sieve_prime,
    is_prime
};


