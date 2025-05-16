"use strict";

let tehtava = 1;
console.log("Tehtävä", tehtava++);
/* Tehtävä 1: Korjaa käyttäjädatan käsittely  
   Korjaa metodiketjutus niin, että se suodattaa aktiiviset käyttäjät  
   ja palauttaa heidän nimensä isoilla kirjaimilla.  
*/
const users = [
  { id: 1, name: "Alice", active: true },
  { id: 2, name: "Bob", active: false },
  { id: 3, name: "Charlie", active: true },
];

const activeUsers = users
  .filter((user) => user.active) // 1) suodatetaan aktiiviset
  .map((user) => user.name.toUpperCase()); // 2) muutetaan nimet isoiksi

console.log(activeUsers); // ["ALICE", "CHARLIE"]

console.log("Tehtävä", tehtava++);
/* Tehtävä 2: Korjaa valinnainen ketjutus  
   Käytä turvallisesti `email`-ominaisuutta objektin `user.details` sisältä.
*/
const userData = { details: { contact: { email: "jane@example.com" } } };

console.log(userData.details?.contact?.email);

console.log("Tehtävä", tehtava++);
/* Tehtävä 3: Korjaa valinnainen ketjutus taulukoiden kanssa  
   Käytä turvallisesti taulukon `orders` toista alkiota, jos se on olemassa.
*/
const customer = { orders: [1001, 1002] };

console.log(customer.orders?.[1]);
// 1002  — ja jos orders olisi undefined, tulos olisi undefined

console.log("Tehtävä", tehtava++);
/* Tehtävä 4: Korjaa ketjutettu merkkijonojen käsittely  
   Poimi nimikirjaimet koko nimestä metodiketjutuksella.
*/
const fullName = "John Doe";

const initials = fullName
  .split(" ") // 1) jaetaan merkkijono sanoiksi
  .map((word) => word[0].toUpperCase()) // 2) otetaan joka sanan ensimmäinen kirjain isona
  .join(" "); // 3) yhdistetään välilyönnillä

console.log(initials); // "J D"

console.log("Tehtävä", tehtava++);
/* Tehtävä 5: Luo oma funktio  
   Kirjoita funktio, joka vastaanottaa `products`-taulukon ja palauttaa  
   pilkulla erotetun merkkijonon **vain varastossa olevien** tuotteiden  
   nimistä **isoilla kirjaimilla**.
*/
function listInStock(products) {
  return products
    .filter((p) => p.stock > 0) // 1) jätetään varastossa olevat
    .map((p) => p.name.toUpperCase()) // 2) nimet isoiksi kirjaimiksi
    .join(", "); // 3) yhdistetään pilkulla
}

// Testi:
const items = [
  { name: "Laptop", stock: 10 },
  { name: "Phone", stock: 0 },
];
console.log(listInStock(items)); // "LAPTOP"
