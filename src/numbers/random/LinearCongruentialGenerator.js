class LinearCongruentialGenerator
{
  constructor(seed = null) {
    this.seed = this.seed === null ? Date.now() : seed;
  }

  next() {
    this.seed = (1103515245 * this.seed + 12345) % 2147483648;
    return this.seed;
  }

  nextRange(min, max) {
    return min + next() % (max - min + 1);
  }
}

module.exports = LinearCongruentialGenerator;
