const {
  vec_add,
  vec_div,
  vec_create,
  mat_create,
} = require('./../numbers/LinearAlgebra');
const { LinearCongruentialGenerator } = require('./../numbers/RandomNumber');

class KMeanCluster {
  constructor ({
    n_clusters = 8, 
    algorithm = 'full',
    random_state = null,
    init = 'random',
    max_iter = 400,
    n_init = 10,
    tol = 0.0001,
  } = {}) {
    this.n_clusters = n_clusters;
    this.algorithm = algorithm;
    this.random_state = random_state;
    this.init = init;
    this.n_init = n_init;
    this.max_iter = max_iter;
    this.tol = tol;
  }

  fit(x) {
    this.data = x;

    let rand = new LinearCongruentialGenerator(this.random_state);
    let min_error = Infinity;

    for (let k = 0; k < this.n_init; k++) {
      let centers = choose_centers(this.n_clusters, x, this.init, rand.next());
      for(let i = 0; i < this.max_iter; i++) {
        if (adjust(x, centers) <= this.tol) break;
      }

      let error = measure_error(x, centers);
      if (error < min_error) {
        this.centers = centers;
        min_error = error;
      }
    }
  }

  error() {
    return measure_error(this.data, this.centers);
  }

  predict(x) {
    let marked = new Array(x.length);
    for(let i = 0; i < x.length; i++) {
      marked = this.nearest(x[i]);
    }

    return marked;
  }
}

function measure_error(x, centers) {
  let sum = 0;
  for(let i = 0; i < x.length; i++) {
    let { dist } = nearest(x[i], centers);
    sum += dist;
  }

  return sum;
}

function choose_centers(n_clusters, x, init, random_state) {
  let centers = new Array(n_clusters);
  let rand = new LinearCongruentialGenerator(random_state);

  if (init === 'random')
    for(let i = 0; i < n_clusters; i++)
      centers[i] = [...x[rand.nextRange(0, x.length - 1)]];

  return centers;
}

// Finding the nearest center from x
function nearest(x, centers) {
  let nearest_index = -1;
  let nearest_dist = +Infinity;

  for(let i = 0; i < centers.length; i++) {
    let t = distance(centers[i], x);
    if (t < nearest_dist) {
      nearest_dist = t;
      nearest_index = i;
    }
  }

  return {
    index: nearest_index,
    dist: nearest_dist
  };
}

function distance(a, b) {
  let dist = 0;
  for(let i = 0; i < a.length; i++) dist += Math.pow(a[i] - b[i], 2);
  return Math.sqrt(dist);
}

function adjust(x, centers) {
  let dimension = centers[0].length;
  let n_clusters = centers.length;
  let sum_dist = mat_create(n_clusters, dimension);
  let count = vec_create(n_clusters);
  let adjust_dist = 0;

  for(let i = 0; i < x.length; i++) {
    let nearest_index = nearest(x[i], centers).index;
    vec_add(sum_dist[nearest_index], x[i], true);
    count[nearest_index]++;
  }

  for(let i = 0; i < centers.length; i++) {
    let old_pos = [...centers[i]];
    centers[i] = count[i] > 0 ?
      vec_div(sum_dist[i], count[i]) :
      vec_create(dimension);
    adjust_dist += distance(old_pos, centers[i]);
  }

  return adjust_dist;
}

module.exports = KMeanCluster
