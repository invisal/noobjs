"use strict"

class KNeighborsClassifier
{
    constructor({
        neighbors = 5,
        algorithm = "brute",
        weights = "uniform"
    } = {}) {
        this.__neighbors = neighbors;
        this.__algorithm = algorithm;
        this.__weights = weights;
    }

    fit(x, y) {
        this.__x = x;
        this.__y = y;
    }

    predict(x) {
        return null;
    }

    score(x, y) {
        return null;
    }
}

module.exports = KNeighborsClassifier;