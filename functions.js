
function sum(a, b) {
  return a + b;
}
/*global factorial*/
function factorialize(n){
  if (n < 0 || !Number.isInteger(n)) throw Error('Invalid input!');
  return n === 0 ? 1 : n * fatorial(n - 1)
}c
function log(a) {
  console.log(a);
}
module.exports = { sum, factorialize, log };