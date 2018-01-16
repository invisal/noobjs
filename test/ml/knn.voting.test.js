"use strict";

var KNeighborsVoting = require('../../src/ml/KNeighborsVoting');

test('test k-nearest uniform voting', () => {

    var voters = new KNeighborsVoting('uniform');
    
    expect(voters.get([0, 0, 1], [3, 4, 5])).toBe(0);
    expect(voters.get([0, 0, 1, 1, 1], [3, 4, 5, 6, 7])).toBe(1);
    expect(voters.get([0, 0, 1, 1], [5, 2, 4, 3])).toBe(0);
    expect(voters.get([0, 0, 2, 2, 2], [1, 1, 1, 1, 1])).toBe(2);
});