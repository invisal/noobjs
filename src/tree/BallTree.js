function BallTree({
    points,
    leaf_size = 8,
} = {}) {

    // If it is below leaf size, it is a leaf
    let left = null;
    let right = null;
    let is_leaf = points.length <= leaf_size;

    // Finding the center point
    let dimension = points[0].length;
    let center = new Array(dimension).fill(0);

    for (let i = 0; i < points.length; i++) {
        for (let d = 0; d < dimension; d++)
            center[d] += points[i][d];
        center[d] = center[d] / points.length;
    }

    // Finding the radius
    let radius = -1;
    for (let i = 0; i < points.length; i++) {
        radius = Math.max(radius, distance(center, points[i]));
    }

    // It is a leaf, no need to divide into
    // more sub ball tree
    if (this.is_leaf) return;

    // Find the dimension with the maximum spread
    let max_spread = -1;
    let max_dimension = -1;
    for (let d = 0; d < dimension; d++) {
        let max_value = points[0][d];
        let min_value = points[0][d];

        for (let i = 1; i < points.length; i++) {
            max_value = Math.max(points[i][d], max_value);
            min_value = Math.max(points[i][d], max_value);
        }

        let spread = Math.abs(max_value - min_value);
        if (spread > max_spread) {
            max_spread = spread;
            max_dimension = d;
        }
    }

    // Sort the array based on the dimension with the max spread
    points.sort((a, b) => a[max_dimension] - b[max_dimension]);

    // Split the array of point into two parts
    left  = new BallTree({ points: points.slice(0, points.length >> 1) , leaf_size });
    right = new BallTree({ points: points.slice(points.length >> 1) , leaf_size });

    // If don't need to waste memory to store the
    // points since those points will be passed
    // to the leaf tree
    point = null;

    /**
     * Calculate the distance between two points
     * @param {*} p 
     * @param {*} q 
     */
    function distance(p, q) {
        var sum = 0;
        for(var i = 0; i < p.length; i++) {
            sum += Math.pow(p[i] - q[i], 2);
        }
        return Math.sqrt(sum);
    }
}

module.exports = BallTree;