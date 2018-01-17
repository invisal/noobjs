function mat_shape(mat)
{
    return [ mat.length, mat[0].length ];
}

function mat_multiply(a, b)
{

    let a_shape = mat_shape(a);
    let b_shape = mat_shape(b);

    if (a_shape[1] !== b_shape[0]) 
        throw "Cannot multiply matrix of size (" + a_shape.toString() + ") with (" + b_shape.toString() + ")";

    let c_height = a_shape[0];
    let c_width  = b_shape[1];

    // create matrix of size c_height x c_width
    let c = [];
    for(var i = 0; i < c_height; i++) { 
        c.push(new Array(c_width).fill(0));
    }

    // compute the multiplication
    for(var i = 0; i < c_height; i++) {
        for(var j = 0; j < c_width; j++) {
            for(var k = 0; k < b_shape[0]; k++) {
                c[i][j] += a[i][k] * b[k][j];
            }
        }
    }

    return c;
}

module.exports = { 
    mat_multiply 
};