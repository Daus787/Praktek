function dblLinear(n) {
  let u = [1]; // Array untuk menyimpan deret u
  let i = 0,
    j = 0; // Indeks untuk 2 antrian

  for (let k = 1; k <= n; k++) {
    let nextY = 2 * u[i] + 1;
    let nextZ = 3 * u[j] + 1;

    if (nextY < nextZ) {
      u.push(nextY);
      i++;
    } else if (nextZ < nextY) {
      u.push(nextZ);
      j++;
    } else {
      u.push(nextY); // Jika nextY dan nextZ sama, hanya simpan sekali
      i++;
      j++;
    }
  }

  return u[n];
}
