var { Stack } = require('../../index.js').Collections;

test('test stack with small set of item', () => {

    var s = new Stack();
    
    s.push(5);
    s.push(10);
    s.push(8);

    expect(s.top()).toBe(8);
    expect(s.size()).toBe(3);
    
    expect(s.pop()).toBe(8);
    expect(s.pop()).toBe(10);
    expect(s.pop()).toBe(5);

});

test('test stack with large set of item', () => {

    var s = new Stack();

    for(var i = 0; i < 100; i++) s.push(i);
    expect(s.top()).toBe(99);
    expect(s.size()).toBe(100);

    for(var j = 0; j < 30; j++) s.pop();
    expect(s.top()).toBe(69);
    expect(s.size()).toBe(70);

    for(var j = 69; j > 65; j--) {
        expect(s.pop()).toBe(j);
    }
});