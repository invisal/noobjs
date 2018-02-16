var HashPriorityQueue = require('../../src/collections/HashPriorityQueue');

test('test hash priority queue', () => {

    let a = new HashPriorityQueue();
    a.push('a', 10);
    a.push('b', 20);
    a.push('c', 15);
    a.push('d', 5);
    a.push('e', 6);

    expect(a.pop()).toEqual(['d', 5]);
    expect(a.contain('d')).toBe(false);

    a.change('a', 1);
    expect(a.pop()).toEqual(['a', 1]);

    a.change('e', 100);
    expect(a.pop()).toEqual(['c', 15]);
    expect(a.pop()).toEqual(['b', 20]);
    expect(a.pop()).toEqual(['e', 100]);
});