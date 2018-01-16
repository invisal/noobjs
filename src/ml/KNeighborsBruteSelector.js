var { PriorityQueue } = require('../../index.js').Collections;

function KNeighborsBruteSelector(x, y)
{

    // private methods
    function distance(p, q) {
        var sum = 0;
        for(var i = 0; i < p.length; i++) {
            sum += Math.pow(p[i] - q[i], 2);
        }
        return sum;
    }

    function greater(a, b) {
        return a.dist > b.dist;
    }

    // public methods
    this.get = function(p, n) {
        var best = new PriorityQueue(greater);

        // loop every point and calculate the distance
        for(var i = 0; i < x.length; i++) {
            let dist = distance(x[i], p);

            if (best.size() < n) {
                best.push({ dist: dist, cls: y[i] });
                continue;
            }

            // if the top points is not the best,
            // we will replace with the better one
            if (best.top().dist > dist) {
                best.pop();
                best.push({ dist: dist, cls: y[i] });
            }
        }

        // separate the dist and class as different array
        var dist_list = [];
        var class_list = [];

        while(best.size() > 0) {
            let tmp = best.pop();
            dist_list.push(tmp.dist);
            class_list.push(tmp.cls);
        }
        
        return [class_list, dist_list];
    }

}

module.exports = KNeighborsBruteSelector;