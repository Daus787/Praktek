function balikkanKataKalimat(kalimat){
  let kataArray = kalimat.split(' ');
  let kalimatBaru = [];

  for (const kata of kataArray) {
    let kataTerbalik = '';

    for (const char of kata) {
      kataTerbalik = char + kataTerbalik;
    }
    kalimatBaru.push(kataTerbalik);
  }
  return kalimatBaru.join('');
}

const kalimat = ("Salah Jurusan Bang Harus nya");
console.log(balikkanKataKalimat(kalimat));