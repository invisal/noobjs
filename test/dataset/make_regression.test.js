var { Dataset } = require('./../../index.js');
var math = require('mathjs');

test('random regression data', () => {
    
    var [x, y] = Dataset.make_regression({ samples:100, features:10 });

    // Check the data size
    expect(math.size(x)).toEqual([100, 10]);
    expect(math.size(y)).toEqual([100, 1]);

});