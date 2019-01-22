var KNeighborsClassifier = require('./../../src/ml/KNeighborsClassifier');

var x = [
    [-0.16101400,  1.19844806],
    [ 0.12747628,  0.41113268],
    [ 3.42249294,  4.28321169],
    [ 0.02586427, -0.03014396],
    [ 0.72335355,  2.52453239],
    [ 0.95112888, -0.88995322],
    [ 1.83745524, -1.28340708],
    [ 0.26690960,  2.11925743],
    [-0.34827612,  1.45745756],
    [ 1.79094646,  0.61976783],
    [-4.66430052, -1.87687686],
    [-2.24940236, -2.23288168],
    [-0.24228362,  1.03074886],
    [-0.54856825,  1.20409176],
    [ 1.59667472, -0.57695155],
    [ 2.33012799, -0.2971027 ],
    [ 0.77699439,  0.80935109],
    [-1.83439858, -2.93160001],
    [-0.68347735, -0.83890056],
    [-1.11958913, -1.13653351]
];

var y = [ 1, 0, 0, 0, 0, 1, 1, 0, 0, 1, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0 ];
var x_ = [ [0, 2], [-2, -2], [2, 3], [-2, 4], [2, -1], [2, 0] ];
var y_ = [0, 0, 0, 0, 1, 1];

test('trains and test k-nearest neighbors classifier', () => {
    var knn = new KNeighborsClassifier({ neighbors: 3 });
    knn.fit(x, y);
    expect(knn.predict(x_)).toEqual(y_);
});

test('trains and test k-nearest neighbors classifier with ball tree', () => {
    var knn = new KNeighborsClassifier({
        neighbors: 3,
        algorithm: 'ball',
    });
    knn.fit(x, y);
    expect(knn.predict(x_)).toEqual(y_);
});