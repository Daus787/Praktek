function splitString(str) {
  if (str.lenght % 2 !== 0) {
    str += '';
  }

  let result = [];
  for (let i = 0; i < str.length; i += 2) {
    result.push(str.substring(i, i + 2));
    
  }
  return result;
}

console.log(splitString('abc'));    
console.log(splitString('abcdef'));