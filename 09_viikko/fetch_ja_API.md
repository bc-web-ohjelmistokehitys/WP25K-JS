# Fetch ja API\:t JavaScriptissä

JavaScriptin `fetch`-API\:lla tehdään HTTP-pyyntöjä palvelimille, jolloin voidaan olla vuorovaikutuksessa API-rajapintojen (Application Programming Interfaces) kanssa. `fetch`-toiminnon käyttö on tärkeä taito, kun halutaan hakea tietoa ulkoisista lähteistä, kuten tietokannoista tai verkkopalveluista.

## Perus Fetch-pyyntö

Yksinkertainen `fetch`-pyyntö koostuu URL-osoitteen kutsumisesta ja vastauksen käsittelystä. Metodi `.then()` käsittelee onnistuneen vastauksen, ja `.catch()` virhetilanteet.

```javascript
fetch("https://api.example.com/data")
  .then((response) => response.json()) // Muunna vastaus JSON-muotoon
  .then((data) => console.log(data)) // Tulosta data
  .catch((error) => console.error("Virhe:", error)); // Käsittele virheet
```

### Eri osien selitys:

- `fetch()`: Käynnistää HTTP-pyynnön.
- `.then((response) => response.json())`: Muuntaa vastauksen JSON-muotoon.
- `.then((data) => console.log(data))`: Käsittelee palvelimelta saadun datan.
- `.catch((error) => console.error("Virhe:", error))`: Käsittelee mahdolliset virheet.

---

## Käyttämällä Async/Await

`async/await`-syntaksi tarjoaa luettavamman ja siistimmän tavan käsitellä asynkronisia pyyntöjä verrattuna `.then()`-ketjutukseen. `fetch` toimii hyvin `async/await`in kanssa ja yksinkertaistaa syntaksia.

```javascript
async function fetchData() {
  try {
    const response = await fetch("https://api.example.com/data");
    const data = await response.json(); // Muunna vastaus JSON-muotoon
    console.log(data); // Tulosta data
  } catch (error) {
    console.error("Virhe:", error); // Käsittele virheet
  }
}

fetchData();
```

### Eri osien selitys:

- `async function`: Määrittelee asynkronisen funktion.
- `await fetch()`: Keskeyttää suorittamisen, kunnes `fetch()`-lupaus täyttyy.
- `await response.json()`: Muuntaa vastauksen JSON-muotoon.
- `try/catch`: Käsittelee onnistuneet ja epäonnistuneet pyynnöt yhdellä selkeällä rakenteella.

---

## Ilmaisia API-rajapintoja harjoitteluun

Tässä muutamia ilmaisia API\:eja, joilla voit harjoitella pyyntöjen tekemistä:

1. **JSONPlaceholder** – Ilmainen REST-API testaukseen ja prototypointiin.

   - **URL**: `https://jsonplaceholder.typicode.com/posts`
   - **Esimerkki**: Hae tekaistuja postauksia.

2. **The Cat API** – API, joka palauttaa satunnaisia kuvia kissoista.

   - **URL**: `https://api.thecatapi.com/v1/images/search`
   - **Esimerkki**: Hae satunnaisia kissakuvia.

3. **OpenWeatherMap** – Hae reaaliaikaisia säätietoja mistä tahansa sijainnista.

   - **URL**: `https://api.openweathermap.org/data/2.5/weather?q=London&appid=your_api_key`
   - **Esimerkki**: Hae säätilatietoja määritellylle kaupungille.

> **Huom:** OpenWeatherMap vaatii API-avaimen, jonka saa rekisteröitymällä palveluun.

## Suosituksia aloittelijoille

- **Aloita yksinkertaisesti**: Aloita tekemällä perus GET-pyyntöjä julkisiin API-rajapintoihin, kuten JSONPlaceholder tai The Cat API. Nämä ovat aloittelijaystävällisiä eivätkä vaadi tunnistautumista.
- **Käsittele virheet hallitusti**: Käytä aina `.catch()`-menetelmää lupausten (promises) kanssa tai `try/catch`-lohkoja `async/await`-koodissa. Tämä estää sovellusta kaatumasta virhetilanteissa.
- **Harjoittele API-dokumentaation lukemista**: On tärkeää osata lukea ja ymmärtää API-dokumentaatiota. Se auttaa sinua muodostamaan pyynnöt oikein, valitsemaan oikeat päätepisteet (endpoints) ja ymmärtämään vastausmuodot.
- **Harjoittele JSON\:n käsittelyä**: Useimmat API\:t palauttavat datan JSON-muodossa, joten totuttele muuntamaan JSON JavaScript-olioiksi ja käsittelemään tietoa sujuvasti.
