export function fibonacciAlgorithm(number, memoize = { 1: 0, 2: 1 }) {
  if (number in memoize) {
    return alert(`The Nth number ${number} has a value of ${memoize[number]} `);
  }
}
