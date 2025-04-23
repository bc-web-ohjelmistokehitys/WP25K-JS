// 1. muuttujat
let count = 0;
count = count + 1; // tai: count++;
console.log("count:", count); // tulostaa: 1

// 2. muuttujat
const ageLimit = 18;
console.log("ageLimit:", ageLimit);

// 3. muuttujat
let name = "Mikko";
let student = name;
console.log("student:", student); // Mikko

// Tietotyypit
let age = 25;
name = "Anna";
let isStudent = true;
let hobbies = ["lukeminen", "pyöräily", "piirtäminen"];
let info = {
  schoolName: "Koodikoulu",
  grade: 9,
};

console.log("age:", age);
console.log("name:", name);
console.log("isStudent:", isStudent);
console.log("hobbies:", hobbies);
console.log("info:", info);

console.log("typeof age:", typeof age);
console.log("typeof name:", typeof name);
console.log("typeof isStudent:", typeof isStudent);
console.log("typeof hobbies:", typeof hobbies);
console.log("typeof info:", typeof info);

// 1. numerot
function convertNumberToString(number) {
  return String(number);
}

function convertStringToNumber(string) {
  return Number(string);
}

console.log(convertNumberToString(42)); // "42"
console.log(convertNumberToString(97)); // "97"
console.log(convertNumberToString(11)); // "11"

console.log(convertStringToNumber("42")); // 42
console.log(convertStringToNumber("97")); // 97
console.log(convertStringToNumber("11")); // 11

// 2. Numerot
function fahrenheitToCelsius(fahrenheit) {
  let celsius = ((fahrenheit - 32) * 5) / 9;
  return celsius.toFixed(1);
}

console.log(fahrenheitToCelsius(21)); // "-6.1"

// 3. Numerot
let num1 = 4.7;
let num2 = 9.3;

let roundedNum1 = Math.round(num1);
let roundedNum2 = Math.round(num2);

let sqrtNum1 = Math.sqrt(roundedNum1);
let maxNum = Math.max(roundedNum1, roundedNum2);

console.log("roundedNum1:", roundedNum1);
console.log("roundedNum2:", roundedNum2);
console.log("sqrtNum1:", sqrtNum1);
console.log("maxNum:", maxNum);

console.log("typeof roundedNum1:", typeof roundedNum1);
console.log("typeof roundedNum2:", typeof roundedNum2);
console.log("typeof sqrtNum1:", typeof sqrtNum1);
console.log("typeof maxNum:", typeof maxNum);

// 4. Numerot
let jaettava = 20;
let jakaja = 4;
let result = jaettava / jakaja;
console.log("Jakolaskun tulos:", result);

// 5. Numerot
let tuote1 = 19.99;
let tuote2 = 4.5;
let tuote3 = 13.25;

let yhteishinta = tuote1 + tuote2 + tuote3;
console.log("Ostosten yhteishinta:", yhteishinta);

// 1. Operaattorit
let a = 15;
let b = 4;

let summa = a + b; // Laskee a ja b summan
let erotus = a - b; // Laskee erotuksen (a - b)
let tulo = a * b; // Laskee tulon (a * b)
let osamaara = a / b; // Laskee osamäärän (a / b)
let jakojaannos = a % b; // Laskee jakojäännöksen (a % b)

console.log("Summa:", summa);
console.log("Erotus:", erotus);
console.log("Tulo:", tulo);
console.log("Osamäärä:", osamaara);
console.log("Jakojäännös:", jakojaannos);

// 2. Operaattorit
let etunimi = "Maija";
let sukunimi = "Mehiläinen";

let kokoNimi = etunimi + " " + sukunimi;
console.log("Koko nimi:", kokoNimi);
