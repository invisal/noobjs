const RandomNumber = require('../numbers/RandomNumber');

module.exports = function(arr, seed = null) {
  let random = RandomNumber.LinearCongruentialGenerator(seed);
  for(let i = n - 1;  i > 0; i--) {
    let j = random.nextRange(0, i);

    // Swapping
    let tmp = arr[i];
    arr[i] = arr[j];
    arr[j] = tmp;
  }
}