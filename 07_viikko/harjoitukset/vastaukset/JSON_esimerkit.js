/* Tehtävä 1
Luo JavaScript-olio nimeltä `student`, jolla on ominaisuudet:
- `name`
- `age`
- `grade`
Muunna olio JSON-merkkijonoksi ja tulosta se konsoliin.
*/

// Määritellään student-olio
const student = {
  name: "Maija Meikäläinen",
  age: 21,
  grade: 4.0,
};

// Muunnetaan JSON-merkkijonoksi
const studentJson = JSON.stringify(student);

console.log("student JSON:", studentJson);

/* Tehtävä 2
Ota Tehtävä 1:ssä luotu JSON-merkkijono ja muunna se takaisin JavaScript-olioksi.
Tulosta muunnetun olion `name`-ominaisuus.
*/

const studentObj = JSON.parse(studentJson);

console.log("Student olio:", studentObj.name);

/* Tehtävä 3
Luo taulukko nimeltä `classroom`, jossa jokainen alkio on opiskelijaa kuvaava olio.
Jokaisella opiskelijaoliolla tulee olla ominaisuudet `name`, `age` ja `grade`.
Muunna taulukko JSON-merkkijonoksi ja tulosta se konsoliin.
*/
const classroom = [
  { name: "Maija Meikäläinen", age: 21, grade: 4.0 },
  { name: "Antti Virtanen", age: 22, grade: 3.7 },
  { name: "Liisa Lahtinen", age: 20, grade: 4.5 },
];

const classroomJson = JSON.stringify(classroom);

console.log("Luokka JSON merkkijono", classroomJson);

/* Tehtävä 4
Ota Tehtävä 3:ssa luotu JSON-merkkijono ja muunna se takaisin JavaScript-taulukoksi
ja tulosta kaikkien opiskelijoiden nimet.
*/

const classroomArr = JSON.parse(classroomJson);

// Tulostetaan kaikkien opiskelijoiden nimet
classroomArr.forEach((student) => {
  console.log(student.name);
});

/* Tehtävä 5
Luo olio weatherReport, muunna JSONiksi ja pura takaisin, tulosta conditions.
*/

const weatherReport = {
  temperature: 18,
  humidity: 65,
  conditions: "Rainy",
};

const weatherJSON = JSON.stringify(weatherReport);
const parsedWeather = JSON.parse(weatherJSON);

console.log(parsedWeather.conditions); // "Rainy"

/* Tehtävä 6
Määrittele taulukko nimeltä `movies`, jossa jokaisella elokuvalla on:
- `title`
- `director`
- `rating`

Muunna tämä taulukko JSON-merkkijonoksi ja pura se takaisin JavaScript-olioksi.
Tulosta kaikki elokuvien nimet, joiden arvosana on yli 8.
*/

const movies = [
  { title: "Inception", director: "Nolan", rating: 8.8 },
  { title: "The Room", director: "Wiseau", rating: 3.7 },
  { title: "Parasite", director: "Bong", rating: 8.6 },
  { title: "The Godfather", director: "Coppola", rating: 9.2 },
];

const moviesJson = JSON.stringify(movies);

const parsedMovies = JSON.parse(moviesJson);

// Tulostetaan nimet, joiden rating > 8
parsedMovies.forEach((movie) => {
  if (movie.rating > 8) {
    console.log(movie.title);
  }
});

/* Tehtävä 7
Kirjoita funktio `filterHighRatedMovies(jsonString)`, joka:
- Ottaa vastaan JSON-merkkijonon, joka edustaa elokuvataulukkoa.
- Muuntaa sen JavaScript-taulukoksi.
- Palauttaa uuden taulukon, joka sisältää vain elokuvat, joiden arvosana on yli 8.
*/

function filterHighRatedMovies(jsonString) {
  const arr = JSON.parse(jsonString);
  // Suodatetaan rating > 8
  return arr.filter((movie) => movie.rating > 8);
}

const highRated = filterHighRatedMovies(moviesJson);
console.log(highRated);

/* Tehtävä 8
Määrittele olio nimeltä `shoppingCart`, jossa on:
- `items` (taulukko tuotteista, jokaisella on `name` ja `price`)
Muunna `shoppingCart` JSON-merkkijonoksi ja tulosta se konsoliin.
*/

const shoppingCart = {
  items: [
    { name: "Mämmi", price: 1.5 },
    { name: "Sima", price: 2.0 },
    { name: "Tippaleipä", price: 3.0 },
  ],
};

const cartJson = JSON.stringify(shoppingCart);
console.log(cartJson);

/* Tehtävä 9
Kirjoita funktio `totalCartValue(jsonString)`, joka:
- Saa parametrina ostoskorin JSON-merkkijonon.
- Muuntaa sen JavaScript-olioksi.
- Palauttaa ostoskorin kaikkien tuotteiden yhteenlasketun hinnan.
*/

function totalCartValue(jsonString) {
  const cart = JSON.parse(jsonString);
  let sum = 0;
  cart.items.forEach((item) => {
    sum += item.price;
  });
  return sum;
}

console.log(totalCartValue(cartJson));

/* Tehtävä 10
Luo olio nimeltä `gameProgress`, jossa on:
- `level`
- `score`
- `livesRemaining`

Muunna olio JSON-merkkijonoksi ja tulosta se.
Pura JSON takaisin olioksi ja päivitä `score`-ominaisuutta lisäämällä siihen 100 pistettä.
Tulosta päivitetty olio.
*/

const gameProgress = {
  level: 3,
  score: 450,
  livesRemaining: 2,
};

// Muunnetaan JSON-merkkijonoksi ja tulostetaan
const progressJson = JSON.stringify(gameProgress);
console.log(progressJson);

// Parsitaan takaisin ja päivitetään score
const parsedProgress = JSON.parse(progressJson);
parsedProgress.score += 100;

console.log(parsedProgress);
