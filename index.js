module.exports = {
    LinearRegression: require('./src/ml/LinearRegression.js'),
    KMean: require('./src/ml/KMeanCluster.js'),
    GaussianNaiveBayes: require('./src/ml/GaussianNaiveBayes.js'),
    KNeighborsClassifier: require('./src/ml/KNeighborsClassifier.js'),

    PriorityQueue: require('./src/collections/PriorityQueue'),
    HashPriorityQueue: require('./src/collections/HashPriorityQueue'),
    DisjointSet: require('./src/collections/DisjointSet'),
    Queue: require('./src/collections/Queue'),
    Stack: require('./src/collections/Stack'),

    LinearAlgebra: require('./src/numbers/LinearAlgebra'),
    BigNumber: require('./src/numbers/BigNumber'),
    RandomNumber: require('./src/numbers/RandomNumber'),
}
