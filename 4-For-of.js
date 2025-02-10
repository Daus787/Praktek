function jumlahkanAngkaGenap(arr) {
  let total = 0;
   for (const angka of arr) {
    if (angka % 2 === 0) {
      total += angka;
    }
   }
   return total;
}

const data = [1,2,3,4,5,6,7,8];
console.log(jumlahkanAngkaGenap(data));
