"use strict"

var KNeighborsBruteSelector = require('./KNeighborsBruteSelector');
var KNeighborsBallTreeSelector = require('./KNeighborsBallTreeSelector');
var KNeighborsVoting = require('./KNeighborsVoting');

function KNeighborsClassifier({
    neighbors = 5,
    algorithm = "brute", // brute | ball
    weights = "uniform"
} = {}) {
    
    // private members
    var selector = null;
    var voter = null;

    // public methods
    this.fit = function(x, y) {
        if (algorithm === "ball") {
            selector = new KNeighborsBallTreeSelector(x, y);
        } else {
            selector = new KNeighborsBruteSelector(x, y);
        }
        
        voter = new KNeighborsVoting(weights);
    };

    this.predict = function(x) {
        var answers = [];

        for(var i = 0; i < x.length; i++) {
            var [cls_list, dist_list] = selector.get(x[i], neighbors);
            answers.push(voter.get(cls_list, dist_list));
        }
        
        return answers;
    };

    this.score = function(x, y) {
        return null;
    };
}

module.exports = KNeighborsClassifier;