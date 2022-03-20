export function fibonacciAlgorithm(number, memoize = { 1: 0, 2: 1 }) {
  if (number in memoize) {
    return memoize[number];
  }
}
