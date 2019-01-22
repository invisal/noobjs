const KNeighhorsBruteSelector = require('../../src/ml/KNeighborsBruteSelector.js');
const KNeighborsBallTreeSelector = require('../../src/ml/KNeighborsBallTreeSelector');

test('test select 3 nearest points', () => {

    const x = [ [1, 1], [1, 2], [3, 4], [4, 6], [3, 1], [0, 0] ];
    const y = [1, 1, 0, 0, 0, 1];

    const k = new KNeighhorsBruteSelector(x, y);
    const [cls, dist] = k.get([3, 3], 3);

    expect(dist).toEqual([2.23606797749979, 2, 1]);
    expect(cls).toEqual([1, 0, 0]);
});

test('test select 3 nearest points with ball tree', () => {

    const x = [ [1, 1], [1, 2], [3, 4], [4, 6], [3, 1], [0, 0] ];
    const y = [1, 1, 0, 0, 0, 1];

    const k = new KNeighborsBallTreeSelector(x, y);
    const [cls, dist] = k.get([3, 3], 3);

    expect(dist).toEqual([2.23606797749979, 2, 1]);
    expect(cls).toEqual([1, 0, 0]);
});