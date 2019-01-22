"use strict";
const BallTree = require('./../tree/BallTree');

function KNeighborsBallTreeSelector(x, y)
{
    // combine x and y into one array
    const z = x.map((value, index) => [...value, y[index]]);

    const dimension = x[0].length;
    const tree = new BallTree({
        points: z,
        dimension: dimension,
        leaf_size: 8,
    })
    
    // public methods
    this.get = function(p, n) {
        var best = tree.get(p, n);

        // separate the dist and class as different array
        var dist_list = [];
        var class_list = [];

        while(best.size() > 0) {
            let tmp = best.pop();
            dist_list.push(tmp.distance);
            class_list.push(tmp.point[dimension]);
        }
        
        return [class_list, dist_list];
    }

}

module.exports = KNeighborsBallTreeSelector;