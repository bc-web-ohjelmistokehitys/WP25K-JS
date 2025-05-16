# Virheenkäsittely JavaScriptissä

Virheiden käsittely (eng. _error handling_) ja debuggaus ovat keskeisiä osia JavaScript-kehityksessä, erityisesti aloittelijoille. Ymmärtämällä virhetyyppejä ja käyttämällä oikeita työkaluja voit tehdä virheenkorjauksesta helpompaa ja tehokkaampaa.

## Yleisten virheiden tunnistaminen

```javascript
function getOddYears(years) {
  return yeas.filter((year) => year % 2 !== 0); // Kirjoitusvirhe muuttujanimessä
}
```

Tässä koodissa kirjoitusvirhe (`yeas` pitäisi olla `years`) aiheuttaa virheen. Tällaisen virheen tunnistaminen on ensimmäinen askel debuggaamisessa.

## Debuggaustekniikat

### console.log debuggaamiseen

`console.log()` on yksi yksinkertaisimmista mutta tehokkaimmista työkaluista virheiden selvittämiseen. Sen avulla voit tarkastella muuttujia ja seurata, miten tieto kulkee ohjelmassasi.

```javascript
function getOddYears(years) {
  console.log(years); // Tarkista syöte
  const oddYears = years.filter((year) => year % 2 !== 0);
  console.log(oddYears); // Tarkista tulos
  return oddYears;
}
```

### debugger-lauseen käyttö

`debugger`-lause pysäyttää koodin suorituksen ja avaa selaimen debuggaustyökalut. Sen avulla voit tutkia muuttujia, askeltaa koodia ja seurata, miten tiedot muuttuvat suoritusvaiheessa.

```javascript
function getOddYears(years) {
  debugger; // Suoritus pysähtyy tähän selaimessa
  return years.filter((year) => year % 2 !== 0);
}
```

### Ajoaikaisten virheiden käsittely try-catch-lohkolla

`try-catch`-lohkot mahdollistavat virheiden käsittelyn suorituksen aikana. Sen sijaan, että skripti kaatuisi, voit napata virheen ja käsitellä sen hallitusti.

```javascript
function getOddYears(years) {
  try {
    return years.filter((year) => year % 2 !== 0);
  } catch (error) {
    console.error("Tapahtui virhe:", error);
  }
}
```

```javascript
try {
  let result = riskyOperation(); // Kokeillaan riskialtista operaatiota
  console.log("Toiminto onnistui:", result);
} catch (error) {
  console.error("Virhe tapahtui toiminnon aikana:", error); // Käsitellään virhe
} finally {
  console.log("Toimintoyritys suoritettu."); // Suoritetaan aina
}
```

## Virhetyyppien ymmärtäminen JavaScriptissä

JavaScriptissä on useita sisäänrakennettuja virhetyyppejä, jotka auttavat tunnistamaan ongelmien luonteen. Näiden virheiden tunnistaminen nopeuttaa virheiden löytämistä ja korjaamista.

### SyntaxError (Syntaksivirhe)

Tapahtuu, kun koodissa on kirjoitus- tai rakenteellinen virhe, kuten puuttuva sulku.

```javascript
function myFunction() {
  console.log("Hello World"); // Korjattu puuttuva sulku
}
```

### ReferenceError (Viitevirhe)

Tapahtuu, kun viitataan muuttujaan, jota ei ole määritelty.

```javascript
function showName() {
  console.log(name); // Heittää ReferenceErrorin, jos 'name' ei ole määritelty
}
```

### TypeError (Tyyppivirhe)

Tapahtuu, kun yritetään käyttää väärää tietotyyppiä, kuten kutsutaan ei-funktiota tai yritetään käyttää ominaisuutta undefined-arvolla.

```javascript
let someText = "Hello, World!";
someText.split(); // Toimii normaalisti

someText = null;
someText.split(); // Heittää TypeErrorin: nullilla ei ole split-metodia
```

### RangeError (Aluevirhe)

Tapahtuu, kun arvo ylittää sallitun alueen, esimerkiksi kun yritetään luoda taulukko negatiivisella pituudella.

```javascript
let numbers = new Array(-5); // Heittää RangeErrorin: taulukon pituus ei voi olla negatiivinen
```

### URIError (URI-virhe)

Tapahtuu, kun globaaleja URI-käsittelyfunktioita, kuten `encodeURI()` tai `decodeURI()`, käytetään virheellisesti.

```javascript
decodeURI("%"); // Heittää URIErrorin: Virheellinen URI-komponentti
```

## Vianetsinnän vinkit

- **Käytä `console.log`:ia strategisesti**, jotta voit tarkastella koodin tilaa ja etenemistä.
- **Hyödynnä selaimen kehittäjätyökalujen breakpointteja ja debuggausta**, jotta voit askeltaa koodin läpi.
- **Lue virheilmoitukset huolellisesti;** ne sisältävät usein arvokkaita vihjeitä virheen sijainnista ja syystä.

## Oman virheen heittäminen (Throwing Custom Errors)

Voit myös `throw`-komennolla heittää omia virheitä. Tämä on hyödyllistä, kun haluat tarkistaa tiettyjä ehtoja ja keskeyttää toiminnon, jos ne eivät täyty.

```javascript
function checkNumber(num) {
  if (isNaN(num)) {
    throw new Error("Syötteen täytyy olla numero");
  }
  console.log("Numero on", num);
}

try {
  checkNumber("testi"); // Heittää virheen, koska "testi" ei ole numero
} catch (error) {
  console.error(error.message); // Tulostaa: "Syötteen täytyy olla numero"
}
```

`throw`-avainsana luo mukautetun virheen, keskeyttää funktion suorituksen ja siirtää ohjauksen `catch`-lohkoon.

```javascript
throw new Error("Mukautettu virheilmoitus");
```
