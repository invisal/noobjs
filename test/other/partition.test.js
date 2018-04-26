const Partition = require('../../src/other/Partition');

test('test hoare partition', () => {

  let a = [6, 2, 8, 5, 7, 4, 3];
  let j = Partition.Hoare(a, 0, a.length - 1);

  expect(j).toBe(4);
  for(let i = 0; i < j; i++) expect(a[i] <= a[j]).toBe(true);
  for(let i = j + 1; i < a.length; i++) expect(a[i] >= a[j]).toBe(true);

});

test('test lomuto partition', () => {

  let a = [6, 2, 8, 5, 7, 4, 3];
  let j = Partition.Lomuto(a, 0, a.length - 1);

  expect(j).toBe(1);
  for(let i = 0; i < j; i++) expect(a[i] <= a[j]).toBe(true);
  for(let i = j + 1; i < a.length; i++) expect(a[i] >= a[j]).toBe(true);

});