function descandingOrder(n) {
  return parseInt(
    n
      .toString()
      .split("")
      .sort((a, b) => b - a)
      .join("")
  );
}

console.log(descendingOrder(42145)); 
console.log(descendingOrder(145263));
console.log(descendingOrder(123456789));
