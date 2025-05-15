# Ketjuttaminen (Chaining) JavaScriptissä

Ketjuttaminen on tehokas konsepti JavaScriptissä erityisesti taulukoiden käsittelyssä. Se mahdollistaa useiden metodien yhdistämisen yhdeksi selkeäksi ja helposti luettavaksi lauseeksi, mikä tekee koodista tehokkaampaa ja tiiviimpää. Tämä lähestymistapa on hyödyllinen silloin, kun halutaan suorittaa monimutkaisia toimintoja mahdollisimman vähillä koodiriveillä.

## Esimerkki: Taulukkometodien ketjuttaminen

Ketjuttamista voi käyttää esimerkiksi taulukkometodien kuten `map()`, `filter()`, `reduce()` ja `join()` kanssa. Tässä on esimerkki, jossa käytetään yhdessä `map()`- ja `join()`-metodeja:

```js
const users = [
  { id: 1, name: "Sam Doe" },
  { id: 2, name: "Alex Blue" },
];

const csv = users.map((user) => user.name).join(", ");
console.log(csv); // "Sam Doe, Alex Blue"
```

Tässä esimerkissä:

- `map()` luo uuden taulukon käyttäjien nimistä.
- `join(', ')` yhdistää nimet yhdeksi merkkijonoksi pilkuilla eroteltuna.

---

# Valinnainen ketjutus (Optional chaining `?.`)

**Valinnainen ketjutus** on JavaScriptin ominaisuus, jonka avulla voidaan turvallisesti käyttää syvästi sisäkkäisiä ominaisuuksia ilman pelkoa ajonaikaisista virheistä. Se palauttaa arvon `undefined`, jos viitattu ominaisuus on `null` tai `undefined`, eikä heitä virhettä. Tämä yksinkertaistaa koodia työskennellessä monimutkaisten ja sisäkkäisten tietorakenteiden kanssa.

## Esimerkki: Sisäkkäisten ominaisuuksien käyttö

Ilman valinnaista ketjutusta syvästi sisäkkäisten ominaisuuksien käyttäminen voi johtaa virheisiin, jos jokin väliominaisuus puuttuu. Valinnainen ketjutus poistaa tarpeen tarkistaa jokainen askel erikseen.

```js
const user = {
  details: { name: { firstName: "Sam" } },
};

console.log(user.details?.name?.firstName); // "Sam"
```

Jos `user.details` tai `user.details.name` on `undefined` tai `null`, koodi palauttaa turvallisesti arvon `undefined` eikä heitä virhettä.

---

## Valinnainen ketjutus taulukoiden kanssa

Valinnaista ketjutusta voidaan käyttää myös taulukoiden kanssa elementtien turvalliseen käyttöön ja virheiden välttämiseen, jos taulukko tai sen elementit ovat `undefined`.

```js
const data = { temperatures: [-3, 14, 4] };
const firstValue = data.temperatures?.[0]; // -3
```

Tässä esimerkissä `?.[0]` hakee turvallisesti ensimmäisen arvon `temperatures`-taulukosta. Jos `data.temperatures` olisi `null` tai `undefined`, `firstValue` saisi arvoksi `undefined`.

---

## Valinnainen ketjutus funktiokutsuissa

Voit käyttää valinnaista ketjutusta funktioiden turvalliseen kutsumiseen varmistaen, että funktio kutsutaan vain, jos se on olemassa.

```js
const person = { name: "Sam" };
const upperCasedName = person.name?.toUpperCase(); // "SAM"
```

Tässä esimerkissä `toUpperCase()`-metodia kutsutaan vain, jos `person.name` on olemassa. Jos `name` olisi `null` tai `undefined`, koodi palauttaisi `undefined` eikä aiheuttaisi virhettä.

---

## Tärkeimmät asiat

- **Ketjuttaminen**: yhdistää useita taulukko- tai objektimetodeja yhdeksi selkeäksi operaatioksi.
- **Valinnainen ketjutus (`?.`)**: mahdollistaa turvallisen pääsyn sisäkkäisiin ominaisuuksiin, taulukon alkioihin tai funktioihin ilman virheitä tilanteessa, jossa jokin ominaisuus on `undefined` tai `null`.
