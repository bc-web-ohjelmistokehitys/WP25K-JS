# Merkkijonot

JavaScriptin merkkijonot ovat perustietotyyppiä, joita käytetään tekstin tallentamiseen ja käsittelyyn. Voit määrittää merkkijonoja käyttäen joko yksinkertaisia lainausmerkkejä (' '), tuplalainausmerkkejä (" "), tai backtickejä (``).

```js
"Tämä on merkkijono";
"Tämä on toinen merkkijono!";
`Tämäkin on merkkijono!`;
```

## Template-merkkijono

Yksinkertaisten ja kaksinkertaisten lainausmerkkien lisäksi JavaScript tarjoaa template-merkkijonot, jotka ovat ympäröity backtickeillä``. Template-merkkijonot tarjoavat kehittyneitä ominaisuuksia, kuten merkkijonon interpolointi ja moniriviset merkkijonot.

```js
`Tämä on template-merkkijono`;
```

### Merkkijonon interpolointi

Merkkijonon interpolointi mahdollistaa lausekkeiden, kuten muuttujien, upottamisen merkkijonoon. Tämä saavutetaan käyttämällä `${lauseke}` syntaksia:

```js
let kieli = "JavaScript";
`Olen oppimassa ${kieli}`; // Tuloste: "Olen oppimassa JavaScript";
```

Muista, että merkkijonon interpolointi toimii vain **` eli backtickeillä**. Jos kokeilet sitä ja se ei toimi, tarkista, että käytät juuri backtickejä etkä yksinkertaisia tai kaksoislainausmerkkejä.

### Moniriviset merkkijonot

Template-merkkijonot tukevat monirivisiä merkkijonoja, mikä ei ollut mahdollista yksinkertaisilla tai tuplalainausmerkeillä:

```js
let monirivinenMerkkijono = `Tämä on monirivinen
merkkijono JavaScriptissä
käyttäen template-merkkijonoa.`;
```

## Merkkijonon ominaisuudet ja metodit

JavaScriptin merkkijonoilla on joukko ominaisuuksia ja metodeja, jotka mahdollistavat niiden manipuloinnin ja niille tehdyt kyselyt.

### .length

Käytä `.length` löytääksesi merkkijonon merkkien lukumäärän:

```js
let teksti = "Hei Maailma";
console.log(teksti.length); // Tuloste: 11
```

### Muuntaminen isoiksi ja pieniksi kirjaimiksi

- **`.toUpperCase()`:** Muuntaa kaikki merkit isoiksi kirjaimiksi.
- **`.toLowerCase()`:** Muuntaa kaikki merkit pieniksi kirjaimiksi.

```js
let huuto = "hiljaa".toUpperCase(); // "HILJAA"
let kuiskaus = "ISO".toLowerCase(); // "iso"
```

### Alimerkkijonojen erottaminen

`substring()` -metodia käytetään osan merkkijonosta erottamiseen:

```js
let lause = "JavaScript";
let alimerkki = lause.substring(1, 4); // "ava"
```

Metodi ottaa kaksi argumenttia, `alkuIndeksi` ja `loppuIndeksi`, missä `loppuIndeksi` on valinnainen.

### Merkkien käyttö

Yksittäisten merkkien käyttö merkkijonossa käyttäen `hakasulkeita []`:

```js
let kieli = "JavaScript";
console.log(kieli[0]); // "J"
```

### Yhdistäminen Plus Operaattorilla

Käytä `+` -operaattoria yhdistämään merkkijonoja:

```js
let kokoNimi = "John" + " " + "Doe"; // "John Doe"
```

#### `+=` Operaattori

`+=` operaattori lisää merkkijonon olemassa olevaan:

```js
let viesti = "Hei";
viesti += " Maailma"; // "Hei Maailma"
```

### Välilyöntien poisto

`trim()` -metodi poistaa välilyönnit merkkijonon molemmista päistä:

```js
let nimi = " Sami Sininen ";
console.log(nimi.trim()); // "Sami Sininen"
```

### Merkkijonojen etsiminen ja tarkistaminen

- **`.startsWith()`:** Tarkistaa, alkaako merkkijono määritellyillä merkeillä.
- **`.endsWith()`:** Tarkistaa, päättyykö merkkijono määritellyillä merkeillä.
- **`.includes()`:** Tarkistaa, sisältääkö merkkijono määritellyn alimerkkijonon.

```js
let lause = "JavaScriptin oppiminen on hauskaa!";
console.log(lause.startsWith("JavaScriptin")); // true
console.log(lause.endsWith("hauskaa!")); // true
console.log(lause.includes("oppiminen")); // true
```

### Merkkijonojen jakaminen

`split()` -metodi jakaa merkkijonon osasarakkeiksi:

```js
let tiedot = "omena,appelsiini,banaani";
let hedelmät = tiedot.split(","); // ["omena", "appelsiini", "banaani"]
```

Voit määritellä minkä perusteella jako tehdään.

```js
let tiedot = "omena&appelsiini&banaani";
let hedelmät = tiedot.split("&"); // ["omena", "appelsiini", "banaani"]
```

### Alimerkkijonojen korvaaminen

- **`.replace()`:** Korvaa ensimmäisen esiintymän määritetyllä arvolla.
- **`.replaceAll()`:** Korvaa kaikki määritetyt arvot.

```js
let teksti = "Omenat ovat pyöreitä, ja omenat ovat mehukkaita.";
let uusiTeksti = teksti.replace("Omenat", "Appelsiinit"); // "Appelsiinit ovat pyöreitä, ja omenat ovat mehukkaita."
```

```js
let teksti = "Kirsikat ovat punaisia. Kirsikat ovat lempimarjani.";
let uusiTeksti = teksti.replaceAll("Kirsikat", "Mansikat"); // "Mansikat ovat punaisia. Mansikat ovat lempimarjani."
```

### Alimerkkijonojen erottaminen slice()-metodilla

`slice()` -metodi palauttaa osan merkkijonosta:

```js
let lause = "Nopea ruskea kettu hyppää laiskan koiran yli.";
console.log(lause.slice(10, 19)); // "ruskea ket"
```
