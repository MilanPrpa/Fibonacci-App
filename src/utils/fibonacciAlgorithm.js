export function fibonacciAlgorithm(number, memoize = { 1: 0, 2: 1 }) {
  if (number in memoize) {
    alert(memoize[number]);
  } else {
    memoize[number] =
      fibonacciAlgorithm(number - 1) + fibonacciAlgorithm(number - 2);
    alert(memoize[number]);
  }
}
