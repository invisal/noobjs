const BallTree = require('../../src/tree/BallTree');

test('ball tree - find the center point', () => {

  let x = [
    [1, 2, 1],
    [2, 3, 1],
    [3, 7, 1],
  ];

  expect(BallTree.findCenter(x, 2)).toEqual([2, 4]);

});

test('ball tree - find the radius', () => {

  let x = [
    [1, 2, 1],
    [2, 3, 1],
    [3, 7, 1],
  ];

  let center = [2, 4];
  let radius = BallTree.findRadius(x, center, 2);

  expect(radius).toBeCloseTo(3.16227766017);

});

test('ball tree - find the max spread', () => {

  let x = [
    [1, 2, 1],
    [2, 3, 1],
    [3, 7, 100],
  ];

  expect(BallTree.findMaxDimensionSpread(x, 2)).toBeCloseTo(1);

});

test('ball tree - building the tree', () => {

  let x = [
    [1, 2, 1],
    [2, 3, 1],
    [3, 7, 0],
    [2, 4, 0],
    [3, 0, 1],
    [6, 5, 1],
  ];

  let tree = new BallTree({ points: x, leaf_size: 2, dimension: 2 });

  expect(tree.left.left.points).toEqual([ [3, 0, 1] ]);
  expect(tree.left.right.points).toEqual([ [1, 2, 1], [2, 3, 1] ]);
  expect(tree.right.left.points).toEqual([ [2, 4, 0] ]);
  expect(tree.right.right.points).toEqual([ [3, 7, 0], [6, 5, 1] ]);

});