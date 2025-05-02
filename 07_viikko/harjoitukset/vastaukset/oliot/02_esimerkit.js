let tehtava = 1;
/* Tehtävä 1
Luo olio `weather`, jossa on ominaisuudet `temperature`, `humidity` ja `condition` (esim. "Aurinkoinen", "Sateinen").
Kirjoita funktio, joka tulostaa `"Ota sateenvarjo!"` jos sää on sateinen.
*/
console.log("Tehtävä", tehtava++);

const weather = {
  temperature: 18,
  humidity: 75,
  condition: "Sateinen",
};

function checkWeather(w) {
  if (w.condition === "Sateinen") {
    console.log("Ota sateenvarjo!");
  }
}

checkWeather(weather); // Ota sateenvarjo!

/* Tehtävä 2
Määrittele olio nimeltä `shoppingCart`, joka sisältää taulukon tuotteista.
Jokaisella tuotteella on `name`, `price` ja `quantity`.
Kirjoita funktio, joka laskee kaikkien ostoskorin tuotteiden kokonaishinnan.
*/
console.log("Tehtävä", tehtava++);

const shoppingCart = {
  products: [
    { name: "Maito", price: 1.5, quantity: 2 },
    { name: "Leipä", price: 2.0, quantity: 1 },
    { name: "Juusto", price: 3.75, quantity: 1 },
  ],
};

function calculateCartTotal(cart) {
  return cart.products.reduce((sum, p) => sum + p.price * p.quantity, 0);
}

console.log(calculateCartTotal(shoppingCart)); // 8.75

/* Tehtävä 3
Luo taulukko nimeltä `restaurants`, jossa jokainen ravintola on olio, jolla on ominaisuudet `name`, `cuisineType` ja `rating`.
Kirjoita funktio, joka palauttaa vain ne ravintolat, joiden arvio on 4 tai enemmän.
*/
console.log("Tehtävä", tehtava++);

const restaurants = [
  { name: "Ravintola A", cuisineType: "Italialainen", rating: 3.8 },
  { name: "Ravintola B", cuisineType: "Suomalainen", rating: 4.2 },
  { name: "Ravintola C", cuisineType: "Japani", rating: 4.5 },
];

function topRated(restos) {
  return restos.filter((r) => r.rating >= 4);
}

console.log(topRated(restaurants));

/* Tehtävä 4
Määrittele olio nimeltä `bankAccount`, jossa on ominaisuudet `accountHolder`, `balance` ja `transactions` (numeroiden taulukko).
Kirjoita funktio, joka laskee kokonaissaldon kaikkien tapahtumien jälkeen.
*/
console.log("Tehtävä", tehtava++);

const bankAccount = {
  accountHolder: "Maija Meikäläinen",
  balance: 1000,
  transactions: [-50, +200, -100, +500],
};

function finalBalance(acc) {
  return acc.balance + acc.transactions.reduce((sum, t) => sum + t, 0);
}

console.log(finalBalance(bankAccount)); // 1550

/* Tehtävä 5
Luo taulukko `students`, jossa jokaisella opiskelijalla on `name`, `scores` (numeroiden taulukko) ja `averageScore` (aluksi null).
Kirjoita funktio, joka laskee ja päivittää kunkin opiskelijan `averageScore`-arvon.
*/
console.log("Tehtävä", tehtava++);

const students = [
  { name: "Anna", scores: [4, 5, 3], averageScore: null },
  { name: "Bertil", scores: [2, 3, 4, 5], averageScore: null },
];

function computeAverages(list) {
  list.forEach((s) => {
    const sum = s.scores.reduce((a, b) => a + b, 0);
    s.averageScore = sum / s.scores.length;
  });
}

computeAverages(students);
console.log(students);

/* Tehtävä 6
Määrittele taulukko nimeltä `courses`, jossa jokaisessa kurssissa on `courseName`, `instructor` ja `studentsEnrolled`.
Kirjoita funktio, joka tulostaa niiden kurssien nimet, joissa on yli 30 opiskelijaa.
*/
console.log("Tehtävä", tehtava++);

const courses = [
  { courseName: "Math 101", instructor: "Liisa", studentsEnrolled: 28 },
  { courseName: "JS Basics", instructor: "Matti", studentsEnrolled: 32 },
  { courseName: "History", instructor: "Kaisa", studentsEnrolled: 45 },
];

function bigCourses(cs) {
  cs.forEach((c) => {
    if (c.studentsEnrolled > 30) {
      console.log(c.courseName);
    }
  });
}

bigCourses(courses);

/* Tehtävä 7
Luo olio `pet`, jossa on ominaisuudet `species`, `name` ja `isVaccinated`.
Kirjoita funktio, joka palauttaa `"Rokotusta tarvitaan"` jos lemmikkiä ei ole rokotettu.
*/
console.log("Tehtävä", tehtava++);

const pet = {
  species: "Kissa",
  name: "Mirri",
  isVaccinated: false,
};

function checkVaccination(p) {
  if (!p.isVaccinated) {
    return "Rokotusta tarvitaan";
  }
  return "Rokotukset kunnossa";
}

console.log(checkVaccination(pet)); // Rokotusta tarvitaan

