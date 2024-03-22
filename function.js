function cekAngka(number) {
  if (condition) {
  }
}

// larik
// // Fungsi untuk mengubah kalimat menjadi larik
// function kalimatKeArray(kalimat) {
//   // Menggunakan metode split() untuk memisahkan kata-kata dalam kalimat berdasarkan spasi
//   return kalimat.split(" ");
// }

// // Fungsi untuk menghitung jumlah elemen dalam larik
// function hitungJumlahElemen(larik) {
//   // Mengembalikan panjang (jumlah elemen) dari larik
//   return larik.length;
// }

// // Contoh penggunaan:
// var kalimat = "hello selamat pagi semuanya";
// var larikKata = kalimatKeArray(kalimat);
// var jumlahKata = hitungJumlahElemen(larikKata);
// console.log("Kalimat:", kalimat);
// console.log("Larik kata:", larikKata);
// console.log("Jumlah kata:", jumlahKata);

// larik kedua
function splittoarray(str) {
  var temparray = str.split(" ");
  return temparray;
}

function jumlahKata(kalimat) {
  var result = splittoarray(kalimat);
  var arraylenght = result.length;
  return arraylenght;
}

var kalimat = "Hallow selamat pagi semuanya";

console.log("Kalimat \t: " + kalimat);
console.log("Jumlah kata \t: " + jumlahKata(kalimat));

// Jumlah faktor
function cekjumlahFaktor(num) {
  var faktor = 0;
  for (var i = 0; i <= num; i++) {
    if (num % i === 0) {
      faktor++;
    }
  }
  return faktor;
}
console.log(cekjumlahFaktor(4));

// cek bilangan prima atau tidak
function cekBilanganPrima(angka) {
  //   var jumlahfaktor = cekjumlahFaktor(num);
  if (angka % 2 == 1) {
    return " adalah Bilangan Prima";
  } else {
    return " Bukan bilanga prima";
  }
}
num = 2;
console.log(num + cekBilanganPrima(num));

// Pecahka kalimat
function pecahkalimat(str) {
  var arrResult = [];
  var temp = "";

  for (var i = 0; i < str.length; i++) {
    if (str[i] !== "") {
      console.log(str[i]);
      temp += str[i];
    } else {
      arrResult.push(temp);
      temp = "";
    }

    if (i == str.length - 1) {
      arrResult.push(temp);
      temp = "";
    }
  }
  console.log(arrResult);
}

kalimat = "ini adalah kalimat";

console.log("Pecah kalimat " + pecahkalimat(kalimat));

// menghitung rata-rata
function average(number) {
  var total = 0;
  for (var i = 0; i < number.length; i++) {
    total += number[i];
  }
  return (total / number.length).toFixed(2);
}

array = [2, 2, 3, 3];

console.log("Rata-rata : " + average(array));
