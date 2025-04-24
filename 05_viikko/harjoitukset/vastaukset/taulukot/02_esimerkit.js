// Harjoitus 1: Määritä taulukon pituus ja tarkista ehto
let myAlphabet = ["A", "B", "C", "D", "E", "F", "G"];

/*
Luo funktio nimeltä myAlphabetLength, joka tulostaa myAlphabet-taulukon pituuden.
Jos pituus on 5 tai enemmän, tulosta: "Taulukon pituus on riittävä".
Muussa tapauksessa tulosta: "Taulukon pituus on liian lyhyt."
*/
// Kirjoita funktiosi tähän

function myAlphabetLength() {
  console.log("Pituus:", myAlphabet.length);
  if (myAlphabet.length >= 5) {
    console.log("Taulukon pituus on riittävä");
  } else {
    console.log("Taulukon pituus on liian lyhyt");
  }
}

myAlphabetLength();

// Harjoitus 2: Käy läpi planets-taulukko ja tulosta jokainen planeetta ja sen indeksi
const planets = ["Merkurius", "Venus", "Maa", "Mars", "Jupiter"];

/*
Tulosta jokainen planeetta planets-taulukosta ja sen indeksi.
Odotettu tulos:
"Planeetta: Merkurius, Indeksi: 0"
...
"Planeetta: Jupiter, Indeksi: 4"
*/
// Kirjoita koodisi tähän
for (let i = 0; i < planets.length; i++) {
  console.log(`Planeetta: ${planets[i]}, Indeksi: ${i}`);
}

// Harjoitus 3: Tulosta taulukon alkioiden tyypit käyttäen mixedValues-taulukkoa
const mixedValues = [42, "Heippa", true, { nimi: "Kettu" }, null, undefined];

/*
Käy läpi mixedValues-taulukko ja tulosta jokainen alkio, sen indeksi ja tietotyyppi.
Odotettu tulos:
"Alkio: 42, Indeksi: 0, Tyyppi: number"
...
"Alkio: undefined, Indeksi: 5, Tyyppi: undefined"
*/
// Kirjoita koodisi tähän

for (let i = 0; i < mixedValues.length; i++) {
  console.log(
    `Alkio: ${mixedValues[i]}, Indeksi: ${i}, Tyyppi: ${typeof mixedValues[i]}`
  );
}

// Harjoitus 4: Tulosta jokainen myArr-taulukon alkio ilman silmukkaa
let myArr = [1, "Koira", 3.14, false];

/*
Tulosta jokainen alkio myArr-taulukosta ilman silmukan käyttöä.
Odotettu tulos: 1, "Koira", 3.14, false
*/
// Kirjoita koodisi tähän

console.log(myArr[0]);
console.log(myArr[1]);
console.log(myArr[2]);
console.log(myArr[3]);

// Harjoitus 5: Etsi yleiset eläinlajit elainvarasto1 ja elainvarasto2 taulukoista
let elainvarasto1 = ["Kettu", "Peura", "Pöllö", "Karhu"];
let elainvarasto2 = ["Karhu", "Susi", "Kotka", "Kettu"];

/*
Tunnista ja tulosta eläinlajit, jotka löytyvät molemmista taulukoista.
Odotettu tulos:
"Yhteinen laji: Kettu"
"Yhteinen laji: Karhu"
*/
// Kirjoita koodisi tähän

// vaihtoehto 1:
console.log("vaihtoehto 1");
for (let i = 0; i < elainvarasto1.length; i++) {
  if (elainvarasto2.includes(elainvarasto1[i])) {
    console.log(`Yhteinen laji: ${elainvarasto1[i]}`);
  }
}

// vaihtoehto 2:
console.log("vaihtoehto 2");

let yhteiset = elainvarasto1.filter((elain) => elainvarasto2.includes(elain));
yhteiset.forEach((elain) => console.log(`Yhteinen laji: ${elain}`));

// vaihtoehto 3:
console.log("vaihtoehto 3");

for (let elain of elainvarasto1) {
  if (elainvarasto2.indexOf(elain) !== -1) {
    console.log(`Yhteinen laji: ${elain}`);
  }
}

