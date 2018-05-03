class Statistic
{
  static mean(data) {
    let sum = 0;
    for(let i = 0; i < data.length; i++) sum += data[i];
    return sum / data.length;
  }

  static variance(data) {

  }

  static standardDeviation(data) {

  }
}

module.exports = Statistic;
