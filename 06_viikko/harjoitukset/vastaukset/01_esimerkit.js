/* Tehtävä 1
Luo JavaScript-taulukko nimeltä `library`, joka edustaa kirjakokoelmaa.
Jokaisella kirjalla tulee olla ominaisuudet `title` (otsikko), `author` (kirjoittaja) ja `yearPublished` (julkaisuvuosi).
Lisää kokoelmaan vähintään kaksi kirjaoliota.
*/

// Kirjoita koodisi tähän
const library = [
  {
    title: "Kuolema ja Pingviini",
    author: " Kurkov, Andrei",
    yearPublished: 1996,
  },
  {
    title: "Eloquent JavaScript, 4th edition",
    author: "Haverbeke, Marjin",
    yearPublished: 2024,
  },
  {
    title: "Nevermoor: Morriganin koetukset",
    author: "Townsend, Jessica",
    yearPublished: 2018,
  },
];

/* Tehtävä 2
Hae `library`-kokoelman ensimmäisen kirjan `title` ja tulosta se konsoliin.
Muokkaa toisen kirjan `yearPublished` uudeksi vuodeksi ja tulosta päivitetty kirja konsoliin.
*/
// Kirjoita koodisi tähän
console.log("Ensimmäisen kirjan nimi: ", library[0].title);
library[1].yearPublished = 2025;
console.log("Toisen kirjan uusi julkaisuvuosi:", library[1].yearPublished);

/* Tehtävä 3
Käytä piste-notaatiota lisätäksesi uuden ominaisuuden `genres` (merkkijonotaulukko) ensimmäiseen kirjaan `library`-taulukossa.
Käytä hakasulkunotaatiota lisätäksesi boolean-tyyppisen ominaisuuden `isAvailable`, joka kertoo onko kirja saatavilla.
*/
library[0].genres = ["Absurdi", "Tragikomiikka"];
console.log("genret:", library[0]);

/* Tehtävä 4
Määrittele konstruktori-funktio nimeltä `Book`, joka luo uusia kirjoja, joilla on `title`, `author`, `yearPublished` ja `genres`.
Luo uusi kirjaolio `Book`-konstruktorilla ja lisää se `library`-kokoelmaan.
*/

class Book {
  constructor(title, author, yearPublished, genres) {
    this.title = title;
    this.author = author;
    this.yearPublished = yearPublished;
    this.genres = genres;
  }
}

const kirja1 = new Book("Alkemisti", "Coelho, Paulo", 1988, "hengellisyys");

library.push(kirja1);

console.log(library);

/* Tehtävä 5
Hypätty yli
*/

/* Tehtävä 6
Hypätty yli
*/

/* Tehtävä 7
Luo taulukko nimeltä `students`, jossa jokaisella oppilaalla on `name`, `age` ja `grade`.
Tulosta niiden oppilaiden nimet, joiden arvosana on yli 90.
*/

const students = [
  { name: "Liisa", age: 28, grade: 88 },
  { name: "Matti", age: 27, grade: 93 },
  { name: "Emma", age: 32, grade: 70 },
  { name: "Antti", age: 41, grade: 95 },
];
// suodatetaan hyvät opiskelijat
let goodGrades = students.filter((student) => student.grade > 90);

// tulostetaan hyvien opiskelijoiden pelkät nimet
goodGrades.forEach((topStudent) => {
  console.log(topStudent.name);
});

/* Tehtävä 8
Määrittele olio nimeltä `car`, jossa on ominaisuudet `brand`, `model`, `year` ja `isElectric`.
Käytä funktiota tarkistamaan onko auto sähköinen. Jos on, tulosta `"This car is eco-friendly!"`, muussa tapauksessa `"This car runs on fuel."`
*/
const car = {
  brand: "Tesla",
  model: "Model 3",
  year: 2022,
  isElectric: true,
};

if (car.isElectric) {
  console.log("This car is eco-friendly! ");
} else {
  console.log("This car runs on fuel.");
}

// vaihtoehto ehtolauseelle
car.isElectric
  ? console.log("This car is eco-friendly! ")
  : console.log("This car runs on fuel.");

// toinen vaihtoehto ehtolauseelle & tulostamiselle
console.log(car.isElectric ? "sähköauto" : "polttomoottiriauto");

// Kirjoita koodisi tähän
/* Tehtävä 9
Luo `movies`-taulukko, jossa jokainen elokuva on olio, jolla on ominaisuudet `title`, `director` ja `rating`.
Kirjoita silmukka, joka tulostaa kaikkien niiden elokuvien otsikot, joiden arvio on yli 8.
*/

const movies = [
  { title: "Inception", director: "Nolan", rating: 8.8 },
  { title: "The Room", director: "Wiseau", rating: 3.7 },
  { title: "Parasite", director: "Bong", rating: 8.6 },
  { title: "The Godfather", director: "Coppola", rating: 9.2 },
];

for (const movie of movies) {
  if (movie.rating > 8) {
    console.log("hyvä elokuva: ", movie.title);
  }
}

/* Tehtävä 10
Kirjoita funktio `findOldestCar`, joka ottaa vastaan taulukon auto-olioita ja palauttaa auton, jolla on varhaisin `year`.
*/