// Harjoitus 6: Tulosta jokaisen eläinnimen kirjaimet animalNames-taulukosta
let animalNames = ["Leijona", "Tiikeri", "Panda"];

/*
Tulosta jokaisen animalNames-taulukon alkion kaikki kirjaimet.
Odotettu tulos:
"Kirjaimet sanassa 'Leijona': L, e, i, j, o, n, a"
...
"Kirjaimet sanassa 'Panda': P, a, n, d, a"
*/
// Kirjoita koodisi tähän

for (let i = 0; i < animalNames.length; i++) {
  let kirjaimet = animalNames[i].split("").join(", ");
  console.log(`Kirjaimet sanassa '${animalNames[i]}': ${kirjaimet}`);
}

// Harjoitus 7: Suodata vain positiiviset lämpötilat temperatures-taulukosta
let temperatures = [-10, 5, -3, 15, -8, 20, 2];

/*
Suodata ja tulosta vain positiiviset arvot temperatures-taulukosta.
Odotettu tulos: [5, 15, 20, 2]
*/
// Kirjoita koodisi tähän

let positiiviset = temperatures.filter((temp) => temp > 0);
console.log(positiiviset); // [5, 15, 20, 2]

/*
Kirjoita funktio getPositiveTemperatures, joka palauttaa uuden taulukon,
joka sisältää vain lämpötilat, jotka ovat suurempia kuin 0 temperatures-taulukosta.
Odotettu tulos: [5, 15, 20, 2]
*/
// Kirjoita funktiosi tähän

function getPositiveTemperatures(temps) {
  return temps.filter((t) => t > 0);
}

console.log(getPositiveTemperatures(temperatures)); // [5, 15, 20, 2]

// Harjoitus 8: Etsi "Kettu":n indeksi zooAnimals-taulukosta
let zooAnimals = ["Elefantti", "Kirahvi", "Panda", "Kettu", "Kenguru"];

/*
Etsi ja tallenna "Fox":n indeksi zooAnimals-taulukosta.
Odotettu tulos: "Fox:n indeksi: 3"
*/
// Kirjoita koodisi tähän

let kettuIndex = zooAnimals.indexOf("Kettu");
console.log("Ketun indeksi:", kettuIndex);

// Harjoitus 9: Yritä etsiä eläin, jota ei ole zooAnimals-taulukossa
/*
Etsi "Pingviini":n indeksi zooAnimals-taulukosta.
Jos sitä ei löydy, tulosta "Pingviini ei ole eläintarhassa."
Odotettu tulos: -1
*/
// Kirjoita koodisi tähän
let pingviiniIndex = zooAnimals.indexOf("Pingviini");

if (pingviiniIndex === -1) {
  console.log("Pingviini ei ole eläintarhassa.");
} else {
  console.log("Pingviinin indeksi:", pingviiniIndex);
}

// Harjoitus 10: Korvaa "Kirahvi" sanalla "Alpakka" zooAnimals-taulukossa
/*
Odotettu tulos: ["Elefantti", "Alpakka", "Panda", "Kettu", "Kenguru"]
*/
// Kirjoita koodisi tähän
let kirahviIndex = zooAnimals.indexOf("Kirahvi");
if (kirahviIndex !== -1) {
  zooAnimals[kirahviIndex] = "Alpakka";
}
console.log(zooAnimals);

// Harjoitus 11: Lajittele safariAnimals-taulukko aakkosjärjestykseen
let safariAnimals = ["Zeebra", "Leopardi", "Elefantti", "Gazelli"];

/*
Odotettu tulos: ['Elefantti', 'Gazelli', 'Leopardi', 'Zeebra']
*/
// Kirjoita koodisi tähän
safariAnimals.sort();
console.log(safariAnimals);

// Harjoitus 12: Käännä safariAnimals-taulukon järjestys
/*
Käännä safariAnimals-taulukon järjestys päinvastaiseksi.
Odotettu tulos: ['Zeebra', 'Leopardi', 'Gazelli', 'Elefantti']
*/
// Kirjoita koodisi tähän
safariAnimals.reverse();
console.log(safariAnimals);

