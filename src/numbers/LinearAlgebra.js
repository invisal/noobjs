function vec_create(n) {
  return new Array(n).fill(0);
}

function vec_add(a, b, inplace = false) {
  let t = inplace ? a : new Array(a.length);
  for(let i = 0; i < a.length; i++) t[i] = a[i] + b[i];
  return t;
}

function vec_div(a, b, inplace = false) {
  let t = inplace ? a : new Array(a.length);
  for(let i = 0; i < a.length; i++) t[i] = a[i] / b;
  return t; 
}

function mat_shape (mat) {
  return [mat.length, mat[0].length]
}

function mat_create (h, w) {
  let a = []
  for (var i = 0; i < h; i++) {
    a.push(new Array(w).fill(0))
  }
  return a
}

function mat_multiply (a, b) {
  let a_shape = mat_shape(a)
  let b_shape = mat_shape(b)

  if (a_shape[1] !== b_shape[0]) {
    throw 'Cannot multiply matrix of size (' +
      a_shape.toString() +
      ') with (' +
      b_shape.toString() +
      ')'
  }

  // create matrix
  let c_height = a_shape[0]
  let c_width = b_shape[1]
  let c = mat_create(c_height, c_width)

  // compute the multiplication
  for (var i = 0; i < c_height; i++) {
    for (var j = 0; j < c_width; j++) {
      for (var k = 0; k < b_shape[0]; k++) {
        c[i][j] += a[i][k] * b[k][j]
      }
    }
  }

  return c
}

function mat_transpose (a) {
  let a_shape = mat_shape(a)
  let height = a_shape[1]
  let width = a_shape[0]
  let b = mat_create(height, width)

  for (var i = 0; i < height; i++) {
    for (var j = 0; j < width; j++) {
      b[i][j] = a[j][i]
    }
  }

  return b
}

function mat_inverse (a) {
  var error = 0.0000000001
  var size = a.length
  var b = mat_create(size, size)

  function fix_zero (c) {
    if (Math.abs(a[c][c]) > error) return

    // Find the non zero
    for (var i = c + 1; i < size; i++) {
      if (Math.abs(a[i][c]) > error) {
        // add it to the current column
        for (var k = 0; k < size; k++) {
          a[c][k] += a[i][k]
          b[c][k] += b[i][k]
        }

        return
      }
    }

    // Cannot find
    throw 'There is no solution'
  }

  function correct_identity (c) {
    var v = a[c][c]
    if (Math.abs(v - 1) < error) return

    // Correct it by divide by itself
    for (var i = 0; i < size; i++) {
      a[c][i] /= v
      b[c][i] /= v
    }
  }

  function clear_column (c) {
    for (var i = 0; i < size; i++) {
      if (i === c) continue
      var m = a[i][c]

      for (var k = 0; k < size; k++) {
        a[i][k] = a[i][k] - m * a[c][k]
        b[i][k] = b[i][k] - m * b[c][k]
      }
    }
  }

  // Make b becomes an identity matrix
  for (var j = 0; j < size; j++) { b[j][j] = 1 }

  for (var j = 0; j < size; j++) {
    fix_zero(j)
    correct_identity(j)
    clear_column(j)
  }

  return b
}

module.exports = {
  mat_create,
  mat_multiply,
  mat_transpose,
  mat_inverse,
  vec_add,
  vec_div,
  vec_create,
}
