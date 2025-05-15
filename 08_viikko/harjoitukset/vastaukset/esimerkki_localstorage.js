let tehtava = 1;
console.log(`Tehtävä ${tehtava++}:`);

/* TEHTÄVÄ 1
Tallenna merkkijono `"Hello, LocalStorage!"` LocalStorageen avaimella `"message"`.
Hae se ja tulosta konsoliin.
*/

// Tallennus LocalStorageen
localStorage.setItem("message", "Hello, LocalStorage!");

const message = localStorage.getItem("message");

// Tulostus konsoliin
console.log(message); // "Hello, LocalStorage!"

console.log(`Tehtävä ${tehtava++}:`);

/* TEHTÄVÄ 2
Luo olio `userSettings`, jossa on:
- `theme` ("dark" tai "light")
- `language` ("English", "Spanish" jne.)

Muunna se JSON-merkkijonoksi ja tallenna LocalStorageen.
Hae se, pura JSON ja tulosta `theme`-ominaisuus.
*/

// Luodaan olio
const userSettings = {
  theme: "dark",
  language: "English",
};

// Muunnetaan JSON-merkkijonoksi ja tallennetaan
localStorage.setItem("userSettings", JSON.stringify(userSettings));

// Haetaan talletettu merkkijono ja parsitaan takaisin olioksi
const storedSettings = JSON.parse(localStorage.getItem("userSettings"));

// Tulostetaan theme-ominaisuus
console.log(storedSettings.theme); // "dark"

console.log(`Tehtävä ${tehtava++}:`);

/* TEHTÄVÄ 3
Määrittele taulukko `favoriteBooks`, jossa on vähintään kolme kirjaoliota (`title` ja `author`).
Tallenna taulukko LocalStorageen.
Hae ja pura se, sitten tulosta kaikkien kirjojen nimet.
*/

// Kirjailuettelo
const favoriteBooks = [
  { title: "1984", author: "George Orwell" },
  { title: "Pride and Prejudice", author: "Jane Austen" },
  { title: "The Hobbit", author: "J.R.R. Tolkien" },
];

// Tallennus LocalStorageen
localStorage.setItem("favoriteBooks", JSON.stringify(favoriteBooks));

// Haku ja purku
const storedBooks = JSON.parse(localStorage.getItem("favoriteBooks"));

// Kirjojen nimien tulostus
storedBooks.forEach((book) => {
  console.log(book.title);
});

console.log(`Tehtävä ${tehtava++}:`);

/* TEHTÄVÄ 4
Kirjoita funktio `saveToLocalStorage(key, object)`, joka:
- Muuntaa olion JSONiksi.
- Tallentaa sen LocalStorageen annetulla avaimella.
Testaa tallentamalla olio ja hakemalla se.
*/

function saveToLocalStorage(key, object) {
  const json = JSON.stringify(object);
  localStorage.setItem(key, json);
}

// Esimerkkiolion tallennus ja haku
const exampleObj = { foo: "bar", count: 42 };
saveToLocalStorage("myExample", exampleObj);

// Tarkistus
const retrieved = JSON.parse(localStorage.getItem("myExample"));
console.log(retrieved); // { foo: "bar", count: 42 }

console.log(`Tehtävä ${tehtava++}:`);

/* TEHTÄVÄ 5
Kirjoita funktio `getFromLocalStorage(key)`, joka:
- Hakee arvon LocalStoragesta.
- Purkaa sen jos se on JSON.
- Tulostaa haetun arvon.
*/

function getFromLocalStorage(key) {
  const value = localStorage.getItem(key);

  try {
    // Jos JSON, parsitaan olio/tai taulukko
    const parsed = JSON.parse(value);
    console.log(parsed);
    return parsed;
  } catch (e) {
    // Ei JSONia, palautetaan merkkijono
    console.log(value);
    return value;
  }
}

// Testaus
getFromLocalStorage("message"); // "Hello, LocalStorage!"
getFromLocalStorage("userSettings"); // { theme: "dark", language: "English" }

console.log(`Tehtävä ${tehtava++}:`);

/* TEHTÄVÄ 6
Luo olio `userProfile`, jossa on:
- `username`
- `email`
- `preferences` (olio, jossa on `theme` ja `notifications`)

Tallenna se LocalStorageen.
Hae se ja päivitä `theme` arvoksi `"dark mode"`, sitten tulosta päivitetty olio.
*/

// Määritellään käyttäjäprofiili
const userProfile = {
  username: "saima_sellah",
  email: "saima.sellahv@esimerkki.fi",
  preferences: {
    theme: "light",
    notifications: true,
  },
};

// Tallennus LocalStorageen
localStorage.setItem("userProfile", JSON.stringify(userProfile));

// Haku ja purku
const storedProfile = JSON.parse(localStorage.getItem("userProfile"));

// Päivitetään theme-arvo
storedProfile.preferences.theme = "dark mode";

