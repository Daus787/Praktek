function removePolishDiacritics(text) {
  const replacements = {
    ą: "a",
    ć: "c",
    ę: "e",
    ł: "l",
    ń: "n",
    ó: "o",
    ś: "s",
    ź: "z",
    ż: "z",
  };
  return text.split('').map(char => replacements[char] || char).join('');

}

const text = "Jędrzej Błądziński";
console.log(removePolishDiacritics(text));