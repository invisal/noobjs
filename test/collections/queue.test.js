var Queue = require('../../src/collections/Queue');

test('test queue with small set of item', () => {

    var q = new Queue();
    
    q.enqueue(5);
    q.enqueue(10);
    q.enqueue(8);

    expect(q.top()).toBe(5);
    expect(q.size()).toBe(3);
    
    expect(q.dequeue()).toBe(5);
    expect(q.dequeue()).toBe(10);
    expect(q.dequeue()).toBe(8);

});

test('test queue with large set of item', () => {

    var q = new Queue();

    for(var i = 0; i < 100; i++) q.enqueue(i);
    expect(q.top()).toBe(0);
    expect(q.size()).toBe(100);

    for(var j = 0; j < 30; j++) q.dequeue();
    expect(q.top()).toBe(30);
    expect(q.size()).toBe(70);

    for(var j = 30; j < 35; j++) {
        expect(q.dequeue()).toBe(j);
    }
});