// Tallennetaan päivitetty profiili takaisin
localStorage.setItem("userProfile", JSON.stringify(storedProfile));

// Tulostus konsoliin
console.log(storedProfile);

console.log(`Tehtävä ${tehtava++}:`);

/* TEHTÄVÄ 7
Määrittele olio `shoppingList`, jossa on taulukko `items` (merkkijonoja).
Tallenna se LocalStorageen.
Kirjoita funktio `addItemToList(item)`, joka:
- Hakee `shoppingList` LocalStoragesta.
- Lisää uuden tuotteen.
- Tallentaa päivitetyn listan takaisin LocalStorageen.
- Tulostaa päivitetyn listan.
*/

//Alustetaan ostoslista-olio
const shoppingList = {
  items: ["maito", "leipä", "voi"],
};

//Tallennus LocalStorageen
localStorage.setItem("shoppingList", JSON.stringify(shoppingList));

function addItemToList(item) {
  // Hae ja pura ostoslista
  const listObj = JSON.parse(localStorage.getItem("shoppingList"));

  // Lisää uusi tuote
  listObj.items.push(item);

  // Tallenna päivitetty lista
  localStorage.setItem("shoppingList", JSON.stringify(listObj));

  // Tulosta konsoliin
  console.log("Päivitetty ostoslista:", listObj.items);
}

// Testikutsu
addItemToList("omena");
// Konsolissa: Päivitetty ostoslista: ["maito", "leipä", "voi", "omena"]

console.log(`Tehtävä ${tehtava++}:`);

/* TEHTÄVÄ 8
Luo olio `counter`, jossa on:
- `count` (alkaa arvosta 0)
Tallenna se LocalStorageen.
Kirjoita funktio `incrementCounter()`, joka:
- Hakee counterin.
- Kasvattaa `count` arvoa yhdellä.
- Tallentaa päivitetyn counterin.
- Tulostaa uuden arvon.
*/

//Alusta laskurin arvo
const counter = { count: 0 };

//Tallenna LocalStorageen
localStorage.setItem("counter", JSON.stringify(counter));

//Kasvattaa counter.count-arvoa yhdellä, tallentaa ja tulostaa sen.

function incrementCounter() {
  // Hae ja pura counter
  const ctr = JSON.parse(localStorage.getItem("counter"));

  // Inkrementoi
  ctr.count += 1;

  // Tallenna takaisin
  localStorage.setItem("counter", JSON.stringify(ctr));

  // Tulosta uusi arvo
  console.log("Uusi counter-arvo:", ctr.count);
}

// Testikutsut
incrementCounter(); // Uusi counter-arvo: 1
incrementCounter(); // Uusi counter-arvo: 2

console.log(`Tehtävä ${tehtava++}:`);

/* TEHTÄVÄ 9
Luo taulukko `tasks`, jossa jokainen tehtävä on olio (`id`, `description`, `completed`).
Tallenna se LocalStorageen.
Kirjoita funktio `markTaskComplete(taskId)`, joka:
- Hakee `tasks` LocalStoragesta.
- Etsii annetulla ID:llä olevan tehtävän ja asettaa `completed` arvoksi `true`.
- Tallentaa päivitetyt tehtävät.
- Tulostaa päivitetyn listan.
*/
const tasks = [
  { id: 1, description: "Osta maitoa", completed: false },
  { id: 2, description: "Vie roskat", completed: false },
  { id: 3, description: "Lähetä raportti", completed: true },
];

//Tallennus LocalStorageen
localStorage.setItem("tasks", JSON.stringify(tasks));

//Merkitsee annetun ID:n tehtävän suoritetuksi ja tulostaa listan.

function markTaskComplete(taskId) {
  // Hae ja pura tehtävät
  const taskList = JSON.parse(localStorage.getItem("tasks"));

  // Etsi tehtävä ja päivitä completed-arvo
  const task = taskList.find((t) => t.id === taskId);
  if (task) {
    task.completed = true;
    // Tallenna takaisin
    localStorage.setItem("tasks", JSON.stringify(taskList));
    console.log("Päivitetyt tehtävät:", taskList);
  } else {
    console.warn(`Tehtävää ID:llä ${taskId} ei löytynyt.`);
  }
}

// Testikutsu
markTaskComplete(2);
markTaskComplete(8);

console.log(`Tehtävä ${tehtava++}:`);

/* TEHTÄVÄ 10
Kirjoita funktio `clearLocalStorage()`, joka poistaa kaiken LocalStorageen tallennetun datan.
Kutsu funktiota ja varmista että LocalStorage on tyhjä.
*/

function clearLocalStorage() {
  localStorage.clear();
  console.log("LocalStorage on nyt tyhjä.");
}

// Kutsutaan funktiota
clearLocalStorage();

// Varmistus: konsoliin tulostuu '{}'
console.log(localStorage); // Storage {} (tyhjä)