// Harjoitus 13: Tarkista sisältääkö zooAnimals "Tiikeri":n
/*
Odotettu tulos:
true (jos sisältää)
false (jos ei sisällä)
*/
// Kirjoita koodisi tähän
let sisaltaaTiikerin = zooAnimals.includes("Tiikeri");
console.log("Sisältääkö tiikerin?", sisaltaaTiikerin);

// Harjoitus 14: Etsi kaikki "Jonna":n esiintymät attendees-taulukossa
let attendees = ["Jonna", "Santtu", "Jonna", "Alex", "Jonna"];

/*
Etsi kaikki kohdat, joissa "Jonna" esiintyy attendees-taulukossa.
Odotettu tulos: [0, 2, 4]
*/
// Kirjoita koodisi tähän
let jonnaIndeksit = [];
for (let i = 0; i < attendees.length; i++) {
  if (attendees[i] === "Jonna") {
    jonnaIndeksit.push(i);
  }
}
console.log(jonnaIndeksit);

// Harjoitus 15: Muunna kaikki attendees-taulukon nimet isoiksi kirjaimiksi
/*
Luo uusi taulukko, jossa jokainen attendees-taulukon nimi on kirjoitettu isoilla kirjaimilla.
Odotettu tulos: ['JONNA', 'SANTTU', 'JONNA', 'ALEX', 'JONNA']
*/
// Kirjoita koodisi tähän
let osallistujat = ["Jonna", "Santtu", "Jonna", "Alex", "Jonna"];

let osallistujatIsolla = osallistujat.map((nimi) => nimi.toUpperCase());
console.log(osallistujatIsolla);

// Harjoitus 16: Yhdistä forestAnimals- ja farmAnimals-taulukot
let forestAnimals = ["Peura", "Karhu", "Susi"];
let farmAnimals = ["Hevonen", "Lammas", "Vuohi"];

/*
Yhdistä forestAnimals ja farmAnimals uuteen taulukkoon.
Odotettu tulos: ["Peura", "Karhu", "Susi", "Hevonen", "Lammas", "Vuohi"]
*/
// Kirjoita koodisi tähän
let allAnimals = [...forestAnimals, ...farmAnimals];
console.log("Kaikki eläimet:");
console.log(allAnimals);

// Harjoitus 17: Poista ensimmäinen ja viimeinen alkio birdSpecies-taulukosta
let birdSpecies = ["Kotka", "Pöllö", "Haukka", "Pääsky", "Pingviini"];

/*
Odotettu tulos: ['Pöllö', 'Haukka', 'Pääsky']
*/
// Kirjoita koodisi tähän
let middleBirds = birdSpecies.slice(1, birdSpecies.length - 1);
console.log("keskellä olevat linnut:", middleBirds);

// Harjoitus 18: Käytä `splice`:a poistaaksesi ja korvataksesi arvoja numbers-taulukossa
let numbers = [10, 20, 30, 40, 50];

/*
Käytä splice-metodia poistamaan "30" ja korvaamaan se arvoilla "25" ja "27".
Odotettu tulos: [10, 20, 25, 27, 40, 50]
*/
// Kirjoita koodisi tähän
numbers.splice(2, 1, 25, 27);
console.log(numbers);

// Harjoitus 19: Korota jokaista hintaa 10 % käyttäen `map`-metodia
let prices = [5, 10, 15, 20];

/*
Luo uusi taulukko, jossa jokainen hinta on kasvatettu 10 %.
Odotettu tulos: [5.5, 11, 16.5, 22]
*/
// Kirjoita funktiosi tähän
console.log("Alkuperäiset hinnat:", prices);

let raisedPrices = prices.map((hinta) => hinta * 1.1);
console.log("Korotetut hinnat:", raisedPrices);

// Harjoitus 20: Suodata `filter`:in avulla sanat, jotka ovat pidempiä kuin 5 kirjainta
let words = ["omena", "banaani", "kirsikka", "kiivi", "mansikka"];

/*
Luo uusi taulukko, joka sisältää vain sanat, joissa on yli 5 kirjainta words-taulukosta.
Odotettu tulos: ['banaani', 'kirsikka', 'mansikka']
*/
// Kirjoita funktiosi tähän
let longWords = words.filter((word) => word.length > 5);
console.log("Pitkät sanat:", longWords);
