let pul = +prompt("pulingizni kiriting");

let dollar1 = 500;
let dollar2 = 250;

let yevro = 120;

let kursDollar = 11000;
let kursYevro = 12000;

let dollarAll = dollar1 + dollar2;

let somDollar = dollarAll * kursDollar;

let somYevro = yevro * kursYevro;

let somAll = somDollar + somYevro;

if (pul >= somAll) {
  alert("oq yo'l");
} else {
  alert("sabr qil");
}
