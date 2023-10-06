let orang = ["Rangga", "Aling", "Virna", "Alex"];

// Object disini dimaksud dengan orang
// console.log(Object);

console.log(orang[2]);

orang.push("Alzi");
console.log(orang);

orang.pop();
console.log(orang);

orang.shift();
console.log(orang);

orang.unshift("Adam");
console.log(orang);

orang.splice(2, 0, "hery", "ihsan");
console.log(orang);

// ==========================LOOP===========================
// Loop for tradisional yang menggunakan indeks i untuk mengakses elemen array.
for (let i = 0; i < orang.length; i++) {
  console.log(orang[i]);
}

// Loop for of secara langsung mengiterasi nilai elemen array, tanpa memerlukan indeks. Lebih bersih dan mudah dibaca.
console.log("=============for of=============");
for (item of orang) {
  console.log(item);
}

//  Loop for in digunakan untuk mengiterasi indeks atau kunci properti pada objek. Meskipun dapat digunakan pada array, lebih disarankan untuk objek.
console.log("=============for in=============");
for (i in orang) {
  console.log(orang[i]);
}

// Metode forEach memanggil sebuah fungsi kembali (callback) untuk setiap elemen array. Dalam contoh ini, kita memiliki akses langsung ke nilai (item) dan indeks (index).
console.log("============forEach=============");
// orang.forEach(function(){})
orang.forEach((item, index) => {
  console.log(index, item);
  //   console.log(orang); Implementasi dengan array
});

// let newOrangFE = [];
// orang.forEach((item) => {
//   newOrangFE.push(text);
// });
// console.log(newOrangFE);

// Metode map juga memanggil fungsi kembali untuk setiap elemen array, tetapi mengembalikan array baru dari hasil pemanggilan fungsi tersebut. Ini sering digunakan untuk membuat array baru berdasarkan transformasi elemen.
console.log("============map=============");
orang.map((item, index) => {
  console.log(index, item);
  //   console.log(orang); Implementasi dengan array
});

// melakukan loop pada array
// ada return data array dgn jumlah data yang sama
// untuk manipulasi tiap item pada array
let newOrang = orang.map((item) => {
  return "FS KM5 - " + item;
});

console.log(newOrang);

let orangImpostor = orang.map((item) => {
  if (item == "Adam") {
    return item + " - Impostor";
  }
  return item;
});

console.log(orangImpostor);

// ===============Filter=================

// Mencari nama orang dengan karakter nama depan A
console.log("=========filter==========");
let orangWithA = orang.filter((item) => {
  if (item[0] == "A") {
    return item;
  }
});

console.log(orangWithA);

//Menggunakan Map
console.log("=========map==========");
let orangWithV = orang.map((item) => {
  if (item[0] == "V") {
    return item;
  } else {
    return null; // Mengembalikan null untuk elemen yang tidak dimulai dengan "V"
  }
});

// Filter elemen null yang dihasilkan oleh map
orangWithA = orangWithA.filter((item) => item !== null);

console.log(orangWithV);

// Menggunakan find
console.log("=========find==========");
let orangWithR = orang.find((item) => {
  if (item[0] == "V") {
    return item.replace("V", "R");
  }
});

console.log(orangWithR);

// Menggunakan findIndex
console.log("=========findIndex==========");

let indexOrangWithV = orang.findIndex((item, index) => {
  return item[0] === "V";
});

if (indexOrangWithV !== -1) {
  // Ganti karakter "V" dengan "R"
  orang[indexOrangWithV] = orang[indexOrangWithV].replace("V", "R");

  console.log("Array setelah perubahan:", orang);
  console.log(
    "Indeks elemen dengan karakter 'V' diubah menjadi 'R':",
    indexOrangWithV
  );
} else {
  console.log("Tidak ada elemen dengan karakter 'V' dalam array.");
}

//====================== multi dimension array ===============
let matrix = [
  //Elemen pertama matrix [0]
  ["Willy", "Rangga", 89],
  //Elemen Kedua matrix [1]
  ["Bagas", "Viki"],
  //Elemen ketiga matrix [2]
  [true, false],
  //Elemen keempat matrix [3]
  [["hallo", "tes"]],
  //Elemen kelima matrix [4]
  [{ nama: "Terra" }, { nama: "Alpha" }],
];

console.log(matrix[0][2]);
console.log(matrix[1][1]);
console.log(matrix[2][1]);
console.log(matrix[3][0]);
console.log(matrix[4][0].nama);

let buah = ["Semangka", "Jeruk", "Lemon", "Nanas"];
let duaD = [
  ["Kalimantan"],
  ["Padang"],
  [1],
  [true],
  ["Pintu"],
  ["rumah"],
  [buah],
];

console.log(duaD[6][0][2]);
