function reduceFraction([numerator, denominator]) {
  function gcd(a, b) {
    return b === 0 ? a : gcd(b, a % b);
  }
  const divisor = gcd(numerator, denominator);
  return [numerator / divisor, denominator / divisor];
}

console.log(reduceFraction([45, 120]));