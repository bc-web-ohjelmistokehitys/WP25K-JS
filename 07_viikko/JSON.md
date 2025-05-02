# JSON:n käyttö JavaScriptissä

JSON (**J**ava**S**cript **O**bject **N**otation) on **kevyt tiedostomuoto**, jota käytetään tietojen vaihtoon **palvelimen ja asiakkaan** välillä tai eri ohjelmointikielten kesken. Vaikka JSON pohjautuu JavaScriptiin, se on **kieliriippumaton formaatti**, minkä vuoksi sitä käytetään laajalti verkkokehityksessä.

## JSON:n perusteet

JSON esittää jäsenneltyä tietoa **avain-arvo-pareina** ja tukee seuraavia tietotyyppejä:

- **Oliot** – Sulkujen `{}` sisällä, sisältävät avain-arvo-pareja.
- **Taulukot** – Hakasulkeiden `[]` sisällä, sisältävät useita arvoja.
- **Merkkijonot** – Täytyy olla **tuplalainausmerkeissä** `""`.
- **Numerot, totuusarvot (Boolean) ja `null`** – Samalla tavalla kuin JavaScriptissä.

### Esimerkki JSON-datasta

```json
{
  "name": "John Doe",
  "age": 30,
  "isStudent": false,
  "courses": ["Math", "Science"],
  "address": {
    "city": "New York",
    "zipcode": "10001"
  }
}
```

## Muuntaminen JSON:n ja JavaScript-olioiden välillä

Kun käytät JSON:ia JavaScriptissä, sinun täytyy usein **muuntaa** tietoa JavaScript-olioiden ja JSON-merkkijonojen välillä.

### JavaScript-olio JSON-muotoon (`JSON.stringify()`)

Kun lähetetään tietoa verkkoselaimesta palvelimelle, JavaScript-olio pitää muuntaa **JSON-merkkijonoksi** käyttämällä `JSON.stringify()`.

```js
const person = {
  name: "John Doe",
  age: 30,
};

const jsonString = JSON.stringify(person);
console.log(jsonString);
// Tulostus: '{"name":"John Doe","age":30}'
```

### JSON-merkkijono JavaScript-olioksi (`JSON.parse()`)

Kun vastaanotetaan JSON-dataa palvelimelta, se täytyy muuntaa JavaScript-olioksi `JSON.parse()`-funktiolla.

```js
const jsonString = '{"name":"John Doe","age":30}';

const personObject = JSON.parse(jsonString);
console.log(personObject);
// Tulostus: { name: "John Doe", age: 30 }
```

## JSON-tiedon tallennus ja haku

JSON:ia käytetään usein tietojen tallentamiseen **LocalStorageen** tai lähettämiseen **API:n kautta**.

### JSON-tiedon tallentaminen LocalStorageen

```js
const settings = { theme: "dark", language: "English" };

// Muunna olio JSON-muotoon ja tallenna
localStorage.setItem("settings", JSON.stringify(settings));
```

### JSON-datan hakeminen ja jäsentäminen

```js
const storedSettings = JSON.parse(localStorage.getItem("settings"));
console.log(storedSettings.theme);
// Tulostus: "dark"
```

## JSON:n käyttötarkoitukset

- **API:t ja verkkopalvelut** – JSON on yleinen muoto tietojen vaihdossa asiakkaan ja palvelimen välillä.
- **Konfiguraatiotiedostot** – Käytetään asetuksissa ja sovellusmäärityksissä (esim. `package.json` Node.js:ssä).
- **Tietojen tallennus** – NoSQL-tietokannat kuten MongoDB käyttävät JSON-tyylistä muotoa.

## JSON:n hyödyt

- **Monialustainen** – Toimii lähes kaikilla ohjelmointikielillä.
- **Helppolukuinen** – Yksinkertainen ja helposti ymmärrettävä.
- **Kevyt** – Kompaktimpi kuin XML, vähentää verkkoliikennettä.

## JSON:n rajoitukset ja erikoistietojen käsittely

### 1. JSON ei tue funktioita eikä `undefined`-arvoja

```js
const data = {
  name: "Alice",
  greet: function () {
    return "Hello!";
  },
};

console.log(JSON.stringify(data));
// Tulostus: '{"name":"Alice"}' (Funktiot poistetaan)
```

### 2. Päivämäärien käsittely JSON:ssa

JSON ei tue Date-olioita, joten ne täytyy tallentaa **merkkijonoina** ja muuntaa takaisin Date-olioiksi.

```js
const person = {
  name: "John Doe",
  birthdate: new Date().toISOString(), // Tallennetaan merkkijonona
};

const jsonString = JSON.stringify(person);
console.log(jsonString);
// Tulostus: '{"name":"John Doe","birthdate":"2024-02-26T12:00:00.000Z"}'

// Muunnetaan takaisin Date-olioksi
const parsedPerson = JSON.parse(jsonString);
parsedPerson.birthdate = new Date(parsedPerson.birthdate);

console.log(parsedPerson.birthdate);
// Tulostus: Date-olio
```

## Yhteenveto

- **JSON on kevyt ja helposti luettava formaatti**, jota käytetään tietojen siirtoon.
- **`JSON.stringify()`** muuntaa JavaScript-olion JSON-merkkijonoksi.
- **`JSON.parse()`** muuntaa JSON-merkkijonon JavaScript-olioksi.
- **LocalStorage ja API:t** tallentavat ja välittävät usein JSON-tietoa.
- **JSON ei tue funktioita eikä `undefined`-arvoja**, ja päivämäärät pitää tallentaa merkkijonoina.
