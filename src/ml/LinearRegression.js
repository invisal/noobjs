var math = require('mathjs');
var { mat_multiply,  mat_transpose, mat_inverse } = require('../numbers/LinearAlgebra');

class LinearRegression
{
    fit(x, y) {
        // Add 1 padding on the right side for bias value
        var x  = x.slice();
        for(var i = 0; i < x.length; i++) {
            x[i] = x[i].slice();
            x[i].push(1);
        }

        var xt = mat_transpose(x);

        var b =  mat_inverse(mat_multiply(xt, x));
        b = mat_multiply(b, xt);
        b = mat_multiply(b, y)

        this.weight = b;
    }

    predict(x) {
        // Add 1 padding on the right side for bias value
        var x  = x.slice();
        for(var i = 0; i < x.length; i++) {
            x[i] = x[i].slice(0);
            x[i].push(1);
        }

        return mat_multiply(x, this.weight);
    }

    score(x, y) {
        var predicted = this.predict(x);
        var error = 0;
        var mean = 0;
        var error_mean = 0;

        for(let i = 0; i < y.length; i++) {
            error += Math.pow(predicted[i][0] - y[i][0], 2);
            mean += y[i][0];
        }

        mean /= y.length;

        for(let i = 0; i < y.length; i++) {
            error_mean += Math.pow(predicted[i][0] - mean, 2);
        }

        console.log(mean);
        return 1 - error / error_mean;
    }

}

module.exports = LinearRegression;