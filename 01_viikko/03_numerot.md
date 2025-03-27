# Numerot

- 1
- 2
- -5
- 3.5
- 2000
- 2021
- -23.51

JavaScriptissä nämä kaikki katsotaan **Numeroiksi**. Olivatpa ne sitten negatiivisia tai positiivisia, tai sisältivätpä ne desimaalipisteen tai ei, ne kuuluvat numeroiden kategoriaan.

**Desimaaliluvussa käytetään pistettä ei pilkkua!**

## Numeroiden muuntaminen merkkijonoiksi

Vaikka tätä ei kovin usein tehdä, on numeron muuttaminen merkkijonoksi melko suoraviivaista JavaScriptissä. Tämä voidaan saavuttaa käyttämällä `.toString()` -metodia. Harkitse esimerkkiä, jossa määritellään muuttuja nimeltä `vastaus`, jolle on annettu numeerinen arvo `42`. Näin voit muuntaa tämän numeron merkkijonoksi:

```js
let vastaus = 42;
let merkkijonoVastaus = vastaus.toString(); // Muuntaa "42":ksi
```

Tässä tapauksessa `merkkijonoVastaus` on merkkijonoesitys numerosta 42.

## NaN

Joskus saatat törmätä `NaN` -arvoon JavaScript-koodissasi. Tämä tarkoittaa **Not a number** ja osoittaa yleensä ongelmaa koodissasi, usein liittyen sopimattomiin tietotyyppeihin käytettäessä laskutoimituksia. Esimerkiksi yritettäessä kertoa merkkijono luvulla, mikä yleensä ei ole suositeltavaa, tuloksena on `NaN`:

```js
// Esimerkki - älä tee näin:
"abc" * 4; // Tämä antaa NaN:n
```

`NaN`:n kohtaaminen viittaa yleensä tietotyyppivirheeseen, kuten merkkijonon muuttamisen unohtamiseen numeroksi. Yleinen skenaario liittyy olion ominaisuuteen, joka vahingossa jäänyt määrittelemättä eli on `undefined` johtuen kirjoitusvirheestä, ja sitä käytetään sitten laskutoimituksissa kuin se olisi kelvollinen numero. Tätä aihealuetta käsitellään tarkemmin tulevissa luvuissa, erityisesti kun käydään läpi olioita ja niiden ominaisuuksia.

## isNaN

`isNaN()`-funktio tarkistaa, onko annettu arvo "Not-a-Number" (ei-numero) ja palauttaa `true` jos se ei ole numero, muuten se palauttaa `false`

```javascript
console.log(isNaN(123)); // false, koska 123 on numero
console.log(isNaN("abc")); // true, koska 'abc' ei ole numero
console.log(isNaN("123")); // false, koska '123' voidaan muuntaa numeroksi
```

Tämä toimii hyvin tilanteissa, joissa haluat tarkistaa, onko muuttuja numero vai ei ennen kuin teet siihen liittyviä laskutoimituksia. Voit käyttää sitä ehtolauseissa (näistä lisää seuraavassa osassa)

```js
if (isNaN(muuttujaX)) {
  //tämä toteutuu, kun muuttujan arvo ei ole numero.
}
```

## Muunna merkkijonot numeroiksi

JavaScriptissä merkkijonojen muuntaminen numeroiksi on perustavanlaatuinen ja usein esiintyvä operaatio. Tämä saavutetaan yleensä käyttämällä Number.parseInt() -funktiota. Havainnollistaaksemme, harkitse tilannetta, jossa meillä on merkkijono str, jolla on arvo "42" ja meidän on muunnettava se numeeriseksi arvoksi.

```js
let str = "42";
let numeerinenArvo = Number.parseInt(str, 10); // Muuntaa arvoon 42
```

Number.parseInt() -funktio on osa globaalia Number-objektia ja sitä käytetään muuntamaan merkkijono kokonaisluvuksi. Siihen tarvitaan kaksi argumenttia:

```js
Number.parseInt(merkkijono, kantaluku);
```

Ensimmäinen parametri on merkkijono, jonka haluat muuntaa numeroksi. Toinen argumentti on `kantaluku`, jota käytetään muunnossa.
`Kantaluku` on numeroiden järjestelmän perusta, jota haluat käyttää. Useimmissa käyttötapauksissa haluttu kantaluku on **10**, mikä edustaa desimaalijärjestelmää.

Toinen esimerkki kantaluvusta on **2**, joka edustaa binäärijärjestelmää (tietokoneiden käyttämä numeerinen järjestelmä).

### Vanhentuneet huomautukset

`Number.parseInt()` ja `parseInt()` ovat täsmälleen sama asia. Suosi `Number.parseInt()` -funktiota `parseInt()`-funktion sijaan.

Jonkin aikaa sitten parseInt(merkkijono, kantaluku) oli ainoa tapa muuntaa numeroita, kuitenkin myöhemmin tämä funktio on kloonattu Number-objektin alle ja siitä tuli Number.parseInt(merkkijono, kantaluku) osana pyrkimystä ryhmitellä samankaltaisia funktioita yhteen niiden relevantin objektin alle. Ne molemmat toimivat täysin samalla tavalla.

## Käyttötapaukset numeroksi muuntamiselle

Merkkijonon muuttaminen numeroksi on erityisen hyödyllistä tilanteissa, joissa käyttäjän syöte tai dokumentin objektimallista (DOM) noudatettavat tiedot ovat merkkijonomuodossa mutta niitä on käsiteltävä numeerisesti. Esimerkiksi:

```js
let a = 10;
let b = "20"; // Aluksi merkkijono
b = Number.parseInt(b, 10); // Nyt muunnettu numeroksi
let summa = a + b; // Lisää oikein yhteen 30:een
```

