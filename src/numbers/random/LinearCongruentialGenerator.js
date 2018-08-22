const MAX = 2147483648;
const C = 12345;
const A = 1103515245;

class LinearCongruentialGenerator
{
  constructor(seed = null) {
    this.seed = this.seed === null ? Date.now() : seed;
  }

  rand_max() {
    return MAX;
  }

  next() {
    this.seed = (A * this.seed + C) % MAX;
    return this.seed;
  }

  nextFloat() {
    this.seed = (A * this.seed + C) % MAX
    return this.seed / MAX;
  }

  nextRange(min, max) {
    return min + this.next() % (max - min + 1);
  }
}

module.exports = LinearCongruentialGenerator;
