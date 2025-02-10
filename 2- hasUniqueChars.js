function hasUniqueChars(str){
  if (str.length > 128) {
    return false;
  }

  const charSet = new Set();

  for (const char of str) {
    if (charSet.has(char)) {
      return false;
    }
    charSet.add(char);
  }
  return true;
}

console.log(hasUniqueChars("  nAa"));
console.log(hasUniqueChars("abcdef"));
console.log(hasUniqueChars("aA"));
console.log(hasUniqueChars("++-"));