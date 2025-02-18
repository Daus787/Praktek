function squareDigits(num) {
  return parseInt(
    num
      .toString()
      .split("")
      .map((digit) => Math.pow(parseInt(digit), 2))
      .join(""),
    10
  );
}

console.log(squareDigits(9119));
console.log(squareDigits(765)); 
