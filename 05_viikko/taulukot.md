# **Taulukot (Arrays) JavaScriptissä**

Taulukot ovat **järjestettyjä tietokokoelmia**, joiden avulla voit **tallentaa useita arvoja** yhteen muuttujaan. Ne helpottavat listojen käsittelyä ja sisältävät monia valmiita menetelmiä yleisiin tehtäviin.

## Taulukoiden luominen

Taulukot voivat sisältää **kaikenlaista dataa**, kuten numeroita, merkkijonoja ja jopa toisia taulukoita.

```js
const emptyArray = []; // Tyhjä taulukko
const numbers = [10, 20, 30, 40]; // Numerot
const fruits = ["apple", "banana", "cherry"]; // Merkkijonot
const mixed = [42, "hello", true, null]; // Sekatyypit
const nestedArray = [
  [1, 2],
  [3, 4],
]; // Sisäkkäiset taulukot
```

## Alkioiden lisääminen ja poistaminen

### Lisää taulukkoon

#### `.push()` – Lisää loppuun

```js
let groceries = ["bread", "milk"];
groceries.push("eggs");
console.log(groceries); // ["bread", "milk", "eggs"]
```

#### `.unshift()` – Lisää alkuun

```js
groceries.unshift("butter");
console.log(groceries); // ["butter", "bread", "milk", "eggs"]
```

### Poista taulukosta

#### `.pop()` – Poistaa viimeisen alkion

```js
groceries.pop();
console.log(groceries); // ["butter", "bread", "milk"]
```

#### `.shift()` – Poistaa ensimmäisen alkion

```js
groceries.shift();
console.log(groceries); // ["bread", "milk"]
```

### Muokkaa tiettyä kohtaa

#### `.splice()` – Lisää, poistaa tai korvaa alkioita

Sulkujen sisään määritellään ensin indeksipaikka, sitten kuinka monta poistetaan (valinnainen) ja lopuksi mitä lisätään (valinnainen).

```js
let colors = ["red", "blue", "yellow"];
colors.splice(1, 1, "green"); // Poistaa 1 alkion indeksistä 1, lisää "green"
console.log(colors); // ["red", "green", "yellow"]
```

#### `.slice()` – Poimii osan taulukosta muuttamatta alkuperäistä

```js
let animals = ["dog", "cat", "elephant", "lion"];
let someAnimals = animals.slice(1, 3); // Poimii indeksistä 1–2
console.log(someAnimals); // ["cat", "elephant"]
console.log(animals); // ["dog", "cat", "elephant", "lion"] (ei muuttunut)
```

## Taulukoiden yhdistäminen ja laajentaminen

#### `.concat()` – Yhdistää kaksi tai useampia taulukoita

```js
const firstHalf = ["a", "b", "c"];
const secondHalf = ["d", "e", "f"];
const combined = firstHalf.concat(secondHalf);
console.log(combined); // ["a", "b", "c", "d", "e", "f"]
```

#### `.map()` – Luo uusi taulukko muuttamatta alkuperäistä

```js
const prices = [10, 20, 30];
const discountedPrices = prices.map((price) => price * 0.9); // 10 % alennus
console.log(discountedPrices); // [9, 18, 27]
console.log(prices); // [10, 20, 30] (Ei muuttunut)
```

## Arvojen etsiminen taulukoista

#### Etsi arvon sijainti

#### `.indexOf()` – Ensimmäinen esiintymä

```js
const numbers = [5, 10, 15, 10];
console.log(numbers.indexOf(10)); // 1
```

#### `.lastIndexOf()` – Viimeinen esiintymä

```js
console.log(numbers.lastIndexOf(10)); // 3
```

#### Etsi ensimmäinen sopiva arvo

#### `.find()` – Palauttaa ensimmäisen ehdon täyttävän alkion

```js
const ages = [12, 18, 22, 15];
const firstAdult = ages.find((age) => age >= 18);
console.log(firstAdult); // 18
```

#### Etsi kaikki sopivat arvot

#### `.filter()` – Palauttaa kaikki ehdon täyttävät alkiot

```js
const adults = ages.filter((age) => age >= 18);
console.log(adults); // [18, 22]
```

## Taulukkojen muuntaminen

#### Suorita funktio jokaiselle alkiolle

#### `.map()` – Muokkaa jokaista alkiota muuttamatta alkuperäistä

