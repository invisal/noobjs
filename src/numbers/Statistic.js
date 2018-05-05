class Statistic
{
  static mean(data) {
    let sum = 0;
    for(let i = 0; i < data.length; i++) sum += data[i];
    return sum / data.length;
  }

  static var(data, sample = true) {
    const mean = Statistic.mean(data);
    let sum = 0;
    for(let i = 0; i < data.length; i++) sum += Math.pow(data[i] - mean, 2);

    if (sample) return sum / (data.length - 1);
    return sum / data.length;
  }

  static std(data, sample = true) {
    return Math.sqrt(Statistic.var(data, sample));
  }
}

module.exports = Statistic;
