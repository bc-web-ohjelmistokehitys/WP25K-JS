# Ehtolauseet

Ehtolauseet ovat olennainen osa JavaScript-ohjelmointia, mahdollistaen päätöksenteon tiettyjen ehtojen perusteella. Tässä on strukturoitu lähestymistapa näiden käsitteiden ymmärtämiseen.

## Perus if-lauseke

If-lauseke arvioi ehtoa ja suorittaa koodilohkot sen perusteella, onko ehto tosi:

```js
if (ehto) {
  // Koodi, joka suoritetaan, jos ehto on tosi
}
```

Esimerkiksi:

```js
const ikä = 20;

if (ikä >= 18) {
  console.log("Aikuinen");
}
```

Tämä koodi tulostaa "Aikuinen", jos ikä on 18 tai enemmän.

## Else-lohkon lisääminen

Käsitelläksesi tapaukset, joissa if-ehto ei ole tosi, käytä else-lohkoa:

```js
const pistemäärä = 65;

if (pistemäärä >= 75) {
  console.log("Läpäisty");
} else {
  console.log("Hylätty");
}
```

Tämä tulostaa "Hylätty" pistemäärille, jotka ovat alle 75.

## Useita vaihtoehtoja varten käytä else if

Jos mahdollisia lopputuloksia on enemmän kuin kaksi, käytä else if:

```js
const lämpötila = 30;

if (lämpötila > 30) {
  console.log("Ulkona on kuuma");
} else if (lämpötila === 30) {
  console.log("Ulkona on lämmin");
} else {
  console.log("Ulkona on viileää");
}
```

## Loogiset operaattorit

Loogiset operaattorit mahdollistavat useiden ehtojen yhdistämisen yhdeksi if-lauseeksi.

### && (JA) -operaattori

&&-operaattori tarkistaa, että kaikki ehdot ovat totta. Koko ehto on tosi vain, jos jokainen yksittäinen ehto on tosi.

```javascript
let age = 20;
let hasID = true;

if (age >= 18 && hasID) {
  console.log("You are allowed to enter.");
}
```

Tässä esimerkissä molempien ehtojen täytyy olla tosia, jotta viesti "You are allowed to enter." tulostetaan.

### || (TAI) -operaattori

||-operaattori tarkistaa, onko ainakin yksi ehto tosi. Koko ehto on tosi, jos jokin yksittäinen ehto on tosi.

```javascript
let age = 16;
let hasPermission = true;

if (age >= 18 || hasPermission) {
  console.log("You can proceed.");
} else {
  console.log("You cannot proceed.");
}
```

Tässä esimerkissä riittää, että joko ikä on vähintään 18 tai henkilöllä on lupa, jotta hän voi jatkaa.

### ! (EI) -operaattori

!-operaattori kääntää ehdon arvon. Jos ehto on tosi, ! tekee siitä epätoden, ja jos se on epätosi, ! tekee siitä toden.

```javascript
let isRaining = false;

if (!isRaining) {
  console.log("You can go outside.");
}
```

Tässä esimerkissä, koska isRaining on epätosi, !isRaining on tosi, joten viesti "You
can go outside." tulostetaan.

## Ternary operator eli ternäärinen / ehdollinen operaattori

Ternary operator on lyhyt tapa kirjoittaa if...else-lause. Se on hyödyllinen yksinkertaisiin ehtoihin, jotka halutaan arvioida yhdellä rivillä.

```
ehto ? ilmaisuJosTrue : ilmaisuJosFalse
```

```javascript
let age = 20;
let message = age >= 18 ? "Aikuinen" : "Lapsi";

console.log(message); // Tulostaa: "Aikuinen"
```

Tässä esimerkissä, jos age on 18 tai enemmän, message saa arvon "Aikuinen"; muuten se saa arvon "Lapsi".

## Parillisten ja parittomien numeroiden tunnistaminen

Parillisen tai parittoman numeron tunnistamiseksi käytä jakojäännösoperaattoria (%):

```js
// Tarkistetaan parilliset numerot
8 % 2; // 0, siis parillinen
10 % 2; // 0, siis parillinen

// Tarkistetaan parittomat numerot
7 % 2; // 1, siis pariton
9 % 2; // 1, siis pariton
```

## switch-lause

switch-lause on vaihtoehto if-lauseille, kun sinun on tarkistettava useita ehtoja. Se on erityisen hyödyllinen, kun vertaat samaa muuttujaa eri arvoihin.

```js
switch (ilmaisu) {
  case arvo1:
    // Koodi, joka suoritetaan, kun ilmaisu on yhtä kuin arvo1
    break;
  case arvo2:
    // Koodi, joka suoritetaan, kun ilmaisu on yhtä kuin arvo2
    break;
  // Lisää tapauksia tarvittaessa
  default:
  // Koodi, joka suoritetaan, jos mitään tapausta ei vastaa
}
```

```js
let päivä = 3;

switch (päivä) {
  case 1:
    console.log("Maanantai");
    break;
  case 2:
    console.log("Tiistai");
    break;
  case 3:
    console.log("Keskiviikko");
    break;
  case 4:
    console.log("Torstai");
    break;
  case 5:
    console.log("Perjantai");
    break;
  case 6:
    console.log("Lauantai");
    break;
  case 7:
    console.log("Sunnuntai");
    break;
  default:
    console.log("Virheellinen päivä");
}
```

## Yksinkertaistaminen paluulauseilla

Funktioita voidaan yksinkertaistaa poistamalla else, jos paluulause lopettaa funktion:

```js
function onAikuinen(ikä) {
  if (ikä >= 18) {
    return true;
  }
  return false;
}
```

Tämä funktio palauttaa välittömästi arvon tosi, jos ikä on 18 tai enemmän; muussa tapauksessa se palauttaa epätosi. Voit kirjoittaa saman koodin myös lyhyemmin, esimerkki alla.

## Boolean arvon palautuminen suoraan

Palautettaessa boolean-arvoa, voit yksinkertaistaa funktiota palauttamalla itse ehdon:

```js
function onAikuinen(ikä) {
  return ikä >= 18;
}
```

Tämä palauttaa tosi tai epätosi sen mukaan, täyttyykö ikä ehto.

## Milloin käyttää switchiä ja milloin if-lausetta?

- Käytä `switch`-lauseita vertailtaessa samaa muuttujaa tai ilmaisua useisiin vakioarvoihin. Esimerkiksi viikonpäiviä on rajallinen määrä.
- Käytä `if`-lauseita, kun arvioidaan erilaisia ehtoja tai arvojen välejä.

## Ligatuurien ymmärtäminen

Ligatuurit ovat visuaalinen parannus joissain koodieditoreissa, joissa tietyt merkkien yhdistelmät näytetään yhtenäisessä glyyfissä:

- `>=` (suurempi tai yhtä suuri kuin)
- `<=` (pienempi tai yhtä suuri kuin)
- `===` (tiukka yhtäsuuruus)
- `!==` (tiukka eriarvoisuus)

Katso näistä lisää täältä: [Font Ligatures in VS Code - Youtube short](https://www.youtube.com/watch?v=ToIjkT54jko&ab_channel=VisualStudioCode)
