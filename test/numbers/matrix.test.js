var LinearAlgebra = require('../../src/numbers/LinearAlgebra');

test('matrix multiplication', () => {

    let a = [ [1, 2], [3, 4] ];
    let b = [ [4, 5], [6, 7] ];
    let c = [ [16, 19], [36, 43] ];    

    expect(LinearAlgebra.mat_multiply(a, b)).toEqual(c);

    a = [
        [3, 0, 2, 7, 3, 5, 4],
        [0, 6, 4, 2, 5, 5, 7],
        [6, 6, 8, 3, 5, 6, 8],
        [2, 9, 0, 4, 8, 2, 1]
    ];

    b = [
        [3, 2, 8, 4, 7],
        [9, 0, 3, 9, 7],
        [0, 8, 4, 4, 2],
        [1, 3, 0, 2, 2],
        [9, 2, 2, 9, 4],
        [3, 0, 1, 6, 2],
        [3, 6, 4, 2, 9]
    ];

    c = [
        [ 70,  73,  59,  99,  97],
        [137,  90,  77, 163, 147],
        [162, 143, 146, 213, 210],
        [172,  38,  65, 183, 130]
    ];

    expect(LinearAlgebra.mat_multiply(a, b)).toEqual(c);
});

test('matrix transpose', () => {

    let a = [
        [3, 0, 2, 7, 3, 5, 4],
        [0, 6, 4, 2, 5, 5, 7],
        [6, 6, 8, 3, 5, 6, 8],
        [2, 9, 0, 4, 8, 2, 1]
    ];

    let b = [
        [3, 0, 6, 2],
        [0, 6, 6, 9],
        [2, 4, 8, 0],
        [7, 2, 3, 4],
        [3, 5, 5, 8],
        [5, 5, 6, 2],
        [4, 7, 8, 1]
    ];

    expect(LinearAlgebra.mat_transpose(a)).toEqual(b);

});


test('matrix inverse', () => {

    let a = [[3, 0, 2], [2, 0, -2], [0, 1, 1]];
    let b = [[0.2, 0.2, 0], [-0.2, 0.3, 1], [0.2, -0.3, 0]];
    let c = LinearAlgebra.mat_inverse(a);

    for(var i = 0; i < 3; i++) {
        for(var j = 0; j < 3; j++) {
            expect(c[i][j]).toBeCloseTo(b[i][j]);
        }
    }
    
})