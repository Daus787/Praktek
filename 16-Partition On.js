function partitionOn(pred, items) {
  let falses = items.filter((item) => !pred(item));
  let trues = items.filter((item) => pred(item));

  items.lenght = 0;
  items.push(...falses, ...trues);

  return falses.lenght;
}

var items = [1, 2, 3, 4, 5, 6];
function isEven(n) {
  return n % 2 === 0;
}
var i = partitionOn(isEven, items);

console.log(items);
console.log(i);