/* Tehtävä 8
Määrittele olio nimeltä `city`, jossa on ominaisuudet `name`, `population` ja `landmark`.
Kirjoita funktio, joka tulostaa `"Tämä on suuri kaupunki!"` jos väkiluku ylittää 1 000 000.
*/
console.log("Tehtävä", tehtava++);

const city = {
  name: "Helsinki",
  population: 650000,
  landmark: "Tuomiokirkko",
};

function checkCitySize(c) {
  if (c.population > 1_000_000) {
    console.log("Tämä on suuri kaupunki!");
  }
}

checkCitySize(city); // (ei tulosta mitään)

/* Tehtävä 9
Luo taulukko `transactions`, jossa jokainen tapahtuma on olio, jolla on `type` ("credit" tai "debit") ja `amount`.
Kirjoita funktio, joka laskee kokonaissaldon kaikkien tapahtumien jälkeen.
*/
console.log("Tehtävä", tehtava++);

const transactions = [
  { type: "credit", amount: 250 },
  { type: "debit", amount: 100 },
  { type: "credit", amount: 50 },
];

function calculateBalance(txns) {
  return txns.reduce((balance, t) => {
    return t.type === "credit" ? balance + t.amount : balance - t.amount;
  }, 0);
}

console.log(calculateBalance(transactions)); // 200

/* Tehtävä 10
Määrittele olio nimeltä `foxPack`, joka sisältää taulukon kettuolioita.
Jokaisella ketulla on `name`, `age` ja `furColor`.
Kirjoita funktio, joka suodattaa ja palauttaa vain ne ketut, jotka ovat alle 2-vuotiaita.
*/
console.log("Tehtävä", tehtava++);

const foxPack = {
  foxes: [
    { name: "Foxy", age: 1.5, furColor: "Punainen" },
    { name: "Roxy", age: 3, furColor: "Ruskea" },
  ],
};

function youngFoxes(pack) {
  return pack.foxes.filter((f) => f.age < 2);
}

console.log(youngFoxes(foxPack));

/* Tehtävä 11
Luo olio nimeltä `gameCharacter`, jolla on ominaisuudet `name`, `level`, `health` ja `inventory` (taulukko).
Kirjoita funktio, joka tulostaa hahmon koko varustelistan.
*/
console.log("Tehtävä", tehtava++);

const gameCharacter = {
  name: "Ritari",
  level: 5,
  health: 80,
  inventory: ["Miekka", "Kilpi", "Parantava juoma"],
};

function printInventory(char) {
  console.log(`${char.name} varusteet:`);
  char.inventory.forEach((item) => console.log("- " + item));
}

printInventory(gameCharacter);

/* Tehtävä 12
Määrittele taulukko nimeltä `employees`, jossa jokaisella työntekijällä on `name`, `role` ja `workingHours`.
Kirjoita funktio, joka etsii ja tulostaa ne työntekijät, jotka työskentelevät yli 40 tuntia viikossa.
*/
console.log("Tehtävä", tehtava++);

const employees = [
  { name: "Petra", role: "Dev", workingHours: 38 },
  { name: "Pekka", role: "QA", workingHours: 42 },
];

function overtimeStaff(list) {
  list.forEach((emp) => {
    if (emp.workingHours > 40) {
      console.log(emp.name);
    }
  });
}

overtimeStaff(employees); // Pekka

/* Tehtävä 13
Luo taulukko `musicAlbums`, jossa jokaisella albumilla on `title`, `artist` ja `releaseYear`.
Kirjoita funktio, joka tulostaa ne albumit, jotka on julkaistu vuoden 2000 jälkeen.
*/
console.log("Tehtävä", tehtava++);

const musicAlbums = [
  { title: "Album A", artist: "Artisti1", releaseYear: 1999 },
  { title: "Album B", artist: "Artisti2", releaseYear: 2005 },
];

function recentAlbums(albums) {
  albums.forEach((a) => {
    if (a.releaseYear > 2000) {
      console.log(a.title);
    }
  });
}

recentAlbums(musicAlbums); // Album B

/* Tehtävä 14
Määrittele taulukko nimeltä `cars`, jossa jokaisella autolla on `brand`, `model` ja `horsepower`.
Kirjoita funktio, joka etsii ja palauttaa auton, jolla on suurin hevosvoimamäärä.
*/
console.log("Tehtävä", tehtava++);

const cars = [
  { brand: "Volvo", model: "XC60", horsepower: 250 },
  { brand: "Ferrari", model: "488 GTB", horsepower: 660 },
];

function strongestCar(list) {
  return list.reduce((best, car) =>
    car.horsepower > best.horsepower ? car : best
  );
}

console.log(strongestCar(cars));

/* Tehtävä 15
Luo taulukko `airports`, jossa jokaisella lentokentällä on `name`, `country` ja `flightsPerDay`.
Kirjoita funktio, joka etsii lentokentän, jolla on eniten lentoja päivässä.
*/
console.log("Tehtävä", tehtava++);

const airports = [
  { name: "HEL", country: "Finland", flightsPerDay: 300 },
  { name: "JFK", country: "USA", flightsPerDay: 800 },
];

function busiestAirport(list) {
  return list.reduce((max, ap) =>
    ap.flightsPerDay > max.flightsPerDay ? ap : max
  );
}

console.log(busiestAirport(airports));
// { name: "JFK", country: "USA", flightsPerDay: 800 }
