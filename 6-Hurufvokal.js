function seringVokal(str) {
  let vokal = "aeiouAEIOU";
  let hasil = " ";

  for (const char of str) {
    if (vokal.includes(char)) {
      hasil += char;
    }
  }
  return hasil;
}

console.log(seringVokal("Nama Bapak Eca Arifin"));
