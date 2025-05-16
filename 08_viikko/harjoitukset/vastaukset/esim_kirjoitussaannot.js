let tehtava = 1;
console.log("Tehtävä", tehtava++);
/* Tehtävä 1: Käytä "strict mode" -tilaa
   Luo funktio `task1`, joka aktivoi strict-tilan,  
   yrittää käyttää julistamatonta muuttujaa ja kiinniottaa virheen.
*/
function task1() {
  "use strict";
  try {
    undeclaredVar = 42; // muuttujaa ei ole julistettu
  } catch (error) {
    console.log("Strict mode -virhe:", error.message);
  }
}

task1();
console.log("Tehtävä", tehtava++);

/* Tehtävä 2: Muuttujien oikea julistus
   Julista const MAX_USERS = 100 ja let currentUsers = 10.
   Yritä muuttaa vakion arvoa ja kiinniota virhe.
*/
function task2() {
  const MAX_USERS = 100;
  let currentUsers = 10;
  try {
    MAX_USERS = 200; // aiheuttaa TypeErrorin
  } catch (error) {
    console.log("Virhe vakiota muutettaessa:", error.message);
  }
  console.log(
    "MAX_USERS on yhä",
    MAX_USERS,
    "ja currentUsers on",
    currentUsers
  );
}

task2();
console.log("Tehtävä", tehtava++);

/* Tehtävä 3: Luo objekti ja tulosta se
   Luo userProfile-objekti kentillä name, email, isAdmin ja loggaa konsoliin.
*/
function task3() {
  const userProfile = {
    name: "Alice",
    email: "alice@example.com",
    isAdmin: true,
  };
  console.log(userProfile);
}

task3();
console.log("Tehtävä", tehtava++);

/* Tehtävä 4: Yksinkertainen funktio pinta-alan laskemiseen
   calculateArea(width, height) palauttaa suorakulmion pinta-alan.
*/
function calculateArea(width, height) {
  return width * height;
}

// Esimerkkikutsut:

console.log("Alue 5×10 =", calculateArea(5, 10));

console.log("Tehtävä", tehtava++);

/* Tehtävä 5: Vältä taikalukuja
   Määritä vakio DISCOUNT = 0.1.
   Luo funktio applyDiscount(price), joka laskee hinnasta alennuksen.
*/
const DISCOUNT = 0.1;
function applyDiscount(price) {
  return price - price * DISCOUNT;
}
// Esimerkki:
console.log(applyDiscount(100)); // 90

console.log("Tehtävä", tehtava++);

/* Tehtävä 6: Kirjoita hyödyllisiä kommentteja
   greetUser(name) palauttaa käyttäjälle tervehdyksen.
   @param name – kutsuttavan käyttäjän nimi
   @returns tervehdyksen merkkijono
*/
function greetUser(name) {
  return `Hello, ${name}!`;
}
// Esimerkki:
console.log(greetUser("Bob")); // "Hello, Bob!"

console.log("Tehtävä", tehtava++);

/* Tehtävä 7: Refaktoroi epäselvä koodi selkeämmäksi
   Ennen: function f(n){return n<0 ? 'negative' : 'positive';}
   Tarkista parametrin alle/yläraja ja palauta selkeä merkkijono.
*/
function checkNumber(number) {
  if (number < 0) {
    return "negative";
  } else {
    return "positive";
  }
}
// Esimerkki:
console.log(checkNumber(-5)); // "negative"
console.log(checkNumber(0)); // "positive"

console.log("Tehtävä", tehtava++);

/* Tehtävä 8: Korjaa koodin muotoilu
   Ennen: let x=10; function example(){console.log(x);}
   Oikea sisennys ja selkeys.
*/
function example() {
  let x = 10;
  console.log(x);
}
// Esimerkki:
example(); // 10
