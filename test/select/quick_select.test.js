const QuickSelect = require('../../src/select/QuickSelect');

test('test quick select algorithm - case 01', () => {

  let a = [ 6, 3, 2, 7, 4, 0, 1, 5 ];
  expect(QuickSelect(a, 0, a.length - 1, 4, (a, b) => a < b)).toBe(4);

});

test('test quick select algorithm - case 02', () => {

  let a = [ 142, 100, 111, 533, 563, 300 ];
  expect(QuickSelect(a, 0, a.length - 1, 3, (a, b) => a < b)).toBe(300);

});
