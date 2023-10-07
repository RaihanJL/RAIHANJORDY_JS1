// if dan if else
let angka = 10;

if (angka < 5){
  console.log(angka + " lebih kecil dari 5");
} else {
  console.log(angka + " lebih besar dari 5");
}

// nested if
let umur = 21;
if(umur >= 21){
  console.log("Umur kamu sudah diatas 21, silahkan masuk");
  if(umur >= 25){
    console.log("Kamu sudah bisa mengakses situs ini dan menggunakan semua fitur-fitunya")
  }
}else{
  console.log("Kamu masih dibawah umur silahkan keluar dari situs ini")
}

// Switch case
let y = 0;
switch (y){
  case 0:
    console.log("Lampu Mati");
    break;
  case 1:
    console.log("Lampu Nyala");
    break;
  default:
    console.log("Lampu Rusak");
  }

// for
console.log("Menghitung 1 sampai 5");
for(let i = 1; i < 6; i++){
  console.log(i);
}

// while dan do while
// WHILE
const namaTeman = ["Joko", "Riswan", "Nadif", "Budi"];
let i = 0;
console.log("Nama Teman Teman Saya :")
while(namaTeman[i]){
  console.log(namaTeman[i]);
  i++
}

// DO WHILE
let n = 1;
do{
  console.log("angka ke = " + n);
  n++
}
while (n < 11);

// FUNCTION
let m = perkalian(2, 3);
function perkalian(a, b){
  console.log (a * b);
}