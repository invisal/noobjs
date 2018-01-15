var { ML } = require('./../../index.js');

test('trains and test simple linear regression', () => {
    var x = [ 
        [0.17], [2.47], [1.73], [4.43], [4.51], 
        [4.59], [1.24], [0.84], [0.09], [0.51], 
        [2.06], [2.89], [0.81], [4.39], [1.20] 
    ];

    var y = [ 
        [100.0], [410.0], [250.0], [560.0], [440.0], 
        [510.0], [230.0], [170.0], [100.0], [140.0], 
        [250.0], [460.0], [160.0], [490.0], [210.0] 
    ];

    var linear = new ML.LinearRegression();
    linear.fit(x, y);

    // Comparing this to sklearn linear regression result
    expect(linear.weight[0][0]).toBeCloseTo(93.56217936);
    expect(linear.weight[1][0]).toBeCloseTo(99.50397419);
    expect(linear.predict([[4.0]])[0][0]).toBeCloseTo(473.75269165);
    expect(linear.score(x, y)).toBeCloseTo(0.926818312694, 1);
});