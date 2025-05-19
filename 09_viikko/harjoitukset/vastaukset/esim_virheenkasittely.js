"use strict";

/* Tehtävä 1: Try-Catch virheenkorjaukseen
/*
Tehtävä: Kääri koodi `try-catch`-lohkoon.
         Simuloi virhe kutsumalla määrittelemätöntä funktiota.

Testitapaus:
task1(); // Pitää tulostaa: "Virhe havaittu: function is not defined"
*/

function task1() {
  try {
    undefinedFunction(); // simuloitu virhe
  } catch (error) {
    console.error("Virhe havaittu:", error.message);
  }
}

/* Tehtävä 2: Käsittele ReferenceError
/*
Tehtävä: Yritä käyttää muuttujaa, jota ei ole määritelty.
         Ota virhe kiinni ja tulosta: "ReferenceError havaittu: [virheviesti]"

Testitapaus:
task2(); // Pitää tulostaa: "ReferenceError havaittu: myVariable is not defined"
*/

function task2() {
  try {
    console.log(myVariable); // ei määritelty
  } catch (error) {
    if (error instanceof ReferenceError) {
      console.error("ReferenceError havaittu:", error.message);
    }
  }
}

/* Tehtävä 3: Käytä Finally-lohkoa
/*
Tehtävä: Simuloi virhe, kirjaa se ja varmista, että "Tehtävä valmis." aina suoritetaan.

Testitapaus:
task3(); // Pitää tulostaa virheviesti ja "Tehtävä valmis."
*/

function task3() {
  try {
    nullFunction(); // aiheuttaa virheen
  } catch (error) {
    console.error("Virhe:", error.message);
  } finally {
    console.log("Tehtävä valmis.");
  }
}

/* Tehtävä 4: Korjaa JSON-virhe
/*
Tehtävä: Yritä jäsentää virheellinen JSON. Jos epäonnistuu, tulosta "Virheellinen JSON-muoto"

Testitapaukset:
parseJSON('{"name": "Alice", "age": 25}'); // Palauttaa olion
parseJSON("Invalid JSON text"); // Tulostaa virheen ja palauttaa null
*/

function parseJSON(jsonString) {
  try {
    return JSON.parse(jsonString);
  } catch (error) {
    console.error("Virheellinen JSON-muoto");
    return null;
  }
}

/* Tehtävä 5: Heitä mukautettu virhe
/*
Tehtävä: Jos ikä on alle 18, heitä virhe "Sinun on oltava vähintään 18."

Testitapaukset:
checkAge(20); // Tulostaa: "Pääsy myönnetty."
checkAge(16); // Tulostaa: "Virhe: Sinun on oltava vähintään 18."
*/

function checkAge(age) {
  try {
    if (age < 18) {
      throw new Error("Sinun on oltava vähintään 18.");
    }
    console.log("Pääsy myönnetty.");
  } catch (error) {
    console.error("Virhe:", error.message);
  }
}

/* Tehtävä 6: Tallenna ja hae LocalStoragesta
/*
Tehtävä: Kirjoita funktio, joka tallentaa olion **LocalStorageen**.
         Hae se sitten takaisin ja käsittele virheet, jos JSON on virheellinen.

Testitapaukset:
saveUser({ name: "Alice", age: 25 }); // Tallentaa käyttäjän
console.log(getUser()); // Palauttaa tallennetun käyttäjäolion
localStorage.setItem("user", "{ invalid JSON }"); // Simuloi vioittunutta dataa
console.log(getUser()); // Kirjaa virheen ja palauttaa null
*/

function saveUser(user) {
  try {
    localStorage.setItem("user", JSON.stringify(user));
    console.log("käyttäjä tallennettu");
  } catch (error) {
    console.error("Virhe tallennettaessa:", error.message);
  }
}

