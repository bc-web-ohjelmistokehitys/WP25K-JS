### ** Tehtävä 1: Luo funktio kahden luvun yhteenlaskemiseksi **

```javascript
// Ratkaisu 1: Tavallinen funktiomäärittely
function add(a, b) {
  return a + b;
}

// Ratkaisu 2: Funktioilmaisu
const addExpression = function (a, b) {
  return a + b;
};

// Ratkaisu 3: Nuolifunktio
const addArrow = (a, b) => a + b;

// Testaa funktio
console.log(add(10, 5));
console.log(addExpression(10, 5));
console.log(addArrow(10, 5));
```

---

### ** Tehtävä 2: Funktio tarkistamaan, onko luku parillinen **

```javascript
// Ratkaisu 1: Tavallinen funktio
function isEven(num) {
  return num % 2 === 0;
}

// Ratkaisu 2: Nuolifunktio implisiittisellä palautuksella
const isEvenArrow = (num) => num % 2 === 0;

// Testaa funktio
console.log(isEven(4)); // true
console.log(isEvenArrow(7)); // false
```

---

### ** Tehtävä 3: Funktio merkkijonon pituuden selvittämiseksi **

```javascript
// Ratkaisu 1: Tavallinen funktio
function getLength(str) {
  return str.length;
}

// Ratkaisu 2: Nuolifunktio implisiittisellä palautuksella
const getLengthArrow = (str) => str.length;

// Testaa funktio
console.log(getLength("JavaScript")); // 10
console.log(getLengthArrow("JavaScript")); // 10
```

---

### ** Tehtävä 4: Funktio merkkijonon isoiksi alkukirjaimiksi muuntamiseen **

```javascript
// Ratkaisu 1: Tavallinen funktio
function capitalize(str) {
  return str[0].toUpperCase() + str.slice(1).toLowerCase();
}

// Ratkaisu 2: Nuolifunktio
const capitalizeArrow = (str) =>
  str[0].toUpperCase() + str.slice(1).toLowerCase();

// Testaa funktio
console.log(capitalize("javascript")); // JavaScript
console.log(capitalizeArrow("javascript")); // JavaScript
```

---

### ** Tehtävä 5: Funktio satunnaisluvun luomiseen **

```javascript
// Ratkaisu 1: Tavallinen funktio
function generateRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Ratkaisu 2: Nuolifunktio
const generateRandomNumberArrow = (min, max) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

// Testaa funktio
console.log(generateRandomNumber(1, 10)); // Satunnainen luku väliltä 1–10
console.log(generateRandomNumberArrow(1, 10)); // Satunnainen luku väliltä 1–10
```

---

### ** Tehtävä 6: Funktio sanan korvaamiseen lauseessa **

```javascript
// Ratkaisu 1: Tavallinen funktio
function replaceWord(sentence, oldWord, newWord) {
  return sentence.replace(oldWord, newWord);
}

// Ratkaisu 2: Nuolifunktio
const replaceWordArrow = (sentence, oldWord, newWord) =>
  sentence.replace(oldWord, newWord);

// Testaa funktio
console.log(replaceWord("I like apples.", "apples", "bananas")); // I like bananas.
console.log(replaceWordArrow("I like apples.", "apples", "bananas")); // I like bananas.
```

---

### ** Tehtävä 7: Funktio tarkistamaan, sisältääkö merkkijono tietyn sanan **

```javascript
// Ratkaisu 1: Tavallinen funktio
function containsWord(sentence, word) {
  return sentence.includes(word);
}

// Ratkaisu 2: Nuolifunktio implisiittisellä palautuksella
const containsWordArrow = (sentence, word) => sentence.includes(word);

// Testaa funktio
console.log(containsWord("JavaScript is fun!", "fun")); // true
console.log(containsWordArrow("JavaScript is fun!", "fun")); // true
```

---

### ** Tehtävä 8: Funktio luvun pyöristämiseen **

```javascript
// Ratkaisu 1: Tavallinen funktio
function roundNumber(num, precision) {
  return parseFloat(num.toFixed(precision));
}

// Ratkaisu 2: Nuolifunktio
const roundNumberArrow = (num, precision) => parseFloat(num.toFixed(precision));

// Testaa funktio
console.log(roundNumber(19.56789, 2)); // 19.57
console.log(roundNumberArrow(19.56789, 0)); // 20
```

---

### ** Tehtävä 9: Funktio suurimman luvun etsimiseen **

```javascript
// Ratkaisu 1: Tavallinen funktio
function findMax(a, b, c) {
  return Math.max(a, b, c);
}

// Ratkaisu 2: Nuolifunktio
const findMaxArrow = (a, b, c) => Math.max(a, b, c);

// Testaa funktio
console.log(findMax(12, 7, 20)); // 20
console.log(findMaxArrow(12, 7, 20)); // 20
```

---

### ** Tehtävä 10: Funktio merkkijonon trimmaamiseen ja muuntamiseen **

```javascript
// Ratkaisu 1: Tavallinen funktio
function cleanAndTransform(str) {
  return str.trim().toLowerCase().replace("powerful", "amazing");
}

// Ratkaisu 2: Nuolifunktio
const cleanAndTransformArrow = (str) =>
  str.trim().toLowerCase().replace("powerful", "amazing");

// Testaa funktio
console.log(cleanAndTransform("   JavaScript is powerful!   ")); // javascript is amazing!
console.log(cleanAndTransformArrow("   JavaScript is powerful!   ")); // javascript is amazing!
```
