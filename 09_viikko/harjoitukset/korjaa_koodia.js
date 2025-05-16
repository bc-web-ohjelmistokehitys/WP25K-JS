/*
HUOM! Jos olet stressaantunut siitä, miten ehdit tekemään kaikki kurssin tehtävät voit jättää tämän harjoituksen tekemättä. 

- Jokainen funktio on rikki – se ei palauta odotettua tulosta.
- Käytä console.log():ia, breakpointteja ja tarkkaa analyysiä debuggaamiseen.
- Testaa jokainen funktio annetuilla testitapauksilla.
- Korjaa virheet ja varmista odotettu lopputulos.
*/

"use strict";

/* Tehtävä 1: Korjaa tervehdysfunktio  
Pitäisi palauttaa "Hello, [name]!".  
Jos nimeä ei anneta, palautetaan "Hello, guest!".  
*/

function greet(name) {
  return "Hello, " + name;
}

// Debuggaus ja testaus
console.log(greet("Alan")); // Odotettu: "Hello, Alan!"
console.log(greet()); // Odotettu: "Hello, guest!"

/* Tehtävä 2: Korjaa hinnan laskenta  
Pitäisi kertoa `price` arvolla `quantity`.  
Jos `quantity` puuttuu, oletuksena käytetään `1`.  
*/

function calculatePrice(price, quantity) {
  return price + quantity;
}

// Debuggaus ja testaus
console.log(calculatePrice(10, 2)); // Odotettu: 20
console.log(calculatePrice(5)); // Odotettu: 5

/* Tehtävä 3: Korjaa parillisuuden tarkistus  
Pitäisi palauttaa `true`, jos luku on parillinen, muuten `false`.  
*/

function isEven(num) {
  return num % 2 = 0;
}

// Debuggaus ja testaus
console.log(isEven(4)); // Odotettu: true
console.log(isEven(7)); // Odotettu: false

/* Tehtävä 4: Korjaa silmukan virhe (Off-by-One)  
Pitäisi tulostaa luvut 1–5.  
*/

function countToFive() {
  for (let i = 1; i <= 5; i--) {
    console.log(i);
  }
}

// Debuggaus ja testaus
countToFive(); // Odotettu: 1, 2, 3, 4, 5

/* Tehtävä 5: Korjaa taulukon indeksointivirhe  
Pitäisi palauttaa taulukon viimeinen alkio.  
*/

function getLastItem(arr) {
  return arr[arr.length + 1];
}

// Debuggaus ja testaus
console.log(getLastItem(["apple", "banana", "cherry"])); // Odotettu: "cherry"
console.log(getLastItem([1, 2, 3])); // Odotettu: 3

/* Tehtävä 6: Debuggaa JSON-jäsentäminen  
Pitäisi jäsentää JSON-merkkijono olioksi tai näyttää virheilmoitus.  
*/ 


function parseJson(jsonString) {
    return JSON.stringify(jsonString);
}

// Debuggaus ja testaus
console.log(parseJson('{"name": "Alice", "age": 25}')); // Odotettu: { name: "Alice", age: 25 }
console.log(parseJson("{ name: 'Alice', age: 25 }")); // Odotettu: Virhe ja null



/* Tehtävä 7: Debuggaa olion ominaisuuden hakeminen  
Pitäisi palauttaa käyttäjän sähköposti oliosta.  
*/

function getEmail(user) {
    return user.mail;
}

// Debuggaus ja testaus
console.log(getEmail({ name: "Ahmed", email: "ahmed@example.com" })); // Odotettu: "alice@example.com"

/* Tehtävä 8: Debuggaa sisäkkäiset funktiokutsut  
Pitäisi palauttaa luvun neliö sen jälkeen, kun se on tuplattu.  
*/

function double(num) {
  return num + num;
}

function square(num) {
  return num * 2;
}

function processNumber(num) {
  return square(double(num));
}

// Debuggaus ja testaus
console.log(processNumber(3)); // Odotettu: 36
console.log(processNumber(4)); // Odotettu: 64

/* Tehtävä 9: Korjaa lajittelualgoritmi  
Pitäisi palauttaa taulukko numeroista nousevassa järjestyksessä.  
*/

function sortNumbers(arr) {
  return arr.sort((a, b) => b - a);
}

// Debuggaus ja testaus
console.log(sortNumbers([5, 3, 9, 1])); // Odotettu: [1, 3, 5, 9]
console.log(sortNumbers([20, 100, 3, 50])); // Odotettu: [3, 20, 50, 100]

/* Tehtävä 10: Debuggaa sisäkkäinen tietojen käsittely  
Pitäisi palauttaa lista käyttäjien koko nimistä.  
*/

const users = [
  { firstName: "Annie", lastName: "Easley" },
  { firstName: "Grace", lastName: "Hopper" },
];

function getFullNames(users) {
    return users.map(user => user.firstName + " " + user.LastName);
}

// Debuggaus ja testaus
console.log(getFullNames(users)); // Odotettu: ["Alice Smith", "Bob Jones"]

/* Tehtävä 11: Debuggaa olion tietojen muunnos  
Pitäisi palauttaa taulukko käyttäjien nimistä sisäkkäisestä tietorakenteesta.  
*/

const userData = {
  users: [
    { id: 1, name: "Annie" },
    { id: 2, name: "Grace" },
  ],
};

function getUserNames(data) {
  return data.users.map((user) => user.name);
}

// Debuggaus ja testaus
console.log(getUserNames(userData)); // Odotettu: ["Alice", "Bob"]

/* Tehtävä 12: Debuggaa monimutkainen funktio  
Pitäisi suodattaa tuotteet, joiden hinta on alle annetun arvon.  
*/

const products = [
    { name: "Laptop", price: 1200 },
    { name: "Phone", price: 800 },
    { name: "Mouse", price: 50 },
];

function filterProducts(products, maxPrice) {
    return products.filter(product => product.price < maxPrice);
}

// Debuggaus ja testaus
console.log(filterProducts(products, 1000)); // Odotettu: ["Phone", "Mouse"]

/* Tehtävä 13: Debuggaa LocalStorage-tallennus  
Pitäisi tallentaa käyttäjäobjekti LocalStorageen ja hakea se.  
*/
function saveUser(user) {
    localStorage.setItem("user", user);
}

function getUser() {
    return localStorage.getItem("user");
}

// Debuggaus ja testaus
saveUser({ name: "Linda", age: 39 });
console.log(getUser()); // Odotettu: { name: "Linda", age: 39 }

/* Tehtävä 14: Debuggaa taulukon käsittelysilmukka  
Pitäisi palauttaa taulukko numeroiden neliöistä.  
*/
function squareNumbers(arr) {
    let squaredArr = [];
    for (let i = 0; i <= arr.length; i++) {
        squaredArr.push(arr[i] * arr[i]);
    }
    return squaredArr;
}

// Debuggaus ja testaus
console.log(squareNumbers([1, 2, 3, 4])); // Odotettu: [1, 4, 9, 16]

/* Tehtävä 15: Debuggaa sisäkkäisten olioiden käsittely  
Pitäisi palauttaa taulukko opiskelijoista, joiden pistemäärä on yli 80.  
*/

const students = [
    { name: "Marlyn", score: 90 },
    { name: "Kathleen", score: 75 },
    { name: "Ruth", score: 85 },
];

function getTopStudents(studentList) {
    return studentList.map(student => {
        if (student.score > 80) {
            return student.name;
        }
    });
}

// Debuggaus ja testaus
console.log(getTopStudents(students)); // Odotettu: ["Marlyn", "Ruth"]
