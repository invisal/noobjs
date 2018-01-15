var math = require('mathjs');

module.exports = function({ 
    samples = 100, 
    features = 50,
    coef = false,
    noise = 0.05,
    bias = 0
} = {}) {

    var weight = math.random([features, 1], 0, 10);
    var x = math.random([samples, features], 0, 10);
    var y = math.multiply(x, weight);

    // Add some noises and bias
    for(var i = 0; i < y.length; i++) {
        if (noise > 0) y[i][0] = y[i][0] * math.random(1 - noise, 1 + noise);
        y[i][0] += bias
    }

    if (coef) return [x, y, weight];
    return [x, y];
}