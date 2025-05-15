"use strict";

/* Tehtävä 1: Korjaa käyttäjädatan käsittely  
Korjaa metodiketjutus niin, että se suodattaa aktiiviset käyttäjät ja palauttaa heidän nimensä isoilla kirjaimilla.
*/

const users = [
  { id: 1, name: "Alice", active: true },
  { id: 2, name: "Bob", active: false },
  { id: 3, name: "Charlie", active: true },
];

// Korjaa tämä
const activeUsers = users
  .map((user) => user.Name)
  .filter((name) => name.toUpperCase());

console.log(activeUsers); // Odotettu: ["ALICE", "CHARLIE"]

/* Tehtävä 2: Korjaa valinnainen ketjutus  
Käytä turvallisesti `email`-ominaisuutta objektin `user.details` sisältä.
*/

const userData = { details: { contact: { email: "jane@example.com" } } };

// Korjaa tämä
console.log(userData.contact.email); // Odotettu: "jane@example.com"

/* Tehtävä 3: Korjaa valinnainen ketjutus taulukoiden kanssa  
Käytä turvallisesti taulukon `orders` toista alkiota, jos se on olemassa.
*/

const customer = { orders: [1001, 1002] };

// Korjaa tämä
console.log(customer.orders[2]); // Odotettu: undefined

/* Tehtävä 4: Korjaa ketjutettu merkkijonojen käsittely  
Poimi nimikirjaimet koko nimestä metodiketjutuksella.
*/

const fullName = "John Doe";

// Korjaa tämä
const initials = fullName.map((word) => word[0].toUpperCase()).join(" ");
console.log(initials); // Odotettu: "J D"

/* Tehtävä 5: Luo oma funktio  
Kirjoita funktio, joka vastaanottaa `products`-taulukon ja palauttaa pilkulla erotetun merkkijonon **vain varastossa olevien** tuotteiden nimistä **isoilla kirjaimilla**.
Testaa seuraavalla taulukolla:
`[{ name: "Laptop", stock: 10 }, { name: "Phone", stock: 0 }]`
Odotettu tuloste: `"LAPTOP"`
*/

// Kirjoita koodisi tähän
