"use strict";

/* 
Tehtävä 1: Viivästetty tervehdys (Callback)  
---------------------------------------
Kirjoita funktio `delayedGreet(name, callback)`  
Kahden (2) sekunnin kuluttua sen tulee kutsua `callback` arvolla `"Hei, [name]!"`  
*/

function delayedGreet(name, callback) {
  // Laita koodisi tähän
}

// Testitapaus
delayedGreet("Alice", (message) => console.log(message));
// Odotettu: "Hei, Alice!" (2 sekunnin kuluttua)

/* 
Tehtävä 2: Tilauskäsittely (Callback)  
---------------------------------------
Kirjoita funktio `processOrder(orderNumber, callback)`  
Sen tulee odottaa 3 sekuntia ja sen jälkeen kutsua callbackia seuraavalla viestillä:  
   `"Tilaus [orderNumber] on noudettavissa."`  
*/

function processOrder(orderNumber, callback) {
  // Laita koodisi tähän
}

// Testitapaus
processOrder(101, (message) => console.log(message));
// Odotettu: "Tilaus 101 on noudettavissa." (3 sekunnin kuluttua)

/* 
Tehtävä 3: Kirjautumisjärjestelmä (Callback)  
---------------------------------------
Korjaa `loginUser(username, validUser, callback)`  
Jos `validUser === true`, kutsu callbackia viestillä `"Tervetuloa, [username]!"` 1 sekunnin kuluttua  
Jos `validUser === false`, kutsu callbackia heti viestillä `"Virheellinen kirjautuminen"`  
*/

function loginUser(username, validUser, callback) {
  // Laita koodisi tähän
}

// Testitapaukset
loginUser("Sam", true, (message) => console.log(message));
// Odotettu: "Tervetuloa, Sam!" (1 sekunnin kuluttua)
loginUser("Alex", false, (message) => console.log(message));
// Odotettu: "Virheellinen kirjautuminen" (välittömästi)

/* 
Tehtävä 4: Käyttäjätietojen haku (Promise)  
---------------------------------------
Muunna `fetchUserData(shouldFail)` palauttamaan Promise  
Jos `shouldFail === false`, **ratkaise 2 sekunnin jälkeen** viestillä `"Käyttäjätiedot haettu"`  
Jos `shouldFail === true`, **hylkää 2 sekunnin jälkeen** viestillä `"Virhe käyttäjätietojen haussa"`  
*/

function fetchUserData(shouldFail) {
  // Laita koodisi tähän
}

// Testitapaukset
fetchUserData(false).then(console.log).catch(console.error);
// Odotettu: "Käyttäjätiedot haettu" (2 sekunnin kuluttua)
fetchUserData(true).then(console.log).catch(console.error);
// Odotettu: "Virhe käyttäjätietojen haussa" (2 sekunnin kuluttua)

/* 
Tehtävä 5: Tilauskäsittely (Promise-ketju)  
---------------------------------------
Muunna `processOrderPromise()` palauttamaan promise-ketjun:  
   Odota **2 sekuntia** → Ratkaise `"Tilaus vastaanotettu"`  
   Odota **3 sekuntia** → Ratkaise `"Tilausta valmistellaan"`  
   Odota **1 sekunti** → Ratkaise `"Tilaus valmis noudettavaksi"`  
*/

function processOrderPromise() {
  // Laita koodisi tähän
}

// Testitapaus
processOrderPromise().then(console.log);
// Odotettu: kolmen viestin ketju viiveineen

/* 
Tehtävä 6: API-simulaatio (Promise)  
---------------------------------------
Muunna `getUserProfile(userExists)` Promiseksi  
Jos `userExists === true`, **ratkaise 2 sekunnin kuluttua** viestillä `"Käyttäjäprofiili ladattu"`  
Jos `userExists === false`, **hylkää 2 sekunnin kuluttua** viestillä `"Käyttäjää ei löytynyt"`  
*/

function getUserProfile(userExists) {
  // Laita koodisi tähän
}

// Testitapaukset
getUserProfile(true).then(console.log).catch(console.error);
// Odotettu: "Käyttäjäprofiili ladattu" (2 sekunnin kuluttua)
getUserProfile(false).then(console.log).catch(console.error);
// Odotettu: "Käyttäjää ei löytynyt" (2 sekunnin kuluttua)

/* 
Tehtävä 7: Käyttäjätietojen haku (Async/Await)  
---------------------------------------------
Muunna `fetchUserDataAsync(shouldFail)` käyttämään `async/await`  
Jos `shouldFail === false`, odota **2 sekuntia** ja palauta `"Käyttäjätiedot ladattu"`  
Jos `shouldFail === true`, odota **2 sekuntia** ja heitä virhe `"Tietojen haku epäonnistui"`  
*/

async function fetchUserDataAsync(shouldFail) {
  // Laita koodisi tähän
}

// Testitapaukset
fetchUserDataAsync(false).then(console.log).catch(console.error);
// Odotettu: "Käyttäjätiedot ladattu" (2 sekunnin kuluttua)
fetchUserDataAsync(true).then(console.log).catch(console.error);
// Odotettu: "Tietojen haku epäonnistui" (2 sekunnin kuluttua)

/* 
Tehtävä 8: Verkkokaupan kassaprosessi (Async/Await)  
-----------------------------------------------------
Muunna `checkoutCart()` käyttämään `async/await`  
   Odota **1 sekunti** → `"Varaston tarkistus..."`  
   Odota **2 sekuntia** → `"Maksu käsitelty"`  
   Odota **1 sekunti** → `"Tilaus valmis!"`  
*/

async function checkoutCart() {
  // Laita koodisi tähän
}

// Testitapaus
checkoutCart().then(() => console.log("Kiitos ostoksista!"));
// Odotettu:
// "Varaston tarkistus..." (1 s jälkeen)
// "Maksu käsitelty" (2 s lisää)
// "Tilaus valmis!" (1 s lisää)
// "Kiitos ostoksista!" lopuksi

/* 
Tehtävä 9: Tuotetietojen haku (Async/Await)  
---------------------------------------------
Muunna `fetchProductDetails(hasError)` käyttämään `async/await`  
Jos `hasError === false`, odota **3 sekuntia** ja palauta `"Tuotetiedot haettu"`  
Jos `hasError === true`, odota **3 sekuntia** ja heitä virhe `"Virhe tuotteen haussa"`  
Käytä **try/catch** virheenkäsittelyyn  
*/

async function fetchProductDetails(hasError) {
  // Laita koodisi tähän
}

// Testitapaukset
fetchProductDetails(false).then(console.log).catch(console.error);
// Odotettu: "Tuotetiedot haettu" (3 sekunnin kuluttua)
fetchProductDetails(true).then(console.log).catch(console.error);
// Odotettu: "Virhe tuotteen haussa" (3 sekunnin kuluttua)