`Number.parseInt()` -metodi yrittää muuntaa vastaanottamansa merkkijonon numeroksi. Kuten alla näet, se toimii useimmiten, kun merkkijono alkaa numerolla ja päättyy ei-numeerisiin arvoihin:

```js
Number.parseInt("123abc", 10); // 123
Number.parseInt("5 metriä", 10); // 5
```

## Numeroiden metodit

Vaikka numeroilla onkin joitain muita metodeja, niitä ei yleensä käytetä paljon. Sen sijaan yleisesti käytettyä on `Math`-objekti, joka sisältää metodeja kuten `min()`, `max()`, `round()`, jne.

## ParseInt() ja parseFloat()

`parseInt()` ja `parseFloat()` ovat molemmat JavaScript-funktioita, joita käytetään muuntamaan merkkijonoja numeroiksi, mutta ne käsittelevät muunnosta eri tavalla:

**parseInt():**

- Muuntaa merkkijonon kokonaisluvuksi.
- Analysoi ensimmäiseen ei-kokonaislukuarvoon asti. Jos merkkijono alkaa ei-kokonaislukuarvolla, se palauttaa NaN (Ei numeroa).
- Lukee vain kokonaislukuja; desimaalipisteet ja niitä seuraavat numerot jätetään huomiotta.
- Voi ottaa toisen argumentin kantaluvulle (perus) muutettavan numeron osalta (esim. perus 10 desimaalille, perus 16 heksadesimaalille).

```js
parseInt("123.456"); // Palauttaa 123
parseInt("abc123"); // Palauttaa NaN
```

**parseFloat()**

- Muuntaa merkkijonon liukuluvuksi (desimaaliluvuksi).
- Analysoi ensimmäiseen ei-numeeriseen merkkiin asti. Kuten parseInt(), se palauttaa NaN, jos merkkijono ei ala numeromerkkiä.
- Lukee ja sisältää desimaalipisteet ja niitä seuraavat numerot.

```js
parseFloat("123.456"); // Palauttaa 123.456
parseFloat("abc123"); // Palauttaa NaN
```

## Desimaalikohtien rajoittaminen JavaScriptissä

Desimaalikohtien määrän rajoittamiseksi JavaScriptissä voit käyttää toFixed() -metodia, joka muuntaa numeron merkkijonoksi halutulla desimaalien määrällä.

```js
let numero = 2.34567;
let rajoitettuNumero = numero.toFixed(2); // "2.35" merkkijonona

// Muunna takaisin numeroksi tarvittaessa
rajoitettuNumero = parseFloat(rajoitettuNumero); // 2.35 numerona
```

Tätä menetelmää on helppo käyttää ja erittäin hyödyllinen numeroiden muotoilussa näytettäväksi. Muista, että toFixed() palauttaa merkkijonon, joten saatat joutua muuntamaan sen takaisin numeroksi.

## JavaScript Math -objekti

JavaScriptin Math-objekti tarjoaa kokoelman ominaisuuksia ja metodeja matemaattisille vakioille ja funktioille. Toisin kuin muut globaalit objektit, Math ei ole konstruktori, ja kaikki Math-objektin ominaisuudet ja metodit ovat staattisia. Tämä tarkoittaa, että niitä voidaan kutsua luomatta Math-instanssia.

Yleisimmät Math-metodit:

- **Math.round(x):** Palauttaa x:n lähimmän kokonaisluvun.
- **Math.ceil(x):** Palauttaa pienimmän kokonaisluvun, joka on suurempi tai yhtä suuri kuin x.
- **Math.floor(x):** Palauttaa suurimman kokonaisluvun, joka on pienempi tai yhtä suuri kuin x.
- **Math.abs(x):** Palauttaa x:n itseisarvon.
- **Math.sqrt(x):** Palauttaa x:n neliöjuuren.
- **Math.pow(x, y):** Palauttaa x:n potenssiin y.
- **Math.min(…arvot):** Palauttaa siihen annetuista arvoista pienimmän.
- **Math.max(…arvot):** Palauttaa siihen annetuista arvoista suurimman.
- **Math.random():** Palauttaa pseudosatunnaisen numeron väliltä 0 ja 1.

```js
let num = -5.67;
let absoluuttinen = Math.abs(num); // 5.67
let pyöristetty = Math.round(num); // -6
let katto = Math.ceil(num); // -5
let lattia = Math.floor(num); // -6
```

## Indeksi alkaa nollasta!

Toisin kuin arkikielessä, JavaScriptin mukaan sanan ensimmäinen kirjain on 0. kirjain. Tämä ei ole mikään JS:n erikoisuus, vaan yleistä muissakin ohjelmointikielissä.

Sanan "esimerkki" kirjainten indeksiluvut on seuraavanlaisesti:

| Indeksi | 0   | 1   | 2   | 3   | 4   | 5   | 6   | 7   | 8   |
| ------- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Kirjain | e   | s   | i   | m   | e   | r   | k   | k   | i   |

Sanan viides kirjain on JavaScriptin mukaan kirjain "r".

Sama koskee myös taulukoita. Tauluko ["maitoa", "munia", "sokeria", "kanelia", "voita"] indeksit ovat:

| Indeksi | 0      | 1     | 2       | 3       | 4     |
| ------- | ------ | ----- | ------- | ------- | ----- |
| Sana    | maitoa | munia | sokeria | kanelia | voita |

Eli, jos halutaan taulukon kolmas arvo (sokeri), pyydetään toista.

Tätä päästään käyttämään myöhemmin, mutta mainitsin jo nyt, kerta numeroista puhutaan.
