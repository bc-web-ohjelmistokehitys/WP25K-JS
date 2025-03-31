# Perusasiat funktioista

Funktiot ovat olennainen osa ohjelmointia ja niitä käytetään monissa eri tilanteissa. Ne auttavat jakamaan koodin pienempiin ja helpommin hallittaviin osiin. Tällä tavoin voit eriyttää koodin toiminnallisuuden ja käyttää sitä uudelleen eri osissa ohjelmaa. Koodista tulee modulaarista.

Toiston vähentäminen on yksi tärkeä syy käyttää funktioita. Kun luot toiminnallisuutta sisältävän funktion, voit kutsua sitä uudelleen eri paikoissa ohjelmaa ilman tarvetta kirjoittaa samaa koodia uudelleen. Tämä säästää aikaa ja vähentää virheiden riskiä.

## Funktio ja parametrit

Usein funktiolle annetaan jotain tietoja, joita se käsittelee. Funktiota määriteltäessä näitä kutsutaan parametreiksi. Kun alla olevaa funktiota summa käytetään uudelleen, sille annetaan yhteenlaskettavat luvut.

```js
function summa(x, y) {
  return x + y;
}
```

Tämä koodinpätkä määrittelee funktion nimeltä **summa**.
Tämä tarkoittaa, että voit nyt kutsua **summa(1, 3)**, joka palauttaa **4**.
Voit suorittaa sen uudelleen eri arvoilla, kuten summa(2, 5), ja se palauttaa laskun 2 + 5, joka on 7.

## Tuloksen palauttaminen

JavaScriptissä tieto täytyy erikseen tuoda ulos eli palauttaa funktiosta. Jos unohdat kirjoittaa `return`, funktiosi palauttaa `undefined`.
`return`-avainsana myös lopettaa funktion suorituksen.

```js
function summa(x, y) {
  return x + y;
  console.log("Hei maailma"); // tätä EI KOSKAAN suoriteta, koska return on jo lopettanut funktion
}
```

## Implisiittinen palautus

Kun unohdat kirjoittaa `return`-avainsanan funktion sisällä JavaScriptissä, saat implisiittisen `return undefined`. Sana "implisiittinen" tässä tarkoittaa, että se päätellään mutta sitä ei ole erityisesti ilmaistu. Tarkoittaen, että **return undefined** -lauseketta ei ollut, mutta saamme silti tuloksena `undefined`.

Usein on tilanteita, joissa koodi ei toimi ja konsolissa lukee `undefined`. Silloin kannattaa varmistaa, että funktiot palauttavat jotain.

JavaScriptin nuolifunktiossa voi käyttää implisiittistä palautusta, jos funktio palauttaa arvon välittömästi. Alla olevan esimerkin kaltaisessa tilanteessa voi käyttää implisiittistä palautusta:

```js
const onLuvallinen = (ika) => {
  return ika >= 18;
};
```

Implisiittinen palautus:

1. poista aaltosulkeet
2. poista return-avainsana

```js
const onLuvallinen = (ika) => ika >= 18;
```

Käytä implisiittistä palautusta vain silloin, kun funktion runko on yksi rivi ja lyhyt. **Älä koskaan uhraa koodin luettavuutta ja selkeyttä käyttääksesi tiettyä ominaisuutta.**

## Nuolifunktiot

Nuolifunktiot ovat hieman lyhyempi tapa kirjoittaa funktiota. Niitä kannattaa käyttää yhden rivin ilmaisuihin.

Alla on funktio nimeltä add ja se palauttaa kahden luvun summan.

```js
function add(a, b) {
  return a + b;
}
```

Sama nuolifunktiona ilmaistuna:

```js
add = (a, b) => {
  return a + b;
};
```

Sama nuolifunktiona käyttäen implisiittistä palautusta:

```js
const add = (a, b) => a + b;
```

## Funktion kutsuminen

Kun funktio on määritelty, sitä pitää kutsua, jotta se tekee mitään.

JavaScript-funktiota kutsutaan antamalla sen nimi ja mahdolliset argumentit sulkeiden sisällä.

```js
//Funktion määrittely
function greet(name) {
  console.log("Heippa, " + name + "!");
}

// Funktiokutsu
greet("Sinikka"); // Tulostaa "Heippa Sinikka!"
greet("Marjatta"); // Tulostaa "Heippa Marjatta!"
```

Tässä `greet`-funktiota kutsutaan antamalla sille argumenttina nimi. Kun funktiota kutsutaan, se suorittaa sen sisällä olevat lauseet. Ennen sitä funktio ei varsinaisesti tee yhtään mitään.

Nuolifunktiota kutsutaan samalla tavalla.

```js
const greet = (name) => {
  console.log("Hello, " + name + "!");
};

// Funktiokutsu
greet("Sinikka"); // Tulostaa "Heippa Sinikka!"
greet("Marjatta"); // Tulostaa "Heippa Marjatta!"
```

### Parametri vs. argumentti?

Kun funktiota määritellään, sille määritellään **parametrit**. Kun funktiota kutsutaan ja sille annetaan arvoja, niitä kutsutaan **argumenteiksi**.

## Muista funktioiden käytöstä nämä kolme asiaa:

1. Jos funktiolle on tarkoitus antaa jotain tietoa käsiteltäväksi, se laitetaan **parametriksi**. Alla ne ovat kirjaimet **a ja b**

   ```js
   function tipCounter(a, b) {
     return a * b;
   }
   tipCounter(140, 1.15);
   ```

2. Jos funktiosta halutaa tietoa ulos, se täytyy **palauttaa**. Huomaa alla sana **return**. Returnin jälkeen funktiosta poistutaan.

   ```js
   function tipCounter(a, b) {
     return a * b;
   }
   tipCounter(140, 1.15);
   ```

3. Jotta funktio tapahtuu, sitä pitää **kutsua**. Huomaa alimpana funktiokutsu **tipCounter(140, 1.15)**
   ```js
   function tipCounter(a, b) {
     return a * b;
   }
   tipCounter(140, 1.15);
   ```

- Jos mitään ei näy, kannattaa käyttää console.logia!
