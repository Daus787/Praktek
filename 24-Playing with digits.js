function digPow(n, p) {
  const sum = n
    .toString()
    .split("")
    .map((digit, index) => Math.pow(Number(digit), p + index))
    .reduce((a, b) => a + b, 0);

  return sum % n === 0 ? sum / n : -1;
}

console.log(digPow(89, 1));
console.log(digPow(695, 2));
console.log(digPow(46288, 3));
console.log(digPow(92, 1));
