const Statistic = require('../../src/numbers/Statistic');

test('test arithmetic mean', () => {
  const data = [ 4, 5, 1, 2, 6, 6 ];
  expect(Statistic.mean(data)).toBe(4);
});

test('test variance', () => {
  const data = [ 6.1, 5.4, 8.6, 5.4, 4.1, 10.2, 7.6 ];
  expect(Statistic.var(data, false)).toBeCloseTo(3.8763265306122);
  expect(Statistic.var(data, true)).toBeCloseTo(4.5223809523809);
});

test('test standard deviation', () => {
  const data = [ 6.1, 5.4, 8.6, 5.4, 4.1, 10.2, 7.6 ];
  expect(Statistic.std(data, false)).toBeCloseTo(1.9688388787842);
  expect(Statistic.std(data, true)).toBeCloseTo(2.1265890417241);
});
