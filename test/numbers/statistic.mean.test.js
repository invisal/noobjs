const Statistic = require('../../src/numbers/Statistic');

test('test arithmetic mean', () => {
  const data = [ 4, 5, 1, 2, 6, 6 ];
  expect(Statistic.mean(data)).toBe(4);
});
