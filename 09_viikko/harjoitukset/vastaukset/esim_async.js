"use strict";

/* 
Tehtävä 1: Viivästetty tervehdys (Callback)  
---------------------------------------
Kirjoita funktio `delayedGreet(name, callback)`  
Kahden (2) sekunnin kuluttua sen tulee kutsua `callback` arvolla `"Hei, [name]!"`  
*/

function delayedGreet(name, callback) {
  setTimeout(() => {
    callback(`Hei, ${name}!`);
  }, 2000);
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
  setTimeout(() => {
    callback(`Tilaus ${orderNumber} on noudettavissa.`);
  }, 3000);
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
  if (validUser) {
    setTimeout(() => {
      callback(`Tervetuloa, ${username}!`);
    }, 1000);
  } else {
    callback("Virheellinen kirjautuminen");
  }
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
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldFail) {
        reject("Virhe käyttäjätietojen haussa");
      } else {
        resolve("Käyttäjätiedot haettu");
      }
    }, 2000);
  });
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
  return new Promise((resolve) => {
    setTimeout(() => resolve("Tilaus vastaanotettu"), 2000);
  })
    .then((message) => {
      console.log(message);
      return new Promise((resolve) => {
        setTimeout(() => resolve("Tilausta valmistellaan"), 3000);
      });
    })
    .then((message) => {
      console.log(message);
      return new Promise((resolve) => {
        setTimeout(() => resolve("Tilaus valmis noudettavaksi"), 1000);
      });
    });
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
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (userExists) {
        resolve("Käyttäjäprofiili ladattu");
      } else {
        reject("Käyttäjää ei löytynyt");
      }
    }, 2000);
  });
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
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldFail) {
        reject("Tietojen haku epäonnistui");
      } else {
        resolve("Käyttäjätiedot ladattu");
      }
    }, 2000);
  });
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
  const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  await wait(1000);
  console.log("Varaston tarkistus...");

  await wait(2000);
  console.log("Maksu käsitelty");

  await wait(1000);
  console.log("Tilaus valmis!");
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
  const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
  try {
    await wait(3000);
    if (hasError) {
      throw new Error("Virhe tuotteen haussa");
    } else {
      return "Tuotetiedot haettu";
    }
  } catch (error) {
    throw error;
  }
}

// Testitapaukset
fetchProductDetails(false).then(console.log).catch(console.error);
// Odotettu: "Tuotetiedot haettu" (3 sekunnin kuluttua)
fetchProductDetails(true).then(console.log).catch(console.error);
// Odotettu: "Virhe tuotteen haussa" (3 sekunnin kuluttua)
