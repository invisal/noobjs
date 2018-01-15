var math = require('mathjs');

class LinearRegression
{
    fit(x, y) {
        // Add 1 padding on the right side for bias value
        var x  = x.slice();
        for(var i = 0; i < x.length; i++) {
            x[i] = x[i].slice();
            x[i].push(1);
        }

        var xt = math.transpose(x);

        var b = math.divide(1, math.multiply(xt, x));
        b = math.multiply(b, xt);
        b = math.multiply(b, y)

        this.weight = b;
    }

    predict(x) {
        // Add 1 padding on the right side for bias value
        var x  = x.slice();
        for(var i = 0; i < x.length; i++) {
            x[i] = x[i].slice(0);
            x[i].push(1);
        }

        return math.multiply(x, this.weight);
    }

    score(x, y) {
        var predicted = this.predict(x);
        var error = math.sum(math.square(math.subtract(predicted, y)));
        var mean = math.mean(y);
        var error_mean = math.sum(math.square(math.subtract(predicted, mean)));

        return 1 - error / error_mean;
    }

}

module.exports = LinearRegression;