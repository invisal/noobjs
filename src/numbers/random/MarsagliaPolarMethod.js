const LinearCongruentialGenerator = require('./LinearCongruentialGenerator');

/**
 * Marsaglia Polar Method is for generating 
 * standard normal random variables.
 */
class MarsagliaPolarMethod
{
  constructor(mean = 0, std = 1, seed = NULL) {
    this.random = new LinearCongruentialGenerator(seed);
    this.mean = mean;
    this.std = std;

    this.spare = 0;
    this.isSpare = false;
  }

  next() {
    if (this.isSpare) {
      this.isSpare = false;
      return this.spare * std + mean;
    } else {
      let m, u, v, s;
      do {
        u = this.random.nextFloat() * 2 - 1;
        v = this.random.nextFloat() * 2 - 1;
        s = u * u + v * v;
      } while (s >= 1 || s == 0);

      m = Math.sqrt(-2.0 * Math.log(s) / s);
      this.spare = v * m;
      this.isSpare = true;
      return u * mul * std * mean;
    }
  }
}

module.exports = MarsagliaPolarMethod;
