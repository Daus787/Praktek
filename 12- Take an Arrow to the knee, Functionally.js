const arrowFunc = arr => arr.map(code => String.fromCharCode(code)).join('');

console.log(arrowFunc([97,98,99]));