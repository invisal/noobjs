const PriorityQueue = require('./../collections/PriorityQueue');

class BallTree {
    constructor({ points, leaf_size = 8, dimension = -1 } = {})
    {
        this.center = BallTree.findCenter(points, dimension);
        this.radius = BallTree.findRadius(points, this.center, dimension);

        this.is_leaf = points.length <= leaf_size;
        
        // If dimension is not set, we use the dimension of
        // the point.
        if (dimension <= 0) dimension = points[0].length;
        this.dimension = dimension;

        // It is a leaf, no need to divide into
        // more sub ball tree
        if (this.is_leaf) {
            this.points = points;
            return;
        }

        let maxD = BallTree.findMaxDimensionSpread(points, dimension);

        // Sort the array based on the dimension with the max spread
        points.sort((a, b) => a[maxD] - b[maxD]);

        // Split the array of point into two parts
        this.left  = new BallTree({
            points: points.slice(0, points.length >> 1), 
            leaf_size, dimension
        });
         
        this.right = new BallTree({ 
            points: points.slice(points.length >> 1),
            leaf_size, dimension
        });
    }

    get(target, k) {
        let q = new PriorityQueue((a, b) => a.distance > b.distance);
        this.getWithPR(target, k, q);
        return q;
    }

    getWithPR(target, k, q) {
        // Ignore this tree if it is impossible to find any point that
        // is nearer than current points in the priority queue
        if (q.size() >= k) {
            let distanceFromCenter = BallTree.distance(target, this.center, this.dimension);
            if (distanceFromCenter - this.radius > q.top().distance) return;
        }
        
        if (!this.is_leaf) {
            this.left.getWithPR(target, k, q);
            this.right.getWithPR(target, k, q);
            return;
        }

        for (let i = 0; i < this.points.length; i++) {
            let p = this.points[i];
            let dist = BallTree.distance(target, p, this.dimension);
            
            if (k > q.size()) q.push({ distance: dist, point: p });
            else if (q.top().distance > dist) {
                q.push({ distance: dist, point: p });
                q.pop();
            }

        }
    }

    static findMaxDimensionSpread(points, dimension) {
        let max_spread = -1;
        let max_dimension = -1;

        for (let d = 0; d < dimension; d++) {
            let max_value = points[0][d];
            let min_value = points[0][d];

            for (let i = 1; i < points.length; i++) {
                max_value = Math.max(points[i][d], max_value);
                min_value = Math.min(points[i][d], min_value);
            }

            let spread = Math.abs(max_value - min_value);
            if (spread > max_spread) {
                max_spread = spread;
                max_dimension = d;
            }
        }

        return max_dimension;
    }

    static findCenter(points, dimension) {
        let center = new Array(dimension).fill(0);

        for (let d = 0; d < dimension; d++) {
            for (let i = 0; i < points.length; i++)
                center[d] += points[i][d];
            center[d] = center[d] / points.length;
        }

        return center;
    }

    static findRadius(points, center, dimension) {
        let radius = -1;
        for (let i = 0; i < points.length; i++) {
            radius = Math.max(radius, BallTree.distance(center, points[i], dimension));
        }

        return radius;
    }

    static distance(p, q, d) {
        let sum = 0;
        for(let i = 0; i < d; i++) {
            sum += Math.pow(p[i] - q[i], 2);
        }
        return Math.sqrt(sum);
    }  
}

module.exports = BallTree;