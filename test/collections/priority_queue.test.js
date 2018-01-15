var { PriorityQueue } = require('../../index.js').Collections;

test('test priority queue with small number of item', () => {

    var p = new PriorityQueue();

    expect(p.top()).toBe(false);

    p.push(7);
    p.push(6);
    p.push(8);
    p.push(9);

    expect(p.size()).toBe(4);
    expect(p.top()).toBe(6);

    expect(p.pop()).toBe(6);
    expect(p.pop()).toBe(7);
    expect(p.pop()).toBe(8);
    expect(p.pop()).toBe(9);
    
    expect(p.size()).toBe(0);
    expect(p.pop()).toBe(false);
    expect(p.top()).toBe(false);

});

test('test priority queue with custom comparison', () => {

    var p = new PriorityQueue( (a, b) => a.math + a.physic > b.math + b.physic );

    p.push({ id: 1, math:90, physic:10 });
    p.push({ id: 2, math:50, physic:30 });
    p.push({ id: 3, math:60, physic:70 });
    p.push({ id: 4, math:70, physic:15 });

    expect(p.pop().id).toBe(3);
    expect(p.pop().id).toBe(1);
    expect(p.pop().id).toBe(4);
    expect(p.pop().id).toBe(2);

});