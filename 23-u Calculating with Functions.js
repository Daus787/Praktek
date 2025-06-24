const n = (x) => (f) => f ? f(x) : x;

const zero = n(0),
  one = n(1),
  two = n(2),
  three = n(3),
  four = n(4),
  five = n(5),
  six = n(6),
  seven = n(7),
  eight = n(8),
  nine = n(9);

const plus = (y) => (x) => x + y;
const minus = (y) => (x) => x - y;
const times = (y) => (x) => x * y;
const dividedBy = (y) => (x) => Math.floor(x / y);

console.log(seven(times(five())));
console.log(four(plus(nine())));
console.log(eight(minus(three())));
console.log(six(dividedBy(two())));
