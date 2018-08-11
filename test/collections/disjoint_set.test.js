var DisjointSet  = require('../../src/collections/DisjointSet');

test('test disjoint set', () => {

    let a = new DisjointSet(11);
    a.union(0, 1);
    a.union(1, 2);
    a.union(5, 6);
    a.union(2, 6);

    a.union(3, 4);
    a.union(10, 3);

    a.union(8, 9);

    expect(a.count()).toBe(4);

    expect(a.connected(8, 9)).toBe(true);
    expect(a.connected(4, 10)).toBe(true);
    expect(a.connected(0, 6)).toBe(true);
    expect(a.connected(0, 2)).toBe(true);
    expect(a.connected(0, 8)).toBe(false);
    expect(a.connected(2, 10)).toBe(false);

})