# Oliot

JavaScriptin oliot mahdollistavat **datan kokoelmien** tallentamisen ja **todellisten olentojen mallintamisen**. Oliot kokoavat yhteen toisiinsa liittyvän datan (**ominaisuudet**) ja toiminnot (**metodit**), mikä tekee datan käsittelystä tehokkaampaa.

## Olioiden luominen

JavaScriptissä on useita tapoja luoda olioita.

### Olion literaali

Helpoin tapa luoda olio on käyttää **olion literaalia**.

```js
const animal = {
  name: "Kettu",
  species: "Koiraeläin",
  age: 4,
};
```

### Konstruktori-funktiot

**Konstruktori-funktion** avulla voit luoda useita samanrakenteisia olioita.

```js
function Animal(name, species, age) {
  this.name = name;
  this.species = species;
  this.age = age;
}

const animal1 = new Animal("Susi", "Koiraeläin", 5);
```

### ES6-luokkasyntaksi

JavaScript toi **luokat** (classes) ES6:ssa tarjoten rakenteellisemman tavan luoda olioita.

```js
class Animal {
  constructor(name, species, age) {
    this.name = name;
    this.species = species;
    this.age = age;
  }
}

const animal2 = new Animal("Peura", "Kasvinsyöjä", 2);
```

---

## Ominaisuuksiin käsiksi pääsy ja niiden muokkaus

Ominaisuuksiin pääsee käsiksi kahdella tavalla:

- **Piste-notaatio** → Yleisin ja selkein tapa.
- **Hakasulkunotaatio** → Tarvitaan, jos ominaisuuden nimi sisältää erikoismerkkejä tai on tallennettu muuttujaan.

### Piste-notaatio

```js
console.log(animal.name); // Tulostaa: Kettu
animal.age = 5; // Päivittää iän
```

### Hakasulkunotaatio

```js
const property = "species";
console.log(animal[property]); // Tulostaa: Koiraeläin

animal["age"] = 6;
console.log(animal["age"]); // Tulostaa: 6
```

---

## Ominaisuuksien lisääminen ja poistaminen

Oliot ovat **dynaamisia**, eli ominaisuuksia voi lisätä tai poistaa milloin tahansa.

### Ominaisuuden lisääminen

```js
animal.habitat = "Metsä";
console.log(animal.habitat); // Tulostaa: Metsä
```

### Ominaisuuden poistaminen

Käytä `delete`-operaattoria poistaaksesi ominaisuuden.

```js
delete animal.age;
console.log(animal.age); // Tulostaa: undefined
```

---

## Olion metodit

**Olion metodi** on funktio, joka on tallennettu olion sisälle.

```js
const animal = {
  name: "Kettu",
  speak: function () {
    console.log(`Olen ${this.name}!`);
  },
};

animal.speak(); // Tulostaa: Olen Kettu!
```

### Lyhyt syntaksi (ES6)

```js
const animal = {
  name: "Kettu",
  speak() {
    console.log(`Olen ${this.name}!`);
  },
};

animal.speak(); // Tulostaa: Olen Kettu!
```

---

## Oliot taulukon sisällä

Olioita voi tallentaa taulukkoon, mikä helpottaa **monen olion hallintaa**.

```js
const zoo = [
  { name: "Kettu", species: "Koiraeläin" },
  { name: "Kotka", species: "Lintu" },
  { name: "Karhu", species: "Nisäkäs" },
];

console.log(zoo[1].name); // Tulostaa: Kotka
```

---

## Avainsana `this`

Avainsana **`this`** viittaa olioon, joka kutsuu funktiota.

```js
const animal = {
  name: "Kettu",
  speak() {
    console.log(this); // Viittaa animal-olioon
  },
};

animal.speak();
```

---

## Yhteenveto

- **Piste-notaatio** on helpoin tapa käyttää ja muokata ominaisuuksia.
- **Hakasulkunotaatio** on hyödyllinen, kun ominaisuuden nimi on tallennettu muuttujaan.
- **Metodit** ovat olion sisällä olevia funktioita, jotka käyttävät **`this`**-avainsanaa viitatakseen olioon.
- **Olioita voidaan tallentaa taulukkoon**, jolloin tieto säilyttää rakenteensa.
