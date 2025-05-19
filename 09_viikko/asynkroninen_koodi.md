# Asynkroninen JavaScript

Asynkroninen toiminta JavaScriptissä mahdollistaa sen, että ohjelma voi suorittaa muuta koodia samalla kun se odottaa asynkronisten operaatioiden (kuten HTTP-pyyntöjen tai tiedostonkäsittelyn) valmistumista. Tämä varmistaa, että verkkosovellukset pysyvät reagoivina eivätkä "jäädy" pitkien toimintojen aikana.

## Promiset (lupaukset)

Promise on olio, joka edustaa asynkronisen toiminnon lopullista valmistumista (onnistuminen tai epäonnistuminen). Sen sijaan että siirrettäisiin palautefunktioita (callback), promiset mahdollistavat niiden liittämisen toiminnon valmistumisen jälkeen.

```javascript
new Promise((resolve, reject) => {
  setTimeout(() => resolve("Tulos"), 1000);
});
```

Promisella on kolme tilaa:

- **Pending (kesken):** Toiminto ei ole vielä valmistunut.
- **Fulfilled (onnistunut):** Toiminto valmistui onnistuneesti.
- **Rejected (epäonnistunut):** Toiminto epäonnistui.

Palautefunktiot voidaan liittää promiselle seuraavasti: `.then()` onnistumiseen, `.catch()` epäonnistumiseen ja `.finally()` aina suoritettavaan koodiin:

```js
fetch("https://api.example.com")
  .then((response) => response.json()) // Käsittelee onnistumisen
  .catch((error) => console.error(error)) // Käsittelee virheen
  .finally(() => console.log("Toiminto valmis")); // Suoritetaan aina
```

Tämä rakenne tekee asynkronisesta logiikasta helpommin luettavaa ja hallittavaa.

## Async/Await

`async/await` on nykyaikainen tapa käsitellä promiseja. Se mahdollistaa asynkronisen koodin kirjoittamisen synkronisen koodin näköiseksi, mikä parantaa luettavuutta ja hallittavuutta.

- `async`-avainsana tekee funktiosta asynkronisen ja palauttaa automaattisesti promisen.
- `await`-avainsana keskeyttää funktion suorittamisen, kunnes promise on ratkaistu.

```javascript
async function fetchData() {
  try {
    let response = await fetch("https://api.example.com/data");
    let data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("Virhe:", error);
  }
}
```

`async/await` sopii erinomaisesti tilanteisiin, joissa on useita toisiinsa liittyviä asynkronisia tehtäviä. Se auttaa välttämään monikerroksisia `.then()`-ketjuja.

## Callbackit

Callback on funktio, joka siirretään toiselle funktiolle argumenttina. Sitä käytettiin paljon vanhemmassa JavaScript-koodissa asynkronisten toimintojen käsittelyyn.

```javascript
function fetchData(callback) {
  setTimeout(() => {
    callback("Data haettu");
  }, 1000);
}

fetchData((data) => console.log(data));
```

### Callback-helvetti

Callback-helvetti (tunnetaan myös nimellä "Pyramid of Doom") tapahtuu, kun palautefunktioita (callbackeja) laitetaan sisäkkäin, mikä tekee koodista vaikealukuisen ja vaikeasti ylläpidettävän. Tätä tapahtuu, kun useat asynkroniset toiminnot ovat riippuvaisia edellisistä.

```javascript
getData(function (a) {
  getMoreData(a, function (b) {
    getMoreData(b, function (c) {
      getMoreData(c, function (d) {
        console.log(d);
      });
    });
  });
});
```

Jokainen funktio tarvitsee edellisen palautteen tuloksen, mikä johtaa syvään sisäkkäisyyteen ja vaikeasti seurattavaan rakenteeseen — erityisesti virheidenkäsittelyn ja virheenkorjauksen kannalta.

### Callback-helvetin purkaminen Promisella

Promisien avulla voit välttää callback-helvetin ja tehdä koodistasi selkeämpää ja helpompaa seurata:

```js
getData()
  .then((result) => getMoreData(result))
  .then((result) => getMoreData(result))
  .then((result) => console.log(result))
  .catch((error) => console.error(error));
```

```js
async function processData() {
  try {
    let result = await getData();
    result = await getMoreData(result);
    console.log(result);
  } catch (error) {
    console.error(error);
  }
}

processData();
```

---

## Datan hakeminen (Fetching data)

Yksi yleisimmistä asynkronisista toiminnoista on datan haku API-rajapinnoista. JavaScriptissä on kaksi päämenetelmää tähän: promiset ja async/await.

### Käyttäen promiseja

```js
function fetchData() {
  fetch("https://api.example.com/data")
    .then((response) => response.json()) // Käsittele vastausdata
    .then((data) => console.log(data)) // Tulosta tulos
    .catch((error) => console.error("Virhe:", error)); // Käsittele virheet
}

fetchData();
```

### Käyttäen async/await

```js
async function fetchDataAsync() {
  try {
    const response = await fetch("https://api.example.com/data");
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("Virhe:", error);
  }
}

fetchDataAsync();
```

---

### Milloin käyttää Promisea tai Async/Awaitia

- **Promiset:** Sopivat yksinkertaisiin asynkronisiin tehtäviin tai tilanteisiin, joissa halutaan ketjuttaa useita toimintoja.
- **Async/Await:** Tarjoaa siistimmän ja luettavamman tavan käsitellä monimutkaisempia prosesseja, kuten sisäkkäisiä lupauksia tai laajaa virheenkäsittelyä.

Molemmat lähestymistavat ovat toimivia – valinta riippuu koodityylistäsi ja tehtävän monimutkaisuudesta.

---

## Virheiden käsittely asynkronisessa koodissa

Kun käsittelet asynkronista koodia, on tärkeää käsitellä virheet oikein:

- **Promise** käyttää `.catch()` virheiden käsittelyyn.
- **Async/Await** käyttää `try...catch`-lohkoja virheiden käsittelyyn.

```js
async function fetchDataWithErrorHandling() {
  try {
    const response = await fetch("https://api.example.com/data");
    if (!response.ok) {
      throw new Error("Verkkovastaus ei ollut ok");
    }
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("Hakivirhe:", error);
  }
}
```
