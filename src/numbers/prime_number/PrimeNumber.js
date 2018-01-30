function sieve_prime(n) {

    if (n < 2) {
        return null;
    }

    var arr = Array(n+1).fill(true);
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
    if (n < 2) return false;
    if (n == 2) return true;
    if (n == 3) return true;
    if (n % 2 == 0) return false;
    if (n % 3 == 0) return false;

    var sqrt_n = Math.sqrt(n) + 1;
    for (var i = 6; i <= sqrt_n; i += 6) {
        if (n % (i-1) == 0) {
            return false;
        }
        if (n % (i+1) == 0) {
            return false;
        }
    }
    return true;
}

module.exports = {
    sieve_prime,
    is_prime
};