```js
const names = ["alice", "bob", "charlie"];
const capitalizedNames = names.map((name) => name.toUpperCase());
console.log(capitalizedNames); // ["ALICE", "BOB", "CHARLIE"]
```

#### Yhdistä alkiot yhdeksi arvoksi

#### `.reduce()` – Laskee taulukon arvojen summan

```js
const bills = [20, 30, 50];
const total = bills.reduce((sum, bill) => sum + bill, 0);
console.log(total); // 100
```

## Taulukon läpikäynti

#### Käy läpi alkiot `.forEach()`-menetelmällä

```js
const tasks = ["clean", "cook", "shop"];
tasks.forEach((task) => console.log(`Tehtävä: ${task}`));
```

#### Käy läpi taulukko `for`-silmukalla

```js
for (let i = 0; i < tasks.length; i++) {
  console.log(tasks[i]);
}
```

#### Yksinkertaisempi silmukka `for...of`-rakenteella

```js
for (const task of tasks) {
  console.log(task);
}
```

## Ehtojen tarkistaminen taulukosta

#### Tarkista, täyttääkö vähintään yksi alkio ehdon

#### `.some()` – Täsmääkö vähintään yksi?

```js
const scores = [45, 80, 90, 60];
const hasHighScore = scores.some((score) => score >= 85);
console.log(hasHighScore); // true
```

#### Tarkista, täyttävätkö kaikki alkiot ehdon

#### `.every()` – Täsmäävätkö kaikki?

```js
const allPassed = scores.every((score) => score >= 50);
console.log(allPassed); // false
```

## Yleisiä virheitä ja parhaat käytännöt

### `return`-lauseen unohtaminen `.map()` ja `.filter()`-rakenteissa

```js
// ❌ Väärin
const doubled = numbers.map((num) => {
  num * 2;
});
console.log(doubled); // [undefined, undefined, undefined]

// ✅ Oikein
const correctDoubled = numbers.map((num) => num * 2);
console.log(correctDoubled); // [10, 20, 30, 40]
```

### `.splice()`-metodin väärinkäyttö, kun `.slice()` olisi parempi

```js
// ❌ Splice (muokkaa alkuperäistä)
const original = ["apple", "banana", "cherry"];
const removed = original.splice(1, 1); // Poistaa "banana"
console.log(original); // ["apple", "cherry"]

// ✅ Slice (ei muuta alkuperäistä)
const copy = original.slice(0, 2);
console.log(copy); // ["apple", "cherry"]
```

### Const vai let taulukkoa luodessa?

Kun käytät taulukon luomisessa `const`, JavaScript 'lukitsee' luomasi taulukon kyseiseen nimeen. `Let` ei tätä tee.

```js
let myArray = [1, 2, 3];
myArray = [4, 5, 6]; // Taulukon muuttaminen toiseksi taulukoksi onnistuu
```

```js
const myArray = [1, 2, 3];
myArray = [4, 5, 6]; // ERROR! taulukkoa ei saa vaihtaa toiseksi

// Voit vaihtaa kaikki arvot, mutta siihen tarvitaan metodia
```

Jos käytät `let` sanaa, nimeen liitetty arvo voi vaihtua myös muuksi kuin taulukoksi

```js
let myArray = [3, 5, 6];
myArray = "example string"; // Tämä toimii
```

```js
const myArray = [3, 5, 6];
myArray = "example string"; // ERROR! myArray voi olla vain alkuperäinen taulukko
```

**Vaikka käyttäisit `const` taulukkoa luodessa, voit edelleen muokata arvoja taulukon sisällä eli esimerkiksi lisätä ja poistaa sieltä arvoja.**

Yleisesti ottaen kannattaa käyttää `const` luodessaan taulukkoa, jotta ei vahingossa tee muutoksia tähän kyseiseen taulukkoon.

### Muokkaavat vs. ei-muokkaavat metodit

- **Muokkaavat metodit** (muuttavat alkuperäistä taulukkoa): `.push()`, `.pop()`, `.splice()`, `.shift()`, `.unshift()`
- **Ei-muokkaavat metodit** (palauttavat uuden taulukon): `.map()`, `.filter()`, `.reduce()`

**Paras käytäntö:** Suosi **ei-muokkaavia** metodeja, ellei alkuperäistä taulukkoa ole tarkoitus muuttaa.
