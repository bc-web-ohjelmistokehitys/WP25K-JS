# LocalStorage JavaScriptissä

LocalStorage on _web storage -rajapinta_, jonka avulla voit tallentaa **avain-arvo** -pareja selaimeen. Toisin kuin evästeet, LocalStorage **säilyy**, vaikka selain suljetaan ja avataan uudelleen.

## LocalStoragen pääominaisuudet

- **Pysyvä tallennus** – Tiedot säilyvät, kunnes ne poistetaan manuaalisesti.
- **Verkkotunnuskohtainen** – Tiedot ovat käytettävissä vain siitä verkkotunnuksesta, joka ne tallensi.
- **Tallennusraja** – Voidaan tallentaa noin **5MB** dataa.
- **Synkroninen API** – Toiminnot suoritetaan välittömästi, mikä voi vaikuttaa suorituskykyyn suurilla tietomäärillä.

## Perustoiminnot LocalStoragessa

LocalStorage tarjoaa neljä päämenetelmää: `setItem()`, `getItem()`, `removeItem()` ja `clear()`.

### Tietojen tallentaminen (`setItem()`)

Käytä `setItem()`-metodia tallentaaksesi tietoa LocalStorageen.

```javascript
localStorage.setItem("username", "JohnDoe");
localStorage.setItem("theme", "dark");
```

Jos tallennat **olioita tai taulukoita**, muunna ne merkkijonoksi `JSON.stringify()`-menetelmällä.

```javascript
const user = { name: "John", age: 30 };
localStorage.setItem("user", JSON.stringify(user));
```

### Tietojen hakeminen (`getItem()`)

Käytä `getItem()`-metodia hakeaksesi tallennettuja tietoja.

```javascript
const username = localStorage.getItem("username");
console.log(username); // Tulostaa: JohnDoe
```

Jos haet **olion tai taulukon**, käytä `JSON.parse()` palauttaaksesi alkuperäisen rakenteen.

```javascript
const userData = JSON.parse(localStorage.getItem("user"));
console.log(userData.name); // Tulostaa: John
```

### Tietojen poistaminen (`removeItem()`)

Poistaaksesi yksittäisen tiedon:

```javascript
localStorage.removeItem("username");
```

### Kaikkien tietojen tyhjentäminen (`clear()`)

Poistaaksesi kaikki tallennetut tiedot:

```javascript
localStorage.clear();
```

## Esimerkki: Käyttäjäasetusten tallentaminen ja hakeminen

### Asetusten tallentaminen

```javascript
function savePreferences() {
  const theme = document.querySelector("#theme").value;
  const username = document.querySelector("#username").value;

  localStorage.setItem("theme", theme);
  localStorage.setItem("username", username);

  alert("Asetukset tallennettu!");
}
```

### Asetusten hakeminen

```javascript
function loadPreferences() {
  const savedTheme = localStorage.getItem("theme");
  const savedUsername = localStorage.getItem("username");

  if (savedTheme && savedUsername) {
    document.querySelector("#theme").value = savedTheme;
    document.querySelector("#username").value = savedUsername;
    alert(`Tervetuloa takaisin, ${savedUsername}!`);
  }
}
```

### Asetusten poistaminen

```javascript
function clearPreferences() {
  localStorage.removeItem("theme");
  localStorage.removeItem("username");
  alert("Asetukset poistettu!");
}
```

## LocalStoragen käyttökohteet

- **Käyttäjäasetusten tallentaminen** (esim. teema, kieli).
- **Pienen datan välimuistiin tallentaminen** API-kutsujen vähentämiseksi.
- **Käyttäjän edistymisen seuraaminen** peleissä tai lomakkeissa.
- **Väliaikaisen istuntodatan tallennus** sivun uudelleenlatausten välillä.

## LocalStoragen rajoitukset

- **Rajoitettu tallennustila** (~5MB).
- **Synkroninen estäminen** – Toiminnot keskeyttävät skriptin suorituksen.
- **Turvariski** – Tiedot ovat JavaScriptin kautta luettavissa (XSS-altistus).
- **Sama alkuperä -käytäntö** – Dataa voi käyttää vain samalta verkkotunnukselta ja protokollalta.

## LocalStoragen vianetsintä ja hallinta

Voit tarkastella LocalStorage-dataa selaimen kehittäjätyökaluista:

1. Avaa **Kehittäjätyökalut** (`F12` tai `Hiiren oikea → Tarkastele`).
2. Siirry **Application**-välilehteen.
3. Valitse **LocalStorage** sivupalkista nähdäksesi tallennetun datan.

## LocalStoragen parhaat käytännöt

1. **Rajoita tallennettavan datan määrää** – Tallenna vain pieniä, ei-herkkiä tietoja.
2. **Puhdista käyttäjän syöte** – Estä XSS-haavoittuvuudet.
3. **Toteuta vanhenemislogiikka** – LocalStorage ei tue automaattista vanhenemista.
4. **Tarkista selainyhteensopivuus** – Vaikka laajasti tuettu, varmista tuki ennen käyttöä:

   ```javascript
   if (typeof Storage !== "undefined") {
     console.log("LocalStorage on tuettu");
   } else {
     console.error("LocalStorage ei ole tuettu tässä selaimessa.");
   }
   ```