function findOldestCar(cars) {
  if (cars.length === 0) {
    return null; // ilman tätä ohjelma kaatuu, jos taulukko on tyhjä
  }
  // Aloitetaan ensimmäisestä
  let oldest = cars[0];

  // Käydään läpi loput ja vertaa niitä edelliseen
  for (let i = 1; i < cars.length; i++) {
    if (cars[i].year < oldest.year) {
      oldest = cars[i];
    }
  }

  return oldest;
}

// vaihtoehtoisesti voit käyttää taulukon reduce()-metodia
function findOldestCar2(cars) {
  return cars.reduce((oldest, current) =>
    current.year < oldest.year ? current : oldest
  );
}

const carList = [
  { brand: "Volvo", model: "240", year: 1985 },
  { brand: "Toyota", model: "Corolla", year: 1992 },
  { brand: "Ford", model: "Model T", year: 1927 },
];

// Kutsu funkiota:
console.log("Vanhin auto on:", findOldestCar(carList));
console.log("Vanhin auto on 2:", findOldestCar2(carList));

/* Tehtävä 11
Määrittele `userProfiles`-taulukko, joka sisältää käyttäjäolioita.
Jokaisella käyttäjällä tulee olla `username`, `email` ja `isAdmin` -ominaisuudet.
Kirjoita funktio, joka suodattaa ja palauttaa vain ne käyttäjät, jotka ovat ylläpitäjiä.
*/

const userProfiles = [
  { username: "leevi", email: "leevi@esimerkki.fi", isAdmin: false },
  { username: "pekka", email: "pekka@esimerkki.fi", isAdmin: true },
  { username: "yevgenii", email: "yevgenii@esimerkki.fi", isAdmin: true },
];

// Palauttaa vain ne käyttäjät, joilla isAdmin === true.
function getAdmins(users) {
  return users.filter((user) => user.isAdmin);
}

console.log("Adminit ovat:", getAdmins(userProfiles));

/* Tehtävä 12
Määrittele taulukko nimeltä `orders`, jossa jokaisella tilauksella on `orderId`, `customerName`, `totalAmount` ja `status` ("pending" tai "completed").
Kirjoita funktio, joka palauttaa vain valmiit tilaukset.
*/

const orders = [
  {
    orderId: 101,
    customerName: "Mahmud",
    totalAmount: 59.9,
    status: "pending",
  },
  {
    orderId: 102,
    customerName: "Matti",
    totalAmount: 12.5,
    status: "completed",
  },
  {
    orderId: 103,
    customerName: "Emma",
    totalAmount: 23.0,
    status: "completed",
  },
];

function getCompletedOrders(ordersArray) {
  return ordersArray.filter((order) => order.status === "completed");
}

console.log("Toimitetut tilaukset:", getCompletedOrders(orders)); // [{ orderId: 102, ... }, { orderId: 103, ... }]

/* Tehtävä 13
Luo olio nimeltä `smartphone`, jolla on ominaisuudet `brand`, `model`, `batteryLife` ja `is5GEnabled`.
Kirjoita funktio, joka tulostaa `"This phone supports 5G!"` jos `is5GEnabled` on `true`, muussa tapauksessa tulostaa `"This phone does not support 5G."`
*/

const smartphone = {
  brand: "Samsung",
  model: "Galaxy S21",
  batteryLife: 24,
  is5GEnabled: false,
};

function check5G(phone) {
  if (phone.is5GEnabled) {
    console.log("This phone supports 5G!");
  } else {
    console.log("This phone does not support 5G.");
  }
}

check5G(smartphone); // "This phone does not support 5G."

/* Tehtävä 14
Määrittele olio nimeltä `fox`, jolla on ominaisuudet `name`, `age` ja `habitat`.
Kirjoita funktio, joka tulostaa `"This fox is young"` jos ikä on alle 3, ja `"This fox is an adult"` jos 3 tai enemmän.
*/

const fox = {
  name: "Finnie",
  age: 2,
  habitat: "Forest",
};

function checkFoxAge(f) {
  if (f.age < 3) {
    console.log("This fox is young");
  } else {
    console.log("This fox is an adult");
  }
}

checkFoxAge(fox); // "This fox is young"

/* Tehtävä 15
Määrittele taulukko nimeltä `employees`, jossa jokaisella työntekijällä on `name`, `position` ja `salary`.
Kirjoita funktio, joka laskee kaikkien työntekijöiden yhteenlasketun palkan.
*/

const employees = [
  { name: "Laura", position: "Developer", salary: 3500 },
  { name: "Janne", position: "Designer", salary: 3000 },
  { name: "Sari", position: "Manager", salary: 4500 },
];

function getTotalSalary(people) {
  let total = 0;
  for (const person of people) {
    total += person.salary;
  }
  return total;
}

console.log("Yhteenlaskettu palkka:", getTotalSalary(employees)); // 11000

// Tämän voi toteuttaa myös taulukko-metodilla reduce(), joka laskee arvot yhteen

function getTotalSalary2(emps) {
  return emps.reduce((sum, emp) => sum + emp.salary, 0);
}
console.log("Yhteenlaskettu palkka 2:", getTotalSalary2(employees)); // 11000
