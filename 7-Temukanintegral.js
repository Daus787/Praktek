function integrate(coefficient, exponent) {
  const newExponent = exponent + 1;
  const newcoefficient = coefficient / newExponent;
  return `${newcoefficient}x${newExponent}`;
}

console.log(integrate(12,5));