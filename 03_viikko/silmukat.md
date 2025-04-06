# Silmukat

Silmukat ovat perustavanlaatuinen ohjelmointikäsite, joka mahdollistaa koodilohkon toistamisen useita kertoja. Ne ovat erityisen hyödyllisiä kokoelmien läpikäynnissä, tehtävien toistamisessa ja toistuvien prosessien automatisoinnissa.

## JavaScriptin silmukkatyypit

- `for` silmukka
- `while` silmukka
- `do...while` silmukka
- `for...in` silmukka
- `for...of` silmukka

## for-silmukka

`for`-silmukka on yksi yleisimmistä silmukoista. Sitä käytetään, kun tiedät etukäteen, kuinka monta kertaa haluat suorittaa koodilohkon.

```js
for (alustus; ehto; lisäys) {
  // Jokaisella iteraatiolla suoritettava koodi
}
```

```js
for (let i = 0; i < 5; i++) {
  console.log(i);
}
```

Silmukan alussa i = 0 ja silmukka toistuu niin kauan, kun i:n arvo on vähemmän kuin 5. Jokaisella kierroksella i:n arvoon lisätään 1.

## while-silmukka

`while`-silmukka jatkaa koodilohkon suorittamista niin kauan kuin määritetty ehto on tosi.

```js
while (ehto) {
  // Koodi, joka suoritetaan niin kauan kuin ehto on tosi
}
```

While-silmukan kanssa on yleensä aina käytössä apumuuttuja, joka tulee jokaisella kierroksella lähemmäs ehtoa. Yleensä apumuuttujan arvoa vähennetään yhdellä (++) tai vähennetään yhdellä (--).

```js
let i = 0; // Apumuuttuja
while (i < 5) {
  console.log(i);
  i++; // Muutos, joka tuo apumuuttujan lähemmäksi ehtoa
}
```

Silmukka toistuu niin kauan, kun i:n arvo on vähemmän kuin 5. Jokaisella kierroksella i:n arvoon lisätään 1.

## do-while-silmukka

`do-while`-silmukka on samanlainen kuin `while`-silmukka, mutta se varmistaa, että koodilohko suoritetaan ainakin kerran ennenkuin ehdon toteutumista edes tarkistetaan.

```js
do {
  // Suoritettava koodi
} while (ehto);
```

```js
let i = 0;
do {
  console.log(i);
  i++;
} while (i < 5);
```

Silmukka suorittaa koodilohkon kerran ja tarkistaa sitten onko i:n arvo vähemmän kuin 5. Silmukka toistuu niin kauan, kuin ehto on tosi, i:n arvo kasvaa jokaisella kierroksella yhdellä.

## for...in-silmukka

`for...in`-silmukkaa käytetään olion ominaisuuksien läpikäyntiin.Se käy läpi kaikki olion enumerointikelpoiset (_enumerable_) ominaisuudet.

```js
for (avain in objekti) {
  // Koodi, joka suoritetaan jokaiselle ominaisuudelle
}
```

```js
const henkilö = { nimi: "Alice", ikä: 25 };
for (let avain in henkilö) {
  console.log(`${avain}: ${henkilö[avain]}`);
}
```

Tämä silmukka käy läpi jokaisen ominaisuuden `henkilö`-oliossa ja tulostaa avain-arvo parit.

## for...of-silmukka

`for...of`-silmukka luo silmukan iteroitavien objektien (kuten taulukoiden, merkkijonojen) käsittelyyn. Se on yksinkertaisempi tapa käydä läpi taulukon arvot.

```js
for (muuttuja of iteroitava) {
  // Koodi, joka suoritetaan jokaiselle elementille
}
```

```js
let hedelmät = ["omena", "banaani", "päärynä"];
for (let hedelmä of hedelmät) {
  console.log(hedelmä);
}
```

Silmukka käy läpi jokaisen alkion `hedelmät`-taulukossa ja tulostaa ne.

## Silmukan hallintalausunnot

Näitä käytetään silmukan käyttäytymisen hallitsemiseen.

- **`break`**: Lopettaa silmukan kokonaan.

```JS
for (let i = 0; i < 10; i++) {
  if (i === 5) {
    break;
  }
  console.log(i);
}
```

- **`continue`**: Ohittaa nykyisen iteraation ja jatkaa seuraavaan.

```JS
for (let i = 0; i < 5; i++) {
  if (i === 2) {
    continue;
  }
  console.log(i);
}
```

## Ikuiset silmukat

Joskus saattaa tehdä vahingossa ikuisen silmukan, joka rikkoo koodin toiminnan. Jos ohjelma kaatuu silmukan lisäämisen jälkeen, kannattaa tarkistaa onhan ehdon täyttyminen ylipäätään mahdollista. Onko tarvetta lisätä ehtoon "tai yhtä suuri" eli **>=** tai **<=**.
Ja että **>** sekä **<** ovat ehdolauseessa oikein päin.

## Muita yleisiä virheitä

- `for...in`-silmukan väärinkäyttö taulukoiden kanssa: Vältä for...in-silmukan käyttöä taulukoille; käytä sen sijaan **for...of**-silmukkaa taulukon alkioiden läpikäymiseen.

- Muuttujien alustamatta jättäminen: Varmista, että silmukan muuttujat on alustettu oikein, jotta kooodi toimii odotetulla tavalla.
