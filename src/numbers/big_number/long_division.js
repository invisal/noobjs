var { trim_zeroes } = require('./utility');

const BASE = 10000000;

function normalization(u, v) 
{
    let d = Math.floor(BASE / (v[0] + 1));
    let t, c;

    // d * u
    c = 0;
    for(let i = u.length - 1; i >= 0; i--) {
        t = u[i] * d + c;
        u[i] = t % BASE;
        c = Math.floor(t / BASE);
    }

    // d * v
    c = 0;
    for(let i = v.length - 1; i >= 0; i--) {
        t = v[i] * d + c;
        v[i] = t % BASE;
        c = Math.floor(t / BASE);
    }
}

function calculate_q(u, v, j, n)
{
    if (u[j] == v[0]) return BASE - 1;
    
    let q = Math.floor( (u[j] * BASE + u[j+1]) / v[0] );
    while( v[1] * q > ((u[j] * BASE + u[j+1] - q * v[0]) * BASE + u[j+2]) ) q--;

    return q;
}

function multiply_and_subtract(u, v, j, q)
{
    let t, c = 0;
    for (let i = v.length - 1; i >= 0; i--) {
        t = u[j + i + 1] - v[i] * q + c;
        if (t < 0) {
            u[j + i + 1] = BASE + (t % BASE);
            c = Math.floor(t / BASE);
        } else {
            u[j + i + 1] = t % BASE;
            c = Math.floor(t / BASE);
        }
    }

    u[j] += c;
    return u[j] >= 0;
}

function add_back(u, v, j)
{
    let c = 0, t;
    for(let i = v.length - 1; i >= 0; i++) {
        t = v[i] + u[j + i + 1] + c;
        if (t > BASE) {
            u[j + i + 1] -= BASE;
            c = 1;
        } else {
            u[j + i + 1] = t;
            c = 0;
        }
    }

    u[j] += c;
    return u[j] < 0;
}

function long_division(a, b)
{
    let point = a.point - b.point;
    let v = b.data.slice();

    // remove all the leading zero
    while(v.length > 1 && v[v.length - 1] === 0) v.pop();
    v.reverse();

    // u must be longer or equal than v
    let u = a.data.slice();
    if (u.length < v.length) {
        point += v.length - u.length + 3;
        u.unshift(...new Array(v.length - u.length + 3).fill(0));
    }
    u.push(0); u.reverse();

    let q = new Array(u.length - v.length).fill(0);

    normalization(u, v);

    for(let j = 0; j < q.length; j++) {
        let q_ = calculate_q(u, v, j); 
        
        if (!multiply_and_subtract(u, v, j, q_)) {
            while(add_back(u, v, j)) q_--;
        }

        q[j] = q_;
    }

    let c = { data: q.reverse(), point: point, sign: (a.sign + b.sign) & 1 };
    fix_invalid_point(c);
    trim_zeroes(c);
    return c;
}

function long_single_division(a, b)
{
    let point = a.point - b.point;
    let k = b.data[0];
    let r = 0, t = 0;
    let q = new Array(a.data.length);

    for(let i = a.data.length - 1; i >= 0; i--) {
        t = r * BASE + a.data[i];
        q[i] = Math.floor(t / k);
        r = t % k;
    }

    // If there is reminder left, let do a few more
    for(let i = 0; i < 3 && r != 0; i++) {
        t = r * BASE;
        q.unshift(Math.floor(t / k));
        r = t % k;
        point++;
    }

    let c = { data: q, point: point, sign: (a.sign + b.sign) & 1 };
    fix_invalid_point(c);

    return c;
}

function fix_invalid_point(c)
{
    if (c.data.length < c.point) 
        c.data.push(...new Array(c.point - c.data.length).fill(0));
    if (c.point < 0) {
        c.data.unshift(...new Array(-c.point).fill(0));
        c.point = 0;
    }
}

module.exports = { long_division, long_single_division };