function getUser() {
  try {
    const json = localStorage.getItem("user");
    return JSON.parse(json);
  } catch (error) {
    console.error("Virhe haettaessa käyttäjää:", error.message);
    return null;
  }
}

//Tehtävän testaaminen nappien avulla:

document
  .getElementById("saveUser")
  .addEventListener("click", () => saveUser({ name: "Alice", age: 25 }));

document.getElementById("noUser").addEventListener("click", () => {
  localStorage.setItem("user", "{ invalid JSON }");
  console.log("huonoa dataa");
});
document.getElementById("clearUser").addEventListener("click", () => {
  localStorage.clear();
  console.log("localStorage tyhjennetty");
});

document.getElementById("getUserData").addEventListener("click", () => {
  console.log("käyttäjän tiedot:", getUser());
});

/* Tehtävä 7: Tarkista löytyykö ominaisuus oliosta
/*
Tehtävä: Jos ominaisuus puuttuu, tulosta `"Ominaisuutta ei löydy"`

Testitapaukset:
checkProperty({ name: "Bob", age: 30 }, "name"); // Tulostaa arvon
checkProperty({ name: "Bob", age: 30 }, "email"); // Tulostaa "Ominaisuutta ei löydy"
*/

function checkProperty(obj, key) {
  if (obj.hasOwnProperty(key)) {
    console.log(obj[key]);
  } else {
    console.log("Ominaisuutta ei löydy");
  }
}

//Tehtävän testaaminen nappien avulla:

document.getElementById("goodData").addEventListener("click", () => {
  checkProperty({ name: "Bob", age: 30 }, "name");
});

document.getElementById("badData").addEventListener("click", () => {
  checkProperty({ name: "Bob", age: 30 }, "email");
});

/* Tehtävä 8: Fetch API -virheenkäsittely
/*
Tehtävä: Käytä `fetch()`-funktiota datan hakemiseen, käsittele virheet asianmukaisesti.

Testitapaukset:
fetchData("https://jsonplaceholder.typicode.com/users"); // Tulostaa API-datan
fetchData("invalid-url"); // Tulostaa verkkovirheen
*/

async function fetchData(url) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Virheellinen vastaus: ${response.status}`);
    }
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("Verkkovirhe:", error.message);
  }
}

//Tehtävän testaaminen nappien avulla:

document
  .getElementById("goodApi")
  .addEventListener("click", () =>
    fetchData("https://jsonplaceholder.typicode.com/users")
  );

document
  .getElementById("badApi")
  .addEventListener("click", () => fetchData("invalid-url"));

/* Tehtävä 9: Korjaa URI-virhe
/*
Tehtävä: Yritä dekoodata virheellinen URI-merkkijono.

Testitapaukset:
task9("https%3A%2F%2Fexample.com"); // Pitäisi dekoodata oikein
task9("%"); // Pitäisi kirjata URIError
*/

function task9(malformedURI) {
  try {
    const decoded = decodeURIComponent(malformedURI);
    console.log(decoded);
  } catch (error) {
    if (error instanceof URIError) {
      console.error("URI-virhe:", error.message);
    } else {
      console.error("Virhe:", error.message);
    }
  }
}

//Tehtävän testaaminen nappien avulla:

document
  .getElementById("URIok")
  .addEventListener("click", () => task9("https%3A%2F%2Fexample.com"));

document.getElementById("URIerror").addEventListener("click", () => task9("%")); // Pitäisi dekoodata oikein // Pitäisi kirjata URIError

/* Tehtävä 10: Tyhjennä LocalStorage
/*
Tehtävä: Varmista, että LocalStorage tyhjennetään turvallisesti.

Testitapaukset:
clearStorage(); // Pitäisi kirjata "LocalStorage tyhjennetty."
*/

function clearStorage() {
  try {
    localStorage.clear();
    console.log("LocalStorage tyhjennetty.");
  } catch (error) {
    console.error("Virhe tyhjennettäessä LocalStoragea:", error.message);
  }
}
